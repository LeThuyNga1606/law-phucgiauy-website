import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../../styles/aboutUs.css";


const AboutPage = () => {
  const [activeService, setActiveService] = useState(null);
  const { t } = useTranslation();
  
  const SERVICES = [
    { icon: "⚖", title: t("about_service_civil_title"), color: "#A8171C", intro: t("about_service_civil_item_1"), to: "/dan-su" },
    { icon: "🏛", title: t("about_service_criminal_title"), color: "#1F5E55", intro: t("about_service_criminal_item_1"), to: "/hinh-su" },
    { icon: "🌐", title: t("about_service_investment_title"), color: "#A8171C", intro: t("about_service_investment_item_1"), to: "/dau-tu" },
    { icon: "🏢", title: t("about_service_enterprise_title"), color: "#1F5E55", intro: t("about_service_enterprise_item_1"), to: "/doanh-nghiep" },
    { icon: "📋", title: t("about_service_license_title"), color: "#A8171C", intro: t("about_service_license_item_1"), to: "/giay-phep" },
  ];

  const NEWS = [
    { date: "15/02/2025", category: t("about_news_1_category"), title: t("about_news_1_title"), excerpt: t("about_news_1_excerpt"), slug: "thay-doi-luat-doanh-nghiep-2024" },
    { date: "08/02/2025", category: t("about_news_2_category"), title: t("about_news_2_title"), excerpt: t("about_news_2_excerpt"), slug: "thanh-lap-cong-ty-fdi-viet-nam" },
    { date: "01/02/2025", category: t("about_news_3_category"), title: t("about_news_3_title"), excerpt: t("about_news_3_excerpt"), slug: "giai-quyet-tranh-chap-dat-dai" },
  ];
  return (
    <div className="about-root">

      <section className="about-hero">
        <div className="about-hero-bg-grid" />
        <div className="about-hero-inner">
          <div className="about-hero-left">
            <p className="about-eyebrow"><span className="about-eyebrow-line" />{t("about_eyebrow")}</p>
            <h1 className="about-hero-title">{t("about_intro_title_1")} {t("about_intro_title_2")}<br /><br /><em>{t("slogan")}</em></h1>
            <p className="about-hero-desc">{t("about_hero_title_1")} {t("about_hero_title_2")}</p>
            <div className="about-hero-actions">
              <Link to="/lien-he" className="about-btn-red">{t("about_btn_consult")}</Link>
              <Link to="/tin-tuc" className="about-btn-outline">{t("about_btn_news")}</Link>
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
            {t("about_intro_eyebrow")}
          </p>

          <div className="about-intro-grid">
            {/* Cột trái — 3 đoạn văn */}
            <div className="about-intro-content">
              <p className="about-intro-para">
                {t("about_intro_para_1")}
              </p>
              <p className="about-intro-para">
                {t("about_intro_para_2")}
              </p>
              <p className="about-intro-para">
                {t("about_intro_para_3")}
              </p>
            </div>

            {/* Cột phải — 3 giá trị cốt lõi */}
            <div className="about-intro-values">
              {[
                { icon: "👁", title: t("about_value_1_title"), desc: t("about_value_1_desc") },
                { icon: "⚖", title: t("about_value_2_title"), desc: t("about_value_2_desc") },
                { icon: "🤝", title: t("about_value_3_title"), desc: t("about_value_3_desc") },
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
              <p className="about-eyebrow"><span className="about-eyebrow-line" />{t("about_service_eyebrow")}</p>
              <h2 className="about-section-title">{t("about_service_title_1")}<br/><em>{t("about_service_title_2")}</em></h2>
            </div>
            <p className="about-services-desc">{t("about_service_desc")}</p>
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
              <p className="about-eyebrow about-eyebrow-dark"><span className="about-eyebrow-line" />{t("about_news_eyebrow")}</p>
              <h2 className="about-section-title">{t("about_news_title_1")}<br/><em>{t("about_news_title_2")}</em></h2>
            </div>
            <Link to="/tin-tuc" className="about-btn-outline-dark">{t("about_news_view_all")}</Link>
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
                <Link to={"/tin-tuc/" + n.slug} className="about-news-link">{t("about_news_read_more")} <span>→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-contact">
        <div className="about-contact-bg-pattern" />
        <div className="about-contact-inner">
          <div className="about-contact-left">
            <p className="about-eyebrow"><span className="about-eyebrow-line" />{t("about_contact_eyebrow")}</p>
            <h2 className="about-contact-title">{t("about_contact_title_1")}<br/><em>{t("about_contact_title_2")}</em></h2>
            <p className="about-contact-desc">{t("about_contact_desc")}</p>
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
                    <div className="about-contact-card-title">{t(c.title)}</div>
                    {c.href ? <a href={c.href} className="about-contact-card-value link">{c.value}</a> : <div className="about-contact-card-value">{c.value}</div>}
                    <div className="about-contact-card-sub">{t(c.sub)}</div>
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