import { useParams, Link, useNavigate } from "react-router-dom"; // thêm useNavigate
import { useState, useEffect } from "react";
import "../../styles/serviceDetail.css";
import { SERVICE_DATA } from "../../data/services";
import LogoSlogan from "../../assets/images/background_aboutUs.png";
import { getPublishedPosts } from "../../services/news";

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
  const navigate = useNavigate(); // thêm

  // Tách riêng 2 state
  const [relatedServices, setRelatedServices] = useState([]); // dịch vụ liên quan
  const [relatedPosts, setRelatedPosts] = useState([]); // bài viết tin tức

  const group = SERVICE_DATA[category];
  const service = group?.services?.[slug] || DEFAULT_SERVICE;
  const color = group?.color || "#A8171C";
  const groupLabel = group?.label || "Dịch vụ";

  // Helper
  const formatDateShort = (val) => {
    if (!val) return "";
    const d = val?.toDate ? val.toDate() : new Date(val);
    return d.toLocaleDateString("vi-VN");
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // 1. Dịch vụ liên quan — lấy từ SERVICE_DATA tĩnh (cùng nhóm, khác slug)
    if (group?.services) {
      const others = Object.entries(group.services)
        .filter(([key]) => key !== slug)
        .slice(0, 3)
        .map(([key, val]) => ({ slug: key, ...val }));
      setRelatedServices(others);
    }

    // 2. Bài viết tin tức liên quan — lấy từ Firestore theo category key
    const firestoreCategory = category;
    if (firestoreCategory) {
      getPublishedPosts({ category: firestoreCategory, limitCount: 4 })
        .then(({ posts }) => setRelatedPosts(posts))
        .catch(() => setRelatedPosts([]));
    }
  }, [category, slug]);

  return (
    <div className="sd-root">
      {/* ── HERO ── */}
      <section className="sd-hero">
        <div
          className="nd-hero-bg"
          style={{ backgroundImage: `url(${LogoSlogan})` }}
        />
        <div className="sd-hero-grid" />
        <div className="sd-hero-inner">
          <div className="sd-hero-left">
            <div className="sd-hero-badge" style={{ background: color }}>
              {groupLabel}
            </div>
            <h1 className="sd-hero-title">{service.name}</h1>
            <p className="sd-hero-tagline">{service.tagline}</p>
          </div>
        </div>
      </section>

      {/* ── LAYOUT ── */}
      <div className="sd-layout">
        <main className="sd-main">
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

          {/* Dịch vụ liên quan */}
          {relatedServices.length > 0 && (
            <section className="sd-section">
              <div className="sd-section-label" style={{ color }}>
                <span className="sd-label-dot" style={{ background: color }} />
                Dịch vụ liên quan
              </div>
              <div className="sd-related-grid">
                {relatedServices.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/dich-vu/${category}/${r.slug}`}
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
        </main>

        {/* ── SIDEBAR ── */}
        <aside className="nd-sidebar">
          <div className="nd-sidebar-block">
            <div className="nd-sidebar-title">
              <span className="nd-sidebar-bar" />
              Bài viết liên quan
            </div>

            {relatedPosts.length === 0 ? (
              <p style={{ fontSize: 13, color: "#9ca3af", padding: "8px 0" }}>
                Chưa có bài viết nào.
              </p>
            ) : (
              relatedPosts.map((rp) => (
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
                      {formatDateShort(rp.createdAt)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
