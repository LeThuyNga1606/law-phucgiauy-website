import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import "../../styles/adminDashboard.css";
import {
  getDashboardStats,
  getRecentPostsDashboard,
  getRecentContactsDashboard,
  getViewsChartData,
} from "../../services/dashboard";

// ─── NAV CONFIG ───────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "▦" },
  { label: "Tin tức", href: "/admin/posts", icon: "📝" },
  { label: "Dịch vụ", href: "/admin/services", icon: "⚖️" },
  { label: "Đội ngũ", href: "/admin/lawyers", icon: "👥" },
  { label: "Yêu cầu tư vấn", href: "/admin/contacts", icon: "📩" },
];

// ─── STAT CARDS CONFIG ────────────────────────────────────────────────────────
const STAT_CONFIG = [
  { key: "posts", label: "Bài viết đã đăng", icon: "📝", color: "#A8171C" },
  { key: "totalViews", label: "Tổng lượt xem", icon: "👁️", color: "#C9A84C" },
  { key: "contacts", label: "Yêu cầu tư vấn", icon: "📩", color: "#2563EB" },
];

// ─── MINI BAR CHART ───────────────────────────────────────────────────────────
function BarChart({ data, loading }) {
  if (loading) {
    return (
      <div className="ad-chart">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="ad-chart-col">
            <div className="ad-chart-bar-wrap">
              <div
                className="ad-chart-bar skeleton-bar"
                style={{
                  height: `${30 + Math.random() * 50}%`,
                  animationDelay: `${i * 80}ms`,
                }}
              />
            </div>
            <span
              className="ad-chart-label skeleton-line skeleton-line--sm"
              style={{ width: 16 }}
            />
          </div>
        ))}
      </div>
    );
  }
  const max = Math.max(...data.map((d) => d.views), 1);
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

// ─── SKELETON VALUE ───────────────────────────────────────────────────────────
function SkeletonVal() {
  return <span className="ad-skeleton-val" />;
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const navigate = useNavigate();
  const auth = getAuth();

  // ── Auth state ────────────────────────────────────────────────────────────
  const [user, setUser] = useState(null);
  const [greeting, setGreeting] = useState("Xin chào");

  // ── Firestore data state ──────────────────────────────────────────────────
  const [stats, setStats] = useState({
    posts: 0,
    totalViews: 0,
    contacts: 0,
    lawyers: 0,
    newContacts: 0,
  });
  const [recentPosts, setRecentPosts] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ── Auth listener ─────────────────────────────────────────────────────────
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) navigate("/admin/login");
      else setUser(u);
    });
    return () => unsub();
  }, [auth, navigate]);

  // ── Greeting ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const h = new Date().getHours();
    if (h < 12) setGreeting("Chào buổi sáng");
    else if (h < 18) setGreeting("Chào buổi chiều");
    else setGreeting("Chào buổi tối");
  }, []);

  // ── Fetch tất cả dashboard data ───────────────────────────────────────────
  useEffect(() => {
    setLoading(true);
    Promise.all([
      getDashboardStats(),
      getRecentPostsDashboard(5),
      getRecentContactsDashboard(5),
      getViewsChartData(),
    ])
      .then(([s, posts, contacts, chart]) => {
        setStats(s);
        setRecentPosts(posts);
        setRecentContacts(contacts);
        setChartData(chart);
      })
      .catch((err) => console.error("Dashboard fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  // ── Helpers ───────────────────────────────────────────────────────────────
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  const formatDate = (val) => {
    if (!val) return "—";
    const d = val?.toDate ? val.toDate() : new Date(val);
    return d.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTimeAgo = (val) => {
    if (!val) return "";
    const d = val?.toDate ? val.toDate() : new Date(val);
    const diff = (Date.now() - d.getTime()) / 1000;
    if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
    if (diff < 172800) return "Hôm qua";
    return formatDate(val);
  };

  const formatStatValue = (key, val) => {
    if (key === "totalViews") {
      return val >= 1000 ? `${(val / 1000).toFixed(1)}K` : val;
    }
    return val;
  };

  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div className="ad-content">
      {/* ── GREETING ── */}
      <div className="ad-greeting">
        <div>
          <h1 className="ad-greeting-title">
            {greeting}, <em>{user?.displayName ?? "Admin"}</em> 👋
          </h1>
          <p className="ad-greeting-sub">{today}</p>
        </div>
        <Link to="/admin/posts/new" className="ad-new-post-btn">
          + Viết bài mới
        </Link>
      </div>

      {/* ── STATS CARDS ── */}
      <div className="ad-stats">
        {STAT_CONFIG.map((s, i) => (
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
              {/* Badge "X mới" cho contacts */}
              {s.key === "contacts" && stats.newContacts > 0 && (
                <div className="ad-stat-badge">{stats.newContacts} mới</div>
              )}
            </div>
            <div className="ad-stat-value">
              {loading ? <SkeletonVal /> : formatStatValue(s.key, stats[s.key])}
            </div>
            <div className="ad-stat-label">{s.label}</div>
            <div className="ad-stat-bar" style={{ background: s.color }} />
          </div>
        ))}
      </div>

      {/* ── MIDDLE ROW: Chart + Contacts ── */}
      <div className="ad-mid-row">
        {/* Chart */}
        <div className="ad-block ad-block--chart">
          <div className="ad-block-header">
            <div>
              <h3 className="ad-block-title">Lượt xem 7 ngày qua</h3>
              <p className="ad-block-sub">
                Tổng:{" "}
                {loading
                  ? "…"
                  : chartData
                      .reduce((s, d) => s + d.views, 0)
                      .toLocaleString()}{" "}
                lượt
              </p>
            </div>
            <span className="ad-block-badge">Tuần này</span>
          </div>
          <BarChart data={chartData} loading={loading} />
        </div>

        {/* Recent contacts */}
        <div className="ad-block ad-block--contacts">
          <div className="ad-block-header">
            <div>
              <h3 className="ad-block-title">Yêu cầu tư vấn mới</h3>
              <p className="ad-block-sub">
                {loading
                  ? "…"
                  : `${recentContacts.filter((c) => c.status === "new").length} chưa đọc`}
              </p>
            </div>
            <Link to="/admin/contacts" className="ad-block-link">
              Xem tất cả →
            </Link>
          </div>
          <div className="ad-contacts-list">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="ad-contact-item">
                  <div
                    className="ad-contact-avatar skeleton-box"
                    style={{ borderRadius: "50%" }}
                  />
                  <div className="ad-contact-body" style={{ flex: 1 }}>
                    <div
                      className="skeleton-line"
                      style={{ width: "60%", marginBottom: 6 }}
                    />
                    <div
                      className="skeleton-line skeleton-line--sm"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
              ))
            ) : recentContacts.length === 0 ? (
              <p
                style={{
                  color: "#999",
                  padding: "16px 0",
                  textAlign: "center",
                }}
              >
                Chưa có yêu cầu nào
              </p>
            ) : (
              recentContacts.map((c) => (
                <div
                  key={c.id}
                  className={`ad-contact-item ${c.status === "new" ? "ad-contact-item--new" : ""}`}
                >
                  <div className="ad-contact-avatar">
                    {c.name?.split(" ").pop()[0]}
                  </div>
                  <div className="ad-contact-body">
                    <div className="ad-contact-name">{c.name}</div>
                    <div className="ad-contact-subject">{c.subject}</div>
                  </div>
                  <div className="ad-contact-right">
                    <div className="ad-contact-time">
                      {formatTimeAgo(c.createdAt)}
                    </div>
                    <div
                      className={`ad-contact-status ad-contact-status--${c.status}`}
                    >
                      {c.status === "new"
                        ? "Mới"
                        : c.status === "processing"
                          ? "Đang xử lý"
                          : "Xong"}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ── RECENT POSTS TABLE ── */}
      <div className="ad-block">
        <div className="ad-block-header">
          <div>
            <h3 className="ad-block-title">Bài viết gần đây</h3>
            <p className="ad-block-sub">
              {loading
                ? "Đang tải..."
                : `${recentPosts.length} bài viết mới nhất`}
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
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="ad-table-row">
                    <td>
                      <div className="skeleton-line" style={{ width: "85%" }} />
                    </td>
                    <td>
                      <div
                        className="skeleton-line skeleton-line--sm"
                        style={{ width: 60 }}
                      />
                    </td>
                    <td>
                      <div
                        className="skeleton-line skeleton-line--sm"
                        style={{ width: 70 }}
                      />
                    </td>
                    <td>
                      <div
                        className="skeleton-line skeleton-line--sm"
                        style={{ width: 80 }}
                      />
                    </td>
                    <td>
                      <div
                        className="skeleton-line skeleton-line--sm"
                        style={{ width: 40 }}
                      />
                    </td>
                    <td>
                      <div
                        className="skeleton-line skeleton-line--sm"
                        style={{ width: 50 }}
                      />
                    </td>
                  </tr>
                ))
              ) : recentPosts.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    style={{ textAlign: "center", color: "#999", padding: 24 }}
                  >
                    Chưa có bài viết nào.{" "}
                    <Link to="/admin/posts/new">Viết bài đầu tiên →</Link>
                  </td>
                </tr>
              ) : (
                recentPosts.map((post) => (
                  <tr key={post.id} className="ad-table-row">
                    <td className="ad-td-title">
                      <span title={post.title}>{post.title}</span>
                    </td>
                    <td>
                      <span className="ad-cat-chip">{post.categoryLabel}</span>
                    </td>
                    <td>
                      <span
                        className={`ad-status-chip ad-status-chip--${post.status}`}
                      >
                        {post.status === "published" ? "✓ Đã đăng" : "✎ Nháp"}
                      </span>
                    </td>
                    <td className="ad-td-muted">
                      {formatDate(post.createdAt)}
                    </td>
                    <td className="ad-td-muted">
                      {(post.views || 0) > 0
                        ? post.views.toLocaleString()
                        : "—"}
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
                          to={`/tin-tuc/${post.slug}`}
                          target="_blank"
                          className="ad-action-btn"
                          title="Xem bài"
                        >
                          ↗
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
