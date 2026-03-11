import { useState, useRef, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import "../../styles/adminLayout.css";

export default function AdminLayout({ children, user }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "vi");
  const [scrolled, setScrolled] = useState(false);
  const [mobOpenId, setMobOpenId] = useState(null);
  const [openId, setOpenId] = useState(null);

  // Đóng dropdown khi click ngoài
  useEffect(() => {
    const fn = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target))
        setDropOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  // Đóng mobile menu khi đổi route
  useEffect(() => {
    setOpenId(null);
    setMobileOpen(false);
    setMobOpenId(null);
  }, [location]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  const LANGUAGES = [
    {
      code: "vi",
      label: "VI",
      name: "Tiếng Việt",
      flag: "https://flagcdn.com/w40/vn.png",
    },
    {
      code: "en",
      label: "EN",
      name: "English",
      flag: "https://flagcdn.com/w40/us.png",
    },
    {
      code: "ko",
      label: "KR",
      name: "한국어",
      flag: "https://flagcdn.com/w40/kr.png",
    },
    {
      code: "zh",
      label: "CN",
      name: "中文",
      flag: "https://flagcdn.com/w40/cn.png",
    },
  ];
  const NAV_ITEMS = [
    {
      id: "dashboard",
      label: t("Dashboard"),
      to: "/admin/dashboard",
      single: true,
    },
    {
      id: "posts",
      label: t("about_news_eyebrow"),
      to: "/admin/posts",
      single: true,
    },
    {
      id: "services",
      label: t("services"),
      to: "/admin/services",
      single: true,
    },
    {
      id: "contacts",
      label: t("consultation_requests"),
      to: "/admin/contacts",
      single: true,
    },
  ];

  return (
    <div className="page-layout">
      {/* ══ HEADER ══ */}
      <header className="nav-root" ref={dropRef}>
        {/* ── TOP BAR ── */}
        <div className="nav-topbar">
          <div className="nav-topbar-left">
            <span className="nav-topbar-item">
              📞 <a href="tel:0909724768">0909 724 768</a>
            </span>
            <span className="nav-topbar-item">
              ✉️{" "}
              <a href="mailto:luatsunguyen0909@gmail.com">
                luatsunguyen0909@gmail.com
              </a>
            </span>
            <span className="nav-topbar-item">
              ⏰ {t("footer_contact_hours_value")}
            </span>
          </div>
          <div className="nav-topbar-right">
            <div className="nav-lang-switcher">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  className={`nav-lang-btn ${lang === l.code ? "active" : ""}`}
                  onClick={() => changeLanguage(l.code)}
                  title={l.name}
                >
                  <img
                    src={l.flag}
                    alt={l.name}
                    className="nav-lang-flag-img"
                  />
                  {/* <span className="nav-lang-label">{l.label}</span> */}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN NAV ── */}
        <nav className={`nav-main ${scrolled ? "shadow" : ""}`}>
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="nav-logo-emblem" />
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${openId === item.id ? "open" : ""}`}
                onMouseEnter={() => !item.single && setOpenId(item.id)}
                onMouseLeave={() => setOpenId(null)}
              >
                {item.single ? (
                  <Link
                    to={item.to}
                    className={`nav-item-btn ${location.pathname.startsWith(item.to) ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`nav-item-btn ${location.pathname.includes(`/${item.id}`) ? "active" : ""}`}
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={openId === item.id}
                  >
                    {item.label}
                    <span className="arrow">▼</span>
                  </button>
                )}

                {/* Dropdown */}
                {item.groups &&
                  (item.groups.length === 1 ? (
                    // Single-column dropdown
                    <div className="nav-dropdown">
                      <div className="drop-single">
                        {item.groups[0].items.map((sub) => (
                          <Link key={sub.to} to={sub.to}>
                            <span className="drop-single-icon">›</span>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Mega dropdown
                    <div
                      className={`nav-dropdown mega ${getColClass(item.groups)}`}
                    >
                      {item.groups.map((group, gi) => (
                        <div key={gi} className="drop-group">
                          <div className="drop-group-title">{group.title}</div>
                          <ul>
                            {group.items.map((sub) => (
                              <li key={sub.to}>
                                <Link to={sub.to}>{sub.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
              </li>
            ))}
            <Link to="/" target="_blank" className="nav-item-btn">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>Xem website</span>
            </Link>
            <div className="al-user-wrap" ref={dropRef}>
              <button
                className="nav-item-btn"
                onClick={() => setDropOpen((v) => !v)}
              >
                <div className="al-avatar">
                  {user?.email?.[0]?.toUpperCase() ?? "A"}
                </div>
                <div className="al-user-info">
                  <span className="al-user-name">
                    {user?.displayName ?? "Admin"}
                  </span>
                  <span className="al-user-email">{user?.email}</span>
                </div>
                <svg
                  className={`al-chevron ${dropOpen ? "open" : ""}`}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {dropOpen && (
                <div className="al-dropdown">
                  <div className="al-drop-header">
                    <div className="al-drop-avatar">
                      {user?.email?.[0]?.toUpperCase() ?? "A"}
                    </div>
                    <div>
                      <div className="al-drop-name">
                        {user?.displayName ?? "Admin"}
                      </div>
                      <div className="al-drop-email">{user?.email}</div>
                    </div>
                  </div>
                  <div className="al-drop-divider" />
                  <Link
                    to="/"
                    target="_blank"
                    className="al-drop-item"
                    onClick={() => setDropOpen(false)}
                  >
                    <span>🌐</span> Xem website
                  </Link>
                  <div className="al-drop-divider" />
                  <button
                    className="al-drop-item al-drop-logout"
                    onClick={handleLogout}
                  >
                    <span>🚪</span> Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </ul>

          {/* Hamburger */}
          <button
            className={`nav-hamburger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* ── MOBILE MENU ── */}
        <div className={`nav-mobile ${mobileOpen ? "open" : ""}`}>
          {/* ── THÊM LANGUAGE SWITCHER VÀO ĐÂY ── */}
          <div className="mob-lang">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                className={`mob-lang-btn ${lang === l.code ? "active" : ""}`}
                onClick={() => changeLanguage(l.code)}
              >
                <img src={l.flag} alt={l.name} className="mob-lang-flag-img" />
                <span>{l.label}</span>
                {/* <span className="mob-lang-name">{l.name}</span> */}
              </button>
            ))}
          </div>
          <div className="mob-lang-divider" />
          {NAV_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`mob-item ${mobOpenId === item.id ? "open" : ""}`}
            >
              {item.single ? (
                <Link to={item.to} className="mob-header link">
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    className="mob-header"
                    onClick={() => toggleMob(item.id)}
                  >
                    {item.label}
                    <span className="mob-arrow">▾</span>
                  </button>
                  <div className="mob-sub">
                    {item.groups?.map((group, gi) => (
                      <div key={gi}>
                        {group.items.map((sub) => (
                          <Link key={sub.to} to={sub.to}>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}

          <div className="mobile-lang-divider" />
          <button className="mob-header link" onClick={handleLogout}>
            Đăng xuất
          </button>
        </div>
      </header>

      {/* ══ PAGE CONTENT ══ */}
      <main className="page-main" style={{ paddingTop: 108 }}>
        {children}
      </main>
    </div>
  );
}
