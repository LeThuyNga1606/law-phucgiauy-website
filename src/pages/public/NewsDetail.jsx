import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/newsDetail.css";
import {
  getPostBySlug,
  getRelatedPosts,
  getMostReadPosts,
  incrementViews,
} from "../../services/news";
import { getAllServicesAdmin } from "../../services/service";

// ─── SKELETON ─────────────────────────────────────────────────────────────────
function SkeletonDetail() {
  return (
    <div className="nd-page">
      {/* Hero skeleton */}
      <section className="nd-hero" style={{ minHeight: 420 }}>
        <div
          className="skeleton-box"
          style={{ position: "absolute", inset: 0, opacity: 0.3 }}
        />
        <div
          className="nd-hero-content"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div
            className="skeleton-line skeleton-line--sm"
            style={{ width: 80, marginBottom: 16 }}
          />
          <div className="skeleton-line" style={{ marginBottom: 10 }} />
          <div
            className="skeleton-line"
            style={{ width: "80%", marginBottom: 10 }}
          />
          <div
            className="skeleton-line skeleton-line--sm"
            style={{ width: "50%" }}
          />
        </div>
      </section>
      {/* Body skeleton */}
      <div className="nd-layout" style={{ paddingTop: 40 }}>
        <main className="nd-main">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="skeleton-line"
              style={{ width: i % 3 === 2 ? "70%" : "100%", marginBottom: 12 }}
            />
          ))}
        </main>
        <aside className="nd-sidebar">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="nd-sidebar-recent"
              style={{ marginBottom: 16 }}
            >
              <div className="nd-sidebar-recent-img skeleton-box" />
              <div style={{ flex: 1 }}>
                <div
                  className="skeleton-line skeleton-line--sm"
                  style={{ marginBottom: 6 }}
                />
                <div className="skeleton-line" />
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function NewsDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const articleRef = useRef(null);
  const viewedRef = useRef(false);

  // ── Firestore state ──────────────────────────────────────────────────────
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [suggestedTags, setSuggestedTags] = useState([]);

  // ── Reading progress ─────────────────────────────────────────────────────
  const [progress, setProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);

  // ── Fetch bài viết khi slug thay đổi ────────────────────────────────────
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setNotFound(false);
    setPost(null);
    viewedRef.current = false;

    getPostBySlug(slug).then(async (data) => {
      if (!data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      // ← THÊM: chặn bài draft
      if (data.status !== "published") {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const cleanContent = data.content.replace(/&nbsp;/g, " ");
      setPost({ ...data, content: cleanContent });

      // Tăng lượt xem (không cần await)
      if (!viewedRef.current) {
        viewedRef.current = true;
        incrementViews(data.id);
      }

      // Fetch bài liên quan + bài gần đây song song
      const [rel, rec] = await Promise.all([
        getRelatedPosts(data.category, data.id, 3),
        getMostReadPosts(4),
      ]);
      setRelated(rel);
      setRecent(rec.filter((p) => p.id !== data.id).slice(0, 4));
      setLoading(false);
    });
  }, [slug]);

  // ── Fetch suggested tags từ collection services ──────────────────────────────
  useEffect(() => {
    // Fetch suggested tags từ services
    getAllServicesAdmin()
      .then((services) => {
        // Lấy tên dịch vụ làm tag gợi ý, loại trùng, sắp xếp theo alphabet
        const tags = [
          ...new Set(
            services.flatMap((s) => [
              s.name,
              // Tách từng từ có nghĩa từ tên dịch vụ (>= 4 ký tự)
              ...s.name.split(/[\s&,\/]+/).filter((w) => w.length >= 4),
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

  // ── Reading progress scroll ──────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const article = articleRef.current;
      if (!article) return;
      const { top, height } = article.getBoundingClientRect();
      const windowH = window.innerHeight;
      const scrolled = Math.max(0, -top);
      const total = height - windowH;
      setProgress(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
      setShowBackTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Helpers ──────────────────────────────────────────────────────────────
  const formatDate = (val) => {
    if (!val) return "";
    const d = val?.toDate ? val.toDate() : new Date(val);
    return d.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatDateShort = (val) => {
    if (!val) return "";
    const d = val?.toDate ? val.toDate() : new Date(val);
    return d.toLocaleDateString("vi-VN");
  };

  // ── States ───────────────────────────────────────────────────────────────
  if (loading) return <SkeletonDetail />;

  if (notFound) {
    return (
      <div className="nd-notfound">
        <div className="nd-notfound-icon">📰</div>
        <h2>{t("post_not_exist")}</h2>
        <p>{t("post_deleted_or_invalid")}</p>
        <Link to="/tin-tuc" className="nd-notfound-btn">
          ← {t("back_to_news_list")}
        </Link>
      </div>
    );
  }

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div className="nd-page" ref={articleRef}>
      {/* ── PROGRESS BAR ── */}
      <div className="nd-progress-bar" style={{ width: `${progress}%` }} />

      {/* ── HERO ── */}
      <section className="nd-hero">
        <div
          className="nd-hero-bg"
          style={{ backgroundImage: `url(${post.thumbnail})` }}
        />
        <div className="nd-hero-overlay" />
        <div className="nd-hero-grid" />

        <div className="nd-hero-content">
          <div className="nd-hero-top">
            <span className="nd-cat-badge">{post.categoryLabel}</span>
            {post.featured && (
              <span className="nd-featured-badge">⭐ {t("highlighted")}</span>
            )}
          </div>

          <h1 className="nd-hero-title">{post.title}</h1>
          <p className="nd-hero-excerpt">{post.excerpt}</p>

          <div className="nd-hero-meta">
            <div className="nd-author-chip">
              <div className="nd-author-avatar">
                {post.author?.split(" ").pop()[0]}
              </div>
              <div>
                <div className="nd-author-name">{post.author}</div>
                <div className="nd-author-title">
                  {post.authorTitle || "Luật sư thành viên"}
                </div>
              </div>
            </div>

            <div className="nd-meta-divider" />

            <div className="nd-meta-items">
              <div className="nd-meta-item">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {formatDate(post.createdAt)}
              </div>
              <div className="nd-meta-item">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {post.readTime} {t("read")}
              </div>
              <div className="nd-meta-item">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                {(post.views || 0).toLocaleString()} {t("view")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN LAYOUT ── */}
      <div className="nd-layout">
        {/* ── NỘI DUNG ── */}
        <main className="nd-main">
          {/* Tags */}
          <div className="nd-tags">
            {post.tags?.map((tag) => (
              <span key={tag} className="nd-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Nội dung HTML từ Quill editor */}
          <div
            className="nd-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="nd-share">
            <span className="nd-share-label">{t("share_post")}</span>
            <div className="nd-share-btns">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="nd-share-btn nd-share-fb"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </a>
              <button
                className="nd-share-btn nd-share-copy"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Đã sao chép đường dẫn!");
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                {t("copy_link")}
              </button>
            </div>
          </div>

          {/* Author box */}
          {/* <div className="nd-author-box">
            <div className="nd-author-box-avatar">
              {post.author?.split(" ").pop()[0]}
            </div>
            <div className="nd-author-box-body">
              <p className="nd-author-box-label">{t("author")}</p>
              <h4 className="nd-author-box-name">{post.author}</h4>
              <p className="nd-author-box-desc">
                Luật sư chuyên về lĩnh vực {post.categoryLabel?.toLowerCase()}{" "}
                tại Công ty Luật TNHH Phúc Gia Uy & Cộng Sự. Với nhiều năm kinh
                nghiệm tư vấn và tranh tụng, chuyên gia trong bảo vệ quyền lợi
                khách hàng.
              </p>
            </div>
          </div> */}

          {/* Bài viết liên quan */}
          {related.length > 0 && (
            <div className="nd-related">
              <h3 className="nd-related-title">
                <span className="nd-related-bar" />
                {t("related_posts")}
              </h3>
              <div className="nd-related-grid">
                {related.map((rp) => (
                  <div
                    key={rp.id}
                    className="nd-related-card"
                    onClick={() => {
                      navigate(`/tin-tuc/${rp.slug}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div
                      className="nd-related-img"
                      style={{ backgroundImage: `url(${rp.thumbnail})` }}
                    />
                    <div className="nd-related-body">
                      <span className="nd-related-cat">{rp.categoryLabel}</span>
                      <h4 className="nd-related-card-title">{rp.title}</h4>
                      <div className="nd-related-meta">
                        <span>{formatDateShort(rp.createdAt)}</span>
                        <span>·</span>
                        <span>
                          {rp.readTime} {t("read")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* ── SIDEBAR ── */}
        <aside className="nd-sidebar">
          {/* Bài viết gần đây */}
          <div className="nd-sidebar-block">
            <div className="nd-sidebar-title">
              <span className="nd-sidebar-bar" />
              {t("recent_posts")}
            </div>
            {recent.map((rp) => (
              <div
                key={rp.id}
                className="nd-sidebar-recent"
                onClick={() => {
                  navigate(`/tin-tuc/${rp.slug}`);
                  window.scrollTo(0, 0);
                }}
              >
                <div
                  className="nd-sidebar-recent-img"
                  style={{ backgroundImage: `url(${rp.thumbnail})` }}
                />
                <div className="nd-sidebar-recent-body">
                  <span className="nd-sidebar-recent-cat">
                    {rp.categoryLabel}
                  </span>
                  <p className="nd-sidebar-recent-title">{rp.title}</p>
                  <span className="nd-sidebar-recent-date">
                    {formatDateShort(rp.createdAt)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tags phổ biến */}
          <div className="nd-sidebar-block">
            <div className="nd-sidebar-title">
              <span className="nd-sidebar-bar" />
              {t("popular_topics")}
            </div>
            <div className="nd-sidebar-tags">
              {suggestedTags
                .filter((t) => post.tags.includes(t))
                .slice(0, 10)
                .map((tag) => (
                  <span
                    key={tag}
                    className="nd-sidebar-tag"
                    onClick={() => navigate(`/tin-tuc?search=${tag}`)}
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ── BACK TO TOP ── */}
      {showBackTop && (
        <button
          className="nd-back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </div>
  );
}
