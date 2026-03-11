import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "../../styles/adminPostEditor.css";

// ─── CLOUDINARY CONFIG ────────────────────────────────────────────────────────
// Thay bằng thông tin thật từ Cloudinary Dashboard
const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "your-cloud-name";
const CLOUDINARY_UPLOAD_PRESET =
  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET ||
  "law-phucgiauy-website-preset";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const CATEGORIES = [
  { key: "civil", label: "Dân sự" },
  { key: "criminal", label: "Hình sự" },
  { key: "investment", label: "Đầu tư - FDI" },
  { key: "enterprise", label: "Doanh nghiệp" },
  { key: "license", label: "Giấy phép" },
  { key: "news", label: "Tin pháp luật" },
];

const AUTHORS = [
  "LS. Nguyễn Văn A",
  "LS. Trần Thị B",
  "LS. Lê Văn C",
  "LS. Phạm Thị D",
];

const SUGGESTED_TAGS = [
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
  "Lao động",
  "Thuế",
  "Bảo hiểm",
  "Tố tụng",
  "Trọng tài",
];

// ─── QUILL TOOLBAR CONFIG ─────────────────────────────────────────────────────
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
      ["link", "image"],
      ["clean"],
    ],
  },
  clipboard: { matchVisual: false },
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
];
// ─── UPLOAD ẢNH LÊN CLOUDINARY ────────────────────────────────────────────────
async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", "law-phucgiauy/news");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData },
  );
  if (!res.ok) throw new Error("Upload thất bại");
  const data = await res.json();
  return data.secure_url;
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AdminPostEditor() {
  const navigate = useNavigate();
  const { id } = useParams(); // có id = đang edit, không có = tạo mới
  const isEdit = Boolean(id);
  const quillRef = useRef(null);
  const thumbInput = useRef(null);
  const contentImgInput = useRef(null);

  // ── Form state ──
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "civil",
    author: AUTHORS[0],
    tags: [],
    thumbnail: "",
    featured: false,
    status: "draft",
    seoTitle: "",
    seoDesc: "",
  });

  const [tagInput, setTagInput] = useState("");
  const [thumbUploading, setThumbUploading] = useState(false);
  const [contentImgUploading, setContentImgUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState("content"); // content | seo

  // Load data nếu đang edit (Phase 3: fetch từ Firestore)
  useEffect(() => {
    if (isEdit) {
      // TODO Phase 3: getDoc(doc(db, "posts", id)).then(snap => setForm(snap.data()))
      setForm((f) => ({
        ...f,
        title:
          "Những quy định mới nhất về thủ tục ly hôn theo Luật Hôn nhân và Gia đình 2024",
        excerpt:
          "Luật Hôn nhân và Gia đình sửa đổi năm 2024 đã có nhiều thay đổi quan trọng...",
        category: "civil",
        status: "published",
        featured: true,
        tags: ["Ly hôn", "Hôn nhân gia đình", "2024"],
      }));
    }
  }, [isEdit, id]);

  const update = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  // ── Tags ──
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

  // ── Upload thumbnail ──
  const handleThumbUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("Ảnh tối đa 5MB");
      return;
    }
    setThumbUploading(true);
    try {
      const url = await uploadToCloudinary(file);
      update("thumbnail", url);
    } catch {
      alert("Upload ảnh thất bại. Kiểm tra lại Cloudinary config.");
    } finally {
      setThumbUploading(false);
    }
  };

  // ── Upload ảnh vào nội dung bài viết ──
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

  // ── Validate ──
  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Vui lòng nhập tiêu đề bài viết";
    if (!form.excerpt.trim()) e.excerpt = "Vui lòng nhập mô tả ngắn";
    if (!form.content || form.content === "<p><br></p>")
      e.content = "Vui lòng nhập nội dung bài viết";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ── Save ──
  const handleSave = async (statusOverride) => {
    if (!validate()) return;
    setSaving(true);
    const payload = {
      ...form,
      status: statusOverride || form.status,
      slug: form.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-"),
      updatedAt: new Date().toISOString(),
      ...(!isEdit && { createdAt: new Date().toISOString(), views: 0 }),
    };

    try {
      // TODO Phase 3:
      // if (isEdit) await updateDoc(doc(db, "posts", id), payload);
      // else        await addDoc(collection(db, "posts"), payload);
      await new Promise((r) => setTimeout(r, 800)); // giả lập delay
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      if (statusOverride === "published") navigate("/admin/posts");
    } catch {
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
          {/* Status toggle */}
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
          {/* Tabs */}
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
                    {/* Upload ảnh vào nội dung */}
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
                {/* Preview bar */}
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
                  <div className="ape-gp-url">phucgiauy.vn › tin-tuc</div>
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
          {/* Trạng thái + Nổi bật */}
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
                {CATEGORIES.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="ape-field ape-field--sm">
              <label className="ape-label">Tác giả</label>
              <select
                value={form.author}
                onChange={(e) => update("author", e.target.value)}
                className="ape-select"
              >
                {AUTHORS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
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

            {/* Suggested tags */}
            <div className="ape-suggested-tags">
              {SUGGESTED_TAGS.filter((t) => !form.tags.includes(t))
                .slice(0, 8)
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
