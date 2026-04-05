import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/aboutUs.css";
import LogoSlogan from "../../assets/images/introduce_4.jpg";
import IconDanSu from "../../assets/images/icon_dan_su.png";
import IconHinhSu from "../../assets/images/icon_hinh_su.png";
import IconDauTu from "../../assets/images/icon_dau_tu_nuoc_ngoai.png";
import IconDoanhNghiep from "../../assets/images/icon_doanh_nghiep.png";
import IconGiayPhep from "../../assets/images/icon_giay_phep_con.png";

import { getPublishedPosts } from "../../services/news";

const AboutPage = () => {
  const [activeService, setActiveService] = useState(null);
  const { t } = useTranslation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getPublishedPosts({ pageSize: 3 }).then(({ posts }) => setNews(posts));
  }, []);

  const SERVICES = [
    {
      img: IconDanSu,
      title: t("about_service_civil_title"),
      color: "#A8171C",
      intro: t("about_service_civil_item_1"),
      to: "/dich-vu/dan-su",
    },
    {
      img: IconHinhSu,
      title: t("about_service_criminal_title"),
      color: "#A8171C",
      intro: t("about_service_criminal_item_1"),
      to: "/dich-vu/hinh-su",
    },
    {
      img: IconDauTu,
      title: t("about_service_investment_title"),
      color: "#A8171C",
      intro: t("about_service_investment_item_1"),
      to: "/dich-vu/dau-tu-nuoc-ngoai",
    },
    {
      img: IconDoanhNghiep,
      title: t("about_service_enterprise_title"),
      color: "#A8171C",
      intro: t("about_service_enterprise_item_1"),
      to: "/dich-vu/doanh-nghiep",
    },
    {
      img: IconGiayPhep,
      title: t("about_service_license_title"),
      color: "#A8171C",
      intro: t("about_service_license_item_1"),
      to: "/dich-vu/giay-phep",
    },
  ];

  const useTyping = (text, speed = 80, delay = 600, repeatDelay = 1000) => {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
      let timeout, interval, repeatTimeout;

      const startTyping = () => {
        setDisplayed("");
        setDone(false);
        let i = 0;
        interval = setInterval(() => {
          setDisplayed(text.slice(0, i + 1));
          i++;
          if (i >= text.length) {
            clearInterval(interval);
            setDone(true);
            // ← sau 10s thì xóa rồi gõ lại
            repeatTimeout = setTimeout(() => {
              startTyping();
            }, repeatDelay);
          }
        }, speed);
      };

      // Delay lần đầu trước khi bắt đầu gõ
      timeout = setTimeout(() => {
        startTyping();
      }, delay);

      return () => {
        clearTimeout(timeout);
        clearTimeout(repeatTimeout);
        clearInterval(interval);
      };
    }, [text, speed, delay, repeatDelay]);

    return { displayed, done };
  };

  const slogan = t("slogan");
  const { displayed, done } = useTyping(slogan, 70, 800);
  return (
    <div className="about-root">
      <section className="about-hero">
        <div className="about-hero-bg-grid" />
        <div className="about-hero-inner">
          <div className="about-hero-left">
            <p className="about-eyebrow">
              <span className="about-eyebrow-line" />
              PGU LAW FIRM
            </p>
            <h1 className="about-hero-title">
              <span
                style={{
                  color: "var(--red)",
                  fontWeight: "bold",
                  fontSize: 52,
                }}
              >
                {displayed}
                {!done && <span className="about-typing-cursor">|</span>}
              </span>
            </h1>
            <div className="about-hero-actions">
              <Link to="/lien-he" className="about-btn-red">
                {t("about_btn_consult")}
              </Link>
            </div>
          </div>
          <div className="about-hero-right"></div>
        </div>
      </section>

      <section className="about-info">
        <div className="about-intro-grid">
          {/* Cột trái — 3 đoạn văn */}
          <div className="about-intro-content" style={{ alignSelf: "center" }}>
            <p className="about-eyebrow about-eyebrow-dark">
              <span className="about-eyebrow-line" />
              {t("about_intro_eyebrow")}
            </p>
            <p className="about-intro-para">{t("about_intro_para_1")}</p>
            <p className="about-intro-para">{t("about_intro_para_2")}</p>
            <p className="about-intro-para">{t("about_intro_para_3")}</p>
            <Link to="/gioi-thieu" className="about-btn-red">
              {t("about_intro_story")}
            </Link>
          </div>

          {/* Cột phải — 3 giá trị cốt lõi */}
          <div className="about-intro-values">
            <img src={LogoSlogan} alt="Core Values" />
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="about-services-inner">
          <div className="about-services-header">
            <p className="about-eyebrow">
              <span className="about-eyebrow-line" />
            </p>
            <h2 className="about-section-title">
              {t("about_service_title_1")}
              <br />
            </h2>
            <p className="about-eyebrow">
              <span className="about-eyebrow-line" />
            </p>
          </div>
          <div className="about-services-grid">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className={`about-service-card ${activeService === i ? "active" : ""}`}
                style={{ "--accent": s.color }}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="about-service-header">
                  <div className="about-service-icon">
                    <img src={s.img} alt={s.title} />
                  </div>
                  <h3
                    className="about-service-title"
                    style={{ color: s.color }}
                  >
                    {s.title}
                  </h3>
                </div>
                <Link to={s.to} className="about-service-link">
                  {t("about_service_detail")} <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-news">
        <div className="about-news-inner">
          <div className="about-news-header">
            <p className="about-eyebrow">
              <span className="about-eyebrow-line" />
            </p>
            <h2 className="about-section-title">{t("about_news_eyebrow")}</h2>
            <p className="about-eyebrow">
              <span className="about-eyebrow-line" />
            </p>
          </div>
          <div
            style={{ display: "flex", justifyContent: "end", marginBottom: 20 }}
          >
            <Link to="/tin-tuc" className="about-btn-outline-dark">
              {t("about_news_view_all")}
            </Link>
          </div>
          <div className="about-news-grid">
            {news.length === 0
              ? // Skeleton loading
                Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="about-news-card"
                    style={{ opacity: 0.5 }}
                  >
                    <div
                      className="skeleton-line"
                      style={{ width: "60%", marginBottom: 12 }}
                    />
                    <div
                      className="skeleton-line"
                      style={{ marginBottom: 8 }}
                    />
                    <div className="skeleton-line" style={{ width: "80%" }} />
                  </div>
                ))
              : news.map((n, i) => {
                  const formatDate = (val) => {
                    if (!val) return "";
                    const d = val?.toDate ? val.toDate() : new Date(val);
                    return d.toLocaleDateString("vi-VN");
                  };
                  return (
                    <article key={i} className="about-news-card">
                      <div className="about-news-card-top">
                        <span className="about-news-category">
                          {n.categoryLabel}
                        </span>
                        <span className="about-news-date">
                          📅 {formatDate(n.createdAt)}
                        </span>
                      </div>
                      <Link to={`/tin-tuc/${n.slug}`}>
                        <h3 className="about-news-title">{n.title}</h3>
                      </Link>
                      <p className="about-news-excerpt">{n.excerpt}</p>
                      <Link
                        to={`/tin-tuc/${n.slug}`}
                        className="about-news-link"
                      >
                        {t("about_news_read_more")}
                      </Link>
                    </article>
                  );
                })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
