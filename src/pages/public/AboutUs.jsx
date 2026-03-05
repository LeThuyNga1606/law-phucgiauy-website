import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/aboutUs.css";

const STATS = [
  { num: "10+", label: "Năm Kinh Nghiệm", desc: "Hoạt động từ 2014" },
  { num: "500+", label: "Vụ Án Thành Công", desc: "Tỉ lệ thắng 98%" },
  { num: "200+", label: "Doanh Nghiệp", desc: "Tin tưởng đồng hành" },
  { num: "15+", label: "Luật Sư", desc: "Chuyên nghiệp & tận tâm" },
];

const SERVICES = [
  { icon: "⚖", title: "Dân Sự", color: "#A8171C", intro: "Giải quyết các tranh chấp về Đất đai, Thừa kế, Ly hôn, Lao động, Thương mại, Hợp đồng, Sở hữu trí tuệ…", to: "/dan-su" },
  { icon: "🏛", title: "Hình Sự", color: "#1F5E55", intro: "Tham gia bào chữa người bị buộc tội; Tham gia bảo vệ quyền và lợi ích hợp pháp cho người bị hại, đương sự trong vụ án hình sự…", to: "/hinh-su" },
  { icon: "🌐", title: "Đầu Tư Nước Ngoài", color: "#A8171C", intro: "Xin cấp, điều chỉnh Giấy chứng nhận đăng ký đầu tư; Tư vấn và triển khai dự án FDI; Thành lập công ty, văn phòng đại diện; Thay đổi mục tiêu, quy mô, địa điểm, vốn và nhà đầu tư; Gia hạn tiến độ, thời hạn dự án…", to: "/dau-tu" },
  { icon: "🏢", title: "Doanh Nghiệp", color: "#1F5E55", intro: "Tư vấn pháp luật thường xuyên; Thành lập mới, thay đổi đăng ký kinh doanh; Thủ tục chia tách, sát nhập, tổ chức lại, giải thể, mua bán công ty....", to: "/doanh-nghiep" },
  { icon: "📋", title: "Giấy Phép Con", color: "#A8171C", intro: "Các loại “giấy phép con” liên quan hoạt động sản xuất, kinh doanh: Môi trường, Hóa chất, PCCC, Hoàn công nhà xưởng, Giấy phép lao động, Visa – thẻ tạm trú; Đăng ký hộ kinh doanh…", to: "/giay-phep" },
];

const NEWS = [
  { date: "15/02/2025", category: "Pháp Luật", title: "Những Thay Đổi Quan Trọng Trong Luật Doanh Nghiệp 2024", excerpt: "Luật Doanh Nghiệp sửa đổi năm 2024 mang lại nhiều thay đổi đáng kể ảnh hưởng trực tiếp đến doanh nghiệp...", slug: "thay-doi-luat-doanh-nghiep-2024" },
  { date: "08/02/2025", category: "Đầu Tư", title: "Thủ Tục Thành Lập Công Ty Có Vốn Đầu Tư Nước Ngoài Tại Việt Nam", excerpt: "Quy trình thành lập công ty FDI tại Việt Nam gồm các bước cần thiết mà nhà đầu tư nước ngoài cần nắm rõ...", slug: "thanh-lap-cong-ty-fdi-viet-nam" },
  { date: "01/02/2025", category: "Dân Sự", title: "Giải Quyết Tranh Chấp Đất Đai: Quy Trình & Lưu Ý Pháp Lý", excerpt: "Tranh chấp đất đai là loại tranh chấp phổ biến và phức tạp nhất tại Việt Nam. Bài viết phân tích quy trình...", slug: "giai-quyet-tranh-chap-dat-dai" },
];

const VALUES = [
  { num: "01", title: "Chính Trực", desc: "Minh bạch và trung thực trong từng tư vấn — nền tảng xây dựng niềm tin lâu dài với khách hàng." },
  { num: "02", title: "Chuyên Nghiệp", desc: "Đội ngũ luật sư được đào tạo bài bản, cập nhật liên tục quy định pháp luật mới nhất." },
  { num: "03", title: "Tận Tâm", desc: "Lắng nghe và thấu hiểu từng vấn đề của khách hàng — giải pháp pháp lý phù hợp nhất." },
  { num: "04", title: "Hiệu Quả", desc: "Cam kết giải quyết nhanh chóng, tiết kiệm thời gian và chi phí tối đa cho khách hàng." },
];

const useCounter = (target, duration = 1800) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !started) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    const num = parseInt(target);
    const step = num / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, num);
      setCount(Math.floor(current));
      if (current >= num) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return { count, ref };
};

const AboutPage = () => {
  const [activeService, setActiveService] = useState(null);
  return (
    <div className="about-root">

      <section className="about-hero">
        <div className="about-hero-bg-grid" />
        <div className="about-hero-inner">
          <div className="about-hero-left">
            <p className="about-eyebrow"><span className="about-eyebrow-line" />Về Chúng Tôi</p>
            <h1 className="about-hero-title">Công ty Luật Phúc Gia Uy & Cộng sự<br /><br /><em>Thấu hiểu - Trách nhiệm - Phụng sự</em></h1>
            <p className="about-hero-desc">Đối Tác Pháp Lý Tin Cậy & Tận Tâm</p>
            <div className="about-hero-actions">
              <Link to="/lien-he" className="about-btn-red">Tư Vấn Miễn Phí</Link>
              <Link to="/tin-tuc" className="about-btn-outline">Xem Tin Tức</Link>
            </div>
          </div>
          <div className="about-hero-right">
            <div className="about-hero-contact-grid">
              <div className="about-hero-contact-card">
                <div className="about-hero-contact-icon">📞</div>
                <div><strong>0909 724 768</strong></div>
              </div>
              <div className="about-hero-contact-card">
                <div className="about-hero-contact-icon">✉️</div>
                <div><strong>luatsunguyen0909@gmail.com</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-info">
        <div className="about-info-inner-single">
          <p className="about-eyebrow about-eyebrow-dark">
            <span className="about-eyebrow-line" />
            Giới Thiệu Công Ty Luật Phúc Gia Uy & Cộng Sự
          </p>

          <div className="about-intro-grid">
            {/* Cột trái — 3 đoạn văn */}
            <div className="about-intro-content">
              <p className="about-intro-para">
                Công ty Luật TNHH Phúc Gia Uy & Cộng sự được thành lập với định hướng xây dựng
                một tổ chức hành nghề luật chuyên nghiệp, tận tâm và chuẩn mực. Ngay từ những ngày
                đầu hoạt động, Công ty đã lựa chọn phương châm <strong>"Thấu hiểu – Trách nhiệm –
                Phụng sự"</strong> làm giá trị cốt lõi, kim chỉ nam cho mọi hoạt động tư vấn và tranh tụng.
              </p>
              <p className="about-intro-para">
                Thấu hiểu để đồng hành cùng khách hàng trong từng vụ việc; trách nhiệm để bảo vệ
                tối đa quyền và lợi ích hợp pháp; và phụng sự như một cam kết nghề nghiệp bền vững.
                Trên nền tảng đó, Công ty từng bước khẳng định uy tín và trở thành đối tác pháp lý
                tin cậy của cá nhân, doanh nghiệp trong và ngoài nước.
              </p>
              <p className="about-intro-para">
                Công ty tập trung cung cấp dịch vụ pháp lý trong các lĩnh vực trọng tâm như: Dân sự,
                Hình sự, Đầu tư nước ngoài (FDI), Doanh nghiệp và Giấy phép. Với đội ngũ luật sư giàu
                kinh nghiệm, bản lĩnh trong tranh tụng và chuyên sâu trong tư vấn, Phúc Gia Uy & Cộng sự
                luôn hướng đến việc đưa ra các giải pháp pháp lý tối ưu, bảo vệ hiệu quả quyền và lợi
                ích hợp pháp của khách hàng.
              </p>
            </div>

            {/* Cột phải — 3 giá trị cốt lõi */}
            <div className="about-intro-values">
              {[
                { icon: "👁", title: "Thấu Hiểu", desc: "Đồng hành cùng khách hàng trong từng vụ việc, lắng nghe và thấu hiểu để tìm ra giải pháp phù hợp nhất." },
                { icon: "⚖", title: "Trách Nhiệm", desc: "Bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng với sự tận tâm và chuyên nghiệp cao nhất." },
                { icon: "🤝", title: "Phụng Sự", desc: "Cam kết nghề nghiệp bền vững — phụng sự khách hàng như một sứ mệnh, không chỉ là công việc." },
              ].map((v, i) => (
                <div key={i} className="about-intro-value-card">
                  <div className="about-intro-value-icon">{v.icon}</div>
                  <div>
                    <h4 className="about-intro-value-title">{v.title}</h4>
                    <p className="about-intro-value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="about-services-inner">
          <div className="about-services-header">
            <div>
              <p className="about-eyebrow"><span className="about-eyebrow-line" />Dịch Vụ</p>
              <h2 className="about-section-title">Các Dịch Vụ<br /><em>Pháp Lý Chính</em></h2>
            </div>
            <p className="about-services-desc">Chúng tôi cung cấp giải pháp pháp lý toàn diện trong nhiều lĩnh vực, với đội ngũ luật sư chuyên sâu và kinh nghiệm thực chiến phong phú.</p>
          </div>
          <div className="about-services-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className={`about-service-card ${activeService === i ? "active" : ""}`} style={{"--accent": s.color}} onMouseEnter={() => setActiveService(i)} onMouseLeave={() => setActiveService(null)}>
                <div className="about-service-icon">{s.icon}</div>
                <h3 className="about-service-title">{s.title}</h3>
                <p className="about-service-intro">{s.intro}</p>
                <Link to={s.to} className="about-service-link">Xem Chi Tiết <span>→</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-news">
        <div className="about-news-inner">
          <div className="about-news-header">
            <div>
              <p className="about-eyebrow about-eyebrow-dark"><span className="about-eyebrow-line" />Tin Tức</p>
              <h2 className="about-section-title">Bản Tin Pháp Lý<br /><em>Mới Nhất</em></h2>
            </div>
            <Link to="/tin-tuc" className="about-btn-outline-dark">Xem Tất Cả →</Link>
          </div>
          <div className="about-news-grid">
            {NEWS.map((n, i) => (
              <article key={i} className="about-news-card">
                <div className="about-news-card-top">
                  <span className="about-news-category">{n.category}</span>
                  <span className="about-news-date">📅 {n.date}</span>
                </div>
                <Link to={"/tin-tuc/" + n.slug}><h3 className="about-news-title">{n.title}</h3></Link>
                <p className="about-news-excerpt">{n.excerpt}</p>
                <Link to={"/tin-tuc/" + n.slug} className="about-news-link">Đọc Thêm →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-contact">
        <div className="about-contact-bg-pattern" />
        <div className="about-contact-inner">
          <div className="about-contact-left">
            <p className="about-eyebrow"><span className="about-eyebrow-line" />Liên Hệ</p>
            <h2 className="about-contact-title">Sẵn Sàng Hỗ Trợ<br /><em>Bạn Ngay Hôm Nay</em></h2>
            <p className="about-contact-desc">Đừng để vấn đề pháp lý trở thành rào cản phát triển của bạn. Đội ngũ luật sư của chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp tốt nhất cho từng tình huống cụ thể.</p>
            
          </div>
          <div className="about-contact-right">
            <div className="about-contact-cards">
              {[
                { icon: "☎", title: "Hotline", value: "0909 724 768", sub: "Hỗ trợ 24/7", href: "tel:0909724768" },
                { icon: "✉", title: "Email", value: "luatsunguyen0909@gmail.com", sub: "Phản hồi trong 24h", href: "mailto:luatsunguyen0909@gmail.com" },
                { icon: "⊙", title: "Văn Phòng", value: "Tầng trệt, Số 17 Đường số 4, Khu phố 5, Phường Hiệp Bình, Thành phố Hồ Chí Minh", sub: "T2–T6: 07:30–17:00", href: null },
              ].map((c, i) => (
                <div key={i} className="about-contact-card">
                  <div className="about-contact-card-icon">{c.icon}</div>
                  <div>
                    <div className="about-contact-card-title">{c.title}</div>
                    {c.href ? <a href={c.href} className="about-contact-card-value link">{c.value}</a> : <div className="about-contact-card-value">{c.value}</div>}
                    <div className="about-contact-card-sub">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;