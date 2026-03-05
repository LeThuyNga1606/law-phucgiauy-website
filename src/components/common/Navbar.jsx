import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import '../../styles/navbar.css';
// ─── NAV DATA ────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  {
    id: "about",
    label: "Giới Thiệu",
    groups: [
      {
        title: "Giới Thiệu Chung",
        items: [
          { label: "Trang chủ",           to: "/trang-chu" },
          { label: "Giới Thiệu",          to: "/gioi-thieu" },
          { label: "Liên Hệ",             to: "/lien-he" },
        ],
      },
    ],
  },
  {
    id: "civil",
    label: "Dân Sự",
    groups: [
      {
        title: "Tranh Chấp Dân Sự",
        items: [
          { label: "Tranh Chấp Đất Đai",           to: "/dan-su/tranh-chap-dat-dai" },
          { label: "Tranh Chấp Thừa Kế",            to: "/dan-su/tranh-chap-thua-ke" },
          { label: "Tranh Chấp Ly Hôn",             to: "/dan-su/tranh-chap-ly-hon" },
          { label: "Tranh Chấp Lao Động",           to: "/dan-su/tranh-chap-lao-dong" },
          { label: "Tranh Chấp Thương Mại",         to: "/dan-su/tranh-chap-thuong-mai" },
          { label: "Tranh Chấp Hợp Đồng",          to: "/dan-su/tranh-chap-hop-dong" },
          { label: "Tranh Chấp Sở Hữu Trí Tuệ",   to: "/dan-su/tranh-chap-so-huu-tri-tue" },
        ],
      },
    ],
  },
  {
    id: "criminal",
    label: "Hình Sự",
    groups: [
      {
        title: "Dịch Vụ Hình Sự",
        items: [
          { label: "Bào Chữa Cho Người Bị Buộc Tội",                                                                          to: "/hinh-su/bao-chua-bi-buoc-toi" },
          { label: "Bảo Vệ Quyền Lợi Người Bị Hại & Đương Sự",                                                               to: "/hinh-su/bao-ve-nguoi-bi-hai" },
          { label: "Bảo Vệ Quyền Lợi Người Bị Tố Giác & Bị Kiến Nghị Khởi Tố",                                              to: "/hinh-su/bao-ve-nguoi-bi-to-giac" },
        ],
      },
    ],
  },
  {
    id: "investment",
    label: "Đầu Tư Nước Ngoài",
    groups: [
      {
        title: "Đầu Tư Mới",
        items: [
          { label: "Tư Vấn Pháp Lý Trước Đầu Tư",                       to: "/dau-tu/tu-van-phap-ly-truoc-dau-tu" },
          { label: "Thẩm Tra Pháp Lý Đất, Nhà Xưởng",                   to: "/dau-tu/tham-tra-phap-ly" },
          { label: "Thành Lập Công Ty Vốn Đầu Tư Nước Ngoài",           to: "/dau-tu/thanh-lap-cong-ty-von-nuoc-ngoai" },
          { label: "Thành Lập Văn Phòng Đại Diện Công Ty Nước Ngoài",   to: "/dau-tu/thanh-lap-van-phong-dai-dien" },
        ],
      },
      {
        title: "Thay Đổi Giấy Chứng Nhận Đăng Ký Đầu Tư",
        items: [
          { label: "Điều Chỉnh Mục Tiêu – Quy Mô Dự Án",               to: "/dau-tu/dieu-chinh-muc-tieu" },
          { label: "Thay Đổi Địa Điểm Thực Hiện Dự Án",                 to: "/dau-tu/thay-doi-dia-diem" },
          { label: "Thay Đổi Tổng Vốn Đầu Tư",                          to: "/dau-tu/thay-doi-tong-von" },
          { label: "Gia Hạn Tiến Độ Góp Vốn",                           to: "/dau-tu/gia-han-tien-do-gop-von" },
          { label: "Thay Đổi Nhà Đầu Tư Thực Hiện Dự Án",               to: "/dau-tu/thay-doi-nha-dau-tu" },
          { label: "Cập Nhật Thông Tin Nhà Đầu Tư",                     to: "/dau-tu/cap-nhat-thong-tin" },
          { label: "Gia Hạn Thời Gian Thuê Xưởng",                      to: "/dau-tu/gia-han-thue-xuong" },
          { label: "Gia Hạn Thời Gian Hoạt Động Dự Án",                 to: "/dau-tu/gia-han-hoat-dong" },
        ],
      },
      {
        title: "Báo Cáo & Chấm Dứt",
        items: [
          { label: "Đăng Ký Khoản Vay Nước Ngoài",                      to: "/dau-tu/dang-ky-vay-nuoc-ngoai" },
          { label: "Đăng Ký Thay Đổi Khoản Vay",                        to: "/dau-tu/thay-doi-khoan-vay" },
          { label: "Báo Cáo Khoản Vay Nước Ngoài",                      to: "/dau-tu/bao-cao-khoan-vay" },
          { label: "Chấm Dứt Dự Án Đầu Tư",                             to: "/dau-tu/cham-dut-du-an" },
          { label: "Giải Thể Công Ty Vốn Nước Ngoài",                   to: "/dau-tu/giai-the-cong-ty" },
        ],
      },
    ],
  },
  {
    id: "enterprise",
    label: "Doanh Nghiệp",
    groups: [
      {
        title: "Tư Vấn & Thành Lập Mới",
        items: [
          { label: "Tư Vấn Thường Xuyên",                               to: "/doanh-nghiep/tu-van-thuong-xuyen" },
          { label: "Thành Lập Doanh Nghiệp",                            to: "/doanh-nghiep/thanh-lap-doanh-nghiep" },
          { label: "Thành Lập Chi Nhánh",                                to: "/doanh-nghiep/thanh-lap-chi-nhanh" },
          { label: "Thành Lập Văn Phòng Đại Diện",                      to: "/doanh-nghiep/thanh-lap-van-phong" },
          { label: "Đăng Ký Địa Điểm Kinh Doanh",                       to: "/doanh-nghiep/dia-diem-kinh-doanh" },
        ],
      },
      {
        title: "Thay Đổi Đăng Ký Doanh Nghiệp",
        items: [
          { label: "Cập Nhật Thông Tin",                                 to: "/doanh-nghiep/cap-nhat-thong-tin" },
          { label: "Đổi Tên Doanh Nghiệp",                               to: "/doanh-nghiep/doi-ten" },
          { label: "Thay Đổi Địa Chỉ",                                   to: "/doanh-nghiep/thay-doi-dia-chi" },
          { label: "Tăng Vốn Điều Lệ",                                   to: "/doanh-nghiep/tang-von-dieu-le" },
          { label: "Giảm Vốn Điều Lệ",                                   to: "/doanh-nghiep/giam-von-dieu-le" },
          { label: "Chuyển Nhượng Vốn",                                  to: "/doanh-nghiep/chuyen-nhuong-von" },
          { label: "Thay Đổi Đại Diện Pháp Luật",                       to: "/doanh-nghiep/thay-doi-dai-dien" },
          { label: "Thay Đổi Loại Hình Doanh Nghiệp",                   to: "/doanh-nghiep/thay-doi-loai-hinh" },
          { label: "Thay Đổi Ngành Nghề Kinh Doanh",                    to: "/doanh-nghiep/thay-doi-nganh-nghe" },
        ],
      },
      {
        title: "Chấm Dứt Kinh Doanh",
        items: [
          { label: "Giải Thể Doanh Nghiệp",                             to: "/doanh-nghiep/giai-the" },
          { label: "Tạm Ngừng Hoạt Động",                               to: "/doanh-nghiep/tam-ngung-hoat-dong" },
          { label: "Chấm Dứt Chi Nhánh / Văn Phòng",                   to: "/doanh-nghiep/cham-dut-chi-nhanh" },
        ],
      },
    ],
  },
  {
    id: "license",
    label: "Giấy Phép Con",
    groups: [
      {
        title: "Giấy Phép & Chứng Nhận",
        items: [
          { label: "Giấy Phép Môi Trường",           to: "/giay-phep/moi-truong" },
          { label: "Giấy Phép Hóa Chất",             to: "/giay-phep/hoa-chat" },
          { label: "Phòng Cháy Chữa Cháy",           to: "/giay-phep/phong-chay-chua-chay" },
          { label: "Hoàn Công Nhà Xưởng",            to: "/giay-phep/hoan-cong-nha-xuong" },
          { label: "Giấy Phép Lao Động",             to: "/giay-phep/lao-dong" },
          { label: "Giấy An Ninh Trật Tự",           to: "/giay-phep/an-ninh-trat-tu" },
          { label: "Visa – Thẻ Tạm Trú",            to: "/giay-phep/visa-the-tam-tru" },
          { label: "Hộ Kinh Doanh",                  to: "/giay-phep/ho-kinh-doanh" },
          { label: "Giấy Phép Kinh Doanh Rượu",     to: "/giay-phep/kinh-doanh-ruou" },
          { label: "Nhập Khẩu Thiết Bị Y Tế",       to: "/giay-phep/nhap-khau-thiet-bi-y-te" },
        ],
      },
    ],
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [openId, setOpenId]         = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobOpenId, setMobOpenId]   = useState(null);
  const [lang, setLang]             = useState("vi");
  const navRef                      = useRef(null);
  const location                    = useLocation();

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
            <span className="nav-topbar-item">⏰ Thứ 2 - Thứ 6, 8h - 17h30</span>
          </div>
          <div className="nav-topbar-right">
            {["vi", "en"].map(l => (
              <button key={l} className={`nav-topbar-lang ${lang === l ? "active" : ""}`}
                onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* ── MAIN NAV ── */}
        <nav className={`nav-main ${scrolled ? "shadow" : ""}`}>
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="nav-logo-emblem" />
            <div className="nav-logo-text">
              <span className="nav-logo-name">CÔNG TY LUẬT TNHH</span>
              <span className="nav-logo-name-highlight">PHÚC GIA UY & Cộng Sự</span>
              <span className="nav-logo-sub">Thấu hiểu - Trách nhiệm - Phụng sự</span>
            </div>
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

          {/* CTA */}
          <Link to="/lien-he" className="nav-cta">
            <span className="nav-cta-dot" />
            Tư Vấn Miễn Phí
          </Link>

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
          <Link to="/lien-he" className="mob-cta">Tư Vấn Miễn Phí</Link>
        </div>

      </header>
    </>
  );
};

export default Navbar;