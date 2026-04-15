import { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/adminPosts.css";
import {
  getAllPostsAdmin,
  deletePost,
  togglePostStatus,
} from "../../services/news";
import { getAllCategoriesAdmin } from "../../services/categories";

const POSTS_PER_PAGE = 8;

// ─── SKELETON ROW ─────────────────────────────────────────────────────────────
function SkeletonRow() {
  return (
    <tr className="ap-row">
      <td className="ap-td-check">
        <div className="ap-checkbox" />
      </td>
      <td className="ap-td-title">
        <div className="skeleton-line" style={{ width: "80%" }} />
      </td>
      <td>
        <div
          className="skeleton-line skeleton-line--sm"
          style={{ width: 60 }}
        />
      </td>
      <td>
        <div
          className="skeleton-line skeleton-line--sm"
          style={{ width: 80 }}
        />
      </td>
      <td>
        <div
          className="skeleton-line skeleton-line--sm"
          style={{ width: 60 }}
        />
      </td>
      <td>
        <div
          className="skeleton-line skeleton-line--sm"
          style={{ width: 70 }}
        />
      </td>
      <td>
        <div
          className="skeleton-line skeleton-line--sm"
          style={{ width: 40 }}
        />
      </td>
      <td>
        <div
          className="skeleton-line skeleton-line--sm"
          style={{ width: 60 }}
        />
      </td>
    </tr>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AdminPosts() {
  const navigate = useNavigate();

  // ── Firestore state ──────────────────────────────────────────────────────
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ── UI state ─────────────────────────────────────────────────────────────
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategory] = useState("all");
  const [statusFilter, setStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState([]);
  const [deleteModal, setDeleteModal] = useState(null);
  const [toast, setToast] = useState(null);

  const [categories, setCategories] = useState([]);

  // ── Fetch từ Firestore ────────────────────────────────────────────────────
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await getAllPostsAdmin();
      setPosts(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // ── Fetch categories 1 lần ─────────────────────────────────────────────────
  useEffect(() => {
    setLoading(true);
    getAllCategoriesAdmin()
      .then((data) => {
        setCategories([
          { key: "all", label: "Tất cả" }, // thêm option All
          ...data,
        ]);
      })
      .finally(() => setLoading(false));
  }, []);

  // ── Lọc + tìm kiếm (client-side) ────────────────────────────────────────
  const filtered = useMemo(() => {
    let r = posts;
    if (categoryFilter !== "all")
      r = r.filter((p) => p.category === categoryFilter);
    if (statusFilter !== "all") r = r.filter((p) => p.status === statusFilter);
    if (search.trim())
      r = r.filter(
        (p) =>
          p.title?.toLowerCase().includes(search.toLowerCase()) ||
          p.author?.toLowerCase().includes(search.toLowerCase()),
      );
    return r;
  }, [posts, categoryFilter, statusFilter, search]);

  // ── Pagination ────────────────────────────────────────────────────────────
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const applyFilter = (setter, val) => {
    setter(val);
    setCurrentPage(1);
    setSelected([]);
  };

  // ── Select ────────────────────────────────────────────────────────────────
  const allSelected =
    paginated.length > 0 && paginated.every((p) => selected.includes(p.id));
  const toggleAll = () =>
    setSelected(allSelected ? [] : paginated.map((p) => p.id));
  const toggleOne = (id) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id],
    );

  // ── Xóa 1 bài ────────────────────────────────────────────────────────────
  const confirmDelete = (post) => setDeleteModal(post);
  const doDelete = async () => {
    try {
      await deletePost(deleteModal.id);
      setPosts((p) => p.filter((x) => x.id !== deleteModal.id));
      showToast("Đã xóa bài viết thành công.");
    } catch {
      showToast("Xóa thất bại. Vui lòng thử lại.");
    } finally {
      setDeleteModal(null);
    }
  };

  // ── Xóa nhiều bài ────────────────────────────────────────────────────────
  const bulkDelete = async () => {
    try {
      await Promise.all(selected.map((id) => deletePost(id)));
      setPosts((p) => p.filter((x) => !selected.includes(x.id)));
      showToast(`Đã xóa ${selected.length} bài viết.`);
    } catch {
      showToast("Xóa thất bại. Vui lòng thử lại.");
    } finally {
      setSelected([]);
    }
  };

  // ── Toggle trạng thái ─────────────────────────────────────────────────────
  const handleToggleStatus = async (post) => {
    try {
      const newStatus = await togglePostStatus(post.id, post.status);
      setPosts((p) =>
        p.map((x) => (x.id === post.id ? { ...x, status: newStatus } : x)),
      );
      showToast("Đã cập nhật trạng thái.");
    } catch {
      showToast("Cập nhật thất bại.");
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
    });
  };

  // Stats
  const totalPublished = posts.filter((p) => p.status === "published").length;
  const totalDraft = posts.filter((p) => p.status === "draft").length;
  const totalViews = posts.reduce((s, p) => s + (p.views || 0), 0);

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div className="ap-root">
      {/* ── HEADER ── */}
      <div className="ap-header">
        <div>
          <h1 className="ap-title">Quản lý tin tức</h1>
          <p className="ap-subtitle">
            {loading
              ? "Đang tải..."
              : `${posts.length} bài viết · ${totalPublished} đã đăng · ${totalDraft} bản nháp`}
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
            <div className="ap-qs-val">{loading ? "—" : posts.length}</div>
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
            <div className="ap-qs-val">{loading ? "—" : totalPublished}</div>
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
            <div className="ap-qs-val">{loading ? "—" : totalDraft}</div>
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
            <div className="ap-qs-val">
              {loading ? "—" : `${(totalViews / 1000).toFixed(1)}K`}
            </div>
            <div className="ap-qs-lbl">Tổng lượt xem</div>
          </div>
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div className="ap-filters">
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

        <select
          value={categoryFilter}
          onChange={(e) => applyFilter(setCategory, e.target.value)}
          className="ap-select"
        >
          {categories.map((c) => (
            <option key={c.key} value={c.key}>
              {c.label}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => applyFilter(setStatus, e.target.value)}
          className="ap-select"
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="published">Đã đăng</option>
          <option value="draft">Bản nháp</option>
        </select>

        {selected.length > 0 && (
          <button className="ap-bulk-delete" onClick={bulkDelete}>
            🗑 Xóa {selected.length} bài đã chọn
          </button>
        )}

        <span className="ap-result-count">
          {loading ? "…" : `${filtered.length} kết quả`}
        </span>
      </div>

      {/* ── TABLE ── */}
      <div className="ap-table-wrap">
        {!loading && paginated.length === 0 ? (
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
              {loading
                ? Array.from({ length: POSTS_PER_PAGE }).map((_, i) => (
                    <SkeletonRow key={i} />
                  ))
                : paginated.map((post, i) => (
                    <tr
                      key={post.id}
                      className={`ap-row ${selected.includes(post.id) ? "ap-row--selected" : ""}`}
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      <td className="ap-td-check">
                        <input
                          type="checkbox"
                          checked={selected.includes(post.id)}
                          onChange={() => toggleOne(post.id)}
                          className="ap-checkbox"
                        />
                      </td>

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

                      <td>
                        <span className="ap-cat-chip">
                          {post.categoryLabel}
                        </span>
                      </td>

                      <td className="ap-td-author">
                        <div className="ap-author-wrap">
                          <div className="ap-author-avatar">
                            {post.author?.split(" ").pop()[0]}
                          </div>
                          <span>{post.author}</span>
                        </div>
                      </td>

                      <td>
                        <button
                          className={`ap-status-btn ap-status-btn--${post.status}`}
                          onClick={() => handleToggleStatus(post)}
                          title="Nhấn để đổi trạng thái"
                        >
                          {post.status === "published" ? "✓ Đã đăng" : "✎ Nháp"}
                        </button>
                      </td>

                      <td className="ap-td-muted">
                        {formatDate(post.createdAt)}
                      </td>

                      <td className="ap-td-muted">
                        {(post.views || 0) > 0 ? (
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

                      <td>
                        <div className="ap-actions">
                          <button
                            className="ap-action-btn ap-action-btn--edit"
                            onClick={() =>
                              navigate(`/admin/posts/${post.id}/edit`)
                            }
                            title="Chỉnh sửa"
                          >
                            ✎
                          </button>
                          <a
                            href={`/tin-tuc/${post.slug}`}
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
      {!loading && totalPages > 1 && (
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
              <strong>"{deleteModal.title?.slice(0, 60)}..."</strong>
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
