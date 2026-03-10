import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../../styles/newsDetail.css";

// ─── DATA (hardcode tạm — Phase 3 thay bằng Firestore) ───────────────────────
// Import chung từ NewsPage để dùng lại — trong thực tế sẽ tách ra file data riêng
const NEWS_DATA = [
  {
    id: 1,
    slug: "quy-dinh-moi-ve-ly-hon-2024",
    category: "civil",
    categoryLabel: "Dân sự",
    title:
      "Những quy định mới nhất về thủ tục ly hôn theo Luật Hôn nhân và Gia đình 2024",
    excerpt:
      "Luật Hôn nhân và Gia đình sửa đổi năm 2024 đã có nhiều thay đổi quan trọng về thủ tục ly hôn, quyền nuôi con và phân chia tài sản.",
    thumbnail: "/images/news/ly-hon-2024.jpg",
    author: "LS. Nguyễn Văn A",
    authorTitle: "Luật sư thành viên",
    authorAvatar: null,
    date: "2024-12-15",
    readTime: "8 phút",
    views: 1240,
    featured: true,
    tags: ["Ly hôn", "Hôn nhân gia đình", "2024"],
    content: `
<h2>1. Tổng quan về các thay đổi</h2>
<p>Luật Hôn nhân và Gia đình năm 2014 (sửa đổi, bổ sung năm 2024) đã có nhiều thay đổi quan trọng nhằm bảo vệ tốt hơn quyền lợi của các bên trong quan hệ hôn nhân, đặc biệt là quyền lợi của phụ nữ và trẻ em.</p>

<figure>
  <img src="/images/news/ly-hon-2024.jpg" alt="Thủ tục ly hôn 2024" />
  <figcaption>Thủ tục ly hôn theo Luật Hôn nhân và Gia đình sửa đổi năm 2024 có nhiều điểm mới quan trọng</figcaption>
</figure>

<p>Những thay đổi này phản ánh thực tiễn xã hội hiện đại, đồng thời hài hòa với các chuẩn mực quốc tế về quyền con người và quyền trẻ em mà Việt Nam đã cam kết thực hiện.</p>

<h2>2. Điều kiện ly hôn theo quy định mới</h2>
<p>Theo quy định hiện hành, Tòa án giải quyết cho ly hôn khi có căn cứ về việc vợ, chồng có hành vi bạo lực gia đình hoặc vi phạm nghiêm trọng quyền, nghĩa vụ của vợ, chồng làm cho hôn nhân lâm vào tình trạng trầm trọng, đời sống chung không thể kéo dài, mục đích hôn nhân không đạt được.</p>
<blockquote>Mục đích của hôn nhân là xây dựng gia đình no ấm, bình đẳng, tiến bộ, hạnh phúc và bền vững. Khi mục đích này không thể đạt được, pháp luật cho phép chấm dứt quan hệ hôn nhân.</blockquote>

<h2>3. Thủ tục ly hôn thuận tình</h2>
<p>Đối với trường hợp ly hôn thuận tình, cả hai vợ chồng đều đồng ý ly hôn và đã thỏa thuận được về việc chia tài sản, việc trông nom, nuôi dưỡng, chăm sóc, giáo dục con, Tòa án công nhận thuận tình ly hôn và sự thỏa thuận về các vấn đề này nếu thỏa thuận bảo đảm quyền lợi chính đáng của vợ và con.</p>
<p><strong>Hồ sơ cần chuẩn bị bao gồm:</strong></p>
<ul>
  <li>Đơn xin thuận tình ly hôn (theo mẫu của Tòa án)</li>
  <li>Giấy đăng ký kết hôn (bản gốc)</li>
  <li>Chứng minh nhân dân/Căn cước công dân của cả hai vợ chồng</li>
  <li>Giấy khai sinh của con (nếu có con chung)</li>
  <li>Giấy tờ chứng minh quyền sở hữu tài sản chung cần phân chia</li>
  <li>Hộ khẩu hoặc giấy tờ xác nhận cư trú</li>
</ul>

<h2>4. Quyền nuôi con sau ly hôn</h2>
<p>Một trong những thay đổi quan trọng nhất liên quan đến quyền nuôi con. Theo quy định mới, con dưới 36 tháng tuổi được giao cho mẹ trực tiếp nuôi dưỡng, trừ trường hợp người mẹ không đủ điều kiện để trực tiếp trông nom, chăm sóc, nuôi dưỡng, giáo dục con hoặc cha mẹ có thỏa thuận khác phù hợp với lợi ích của con.</p>

<div class="img-row">
  <figure>
    <img src="/images/news/quyen-nuoi-con-1.jpg" alt="Quyền nuôi con" />
    <figcaption>Quyền nuôi con theo quy định mới</figcaption>
  </figure>
  <figure>
    <img src="/images/news/quyen-nuoi-con-2.jpg" alt="Lợi ích trẻ em" />
    <figcaption>Bảo vệ lợi ích tốt nhất cho trẻ em</figcaption>
  </figure>
</div>

<p>Đối với con từ đủ 07 tuổi trở lên, Tòa án phải lấy ý kiến của con về nguyện vọng được sống chung với cha hoặc mẹ. Đây là quy định tiến bộ, thể hiện sự tôn trọng ý kiến của trẻ em trong các quyết định ảnh hưởng đến cuộc sống của các em.</p>

<h2>5. Phân chia tài sản trong ly hôn</h2>
<p>Nguyên tắc phân chia tài sản chung trong ly hôn được thực hiện theo thỏa thuận của hai bên. Nếu không thỏa thuận được thì yêu cầu Tòa án giải quyết theo nguyên tắc:</p>
<ul>
  <li>Tài sản chung được chia đôi nhưng có tính đến các yếu tố hoàn cảnh của mỗi bên</li>
  <li>Bảo vệ quyền lợi chính đáng của vợ, con chưa thành niên</li>
  <li>Bảo vệ lợi ích hợp pháp của mỗi bên trong sản xuất, kinh doanh và nghề nghiệp</li>
  <li>Lỗi của mỗi bên trong vi phạm quyền, nghĩa vụ của vợ chồng</li>
</ul>

<h2>6. Lời khuyên từ luật sư</h2>
<p>Ly hôn là một quyết định quan trọng và ảnh hưởng sâu sắc đến cuộc sống của tất cả các thành viên trong gia đình. Trước khi đưa ra quyết định, các bên nên cân nhắc kỹ lưỡng và tìm kiếm sự hỗ trợ pháp lý chuyên nghiệp.</p>
<p>Luật sư không chỉ giúp bạn hiểu rõ quyền lợi của mình mà còn hỗ trợ đàm phán để đạt được kết quả tốt nhất cho tất cả các bên, đặc biệt là bảo vệ quyền lợi của trẻ em trong quá trình ly hôn.</p>
    `,
    relatedSlugs: [
      "luat-dat-dai-2024-nhung-diem-moi",
      "thua-ke-di-chuc-hop-phap",
      "tranh-chap-hop-dong-thuong-mai",
    ],
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
    authorTitle: "Luật sư thành viên",
    authorAvatar: null,
    date: "2024-12-10",
    readTime: "12 phút",
    views: 2180,
    featured: true,
    tags: ["Đất đai", "Luật mới", "2024"],
    content: `
<h2>1. Luật Đất đai 2024 có gì mới?</h2>
<p>Luật Đất đai 2024 (Luật số 31/2024/QH15) được Quốc hội thông qua ngày 18/01/2024 và chính thức có hiệu lực từ ngày 01/8/2024, thay thế Luật Đất đai 2013. Đây là bộ luật quan trọng nhất điều chỉnh quan hệ đất đai tại Việt Nam.</p>

<h2>2. Bảng giá đất mới và tác động</h2>
<p>Một trong những thay đổi quan trọng nhất là cơ chế xác định giá đất. Luật mới quy định giá đất phải phù hợp với giá trị thị trường, được xác định theo nguyên tắc thị trường, không còn dùng hệ số K điều chỉnh.</p>
<blockquote>Bảng giá đất được xây dựng định kỳ hàng năm, công bố và áp dụng từ ngày 1 tháng 1 của năm — thay vì 5 năm một lần như trước đây.</blockquote>

<h2>3. Quyền sử dụng đất của người Việt Nam định cư ở nước ngoài</h2>
<p>Luật mở rộng quyền của người Việt Nam định cư ở nước ngoài có quốc tịch Việt Nam được nhận chuyển nhượng quyền sử dụng đất ở trong khu vực được phép chuyển nhượng, không giới hạn như trước.</p>

<h2>4. Bồi thường, hỗ trợ, tái định cư</h2>
<p>Nguyên tắc bồi thường khi Nhà nước thu hồi đất được quy định rõ ràng hơn, bảo đảm người bị thu hồi đất có chỗ ở, đảm bảo thu nhập và điều kiện sống bằng hoặc tốt hơn nơi ở cũ.</p>
    `,
    relatedSlugs: [
      "quy-dinh-moi-ve-ly-hon-2024",
      "thua-ke-di-chuc-hop-phap",
      "bao-chua-hinh-su-quyen-bi-can",
    ],
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
    authorTitle: "Luật sư thành viên",
    authorAvatar: null,
    date: "2024-11-20",
    readTime: "9 phút",
    views: 1560,
    featured: true,
    tags: ["Hình sự", "Bị can", "Bào chữa"],
    content: `
<h2>1. Quyền của bị can trong giai đoạn điều tra</h2>
<p>Theo Bộ luật Tố tụng Hình sự 2015, bị can có các quyền cơ bản sau trong giai đoạn điều tra: biết mình bị khởi tố về tội gì, được giải thích về quyền và nghĩa vụ, trình bày lời khai, đưa ra chứng cứ và yêu cầu.</p>

<h2>2. Quyền có luật sư bào chữa</h2>
<p>Đây là quyền quan trọng nhất. Bị can, bị cáo có quyền tự bào chữa, nhờ luật sư hoặc người khác bào chữa. Cơ quan tiến hành tố tụng có nghĩa vụ thông báo và bảo đảm cho bị can, bị cáo thực hiện quyền bào chữa.</p>
<blockquote>Trong trường hợp bị can, bị cáo thuộc diện bắt buộc phải có người bào chữa mà không mời, cơ quan điều tra, Viện kiểm sát hoặc Tòa án phải chỉ định luật sư bào chữa cho họ.</blockquote>

<h2>3. Khi nào nên liên hệ luật sư?</h2>
<p>Câu trả lời là <strong>càng sớm càng tốt</strong> — ngay khi bị triệu tập lần đầu, trước khi bị bắt hoặc ngay sau khi bị bắt giữ. Sự hiện diện của luật sư từ giai đoạn đầu giúp bảo vệ quyền lợi tốt nhất cho thân chủ.</p>
    `,
    relatedSlugs: [
      "quy-dinh-moi-ve-ly-hon-2024",
      "luat-dat-dai-2024-nhung-diem-moi",
      "tai-nan-giao-thong-boi-thuong",
    ],
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
    authorTitle: "Luật sư thành viên",
    authorAvatar: null,
    date: "2024-10-30",
    readTime: "8 phút",
    views: 980,
    featured: false,
    tags: ["Di chúc", "Thừa kế", "Dân sự"],
    content: `
<h2>1. Di chúc là gì?</h2>
<p>Di chúc là sự thể hiện ý chí của cá nhân nhằm chuyển tài sản của mình cho người khác sau khi chết. Di chúc hợp pháp là di chúc được lập theo đúng quy định của pháp luật về điều kiện và hình thức.</p>

<h2>2. Điều kiện để di chúc có hiệu lực</h2>
<p>Theo Bộ luật Dân sự 2015, di chúc hợp pháp phải đáp ứng các điều kiện sau:</p>
<ul>
  <li>Người lập di chúc minh mẫn, sáng suốt trong khi lập di chúc</li>
  <li>Không bị lừa dối, đe dọa, cưỡng ép</li>
  <li>Nội dung di chúc không vi phạm điều cấm của pháp luật, không trái đạo đức xã hội</li>
  <li>Hình thức di chúc phù hợp với quy định pháp luật</li>
</ul>
    `,
    relatedSlugs: [
      "quy-dinh-moi-ve-ly-hon-2024",
      "luat-dat-dai-2024-nhung-diem-moi",
      "tranh-chap-hop-dong-thuong-mai",
    ],
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
    authorTitle: "Luật sư thành viên",
    authorAvatar: null,
    date: "2024-10-05",
    readTime: "9 phút",
    views: 2340,
    featured: false,
    tags: ["Tai nạn giao thông", "Bồi thường", "Dân sự"],
    content: `
<h2>1. Các loại thiệt hại được bồi thường</h2>
<p>Khi xảy ra tai nạn giao thông, nạn nhân có thể yêu cầu bồi thường các loại thiệt hại sau: thiệt hại về sức khỏe, thiệt hại về tài sản và các tổn thất tinh thần.</p>

<h2>2. Cách tính mức bồi thường</h2>
<p>Mức bồi thường thiệt hại được tính dựa trên chi phí thực tế phát sinh, bao gồm: chi phí cứu chữa, phục hồi sức khỏe; thu nhập thực tế bị mất; chi phí chăm sóc người bị thiệt hại; và các khoản thiệt hại hợp lý khác.</p>
    `,
    relatedSlugs: [
      "quy-dinh-moi-ve-ly-hon-2024",
      "bao-chua-hinh-su-quyen-bi-can",
      "thua-ke-di-chuc-hop-phap",
    ],
  },
  {
    id: 7,
    slug: "tranh-chap-hop-dong-thuong-mai",
    category: "enterprise",
    categoryLabel: "Doanh nghiệp",
    title: "Giải quyết tranh chấp hợp đồng thương mại: Trọng tài hay Tòa án?",
    excerpt:
      "So sánh ưu nhược điểm của hai phương thức giải quyết tranh chấp thương mại phổ biến nhất hiện nay.",
    thumbnail: "/images/news/tranh-chap-hop-dong.jpg",
    author: "LS. Lê Văn C",
    authorTitle: "Luật sư thành viên",
    authorAvatar: null,
    date: "2024-11-08",
    readTime: "7 phút",
    views: 430,
    featured: false,
    tags: ["Tranh chấp", "Hợp đồng", "Trọng tài"],
    content: `
<h2>1. Hai phương thức phổ biến nhất</h2>
<p>Khi xảy ra tranh chấp hợp đồng thương mại, doanh nghiệp thường có hai lựa chọn chính: giải quyết tại Trọng tài thương mại hoặc khởi kiện tại Tòa án nhân dân có thẩm quyền.</p>
<h2>2. So sánh Trọng tài và Tòa án</h2>
<p>Trọng tài có ưu điểm về tính bảo mật, nhanh chóng và linh hoạt trong lựa chọn trọng tài viên chuyên ngành. Tuy nhiên chi phí thường cao hơn Tòa án. Ngược lại, Tòa án có chi phí thấp hơn nhưng thời gian giải quyết có thể kéo dài hơn.</p>
    `,
    relatedSlugs: [
      "luat-dat-dai-2024-nhung-diem-moi",
      "thua-ke-di-chuc-hop-phap",
      "tai-nan-giao-thong-boi-thuong",
    ],
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function NewsDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = NEWS_DATA.find((p) => p.slug === slug);
  const relatedPosts = post
    ? NEWS_DATA.filter((p) => post.relatedSlugs?.includes(p.slug)).slice(0, 3)
    : [];
  const recentPosts = NEWS_DATA.filter((p) => p.slug !== slug).slice(0, 4);
  const articleRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  if (!post) {
    return (
      <div className="nd-notfound">
        <div className="nd-notfound-icon">📰</div>
        <h2>Bài viết không tồn tại</h2>
        <p>Bài viết bạn tìm kiếm đã bị xóa hoặc đường dẫn không đúng.</p>
        <Link to="/tin-tuc" className="nd-notfound-btn">
          ← Quay lại danh sách tin tức
        </Link>
      </div>
    );
  }

  return (
    <div className="nd-page" ref={articleRef}>
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
              <span className="nd-featured-badge">⭐ Nổi bật</span>
            )}
          </div>

          <h1 className="nd-hero-title">{post.title}</h1>
          <p className="nd-hero-excerpt">{post.excerpt}</p>

          <div className="nd-hero-meta">
            <div className="nd-author-chip">
              <div className="nd-author-avatar">
                {post.author.split(" ").pop()[0]}
              </div>
              <div>
                <div className="nd-author-name">{post.author}</div>
                <div className="nd-author-title">{post.authorTitle}</div>
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
                {formatDate(post.date)}
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
                {post.readTime} đọc
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
                {post.views.toLocaleString()} lượt xem
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN LAYOUT ── */}
      <div className="nd-layout">
        {/* ── NỘI DUNG BÀI VIẾT ── */}
        <main className="nd-main">
          {/* Tags */}
          <div className="nd-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="nd-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Nội dung */}
          <div
            className="nd-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="nd-share">
            <span className="nd-share-label">Chia sẻ bài viết:</span>
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
                Sao chép link
              </button>
            </div>
          </div>

          {/* Author box */}
          <div className="nd-author-box">
            <div className="nd-author-box-avatar">
              {post.author.split(" ").pop()[0]}
            </div>
            <div className="nd-author-box-body">
              <p className="nd-author-box-label">Tác giả</p>
              <h4 className="nd-author-box-name">{post.author}</h4>
              <p className="nd-author-box-desc">
                Luật sư chuyên về lĩnh vực {post.categoryLabel.toLowerCase()}{" "}
                tại Công ty Luật TNHH Phúc Gia Uy & Cộng Sự. Với nhiều năm kinh
                nghiệm tư vấn và tranh tụng, chuyên gia trong bảo vệ quyền lợi
                khách hàng.
              </p>
            </div>
          </div>

          {/* Bài viết liên quan */}
          {relatedPosts.length > 0 && (
            <div className="nd-related">
              <h3 className="nd-related-title">
                <span className="nd-related-bar" />
                Bài viết liên quan
              </h3>
              <div className="nd-related-grid">
                {relatedPosts.map((rp) => (
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
                        <span>
                          {new Date(rp.date).toLocaleDateString("vi-VN")}
                        </span>
                        <span>·</span>
                        <span>{rp.readTime} đọc</span>
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
              Bài viết gần đây
            </div>
            {recentPosts.map((rp) => (
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
                    {new Date(rp.date).toLocaleDateString("vi-VN")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tags phổ biến */}
          <div className="nd-sidebar-block">
            <div className="nd-sidebar-title">
              <span className="nd-sidebar-bar" />
              Chủ đề phổ biến
            </div>
            <div className="nd-sidebar-tags">
              {[
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
              ].map((tag) => (
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
    </div>
  );
}
