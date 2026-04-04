import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/serviceCategory.css";
import { SERVICE_GROUP } from "../../data/serviceGroup";
// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function ServicesCategory() {
  const { t } = useTranslation();
  const { category, miniCategory } = useParams();
  window.scrollTo(0, 0);
  let current = null;
  if (miniCategory) {
    current = SERVICE_GROUP.find((g) => g.id === miniCategory);
  } else {
    current = SERVICE_GROUP.find((g) => g.id === category);
  }
  const desc = current?.description || [];

  const first = desc[0];
  const last = desc.length > 1 ? desc[desc.length - 1] : null;
  const middle = desc.slice(1, -1);
  return (
    <div className="sp-root">
      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid" />
        <div className="sp-hero-glow" />
        <div className="sp-hero-inner">
          <div className="sp-hero-eyebrow">
            <span className="sp-eyebrow-line" />
            {t("field_of_activity")}
            <span className="sp-eyebrow-line" />
          </div>
          <h1 className="sp-hero-title">{t(current.name)}</h1>
          {/* <p className="sp-hero-desc">
            Đội ngũ luật sư giàu kinh nghiệm của Phúc Gia Uy & Cộng Sự sẵn sàng
            đồng hành và bảo vệ quyền lợi hợp pháp của bạn trong mọi lĩnh vực
            pháp luật.
          </p>
          <div className="sp-hero-stats">
            <div className="sp-stat">
              <span className="sp-stat-num">10+</span>
              <span className="sp-stat-lbl">Năm kinh nghiệm</span>
            </div>
            <div className="sp-stat-div" />
            <div className="sp-stat">
              <span className="sp-stat-num">500+</span>
              <span className="sp-stat-lbl">Vụ việc thành công</span>
            </div>
            <div className="sp-stat-div" />
            <div className="sp-stat">
              <span className="sp-stat-num">5</span>
              <span className="sp-stat-lbl">Lĩnh vực chuyên sâu</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="sp-content">
        {/* Group intro */}
        <div className="sp-group-intro">
          <div className="sp-intro-layout" style={{ marginBottom: 50 }}>
            {/* Cột trái — ảnh 40% */}
            <div className="sp-intro-img-col">
              <div className="sp-intro-img-wrap">
                {/* inner để clip ảnh zoom, tách khỏi ::before viền xoay */}
                <div className="sp-intro-img-inner">
                  <img
                    src={current.img}
                    alt={current.name}
                    className="sp-intro-img"
                  />
                  <div className="sp-intro-img-overlay" />
                  <div className="sp-intro-img-label">{t(current.name)}</div>
                </div>
              </div>
            </div>

            {/* Cột phải — nội dung 70% */}
            <div className="sp-intro-text-col">
              {first && <p className="sp-intro-para-first">{t(first)}</p>}
              {middle.map((line, i) => (
                <p key={i} className="sp-intro-para">
                  {t(line)}
                </p>
              ))}
            </div>
          </div>

          {/* Explains */}
          {current.explains && (
            <div className="sp-explains">
              {current.explains.map((exp, i) => {
                const desc = exp.description || [];
                const isTwoColumn = desc.length > 4;
                const mid = Math.ceil(desc.length / 2);

                return (
                  <div key={i} className="sp-explain">
                    <h3 className="sp-title-subheading">{t(exp.name)}</h3>

                    {isTwoColumn ? (
                      <div className="sp-desc-grid">
                        <div>
                          {desc.slice(0, mid).map((line, j) => (
                            <p key={j} className="sp-intro-para">
                              {t(line)}
                            </p>
                          ))}
                        </div>

                        <div>
                          {desc.slice(mid).map((line, j) => (
                            <p key={j} className="sp-intro-para">
                              {t(line)}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : (
                      desc.map((line, j) => (
                        <p key={j} className="sp-intro-para">
                          {t(line)}
                        </p>
                      ))
                    )}
                  </div>
                );
              })}
            </div>
          )}
          {/* Services grid */}
          {current.services && (
            <div className="sp-grid" style={{ marginBottom: last ? 50 : 0 }}>
              {current.services?.map((svc, i) => (
                <Link key={svc.key} to={svc.to} className="sp-card">
                  <div className="sp-card-top">
                    <div className="sp-card-num">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="sp-card-arrow">→</div>
                  </div>
                  <h3 className="sp-card-name">{t(svc.name)}</h3>
                  <p className="sp-card-desc">{t(svc.desc)}</p>
                  <div className="sp-card-footer">
                    <span className="sp-card-cta">
                      {t("about_service_view_details")}
                    </span>
                    <div className="sp-card-bar" />
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Đoạn cuối */}
          {last && <p className="sp-intro-para">{t(last)}</p>}
        </div>
      </div>
    </div>
  );
}
