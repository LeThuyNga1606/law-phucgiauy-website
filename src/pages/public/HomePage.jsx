import { useEffect, useRef, useState } from "react";

// ── CSS-in-JS styles ──────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap');

  :root {
    --red:         #A8171C;
    --red-dark:    #8A1217;
    --red-light:   #C41E24;
    --green:       #1F5E55;
    --green-dark:  #174D45;
    --green-light: #267A6E;
    --white:       #FFFFFF;
    --cream:       #F9F6F2;
    --cream2:      #F2EDE6;
    --dark:        #111111;
    --muted:       #666260;
    --border-r:    rgba(168,23,28,0.15);
    --border-g:    rgba(31,94,85,0.15);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .hp-root {
    font-family: 'Be Vietnam Pro', sans-serif;
    background: var(--white);
    color: var(--dark);
    overflow-x: hidden;
  }

  /* ── NAVBAR ── */
  .hp-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    height: 72px;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 60px;
    background: var(--white);
    border-bottom: 2px solid var(--red);
    box-shadow: 0 2px 20px rgba(168,23,28,0.07);
    transition: all 0.3s;
  }
  .hp-nav.scrolled {
    height: 60px;
    box-shadow: 0 4px 24px rgba(168,23,28,0.12);
  }
  .hp-nav-logo {
    display: flex; align-items: center; gap: 10px;
    text-decoration: none;
  }
  .hp-nav-logo-icon {
    width: 36px; height: 36px;
    background: var(--red);
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 16px;
    flex-shrink: 0;
  }
  .hp-nav-logo-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px; font-weight: 600;
    color: var(--dark); letter-spacing: 0.04em;
  }
  .hp-nav-logo-text span { color: var(--red); }
  .hp-nav-links {
    display: flex; gap: 36px; list-style: none;
  }
  .hp-nav-links a {
    font-size: 13px; color: var(--muted);
    text-decoration: none; transition: color 0.3s;
    position: relative; padding-bottom: 4px;
  }
  .hp-nav-links a::after {
    content: ''; position: absolute;
    bottom: 0; left: 0; right: 0; height: 2px;
    background: var(--red);
    transform: scaleX(0); transition: transform 0.3s; transform-origin: left;
  }
  .hp-nav-links a:hover, .hp-nav-links a.active { color: var(--red); }
  .hp-nav-links a:hover::after, .hp-nav-links a.active::after { transform: scaleX(1); }
  .hp-nav-cta {
    font-size: 12px; font-weight: 500; letter-spacing: 0.08em;
    padding: 10px 24px;
    background: var(--red); color: var(--white);
    text-decoration: none; transition: background 0.3s;
    border: none; cursor: pointer;
  }
  .hp-nav-cta:hover { background: var(--red-dark); }

  /* ── HERO ── */
  .hp-hero {
    min-height: 100vh;
    padding-top: 72px;
    display: grid; grid-template-columns: 1fr 1fr;
    position: relative;
  }
  .hp-hero-left {
    background: var(--dark);
    padding: 80px 60px;
    display: flex; flex-direction: column; justify-content: center;
    position: relative; overflow: hidden;
  }
  .hp-hero-grid-bg {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(168,23,28,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(168,23,28,0.08) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .hp-hero-left::after {
    content: '';
    position: absolute; top: 0; right: 0; bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, var(--red), transparent);
  }
  .hp-hero-badge {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    margin-bottom: 28px;
    position: relative; z-index: 1;
  }
  .hp-hero-badge::before {
    content: ''; width: 28px; height: 1px;
    background: var(--red);
  }
  .hp-hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(48px, 5.5vw, 80px);
    font-weight: 300; line-height: 1.05;
    color: var(--white); margin-bottom: 28px;
    position: relative; z-index: 1;
  }
  .hp-hero-title em {
    font-style: italic; color: #F4A0A3;
    display: block;
  }
  .hp-hero-desc {
    font-size: 15px; line-height: 1.85;
    color: rgba(255,255,255,0.6);
    max-width: 460px; margin-bottom: 44px;
    position: relative; z-index: 1;
  }
  .hp-hero-actions {
    display: flex; gap: 16px; flex-wrap: wrap;
    position: relative; z-index: 1;
  }
  .hp-btn-primary {
    font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
    padding: 14px 36px;
    background: var(--red); color: var(--white);
    border: none; cursor: pointer; transition: background 0.3s;
    text-decoration: none; display: inline-block;
  }
  .hp-btn-primary:hover { background: var(--red-light); }
  .hp-btn-outline {
    font-size: 12px; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase;
    padding: 14px 36px;
    background: transparent; color: var(--white);
    border: 1px solid rgba(255,255,255,0.3); cursor: pointer;
    transition: border-color 0.3s;
    text-decoration: none; display: inline-block;
  }
  .hp-btn-outline:hover { border-color: var(--white); }

  .hp-hero-right {
    background: var(--green);
    padding: 80px 60px;
    display: flex; flex-direction: column; justify-content: center;
    position: relative; overflow: hidden;
  }
  .hp-hero-right-pattern {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 36px 36px;
  }
  .hp-hero-right::before {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0;
    height: 4px; background: var(--red);
  }
  .hp-stats-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 2px;
    position: relative; z-index: 1;
    margin-bottom: 32px;
  }
  .hp-stat-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    padding: 32px 28px;
    transition: background 0.3s;
  }
  .hp-stat-card:hover { background: rgba(168,23,28,0.2); }
  .hp-stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 52px; font-weight: 600;
    color: var(--white); line-height: 1;
    margin-bottom: 8px;
  }
  .hp-stat-num span { color: #F4A0A3; }
  .hp-stat-label {
    font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
    color: rgba(255,255,255,0.5);
  }
  .hp-hero-tagline {
    position: relative; z-index: 1;
    padding: 24px 28px;
    border-left: 3px solid var(--red);
    background: rgba(0,0,0,0.15);
  }
  .hp-hero-tagline p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px; font-style: italic; font-weight: 300;
    color: rgba(255,255,255,0.8); line-height: 1.6;
  }
  .hp-hero-tagline cite {
    display: block; margin-top: 10px;
    font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
    color: rgba(255,255,255,0.4); font-style: normal;
  }

  /* ── TICKER ── */
  .hp-ticker {
    background: var(--red);
    padding: 14px 0; overflow: hidden;
    position: relative;
  }
  .hp-ticker-track {
    display: flex; gap: 0;
    animation: ticker 30s linear infinite;
    white-space: nowrap;
  }
  .hp-ticker-item {
    font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
    color: rgba(255,255,255,0.9); padding: 0 40px;
    display: flex; align-items: center; gap: 16px;
  }
  .hp-ticker-dot {
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(255,255,255,0.5); flex-shrink: 0;
  }
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── INTRO ── */
  .hp-intro {
    padding: 100px 60px;
    background: var(--cream);
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
    align-items: center;
  }
  .hp-intro-eyebrow {
    font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--red); margin-bottom: 16px;
    display: flex; align-items: center; gap: 12px;
  }
  .hp-intro-eyebrow::before {
    content: ''; width: 28px; height: 2px; background: var(--red);
  }
  .hp-intro-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(36px, 4vw, 54px);
    font-weight: 300; line-height: 1.1; color: var(--dark);
    margin-bottom: 24px;
  }
  .hp-intro-title em { font-style: italic; color: var(--red); }
  .hp-intro-divider {
    width: 48px; height: 3px; margin: 0 0 24px;
    background: linear-gradient(to right, var(--red), var(--green));
  }
  .hp-intro-text {
    font-size: 15px; line-height: 1.85; color: var(--muted);
    margin-bottom: 20px;
  }
  .hp-intro-text strong { color: var(--dark); font-weight: 600; }
  .hp-intro-right {
    display: flex; flex-direction: column; gap: 16px;
  }
  .hp-pillar {
    display: flex; gap: 20px; align-items: flex-start;
    padding: 24px; background: var(--white);
    border: 1px solid var(--border-r);
    border-left: 4px solid var(--red);
    transition: all 0.3s;
  }
  .hp-pillar:hover {
    box-shadow: 4px 4px 0 var(--red);
    transform: translateX(-4px);
  }
  .hp-pillar-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 36px; font-weight: 600; color: var(--red);
    line-height: 1; flex-shrink: 0; width: 44px;
  }
  .hp-pillar-content h4 {
    font-size: 15px; font-weight: 600; color: var(--dark); margin-bottom: 6px;
  }
  .hp-pillar-content p {
    font-size: 13px; color: var(--muted); line-height: 1.65;
  }

  /* ── HIGHLIGHT BAND ── */
  .hp-band {
    background: var(--dark);
    padding: 60px;
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }
  .hp-band-item {
    padding: 40px 32px;
    border-right: 1px solid rgba(255,255,255,0.06);
    text-align: center;
    transition: background 0.3s;
  }
  .hp-band-item:last-child { border-right: none; }
  .hp-band-item:hover { background: rgba(168,23,28,0.1); }
  .hp-band-icon {
    font-size: 32px; margin-bottom: 16px; display: block;
  }
  .hp-band-title {
    font-size: 13px; font-weight: 600; color: var(--white);
    letter-spacing: 0.06em; text-transform: uppercase;
    margin-bottom: 10px;
  }
  .hp-band-desc {
    font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.65;
  }

  /* ── COMMITMENT ── */
  .hp-commit {
    padding: 100px 60px;
    background: var(--white);
    display: grid; grid-template-columns: 400px 1fr; gap: 80px;
    align-items: start;
  }
  .hp-commit-sticky {
    position: sticky; top: 100px;
  }
  .hp-commit-eyebrow {
    font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--red); margin-bottom: 16px;
    display: flex; align-items: center; gap: 12px;
  }
  .hp-commit-eyebrow::before {
    content: ''; width: 28px; height: 2px; background: var(--red);
  }
  .hp-commit-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(34px, 3.5vw, 48px);
    font-weight: 300; line-height: 1.1; color: var(--dark);
    margin-bottom: 20px;
  }
  .hp-commit-title em { font-style: italic; color: var(--red); }
  .hp-commit-desc {
    font-size: 14px; line-height: 1.8; color: var(--muted);
    margin-bottom: 28px;
  }
  .hp-commit-btn {
    font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
    padding: 12px 28px;
    background: var(--green); color: var(--white);
    border: none; cursor: pointer; transition: background 0.3s;
    text-decoration: none; display: inline-block;
  }
  .hp-commit-btn:hover { background: var(--green-dark); }
  .hp-commit-list {
    display: flex; flex-direction: column; gap: 0;
  }
  .hp-commit-item {
    display: grid; grid-template-columns: 60px 1fr;
    border-bottom: 1px solid var(--border-r);
    padding: 28px 0;
    transition: all 0.3s;
    cursor: default;
  }
  .hp-commit-item:first-child { border-top: 1px solid var(--border-r); }
  .hp-commit-item:hover { padding-left: 12px; }
  .hp-commit-item-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px; font-weight: 600; color: var(--red);
    line-height: 1; padding-top: 4px;
  }
  .hp-commit-item-body h4 {
    font-size: 15px; font-weight: 600; color: var(--dark); margin-bottom: 8px;
  }
  .hp-commit-item-body p {
    font-size: 13px; color: var(--muted); line-height: 1.7;
  }

  /* ── CTA SECTION ── */
  .hp-cta {
    background: var(--green);
    padding: 100px 60px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
    align-items: center;
    position: relative; overflow: hidden;
  }
  .hp-cta::before {
    content: '';
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .hp-cta-left { position: relative; z-index: 1; }
  .hp-cta-eyebrow {
    font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: rgba(255,255,255,0.5); margin-bottom: 16px;
    display: flex; align-items: center; gap: 12px;
  }
  .hp-cta-eyebrow::before {
    content: ''; width: 28px; height: 1px; background: rgba(255,255,255,0.4);
  }
  .hp-cta-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(40px, 4.5vw, 60px);
    font-weight: 300; line-height: 1.1; color: var(--white);
    margin-bottom: 20px;
  }
  .hp-cta-title em { font-style: italic; color: #F4A0A3; }
  .hp-cta-desc {
    font-size: 15px; line-height: 1.8;
    color: rgba(255,255,255,0.65); margin-bottom: 36px;
  }
  .hp-cta-btns { display: flex; gap: 16px; }
  .hp-btn-white {
    font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
    padding: 14px 36px;
    background: var(--white); color: var(--green);
    border: none; cursor: pointer; transition: all 0.3s;
    text-decoration: none; display: inline-block;
  }
  .hp-btn-white:hover { background: var(--red); color: var(--white); }
  .hp-btn-outline-white {
    font-size: 12px; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase;
    padding: 14px 36px;
    background: transparent; color: var(--white);
    border: 1px solid rgba(255,255,255,0.4); cursor: pointer;
    transition: border-color 0.3s;
    text-decoration: none; display: inline-block;
  }
  .hp-btn-outline-white:hover { border-color: var(--white); }
  .hp-cta-right {
    position: relative; z-index: 1;
    display: flex; flex-direction: column; gap: 16px;
  }
  .hp-contact-card {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 24px 28px;
    display: flex; gap: 16px; align-items: flex-start;
    transition: all 0.3s;
  }
  .hp-contact-card:hover {
    background: rgba(168,23,28,0.2);
    border-color: rgba(168,23,28,0.5);
  }
  .hp-contact-icon { font-size: 24px; flex-shrink: 0; }
  .hp-contact-info h4 {
    font-size: 13px; font-weight: 600; color: var(--white);
    letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 4px;
  }
  .hp-contact-info p {
    font-size: 14px; color: rgba(255,255,255,0.6);
  }

  /* ── FOOTER ── */
  .hp-footer {
    background: var(--dark);
    padding: 56px 60px;
    display: grid; grid-template-columns: 1fr auto 1fr; gap: 40px;
    align-items: center;
    border-top: 3px solid var(--red);
  }
  .hp-footer-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px; font-weight: 600;
    color: var(--white); letter-spacing: 0.06em;
  }
  .hp-footer-logo span { color: var(--red); }
  .hp-footer-copy {
    font-size: 12px; color: rgba(255,255,255,0.3); text-align: center;
  }
  .hp-footer-links {
    display: flex; gap: 28px; justify-content: flex-end;
  }
  .hp-footer-links a {
    font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase;
    color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.3s;
  }
  .hp-footer-links a:hover { color: var(--red); }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.8s ease forwards; opacity: 0; }
  .delay-1 { animation-delay: 0.15s; }
  .delay-2 { animation-delay: 0.3s; }
  .delay-3 { animation-delay: 0.45s; }
  .delay-4 { animation-delay: 0.6s; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .hp-nav { padding: 0 24px; }
    .hp-nav-links { display: none; }
    .hp-hero { grid-template-columns: 1fr; }
    .hp-hero-left { padding: 60px 24px; min-height: 60vh; }
    .hp-hero-right { padding: 48px 24px; }
    .hp-intro { grid-template-columns: 1fr; padding: 64px 24px; gap: 40px; }
    .hp-band { grid-template-columns: 1fr 1fr; padding: 40px 24px; }
    .hp-commit { grid-template-columns: 1fr; padding: 64px 24px; gap: 40px; }
    .hp-commit-sticky { position: static; }
    .hp-cta { grid-template-columns: 1fr; padding: 64px 24px; gap: 40px; }
    .hp-footer { grid-template-columns: 1fr; text-align: center; padding: 40px 24px; }
    .hp-footer-links { justify-content: center; }
  }
`;

// ── DATA ─────────────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "Tư Vấn Pháp Lý Doanh Nghiệp",
  "Soạn Thảo Hợp Đồng",
  "Tranh Tụng Dân Sự",
  "Đầu Tư Nước Ngoài FDI",
  "Luật Bất Động Sản",
  "Mua Bán & Sáp Nhập",
  "Tư Vấn Thuế",
  "Giấy Phép Kinh Doanh",
];

const PILLARS = [
  { num: "01", title: "Chính Trực Tuyệt Đối", desc: "Minh bạch và trung thực trong từng tư vấn — đây là nền tảng xây dựng niềm tin với khách hàng." },
  { num: "02", title: "Chuyên Môn Sâu", desc: "Đội ngũ luật sư chuyên sâu từng lĩnh vực, cập nhật liên tục các quy định pháp luật mới nhất." },
  { num: "03", title: "Đồng Hành Lâu Dài", desc: "Không chỉ giải quyết vụ việc — chúng tôi là đối tác pháp lý bền vững của doanh nghiệp bạn." },
];

const BAND_ITEMS = [
  { icon: "⚖️", title: "Được Cấp Phép", desc: "Hoạt động theo giấy phép Sở Tư Pháp TP.HCM" },
  { icon: "🔒", title: "Bảo Mật Tuyệt Đối", desc: "Thông tin khách hàng được bảo mật theo cam kết" },
  { icon: "📞", title: "Hỗ Trợ 24/7", desc: "Luôn sẵn sàng khi khách hàng cần tư vấn gấp" },
  { icon: "💰", title: "Chi Phí Minh Bạch", desc: "Báo giá rõ ràng, không phát sinh chi phí ẩn" },
];

const COMMITMENTS = [
  { num: "01", title: "Tư Vấn Miễn Phí Lần Đầu", desc: "Buổi tư vấn đầu tiên hoàn toàn miễn phí — để chúng tôi hiểu rõ vấn đề và đưa ra hướng giải quyết phù hợp nhất." },
  { num: "02", title: "Phản Hồi Trong 24 Giờ", desc: "Mọi yêu cầu tư vấn đều được phản hồi trong vòng 24 giờ làm việc — không để khách hàng chờ đợi quá lâu." },
  { num: "03", title: "Báo Giá Trước Khi Thực Hiện", desc: "Toàn bộ chi phí được thống nhất và ký kết hợp đồng trước khi bắt đầu — không có khoản phí bất ngờ." },
  { num: "04", title: "Cập Nhật Tiến Độ Thường Xuyên", desc: "Khách hàng được cập nhật tiến độ xử lý vụ việc định kỳ, nắm rõ tình hình mà không cần phải hỏi." },
  { num: "05", title: "Bảo Mật Thông Tin Tuyệt Đối", desc: "Cam kết bảo mật toàn bộ thông tin, hồ sơ và nội dung tư vấn theo đúng đạo đức hành nghề luật sư." },
];

// ── COMPONENT ────────────────────────────────────────────────────────────────
const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tickerItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="hp-root">
      <style>{styles}</style>

      {/* ── NAVBAR ── */}
      <nav className={`hp-nav${scrolled ? " scrolled" : ""}`}>
        <a href="/" className="hp-nav-logo">
          <div className="hp-nav-logo-icon">⚖</div>
          <span className="hp-nav-logo-text">
            CÔNG TY LUẬT <span>ABC</span>
          </span>
        </a>
        <ul className="hp-nav-links">
          <li><a href="/" className="active">Trang Chủ</a></li>
          <li><a href="/gioi-thieu">Giới Thiệu</a></li>
          <li><a href="/dich-vu">Dịch Vụ</a></li>
          <li><a href="/tin-tuc">Tin Tức</a></li>
          <li><a href="/lien-he">Liên Hệ</a></li>
        </ul>
        <a href="/lien-he" className="hp-nav-cta">Tư Vấn Miễn Phí</a>
      </nav>

      {/* ── HERO ── */}
      <section className="hp-hero">
        {/* Left — dark */}
        <div className="hp-hero-left">
          <div className="hp-hero-grid-bg" />
          <p className="hp-hero-badge fade-up">Công Ty Luật Uy Tín Tại TP.HCM</p>
          <h1 className="hp-hero-title fade-up delay-1">
            Bảo Vệ Quyền Lợi
            <em>Kiến Tạo Niềm Tin</em>
          </h1>
          <p className="hp-hero-desc fade-up delay-2">
            Hơn 10 năm đồng hành cùng doanh nghiệp và cá nhân — chúng tôi cung cấp
            giải pháp pháp lý toàn diện với đội ngũ luật sư tận tâm, chuyên nghiệp
            và am hiểu sâu sắc pháp luật Việt Nam.
          </p>
          <div className="hp-hero-actions fade-up delay-3">
            <a href="/lien-he" className="hp-btn-primary">Tư Vấn Miễn Phí</a>
            <a href="/gioi-thieu" className="hp-btn-outline">Tìm Hiểu Thêm</a>
          </div>
        </div>

        {/* Right — green */}
        <div className="hp-hero-right">
          <div className="hp-hero-right-pattern" />
          <div className="hp-stats-grid">
            {[
              { num: "10", sup: "+", label: "Năm Kinh Nghiệm" },
              { num: "500", sup: "+", label: "Vụ Án Thành Công" },
              { num: "200", sup: "+", label: "Doanh Nghiệp Tin Tưởng" },
              { num: "98", sup: "%", label: "Khách Hàng Hài Lòng" },
            ].map((s, i) => (
              <div key={i} className="hp-stat-card">
                <div className="hp-stat-num">{s.num}<span>{s.sup}</span></div>
                <div className="hp-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="hp-hero-tagline">
            <p>"Pháp lý vững chắc là nền tảng để doanh nghiệp phát triển bền vững và an toàn."</p>
            <cite>— Luật Sư Sáng Lập, Công Ty Luật ABC</cite>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="hp-ticker">
        <div className="hp-ticker-track">
          {tickerItems.map((item, i) => (
            <div key={i} className="hp-ticker-item">
              <span className="hp-ticker-dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="hp-intro">
        <div>
          <p className="hp-intro-eyebrow">Về Chúng Tôi</p>
          <h2 className="hp-intro-title">
            Đối Tác Pháp Lý
            <br /><em>Đáng Tin Cậy</em>
          </h2>
          <div className="hp-intro-divider" />
          <p className="hp-intro-text">
            Công Ty Luật ABC được thành lập với sứ mệnh cung cấp dịch vụ pháp lý
            <strong> chất lượng cao, minh bạch và tận tâm</strong> cho doanh nghiệp
            và cá nhân tại Việt Nam.
          </p>
          <p className="hp-intro-text">
            Với đội ngũ <strong>15 luật sư chuyên nghiệp</strong> có kinh nghiệm
            thực chiến trong nhiều lĩnh vực pháp luật, chúng tôi đã đồng hành và
            bảo vệ thành công quyền lợi cho hơn <strong>200 doanh nghiệp</strong>{" "}
            lớn nhỏ trên toàn quốc.
          </p>
        </div>
        <div className="hp-intro-right">
          {PILLARS.map((p, i) => (
            <div key={i} className="hp-pillar">
              <div className="hp-pillar-num">{p.num}</div>
              <div className="hp-pillar-content">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BAND ── */}
      <div className="hp-band">
        {BAND_ITEMS.map((item, i) => (
          <div key={i} className="hp-band-item">
            <span className="hp-band-icon">{item.icon}</span>
            <div className="hp-band-title">{item.title}</div>
            <div className="hp-band-desc">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* ── COMMITMENTS ── */}
      <section className="hp-commit">
        <div className="hp-commit-sticky">
          <p className="hp-commit-eyebrow">Cam Kết</p>
          <h2 className="hp-commit-title">
            Những Gì Chúng Tôi
            <br /><em>Cam Kết Với Bạn</em>
          </h2>
          <p className="hp-commit-desc">
            Mỗi cam kết là một lời hứa — không phải khẩu hiệu. Chúng tôi xây dựng
            uy tín qua từng hành động cụ thể, không phải lời nói.
          </p>
          <a href="/gioi-thieu" className="hp-commit-btn">Tìm Hiểu Về Chúng Tôi</a>
        </div>
        <div className="hp-commit-list">
          {COMMITMENTS.map((c, i) => (
            <div key={i} className="hp-commit-item">
              <div className="hp-commit-item-num">{c.num}</div>
              <div className="hp-commit-item-body">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="hp-cta" id="lien-he">
        <div className="hp-cta-left">
          <p className="hp-cta-eyebrow">Liên Hệ Ngay</p>
          <h2 className="hp-cta-title">
            Bạn Cần Tư Vấn
            <br /><em>Pháp Lý?</em>
          </h2>
          <p className="hp-cta-desc">
            Đặt lịch tư vấn miễn phí với luật sư cấp cao ngay hôm nay.
            Chúng tôi sẽ lắng nghe và đưa ra hướng giải quyết rõ ràng nhất
            cho vấn đề của bạn.
          </p>
          <div className="hp-cta-btns">
            <a href="/lien-he" className="hp-btn-white">Đặt Lịch Ngay</a>
            <a href="tel:02746507999" className="hp-btn-outline-white">Gọi Hotline</a>
          </div>
        </div>
        <div className="hp-cta-right">
          {[
            { icon: "📞", title: "Hotline", info: "0274 650 7999 — 0932 350 835" },
            { icon: "✉️", title: "Email", info: "info@congtyluatabc.com.vn" },
            { icon: "📍", title: "Văn Phòng Chính", info: "Tầng 3, 68 Hoàng Văn Thụ, TP.HCM" },
            { icon: "🕐", title: "Giờ Làm Việc", info: "Thứ 2–6: 07:30–17:00 | Thứ 7: 07:30–12:00" },
          ].map((c, i) => (
            <div key={i} className="hp-contact-card">
              <span className="hp-contact-icon">{c.icon}</span>
              <div className="hp-contact-info">
                <h4>{c.title}</h4>
                <p>{c.info}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="hp-footer">
        <div className="hp-footer-logo">CÔNG TY LUẬT <span>ABC</span></div>
        <p className="hp-footer-copy">© 2024 Công Ty Luật ABC. Bảo lưu mọi quyền.</p>
        <div className="hp-footer-links">
          <a href="#">Chính Sách Bảo Mật</a>
          <a href="#">Điều Khoản</a>
          <a href="/lien-he">Liên Hệ</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;