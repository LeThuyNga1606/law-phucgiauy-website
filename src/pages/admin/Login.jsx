import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/login.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
        case "auth/invalid-credential":
          setError("Email hoặc mật khẩu không đúng.");
          break;
        case "auth/invalid-email":
          setError("Địa chỉ email không hợp lệ.");
          break;
        case "auth/too-many-requests":
          setError("Đăng nhập thất bại quá nhiều lần. Vui lòng thử lại sau.");
          break;
        default:
          setError("Đã có lỗi xảy ra. Vui lòng thử lại.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="al-root">
      {/* ── LEFT PANEL ── */}
      <div className="al-left">
        <div className="al-left-grid" />
        <div className="al-left-overlay" />

        <div className="al-left-content">
          {/* Logo */}
          <div className="al-logo">
            <div className="al-logo-icon"></div>
            <div>
              <div className="al-logo-name">
                {t("footer_logo_name")} {t("footer_logo_highlight")}
              </div>
              <div className="al-logo-sub">{t("slogan")}</div>
            </div>
          </div>

          {/* Tagline */}
          <div className="al-tagline">
            <h1 className="al-tagline-title">
              Hệ thống
              <br />
              <em>Quản lý nội dung</em>
            </h1>
            <p className="al-tagline-desc">
              Đăng nhập để quản lý bài viết, dịch vụ và thông tin trên website
              của Công ty Luật Phúc Gia Uy & Cộng Sự.
            </p>
          </div>

          {/* Features */}
          <div className="al-features">
            {[
              { icon: "📝", label: "Quản lý tin tức & bài viết" },
              { icon: "📊", label: "Xem thống kê & báo cáo" },
            ].map((f, i) => (
              <div key={i} className="al-feature">
                <span className="al-feature-icon">{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="al-left-footer">
            <span>© 2026 Phúc Gia Uy & Cộng Sự</span>
            <span>·</span>
            <a href="/" className="al-back-site">
              ← Về trang chủ
            </a>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL — FORM ── */}
      <div className="al-right">
        <div className="al-form-wrap">
          {/* Header */}
          <div className="al-form-header">
            <div className="al-form-icon">🔐</div>
            <h2 className="al-form-title">Đăng nhập quản trị</h2>
          </div>

          {/* Error */}
          {error && (
            <div className="al-error">
              <span className="al-error-icon">⚠</span>
              {error}
            </div>
          )}

          {/* Form */}
          <form className="al-form" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="al-field">
              <label className="al-label" htmlFor="al-email">
                Địa chỉ Email
              </label>
              <div className="al-input-wrap">
                <svg
                  className="al-input-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  id="al-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="admin@phucgiauy.com"
                  required
                  autoComplete="email"
                  className={`al-input ${error ? "al-input--error" : ""}`}
                />
              </div>
            </div>

            {/* Password */}
            <div className="al-field">
              <div className="al-label-row">
                <label className="al-label" htmlFor="al-password">
                  Mật khẩu
                </label>
              </div>
              <div className="al-input-wrap">
                <svg
                  className="al-input-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  id="al-password"
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  className={`al-input ${error ? "al-input--error" : ""}`}
                />
                <button
                  type="button"
                  className="al-toggle-pass"
                  onClick={() => setShowPass((v) => !v)}
                  tabIndex={-1}
                  title={showPass ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                >
                  {showPass ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`al-submit ${loading ? "al-submit--loading" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="al-spinner" />
                  Đang đăng nhập...
                </>
              ) : (
                <>
                  Đăng nhập
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Security note */}
          <div className="al-security-note">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Kết nối được bảo mật bởi Firebase Authentication
          </div>
        </div>
      </div>
    </div>
  );
}
