import { Link } from "react-router-dom";
import '../../styles/footer.css';
import logoImg from '../../assets/images/logo.png';

// ─── DATA ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  { label: "Dân sự",                 to: "/dan-su/tranh-chap-dat-dai" },
  { label: "Hình sự",                  to: "/dan-su/tranh-chap-thua-ke" },
  { label: "Đầu tư nước ngoài",                    to: "/hinh-su/bao-chua-bi-buoc-toi" },
  { label: "Doanh nghiệp ",        to: "/dau-tu/thanh-lap-cong-ty-von-nuoc-ngoai" },
  { label: "Giấy phép con ",              to: "/doanh-nghiep/thanh-lap-doanh-nghiep" },
];

const QUICK_LINKS = [
  { label: "Giới Thiệu",     to: "/gioi-thieu" },
  { label: "Dịch Vụ Dân Sự", to: "/dan-su" },
  { label: "Dịch Vụ Hình Sự",to: "/hinh-su" },
  { label: "Đầu Tư Nước Ngoài", to: "/dau-tu" },
  { label: "Doanh Nghiệp",   to: "/doanh-nghiep" },
  { label: "Giấy Phép Con",  to: "/giay-phep" },
  { label: "Tin Tức",        to: "/tin-tuc" },
  { label: "Liên Hệ",        to: "/lien-he" },
];

const CONTACT = [
  { icon: "☎", label: "Hotline", value: "0909 724 768", href: "tel:0909724768" },
  { icon: "✉", label: "Email", value: "luatsunguyen0909@gmail.com", href: "mailto:luatsunguyen0909@gmail.com" },
  { icon: "⊙", label: "Văn Phòng", value: "Tầng trệt, Số 17 Đường số 4, Khu phố 5, Phường Hiệp Bình, TP.HCM", href: null },
  { icon: "◷", label: "Giờ Làm Việc", value: "Thứ 2 - Thứ 6, 8h - 17h30", href: null },
];

const CERTIFICATIONS = [
  "Mã số thuế: 0318740937",
  "Giấy đăng ký hoạt động số: 79.2024.02.4633/TP/ĐKHĐ",
  "Ngày cấp: 25/10/2024, cấp đổi ngày 29/7/2025",
  "Được cấp phép hoạt động bởi Sở Tư Pháp TP.HCM",
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* ── MAIN FOOTER ── */}
      <div className="footer-main">
        <div className="footer-grid">

          {/* Col 1 — Brand */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-emblem"><img src={logoImg} alt="Logo" /></div>
              <div className="footer-logo-text">
                <span className="footer-logo-name">CÔNG TY LUẬT TNHH<br /> <em>PHÚC GIA UY & CỘNG SỰ</em></span>
                <span className="footer-logo-sub">Thấu hiểu - Trách nhiệm - Phụng sự</span>
              </div>
            </Link>

            <p className="footer-brand-desc">
              Đồng hành pháp lý tin cậy — bảo vệ quyền lợi doanh nghiệp
              và cá nhân tại Việt Nam với đội ngũ luật sư chuyên nghiệp,
              tận tâm và có kinh nghiệm thực chiến.
            </p>

            {/* Certifications */}
            <div className="footer-certs">
              {CERTIFICATIONS.map((c, i) => (
                <div key={i} className="footer-cert-item">
                  <span className="footer-cert-dot" />
                  <span>{c}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="footer-social-btn" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://zalo.me" target="_blank" rel="noreferrer"
                className="footer-social-btn footer-social-zalo" aria-label="Zalo">
                Z
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="footer-social-btn" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"
                className="footer-social-btn" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Dịch vụ */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              <span className="footer-col-title-line" />
              Dịch Vụ Nổi Bật
            </h4>
            <ul className="footer-link-list">
              {SERVICES.map((s, i) => (
                <li key={i}>
                  <Link to={s.to}>
                    <span className="footer-link-arrow">›</span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              <span className="footer-col-title-line" />
              Thông Tin Liên Hệ
            </h4>
            <div className="footer-contact-list">
              {CONTACT.map((c, i) => (
                <div key={i} className="footer-contact-item">
                  <span className="footer-contact-icon">{c.icon}</span>
                  <div className="footer-contact-body">
                    <span className="footer-contact-label">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="footer-contact-value footer-contact-link">
                        {c.value}
                      </a>
                    ) : (
                      <span className="footer-contact-value">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="footer-map">
              <div className="footer-map-placeholder">
                <span>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1341088016766!2d106.71954187576188!3d10.877402989277577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7ff98e82a9d%3A0x6534745d3d1b53a5!2zMTcgxJDGsOG7nW5nIHPhu5EgNCwga2h1IHBo4buRIDUsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1772465710973!5m2!1sen!2s"
                    width="400"
                    height="200"
                    style={{ borderRadius: 10 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            © {year} Công ty Luật TNHH Phúc Gia Uy & Cộng sự . Bảo lưu mọi quyền.
            <span className="footer-copyright-sep">|</span>
            Giấy đăng ký hoạt động số: 79.2024.02.4633/TP/ĐKHĐ do Sở Tư Pháp TP.HCM cấp
          </p>
          <div className="footer-bottom-links">
            <Link to="/chinh-sach-bao-mat">Chính Sách Bảo Mật</Link>
            <span className="footer-bottom-sep" />
            <Link to="/dieu-khoan-su-dung">Điều Khoản Sử Dụng</Link>
            <span className="footer-bottom-sep" />
            <Link to="/sitemap">Sơ Đồ Trang</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;