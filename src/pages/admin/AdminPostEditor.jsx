import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "../../styles/adminPostEditor.css";
import {
  getPostById,
  createPost,
  updatePost,
  generateSlug,
} from "../../services/news";
import { getAllServicesAdmin } from "../../services/service";
import {
  getAllCategoriesAdmin,
  FALLBACK_CATEGORIES,
} from "../../services/categories";
import { CLOUD_NAME, UPLOAD_PRESET } from "../../cloudinary/config";
import Quill from "quill";

// ─── TABLE EMBED BLOT ────────────────────────────────────────────────────────
// Dùng BlockEmbed để Quill coi toàn bộ table là 1 khối nguyên tử,
// không can thiệp vào cấu trúc bên trong (không bị strip/reshape)
const BlockEmbed = Quill.import("blots/block/embed");

class TableEmbed extends BlockEmbed {}
TableEmbed.blotName = "table-embed";
TableEmbed.tagName = "div";
TableEmbed.className = "ql-table-wrapper";
TableEmbed.create = function (tableHtml) {
  const node = BlockEmbed.create.call(this);
  node.innerHTML = tableHtml;
  return node;
};
TableEmbed.value = function (node) {
  return node.innerHTML;
};

Quill.register("formats/table-embed", TableEmbed, true);

// ─── CONFIG ───────────────────────────────────────────────────────────────────
// Categories được fetch từ Firestore (xem useEffect bên dưới)

const AUTHORS = ["Administrator"];

// Tags được fetch từ collection services (xem useEffect bên dưới)

// ─── QUILL CONFIG ─────────────────────────────────────────────────────────────
const QUILL_MODULES = {
  toolbar: {
    container: [
      [{ header: [2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      ["blockquote", "code-block"],
      ["link"],
      ["clean"],
      ["undo", "redo"],
    ],
    handlers: {
      undo: function () {
        this.quill.history.undo();
      },
      redo: function () {
        this.quill.history.redo();
      },
      link: function (value) {
        if (value) {
          const quill = this.quill;
          const range = quill.getSelection();
          if (!range || range.length === 0) {
            alert("Vui lòng bôi đen chữ muốn gắn link trước.");
            return;
          }
          const url = prompt("Nhập URL (ví dụ: https://example.com):");
          if (url && url.trim()) {
            quill.format("link", url.trim());
          }
        } else {
          this.quill.format("link", false);
        }
      },
    },
    clipboard: {
      matchVisual: false,
      matchers: [
        [
          Node.ELEMENT_NODE,
          (node, delta) => {
            delta.ops = delta.ops.filter((op) => {
              if (
                typeof op.insert === "object" &&
                op.insert?.image?.startsWith?.("data:")
              ) {
                return false; // bỏ ảnh base64 khi paste
              }
              return true;
            });
            return delta;
          },
        ],
      ],
    },
  },
  history: {
    delay: 1000,
    maxStack: 100,
    userOnly: false,
  },
  clipboard: { matchVisual: false },
  keyboard: {
    bindings: {},
  },
};

const QUILL_FORMATS = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "list",
  "indent",
  "align",
  "blockquote",
  "code-block",
  "link",
  "image",
  "table-embed",
];

// ─── UPLOAD CLOUDINARY ────────────────────────────────────────────────────────
async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", "law-phucgiauy/news");
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData },
  );
  if (!res.ok) throw new Error("Upload thất bại");
  return (await res.json()).secure_url;
}

// ─── XỬ LÝ ẢNH BASE64 TRONG CONTENT ─────────────────────────────────────────
async function replaceBase64Images(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const images = doc.querySelectorAll("img[src^='data:']");

  for (const img of images) {
    try {
      const res = await fetch(img.src);
      const blob = await res.blob();
      const file = new File([blob], "image.jpg", { type: blob.type });
      const url = await uploadToCloudinary(file);
      img.src = url;
    } catch (err) {
      console.error("Lỗi upload ảnh base64:", err);
    }
  }
  return doc.body.innerHTML;
}

// ─── FORM DEFAULT ─────────────────────────────────────────────────────────────
const DEFAULT_FORM = {
  title: "",
  excerpt: "",
  content: "",
  category: "", // set sau khi fetch categories
  author: AUTHORS[0],
  tags: [],
  thumbnail: "",
  featured: false,
  status: "draft",
  readTime: "5 phút",
  seoTitle: "",
  seoDesc: "",
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AdminPostEditor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const quillRef = useRef(null);
  const thumbInput = useRef(null);
  const contentImgInput = useRef(null);

  // ── Table dialog ────────────────────────────────────────────────────────────
  const [showTableDialog, setShowTableDialog] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [tableHasHeader, setTableHasHeader] = useState(true);

  // ── Table context menu (thêm/xóa cột/hàng) ─────────────────────────────────
  const [tableMenu, setTableMenu] = useState({ visible: false, x: 0, y: 0 });
  const tableCellRef = useRef(null);
  const tableElRef = useRef(null);
  const tableMenuDivRef = useRef(null);

  // ── Table format bar (bold/italic/... trong ô bảng) ────────────────────────
  const [formatBar, setFormatBar] = useState({ visible: false, x: 0, y: 0 });
  const formatBarRef = useRef(null);
  const colorInputRef = useRef(null);
  const bgColorInputRef = useRef(null);
  const savedRangeRef = useRef(null);
  const savedCellRef = useRef(null);

  const handleInsertTable = () => {
    const editor = quillRef.current?.getEditor();
    if (!editor) return;

    // Build table HTML với style inline để viền luôn hiển thị
    // (BlockEmbed giữ nguyên innerHTML, không bị Quill can thiệp)
    const cellStyle =
      "border:1px solid #c8bfb5;padding:8px 10px;min-width:80px;vertical-align:top;";
    const thStyle =
      cellStyle + "background:#f0ebe4;font-weight:600;text-align:left;";
    const tableStyle =
      "border-collapse:collapse;width:100%;margin:12px 0;font-size:14px;";

    let tableHtml = `<table style="${tableStyle}"><tbody>`;
    for (let r = 0; r < tableRows; r++) {
      tableHtml += "<tr>";
      for (let c = 0; c < tableCols; c++) {
        if (tableHasHeader && r === 0) {
          tableHtml += `<th style="${thStyle}">Tiêu đề ${c + 1}</th>`;
        } else {
          tableHtml += `<td style="${cellStyle}">&nbsp;</td>`;
        }
      }
      tableHtml += "</tr>";
    }
    tableHtml += "</tbody></table>";

    // Chịn vị trí chèn và insertEmbed — Quill giữ nguyên HTML bạn truyền vào
    const range = editor.getSelection() || { index: editor.getLength() - 1 };
    editor.insertEmbed(range.index, "table-embed", tableHtml, "user");
    // Di chuyển con trỏ ra ngoài bảng (sau embed)
    editor.setSelection(range.index + 1, 0);

    setShowTableDialog(false);
  };

  // ── State ──────────────────────────────────────────────────────────────────
  const [form, setForm] = useState(DEFAULT_FORM);
  const [tagInput, setTagInput] = useState("");
  const [suggestedTags, setSuggestedTags] = useState([]);
  const [categories, setCategories] = useState(FALLBACK_CATEGORIES);
  const [thumbUploading, setThumbUploading] = useState(false);
  const [contentImgUploading, setContentImgUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [createdId, setCreatedId] = useState(null); // ID sau khi createPost lần đầu
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState("content");

  // ── Fetch suggested tags từ collection services ──────────────────────────────
  useEffect(() => {
    // Fetch categories từ Firestore
    getAllCategoriesAdmin()
      .then((cats) => {
        if (cats.length) {
          setCategories(cats);
          // Sau khi có danh sách thực từ Firestore:
          // nếu category hiện tại rỗng hoặc không nằm trong danh sách → dùng cái đầu tiên
          setForm((f) => {
            const validKeys = cats.map((c) => c.key);
            const isValid = f.category && validKeys.includes(f.category);
            return isValid ? f : { ...f, category: cats[0].key };
          });
        }
      })
      .catch((err) => console.error("Lỗi fetch categories:", err));

    // Fetch suggested tags từ services
    getAllServicesAdmin()
      .then((services) => {
        // Lấy tên dịch vụ làm tag gợi ý, loại trùng, sắp xếp theo alphabet
        const tags = [
          ...new Set(
            services.flatMap((s) => [
              s.name,
              // Tách từng từ có nghĩa từ tên dịch vụ (>= 4 ký tự)
              ...s.name.split(/[\s&,/]+/).filter((w) => w.length >= 4),
            ]),
          ),
        ].sort();
        setSuggestedTags(tags);
      })
      .catch(() => {
        // Fallback nếu Firestore lỗi
        setSuggestedTags([
          "Ly hôn",
          "Đất đai",
          "Doanh nghiệp",
          "Hình sự",
          "FDI",
          "Thừa kế",
          "Hợp đồng",
          "Giấy phép",
          "Bồi thường",
          "Nhãn hiệu",
        ]);
      });
  }, []);

  // ── Load bài viết khi edit ─────────────────────────────────────────────────
  useEffect(() => {
    if (!isEdit) return;
    setLoadingEdit(true);
    getPostById(id)
      .then((data) => {
        const { id: _id, ...rest } = data;
        setForm((f) => ({ ...f, ...rest }));
      })
      .catch(() => alert("Lỗi khi tải bài viết."))
      .finally(() => setLoadingEdit(false));
  }, [isEdit, id, navigate]);

  // ── Keyboard handler cho table cells (Enter = thêm dòng, Tab = next cell) ──
  useEffect(() => {
    const editor = quillRef.current?.getEditor();
    if (!editor) return;

    const root = editor.root;

    const handleTableKey = (e) => {
      const cell = e.target.closest?.("td, th");
      if (!cell) return; // không trong table → bỏ qua

      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        const row = cell.closest("tr");
        if (!row) return;
        const cols = row.querySelectorAll("td, th").length;
        const newRow = document.createElement("tr");
        for (let i = 0; i < cols; i++) {
          const td = document.createElement("td");
          td.setAttribute(
            "style",
            "border:1px solid #c8bfb5;padding:8px 10px;min-width:80px;vertical-align:top;",
          );
          td.innerHTML = "\u00a0";
          newRow.appendChild(td);
        }
        row.after(newRow);
        newRow.firstElementChild?.focus();
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        const table = cell.closest("table");
        if (!table) return;
        const cells = Array.from(table.querySelectorAll("td, th"));
        const idx = cells.indexOf(cell);
        if (idx < cells.length - 1) {
          cells[idx + 1].focus();
        } else {
          // Ô cuối → thêm dòng mới
          const row = cell.closest("tr");
          const cols = row.querySelectorAll("td, th").length;
          const newRow = document.createElement("tr");
          for (let i = 0; i < cols; i++) {
            const td = document.createElement("td");
            td.setAttribute(
              "style",
              "border:1px solid #c8bfb5;padding:8px 10px;min-width:80px;vertical-align:top;",
            );
            td.innerHTML = "\u00a0";
            newRow.appendChild(td);
          }
          row.after(newRow);
          newRow.firstElementChild?.focus();
        }
      }
    };

    root.addEventListener("keydown", handleTableKey, true);
    return () => root.removeEventListener("keydown", handleTableKey, true);
  }, []);

  // ── Detect chọn text trong ô → hiện format bar ─────────────────────────────
  useEffect(() => {
    const handleSel = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
        if (!formatBarRef.current?.matches(":focus-within")) {
          setFormatBar((f) => ({ ...f, visible: false }));
        }
        return;
      }
      const anchor = sel.anchorNode;
      const el = anchor instanceof Element ? anchor : anchor?.parentElement;
      const cell = el?.closest(".ql-table-wrapper td, .ql-table-wrapper th");
      if (cell) {
        savedCellRef.current = cell;
        const rect = sel.getRangeAt(0).getBoundingClientRect();
        setFormatBar({ visible: true, x: rect.left, y: rect.top - 46 });
        // Ẩn table context menu khi đang chọn text
        setTableMenu({ visible: false, x: 0, y: 0 });
      } else {
        setFormatBar((f) => ({ ...f, visible: false }));
      }
    };
    document.addEventListener("selectionchange", handleSel);
    return () => document.removeEventListener("selectionchange", handleSel);
  }, []);

  const applyFormat = (cmd, value) =>
    document.execCommand(cmd, false, value ?? null);

  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0)
      savedRangeRef.current = sel.getRangeAt(0).cloneRange();
  };

  const restoreSelection = () => {
    const sel = window.getSelection();
    if (savedRangeRef.current && sel) {
      sel.removeAllRanges();
      sel.addRange(savedRangeRef.current);
    }
  };

  // ── Click vào ô → hiện floating menu thêm/xóa cột/hàng ─────────────────────
  useEffect(() => {
    const handleDocMouseDown = (e) => {
      // Giữ menu nếu đang click vào chính menu
      if (tableMenuDivRef.current?.contains(e.target)) return;

      const cell = e.target.closest?.(
        ".ql-table-wrapper td, .ql-table-wrapper th",
      );
      if (cell) {
        tableCellRef.current = cell;
        tableElRef.current = cell.closest("table");
        const rect = cell.getBoundingClientRect();
        setTableMenu({
          visible: true,
          x: rect.left + window.scrollX,
          y: rect.bottom + window.scrollY + 4,
        });
      } else {
        setTableMenu({ visible: false, x: 0, y: 0 });
      }
    };
    document.addEventListener("mousedown", handleDocMouseDown);
    return () => document.removeEventListener("mousedown", handleDocMouseDown);
  }, []);

  // ── Helpers inline style cho ô bảng ──────────────────────────────────────
  const TCELL =
    "border:1px solid #c8bfb5;padding:8px 10px;min-width:80px;vertical-align:top;";
  const THEAD = TCELL + "background:#f0ebe4;font-weight:600;text-align:left;";

  const makeCell = (isHeader) => {
    const el = document.createElement(isHeader ? "th" : "td");
    el.setAttribute("style", isHeader ? THEAD : TCELL);
    el.innerHTML = "\u00a0";
    return el;
  };

  // Đảm bảo hàng đầu tiên luôn là th+màu nền, các hàng còn lại là td thường
  const syncTableHeader = (table) => {
    if (!table) return;
    table.querySelectorAll("tr").forEach((row, rIdx) => {
      row.querySelectorAll("td, th").forEach((cell) => {
        if (rIdx === 0) {
          if (cell.tagName === "TD") {
            const th = document.createElement("th");
            th.setAttribute("style", THEAD);
            th.innerHTML = cell.innerHTML;
            cell.replaceWith(th);
          } else {
            cell.setAttribute("style", THEAD);
          }
        } else {
          if (cell.tagName === "TH") {
            const td = document.createElement("td");
            td.setAttribute("style", TCELL);
            td.innerHTML = cell.innerHTML;
            cell.replaceWith(td);
          }
        }
      });
    });
  };

  const tableAddColRight = () => {
    const cell = tableCellRef.current;
    const table = tableElRef.current;
    if (!cell || !table) return;
    const colIdx = Array.from(
      cell.closest("tr").querySelectorAll("td, th"),
    ).indexOf(cell);
    table.querySelectorAll("tr").forEach((row) => {
      const cells = row.querySelectorAll("td, th");
      const newCell = makeCell(false);
      const ref = cells[colIdx];
      if (ref) ref.after(newCell);
      else row.appendChild(newCell);
    });
    syncTableHeader(table);
    setTableMenu({ visible: false, x: 0, y: 0 });
  };

  const tableAddColLeft = () => {
    const cell = tableCellRef.current;
    const table = tableElRef.current;
    if (!cell || !table) return;
    const colIdx = Array.from(
      cell.closest("tr").querySelectorAll("td, th"),
    ).indexOf(cell);
    table.querySelectorAll("tr").forEach((row) => {
      const cells = row.querySelectorAll("td, th");
      const newCell = makeCell(false);
      const ref = cells[colIdx];
      if (ref) row.insertBefore(newCell, ref);
      else row.appendChild(newCell);
    });
    syncTableHeader(table);
    setTableMenu({ visible: false, x: 0, y: 0 });
  };

  const tableAddRowBelow = () => {
    const cell = tableCellRef.current;
    const table = tableElRef.current;
    if (!cell) return;
    const row = cell.closest("tr");
    const cols = row.querySelectorAll("td, th").length;
    const newRow = document.createElement("tr");
    for (let i = 0; i < cols; i++) newRow.appendChild(makeCell(false));
    row.after(newRow);
    syncTableHeader(table);
    setTableMenu({ visible: false, x: 0, y: 0 });
  };

  const tableAddRowAbove = () => {
    const cell = tableCellRef.current;
    const table = tableElRef.current;
    if (!cell) return;
    const row = cell.closest("tr");
    const cols = row.querySelectorAll("td, th").length;
    const newRow = document.createElement("tr");
    for (let i = 0; i < cols; i++) newRow.appendChild(makeCell(false));
    row.before(newRow);
    syncTableHeader(table);
    setTableMenu({ visible: false, x: 0, y: 0 });
  };

  const tableDeleteRow = () => {
    const cell = tableCellRef.current;
    const table = tableElRef.current;
    if (!cell || !table) return;
    if (table.querySelectorAll("tr").length <= 1) return; // ít nhất 1 hàng
    cell.closest("tr").remove();
    syncTableHeader(table);
    setTableMenu({ visible: false, x: 0, y: 0 });
  };

  const tableDeleteCol = () => {
    const cell = tableCellRef.current;
    const table = tableElRef.current;
    if (!cell || !table) return;
    const colIdx = Array.from(
      cell.closest("tr").querySelectorAll("td, th"),
    ).indexOf(cell);
    const firstRow = table.querySelector("tr");
    if (firstRow?.querySelectorAll("td, th").length <= 1) return; // ít nhất 1 cột
    table.querySelectorAll("tr").forEach((row) => {
      row.querySelectorAll("td, th")[colIdx]?.remove();
    });
    syncTableHeader(table);
    setTableMenu({ visible: false, x: 0, y: 0 });
  };

  // ── Helpers ────────────────────────────────────────────────────────────────
  const update = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  // ── Tags ───────────────────────────────────────────────────────────────────
  const addTag = (tag) => {
    const t = tag.trim();
    if (t && !form.tags.includes(t)) update("tags", [...form.tags, t]);
    setTagInput("");
  };
  const removeTag = (t) =>
    update(
      "tags",
      form.tags.filter((x) => x !== t),
    );
  const onTagKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(tagInput);
    }
    if (e.key === "Backspace" && !tagInput && form.tags.length)
      update("tags", form.tags.slice(0, -1));
  };

  // ── Upload thumbnail ───────────────────────────────────────────────────────
  const handleThumbUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("Ảnh tối đa 5MB");
      return;
    }
    setThumbUploading(true);
    try {
      update("thumbnail", await uploadToCloudinary(file));
    } catch {
      alert("Upload ảnh thất bại. Kiểm tra lại Cloudinary config.");
    } finally {
      setThumbUploading(false);
    }
  };

  // ── Upload ảnh vào nội dung ────────────────────────────────────────────────
  const handleContentImgUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setContentImgUploading(true);
    try {
      const url = await uploadToCloudinary(file);
      const editor = quillRef.current?.getEditor();
      if (editor) {
        const range = editor.getSelection(true);
        editor.insertEmbed(range.index, "image", url);
        editor.setSelection(range.index + 1);
      }
    } catch {
      alert("Upload ảnh thất bại.");
    } finally {
      setContentImgUploading(false);
      contentImgInput.current.value = "";
    }
  };

  // ── Validate ───────────────────────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Vui lòng nhập tiêu đề bài viết";
    if (!form.excerpt.trim()) e.excerpt = "Vui lòng nhập mô tả ngắn";
    if (!form.content || form.content === "<p><br></p>")
      e.content = "Vui lòng nhập nội dung bài viết";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ── Save → Firestore ───────────────────────────────────────────────────────
  const handleSave = async (statusOverride) => {
    if (!validate()) return;
    setSaving(true);

    // ── Xử lý ảnh base64 trong content trước khi lưu ──────────────────────────
    let cleanContent = form.content;
    if (form.content.includes("data:image")) {
      try {
        cleanContent = await replaceBase64Images(form.content);
        setForm((f) => ({ ...f, content: cleanContent }));
      } catch (err) {
        console.error("Lỗi xử lý ảnh base64:", err);
      }
    }

    const catLabel =
      categories.find((c) => c.key === form.category)?.label || form.category;
    const payload = {
      ...form,
      content: cleanContent, // ← dùng content đã xử lý
      status: statusOverride || form.status,
      categoryLabel: catLabel,
      slug: generateSlug(form.title),
    };

    try {
      if (isEdit) {
        await updatePost(id, payload);
      } else if (createdId) {
        await updatePost(createdId, payload);
      } else {
        const newId = await createPost(payload);
        setCreatedId(newId);
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      if (statusOverride === "published") navigate("/admin/posts");
    } catch (err) {
      console.error(err);
      alert("Lưu thất bại. Vui lòng thử lại.");
    } finally {
      setSaving(false);
    }
  };

  const wordCount = form.content
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  // ── Loading khi đang fetch bài edit ───────────────────────────────────────
  if (loadingEdit) {
    return (
      <div
        className="ape-root"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 400,
        }}
      >
        <div style={{ textAlign: "center", color: "#888" }}>
          <span className="ape-spinner" style={{ width: 32, height: 32 }} />
          <p style={{ marginTop: 16 }}>Đang tải bài viết...</p>
        </div>
      </div>
    );
  }

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div className="ape-root">
      {/* ── TOPBAR ── */}
      <div className="ape-topbar">
        <div className="ape-topbar-left">
          <button
            className="ape-back-btn"
            onClick={() => navigate("/admin/posts")}
          >
            ← Quay lại
          </button>
          <div className="ape-topbar-info">
            <h1 className="ape-topbar-title">
              {isEdit ? "Chỉnh sửa bài viết" : "Viết bài mới"}
            </h1>
            {saved && <span className="ape-saved-badge">✓ Đã lưu</span>}
          </div>
        </div>
        <div className="ape-topbar-actions">
          <div className="ape-status-toggle">
            <button
              className={`ape-status-opt ${form.status === "draft" ? "active" : ""}`}
              onClick={() => update("status", "draft")}
            >
              ✎ Nháp
            </button>
            <button
              className={`ape-status-opt ${form.status === "published" ? "active" : ""}`}
              onClick={() => update("status", "published")}
            >
              ✓ Đăng
            </button>
          </div>
          <button
            className="ape-save-btn ape-save-btn--ghost"
            onClick={() => handleSave("draft")}
            disabled={saving}
          >
            {saving ? <span className="ape-spinner" /> : "Lưu nháp"}
          </button>
          <button
            className="ape-save-btn ape-save-btn--primary"
            onClick={() => handleSave("published")}
            disabled={saving}
          >
            {saving ? <span className="ape-spinner" /> : "Đăng bài"}
          </button>
        </div>
      </div>

      {/* ── LAYOUT ── */}
      <div className="ape-layout">
        {/* ── MAIN ── */}
        <div className="ape-main">
          <div className="ape-tabs">
            <button
              className={`ape-tab ${activeTab === "content" ? "active" : ""}`}
              onClick={() => setActiveTab("content")}
            >
              📝 Nội dung
            </button>
            <button
              className={`ape-tab ${activeTab === "seo" ? "active" : ""}`}
              onClick={() => setActiveTab("seo")}
            >
              🔍 SEO
            </button>
          </div>

          {/* ── TAB NỘI DUNG ── */}
          {activeTab === "content" && (
            <div className="ape-content-tab">
              {/* Tiêu đề */}
              <div
                className={`ape-field ${errors.title ? "ape-field--error" : ""}`}
              >
                <label className="ape-label">
                  Tiêu đề bài viết <span className="ape-required">*</span>
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => update("title", e.target.value)}
                  placeholder="Nhập tiêu đề bài viết..."
                  className="ape-input ape-input--title"
                  maxLength={120}
                />
                <div className="ape-field-footer">
                  {errors.title ? (
                    <span className="ape-error-msg">{errors.title}</span>
                  ) : (
                    <span className="ape-char-count">
                      {form.title.length}/120 ký tự
                    </span>
                  )}
                </div>
              </div>

              {/* Mô tả ngắn */}
              <div
                className={`ape-field ${errors.excerpt ? "ape-field--error" : ""}`}
              >
                <label className="ape-label">
                  Mô tả ngắn (excerpt) <span className="ape-required">*</span>
                </label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => update("excerpt", e.target.value)}
                  placeholder="Tóm tắt nội dung bài viết, hiển thị ở danh sách tin tức..."
                  rows={3}
                  className="ape-textarea"
                  maxLength={300}
                />
                <div className="ape-field-footer">
                  {errors.excerpt ? (
                    <span className="ape-error-msg">{errors.excerpt}</span>
                  ) : (
                    <span className="ape-char-count">
                      {form.excerpt.length}/300 ký tự
                    </span>
                  )}
                </div>
              </div>

              {/* Rich text editor */}
              <div
                className={`ape-field ape-field--editor ${errors.content ? "ape-field--error" : ""}`}
              >
                <div className="ape-editor-label-row">
                  <label className="ape-label">
                    Nội dung bài viết <span className="ape-required">*</span>
                  </label>
                  <div className="ape-editor-tools">
                    <button
                      type="button"
                      className="ape-img-insert-btn"
                      onClick={() => setShowTableDialog(true)}
                    >
                      📊 Chèn bảng
                    </button>
                    <button
                      type="button"
                      className="ape-img-insert-btn"
                      onClick={() => contentImgInput.current?.click()}
                      disabled={contentImgUploading}
                    >
                      {contentImgUploading ? (
                        <>
                          <span className="ape-spinner ape-spinner--sm" /> Đang
                          upload...
                        </>
                      ) : (
                        <>🖼 Chèn ảnh từ máy</>
                      )}
                    </button>
                    <input
                      type="file"
                      ref={contentImgInput}
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleContentImgUpload}
                    />
                    <span className="ape-word-count">{wordCount} từ</span>
                  </div>
                </div>
                <ReactQuill
                  ref={quillRef}
                  value={form.content}
                  onChange={(val) => update("content", val)}
                  modules={QUILL_MODULES}
                  formats={QUILL_FORMATS}
                  placeholder="Bắt đầu soạn thảo nội dung bài viết..."
                  className="ape-quill"
                  theme="snow"
                />
                {errors.content && (
                  <span className="ape-error-msg">{errors.content}</span>
                )}
              </div>
            </div>
          )}

          {/* ── TAB SEO ── */}
          {activeTab === "seo" && (
            <div className="ape-seo-tab">
              <div className="ape-seo-info">
                <span>🔍</span>
                <p>
                  Tối ưu SEO giúp bài viết xuất hiện cao hơn trên Google. Để
                  trống sẽ dùng tiêu đề và mô tả ngắn của bài.
                </p>
              </div>

              <div className="ape-field">
                <label className="ape-label">SEO Title</label>
                <input
                  type="text"
                  value={form.seoTitle}
                  onChange={(e) => update("seoTitle", e.target.value)}
                  placeholder={form.title || "Tiêu đề hiển thị trên Google..."}
                  className="ape-input"
                  maxLength={60}
                />
                <div className="ape-field-footer">
                  <span
                    className={`ape-char-count ${form.seoTitle.length > 55 ? "warn" : ""}`}
                  >
                    {form.seoTitle.length}/60 ký tự
                    {form.seoTitle.length > 55 && " — Nên giữ dưới 55 ký tự"}
                  </span>
                </div>
                <div className="ape-seo-bar">
                  <div
                    className="ape-seo-bar-fill"
                    style={{
                      width: `${Math.min(100, (form.seoTitle.length / 60) * 100)}%`,
                      background:
                        form.seoTitle.length > 55 ? "#DC2626" : "#16A34A",
                    }}
                  />
                </div>
              </div>

              <div className="ape-field">
                <label className="ape-label">SEO Description</label>
                <textarea
                  value={form.seoDesc}
                  onChange={(e) => update("seoDesc", e.target.value)}
                  placeholder={
                    form.excerpt || "Mô tả hiển thị dưới tiêu đề trên Google..."
                  }
                  rows={3}
                  className="ape-textarea"
                  maxLength={160}
                />
                <div className="ape-field-footer">
                  <span
                    className={`ape-char-count ${form.seoDesc.length > 150 ? "warn" : ""}`}
                  >
                    {form.seoDesc.length}/160 ký tự
                    {form.seoDesc.length > 150 && " — Nên giữ dưới 150 ký tự"}
                  </span>
                </div>
                <div className="ape-seo-bar">
                  <div
                    className="ape-seo-bar-fill"
                    style={{
                      width: `${Math.min(100, (form.seoDesc.length / 160) * 100)}%`,
                      background:
                        form.seoDesc.length > 150 ? "#DC2626" : "#16A34A",
                    }}
                  />
                </div>
              </div>

              {/* Google Preview */}
              <div className="ape-google-preview">
                <div className="ape-gp-label">Xem trước trên Google</div>
                <div className="ape-gp-box">
                  <div className="ape-gp-url">
                    luatphucgiauy.vn {">"} tin-tuc
                  </div>
                  <div className="ape-gp-title">
                    {form.seoTitle || form.title || "Tiêu đề bài viết"}
                  </div>
                  <div className="ape-gp-desc">
                    {form.seoDesc ||
                      form.excerpt ||
                      "Mô tả ngắn bài viết sẽ hiển thị ở đây..."}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── SIDEBAR ── */}
        <aside className="ape-sidebar">
          {/* Xuất bản */}
          <div className="ape-sidebar-block">
            <div className="ape-sidebar-title">Xuất bản</div>
            <div className="ape-publish-row">
              <span className="ape-publish-label">Trạng thái</span>
              <span
                className={`ape-publish-status ape-publish-status--${form.status}`}
              >
                {form.status === "published" ? "✓ Đã đăng" : "✎ Bản nháp"}
              </span>
            </div>
            <div className="ape-toggle-row">
              <div>
                <div className="ape-toggle-label">Bài viết nổi bật</div>
                <div className="ape-toggle-sub">Hiển thị ở vị trí nổi bật</div>
              </div>
              <button
                className={`ape-toggle-btn ${form.featured ? "on" : "off"}`}
                onClick={() => update("featured", !form.featured)}
              >
                <span className="ape-toggle-knob" />
              </button>
            </div>
            {/* Thời gian đọc */}
            <div className="ape-field ape-field--sm" style={{ marginTop: 12 }}>
              <label className="ape-label">Thời gian đọc</label>
              <input
                type="text"
                value={form.readTime}
                onChange={(e) => update("readTime", e.target.value)}
                placeholder="5 phút"
                className="ape-input"
              />
            </div>
          </div>

          {/* Thumbnail */}
          <div className="ape-sidebar-block">
            <div className="ape-sidebar-title">Ảnh đại diện bài</div>
            {form.thumbnail ? (
              <div className="ape-thumb-preview">
                <img src={form.thumbnail} alt="Thumbnail" />
                <div className="ape-thumb-overlay">
                  <button
                    className="ape-thumb-change"
                    onClick={() => thumbInput.current?.click()}
                    disabled={thumbUploading}
                  >
                    {thumbUploading ? "Đang upload..." : "🔄 Đổi ảnh"}
                  </button>
                  <button
                    className="ape-thumb-remove"
                    onClick={() => update("thumbnail", "")}
                  >
                    🗑 Xóa
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="ape-thumb-upload"
                onClick={() => !thumbUploading && thumbInput.current?.click()}
              >
                {thumbUploading ? (
                  <>
                    <span className="ape-spinner" />
                    <span>Đang upload...</span>
                  </>
                ) : (
                  <>
                    <span className="ape-thumb-icon">🖼</span>
                    <span className="ape-thumb-text">Nhấn để chọn ảnh</span>
                    <span className="ape-thumb-hint">
                      JPG, PNG · Tối đa 5MB
                    </span>
                  </>
                )}
              </div>
            )}
            <input
              type="file"
              ref={thumbInput}
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleThumbUpload}
            />
          </div>

          {/* Danh mục + Tác giả */}
          <div className="ape-sidebar-block">
            <div className="ape-sidebar-title">Phân loại</div>
            <div className="ape-field ape-field--sm">
              <label className="ape-label">Danh mục</label>
              <select
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                className="ape-select"
              >
                {categories.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="ape-field ape-field--sm">
              <label className="ape-label">Tác giả</label>
              {/* <select
                value={form.author}
                onChange={(e) => update("author", e.target.value)}
                className="ape-select"
                disabled={true}
              >
                {AUTHORS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select> */}
              <input
                type="text"
                value={form.author}
                onChange={(e) => update("author", e.target.value)}
                placeholder="Tên tác giả"
                className="ape-input"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="ape-sidebar-block">
            <div className="ape-sidebar-title">Tags</div>
            <div className="ape-tags-input-wrap">
              {form.tags.map((t) => (
                <span key={t} className="ape-tag">
                  {t}
                  <button
                    onClick={() => removeTag(t)}
                    className="ape-tag-remove"
                  >
                    ✕
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={onTagKeyDown}
                placeholder={form.tags.length ? "" : "Thêm tag..."}
                className="ape-tag-input"
              />
            </div>
            <p className="ape-tag-hint">Nhấn Enter hoặc dấu phẩy để thêm tag</p>
            <div className="ape-suggested-tags">
              {suggestedTags
                .filter((t) => !form.tags.includes(t))
                .slice(0, 10)
                .map((t) => (
                  <button
                    key={t}
                    className="ape-suggest-tag"
                    onClick={() => addTag(t)}
                  >
                    + {t}
                  </button>
                ))}
            </div>
          </div>

          {/* Save buttons */}
          <div className="ape-sidebar-save">
            <button
              className="ape-save-btn ape-save-btn--ghost ape-save-btn--full"
              onClick={() => handleSave("draft")}
              disabled={saving}
            >
              {saving ? (
                <>
                  <span className="ape-spinner ape-spinner--sm" /> Đang lưu...
                </>
              ) : (
                "Lưu nháp"
              )}
            </button>
            <button
              className="ape-save-btn ape-save-btn--primary ape-save-btn--full"
              onClick={() => handleSave("published")}
              disabled={saving}
            >
              {saving ? (
                <>
                  <span className="ape-spinner ape-spinner--sm" /> Đang đăng...
                </>
              ) : (
                "✓ Đăng bài"
              )}
            </button>
          </div>
        </aside>
      </div>

      {/* ── TABLE FORMAT BAR ── */}
      {formatBar.visible && (
        <div
          ref={formatBarRef}
          className="ape-format-bar"
          style={{ top: formatBar.y, left: formatBar.x }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <button
            title="Đậm (Ctrl+B)"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat("bold");
            }}
          >
            <b>B</b>
          </button>
          <button
            title="Nghiêng (Ctrl+I)"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat("italic");
            }}
          >
            <i>I</i>
          </button>
          <button
            title="Gạch chân (Ctrl+U)"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat("underline");
            }}
          >
            <u>U</u>
          </button>
          <button
            title="Gạch ngang"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat("strikethrough");
            }}
          >
            <s>S</s>
          </button>
          <div className="ape-format-bar-sep" />
          <button
            title="Màu chữ"
            className="ape-format-bar-color-btn"
            onMouseDown={(e) => {
              e.preventDefault();
              saveSelection();
            }}
          >
            A
            <input
              ref={colorInputRef}
              type="color"
              defaultValue="#c0392b"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                opacity: 0,
                cursor: "pointer",
                border: "none",
                padding: 0,
              }}
              onChange={(e) => {
                restoreSelection();
                applyFormat("foreColor", e.target.value);
              }}
            />
          </button>
          <button
            title="Tô màu nền ô"
            className="ape-format-bar-bg-btn"
            onMouseDown={(e) => {
              e.preventDefault();
              saveSelection();
            }}
          >
            ■
            <input
              ref={bgColorInputRef}
              type="color"
              defaultValue="#fff3cd"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                opacity: 0,
                cursor: "pointer",
                border: "none",
                padding: 0,
              }}
              onChange={(e) => {
                // Tô màu nền của ô (td/th), không phải text highlight
                const cell = savedCellRef.current;
                if (cell) cell.style.backgroundColor = e.target.value;
              }}
            />
          </button>
          <button
            title="Xóa định dạng"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat("removeFormat");
            }}
          >
            T̲
          </button>
        </div>
      )}

      {/* ── TABLE CONTEXT MENU ── */}
      {tableMenu.visible && (
        <div
          ref={tableMenuDivRef}
          className="ape-table-menu"
          style={{ top: tableMenu.y, left: tableMenu.x }}
        >
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              tableAddColLeft();
            }}
          >
            ← Cột trái
          </button>
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              tableAddColRight();
            }}
          >
            → Cột phải
          </button>
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              tableAddRowAbove();
            }}
          >
            ↑ Hàng trên
          </button>
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              tableAddRowBelow();
            }}
          >
            ↓ Hàng dưới
          </button>
          <div className="ape-table-menu-sep" />
          <button
            className="ape-table-menu-del"
            onMouseDown={(e) => {
              e.preventDefault();
              tableDeleteCol();
            }}
          >
            ✕ Xóa cột
          </button>
          <button
            className="ape-table-menu-del"
            onMouseDown={(e) => {
              e.preventDefault();
              tableDeleteRow();
            }}
          >
            ✕ Xóa hàng
          </button>
        </div>
      )}

      {/* ── TABLE DIALOG ── */}
      {showTableDialog && (
        <div
          className="ape-table-dialog-overlay"
          onClick={() => setShowTableDialog(false)}
        >
          <div
            className="ape-table-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="ape-table-dialog-title">📊 Chèn bảng</div>
            <div className="ape-table-dialog-row">
              <label>Số hàng</label>
              <input
                type="number"
                min={1}
                max={20}
                value={tableRows}
                onChange={(e) =>
                  setTableRows(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="ape-table-dialog-input"
              />
            </div>
            <div className="ape-table-dialog-row">
              <label>Số cột</label>
              <input
                type="number"
                min={1}
                max={10}
                value={tableCols}
                onChange={(e) =>
                  setTableCols(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="ape-table-dialog-input"
              />
            </div>
            <div className="ape-table-dialog-row">
              <label>Có hàng tiêu đề (header)</label>
              <input
                type="checkbox"
                checked={tableHasHeader}
                onChange={(e) => setTableHasHeader(e.target.checked)}
                style={{ width: "auto", cursor: "pointer" }}
              />
            </div>
            <div className="ape-table-dialog-actions">
              <button
                className="ape-save-btn ape-save-btn--ghost"
                onClick={() => setShowTableDialog(false)}
              >
                Hủy
              </button>
              <button
                className="ape-save-btn ape-save-btn--primary"
                onClick={handleInsertTable}
              >
                Chèn bảng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
