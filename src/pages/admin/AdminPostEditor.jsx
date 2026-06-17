import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Font,
  Alignment,
  Link,
  List,
  BlockQuote,
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  Undo,
  GeneralHtmlSupport,
  Image,
  ImageToolbar,
  ImageCaption,
  ImageStyle,
  ImageResize,
  Heading,
  TableColumnResize,
  TableCaption,
  TableEditing,
  TableUI,
  PasteFromOffice,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

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

const AUTHORS = ["Administrator"];

const DEFAULT_FORM = {
  title: "",
  excerpt: "",
  content: "",
  category: "",
  author: AUTHORS[0],
  tags: [],
  thumbnail: "",
  featured: false,
  status: "draft",
  readTime: "5 phút",
  seoTitle: "",
  seoDesc: "",
};

const editorConfig = {
  licenseKey: "GPL",
  plugins: [
    Essentials,
    Paragraph,
    Heading,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Font,
    Alignment,
    Link,
    List,
    BlockQuote,
    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    Undo,
    GeneralHtmlSupport,
    Image,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageResize,
    TableColumnResize,
    TableCaption,
    TableEditing,
    TableUI,
    PasteFromOffice,
  ],

  toolbar: [
    "heading",
    "undo",
    "redo",
    "|",
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "|",
    "fontSize",
    "fontFamily",
    "fontColor",
    "fontBackgroundColor",
    "|",
    "alignment",
    "|",
    "bulletedList",
    "numberedList",
    "|",
    "insertTable",
    "link",
    "blockQuote",
    "imageStyle:inline",
    "imageStyle:block",
    "imageStyle:side",
    "|",
    "toggleImageCaption",
    "imageTextAlternative",
  ],

  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
      "tableCaption",
    ],

    tableProperties: {
      borderColors: true,
      backgroundColors: true,
    },

    tableCellProperties: {
      borderColors: [
        { color: "#A8171C", label: "Đỏ chủ đạo" },
        { color: "#1e3a5f", label: "Xanh navy" },
        { color: "#374151", label: "Xám đậm" },
        { color: "#D1D5DB", label: "Xám nhạt" },
        { color: "#1a1a1a", label: "Đen" },
        { color: "#ffffff", label: "Trắng", hasBorder: true },
      ],
      backgroundColors: [
        { color: "#FCA5A5", label: "Đỏ" },
        { color: "#FB923C", label: "Cam" },
        { color: "#FDE047", label: "Vàng" },
        { color: "#86EFAC", label: "Xanh lá" },
        { color: "#7DD3FC", label: "Xanh dương" },
        { color: "#818CF8", label: "Xanh tím" },
        { color: "#C084FC", label: "Tím" },
        { color: "#F9A8D4", label: "Hồng" },
        { color: "#D1D5DB", label: "Xám" },
        { color: "#F0EBE4", label: "Kem" },
        { color: "#ffffff", label: "Trắng", hasBorder: true },
        { color: "#1a1a1a", label: "Đen" },
      ],
    },
    // columnWidths: true,
  },

  // ← SỬA: disallow font-family, font-size, color từ paste
  htmlSupport: {
    allow: [{ name: /.*/, styles: true, attributes: true, classes: true }],
    disallow: [
      {
        name: /.*/,
        styles: ["font-family", "font-size", "mso-*"],
      },
    ],
  },

  heading: {
    options: [
      {
        model: "paragraph",
        title: "Paragraph",
        class: "ck-heading_paragraph",
      },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h3",
        title: "Heading 3",
        class: "ck-heading_heading3",
      },
    ],
  },

  fontColor: {
    colors: [
      // Màu chính của website
      { color: "#A8171C", label: "Đỏ chủ đạo" },
      { color: "#1e3a5f", label: "Xanh navy" },
      { color: "#0f5c3a", label: "Xanh lá" },
      { color: "#5c3a0f", label: "Nâu" },
      { color: "#2d5a27", label: "Xanh đậm" },
      { color: "#6b21a8", label: "Tím" },
      // Màu trung tính
      { color: "#1a1a1a", label: "Đen" },
      { color: "#374151", label: "Xám đậm" },
      { color: "#6b7280", label: "Xám" },
      { color: "#9ca3af", label: "Xám nhạt" },
      { color: "#ffffff", label: "Trắng", hasBorder: true },
      // Màu bổ sung
      { color: "#DC2626", label: "Đỏ" },
      { color: "#D97706", label: "Cam" },
      { color: "#16A34A", label: "Xanh lá sáng" },
      { color: "#2563EB", label: "Xanh dương" },
      { color: "#7C3AED", label: "Tím đậm" },
    ],
    columns: 5, // số cột hiển thị
    documentColors: 0, // ← ẩn "Document colors" (màu đã dùng trong doc)
  },
};

async function uploadToCloudinary(file) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", "law-phucgiauy/news");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    },
  );

  if (!res.ok) throw new Error("Upload thất bại");

  return (await res.json()).secure_url;
}

async function replaceBase64Images(html) {
  const parser = new DOMParser();

  const doc = parser.parseFromString(html, "text/html");

  const images = doc.querySelectorAll("img[src^='data:']");

  for (const img of images) {
    try {
      const res = await fetch(img.src);

      const blob = await res.blob();

      const file = new File([blob], "image.jpg", {
        type: blob.type,
      });

      const url = await uploadToCloudinary(file);

      img.src = url;
    } catch (err) {
      console.error("Lỗi upload ảnh base64:", err);
    }
  }

  return doc.body.innerHTML;
}

export default function AdminPostEditor() {
  const navigate = useNavigate();

  const { id } = useParams();

  const isEdit = Boolean(id);

  const editorRef = useRef(null);

  const thumbInput = useRef(null);

  const contentImgInput = useRef(null);

  const [form, setForm] = useState(DEFAULT_FORM);

  const [tagInput, setTagInput] = useState("");

  const [suggestedTags, setSuggestedTags] = useState([]);

  const [categories, setCategories] = useState(FALLBACK_CATEGORIES);

  const [thumbUploading, setThumbUploading] = useState(false);

  const [contentImgUploading, setContentImgUploading] = useState(false);

  const [saving, setSaving] = useState(false);

  const [saved, setSaved] = useState(false);

  const [loadingEdit, setLoadingEdit] = useState(false);

  const [createdId, setCreatedId] = useState(null);

  const [errors, setErrors] = useState({});

  const [activeTab, setActiveTab] = useState("content");

  useEffect(() => {
    getAllCategoriesAdmin()
      .then((cats) => {
        if (cats.length) {
          setCategories(cats);

          setForm((f) => {
            const validKeys = cats.map((c) => c.key);

            const isValid = f.category && validKeys.includes(f.category);

            return isValid ? f : { ...f, category: cats[0].key };
          });
        }
      })
      .catch((err) => console.error("Lỗi fetch categories:", err));

    getAllServicesAdmin()
      .then((services) => {
        const tags = [
          ...new Set(
            services.flatMap((s) => [
              s.name,
              ...s.name.split(/[\s&,/]+/).filter((w) => w.length >= 4),
            ]),
          ),
        ].sort();

        setSuggestedTags(tags);
      })
      .catch(() => {
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

  useEffect(() => {
    if (!isEdit) return;

    setLoadingEdit(true);

    getPostById(id)
      .then((data) => {
        const { id: _id, ...rest } = data;

        setForm((f) => ({
          ...f,
          ...rest,
        }));
      })
      .catch(() => alert("Lỗi khi tải bài viết."))
      .finally(() => setLoadingEdit(false));
  }, [isEdit, id]);

  const update = (field, val) => {
    setForm((f) => ({
      ...f,
      [field]: val,
    }));

    if (errors[field]) {
      setErrors((e) => ({
        ...e,
        [field]: "",
      }));
    }
  };

  const addTag = (tag) => {
    const t = tag.trim();

    if (t && !form.tags.includes(t)) {
      update("tags", [...form.tags, t]);
    }

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

    if (e.key === "Backspace" && !tagInput && form.tags.length) {
      update("tags", form.tags.slice(0, -1));
    }
  };

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
      alert("Upload ảnh thất bại.");
    } finally {
      setThumbUploading(false);
    }
  };

  const handleContentImgUpload = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setContentImgUploading(true);

    try {
      const url = await uploadToCloudinary(file);

      const editor = editorRef.current;

      if (editor) {
        const viewFragment = editor.data.processor.toView(
          `<p><img src="${url}" alt="image" /></p>`,
        );

        const modelFragment = editor.data.toModel(viewFragment);

        editor.model.insertContent(
          modelFragment,
          editor.model.document.selection,
        );

        update("content", editor.getData());
      }
    } catch (err) {
      console.error(err);

      alert("Upload ảnh thất bại.");
    } finally {
      setContentImgUploading(false);

      contentImgInput.current.value = "";
    }
  };

  const validate = (contentOverride) => {
    const e = {};

    if (!form.title.trim()) {
      e.title = "Vui lòng nhập tiêu đề bài viết";
    }

    if (!form.excerpt.trim()) {
      e.excerpt = "Vui lòng nhập mô tả ngắn";
    }

    const content = contentOverride ?? form.content;

    if (!content || content === "<p><br></p>") {
      e.content = "Vui lòng nhập nội dung bài viết";
    }

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  const handleSave = async (statusOverride) => {
    const liveContent = form.content;

    if (!validate(liveContent)) return;

    setSaving(true);

    const stripInlineStyles = (html) => {
      return html
        .replace(/style="([^"]*)"/gi, (match, styles) => {
          const cleaned = styles
            .split(";")
            .map((s) => s.trim())
            .filter((s) => {
              const prop = s.split(":")[0]?.trim().toLowerCase();
              const removeProps = [
                "font-family",
                "font-size",
                // "color",
                "mso-",
                "background-color",
              ];
              return s && !removeProps.some((r) => prop?.startsWith(r));
            })
            .join("; ")
            .trim();
          return cleaned ? `style="${cleaned}"` : "";
        })
        .replace(/<font[^>]*>(.*?)<\/font>/gi, "$1")
        .replace(/<span style="">(.*?)<\/span>/gi, "$1")
        .replace(/<span\s*>(.*?)<\/span>/gi, "$1");
    };

    let cleanContent = liveContent;

    if (liveContent.includes("data:image")) {
      try {
        cleanContent = await replaceBase64Images(liveContent);
      } catch (err) {
        console.error("Lỗi xử lý ảnh base64:", err);
      }
    }

    const catLabel =
      categories.find((c) => c.key === form.category)?.label || form.category;

    const payload = {
      ...form,
      content: cleanContent,
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

      if (statusOverride === "published") {
        navigate("/admin/posts");
      }
    } catch (err) {
      console.error(err);

      alert("Lưu thất bại.");
    } finally {
      setSaving(false);
    }
  };

  const wordCount = form.content
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

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
        <div
          style={{
            textAlign: "center",
            color: "#888",
          }}
        >
          <span
            className="ape-spinner"
            style={{
              width: 32,
              height: 32,
            }}
          />

          <p style={{ marginTop: 16 }}>Đang tải bài viết...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ape-root">
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
              className={`ape-status-opt ${
                form.status === "draft" ? "active" : ""
              }`}
              onClick={() => update("status", "draft")}
            >
              ✎ Nháp
            </button>

            <button
              className={`ape-status-opt ${
                form.status === "published" ? "active" : ""
              }`}
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

      <div className="ape-layout">
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

          {activeTab === "content" && (
            <div className="ape-content-tab">
              <div
                className={`ape-field ${
                  errors.title ? "ape-field--error" : ""
                }`}
              >
                <label className="ape-label">
                  Tiêu đề bài viết <span className="ape-required">*</span>
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => update("title", e.target.value)}
                  placeholder="Nhập tiêu đề..."
                  className="ape-input ape-input--title"
                />
              </div>

              <div
                className={`ape-field ${
                  errors.excerpt ? "ape-field--error" : ""
                }`}
              >
                <label className="ape-label">
                  Mô tả ngắn (excerpt) <span className="ape-required">*</span>
                </label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => update("excerpt", e.target.value)}
                  rows={3}
                  className="ape-textarea"
                />
              </div>

              <div
                className={`ape-field ape-field--editor ${
                  errors.content ? "ape-field--error" : ""
                }`}
              >
                <div className="ape-editor-label-row">
                  <label className="ape-label">Nội dung bài viết</label>

                  <div className="ape-editor-tools">
                    <button
                      type="button"
                      className="ape-img-insert-btn"
                      onClick={() => contentImgInput.current?.click()}
                    >
                      🖼 Chèn ảnh
                    </button>

                    <input
                      type="file"
                      ref={contentImgInput}
                      accept="image/*"
                      style={{
                        display: "none",
                      }}
                      onChange={handleContentImgUpload}
                    />

                    <span className="ape-word-count">{wordCount} từ</span>
                  </div>
                </div>

                <div className="ape-ckeditor">
                  <CKEditor
                    editor={ClassicEditor}
                    config={editorConfig}
                    data={form.content}
                    onReady={(editor) => {
                      editorRef.current = editor;
                      // Cho phép paste ảnh từ clipboard
                      editor.editing.view.document.on(
                        "clipboardInput",
                        (evt, data) => {
                          const files = Array.from(
                            data.dataTransfer?.files || [],
                          );
                          const imageFile = files.find((f) =>
                            f.type.startsWith("image/"),
                          );
                          if (!imageFile) return;

                          evt.stop();

                          uploadToCloudinary(imageFile)
                            .then((url) => {
                              const viewFragment = editor.data.processor.toView(
                                `<p><img src="${url}" alt="image" /></p>`,
                              );
                              const modelFragment =
                                editor.data.toModel(viewFragment);
                              editor.model.insertContent(
                                modelFragment,
                                editor.model.document.selection,
                              );
                              update("content", editor.getData());
                            })
                            .catch(() => alert("Upload ảnh thất bại."));
                        },
                      );
                      // Ẩn Border và Dimensions trong Cell properties bằng CSS inject
                      const style = document.createElement("style");
                      style.textContent = `
                        /* Ẩn section Border */
                        .ck-table-cell-properties-form .ck-form__row:has(
                          input[class*="border"]
                        ) { display: none !important; }

                        /* Ẩn label Border */
                        .ck-table-cell-properties-form > label:first-child,
                        .ck-table-cell-properties-form > .ck-label {
                          display: none !important;
                        }

                        /* Ẩn Dimensions (width, height, padding) */
                        .ck-table-cell-properties-form .ck-form__row:has(
                          [class*="width"], [class*="height"], [class*="padding"]
                        ) { display: none !important; }
                      `;
                      document.head.appendChild(style);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      update("content", data);
                    }}
                  />
                </div>

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
    </div>
  );
}
