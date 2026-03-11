import { useState } from "react";
import "../../styles/adminServices.css";

// ─── DATA (Phase 3: thay bằng Firestore) ─────────────────────────────────────
const INITIAL_SERVICES = [
  {
    id: 1,
    category: "dan-su",
    categoryLabel: "Dân sự",
    name: "Tư vấn ly hôn & hôn nhân gia đình",
    desc: "Hỗ trợ thủ tục ly hôn thuận tình, ly hôn đơn phương, phân chia tài sản và quyền nuôi con.",
    icon: "⚖️",
    active: true,
    order: 1,
  },
  {
    id: 2,
    category: "dan-su",
    categoryLabel: "Dân sự",
    name: "Tranh chấp đất đai & bất động sản",
    desc: "Giải quyết các tranh chấp về quyền sử dụng đất, ranh giới đất, hợp đồng mua bán bất động sản.",
    icon: "🏠",
    active: true,
    order: 2,
  },
  {
    id: 3,
    category: "dan-su",
    categoryLabel: "Dân sự",
    name: "Tư vấn thừa kế & di chúc",
    desc: "Hỗ trợ lập di chúc hợp pháp, giải quyết tranh chấp thừa kế, phân chia tài sản thừa kế.",
    icon: "📜",
    active: true,
    order: 3,
  },
  {
    id: 4,
    category: "hinh-su",
    categoryLabel: "Hình sự",
    name: "Bào chữa hình sự",
    desc: "Bào chữa cho bị can, bị cáo trong các vụ án hình sự, bảo vệ quyền lợi hợp pháp tối đa.",
    icon: "🔒",
    active: true,
    order: 1,
  },
  {
    id: 5,
    category: "hinh-su",
    categoryLabel: "Hình sự",
    name: "Bảo vệ quyền lợi bị hại",
    desc: "Đại diện cho người bị hại trong quá trình tố tụng, yêu cầu bồi thường thiệt hại.",
    icon: "🛡️",
    active: true,
    order: 2,
  },
  {
    id: 6,
    category: "doanh-nghiep",
    categoryLabel: "Doanh nghiệp",
    name: "Thành lập & giải thể doanh nghiệp",
    desc: "Hỗ trợ thủ tục thành lập công ty TNHH, cổ phần, hộ kinh doanh và giải thể doanh nghiệp.",
    icon: "🏢",
    active: true,
    order: 1,
  },
  {
    id: 7,
    category: "doanh-nghiep",
    categoryLabel: "Doanh nghiệp",
    name: "Tư vấn hợp đồng thương mại",
    desc: "Soạn thảo, rà soát và tư vấn các loại hợp đồng thương mại, hợp đồng lao động.",
    icon: "📋",
    active: false,
    order: 2,
  },
  {
    id: 8,
    category: "dau-tu",
    categoryLabel: "Đầu tư - FDI",
    name: "Tư vấn đầu tư nước ngoài (FDI)",
    desc: "Hỗ trợ nhà đầu tư nước ngoài xin cấp giấy chứng nhận đăng ký đầu tư, thành lập pháp nhân.",
    icon: "🌏",
    active: true,
    order: 1,
  },
  {
    id: 9,
    category: "giay-phep",
    categoryLabel: "Giấy phép",
    name: "Xin giấy phép kinh doanh có điều kiện",
    desc: "Tư vấn và hỗ trợ xin các loại giấy phép kinh doanh có điều kiện theo quy định pháp luật.",
    icon: "📄",
    active: true,
    order: 1,
  },
];

const CATEGORIES = [
  { key: "all", label: "Tất cả" },
  { key: "dan-su", label: "Dân sự" },
  { key: "hinh-su", label: "Hình sự" },
  { key: "doanh-nghiep", label: "Doanh nghiệp" },
  { key: "dau-tu", label: "Đầu tư - FDI" },
  { key: "giay-phep", label: "Giấy phép" },
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

export default function AdminServices() {
  const [services, setServices] = useState(INITIAL_SERVICES);
  const [catFilter, setCatFilter] = useState("all");
  const [modal, setModal] = useState(null); // null | { mode: 'add'|'edit', data }
  const [deleteModal, setDeleteModal] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const filtered =
    catFilter === "all"
      ? services
      : services.filter((s) => s.category === catFilter);

  const update = (f, v) => {
    setForm((p) => ({ ...p, [f]: v }));
    setErrors((e) => ({ ...e, [f]: "" }));
  };

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

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Vui lòng nhập tên dịch vụ";
    if (!form.desc.trim()) e.desc = "Vui lòng nhập mô tả";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSave = () => {
    if (!validate()) return;
    const catLabel =
      CATEGORIES.find((c) => c.key === form.category)?.label || "";
    if (modal.mode === "add") {
      const newItem = { ...form, categoryLabel: catLabel, id: Date.now() };
      setServices((s) => [...s, newItem]);
      showToast("Đã thêm dịch vụ mới.");
    } else {
      setServices((s) =>
        s.map((x) =>
          x.id === modal.id ? { ...x, ...form, categoryLabel: catLabel } : x,
        ),
      );
      showToast("Đã cập nhật dịch vụ.");
    }
    setModal(null);
  };

  const handleDelete = () => {
    setServices((s) => s.filter((x) => x.id !== deleteModal.id));
    setDeleteModal(null);
    showToast("Đã xóa dịch vụ.");
  };

  const toggleActive = (id) => {
    setServices((s) =>
      s.map((x) => (x.id === id ? { ...x, active: !x.active } : x)),
    );
    showToast("Đã cập nhật trạng thái.");
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // Group by category để hiển thị
  const grouped = CATEGORIES.filter((c) => c.key !== "all")
    .map((cat) => ({
      ...cat,
      items: filtered.filter((s) => s.category === cat.key),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="as-root">
      {/* ── HEADER ── */}
      <div className="as-header">
        <div>
          <h1 className="as-title">Quản lý dịch vụ</h1>
          <p className="as-subtitle">
            {services.length} dịch vụ ·{" "}
            {services.filter((s) => s.active).length} đang hiển thị
          </p>
        </div>
        <button className="as-add-btn" onClick={openAdd}>
          + Thêm dịch vụ
        </button>
      </div>

      {/* ── FILTER TABS ── */}
      <div className="as-filter-tabs">
        {CATEGORIES.map((c) => (
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

      {/* ── SERVICE GROUPS ── */}
      <div className="as-groups">
        {grouped.length === 0 ? (
          <div className="as-empty">
            <div className="as-empty-icon">📋</div>
            <h3>Chưa có dịch vụ nào</h3>
            <button className="as-empty-btn" onClick={openAdd}>
              + Thêm dịch vụ đầu tiên
            </button>
          </div>
        ) : (
          grouped.map((group) => (
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
                        {/* Toggle active */}
                        <button
                          className={`as-toggle ${s.active ? "on" : "off"}`}
                          onClick={() => toggleActive(s.id)}
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

                {/* Add card */}
                <button className="as-add-card" onClick={openAdd}>
                  <span className="as-add-card-icon">+</span>
                  <span>Thêm dịch vụ</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

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
                    {CATEGORIES.filter((c) => c.key !== "all").map((c) => (
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
              <button className="as-btn as-btn--primary" onClick={handleSave}>
                {modal.mode === "add" ? "Thêm dịch vụ" : "Lưu thay đổi"}
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
