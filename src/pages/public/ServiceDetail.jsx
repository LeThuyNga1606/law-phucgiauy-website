import { useParams, Link } from "react-router-dom";
import "../../styles/serviceDetail.css";
import { SERVICE_DATA } from "../../data/services";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const DEFAULT_SERVICE = {
  name: "Dịch Vụ Pháp Lý",
  tagline: "Tư vấn và hỗ trợ pháp lý chuyên nghiệp",
  image: "",
  desc: "Liên hệ với chúng tôi để được tư vấn chi tiết về dịch vụ này.",
  scope: [],
  steps: [],
};

export default function ServiceDetail() {
  const { category, slug } = useParams();

  const group = SERVICE_DATA[category];
  const service = group?.services?.[slug] || DEFAULT_SERVICE;
  const color = group?.color || "#A8171C";
  const groupLabel = group?.label || "Dịch vụ";

  const related = group
    ? Object.entries(group.services)
        .filter(([s]) => s !== slug)
        .slice(0, 3)
        .map(([s, d]) => ({ slug: s, ...d }))
    : [];

  return (
    <div className="sd-root">
      {/* ── HERO ── */}
      <section className="sd-hero" style={{ "--accent": color }}>
        <div className="sd-hero-grid" />
        <div className="sd-hero-inner">
          <div className="sd-hero-left">
            <div className="sd-hero-badge" style={{ background: color }}>
              {groupLabel}
            </div>
            <h1 className="sd-hero-title">{service.name}</h1>
            <p className="sd-hero-tagline">{service.tagline}</p>
          </div>

          <div className="sd-hero-img-wrap">
            {service.image ? (
              <img
                src={service.image}
                alt={service.name}
                className="sd-hero-img"
              />
            ) : (
              <div
                className="sd-hero-img-placeholder"
                style={{ "--accent": color }}
              >
                <span>⚖</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── LAYOUT ── */}
      <div className="sd-layout">
        <div className="sd-main">
          {/* Mô tả */}
          <section className="sd-section">
            <div className="sd-section-label" style={{ color }}>
              <span className="sd-label-dot" style={{ background: color }} />
              Tổng quan dịch vụ
            </div>
            <p className="sd-desc">{service.desc}</p>
          </section>

          {/* Phạm vi */}
          {service.types?.items.length > 0 && (
            <section className="sd-section">
              <div className="sd-section-label" style={{ color }}>
                <span className="sd-label-dot" style={{ background: color }} />
                {service.types.name}
              </div>
              <div className="sd-scope-grid">
                {service.types.items.map((item, i) => (
                  <div key={i} className="sd-scope-item">
                    <div
                      className="sd-scope-check"
                      style={{ background: color }}
                    >
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Quy trình */}
          {service.steps?.length > 0 && (
            <section className="sd-section">
              <div className="sd-section-label" style={{ color }}>
                <span className="sd-label-dot" style={{ background: color }} />
                Phạm vi dịch vụ cung cấp
              </div>
              <div className="sd-steps">
                {service.steps.map((step, i) => (
                  <div key={i} className="sd-step">
                    <div className="sd-step-left">
                      <div
                        className="sd-step-num"
                        style={{ color, borderColor: color }}
                      >
                        {step.num}
                      </div>
                      {i < service.steps.length - 1 && (
                        <div
                          className="sd-step-line"
                          style={{ background: `${color}25` }}
                        />
                      )}
                    </div>
                    <div className="sd-step-body">
                      <h4 className="sd-step-title">{step.title}</h4>
                      <p className="sd-step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Liên quan */}
          {related.length > 0 && (
            <section className="sd-section">
              <div className="sd-section-label" style={{ color }}>
                <span className="sd-label-dot" style={{ background: color }} />
                Dịch vụ liên quan
              </div>
              <div className="sd-related-grid">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/${category}/${r.slug}`}
                    className="sd-related-card"
                    style={{ "--accent": color }}
                  >
                    <div className="sd-related-name">{r.name}</div>
                    <div className="sd-related-desc">{r.desc}</div>
                    <div className="sd-related-arrow">→</div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
