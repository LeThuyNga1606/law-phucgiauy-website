import { useState, useEffect } from "react";
import "../../styles/adminServices.css";
import {
  getAllServicesAdmin,
  createService,
  updateService,
  deleteService,
  toggleServiceActive,
} from "../../services/service";
import {
  getAllCategoriesAdmin,
  FALLBACK_CATEGORIES,
} from "../../services/categories";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
// Categories được fetch từ Firestore trong useEffect

const ICON_OPTIONS = [
  "⚖️",
  "🏠",
  "📜",
  "🔒",
  "🛡️",
  "🏢",
  "📋",
  "🌏",
  "📄",
  "💼",
  "🤝",
  "📊",
  "🔍",
  "✍️",
  "🏛️",
];

const EMPTY_FORM = {
  name: "",
  desc: "",
  icon: "⚖️",
  category: "dan-su",
  categoryLabel: "Dân sự",
  active: true,
  order: 1,
};

// ─── SKELETON CARD ────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="as-card">
      <div className="as-card-top">
        <div
          className="skeleton-box"
          style={{ width: 40, height: 40, borderRadius: 8 }}
        />
      </div>
      <div
        className="skeleton-line"
        style={{ width: "70%", marginBottom: 8 }}
      />
      <div
        className="skeleton-line skeleton-line--sm"
        style={{ marginBottom: 4 }}
      />
      <div
        className="skeleton-line skeleton-line--sm"
        style={{ width: "60%" }}
      />
    </div>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([
    { key: "all", label: "Tất cả" },
    ...FALLBACK_CATEGORIES,
  ]);
  const [saving, setSaving] = useState(false);
  const [catFilter, setCatFilter] = useState("all");
  const [modal, setModal] = useState(null); // null | { mode: 'add'|'edit', id? }
  const [deleteModal, setDeleteModal] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  // ── Fetch từ Firestore ────────────────────────────────────────────────────
  const loadServices = async () => {
    setLoading(true);
    try {
      const [svcs, cats] = await Promise.all([
        getAllServicesAdmin(),
        getAllCategoriesAdmin(),
      ]);
      setServices(svcs);
      if (cats.length)
        setCategories([{ key: "all", label: "Tất cả" }, ...cats]);
    } catch (err) {
      console.error("loadServices:", err);
      showToast("Không thể tải dữ liệu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
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
    if (!form.name.trim()) e.name = "Vui lòng nhập tên dịch vụ";
    if (!form.desc.trim()) e.desc = "Vui lòng nhập mô tả";
    setErrors(e);
    return !Object.keys(e).length;
  };

  // ── Mở modal ─────────────────────────────────────────────────────────────
  const openAdd = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setModal({ mode: "add" });
  };

  const openEdit = (s) => {
    setForm({
      name: s.name,
      desc: s.desc,
      icon: s.icon,
      category: s.category,
      categoryLabel: s.categoryLabel,
      active: s.active,
      order: s.order,
    });
    setErrors({});
    setModal({ mode: "edit", id: s.id });
  };

  // ── Lưu (thêm mới / cập nhật) ────────────────────────────────────────────
  const handleSave = async () => {
    if (!validate()) return;
    setSaving(true);
    const catLabel =
      categories.find((c) => c.key === form.category)?.label || "";
    const payload = { ...form, categoryLabel: catLabel };

    try {
      if (modal.mode === "add") {
        const newId = await createService(payload);
        setServices((s) => [...s, { id: newId, ...payload }]);
        showToast("Đã thêm dịch vụ mới.");
      } else {
        await updateService(modal.id, payload);
        setServices((s) =>
          s.map((x) => (x.id === modal.id ? { ...x, ...payload } : x)),
        );
        showToast("Đã cập nhật dịch vụ.");
      }
      setModal(null);
    } catch (err) {
      console.error("handleSave:", err);
      showToast("Lưu thất bại. Vui lòng thử lại.");
    } finally {
      setSaving(false);
    }
  };

  // ── Xóa ──────────────────────────────────────────────────────────────────
  const handleDelete = async () => {
    try {
      await deleteService(deleteModal.id);
      setServices((s) => s.filter((x) => x.id !== deleteModal.id));
      showToast("Đã xóa dịch vụ.");
    } catch {
      showToast("Xóa thất bại. Vui lòng thử lại.");
    } finally {
      setDeleteModal(null);
    }
  };

  // ── Toggle active ─────────────────────────────────────────────────────────
  const toggleActive = async (s) => {
    try {
      const newVal = !s.active;
      await toggleServiceActive(s.id, s.active);
      setServices((prev) =>
        prev.map((x) => (x.id === s.id ? { ...x, active: newVal } : x)),
      );
      showToast(newVal ? "Đã bật hiển thị." : "Đã ẩn dịch vụ.");
    } catch {
      showToast("Cập nhật thất bại.");
    }
  };

  // ── Filter + group ────────────────────────────────────────────────────────
  const filtered =
    catFilter === "all"
      ? services
      : services.filter((s) => s.category === catFilter);

  const grouped = categories
    .filter((c) => c.key !== "all")
    .map((cat) => ({
      ...cat,
      items: filtered.filter((s) => s.category === cat.key),
    }))
    .filter((g) => g.items.length > 0);

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div className="as-root">
      {/* ── HEADER ── */}
      <div className="as-header">
        <div>
          <h1 className="as-title">Quản lý dịch vụ</h1>
          <p className="as-subtitle">
            {loading
              ? "Đang tải..."
              : `${services.length} dịch vụ · ${services.filter((s) => s.active).length} đang hiển thị`}
          </p>
        </div>
        <button className="as-add-btn" onClick={openAdd}>
          + Thêm dịch vụ
        </button>
      </div>

      {/* ── FILTER TABS ── */}
      <div className="as-filter-tabs">
        {categories.map((c) => (
          <button
            key={c.key}
            className={`as-filter-tab ${catFilter === c.key ? "active" : ""}`}
            onClick={() => setCatFilter(c.key)}
          >
            {c.label}
            {c.key !== "all" && (
              <span className="as-filter-count">
                {services.filter((s) => s.category === c.key).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── CONTENT ── */}
      {loading ? (
        // Skeleton
        <div className="as-groups">
          {["Dân sự", "Hình sự", "Doanh nghiệp"].map((g) => (
            <div key={g} className="as-group">
              <div className="as-group-header">
                <div
                  className="skeleton-line skeleton-line--sm"
                  style={{ width: 80 }}
                />
              </div>
              <div className="as-grid">
                {Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : grouped.length === 0 ? (
        <div className="as-empty">
          <div className="as-empty-icon">📋</div>
          <h3>Chưa có dịch vụ nào</h3>
          <button className="as-empty-btn" onClick={openAdd}>
            + Thêm dịch vụ đầu tiên
          </button>
        </div>
      ) : (
        <div className="as-groups">
          {grouped.map((group) => (
            <div key={group.key} className="as-group">
              <div className="as-group-header">
                <span className="as-group-title">{group.label}</span>
                <span className="as-group-count">
                  {group.items.length} dịch vụ
                </span>
              </div>
              <div className="as-grid">
                {group.items.map((s) => (
                  <div
                    key={s.id}
                    className={`as-card ${!s.active ? "as-card--inactive" : ""}`}
                  >
                    <div className="as-card-top">
                      <div className="as-card-icon">{s.icon}</div>
                      <div className="as-card-actions">
                        <button
                          className={`as-toggle ${s.active ? "on" : "off"}`}
                          onClick={() => toggleActive(s)}
                          title={
                            s.active
                              ? "Đang hiển thị — nhấn để ẩn"
                              : "Đang ẩn — nhấn để hiển thị"
                          }
                        >
                          <span className="as-toggle-knob" />
                        </button>
                        <button
                          className="as-icon-btn as-icon-btn--edit"
                          onClick={() => openEdit(s)}
                          title="Sửa"
                        >
                          ✎
                        </button>
                        <button
                          className="as-icon-btn as-icon-btn--del"
                          onClick={() => setDeleteModal(s)}
                          title="Xóa"
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                    <h3 className="as-card-name">{s.name}</h3>
                    <p className="as-card-desc">{s.desc}</p>
                    <div className="as-card-footer">
                      <span className={`as-status ${s.active ? "on" : "off"}`}>
                        {s.active ? "● Hiển thị" : "○ Đang ẩn"}
                      </span>
                      <span className="as-order">Thứ tự: {s.order}</span>
                    </div>
                  </div>
                ))}
                <button className="as-add-card" onClick={openAdd}>
                  <span className="as-add-card-icon">+</span>
                  <span>Thêm dịch vụ</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── MODAL THÊM / SỬA ── */}
      {modal && (
        <div className="as-overlay" onClick={() => setModal(null)}>
          <div className="as-modal" onClick={(e) => e.stopPropagation()}>
            <div className="as-modal-header">
              <h3>
                {modal.mode === "add"
                  ? "➕ Thêm dịch vụ mới"
                  : "✎ Chỉnh sửa dịch vụ"}
              </h3>
              <button className="as-modal-close" onClick={() => setModal(null)}>
                ✕
              </button>
            </div>
            <div className="as-modal-body">
              {/* Icon picker */}
              <div className="as-field">
                <label className="as-label">Biểu tượng (icon)</label>
                <div className="as-icon-picker">
                  {ICON_OPTIONS.map((ic) => (
                    <button
                      key={ic}
                      className={`as-icon-opt ${form.icon === ic ? "active" : ""}`}
                      onClick={() => update("icon", ic)}
                    >
                      {ic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tên dịch vụ */}
              <div
                className={`as-field ${errors.name ? "as-field--error" : ""}`}
              >
                <label className="as-label">
                  Tên dịch vụ <span className="as-req">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="VD: Tư vấn ly hôn & hôn nhân gia đình"
                  className="as-input"
                />
                {errors.name && <span className="as-error">{errors.name}</span>}
              </div>

              {/* Mô tả */}
              <div
                className={`as-field ${errors.desc ? "as-field--error" : ""}`}
              >
                <label className="as-label">
                  Mô tả ngắn <span className="as-req">*</span>
                </label>
                <textarea
                  value={form.desc}
                  onChange={(e) => update("desc", e.target.value)}
                  placeholder="Mô tả ngắn gọn về dịch vụ..."
                  rows={3}
                  className="as-textarea"
                />
                {errors.desc && <span className="as-error">{errors.desc}</span>}
              </div>

              {/* Danh mục + Thứ tự */}
              <div className="as-field-row">
                <div className="as-field">
                  <label className="as-label">Danh mục</label>
                  <select
                    value={form.category}
                    onChange={(e) => update("category", e.target.value)}
                    className="as-select"
                  >
                    {categories
                      .filter((c) => c.key !== "all")
                      .map((c) => (
                        <option key={c.key} value={c.key}>
                          {c.label}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="as-field">
                  <label className="as-label">Thứ tự hiển thị</label>
                  <input
                    type="number"
                    value={form.order}
                    onChange={(e) => update("order", Number(e.target.value))}
                    min={1}
                    max={99}
                    className="as-input"
                  />
                </div>
              </div>

              {/* Trạng thái */}
              <div className="as-field">
                <label className="as-label">Trạng thái</label>
                <div className="as-radio-group">
                  <label className={`as-radio ${form.active ? "active" : ""}`}>
                    <input
                      type="radio"
                      checked={form.active}
                      onChange={() => update("active", true)}
                    />
                    <span>● Hiển thị trên website</span>
                  </label>
                  <label className={`as-radio ${!form.active ? "active" : ""}`}>
                    <input
                      type="radio"
                      checked={!form.active}
                      onChange={() => update("active", false)}
                    />
                    <span>○ Ẩn tạm thời</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="as-modal-footer">
              <button
                className="as-btn as-btn--ghost"
                onClick={() => setModal(null)}
              >
                Hủy
              </button>
              <button
                className="as-btn as-btn--primary"
                onClick={handleSave}
                disabled={saving}
              >
                {saving
                  ? "Đang lưu..."
                  : modal.mode === "add"
                    ? "Thêm dịch vụ"
                    : "Lưu thay đổi"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL XÓA ── */}
      {deleteModal && (
        <div className="as-overlay" onClick={() => setDeleteModal(null)}>
          <div
            className="as-modal as-modal--sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="as-del-icon">🗑️</div>
            <h3 className="as-del-title">Xác nhận xóa dịch vụ</h3>
            <p className="as-del-desc">
              Bạn có chắc muốn xóa dịch vụ
              <br />
              <strong>"{deleteModal.name}"</strong>?
            </p>
            <p className="as-del-warn">⚠ Hành động này không thể hoàn tác.</p>
            <div className="as-modal-footer">
              <button
                className="as-btn as-btn--ghost"
                onClick={() => setDeleteModal(null)}
              >
                Hủy
              </button>
              <button className="as-btn as-btn--danger" onClick={handleDelete}>
                Xóa dịch vụ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── TOAST ── */}
      {toast && (
        <div className="as-toast">
          <span>✓</span> {toast}
        </div>
      )}
    </div>
  );
}
