import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/notFound.css";
export default function NotFound() {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  // Đếm ngược tự động về trang chủ
  useEffect(() => {
    if (count <= 0) {
      navigate("/");
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count, navigate]);

  return (
    <div className="nf-root">
      {/* Background grid */}
      <div className="nf-grid" />

      {/* Decorative circles */}
      <div className="nf-circle nf-circle--1" />
      <div className="nf-circle nf-circle--2" />

      <div className="nf-content">
        {/* 404 số lớn */}
        <div className="nf-code-wrap">
          <span className="nf-code">4</span>
          <div className="nf-code">0</div>
          <span className="nf-code">4</span>
        </div>

        {/* Text */}
        <div className="nf-text">
          <h1 className="nf-title">Trang không tìm thấy</h1>
          <p className="nf-desc">
            Trang bạn đang tìm kiếm không tồn tại, đã bị di chuyển hoặc đường
            dẫn không chính xác.
          </p>
        </div>

        {/* Đếm ngược */}
        <div className="nf-countdown">
          <div className="nf-countdown-ring">
            <svg viewBox="0 0 48 48" className="nf-countdown-svg">
              <circle cx="24" cy="24" r="20" className="nf-countdown-track" />
              <circle
                cx="24"
                cy="24"
                r="20"
                className="nf-countdown-fill"
                style={{ strokeDashoffset: `${126 - (126 * count) / 10}` }}
              />
            </svg>
            <span className="nf-countdown-num">{count}</span>
          </div>
          <span className="nf-countdown-label">
            Tự động về trang chủ sau <strong>{count}</strong> giây
          </span>
        </div>

        {/* Buttons */}
        <div className="nf-actions">
          <Link to="/" className="nf-btn nf-btn--primary">
            ← Về trang chủ
          </Link>
          <button className="nf-btn nf-btn--ghost" onClick={() => navigate(-1)}>
            Quay lại trang trước
          </button>
        </div>
      </div>

      {/* Footer nhỏ */}
      <div className="nf-footer">
        <span>© 2026 Công ty Luật TNHH Phúc Gia Uy & Cộng Sự</span>
        <span>·</span>
        <a href="tel:0909724768">📞 0909 724 768</a>
      </div>
    </div>
  );
}
