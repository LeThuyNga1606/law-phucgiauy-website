import { useParams, Link, useNavigate } from "react-router-dom"; // thêm useNavigate
import { useState, useEffect } from "react";
import "../../styles/serviceDetail.css";
import { SERVICE_DATA } from "../../data/services";
import LogoSlogan from "../../assets/images/background_aboutUs.png";
import { getPublishedPosts } from "../../services/news";
import { useTranslation } from "react-i18next";

export default function ServiceDetail() {
  const { t } = useTranslation();
  const { category, miniCategory, slug } = useParams();
  const navigate = useNavigate(); // thêm

  // Tách riêng 2 state
  const [relatedServices, setRelatedServices] = useState([]); // dịch vụ liên quan
  const [relatedPosts, setRelatedPosts] = useState([]); // bài viết tin tức

  const current = SERVICE_DATA.find((g) => g.id === slug);
  const color = current?.color || "#A8171C";
  const groupLabel = current?.tagline || "Dịch vụ";

  // Helper
  const formatDateShort = (val) => {
    if (!val) return "";
    const d = val?.toDate ? val.toDate() : new Date(val);
    return d.toLocaleDateString("vi-VN");
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // 1. Dịch vụ liên quan — lấy từ SERVICE_DATA tĩnh (cùng nhóm, khác slug)
    if (current?.services) {
      const others = Object.entries(current.services)
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
          style={{ backgroundImage: `url(${current?.img})` }}
        />
        <div className="nd-hero-overlay" />
        <div className="sd-hero-grid" />
        <div className="sd-hero-inner">
          <div className="sd-hero-left">
            <div className="sd-hero-badge" style={{ background: color }}>
              {t(groupLabel)}
            </div>
            <h1 className="sd-hero-title">{t(current?.label)}</h1>
            {/* <p className="sd-hero-tagline">{current?.tagline}</p> */}
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
              {t("service_overview")}
            </div>

            {current?.descriptions?.length > 0 && (
              <div className="sd-desc">
                {current.descriptions.map((para, i) => (
                  <p key={i}>{t(para)}</p>
                ))}
              </div>
            )}
          </section>

          {/* Phạm vi */}
          {current.explains?.length > 0 && (
            <section className="sd-section">
              {current.explains.map((explain, i) => (
                <>
                  <div className="sd-section-label" style={{ color }}>
                    <span
                      className="sd-label-dot"
                      style={{ background: color }}
                    />
                    {t(explain.name)}
                  </div>

                  {explain?.intros?.length > 0 && (
                    <div className="sd-desc">
                      {explain.intros.map((para) => (
                        <p key={para}>{t(para)}</p>
                      ))}
                    </div>
                  )}
                  <div className="sd-scope-grid">
                    {explain?.description?.map((item, i) => (
                      <div>
                        <div key={i} className="sd-scope-item">
                          <div
                            className="sd-scope-check"
                            style={{ background: color }}
                          >
                            ✓
                          </div>
                          <span style={{ whiteSpace: "pre-line" }}>
                            {t(item)}
                          </span>
                        </div>
                      </div>
                    ))}

                    {explain.items?.length > 0 && (
                      <section className="sd-section" style={{ marginTop: 20 }}>
                        <div className="sd-steps">
                          {explain.items.map((item, index) => (
                            <div key={index} className="sd-step">
                              <p key={index} className="sd-step-desc">
                                {t(item)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {explain.scopes?.length > 0 && (
                      <section className="sd-section" style={{ marginTop: 20 }}>
                        <div className="sd-steps">
                          {explain.scopes.map((scope, index) => (
                            <div key={index} className="sd-step">
                              <div className="sd-step-body">
                                <h4 className="sd-step-title">
                                  {t(scope.name)}
                                </h4>

                                {scope.items?.length > 0 &&
                                  scope.items.map((it, i) => (
                                    <p key={i} className="sd-step-desc">
                                      {t(it)}
                                    </p>
                                  ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                  {explain?.lastIntro?.length > 0 && (
                    <div className="sd-desc">
                      {explain.lastIntro.map((para) => (
                        <p key={para}>{t(para)}</p>
                      ))}
                    </div>
                  )}
                </>
              ))}
            </section>
          )}

          {/* Quy trình */}
          {current.processes?.length > 0 && (
            <section className="sd-section">
              {current.processes.map((processGroup, gIndex) => (
                <div key={gIndex}>
                  {/* Title giai đoạn */}
                  <div className="sd-section-label" style={{ color }}>
                    <span
                      className="sd-label-dot"
                      style={{ background: color }}
                    />
                    {t(processGroup.title)}
                  </div>

                  {processGroup?.intros?.length > 0 && (
                    <div className="sd-desc">
                      {processGroup.intros.map((para) => (
                        <p key={para}>{t(para)}</p>
                      ))}
                    </div>
                  )}

                  {/* Steps */}
                  <div className="sd-steps">
                    {processGroup.steps.map((step, i) => (
                      <div key={i} className="sd-step">
                        <div className="sd-step-left">
                          <div
                            className="sd-step-num"
                            style={{ color, borderColor: color }}
                          >
                            {t(step.num)}
                          </div>

                          {i < processGroup.steps.length - 1 && (
                            <div
                              className="sd-step-line"
                              style={{ background: `${color}25` }}
                            />
                          )}
                        </div>

                        <div className="sd-step-body">
                          <h4 className="sd-step-title">{t(step.title)}</h4>
                          <p className="sd-step-desc">{t(step.desc)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Dịch vụ liên quan */}
          {/* {relatedServices.length > 0 && (
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
          )} */}

          {current?.reasons && (
            <section className="sd-section">
              <div className="sd-section-label" style={{ color }}>
                <span className="sd-label-dot" style={{ background: color }} />
                {t(current.reasons.title)}
              </div>
              {current?.reasons?.intros?.length > 0 && (
                <div className="sd-desc">
                  {current.reasons.intros.map((para) => (
                    <p key={para}>{t(para)}</p>
                  ))}
                </div>
              )}
              <div className="sd-scope-grid">
                {current?.reasons?.items?.length > 0 &&
                  current.reasons.items.map((item, i) => (
                    <div key={i}>
                      <div className="sd-scope-item">
                        <div
                          className="sd-scope-check"
                          style={{ background: color }}
                        >
                          ✓
                        </div>
                        <span style={{ whiteSpace: "pre-line" }}>
                          {t(item)}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          )}

          <section className="sd-section">
            <div className="sd-section-label" style={{ color }}>
              <span className="sd-label-dot" style={{ background: color }} />
              {t("conclusion")}
            </div>
            {current?.lastPara?.length > 0 && (
              <div className="sd-desc">
                {current.lastPara.map((para, i) => (
                  <p key={i}>{t(para)}</p>
                ))}
              </div>
            )}
          </section>
        </main>

        {/* ── SIDEBAR ── */}
        <aside className="nd-sidebar">
          <div className="nd-sidebar-block">
            <div className="nd-sidebar-title">
              <span className="nd-sidebar-bar" />
              {t("related_posts")}
            </div>

            {relatedPosts.length === 0 ? (
              <p style={{ fontSize: 13, color: "#9ca3af", padding: "8px 0" }}>
                {t("no_related_posts")}
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
