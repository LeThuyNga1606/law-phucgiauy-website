import { useState, useEffect } from "react";
import "../../styles/adminCategories.css";
import {
  getAllCategoriesAdmin,
  createCategory,
  updateCategory,
  deleteCategory,
  toggleCategoryActive,
} from "../../services/categories";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const COLOR_OPTIONS = [
  "#A8171C",
  "#1e3a5f",
  "#0f5c3a",
  "#5c3a0f",
  "#2d5a27",
  "#6b21a8",
  "#0369a1",
  "#b45309",
  "#be185d",
  "#334155",
];

const EMPTY_FORM = {
  key: "",
  label: "",
  color: "#A8171C",
  order: 1,
  active: true,
};

// ─── SKELETON ─────────────────────────────────────────────────────────────────
function SkeletonRow() {
  return (
    <tr className="ac-row">
      {[80, 60, 50, 40, 60, 50].map((w, i) => (
        <td key={i}>
          <div className="skeleton-line" style={{ width: w }} />
        </td>
      ))}
    </tr>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState(null); // null | { mode: 'add'|'edit', id? }
  const [deleteModal, setDeleteModal] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  // ── Fetch ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    setLoading(true);
    getAllCategoriesAdmin()
      .then(setCategories)
      .finally(() => setLoading(false));
  }, []);

  // ── Helpers ───────────────────────────────────────────────────────────────
  const update = (f, v) => {
    setForm((p) => ({ ...p, [f]: v }));
    setErrors((e) => ({ ...e, [f]: "" }));
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const validate = () => {
    const e = {};
    if (!form.key.trim()) e.key = "Vui lòng nhập key (không dấu, không cách)";
    if (!form.label.trim()) e.label = "Vui lòng nhập tên hiển thị";
    // Kiểm tra key trùng khi thêm mới
    if (
      modal?.mode === "add" &&
      categories.some((c) => c.key === form.key.trim())
    )
      e.key = "Key này đã tồn tại";
    setErrors(e);
    return !Object.keys(e).length;
  };

  // ── CRUD ──────────────────────────────────────────────────────────────────
  const openAdd = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setModal({ mode: "add" });
  };

  const openEdit = (c) => {
    setForm({
      key: c.key,
      label: c.label,
      color: c.color,
      order: c.order,
      active: c.active,
    });
    setErrors({});
    setModal({ mode: "edit", id: c.id });
  };

  const handleSave = async () => {
    if (!validate()) return;
    setSaving(true);
    const payload = {
      ...form,
      key: form.key.trim().toLowerCase().replace(/\s+/g, "-"),
    };
    try {
      if (modal.mode === "add") {
        const newId = await createCategory(payload);
        setCategories((c) => [...c, { id: newId, ...payload }]);
        showToast("Đã thêm chuyên mục.");
      } else {
        await updateCategory(modal.id, payload);
        setCategories((c) =>
          c.map((x) => (x.id === modal.id ? { ...x, ...payload } : x)),
        );
        showToast("Đã cập nhật chuyên mục.");
      }
      setModal(null);
    } catch {
      showToast("Lưu thất bại. Vui lòng thử lại.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCategory(deleteModal.id);
      setCategories((c) => c.filter((x) => x.id !== deleteModal.id));
      showToast("Đã xóa chuyên mục.");
    } catch {
      showToast("Xóa thất bại.");
    } finally {
      setDeleteModal(null);
    }
  };

  const handleToggle = async (cat) => {
    try {
      const newVal = await toggleCategoryActive(cat.id, cat.active);
      setCategories((c) =>
        c.map((x) => (x.id === cat.id ? { ...x, active: newVal } : x)),
      );
      showToast(newVal ? "Đã bật hiển thị." : "Đã ẩn chuyên mục.");
    } catch {
      showToast("Cập nhật thất bại.");
    }
  };

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div className="ac-root">
      {/* ── HEADER ── */}
      <div className="ac-header">
        <div>
          <h1 className="ac-title">Quản lý chuyên mục</h1>
          <p className="ac-subtitle">
            {loading
              ? "Đang tải..."
              : `${categories.length} chuyên mục · ${categories.filter((c) => c.active).length} đang hiển thị`}
          </p>
        </div>
        <button className="ac-add-btn" onClick={openAdd}>
          + Thêm chuyên mục
        </button>
      </div>

      {/* ── INFO BOX ── */}
      <div className="ac-info">
        <span>💡</span>
        <p>
          Chuyên mục được dùng chung cho <strong>bài viết tin tức</strong> và{" "}
          <strong>dịch vụ</strong>. Thêm chuyên mục ở đây sẽ tự động xuất hiện
          trong dropdown khi viết bài và quản lý dịch vụ.
        </p>
      </div>

      {/* ── TABLE ── */}
      <div className="ac-table-wrap">
        <table className="ac-table">
          <thead>
            <tr>
              <th>Màu</th>
              <th>Key</th>
              <th>Tên hiển thị</th>
              <th>Thứ tự</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
            ) : categories.length === 0 ? (
              <tr>
                <td colSpan={6} className="ac-empty-cell">
                  Chưa có chuyên mục nào.
                  <button className="ac-empty-link" onClick={openAdd}>
                    Thêm ngay →
                  </button>
                </td>
              </tr>
            ) : (
              categories.map((cat) => (
                <tr
                  key={cat.id}
                  className={`ac-row ${!cat.active ? "ac-row--inactive" : ""}`}
                >
                  <td>
                    <div
                      className="ac-color-dot"
                      style={{ background: cat.color }}
                    />
                  </td>
                  <td>
                    <code className="ac-key">{cat.key}</code>
                  </td>
                  <td className="ac-td-label">
                    <span
                      className="ac-badge"
                      style={{ background: cat.color }}
                    >
                      {cat.label}
                    </span>
                  </td>
                  <td className="ac-td-muted">{cat.order}</td>
                  <td>
                    <button
                      className={`ac-toggle ${cat.active ? "on" : "off"}`}
                      onClick={() => handleToggle(cat)}
                    >
                      <span className="ac-toggle-knob" />
                      <span className="ac-toggle-label">
                        {cat.active ? "Hiển thị" : "Đã ẩn"}
                      </span>
                    </button>
                  </td>
                  <td>
                    <div className="ac-actions">
                      <button
                        className="ac-btn-icon ac-btn-icon--edit"
                        onClick={() => openEdit(cat)}
                        title="Sửa"
                      >
                        ✎
                      </button>
                      <button
                        className="ac-btn-icon ac-btn-icon--del"
                        onClick={() => setDeleteModal(cat)}
                        title="Xóa"
                      >
                        🗑
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ── MODAL THÊM / SỬA ── */}
      {modal && (
        <div className="ac-overlay" onClick={() => setModal(null)}>
          <div className="ac-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ac-modal-header">
              <h3>
                {modal.mode === "add"
                  ? "➕ Thêm chuyên mục"
                  : "✎ Chỉnh sửa chuyên mục"}
              </h3>
              <button className="ac-modal-close" onClick={() => setModal(null)}>
                ✕
              </button>
            </div>
            <div className="ac-modal-body">
              {/* Key */}
              <div
                className={`ac-field ${errors.key ? "ac-field--error" : ""}`}
              >
                <label className="ac-label">
                  Key <span className="ac-req">*</span>
                  <span className="ac-label-hint">
                    — dùng trong URL và code, không dấu, không cách
                  </span>
                </label>
                <input
                  type="text"
                  value={form.key}
                  onChange={(e) =>
                    update(
                      "key",
                      e.target.value
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, ""),
                    )
                  }
                  placeholder="vd: dan-su, hinh-su, dau-tu"
                  className="ac-input"
                  disabled={modal.mode === "edit"}
                />
                {errors.key && <span className="ac-error">{errors.key}</span>}
                {modal.mode === "edit" && (
                  <span className="ac-hint">
                    ⚠ Không thể đổi key sau khi tạo (ảnh hưởng URL)
                  </span>
                )}
              </div>

              {/* Tên hiển thị */}
              <div
                className={`ac-field ${errors.label ? "ac-field--error" : ""}`}
              >
                <label className="ac-label">
                  Tên hiển thị <span className="ac-req">*</span>
                </label>
                <input
                  type="text"
                  value={form.label}
                  onChange={(e) => update("label", e.target.value)}
                  placeholder="vd: Dân sự, Hình sự, Đầu tư - FDI"
                  className="ac-input"
                />
                {errors.label && (
                  <span className="ac-error">{errors.label}</span>
                )}
              </div>

              {/* Màu + Thứ tự */}
              <div className="ac-field-row">
                <div className="ac-field">
                  <label className="ac-label">Màu nhận diện</label>
                  <div className="ac-color-picker">
                    {COLOR_OPTIONS.map((c) => (
                      <button
                        key={c}
                        className={`ac-color-opt ${form.color === c ? "active" : ""}`}
                        style={{ background: c }}
                        onClick={() => update("color", c)}
                      />
                    ))}
                    <input
                      type="color"
                      value={form.color}
                      onChange={(e) => update("color", e.target.value)}
                      className="ac-color-custom"
                      title="Chọn màu tùy chỉnh"
                    />
                  </div>
                  <div className="ac-color-preview">
                    <span
                      className="ac-badge"
                      style={{ background: form.color }}
                    >
                      {form.label || "Xem trước"}
                    </span>
                  </div>
                </div>
                <div className="ac-field">
                  <label className="ac-label">Thứ tự</label>
                  <input
                    type="number"
                    value={form.order}
                    min={1}
                    max={99}
                    onChange={(e) => update("order", Number(e.target.value))}
                    className="ac-input"
                  />
                </div>
              </div>

              {/* Trạng thái */}
              <div className="ac-field">
                <label className="ac-label">Trạng thái</label>
                <div className="ac-radio-group">
                  <label className={`ac-radio ${form.active ? "active" : ""}`}>
                    <input
                      type="radio"
                      checked={form.active}
                      onChange={() => update("active", true)}
                    />
                    <span>● Hiển thị</span>
                  </label>
                  <label className={`ac-radio ${!form.active ? "active" : ""}`}>
                    <input
                      type="radio"
                      checked={!form.active}
                      onChange={() => update("active", false)}
                    />
                    <span>○ Ẩn</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="ac-modal-footer">
              <button
                className="ac-btn ac-btn--ghost"
                onClick={() => setModal(null)}
              >
                Hủy
              </button>
              <button
                className="ac-btn ac-btn--primary"
                onClick={handleSave}
                disabled={saving}
              >
                {saving
                  ? "Đang lưu..."
                  : modal.mode === "add"
                    ? "Thêm chuyên mục"
                    : "Lưu thay đổi"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL XÓA ── */}
      {deleteModal && (
        <div className="ac-overlay" onClick={() => setDeleteModal(null)}>
          <div
            className="ac-modal ac-modal--sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="ac-del-icon">🗑️</div>
            <h3 className="ac-del-title">Xóa chuyên mục</h3>
            <p className="ac-del-desc">
              Bạn có chắc muốn xóa chuyên mục{" "}
              <strong>"{deleteModal.label}"</strong>?
            </p>
            <p className="ac-del-warn">
              ⚠ Các bài viết và dịch vụ thuộc chuyên mục này sẽ không bị xóa
              nhưng có thể hiển thị sai category.
            </p>
            <div className="ac-modal-footer">
              <button
                className="ac-btn ac-btn--ghost"
                onClick={() => setDeleteModal(null)}
              >
                Hủy
              </button>
              <button className="ac-btn ac-btn--danger" onClick={handleDelete}>
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── TOAST ── */}
      {toast && (
        <div className="ac-toast">
          <span>✓</span> {toast}
        </div>
      )}
    </div>
  );
}
