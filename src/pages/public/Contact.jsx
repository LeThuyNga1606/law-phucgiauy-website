import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/contact.css";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import intro3 from "../../assets/images/introduce_3.jpg";
import { submitContactRequest } from "../../services/contact";

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const Contact = () => {
  const { t } = useTranslation();
  const today = new Date().getDay();
  const isOpenNow = today >= 1 && today <= 5;

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const EMPTY_FORM = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    address: "",
  };

  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const sentAt = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      dateStyle: "full",
      timeStyle: "short",
    });

    try {
      // Gửi EmailJS + lưu Firestore song song
      await Promise.all([
        // 1. Gửi email thông báo cho công ty
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            from_phone: form.phone,
            from_email: form.email || "(không cung cấp)",
            from_address: form.address || "(không cung cấp)",
            subject: form.subject || "(không có chủ đề)",
            message: form.message || "(không có mô tả)",
            sent_at: sentAt,
            to_email: "luatphucgiauy@gmail.com",
          },
          EMAILJS_PUBLIC_KEY,
        ),

        // 2. Lưu vào Firestore collection "contacts"
        submitContactRequest({
          name: form.name,
          phone: form.phone,
          email: form.email || "",
          address: form.address || "",
          subject: form.subject || "",
          message: form.message || "",
        }),
      ]);

      setSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err);

      // Nếu EmailJS lỗi nhưng Firestore đã lưu → vẫn coi là thành công
      // vì công ty vẫn có thể thấy trên dashboard
      if (err?.text || err?.status) {
        // Lỗi từ EmailJS — thử lưu Firestore riêng nếu chưa lưu
        try {
          await submitContactRequest({
            name: form.name,
            phone: form.phone,
            email: form.email || "",
            address: form.address || "",
            subject: form.subject || "",
            message: form.message || "",
          });
          setSubmitted(true); // Firestore OK → vẫn thành công
        } catch {
          setError(
            "Gửi thất bại. Vui lòng thử lại hoặc liên hệ trực tiếp qua hotline.",
          );
        }
      } else {
        setError(
          "Gửi thất bại. Vui lòng thử lại hoặc liên hệ trực tiếp qua hotline.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-root">
      {/* ══ HERO ══ */}
      <section className="contact-hero">
        <div className="contact-hero-grid-bg" />
        <div className="contact-hero-inner">
          <h1 className="contact-hero-title">
            {t("contact_hero_title_1")} <br />
            {t("contact_hero_title_2")}
          </h1>
          <p className="contact-hero-desc">{t("contact_hero_desc")}</p>
          <div className={`contact-status ${isOpenNow ? "open" : "closed"}`}>
            <span className="contact-status-dot" />
            {isOpenNow ? t("contact_status_open") : t("contact_status_closed")}
          </div>
        </div>
      </section>

      {/* ══ THÔNG TIN LIÊN HỆ ══ */}
      <section className="about-contact">
        <div className="contact-form-header">
          <h2 className="contact-section-title contact-section-title-dark">
            {t("contact_info_title")}
          </h2>
        </div>
        <div className="about-contact-inner">
          <div className="about-contact-left">
            <div className="about-contact-cards">
              {[
                {
                  icon: "☎",
                  title: t("about_contact_hotline_title"),
                  value: "0909 724 768",
                  sub: t("about_contact_hotline_sub"),
                  href: "tel:0909724768",
                },
                {
                  icon: "✉",
                  title: t("about_contact_email_title"),
                  value: "luatphucgiauy@gmail.com",
                  sub: t("about_contact_email_sub"),
                  href: "mailto:luatphucgiauy@gmail.com",
                },
                {
                  icon: "⊙",
                  title: t("about_contact_office_title"),
                  value: t("footer_contact_office_value"),
                  sub: t("about_contact_office_sub"),
                  href: null,
                },
              ].map((c, i) => (
                <div key={i} className="about-contact-card">
                  <div className="about-contact-card-icon">{c.icon}</div>
                  <div>
                    <div className="about-contact-card-title">{c.title}</div>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="about-contact-card-value link"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="about-contact-card-value">{c.value}</div>
                    )}
                    <div className="about-contact-card-sub">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-contact-middle">
            <div className="about-intro-img-wrap">
              <img
                src={intro3}
                alt={t("about_intro_img2_alt")}
                className="about-intro-img"
                style={{ maxHeight: 465, objectFit: "fill" }}
              />
            </div>
          </div>

          <div className="about-contact-right">
            <div className="contact-map-frame" style={{ borderRadius: 10 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7411363457977!2d106.72524787576133!3d10.831111489320994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527007b833f21%3A0xf7b1c4b258278d1!2zQ8O0bmcgdHkgTHXhuq10IFROSEggUGjDumMgR2lhIFV5ICYgQ-G7mW5nIHPhu7E!5e0!3m2!1sen!2s!4v1773502718113!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/onrFkZPKdNAgHkHv7"
              target="_blank"
              rel="noreferrer"
              className="contact-directions-btn"
            >
              <span>⊙</span> {t("about_service_get_directions")}
            </a>
          </div>
        </div>
      </section>

      {/* ══ FORM ══ */}
      <section className="contact-map-section">
        <div className="contact-map-inner">
          <div className="contact-form-inner">
            <div className="contact-form-header">
              <h2 className="contact-section-title contact-section-title-dark">
                {t("contact_form_title")}
              </h2>
            </div>

            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h3 className="contact-success-title">
                  {t("contact_success_title")}
                </h3>
                <p className="contact-success-desc">
                  {t("contact_success_desc")}
                </p>
                <button
                  className="contact-success-reset"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(EMPTY_FORM);
                  }}
                >
                  {t("contact_success_reset")}
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <div className="contact-form-group">
                    <label className="contact-form-label">
                      {t("contact_form_name")}{" "}
                      <span className="required">*</span>
                    </label>
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
                    <label className="contact-form-label">
                      {t("contact_form_phone")}{" "}
                      <span className="required">*</span>
                    </label>
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
                    <label className="contact-form-label">
                      {t("contact_form_email")}
                    </label>
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
                    <label className="contact-form-label">
                      {t("contact_form_address")}
                    </label>
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
                    <label className="contact-form-label">
                      {t("contact_form_subject")}
                    </label>
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
                    <label className="contact-form-label">
                      {t("contact_form_message")}
                    </label>
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

                {error && <div className="contact-form-error">⚠ {error}</div>}

                <div className="contact-form-footer">
                  <p className="contact-form-note">
                    🔒 {t("contact_form_note")}
                  </p>
                  <button
                    type="submit"
                    className={`contact-form-submit ${loading ? "loading" : ""}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="contact-spinner" />{" "}
                        {t("contact_form_submitting")}
                      </>
                    ) : (
                      t("contact_form_submit")
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
