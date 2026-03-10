import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/news.css";

// ─── DATA (hardcode tạm — Phase 3 sẽ thay bằng Firestore) ────────────────────
const CATEGORIES = [
  { key: "all", label: "Tất cả" },
  { key: "civil", label: "Dân sự" },
  { key: "criminal", label: "Hình sự" },
  { key: "investment", label: "Đầu tư - FDI" },
  { key: "enterprise", label: "Doanh nghiệp" },
  { key: "license", label: "Giấy phép" },
  { key: "news", label: "Tin tức pháp luật" },
];

const NEWS_DATA = [
  {
    id: 1,
    slug: "quy-dinh-moi-ve-ly-hon-2024",
    category: "civil",
    categoryLabel: "Dân sự",
    title:
      "Những quy định mới nhất về thủ tục ly hôn theo Luật Hôn nhân và Gia đình 2024",
    excerpt:
      "Luật Hôn nhân và Gia đình sửa đổi năm 2024 đã có nhiều thay đổi quan trọng về thủ tục ly hôn, quyền nuôi con và phân chia tài sản. Bài viết tổng hợp đầy đủ các điểm mới cần biết.",
    thumbnail: "/images/news/ly-hon-2024.jpg",
    author: "LS. Nguyễn Văn A",
    date: "2024-12-15",
    readTime: "8 phút",
    views: 1240,
    featured: true,
    tags: ["Ly hôn", "Hôn nhân gia đình", "2024"],
  },
  {
    id: 2,
    slug: "luat-dat-dai-2024-nhung-diem-moi",
    category: "civil",
    categoryLabel: "Dân sự",
    title:
      "Luật Đất đai 2024: Những điểm mới quan trọng ảnh hưởng đến người dân",
    excerpt:
      "Luật Đất đai 2024 chính thức có hiệu lực với hàng loạt quy định mới về quyền sử dụng đất, bồi thường giải phóng mặt bằng và đăng ký đất đai.",
    thumbnail: "/images/news/luat-dat-dai-2024.jpg",
    author: "LS. Trần Thị B",
    date: "2024-12-10",
    readTime: "12 phút",
    views: 2180,
    featured: true,
    tags: ["Đất đai", "Luật mới", "2024"],
  },
  {
    id: 3,
    slug: "thu-tuc-thanh-lap-cong-ty-2024",
    category: "enterprise",
    categoryLabel: "Doanh nghiệp",
    title:
      "Thủ tục thành lập công ty TNHH năm 2024: Hướng dẫn chi tiết từ A đến Z",
    excerpt:
      "Hướng dẫn đầy đủ các bước thành lập công ty TNHH một thành viên và hai thành viên, bao gồm hồ sơ cần chuẩn bị, thời gian xử lý và chi phí thực tế.",
    thumbnail: "/images/news/thanh-lap-cong-ty.jpg",
    author: "LS. Lê Văn C",
    date: "2024-12-05",
    readTime: "10 phút",
    views: 890,
    featured: false,
    tags: ["Doanh nghiệp", "Thành lập công ty", "TNHH"],
  },
  {
    id: 4,
    slug: "fdi-dau-tu-nuoc-ngoai-viet-nam",
    category: "investment",
    categoryLabel: "Đầu tư - FDI",
    title:
      "Quy trình cấp Giấy chứng nhận đăng ký đầu tư cho doanh nghiệp FDI tại Việt Nam",
    excerpt:
      "Nhà đầu tư nước ngoài cần nắm rõ quy trình xin cấp Giấy chứng nhận đăng ký đầu tư, điều kiện và hồ sơ cần thiết trước khi triển khai dự án tại Việt Nam.",
    thumbnail: "/images/news/fdi-dau-tu.jpg",
    author: "LS. Phạm Thị D",
    date: "2024-11-28",
    readTime: "15 phút",
    views: 650,
    featured: false,
    tags: ["FDI", "Đầu tư nước ngoài", "Giấy phép"],
  },
  {
    id: 5,
    slug: "bao-chua-hinh-su-quyen-bi-can",
    category: "criminal",
    categoryLabel: "Hình sự",
    title:
      "Quyền của bị can, bị cáo trong tố tụng hình sự: Những điều cần biết",
    excerpt:
      "Bị can, bị cáo có những quyền cơ bản nào theo Bộ luật Tố tụng Hình sự? Vai trò của luật sư bào chữa và cách thức bảo vệ quyền lợi hợp pháp trong quá trình tố tụng.",
    thumbnail: "/images/news/hinh-su-quyen.jpg",
    author: "LS. Nguyễn Văn A",
    date: "2024-11-20",
    readTime: "9 phút",
    views: 1560,
    featured: true,
    tags: ["Hình sự", "Bị can", "Bào chữa"],
  },
  {
    id: 6,
    slug: "giay-phep-kinh-doanh-co-dieu-kien",
    category: "license",
    categoryLabel: "Giấy phép",
    title:
      "Danh mục ngành nghề kinh doanh có điều kiện và thủ tục xin giấy phép 2024",
    excerpt:
      "Cập nhật danh mục 227 ngành nghề kinh doanh có điều kiện theo Luật Đầu tư 2020 sửa đổi, kèm hướng dẫn thủ tục xin cấp giấy phép cho từng lĩnh vực.",
    thumbnail: "/images/news/giay-phep.jpg",
    author: "LS. Trần Thị B",
    date: "2024-11-15",
    readTime: "11 phút",
    views: 720,
    featured: false,
    tags: ["Giấy phép", "Kinh doanh có điều kiện"],
  },
  {
    id: 7,
    slug: "tranh-chap-hop-dong-thuong-mai",
    category: "enterprise",
    categoryLabel: "Doanh nghiệp",
    title: "Giải quyết tranh chấp hợp đồng thương mại: Trọng tài hay Tòa án?",
    excerpt:
      "So sánh ưu nhược điểm của hai phương thức giải quyết tranh chấp thương mại phổ biến nhất hiện nay, giúp doanh nghiệp lựa chọn phù hợp với từng tình huống.",
    thumbnail: "/images/news/tranh-chap-hop-dong.jpg",
    author: "LS. Lê Văn C",
    date: "2024-11-08",
    readTime: "7 phút",
    views: 430,
    featured: false,
    tags: ["Tranh chấp", "Hợp đồng", "Trọng tài"],
  },
  {
    id: 8,
    slug: "thua-ke-di-chuc-hop-phap",
    category: "civil",
    categoryLabel: "Dân sự",
    title: "Di chúc hợp pháp: Điều kiện và hình thức theo Bộ luật Dân sự 2015",
    excerpt:
      "Một di chúc hợp pháp cần đáp ứng những điều kiện gì? Các hình thức lập di chúc được pháp luật công nhận và những sai lầm thường gặp khiến di chúc bị vô hiệu.",
    thumbnail: "/images/news/di-chuc.jpg",
    author: "LS. Phạm Thị D",
    date: "2024-10-30",
    readTime: "8 phút",
    views: 980,
    featured: false,
    tags: ["Di chúc", "Thừa kế", "Dân sự"],
  },
  {
    id: 9,
    slug: "lao-dong-nghi-viec-dung-luat",
    category: "news",
    categoryLabel: "Tin tức pháp luật",
    title: "Người lao động nghỉ việc đúng luật: Quyền lợi và thủ tục cần biết",
    excerpt:
      "Quy định về thời gian báo trước khi nghỉ việc, trợ cấp thôi việc, bảo hiểm thất nghiệp và các quyền lợi người lao động được hưởng khi chấm dứt hợp đồng.",
    thumbnail: "/images/news/lao-dong.jpg",
    author: "LS. Nguyễn Văn A",
    date: "2024-10-22",
    readTime: "6 phút",
    views: 1890,
    featured: false,
    tags: ["Lao động", "Nghỉ việc", "Quyền lợi"],
  },
  {
    id: 10,
    slug: "nhan-hieu-dang-ky-bao-ho",
    category: "license",
    categoryLabel: "Giấy phép",
    title:
      "Đăng ký bảo hộ nhãn hiệu tại Việt Nam: Quy trình và những lưu ý quan trọng",
    excerpt:
      "Hướng dẫn chi tiết quy trình đăng ký nhãn hiệu tại Cục Sở hữu trí tuệ, thời gian xử lý, chi phí và những lưu ý để tránh bị từ chối.",
    thumbnail: "/images/news/nhan-hieu.jpg",
    author: "LS. Trần Thị B",
    date: "2024-10-15",
    readTime: "10 phút",
    views: 560,
    featured: false,
    tags: ["Nhãn hiệu", "Sở hữu trí tuệ", "Đăng ký"],
  },
  {
    id: 11,
    slug: "tai-nan-giao-thong-boi-thuong",
    category: "civil",
    categoryLabel: "Dân sự",
    title:
      "Bồi thường thiệt hại do tai nạn giao thông: Mức bồi thường và trình tự khiếu nại",
    excerpt:
      "Nạn nhân tai nạn giao thông được quyền yêu cầu bồi thường những gì? Cách tính mức bồi thường và trình tự thủ tục đòi bồi thường thiệt hại theo quy định hiện hành.",
    thumbnail: "/images/news/tai-nan-gt.jpg",
    author: "LS. Lê Văn C",
    date: "2024-10-05",
    readTime: "9 phút",
    views: 2340,
    featured: false,
    tags: ["Tai nạn giao thông", "Bồi thường", "Dân sự"],
  },
  {
    id: 12,
    slug: "giai-the-cong-ty-thu-tuc",
    category: "enterprise",
    categoryLabel: "Doanh nghiệp",
    title: "Thủ tục giải thể công ty tự nguyện: Hướng dẫn từng bước năm 2024",
    excerpt:
      "Doanh nghiệp muốn giải thể tự nguyện cần thực hiện các bước nào? Hồ sơ cần chuẩn bị, cơ quan tiếp nhận và thời gian hoàn tất thủ tục giải thể.",
    thumbnail: "/images/news/giai-the.jpg",
    author: "LS. Phạm Thị D",
    date: "2024-09-28",
    readTime: "8 phút",
    views: 380,
    featured: false,
    tags: ["Giải thể", "Doanh nghiệp", "Thủ tục"],
  },
];

const POSTS_PER_PAGE = 9;

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function News() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef(null);

  // Lọc + tìm kiếm
  const filtered = useMemo(() => {
    let result = NEWS_DATA;
    if (activeCategory !== "all")
      result = result.filter((p) => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.toLowerCase().includes(q)),
      );
    }
    return result;
  }, [activeCategory, search]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  // Featured & most read cho sidebar
  const featuredPosts = NEWS_DATA.filter((p) => p.featured).slice(0, 3);
  const mostRead = [...NEWS_DATA].sort((a, b) => b.views - a.views).slice(0, 5);

  // Reset page khi filter/search thay đổi
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  return (
    <div className="news-page">
      {/* ── HERO ── */}
      <section className="news-hero">
        <div className="news-hero-grid" />
        <div className="news-hero-content">
          <h1 className="news-hero-title">{t("about_news_eyebrow")}</h1>
          <p className="news-hero-desc">
            Cập nhật thông tin pháp lý mới nhất, hướng dẫn thủ tục và phân tích
            chuyên sâu từ đội ngũ luật sư Phúc Gia Uy.
          </p>

          {/* Search bar trong hero */}
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
                placeholder="Tìm kiếm bài viết, chủ đề pháp lý..."
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
              Tìm kiếm
            </button>
          </form>

          {/* Stats */}
          <div className="news-hero-stats">
            <div className="news-hero-stat">
              <strong>{NEWS_DATA.length}+</strong>
              <span>Bài viết</span>
            </div>
            <div className="news-hero-stat-divider" />
            <div className="news-hero-stat">
              <strong>{CATEGORIES.length - 1}</strong>
              <span>Chuyên mục</span>
            </div>
            <div className="news-hero-stat-divider" />
            <div className="news-hero-stat">
              <strong>Hàng tuần</strong>
              <span>Cập nhật</span>
            </div>
          </div>
        </div>

        {/* Featured post nổi bật góc phải */}
        <div className="news-hero-featured">
          {featuredPosts[0] && (
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
                  <span>{formatDate(featuredPosts[0].date)}</span>
                  <span>·</span>
                  <span>{featuredPosts[0].readTime} đọc</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <div className="news-filter-bar" ref={gridRef}>
        <div className="news-filter-inner">
          <div className="news-filter-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`news-filter-tab ${activeCategory === cat.key ? "news-filter-tab--active" : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
                {cat.key !== "all" && (
                  <span className="news-filter-count">
                    {NEWS_DATA.filter((p) => p.category === cat.key).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Kết quả tìm kiếm */}
          {search && (
            <div className="news-search-result-info">
              Tìm thấy <strong>{filtered.length}</strong> kết quả cho "
              <em>{search}</em>"
              <button
                onClick={() => {
                  setSearch("");
                  setSearchInput("");
                }}
                className="news-clear-search"
              >
                Xóa tìm kiếm ✕
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="news-layout">
        {/* ── GRID BÀI VIẾT ── */}
        <main className="news-main">
          {paginated.length === 0 ? (
            <div className="news-empty">
              <div className="news-empty-icon">🔍</div>
              <h3>Không tìm thấy bài viết</h3>
              <p>Thử tìm kiếm với từ khóa khác hoặc chọn chuyên mục khác.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setSearchInput("");
                  setActiveCategory("all");
                }}
                className="news-empty-reset"
              >
                Xem tất cả bài viết
              </button>
            </div>
          ) : (
            <>
              <div className="news-grid">
                {paginated.map((post, i) => (
                  <article
                    key={post.id}
                    className="news-card"
                    style={{ "--delay": `${i * 60}ms` }}
                    onClick={() => navigate(`/tin-tuc/${post.slug}`)}
                  >
                    {/* Thumbnail */}
                    <div className="news-card-thumb">
                      <div
                        className="news-card-img"
                        style={{ backgroundImage: `url(${post.thumbnail})` }}
                      />
                      <span className="news-card-cat">
                        {post.categoryLabel}
                      </span>
                      {post.featured && (
                        <span className="news-card-featured">Nổi bật</span>
                      )}
                    </div>

                    {/* Body */}
                    <div className="news-card-body">
                      <div className="news-card-meta">
                        <span className="news-card-date">
                          {formatDate(post.date)}
                        </span>
                        <span className="news-card-dot">·</span>
                        <span className="news-card-read">
                          {post.readTime} đọc
                        </span>
                      </div>

                      <h3 className="news-card-title">{post.title}</h3>
                      <p className="news-card-excerpt">{post.excerpt}</p>

                      <div className="news-card-tags">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="news-card-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="news-card-footer">
                      <div className="news-card-author">
                        <div className="news-card-avatar">
                          {post.author.split(" ").pop()[0]}
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
                        {post.views.toLocaleString()}
                      </div>
                    </div>

                    <div className="news-card-bar" />
                  </article>
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="news-pagination">
                  <button
                    className="news-page-btn news-page-prev"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    ← Trước
                  </button>

                  <div className="news-page-numbers">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => {
                        // Hiển thị: trang đầu, cuối, và các trang xung quanh trang hiện tại
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
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Tiếp →
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
              Bài đọc nhiều nhất
            </div>
            <div className="news-sidebar-most-read">
              {mostRead.map((post, i) => (
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
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.views.toLocaleString()} lượt xem</span>
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
              Bài viết nổi bật
            </div>
            <div className="news-sidebar-featured">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="news-sidebar-feat-item"
                  onClick={() => navigate(`/tin-tuc/${post.slug}`)}
                >
                  <div
                    className="news-sidebar-feat-img"
                    style={{ backgroundImage: `url(${post.thumbnail})` }}
                  />
                  <div className="news-sidebar-feat-body">
                    <span className="news-sidebar-feat-cat">
                      {post.categoryLabel}
                    </span>
                    <p className="news-sidebar-feat-title">{post.title}</p>
                    <span className="news-sidebar-feat-date">
                      {formatDate(post.date)}
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
              Chuyên mục
            </div>
            <div className="news-sidebar-cats">
              {CATEGORIES.filter((c) => c.key !== "all").map((cat) => {
                const count = NEWS_DATA.filter(
                  (p) => p.category === cat.key,
                ).length;
                return (
                  <button
                    key={cat.key}
                    className={`news-sidebar-cat ${activeCategory === cat.key ? "active" : ""}`}
                    onClick={() => {
                      setActiveCategory(cat.key);
                      gridRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span>{cat.label}</span>
                    <span className="news-sidebar-cat-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
