import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import "../../styles/adminDashboard.css";

// ─── MOCK DATA (Phase 3: thay bằng Firestore) ────────────────────────────────
const STATS = [
  {
    key: "posts",
    label: "Bài viết",
    value: 24,
    change: +3,
    icon: "📝",
    color: "#A8171C",
  },
  {
    key: "views",
    label: "Lượt xem / tháng",
    value: "18.4K",
    change: +12,
    icon: "👁️",
    color: "#C9A84C",
  },
  {
    key: "contacts",
    label: "Yêu cầu tư vấn",
    value: 37,
    change: +8,
    icon: "📩",
    color: "#2563EB",
  },
  {
    key: "lawyers",
    label: "Luật sư",
    value: 6,
    change: 0,
    icon: "👤",
    color: "#16A34A",
  },
];

const RECENT_POSTS = [
  {
    id: 1,
    title:
      "Những quy định mới nhất về thủ tục ly hôn theo Luật Hôn nhân và Gia đình 2024",
    category: "Dân sự",
    status: "published",
    date: "15/12/2024",
    views: 1240,
  },
  {
    id: 2,
    title:
      "Luật Đất đai 2024: Những điểm mới quan trọng ảnh hưởng đến người dân",
    category: "Dân sự",
    status: "published",
    date: "10/12/2024",
    views: 2180,
  },
  {
    id: 3,
    title:
      "Thủ tục thành lập công ty TNHH năm 2024: Hướng dẫn chi tiết từ A đến Z",
    category: "Doanh nghiệp",
    status: "published",
    date: "05/12/2024",
    views: 890,
  },
  {
    id: 4,
    title:
      "Quyền của bị can, bị cáo trong tố tụng hình sự: Những điều cần biết",
    category: "Hình sự",
    status: "draft",
    date: "20/11/2024",
    views: 0,
  },
  {
    id: 5,
    title: "Quy trình cấp Giấy chứng nhận đăng ký đầu tư cho doanh nghiệp FDI",
    category: "Đầu tư",
    status: "published",
    date: "28/11/2024",
    views: 650,
  },
];

const RECENT_CONTACTS = [
  {
    id: 1,
    name: "Nguyễn Văn Minh",
    phone: "0901 234 567",
    subject: "Tư vấn ly hôn",
    time: "2 giờ trước",
    status: "new",
  },
  {
    id: 2,
    name: "Trần Thị Lan",
    phone: "0912 345 678",
    subject: "Tranh chấp đất đai",
    time: "5 giờ trước",
    status: "new",
  },
  {
    id: 3,
    name: "Lê Văn Hùng",
    phone: "0923 456 789",
    subject: "Thành lập công ty",
    time: "Hôm qua",
    status: "read",
  },
  {
    id: 4,
    name: "Phạm Thị Hoa",
    phone: "0934 567 890",
    subject: "Tư vấn hợp đồng lao động",
    time: "2 ngày trước",
    status: "replied",
  },
];

// Dữ liệu biểu đồ lượt xem 7 ngày gần nhất
const CHART_DATA = [
  { day: "T2", views: 420 },
  { day: "T3", views: 680 },
  { day: "T4", views: 510 },
  { day: "T5", views: 890 },
  { day: "T6", views: 740 },
  { day: "T7", views: 320 },
  { day: "CN", views: 280 },
];

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "▦" },
  { label: "Tin tức", href: "/admin/posts", icon: "📝" },
  { label: "Dịch vụ", href: "/admin/services", icon: "⚖️" },
  { label: "Đội ngũ", href: "/admin/lawyers", icon: "👥" },
  { label: "Yêu cầu tư vấn", href: "/admin/contacts", icon: "📩" },
];

// ─── MINI BAR CHART ───────────────────────────────────────────────────────────
function BarChart({ data }) {
  const max = Math.max(...data.map((d) => d.views));
  return (
    <div className="ad-chart">
      {data.map((d, i) => (
        <div key={i} className="ad-chart-col">
          <div className="ad-chart-bar-wrap">
            <div
              className="ad-chart-bar"
              style={{
                height: `${(d.views / max) * 100}%`,
                animationDelay: `${i * 80}ms`,
              }}
            >
              <div className="ad-chart-tooltip">{d.views.toLocaleString()}</div>
            </div>
          </div>
          <span className="ad-chart-label">{d.day}</span>
        </div>
      ))}
    </div>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  const [user, setUser] = useState(null);
  const [greeting, setGreeting] = useState("Xin chào");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) navigate("/admin/login");
      else setUser(u);
    });
    return () => unsub();
  }, [auth, navigate]);

  useEffect(() => {
    const h = new Date().getHours();
    if (h < 12) setGreeting("Chào buổi sáng");
    else if (h < 18) setGreeting("Chào buổi chiều");
    else setGreeting("Chào buổi tối");
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* ══ MAIN ══ */}
      {/* ── CONTENT ── */}
      <div className="ad-content">
        {/* Greeting */}
        <div className="ad-greeting">
          <div>
            <h1 className="ad-greeting-title">
              {greeting}, <em>{user?.displayName ?? "Admin"}</em> 👋
            </h1>
            <p className="ad-greeting-sub">
              Đây là tổng quan hoạt động của website hôm nay.
            </p>
          </div>
          <Link to="/admin/posts/new" className="ad-new-post-btn">
            + Viết bài mới
          </Link>
        </div>

        {/* Stats cards */}
        <div className="ad-stats">
          {STATS.map((s, i) => (
            <div
              key={s.key}
              className="ad-stat-card"
              style={{ "--delay": `${i * 80}ms`, "--accent": s.color }}
            >
              <div className="ad-stat-top">
                <div
                  className="ad-stat-icon"
                  style={{ background: `${s.color}18`, color: s.color }}
                >
                  {s.icon}
                </div>
                {s.change !== 0 && (
                  <div
                    className={`ad-stat-change ${s.change > 0 ? "up" : "down"}`}
                  >
                    {s.change > 0 ? "↑" : "↓"} {Math.abs(s.change)}%
                  </div>
                )}
              </div>
              <div className="ad-stat-value">{s.value}</div>
              <div className="ad-stat-label">{s.label}</div>
              <div className="ad-stat-bar" style={{ background: s.color }} />
            </div>
          ))}
        </div>

        {/* Middle row: Chart + Contacts */}
        <div className="ad-mid-row">
          {/* Chart */}
          <div className="ad-block ad-block--chart">
            <div className="ad-block-header">
              <div>
                <h3 className="ad-block-title">Lượt xem 7 ngày qua</h3>
                <p className="ad-block-sub">
                  Tổng:{" "}
                  {CHART_DATA.reduce((s, d) => s + d.views, 0).toLocaleString()}{" "}
                  lượt
                </p>
              </div>
              <span className="ad-block-badge">Tuần này</span>
            </div>
            <BarChart data={CHART_DATA} />
          </div>

          {/* Recent contacts */}
          <div className="ad-block ad-block--contacts">
            <div className="ad-block-header">
              <div>
                <h3 className="ad-block-title">Yêu cầu tư vấn mới</h3>
                <p className="ad-block-sub">
                  {RECENT_CONTACTS.filter((c) => c.status === "new").length}{" "}
                  chưa đọc
                </p>
              </div>
              <Link to="/admin/contacts" className="ad-block-link">
                Xem tất cả →
              </Link>
            </div>

            <div className="ad-contacts-list">
              {RECENT_CONTACTS.map((c) => (
                <div
                  key={c.id}
                  className={`ad-contact-item ${c.status === "new" ? "ad-contact-item--new" : ""}`}
                >
                  <div className="ad-contact-avatar">
                    {c.name.split(" ").pop()[0]}
                  </div>
                  <div className="ad-contact-body">
                    <div className="ad-contact-name">{c.name}</div>
                    <div className="ad-contact-subject">{c.subject}</div>
                  </div>
                  <div className="ad-contact-right">
                    <div className="ad-contact-time">{c.time}</div>
                    <div
                      className={`ad-contact-status ad-contact-status--${c.status}`}
                    >
                      {c.status === "new"
                        ? "Mới"
                        : c.status === "read"
                          ? "Đã đọc"
                          : "Đã trả lời"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent posts table */}
        <div className="ad-block">
          <div className="ad-block-header">
            <div>
              <h3 className="ad-block-title">Bài viết gần đây</h3>
              <p className="ad-block-sub">
                {RECENT_POSTS.length} bài viết mới nhất
              </p>
            </div>
            <div className="ad-block-actions">
              <Link to="/admin/posts/new" className="ad-btn ad-btn--primary">
                + Thêm bài
              </Link>
              <Link to="/admin/posts" className="ad-btn ad-btn--ghost">
                Xem tất cả
              </Link>
            </div>
          </div>

          <div className="ad-table-wrap">
            <table className="ad-table">
              <thead>
                <tr>
                  <th>Tiêu đề</th>
                  <th>Chuyên mục</th>
                  <th>Trạng thái</th>
                  <th>Ngày đăng</th>
                  <th>Lượt xem</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {RECENT_POSTS.map((post) => (
                  <tr key={post.id} className="ad-table-row">
                    <td className="ad-td-title">
                      <span title={post.title}>{post.title}</span>
                    </td>
                    <td>
                      <span className="ad-cat-chip">{post.category}</span>
                    </td>
                    <td>
                      <span
                        className={`ad-status-chip ad-status-chip--${post.status}`}
                      >
                        {post.status === "published" ? "✓ Đã đăng" : "✎ Nháp"}
                      </span>
                    </td>
                    <td className="ad-td-muted">{post.date}</td>
                    <td className="ad-td-muted">
                      {post.views > 0 ? post.views.toLocaleString() : "—"}
                    </td>
                    <td>
                      <div className="ad-row-actions">
                        <Link
                          to={`/admin/posts/${post.id}/edit`}
                          className="ad-action-btn"
                          title="Chỉnh sửa"
                        >
                          ✎
                        </Link>
                        <Link
                          to={`/tin-tuc/${post.id}`}
                          target="_blank"
                          className="ad-action-btn"
                          title="Xem bài"
                        >
                          ↗
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
