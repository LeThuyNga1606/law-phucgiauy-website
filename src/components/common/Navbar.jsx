import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { useTranslation } from 'react-i18next';

import '../../styles/navbar.css';


// ─── COMPONENT ───────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [openId, setOpenId]         = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobOpenId, setMobOpenId]   = useState(null);
  const navRef                      = useRef(null);
  const location                    = useLocation();
  const { t, i18n }                 = useTranslation();
  const [lang, setLang] = useState(
    () => localStorage.getItem('lang') || 'vi'
  );

  // ─── NAV DATA ────────────────────────────────────────────────────────────────
  const NAV_ITEMS = [
    {
      id: "about",
      label: "PGU LAW FIRM",
      groups: [
        {
          title: t('nav_about_group_title'),
          items: [
            { label: t('nav_about_home') ,           to: "/trang-chu" },
            { label: t('nav_about_intro'),          to: "/gioi-thieu" },
            { label: t('nav_about_contact'),             to: "/lien-he" },
          ],
        },
      ],
    },
    {
      id: "civil",
      label: t('nav_civil'),
      groups: [
        {
          title: t('nav_civil_group_title'),
          items: [
            { label: t('nav_civil_land'),           to: "/dan-su/tranh-chap-dat-dai" },
            { label: t('nav_civil_inheritance'),            to: "/dan-su/tranh-chap-thua-ke" },
            { label: t('nav_civil_divorce'),             to: "/dan-su/tranh-chap-ly-hon" },
            { label: t('nav_civil_labor'),           to: "/dan-su/tranh-chap-lao-dong" },
            { label: t('nav_civil_commerce'),         to: "/dan-su/tranh-chap-thuong-mai" },
            { label: t('nav_civil_contract'),          to: "/dan-su/tranh-chap-hop-dong" },
            { label: t('nav_civil_ip'),   to: "/dan-su/tranh-chap-so-huu-tri-tue" },
          ],
        },
      ],
    },
    {
      id: "criminal",
      label: t('nav_criminal'),
      groups: [
        {
          title: t('nav_criminal_group_title'),
          items: [
            { label: t('nav_criminal_defense'),                                                                          to: "/hinh-su/bao-chua-bi-buoc-toi" },
            { label: t('nav_criminal_victim'),                                                               to: "/hinh-su/bao-ve-nguoi-bi-hai" },
            { label: t('nav_criminal_accused'),                                              to: "/hinh-su/bao-ve-nguoi-bi-to-giac" },
          ],
        },
      ],
    },
    {
      id: "investment",
      label: t('nav_investment'),
      groups: [
        {
          title: t('nav_investment_group1_title'),
          items: [
            { label: t('nav_investment_consult'),                       to: "/dau-tu/tu-van-phap-ly-truoc-dau-tu" },
            { label: t('nav_investment_due_diligence'),                   to: "/dau-tu/tham-tra-phap-ly" },
            { label: t('nav_investment_establish_company'),           to: "/dau-tu/thanh-lap-cong-ty-von-nuoc-ngoai" },
            { label: t('nav_investment_establish_office'),   to: "/dau-tu/thanh-lap-van-phong-dai-dien" },
          ],
        },
        {
          title: t('nav_investment_group2_title'),
          items: [
            { label: t('nav_investment_adjust_target'),               to: "/dau-tu/dieu-chinh-muc-tieu" },
            { label: t('nav_investment_change_location'),                 to: "/dau-tu/thay-doi-dia-diem" },
            { label: t('nav_investment_change_capital'),                          to: "/dau-tu/thay-doi-tong-von" },
            { label: t('nav_investment_extend_schedule'),                           to: "/dau-tu/gia-han-tien-do-gop-von" },
            { label: t('nav_investment_change_investor'),               to: "/dau-tu/thay-doi-nha-dau-tu" },
            { label: t('nav_investment_update_info'),                     to: "/dau-tu/cap-nhat-thong-tin" },
            { label: t('nav_investment_extend_lease'),                      to: "/dau-tu/gia-han-thue-xuong" },
            { label: t('nav_investment_extend_operation'),                 to: "/dau-tu/gia-han-hoat-dong" },
          ],
        },
        {
          title: t('nav_investment_group3_title'),
          items: [
            { label: t('nav_investment_register_loan'),                      to: "/dau-tu/dang-ky-vay-nuoc-ngoai" },
            { label: t('nav_investment_change_loan'),                        to: "/dau-tu/thay-doi-khoan-vay" },
            { label: t('nav_investment_report_loan'),                      to: "/dau-tu/bao-cao-khoan-vay" },
            { label: t('nav_investment_terminate_project'),                             to: "/dau-tu/cham-dut-du-an" },
            { label: t('nav_investment_dissolve_company'),                   to: "/dau-tu/giai-the-cong-ty" },
          ],
        },
      ],
    },
    {
      id: "enterprise",
      label: t('nav_enterprise'),
      groups: [
        {
          title: t('nav_enterprise_group1_title'),
          items: [
            { label: t('nav_enterprise_regular_consult'),                               to: "/doanh-nghiep/tu-van-thuong-xuyen" },
            { label: t('nav_enterprise_establish'),                            to: "/doanh-nghiep/thanh-lap-doanh-nghiep" },
            { label: t('nav_enterprise_branch'),                                to: "/doanh-nghiep/thanh-lap-chi-nhanh" },
            { label: t('nav_enterprise_rep_office'),                      to: "/doanh-nghiep/thanh-lap-van-phong" },
            { label: t('nav_enterprise_biz_location'),                       to: "/doanh-nghiep/dia-diem-kinh-doanh" },
          ],
        },
        {
          title: t('nav_enterprise_group2_title'),
          items: [
            { label: t('nav_enterprise_update_info'),                                 to: "/doanh-nghiep/cap-nhat-thong-tin" },
            { label: t('nav_enterprise_rename'),                               to: "/doanh-nghiep/doi-ten" },
            { label: t('nav_enterprise_change_address'),                                   to: "/doanh-nghiep/thay-doi-dia-chi" },
            { label: t('nav_enterprise_increase_capital'),                                   to: "/doanh-nghiep/tang-von-dieu-le" },
            { label: t('nav_enterprise_decrease_capital'),                                   to: "/doanh-nghiep/giam-von-dieu-le" },
            { label: t('nav_enterprise_transfer_capital'),                                  to: "/doanh-nghiep/chuyen-nhuong-von" },
            { label: t('nav_enterprise_change_legal_rep'),                       to: "/doanh-nghiep/thay-doi-dai-dien" },
            { label: t('nav_enterprise_change_type'),                   to: "/doanh-nghiep/thay-doi-loai-hinh" },
            { label: t('nav_enterprise_change_business'),                    to: "/doanh-nghiep/thay-doi-nganh-nghe" },
          ],
        },
        {
          title: t('nav_enterprise_group3_title'),
          items: [
            { label: t('nav_enterprise_dissolve'),                             to: "/doanh-nghiep/giai-the" },
            { label: t('nav_enterprise_suspend'),                               to: "/doanh-nghiep/tam-ngung-hoat-dong" },
            { label: t('nav_enterprise_terminate_branch'),                   to: "/doanh-nghiep/cham-dut-chi-nhanh" },
          ],
        },
      ],
    },
    {
      id: "license",
      label: t('nav_license'),
      groups: [
        {
          title: t('nav_license_group_title'),
          items: [
            { label: t('nav_license_environment'),           to: "/giay-phep/moi-truong" },
            { label: t('nav_license_chemical'),             to: "/giay-phep/hoa-chat" },
            { label: t('nav_license_fire'),           to: "/giay-phep/phong-chay-chua-chay" },
            { label: t('nav_license_factory'),            to: "/giay-phep/hoan-cong-nha-xuong" },
            { label: t('nav_license_labor'),             to: "/giay-phep/lao-dong" },
            { label: t('nav_license_security'),           to: "/giay-phep/an-ninh-trat-tu" },
            { label: t('nav_license_visa'),            to: "/giay-phep/visa-the-tam-tru" },
            { label: t('nav_license_household'),                  to: "/giay-phep/ho-kinh-doanh" },
            { label: t('nav_license_liquor'),     to: "/giay-phep/kinh-doanh-ruou" },
            { label: t('nav_license_medical'),       to: "/giay-phep/nhap-khau-thiet-bi-y-te" },
          ],
        },
      ],
    },
    {
      id: "news",
      label: t('about_news_eyebrow'),
      single: true,
      to: "/tin tuc",
    }
  ];

  const LANGUAGES = [
  { code: "vi", label: "VI", name: "Tiếng Việt", flag: "https://flagcdn.com/w40/vn.png" },
  { code: "en", label: "EN", name: "English",    flag: "https://flagcdn.com/w40/us.png" },
  { code: "ko", label: "KR", name: "한국어",      flag: "https://flagcdn.com/w40/kr.png" },
  { code: "zh", label: "CN", name: "中文",        flag: "https://flagcdn.com/w40/cn.png" },
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

  const toggleItem = (id) => setOpenId(prev => prev === id ? null : id);
  const toggleMob  = (id) => setMobOpenId(prev => prev === id ? null : id);

  const changeLanguage = (code) => {
    setLang(code);
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
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
            <span className="nav-topbar-item">📞 <a href="tel:0909724768">0909 724 768</a></span>
            <span className="nav-topbar-item">✉️ <a href="mailto:luatsunguyen0909@gmail.com">luatsunguyen0909@gmail.com</a></span>
            <span className="nav-topbar-item">⏰ {t('footer_contact_hours_value')}</span>
          </div>
          <div className="nav-topbar-right">
            <div className="nav-lang-switcher">
              {LANGUAGES.map(l => (
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
                  <span className="nav-lang-label">{l.label}</span>
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
            {NAV_ITEMS.map(item => (
              <li key={item.id}
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
                {item.groups && (
                  item.groups.length === 1 ? (
                    // Single-column dropdown
                    <div className="nav-dropdown">
                      <div className="drop-single">
                        {item.groups[0].items.map(sub => (
                          <Link key={sub.to} to={sub.to}>
                            <span className="drop-single-icon">›</span>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Mega dropdown
                    <div className={`nav-dropdown mega ${getColClass(item.groups)}`}>
                      {item.groups.map((group, gi) => (
                        <div key={gi} className="drop-group">
                          <div className="drop-group-title">{group.title}</div>
                          <ul>
                            {group.items.map(sub => (
                              <li key={sub.to}>
                                <Link to={sub.to}>{sub.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`nav-hamburger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(p => !p)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </nav>

        {/* ── MOBILE MENU ── */}
        <div className={`nav-mobile ${mobileOpen ? "open" : ""}`}>
        {/* ── THÊM LANGUAGE SWITCHER VÀO ĐÂY ── */}
          <div className="mob-lang">
            {LANGUAGES.map(l => (
              <button
                key={l.code}
                className={`mob-lang-btn ${lang === l.code ? "active" : ""}`}
                onClick={() => changeLanguage(l.code)}
              >
                <img
                  src={l.flag}
                  alt={l.name}
                  className="mob-lang-flag-img"
                />
                <span>{l.label}</span>
                <span className="mob-lang-name">{l.name}</span>
              </button>
            ))}
          </div>
          <div className="mob-lang-divider" />
          {NAV_ITEMS.map(item => (
            <div key={item.id} className={`mob-item ${mobOpenId === item.id ? "open" : ""}`}>
              {item.single ? (
                <Link to={item.to} className="mob-header link">{item.label}</Link>
              ) : (
                <>
                  <button className="mob-header" onClick={() => toggleMob(item.id)}>
                    {item.label}
                    <span className="mob-arrow">▾</span>
                  </button>
                  <div className="mob-sub">
                    {item.groups?.map((group, gi) => (
                      <div key={gi}>
                        <div className="mob-group-title">{group.title}</div>
                        {group.items.map(sub => (
                          <Link key={sub.to} to={sub.to}>{sub.label}</Link>
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