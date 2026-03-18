import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/serviceCategory.css";
import { serviceGroup } from "../../data/serviceGroup";
import {} from "react-router-dom";
// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function ServicesCategory() {
  const { category } = useParams();

  const current = serviceGroup.find((g) => g.id === category);
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
            Lĩnh vực hoạt động
            <span className="sp-eyebrow-line" />
          </div>
          <h1 className="sp-hero-title">{current.name}</h1>
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
          {/* Đoạn đầu */}
          {first && <p className="about-intro-para">{first}</p>}

          {/* Ảnh */}
          <div
            className="about-intro-img-wrap"
            style={{ marginTop: 50, marginBottom: 50 }}
          >
            <img
              // src={`/images/${current.id}.jpg`}
              src={current.img}
              alt={current.name}
              className="about-intro-img"
            />
          </div>

          {/* Đoạn giữa */}
          {middle.map((line, i) => (
            <p key={i} className="about-intro-para">
              {line}
            </p>
          ))}
        </div>

        {/* Services grid */}
        <div className="sp-grid" style={{ marginBottom: last ? 50 : 0 }}>
          {current.services.map((svc, i) => (
            <Link
              key={svc.key}
              to={svc.to}
              className="sp-card"
              style={{ "--delay": `${i * 60}ms`, "--accent": current.color }}
            >
              <div className="sp-card-top">
                <div className="sp-card-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="sp-card-arrow">→</div>
              </div>
              <h3 className="sp-card-name">{svc.name}</h3>
              <p className="sp-card-desc">{svc.desc}</p>
              <div className="sp-card-footer">
                <span className="sp-card-cta">Xem chi tiết</span>
                <div className="sp-card-bar" />
              </div>
            </Link>
          ))}
        </div>

        {/* Đoạn cuối */}
        {last && <p className="about-intro-para">{last}</p>}
      </div>
    </div>
  );
}
