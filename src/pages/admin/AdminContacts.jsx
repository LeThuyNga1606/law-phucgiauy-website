import { useState, useEffect } from "react";
import "../../styles/adminContacts.css";
import {
  getAllContactsAdmin,
  updateContactStatus,
  updateContactNote,
  deleteContact,
} from "../../services/contact";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const STATUS_CONFIG = {
  new: { label: "Mới", color: "#2563EB", bg: "#eff6ff" },
  processing: { label: "Đang xử lý", color: "#d97706", bg: "#fffbeb" },
  done: { label: "Hoàn tất", color: "#16a34a", bg: "#f0fdf4" },
};

const FILTER_TABS = [
  { key: "all", label: "Tất cả" },
  { key: "new", label: "Mới" },
  { key: "processing", label: "Đang xử lý" },
  { key: "done", label: "Hoàn tất" },
];

// ─── SKELETON ─────────────────────────────────────────────────────────────────
function SkeletonRow() {
  return (
    <tr className="acn-row">
      {[140, 100, 120, 80, 90, 70].map((w, i) => (
        <td key={i}>
          <div className="skeleton-line" style={{ width: w }} />
        </td>
      ))}
    </tr>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AdminContacts() {
  // ── State ──────────────────────────────────────────────────────────────────
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null); // contact đang xem chi tiết
  const [deleteModal, setDeleteModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [savingNote, setSavingNote] = useState(false);
  const [noteInput, setNoteInput] = useState("");

  // ── Fetch ─────────────────────────────────────────────────────────────────
  const fetchContacts = async (filter = statusFilter) => {
    setLoading(true);
    try {
      const data = await getAllContactsAdmin(filter);
      setContacts(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // ── Filter tab ────────────────────────────────────────────────────────────
  const handleFilterChange = (key) => {
    setFilter(key);
    setSelected(null);
    fetchContacts(key);
  };

  // ── Search client-side ────────────────────────────────────────────────────
  const displayed = search.trim()
    ? contacts.filter((c) => {
        const q = search.toLowerCase();
        return (
          c.name?.toLowerCase().includes(q) ||
          c.phone?.includes(q) ||
          c.subject?.toLowerCase().includes(q) ||
          c.email?.toLowerCase().includes(q)
        );
      })
    : contacts;

  // ── Xem chi tiết ─────────────────────────────────────────────────────────
  const openDetail = (contact) => {
    setSelected(contact);
    setNoteInput(contact.note || "");
    // Nếu đang "new" → tự động chuyển sang "processing"
    if (contact.status === "new") {
      handleStatusChange(contact, "processing");
    }
  };

  // ── Đổi trạng thái ────────────────────────────────────────────────────────
  const handleStatusChange = async (contact, newStatus) => {
    try {
      await updateContactStatus(contact.id, newStatus);
      setContacts((prev) =>
        prev.map((c) =>
          c.id === contact.id ? { ...c, status: newStatus } : c,
        ),
      );
      if (selected?.id === contact.id)
        setSelected((s) => ({ ...s, status: newStatus }));
      showToast("Đã cập nhật trạng thái.");
    } catch {
      showToast("Cập nhật thất bại.");
    }
  };

  // ── Lưu ghi chú ──────────────────────────────────────────────────────────
  const handleSaveNote = async () => {
    if (!selected) return;
    setSavingNote(true);
    try {
      await updateContactNote(selected.id, noteInput);
      setContacts((prev) =>
        prev.map((c) => (c.id === selected.id ? { ...c, note: noteInput } : c)),
      );
      setSelected((s) => ({ ...s, note: noteInput }));
      showToast("Đã lưu ghi chú.");
    } catch {
      showToast("Lưu ghi chú thất bại.");
    } finally {
      setSavingNote(false);
    }
  };

  // ── Xóa ──────────────────────────────────────────────────────────────────
  const handleDelete = async () => {
    try {
      await deleteContact(deleteModal.id);
      setContacts((prev) => prev.filter((c) => c.id !== deleteModal.id));
      if (selected?.id === deleteModal.id) setSelected(null);
      showToast("Đã xóa yêu cầu.");
    } catch {
      showToast("Xóa thất bại.");
    } finally {
      setDeleteModal(null);
    }
  };

  // ── Helpers ───────────────────────────────────────────────────────────────
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const formatDate = (val) => {
    if (!val) return "—";
    const d = val?.toDate ? val.toDate() : new Date(val);
    return d.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatTimeAgo = (val) => {
    if (!val) return "";
    const d = val?.toDate ? val.toDate() : new Date(val);
    const diff = (Date.now() - d.getTime()) / 1000;
    if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} ngày trước`;
    return formatDate(val);
  };

  // Đếm theo status
  const countByStatus = (key) =>
    key === "all"
      ? contacts.length
      : contacts.filter((c) => c.status === key).length;

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div className="acn-root">
      {/* ── HEADER ── */}
      <div className="acn-header">
        <div>
          <h1 className="acn-title">Yêu cầu tư vấn</h1>
          <p className="acn-subtitle">
            {loading
              ? "Đang tải..."
              : `${contacts.length} yêu cầu · ${contacts.filter((c) => c.status === "new").length} chưa xử lý`}
          </p>
        </div>
      </div>

      {/* ── FILTER + SEARCH ── */}
      <div className="acn-toolbar">
        {/* Tabs */}
        <div className="acn-tabs">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              className={`acn-tab ${statusFilter === tab.key ? "active" : ""}`}
              onClick={() => handleFilterChange(tab.key)}
            >
              {tab.label}
              <span className="acn-tab-count">{countByStatus(tab.key)}</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="acn-search-wrap">
          <svg
            className="acn-search-icon"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Tìm tên, SĐT, chủ đề..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="acn-search-input"
          />
          {search && (
            <button className="acn-search-clear" onClick={() => setSearch("")}>
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ── LAYOUT: TABLE + DETAIL ── */}
      <div className={`acn-layout ${selected ? "acn-layout--split" : ""}`}>
        {/* ── TABLE ── */}
        <div className="acn-table-wrap">
          <table className="acn-table">
            <thead>
              <tr>
                <th>Khách hàng</th>
                <th>Số điện thoại</th>
                <th>Chủ đề</th>
                <th>Thời gian</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 8 }).map((_, i) => <SkeletonRow key={i} />)
              ) : displayed.length === 0 ? (
                <tr>
                  <td colSpan={6} className="acn-empty">
                    <div className="acn-empty-icon">📭</div>
                    <p>Không có yêu cầu nào</p>
                  </td>
                </tr>
              ) : (
                displayed.map((c) => (
                  <tr
                    key={c.id}
                    className={`acn-row ${c.status === "new" ? "acn-row--new" : ""} ${selected?.id === c.id ? "acn-row--active" : ""}`}
                    onClick={() => openDetail(c)}
                  >
                    {/* Khách hàng */}
                    <td className="acn-td-name">
                      <div className="acn-avatar">
                        {c.name?.charAt(0)?.toUpperCase()}
                      </div>
                      <div>
                        <div className="acn-name">{c.name}</div>
                        {c.email && <div className="acn-email">{c.email}</div>}
                      </div>
                    </td>

                    {/* SĐT */}
                    <td>
                      <a
                        href={`tel:${c.phone}`}
                        className="acn-phone"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {c.phone}
                      </a>
                    </td>

                    {/* Chủ đề */}
                    <td className="acn-td-subject">
                      <span className="acn-subject" title={c.subject}>
                        {c.subject || "(không có chủ đề)"}
                      </span>
                    </td>

                    {/* Thời gian */}
                    <td className="acn-td-muted">
                      {formatTimeAgo(c.createdAt)}
                    </td>

                    {/* Trạng thái */}
                    <td>
                      <select
                        value={c.status}
                        className={`acn-status-select acn-status-select--${c.status}`}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => handleStatusChange(c, e.target.value)}
                      >
                        {Object.entries(STATUS_CONFIG).map(([key, val]) => (
                          <option key={key} value={key}>
                            {val.label}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Hành động */}
                    <td onClick={(e) => e.stopPropagation()}>
                      <div className="acn-actions">
                        <a
                          href={`tel:${c.phone}`}
                          className="acn-btn-icon acn-btn-icon--call"
                          title="Gọi ngay"
                        >
                          📞
                        </a>
                        {c.email && (
                          <a
                            href={`mailto:${c.email}`}
                            className="acn-btn-icon acn-btn-icon--mail"
                            title="Gửi email"
                          >
                            ✉
                          </a>
                        )}
                        <button
                          className="acn-btn-icon acn-btn-icon--del"
                          onClick={() => setDeleteModal(c)}
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

        {/* ── DETAIL PANEL ── */}
        {selected && (
          <div className="acn-detail">
            <div className="acn-detail-header">
              <h3 className="acn-detail-title">Chi tiết yêu cầu</h3>
              <button
                className="acn-detail-close"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </div>

            {/* Avatar + tên */}
            <div className="acn-detail-hero">
              <div className="acn-detail-avatar">
                {selected.name?.charAt(0)?.toUpperCase()}
              </div>
              <div>
                <div className="acn-detail-name">{selected.name}</div>
                <div className="acn-detail-time">
                  {formatDate(selected.createdAt)}
                </div>
              </div>
            </div>

            {/* Thông tin liên hệ */}
            <div className="acn-detail-section">
              <div className="acn-detail-section-title">Thông tin liên hệ</div>
              <div className="acn-detail-rows">
                <div className="acn-detail-row">
                  <span className="acn-detail-label">📞 Điện thoại</span>
                  <a
                    href={`tel:${selected.phone}`}
                    className="acn-detail-val acn-detail-link"
                  >
                    {selected.phone}
                  </a>
                </div>
                {selected.email && (
                  <div className="acn-detail-row">
                    <span className="acn-detail-label">✉ Email</span>
                    <a
                      href={`mailto:${selected.email}`}
                      className="acn-detail-val acn-detail-link"
                    >
                      {selected.email}
                    </a>
                  </div>
                )}
                {selected.address && (
                  <div className="acn-detail-row">
                    <span className="acn-detail-label">📍 Địa chỉ</span>
                    <span className="acn-detail-val">{selected.address}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Nội dung yêu cầu */}
            <div className="acn-detail-section">
              <div className="acn-detail-section-title">Nội dung yêu cầu</div>
              {selected.subject && (
                <div className="acn-detail-subject">{selected.subject}</div>
              )}
              <div className="acn-detail-message">
                {selected.message || "(Không có nội dung)"}
              </div>
            </div>

            {/* Trạng thái */}
            <div className="acn-detail-section">
              <div className="acn-detail-section-title">Trạng thái xử lý</div>
              <div className="acn-status-btns">
                {Object.entries(STATUS_CONFIG).map(([key, val]) => (
                  <button
                    key={key}
                    className={`acn-status-btn ${selected.status === key ? "active" : ""}`}
                    style={
                      selected.status === key
                        ? {
                            background: val.bg,
                            color: val.color,
                            borderColor: val.color,
                          }
                        : {}
                    }
                    onClick={() => handleStatusChange(selected, key)}
                  >
                    {val.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Ghi chú nội bộ */}
            <div className="acn-detail-section">
              <div className="acn-detail-section-title">Ghi chú nội bộ</div>
              <textarea
                value={noteInput}
                onChange={(e) => setNoteInput(e.target.value)}
                placeholder="Thêm ghi chú về yêu cầu này..."
                rows={4}
                className="acn-note-input"
              />
              <button
                className="acn-note-save"
                onClick={handleSaveNote}
                disabled={savingNote}
              >
                {savingNote ? "Đang lưu..." : "💾 Lưu ghi chú"}
              </button>
            </div>

            {/* Quick actions */}
            <div className="acn-detail-actions">
              <a
                href={`tel:${selected.phone}`}
                className="acn-action-btn acn-action-btn--primary"
              >
                📞 Gọi ngay
              </a>
              {selected.email && (
                <a
                  href={`mailto:${selected.email}`}
                  className="acn-action-btn acn-action-btn--ghost"
                >
                  ✉ Gửi email
                </a>
              )}
              <button
                className="acn-action-btn acn-action-btn--danger"
                onClick={() => setDeleteModal(selected)}
              >
                🗑 Xóa
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── DELETE MODAL ── */}
      {deleteModal && (
        <div className="acn-overlay" onClick={() => setDeleteModal(null)}>
          <div className="acn-modal" onClick={(e) => e.stopPropagation()}>
            <div className="acn-modal-icon">🗑️</div>
            <h3 className="acn-modal-title">Xóa yêu cầu tư vấn</h3>
            <p className="acn-modal-desc">
              Bạn có chắc muốn xóa yêu cầu của{" "}
              <strong>{deleteModal.name}</strong>?
            </p>
            <p className="acn-modal-warn">
              ⚠ Hành động này không thể hoàn tác.
            </p>
            <div className="acn-modal-footer">
              <button
                className="acn-btn acn-btn--ghost"
                onClick={() => setDeleteModal(null)}
              >
                Hủy
              </button>
              <button
                className="acn-btn acn-btn--danger"
                onClick={handleDelete}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── TOAST ── */}
      {toast && (
        <div className="acn-toast">
          <span>✓</span> {toast}
        </div>
      )}
    </div>
  );
}
