import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/adminPosts.css";

// ─── MOCK DATA (Phase 3: thay bằng Firestore) ────────────────────────────────
const INITIAL_POSTS = [
  {
    id: 1,
    title:
      "Những quy định mới nhất về thủ tục ly hôn theo Luật Hôn nhân và Gia đình 2024",
    category: "civil",
    categoryLabel: "Dân sự",
    status: "published",
    author: "LS. Nguyễn Văn A",
    date: "2024-12-15",
    views: 1240,
    featured: true,
  },
  {
    id: 2,
    title:
      "Luật Đất đai 2024: Những điểm mới quan trọng ảnh hưởng đến người dân",
    category: "civil",
    categoryLabel: "Dân sự",
    status: "published",
    author: "LS. Trần Thị B",
    date: "2024-12-10",
    views: 2180,
    featured: true,
  },
  {
    id: 3,
    title:
      "Thủ tục thành lập công ty TNHH năm 2024: Hướng dẫn chi tiết từ A đến Z",
    category: "enterprise",
    categoryLabel: "Doanh nghiệp",
    status: "published",
    author: "LS. Lê Văn C",
    date: "2024-12-05",
    views: 890,
    featured: false,
  },
  {
    id: 4,
    title:
      "Quy trình cấp Giấy chứng nhận đăng ký đầu tư cho doanh nghiệp FDI tại Việt Nam",
    category: "investment",
    categoryLabel: "Đầu tư - FDI",
    status: "published",
    author: "LS. Phạm Thị D",
    date: "2024-11-28",
    views: 650,
    featured: false,
  },
  {
    id: 5,
    title:
      "Quyền của bị can, bị cáo trong tố tụng hình sự: Những điều cần biết",
    category: "criminal",
    categoryLabel: "Hình sự",
    status: "draft",
    author: "LS. Nguyễn Văn A",
    date: "2024-11-20",
    views: 0,
    featured: false,
  },
  {
    id: 6,
    title:
      "Danh mục ngành nghề kinh doanh có điều kiện và thủ tục xin giấy phép 2024",
    category: "license",
    categoryLabel: "Giấy phép",
    status: "published",
    author: "LS. Trần Thị B",
    date: "2024-11-15",
    views: 720,
    featured: false,
  },
  {
    id: 7,
    title: "Giải quyết tranh chấp hợp đồng thương mại: Trọng tài hay Tòa án?",
    category: "enterprise",
    categoryLabel: "Doanh nghiệp",
    status: "published",
    author: "LS. Lê Văn C",
    date: "2024-11-08",
    views: 430,
    featured: false,
  },
  {
    id: 8,
    title: "Di chúc hợp pháp: Điều kiện và hình thức theo Bộ luật Dân sự 2015",
    category: "civil",
    categoryLabel: "Dân sự",
    status: "published",
    author: "LS. Phạm Thị D",
    date: "2024-10-30",
    views: 980,
    featured: false,
  },
  {
    id: 9,
    title: "Người lao động nghỉ việc đúng luật: Quyền lợi và thủ tục cần biết",
    category: "news",
    categoryLabel: "Tin pháp luật",
    status: "published",
    author: "LS. Nguyễn Văn A",
    date: "2024-10-22",
    views: 1890,
    featured: false,
  },
  {
    id: 10,
    title:
      "Đăng ký bảo hộ nhãn hiệu tại Việt Nam: Quy trình và những lưu ý quan trọng",
    category: "license",
    categoryLabel: "Giấy phép",
    status: "draft",
    author: "LS. Trần Thị B",
    date: "2024-10-15",
    views: 0,
    featured: false,
  },
  {
    id: 11,
    title:
      "Bồi thường thiệt hại do tai nạn giao thông: Mức bồi thường và trình tự khiếu nại",
    category: "civil",
    categoryLabel: "Dân sự",
    status: "published",
    author: "LS. Lê Văn C",
    date: "2024-10-05",
    views: 2340,
    featured: false,
  },
  {
    id: 12,
    title: "Thủ tục giải thể công ty tự nguyện: Hướng dẫn từng bước năm 2024",
    category: "enterprise",
    categoryLabel: "Doanh nghiệp",
    status: "published",
    author: "LS. Phạm Thị D",
    date: "2024-09-28",
    views: 380,
    featured: false,
  },
];

const CATEGORIES = [
  { key: "all", label: "Tất cả" },
  { key: "civil", label: "Dân sự" },
  { key: "criminal", label: "Hình sự" },
  { key: "investment", label: "Đầu tư - FDI" },
  { key: "enterprise", label: "Doanh nghiệp" },
  { key: "license", label: "Giấy phép" },
  { key: "news", label: "Tin pháp luật" },
];

const POSTS_PER_PAGE = 8;

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AdminPosts() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategory] = useState("all");
  const [statusFilter, setStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState([]); // ids được chọn
  const [deleteModal, setDeleteModal] = useState(null); // post cần xóa
  const [toast, setToast] = useState(null);

  // Lọc + tìm kiếm
  const filtered = useMemo(() => {
    let r = posts;
    if (categoryFilter !== "all")
      r = r.filter((p) => p.category === categoryFilter);
    if (statusFilter !== "all") r = r.filter((p) => p.status === statusFilter);
    if (search.trim())
      r = r.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.author.toLowerCase().includes(search.toLowerCase()),
      );
    return r;
  }, [posts, categoryFilter, statusFilter, search]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  // Reset page khi filter thay đổi
  const applyFilter = (setter, val) => {
    setter(val);
    setCurrentPage(1);
    setSelected([]);
  };

  // Select all trên trang hiện tại
  const allSelected =
    paginated.length > 0 && paginated.every((p) => selected.includes(p.id));
  const toggleAll = () =>
    setSelected(allSelected ? [] : paginated.map((p) => p.id));
  const toggleOne = (id) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id],
    );

  // Xóa 1 bài
  const confirmDelete = (post) => setDeleteModal(post);
  const doDelete = () => {
    setPosts((p) => p.filter((x) => x.id !== deleteModal.id));
    setDeleteModal(null);
    showToast("Đã xóa bài viết thành công.");
  };

  // Xóa nhiều bài
  const bulkDelete = () => {
    setPosts((p) => p.filter((x) => !selected.includes(x.id)));
    setSelected([]);
    showToast(`Đã xóa ${selected.length} bài viết.`);
  };

  // Toggle trạng thái
  const toggleStatus = (id) => {
    setPosts((p) =>
      p.map((x) =>
        x.id === id
          ? { ...x, status: x.status === "published" ? "draft" : "published" }
          : x,
      ),
    );
    showToast("Đã cập nhật trạng thái.");
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  // Stats nhanh
  const totalPublished = posts.filter((p) => p.status === "published").length;
  const totalDraft = posts.filter((p) => p.status === "draft").length;
  const totalViews = posts.reduce((s, p) => s + p.views, 0);

  return (
    <div className="ap-root">
      {/* ── HEADER ── */}
      <div className="ap-header">
        <div>
          <h1 className="ap-title">Quản lý tin tức</h1>
          <p className="ap-subtitle">
            {posts.length} bài viết · {totalPublished} đã đăng · {totalDraft}{" "}
            bản nháp
          </p>
        </div>
        <Link to="/admin/posts/new" className="ap-new-btn">
          + Viết bài mới
        </Link>
      </div>

      {/* ── QUICK STATS ── */}
      <div className="ap-quick-stats">
        <div className="ap-qs-card">
          <div
            className="ap-qs-icon"
            style={{ background: "rgba(168,23,28,.1)", color: "#A8171C" }}
          >
            📝
          </div>
          <div>
            <div className="ap-qs-val">{posts.length}</div>
            <div className="ap-qs-lbl">Tổng bài viết</div>
          </div>
        </div>
        <div className="ap-qs-card">
          <div
            className="ap-qs-icon"
            style={{ background: "rgba(22,163,74,.1)", color: "#16A34A" }}
          >
            ✓
          </div>
          <div>
            <div className="ap-qs-val">{totalPublished}</div>
            <div className="ap-qs-lbl">Đã đăng</div>
          </div>
        </div>
        <div className="ap-qs-card">
          <div
            className="ap-qs-icon"
            style={{ background: "rgba(122,110,104,.1)", color: "#7A6E68" }}
          >
            ✎
          </div>
          <div>
            <div className="ap-qs-val">{totalDraft}</div>
            <div className="ap-qs-lbl">Bản nháp</div>
          </div>
        </div>
        <div className="ap-qs-card">
          <div
            className="ap-qs-icon"
            style={{ background: "rgba(201,168,76,.1)", color: "#C9A84C" }}
          >
            👁
          </div>
          <div>
            <div className="ap-qs-val">{(totalViews / 1000).toFixed(1)}K</div>
            <div className="ap-qs-lbl">Tổng lượt xem</div>
          </div>
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div className="ap-filters">
        {/* Search */}
        <div className="ap-search-wrap">
          <svg
            className="ap-search-icon"
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
            placeholder="Tìm tiêu đề, tác giả..."
            value={search}
            onChange={(e) => applyFilter(setSearch, e.target.value)}
            className="ap-search-input"
          />
          {search && (
            <button
              className="ap-search-clear"
              onClick={() => applyFilter(setSearch, "")}
            >
              ✕
            </button>
          )}
        </div>

        {/* Category filter */}
        <select
          value={categoryFilter}
          onChange={(e) => applyFilter(setCategory, e.target.value)}
          className="ap-select"
        >
          {CATEGORIES.map((c) => (
            <option key={c.key} value={c.key}>
              {c.label}
            </option>
          ))}
        </select>

        {/* Status filter */}
        <select
          value={statusFilter}
          onChange={(e) => applyFilter(setStatus, e.target.value)}
          className="ap-select"
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="published">Đã đăng</option>
          <option value="draft">Bản nháp</option>
        </select>

        {/* Bulk delete */}
        {selected.length > 0 && (
          <button className="ap-bulk-delete" onClick={bulkDelete}>
            🗑 Xóa {selected.length} bài đã chọn
          </button>
        )}

        {/* Result count */}
        <span className="ap-result-count">{filtered.length} kết quả</span>
      </div>

      {/* ── TABLE ── */}
      <div className="ap-table-wrap">
        {paginated.length === 0 ? (
          <div className="ap-empty">
            <div className="ap-empty-icon">🔍</div>
            <h3>Không tìm thấy bài viết</h3>
            <p>Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.</p>
            <button
              className="ap-empty-reset"
              onClick={() => {
                setSearch("");
                setCategory("all");
                setStatus("all");
              }}
            >
              Xóa bộ lọc
            </button>
          </div>
        ) : (
          <table className="ap-table">
            <thead>
              <tr>
                <th className="ap-th-check">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                    className="ap-checkbox"
                  />
                </th>
                <th>Tiêu đề</th>
                <th>Chuyên mục</th>
                <th>Tác giả</th>
                <th>Trạng thái</th>
                <th>Ngày đăng</th>
                <th>Lượt xem</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((post, i) => (
                <tr
                  key={post.id}
                  className={`ap-row ${selected.includes(post.id) ? "ap-row--selected" : ""}`}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {/* Checkbox */}
                  <td className="ap-td-check">
                    <input
                      type="checkbox"
                      checked={selected.includes(post.id)}
                      onChange={() => toggleOne(post.id)}
                      className="ap-checkbox"
                    />
                  </td>

                  {/* Title */}
                  <td className="ap-td-title">
                    <div className="ap-post-title-wrap">
                      {post.featured && (
                        <span className="ap-featured-dot" title="Nổi bật" />
                      )}
                      <span className="ap-post-title" title={post.title}>
                        {post.title}
                      </span>
                    </div>
                  </td>

                  {/* Category */}
                  <td>
                    <span className="ap-cat-chip">{post.categoryLabel}</span>
                  </td>

                  {/* Author */}
                  <td className="ap-td-author">
                    <div className="ap-author-wrap">
                      <div className="ap-author-avatar">
                        {post.author.split(" ").pop()[0]}
                      </div>
                      <span>{post.author}</span>
                    </div>
                  </td>

                  {/* Status toggle */}
                  <td>
                    <button
                      className={`ap-status-btn ap-status-btn--${post.status}`}
                      onClick={() => toggleStatus(post.id)}
                      title="Nhấn để đổi trạng thái"
                    >
                      {post.status === "published" ? "✓ Đã đăng" : "✎ Nháp"}
                    </button>
                  </td>

                  {/* Date */}
                  <td className="ap-td-muted">{formatDate(post.date)}</td>

                  {/* Views */}
                  <td className="ap-td-muted">
                    {post.views > 0 ? (
                      <span className="ap-views">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        {post.views.toLocaleString()}
                      </span>
                    ) : (
                      "—"
                    )}
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="ap-actions">
                      <button
                        className="ap-action-btn ap-action-btn--edit"
                        onClick={() => navigate(`/admin/posts/${post.id}/edit`)}
                        title="Chỉnh sửa"
                      >
                        ✎
                      </button>
                      <a
                        href={`/tin-tuc/${post.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ap-action-btn ap-action-btn--view"
                        title="Xem bài"
                      >
                        ↗
                      </a>
                      <button
                        className="ap-action-btn ap-action-btn--delete"
                        onClick={() => confirmDelete(post)}
                        title="Xóa"
                      >
                        🗑
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── PAGINATION ── */}
      {totalPages > 1 && (
        <div className="ap-pagination">
          <span className="ap-page-info">
            Trang {currentPage} / {totalPages} ({filtered.length} bài)
          </span>
          <div className="ap-page-btns">
            <button
              className="ap-page-btn"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              ← Trước
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              if (
                page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 1
              )
                return (
                  <button
                    key={page}
                    className={`ap-page-num ${currentPage === page ? "active" : ""}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                );
              if (Math.abs(page - currentPage) === 2)
                return (
                  <span key={page} className="ap-page-ellipsis">
                    …
                  </span>
                );
              return null;
            })}

            <button
              className="ap-page-btn"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Tiếp →
            </button>
          </div>
        </div>
      )}

      {/* ── DELETE MODAL ── */}
      {deleteModal && (
        <div className="ap-modal-overlay" onClick={() => setDeleteModal(null)}>
          <div className="ap-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ap-modal-icon">🗑️</div>
            <h3 className="ap-modal-title">Xác nhận xóa bài viết</h3>
            <p className="ap-modal-desc">
              Bạn có chắc muốn xóa bài viết:
              <br />
              <strong>"{deleteModal.title.slice(0, 60)}..."</strong>
            </p>
            <p className="ap-modal-warn">⚠ Hành động này không thể hoàn tác.</p>
            <div className="ap-modal-actions">
              <button
                className="ap-modal-cancel"
                onClick={() => setDeleteModal(null)}
              >
                Hủy
              </button>
              <button className="ap-modal-confirm" onClick={doDelete}>
                Xóa bài viết
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── TOAST ── */}
      {toast && (
        <div className="ap-toast">
          <span>✓</span> {toast}
        </div>
      )}
    </div>
  );
}
