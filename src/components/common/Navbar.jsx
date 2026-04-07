import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import "../../styles/navbar.css";

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobOpenId, setMobOpenId] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "vi");
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const q = keyword.trim();
    if (!q) return;
    navigate(`/tin-tuc?search=${encodeURIComponent(q)}`);
    setKeyword("");
    setMobileOpen(false);
  };

  // ─── NAV DATA ────────────────────────────────────────────────────────────────
  const NAV_ITEMS = [
    {
      id: "about",
      label: t("about-us").toUpperCase(),
      groups: [
        {
          title: t("nav_about_group_title"),
          items: [
            { label: t("nav_about_home"), to: "/" },
            { label: t("nav_about_intro"), to: "/gioi-thieu" },
            { label: t("nav_about_contact"), to: "/lien-he" },
          ],
        },
      ],
    },
    {
      id: "civil",
      label: t("nav_civil"),
      to: "/dich-vu/dan-su",
      groups: [
        {
          title: t("nav_civil_group_title"),
          items: [
            {
              label: t("nav_civil_land"),
              to: "/dich-vu/dan-su/detail/tranh-chap-dat-dai",
            },
            {
              label: t("nav_civil_inheritance"),
              to: "/dich-vu/dan-su/detail/tranh-chap-thua-ke",
            },
            {
              label: t("nav_civil_divorce"),
              to: "/dich-vu/dan-su/detail/tranh-chap-ly-hon",
            },
            {
              label: t("nav_civil_labor"),
              to: "/dich-vu/dan-su/detail/tranh-chap-lao-dong",
            },
            {
              label: t("nav_civil_commerce"),
              to: "/dich-vu/dan-su/detail/tranh-chap-thuong-mai",
            },
            {
              label: t("nav_civil_contract"),
              to: "/dich-vu/dan-su/detail/tranh-chap-hop-dong",
            },
            {
              label: t("nav_civil_ip"),
              to: "/dich-vu/dan-su/detail/tranh-chap-so-huu-tri-tue",
            },
          ],
        },
      ],
    },
    {
      id: "criminal",
      label: t("nav_criminal"),
      to: "/dich-vu/hinh-su",
      groups: [
        {
          title: t("nav_criminal_group_title"),
          items: [
            {
              label: t("nav_criminal_defense"),
              to: "/dich-vu/hinh-su/detail/bao-chua-nguoi-bi-buoc-toi",
            },
            {
              label: t("nav_criminal_victim"),
              to: "/dich-vu/hinh-su/detail/bao-ve-nguoi-bi-hai-duong-su",
            },
            {
              label: t("nav_criminal_accused"),
              to: "/dich-vu/hinh-su/detail/bao-ve-quyen-loi-nguoi-bi-to-giac-va-nguoi-to-giac-toi-pham",
            },
          ],
        },
      ],
    },
    {
      id: "investment",
      label: t("nav_investment"),
      to: "/dich-vu/dau-tu-nuoc-ngoai",
      groups: [
        {
          title: t("nav_investment_group1_title"),
          to: "/dich-vu/dau-tu/dau-tu-moi",
          items: [
            {
              label: t("nav_investment_consult"),
              to: "/dich-vu/dau-tu/dau-tu-moi/detail/tu-van-phap-ly-truoc-dau-tu",
            },
            {
              label: t("nav_investment_due_diligence"),
              to: "/dich-vu/dau-tu/dau-tu-moi/detail/tham-tra-phap-ly-dat-nha-xuong",
            },
            {
              label: t("nav_investment_establish_company"),
              to: "/dich-vu/dau-tu/dau-tu-moi/detail/thanh-lap-cong-ty-von-dau-tu-nuoc-ngoai",
            },
            {
              label: t("nav_investment_establish_office"),
              to: "/dich-vu/dau-tu/dau-tu-moi/detail/thanh-lap-van-phong-dai-dien-cong-ty-nuoc-ngoai",
            },
          ],
        },
        {
          title: t("nav_investment_group2_title"),
          to: "/dich-vu/dau-tu/thay-doi-giay-chung-nhan-dang-ky-dau-tu",
          items: [
            {
              label: t("nav_investment_adjust_target"),
              to: "/dich-vu/dau-tu/thay-doi-dang-ky/detail/dieu-chinh-muc-tieu-quy-mo-du-an-dau-tu",
            },
            {
              label: t("nav_investment_change_location"),
              to: "/dich-vu/dau-tu/thay-doi-dang-ky/detail/thay-doi-dia-diem-thuc-hien-du-an-dau-tu",
            },
            {
              label: t("nav_investment_change_capital"),
              to: "/dich-vu/dau-tu/thay-doi-dang-ky/detail/thay-doi-tong-von-dau-tu-von-gop-thuc-hien-du-an",
            },
            {
              label: t("nav_investment_extend_schedule"),
              to: "/dich-vu/dau-tu/thay-doi-dang-ky/detail/gia-han-tien-do-gop-von-tien-do-thuc-hien-du-an",
            },
            {
              label: t("nav_investment_change_investor"),
              to: "/dich-vu/dau-tu/thay-doi-dang-ky/detail/thay-doi-nha-dau-tu-thuc-hien-du-an",
            },
            {
              label: t("nav_investment_update_info"),
              to: "/dich-vu/dau-tu/thay-doi-dang-ky/detail/cap-nhat-thong-tin-nha-dau-tu",
            },
            {
              label: t("nav_investment_extend_lease"),
              to: "/dich-vu/dau-tu/thay-doi-dang-ky/detail/gia-han-thoi-gian-thue-xuong",
            },
            {
              label: t("nav_investment_extend_operation"),
              to: "/dich-vu/dau-tu/thay-doi-dang-ky/detail/gia-han-thoi-gian-hoat-dong-du-an",
            },
          ],
        },
        {
          title: t("nav_investment_group3_title"),
          to: "/dich-vu/dau-tu/bao-cao-du-an",
          items: [
            {
              label: t("nav_investment_register_loan"),
              to: "/dich-vu/dau-tu/bao-cao/detail/dang-ky-khoan-vay-nuoc-ngoai",
            },
            {
              label: t("nav_investment_change_loan"),
              to: "/dich-vu/dau-tu/bao-cao/detail/dang-ky-thay-doi-khoan-vay-nuoc-ngoai",
            },
            {
              label: t("nav_investment_report_loan"),
              to: "/dich-vu/dau-tu/bao-cao/detail/bao-cao-khoan-vay-nuoc-ngoai",
            },
            {
              label: t("nav_investment_terminate_project"),
              to: "/dich-vu/dau-tu/bao-cao/detail/cham-dut-du-an-dau-tu",
            },
            {
              label: t("nav_investment_dissolve_company"),
              to: "/dich-vu/dau-tu/bao-cao/detail/giai-the-cong-ty-fdi",
            },
          ],
        },
      ],
    },
    {
      id: "enterprise",
      label: t("nav_enterprise"),
      to: "/dich-vu/doanh-nghiep",
      groups: [
        {
          title: t("nav_enterprise_group1_title"),
          to: "/dich-vu/doanh-nghiep/thanh-lap-moi",
          items: [
            {
              label: t("nav_enterprise_regular_consult"),
              to: "/dich-vu/doanh-nghiep/tu-van/detail/tu-van-phap-ly-thuong-xuyen",
            },
            {
              label: t("nav_enterprise_establish"),
              to: "/dich-vu/doanh-nghiep/thanh-lap/detail/thanh-lap-doanh-nghiep",
            },
            {
              label: t("nav_enterprise_branch"),
              to: "/dich-vu/doanh-nghiep/thanh-lap/detail/thanh-lap-chi-nhanh",
            },
            {
              label: t("nav_enterprise_rep_office"),
              to: "/dich-vu/doanh-nghiep/thanh-lap/detail/thanh-lap-van-phong-dai-dien",
            },
            {
              label: t("nav_enterprise_biz_location"),
              to: "/dich-vu/doanh-nghiep/thanh-lap/detail/dang-ky-dia-diem-kinh-doanh",
            },
          ],
        },
        {
          title: t("nav_enterprise_group2_title"),
          to: "/dich-vu/doanh-nghiep/thay-doi-giay-chung-nhan-dang-ky-doanh-nghiep",
          items: [
            {
              label: t("nav_enterprise_update_info"),
              to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/cap-nhat-thong-tin-doanh-nghiep",
            },
            {
              label: t("nav_enterprise_rename"),
              to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/doi-ten-doanh-nghiep",
            },
            {
              label: t("nav_enterprise_change_address"),
              to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/thay-doi-dia-chi-doanh-nghiep",
            },
            {
              label: t("nav_enterprise_increase_capital"),
              to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/tang-von-dieu-le",
            },
            {
              label: t("nav_enterprise_decrease_capital"),
              to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/giam-von-dieu-le",
            },
            {
              label: t("nav_enterprise_transfer_capital"),
              to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/chuyen-nhuong-von",
            },
            {
              label: t("nav_enterprise_change_legal_rep"),
              to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/thay-doi-dai-dien-phap-luat",
            },
            {
              label: t("nav_enterprise_change_type"),
              to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/thay-doi-loai-hinh-doanh-nghiep",
            },
            {
              label: t("nav_enterprise_change_business"),
              to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/thay-doi-nganh-nghe-kinh-doanh",
            },
          ],
        },
        {
          title: t("nav_enterprise_group3_title"),
          to: "/dich-vu/doanh-nghiep/cham-dut-kinh-doanh",
          items: [
            {
              label: t("nav_enterprise_dissolve"),
              to: "/dich-vu/doanh-nghiep/detail/giai-the-doanh-nghiep",
            },
            {
              label: t("nav_enterprise_suspend"),
              to: "/dich-vu/doanh-nghiep/detail/tam-ngung-hoat-dong",
            },
            {
              label: t("nav_enterprise_terminate_branch"),
              to: "/dich-vu/doanh-nghiep/detail/cham-dut-chi-nhanh",
            },
          ],
        },
      ],
    },
    {
      id: "license",
      label: t("nav_license"),
      to: "/dich-vu/giay-phep",
      groups: [
        {
          title: t("nav_license_group_title"),
          items: [
            {
              label: t("nav_license_environment"),
              to: "/dich-vu/giay-phep/detail/giay-phep-moi-truong",
            },
            {
              label: t("nav_license_chemical"),
              to: "/dich-vu/giay-phep/detail/giay-phep-hoa-chat",
            },
            {
              label: t("nav_license_fire"),
              to: "/dich-vu/giay-phep/detail/giay-phep-pccc",
            },
            {
              label: t("nav_license_factory"),
              to: "/dich-vu/giay-phep/detail/hoan-cong-nha-xuong",
            },
            {
              label: t("nav_license_labor"),
              to: "/dich-vu/giay-phep/detail/giay-phep-lao-dong",
            },
            {
              label: t("nav_license_security"),
              to: "/dich-vu/giay-phep/detail/giay-an-ninh-trat-tu",
            },
            {
              label: t("nav_license_visa"),
              to: "/dich-vu/giay-phep/detail/visa-the-tam-tru",
            },
            {
              label: t("nav_license_household"),
              to: "/dich-vu/giay-phep/detail/ho-kinh-doanh",
            },
            {
              label: t("nav_license_liquor"),
              to: "/dich-vu/giay-phep/detail/giay-phep-kinh-doanh-ruou",
            },
            {
              label: t("nav_license_medical"),
              to: "/dich-vu/giay-phep/detail/nhap-khau-thiet-bi-vat-tu-y-te",
            },
          ],
        },
      ],
    },
    {
      id: "news",
      label: t("about_news_eyebrow"),
      single: true,
      to: "/tin-tuc",
    },
  ];

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
    ,
    {
      code: "zh",
      label: "CN",
      name: "中文",
      flag: "https://flagcdn.com/w40/cn.png",
    },
    {
      code: "ko",
      label: "KR",
      name: "한국어",
      flag: "https://flagcdn.com/w40/kr.png",
    },
  ];

  // Scroll shadow
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpenId(null);
    setMobileOpen(false);
    setMobOpenId(null);
  }, [location]);

  // Close on outside click
  useEffect(() => {
    const fn = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenId(null);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const toggleItem = (id, to) => {
    setOpenId((prev) => (prev === id ? null : id));
    if (to) {
      window.location.href = to;
    }
  };
  const toggleMob = (id) => {
    setMobOpenId((prev) => (prev === id ? null : id));
    if (to) {
      window.location.href = to;
    }
  };

  const changeLanguage = (code) => {
    setLang(code);
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
  };

  // Determine dropdown column count
  const getColClass = (groups) => {
    if (!groups) return "";
    if (groups.length === 1) return "";
    if (groups.length === 2) return "cols-2";
    return "cols-3";
  };

  return (
    <>
      <header className="nav-root" ref={navRef}>
        {/* ── TOP BAR ── */}
        <div className="nav-topbar">
          <div className="nav-topbar-left">
            <span className="nav-topbar-item">
              📞 <a href="tel:0909724768">0909 724 768</a>
            </span>
            <span className="nav-topbar-item">
              ✉️{" "}
              <a href="mailto:luatphucgiauy@gmail.com">
                luatphucgiauy@gmail.com
              </a>
            </span>
            <span className="nav-topbar-item">
              ⏰ {t("footer_contact_hours_value")}
            </span>
            <span className="nav-topbar-item">
              📍 {t("footer_contact_office_value")}
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
                    onClick={() => toggleItem(item.id, item.to)}
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
                          <Link to={group.to} className="drop-group-title">
                            {group.title}
                          </Link>
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
          </ul>

          {/* Search */}
          <form className="nav-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder={t("nav_search_placeholder") || "Tìm kiếm..."}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>

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
          <form className="mob-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder={t("nav_search_placeholder") || "Tìm kiếm..."}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>
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
                    onClick={() => toggleMob(item.id, item.to)}
                  >
                    {item.label}
                    <span className="mob-arrow">▾</span>
                  </button>
                  <div className="mob-sub">
                    {item.groups?.map((group, gi) => (
                      <div key={gi}>
                        {(item.id === "enterprise" ||
                          item.id === "investment") && (
                          <Link to={group.to} className="mob-group-title">
                            {group.title}
                          </Link>
                        )}
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
        </div>
      </header>
    </>
  );
};

export default Navbar;
