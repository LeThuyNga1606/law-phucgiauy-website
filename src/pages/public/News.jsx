import React, { useState, useEffect, useRef, useCallback } from "react";
import Loading from "../../components/common/Loading";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/news.css";
import { getAllCategoriesAdmin } from "../../services/categories";
import { optimizeCloudinaryUrl } from "../../utils/cloudinary";

import {
  getPublishedPosts,
  getFeaturedPosts,
  getMostReadPosts,
  getAllPublishedPostsForSearch,
} from "../../services/news";

const POSTS_PER_PAGE = 9;

// ─── SKELETON CARD ────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="news-card news-card--skeleton">
      <div className="news-card-thumb skeleton-box" />
      <div className="news-card-body">
        <div
          className="skeleton-line skeleton-line--sm"
          style={{ width: "40%", marginBottom: 8 }}
        />
        <div className="skeleton-line" style={{ marginBottom: 6 }} />
        <div
          className="skeleton-line"
          style={{ width: "85%", marginBottom: 6 }}
        />
        <div
          className="skeleton-line skeleton-line--sm"
          style={{ width: "60%" }}
        />
      </div>
      <div className="news-card-footer" style={{ padding: "12px 16px" }}>
        <div
          className="skeleton-line skeleton-line--sm"
          style={{ width: "50%" }}
        />
      </div>
    </div>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function News() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const gridRef = useRef(null);
  const location = useLocation();

  // ── State ──────────────────────────────────────────────────────────────────
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeatured] = useState([]);
  const [mostRead, setMostRead] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSidebar, setLoadingSidebar] = useState(true);
  const [loadingCats, setLoadingCats] = useState(true);
  const [categories, setCategories] = useState([]);

  // Search results (toàn bộ bài viết phù hợp khi đang tìm kiếm)
  const [searchResults, setSearchResults] = useState([]);

  // Firestore cursor-based pagination
  // Firestore cursor-based pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [cursors, setCursors] = useState({ 1: null }); // page → cursor bắt đầu trang đó
  const [hasMore, setHasMore] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  // Đảm bảo khi loading thì luôn scroll lên đầu trang
  useEffect(() => {
    if (loading) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [loading]);

  // ── Fetch sidebar 1 lần ───────────────────────────────────────────────────
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingSidebar(true);
    Promise.all([getFeaturedPosts(3), getMostReadPosts(5)]).then(
      ([feat, most]) => {
        setFeatured(feat);
        setMostRead(most);
        setLoadingSidebar(false);
      },
    );
  }, []);

  // ── Fetch categories 1 lần ─────────────────────────────────────────────────
  useEffect(() => {
    setLoadingCats(true);
    getAllCategoriesAdmin()
      .then((data) => {
        setCategories([
          { key: "all", label: t("all") }, // thêm option All
          ...data,
        ]);
      })
      .finally(() => setLoadingCats(false));
  }, []);

  // ── Fetch posts ───────────────────────────────────────────────────────────
  const fetchPage = useCallback(async (category, cursorDoc = null) => {
    setLoading(true);
    try {
      const result = await getPublishedPosts({
        category,
        pageSize: POSTS_PER_PAGE,
        lastDoc: cursorDoc,
      });
      setPosts(result.posts);
      setHasMore(result.hasMore);
      return result.lastDoc;
    } finally {
      setLoading(false);
    }
  }, []);

  // Reset khi đổi category
  // Reset khi đổi category
  useEffect(() => {
    setCurrentPage(1);
    setCursors({ 1: null });
    setTotalPages(1);
    setSearch("");
    setSearchInput("");
    fetchPage(activeCategory, null).then((nextCursor) => {
      if (nextCursor) {
        // Biết có trang 2 → lưu cursor trang 2
        setCursors({ 1: null, 2: nextCursor });
        setTotalPages(2);
      }
    });
  }, [activeCategory, fetchPage]);

  // Đọc keyword từ URL khi vào trang
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("search");
    if (q) setSearch(decodeURIComponent(q));
  }, [location.search]);

  // Khi có từ khóa: fetch toàn bộ bài viết rồi lọc client-side
  useEffect(() => {
    if (!search.trim()) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    getAllPublishedPostsForSearch(activeCategory)
      .then((allPosts) => {
        const q = search.toLowerCase();
        const filtered = allPosts.filter(
          (p) =>
            p.title?.toLowerCase().includes(q) ||
            p.excerpt?.toLowerCase().includes(q) ||
            p.tags?.some((tag) => tag.toLowerCase().includes(q)),
        );
        setSearchResults(filtered);
      })
      .finally(() => setLoading(false));
  }, [search, activeCategory]);

  // ── Phân trang ────────────────────────────────────────────────────────────
  const handlePageChange = async (page) => {
    if (page === currentPage) return;
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    // Lấy cursor của trang cần đến (đã lưu sẵn)
    const cursor = cursors[page] ?? null;
    const nextCursor = await fetchPage(activeCategory, cursor);

    setCurrentPage(page);

    // Nếu có trang tiếp theo và chưa biết cursor → lưu lại
    if (nextCursor && !cursors[page + 1]) {
      setCursors((prev) => ({ ...prev, [page + 1]: nextCursor }));
      setTotalPages((prev) => Math.max(prev, page + 1));
    }
  };

  // ── Kết quả hiển thị ──────────────────────────────────────────────────────
  const displayed = search.trim() ? searchResults : posts;

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  const formatDate = (val) => {
    if (!val) return "";
    const d = val?.toDate ? val.toDate() : new Date(val);
    return d.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // ── RENDER ────────────────────────────────────────────────────────────────
  if (loading) {
    return <Loading text="Loading..." />;
  }
  return (
    <div className="news-page">
      {/* ── HERO ── */}
      <section className="news-hero">
        <div className="news-hero-grid" />
        <div className="news-hero-content">
          <h1 className="news-hero-title">{t("about_news_eyebrow")}</h1>
          <p className="news-hero-desc">{t("news_hero_desc")}</p>

          <form className="news-hero-search" onSubmit={handleSearch}>
            <div className="news-hero-search-wrap">
              <svg
                className="news-search-icon"
                width="18"
                height="18"
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
                placeholder={t("search_placeholder")}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="news-hero-search-input"
              />
              {searchInput && (
                <button
                  type="button"
                  className="news-search-clear"
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                >
                  ✕
                </button>
              )}
            </div>
            <button type="submit" className="news-hero-search-btn">
              {t("search")}
            </button>
          </form>

          <div className="news-hero-stats">
            <div className="news-hero-stat">
              <strong>{categories.length - 1}</strong>
              <span>{t("section")}</span>
            </div>
            <div className="news-hero-stat-divider" />
            <div className="news-hero-stat">
              <strong>{t("weekly")}</strong>
              <span>{t("update")}</span>
            </div>
          </div>
        </div>

        {/* Featured hero card */}
        <div className="news-hero-featured">
          {loadingSidebar ? (
            <div
              className="news-hero-card skeleton-box"
              style={{ minHeight: 220 }}
            />
          ) : featuredPosts[0] ? (
            <div
              className="news-hero-card"
              onClick={() => navigate(`/tin-tuc/${featuredPosts[0].slug}`)}
            >
              <div
                className="news-hero-card-img"
                style={{
                  backgroundImage: `url(${featuredPosts[0].thumbnail})`,
                }}
              />
              <div className="news-hero-card-body">
                <span className="news-cat-badge">
                  {featuredPosts[0].categoryLabel}
                </span>
                <h3>{featuredPosts[0].title}</h3>
                <div className="news-hero-card-meta">
                  <span>{formatDate(featuredPosts[0].createdAt)}</span>
                  <span>·</span>
                  <span>
                    {featuredPosts[0].readTime} {t("read")}
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <div className="news-filter-bar" ref={gridRef}>
        <div className="news-filter-inner">
          <div className="news-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`news-filter-tab ${activeCategory === cat.key ? "news-filter-tab--active" : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          {search && (
            <div className="news-search-result-info">
              {t("search_results_found")} <strong>{displayed.length}</strong>{" "}
              {t("search_results_for")} "<em>{search}</em>"
              <button
                onClick={() => {
                  setSearch("");
                  setSearchInput("");
                }}
                className="news-clear-search"
              >
                {t("delete")} ✕
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="news-layout">
        <main className="news-main">
          {loading ? (
            <div className="news-grid">
              {Array.from({ length: POSTS_PER_PAGE }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : displayed.length === 0 ? (
            <div className="news-empty">
              <div className="news-empty-icon">🔍</div>
              <h3>{t("not_found")}</h3>
              <p>{t("try_different_keyword")}</p>
              <button
                onClick={() => {
                  setSearch("");
                  setSearchInput("");
                  setActiveCategory("all");
                }}
                className="news-empty-reset"
              >
                {t("view_all_posts")}
              </button>
            </div>
          ) : (
            <>
              <div className="news-grid">
                {displayed.map((post, i) => (
                  <article
                    key={post.id}
                    className="news-card"
                    style={{ "--delay": `${i * 60}ms` }}
                    onClick={() => navigate(`/tin-tuc/${post.slug}`)}
                  >
                    <div className="news-card-thumb">
                      <div
                        className="news-card-img"
                        style={{
                          backgroundImage: `url(${optimizeCloudinaryUrl(post.thumbnail, { width: 400 })})`,
                        }}
                      />
                      <span className="news-card-cat">
                        {post.categoryLabel}
                      </span>
                      {post.featured && (
                        <span className="news-card-featured">
                          {t("highlighted")}
                        </span>
                      )}
                    </div>

                    <div className="news-card-body">
                      <div className="news-card-meta">
                        <span className="news-card-date">
                          {formatDate(post.createdAt)}
                        </span>
                        <span className="news-card-dot">·</span>
                        <span className="news-card-read">
                          {post.readTime} {t("read")}
                        </span>
                      </div>
                      <h3 className="news-card-title">{post.title}</h3>
                      <p className="news-card-excerpt">{post.excerpt}</p>
                      <div className="news-card-tags">
                        {post.tags?.slice(0, 2).map((tag) => (
                          <span key={tag} className="news-card-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="news-card-footer">
                      <div className="news-card-author">
                        <div className="news-card-avatar">
                          {post.author?.split(" ").pop()[0]}
                        </div>
                        <span>{post.author}</span>
                      </div>
                      <div className="news-card-views">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        {(post.views || 0).toLocaleString()}
                      </div>
                    </div>
                    <div className="news-card-bar" />
                  </article>
                ))}
              </div>

              {/* Pagination — ẩn khi đang search */}
              {!search && totalPages > 1 && (
                <div className="news-pagination">
                  <button
                    className="news-page-btn news-page-prev"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    ← {t("before")}
                  </button>
                  <div className="news-page-numbers">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => {
                        if (
                          page === 1 ||
                          page === totalPages ||
                          Math.abs(page - currentPage) <= 1
                        ) {
                          return (
                            <button
                              key={page}
                              className={`news-page-num ${currentPage === page ? "active" : ""}`}
                              onClick={() => handlePageChange(page)}
                            >
                              {page}
                            </button>
                          );
                        }
                        if (Math.abs(page - currentPage) === 2) {
                          return (
                            <span key={page} className="news-page-ellipsis">
                              …
                            </span>
                          );
                        }
                        return null;
                      },
                    )}
                  </div>
                  <button
                    className="news-page-btn news-page-next"
                    disabled={!hasMore && currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    {t("after")} →
                  </button>
                </div>
              )}
            </>
          )}
        </main>

        {/* ── SIDEBAR ── */}
        <aside className="news-sidebar">
          {/* Bài đọc nhiều */}
          <div className="news-sidebar-block">
            <div className="news-sidebar-title">
              <span className="news-sidebar-title-bar" />
              {t("most_read")}
            </div>
            <div className="news-sidebar-most-read">
              {loadingSidebar
                ? Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="news-sidebar-mr-item">
                      <span className="news-sidebar-mr-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div style={{ flex: 1 }}>
                        <div
                          className="skeleton-line"
                          style={{ marginBottom: 6 }}
                        />
                        <div
                          className="skeleton-line skeleton-line--sm"
                          style={{ width: "50%" }}
                        />
                      </div>
                    </div>
                  ))
                : mostRead.map((post, i) => (
                    <div
                      key={post.id}
                      className="news-sidebar-mr-item"
                      onClick={() => navigate(`/tin-tuc/${post.slug}`)}
                    >
                      <span className="news-sidebar-mr-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="news-sidebar-mr-body">
                        <p className="news-sidebar-mr-title">{post.title}</p>
                        <div className="news-sidebar-mr-meta">
                          <span>{formatDate(post.createdAt)}</span>
                          <span>·</span>
                          <span>
                            {(post.views || 0).toLocaleString()} {t("view")}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          {/* Bài viết nổi bật */}
          <div className="news-sidebar-block">
            <div className="news-sidebar-title">
              <span className="news-sidebar-title-bar" />
              {t("featured-post")}
            </div>
            <div className="news-sidebar-featured">
              {loadingSidebar
                ? Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="news-sidebar-feat-item">
                      <div className="news-sidebar-feat-img skeleton-box" />
                      <div style={{ flex: 1 }}>
                        <div
                          className="skeleton-line skeleton-line--sm"
                          style={{ marginBottom: 6 }}
                        />
                        <div className="skeleton-line" />
                      </div>
                    </div>
                  ))
                : featuredPosts.map((post) => (
                    <div
                      key={post.id}
                      className="news-sidebar-feat-item"
                      onClick={() => navigate(`/tin-tuc/${post.slug}`)}
                    >
                      <div
                        className="news-sidebar-feat-img"
                        style={{
                          backgroundImage: `url(${optimizeCloudinaryUrl(post.thumbnail, { width: 100 })})`,
                        }}
                      />
                      <div className="news-sidebar-feat-body">
                        <span className="news-sidebar-feat-cat">
                          {post.categoryLabel}
                        </span>
                        <p className="news-sidebar-feat-title">{post.title}</p>
                        <span className="news-sidebar-feat-date">
                          {formatDate(post.createdAt)}
                        </span>
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          {/* Chuyên mục */}
          <div className="news-sidebar-block">
            <div className="news-sidebar-title">
              <span className="news-sidebar-title-bar" />
              {t("section")}
            </div>
            <div className="news-sidebar-cats">
              {categories
                .filter((c) => c.key !== "all")
                .map((cat) => (
                  <button
                    key={cat.key}
                    className={`news-sidebar-cat ${activeCategory === cat.key ? "active" : ""}`}
                    onClick={() => {
                      setActiveCategory(cat.key);
                      gridRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span>{cat.label}</span>
                  </button>
                ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
