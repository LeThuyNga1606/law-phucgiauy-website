import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/footer.css";
import logoImg from "../../assets/images/logo.png";

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  // ─── DATA ─────────────────────────────────────────────────────────────────────
  const SERVICES = [
    { label: t("footer_service_civil"), to: "/dan-su/tranh-chap-dat-dai" },
    { label: t("footer_service_criminal"), to: "/dan-su/tranh-chap-thua-ke" },
    {
      label: t("footer_service_investment"),
      to: "/hinh-su/bao-chua-bi-buoc-toi",
    },
    {
      label: t("footer_service_enterprise"),
      to: "/dau-tu/thanh-lap-cong-ty-von-nuoc-ngoai",
    },
    {
      label: t("footer_service_license"),
      to: "/doanh-nghiep/thanh-lap-doanh-nghiep",
    },
  ];
  const CONTACT = [
    {
      icon: "☎",
      label: t("footer_contact_hotline"),
      value: "0909 724 768",
      href: "tel:0909724768",
    },
    {
      icon: "✉",
      label: t("footer_contact_email"),
      value: "luatphucgiauy@gmail.com",
      href: "mailto:luatphucgiauy@gmail.com",
    },
    {
      icon: "⊙",
      label: t("footer_contact_office"),
      value: t("footer_contact_office_value"),
      href: null,
    },
    {
      icon: "◷",
      label: t("footer_contact_hours"),
      value: t("footer_contact_hours_value"),
      href: null,
    },
  ];

  const CERTIFICATIONS = [
    t("footer_cert_tax"),
    t("footer_cert_license"),
    t("footer_cert_date"),
    t("footer_cert_issued"),
  ];

  return (
    <footer className="footer">
      {/* ── MAIN FOOTER ── */}
      <div className="footer-main">
        <div className="footer-grid">
          {/* Col 1 — Brand */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-emblem">
                <img src={logoImg} alt="Logo" />
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-name">
                  {t("footer_logo_name")}
                  <br /> <em>{t("footer_logo_highlight")}</em>
                </span>
                <span className="footer-logo-sub">{t("slogan")}</span>
              </div>
            </Link>

            <p className="footer-brand-desc">{t("footer_brand_desc")}</p>

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
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn footer-social-zalo"
                aria-label="Zalo"
              >
                Z
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="YouTube"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Dịch vụ */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              <span className="footer-col-title-line" />
              {t("footer_service_title")}
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
              {t("footer_contact_title")}
            </h4>
            <div className="footer-contact-list">
              {CONTACT.map((c, i) => (
                <div key={i} className="footer-contact-item">
                  <span className="footer-contact-icon">{c.icon}</span>
                  <div className="footer-contact-body">
                    <span className="footer-contact-label">{c.label}</span>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="footer-contact-value footer-contact-link"
                      >
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7411363457977!2d106.72524787576133!3d10.831111489320994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527007b833f21%3A0xf7b1c4b258278d1!2zQ8O0bmcgdHkgTHXhuq10IFROSEggUGjDumMgR2lhIFV5ICYgQ-G7mW5nIHPhu7E!5e0!3m2!1sen!2s!4v1773502718113!5m2!1sen!2s"
                    width="280"
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
            © {year} {t("footer_logo_name")} {t("footer_logo_highlight")}.{" "}
            {t("footer_copyright")}
            <span className="footer-copyright-sep">|</span>
            {t("footer_cert_license")} {t("footer_cert_issued")}
          </p>
          <div className="footer-bottom-links">
            <Link to="/chinh-sach-bao-mat">{t("footer_privacy")}</Link>
            <span className="footer-bottom-sep" />
            <Link to="/dieu-khoan-su-dung">{t("footer_terms")}</Link>
            <span className="footer-bottom-sep" />
            <Link to="/sitemap">{t("footer_sitemap")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
