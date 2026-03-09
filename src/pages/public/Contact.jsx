import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/contact.css";
import { useTranslation } from 'react-i18next';

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const Contact = () => {
  const { t } = useTranslation();
  const today = new Date().getDay(); // 0 = CN, 1-5 = T2-T6, 6 = T7
  const isOpenNow = today >= 1 && today <= 5;

  const [form, setForm] = useState({
    name: "", phone: "", email: "", subject: "", message: "", address: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200)); // simulate API
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="contact-root">

      {/* ══ HERO ══ */}
      <section className="contact-hero">
        <div className="contact-hero-grid-bg" />
        <div className="contact-hero-inner">
          <h1 className="contact-hero-title">
            {t("contact_hero_title_1")} <br/>{t("contact_hero_title_2")}
          </h1>
          <p className="contact-hero-desc">
            {t("contact_hero_desc")}
          </p>
          {/* Status badge */}
          <div className={`contact-status ${isOpenNow ? "open" : "closed"}`}>
            <span className="contact-status-dot" />
            {isOpenNow ? t("contact_status_open") : t("contact_status_closed")}
          </div>
        </div>
      </section>

      <section className="about-contact">
        <div className="about-contact-bg-pattern" />
        <div className="about-contact-inner">
          <div className="about-contact-left">
            <div className="contact-form-inner">
              <div className="contact-form-header">
                <h2 className="contact-section-title contact-section-title-white"> {t("contact_form_title")} </h2>
              </div>

              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">✓</div>
                  <h3 className="contact-success-title">{t("contact_success_title")}</h3>
                  <p className="contact-success-desc">
                    {t("contact_success_desc")}
                  </p>
                  <button
                    className="contact-success-reset"
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", subject: "", message: "", address: "" }); }}
                  >
                    {t("contact_success_reset")}
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-grid">

                    <div className="contact-form-group">
                      <label className="contact-form-label">{t("contact_form_name")} <span className="required">*</span></label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t("contact_form_name_placeholder")}
                        required
                        className="contact-form-input"
                      />
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-form-label">{t("contact_form_phone")} <span className="required">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder={t("contact_form_phone_placeholder")}
                        required
                        className="contact-form-input"
                      />
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-form-label">{t("contact_form_email")}</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t("contact_form_email_placeholder")}
                        className="contact-form-input"
                      />
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-form-label">{t("contact_form_address")}</label>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder={t("contact_form_address_placeholder")}
                        className="contact-form-input"
                      />
                    </div>

                    <div className="contact-form-group contact-form-group-full">
                      <label className="contact-form-label">{t("contact_form_subject")}</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder={t("contact_form_subject_placeholder")}
                        className="contact-form-input"
                      />
                    </div>

                    <div className="contact-form-group contact-form-group-full">
                      <label className="contact-form-label">{t("contact_form_message")}</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t("contact_form_message_placeholder")}
                        rows={5}
                        className="contact-form-input contact-form-textarea"
                      />
                    </div>

                  </div>

                  <div className="contact-form-footer">
                    <p className="contact-form-note"> 🔒 {t("contact_form_note")} </p>
                    <button
                      type="submit"
                      className={`contact-form-submit ${loading ? "loading" : ""}`}
                      disabled={loading}
                    >
                      {loading ? (
                        <><span className="contact-spinner" /> {t("contact_form_submitting")}</>
                      ) : (
                        t("contact_form_submit")
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className="about-contact-right">
            <div className="contact-form-header">
              <h2 className="contact-section-title contact-section-title-white">{t("contact_info_title")}</h2>
            </div>
            <div className="about-contact-cards">
              {[
                { icon: "☎", title: t("contact_form_hotline"), value: "0909 724 768", sub: t("contact_info_hotline_sub"), href: "tel:0909724768" },
                { icon: "✉", title: t("contact_form_email"), value: "luatsunguyen0909@gmail.com", sub: t("contact_info_email_sub"), href: "mailto:luatsunguyen0909@gmail.com" },
                { icon: "⊙", title: t("contact_form_office"), value: "Tầng trệt, Số 17 Đường số 4, Khu phố 5, Phường Hiệp Bình, Thành phố Hồ Chí Minh", sub: t("contact_info_office_sub"), href: null },
              ].map((c, i) => (
                <div key={i} className="about-contact-card">
                  <div className="about-contact-card-icon">{c.icon}</div>
                  <div>
                    <div className="about-contact-card-title">{c.title}</div>
                    {c.href ? <a href={c.href} className="about-contact-card-value link">{c.value}</a> : <div className="about-contact-card-value">{c.value}</div>}
                    <div className="about-contact-card-sub">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ MAP + GIỜ LÀM VIỆC ══ */}
      {/* <section className="contact-map-section">
        <div className="contact-map-inner">
          <div className="contact-map-left">
            <p className="contact-eyebrow">
              <span className="contact-eyebrow-line" />
            <h2 className="contact-section-title">Tìm Chúng Tôi Tại Đây</h2>
              <span className="contact-eyebrow-line" />
            </p>
            <div className="contact-map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1341088016766!2d106.71954187576188!3d10.877402989277577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7ff98e82a9d%3A0x6534745d3d1b53a5!2zMTcg4bqgxJBhbmcgc-G7kSA0LCBraHUgcGjhu5EgNSwgVGhhe%2BG9lCDEkOG7pWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1svi!2s!4v1772465710973!5m2!1svi!2s"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=17+Duong+so+4+Hiep+Binh+Thu+Duc+HCM"
              target="_blank"
              rel="noreferrer"
              className="contact-directions-btn"
            >
              <span>⊙</span> Xem Chỉ Đường
            </a>
          </div>

          <div className="contact-map-right">
            <p className="contact-eyebrow">
              <span className="contact-eyebrow-line" />
              <h2 className="contact-section-title">Giờ Làm Việc</h2>
              <span className="contact-eyebrow-line" />
            </p>

            <div className="contact-hours-table">
              {WORKING_HOURS.map((h, i) => {
                const isToday = (i === 6 ? 0 : i + 1) === today;
                return (
                  <div
                    key={i}
                    className={`contact-hours-row ${!h.open ? "closed" : ""} ${isToday ? "today" : ""}`}
                  >
                    <div className="contact-hours-day">
                      {isToday && <span className="contact-today-badge">Hôm nay</span>}
                      {h.day}
                    </div>
                    <div className="contact-hours-time">{h.hours}</div>
                    <div className={`contact-hours-dot ${h.open ? "open" : "closed"}`} />
                  </div>
                );
              })}
            </div>

            <div className="contact-hours-note">
              <span>💡</span>
              <p>Ngoài giờ hành chính, quý khách có thể liên hệ qua Zalo hoặc để lại tin nhắn — chúng tôi sẽ phản hồi sớm nhất vào ngày làm việc tiếp theo.</p>
            </div>

            <div className="contact-quick-actions">
              <a href="tel:0909724768" className="contact-quick-btn contact-quick-btn-red">
                ☎ Gọi Ngay
              </a>
              <a href="https://zalo.me/0909724768" target="_blank" rel="noreferrer" className="contact-quick-btn contact-quick-btn-outline">
                Chat Zalo
              </a>
            </div>
          </div>

        </div>
      </section> */}

    </div>
  );
};

export default Contact;