import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/companyInfor.css";

import { useTranslation } from "react-i18next";

import intro1 from "../../assets/images/introduce_1.png";
import intro2 from "../../assets/images/introduce_2.jpg";
import intro3 from "../../assets/images/introduce_3.jpg";

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const CompanyInfor = () => {
  const { t } = useTranslation();
  return (
    <div className="company-root">
      {/* ══ HERO ══ */}
      <section className="company-hero">
        <div className="company-hero-overlay" />
        <div className="company-hero-inner">
          <h1 className="company-hero-title">
            {t("footer_logo_name")}
            <br />
            <span>{t("footer_logo_highlight")}</span>
          </h1>
          <p className="company-hero-slogan">{t("slogan")}</p>
        </div>
      </section>

      <section className="about-intro-section">
        <div className="about-intro-container">
          <div className="about-intro-block">
            <p className="about-intro-para">
              {t("about_intro_para1_plain")}
              <strong>{t("about_intro_para1_motto")}</strong>
              {t("about_intro_para1_suffix")}
            </p>
            <div className="about-intro-img-wrap">
              <img
                src={intro1}
                alt={t("about_intro_img1_alt")}
                className="about-intro-img"
              />
              <div className="about-intro-img-caption">
                {t("about_intro_img1_caption")}
              </div>
            </div>
          </div>

          <div className="about-intro-block">
            <p className="about-intro-para">{t("about_intro_para2")}</p>
            <div className="about-intro-img-wrap">
              <img
                src={intro3}
                alt={t("about_intro_img2_alt")}
                className="about-intro-img"
              />
            </div>
          </div>

          <div className="about-intro-block">
            <p className="about-intro-para">{t("about_intro_para3")}</p>
            <div className="about-intro-img-wrap">
              <img
                src={intro2}
                alt={t("about_intro_img3_alt")}
                className="about-intro-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyInfor;
