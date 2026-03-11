import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/serviceCategory.css";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const SERVICE_GROUPS = [
  {
    id: "dan-su",
    label: "Dân Sự",
    icon: "⚖",
    desc: "Tư vấn và giải quyết các tranh chấp dân sự, bảo vệ quyền lợi hợp pháp cho cá nhân và gia đình.",
    color: "#A8171C",
    services: [
      {
        slug: "tranh-chap-dat-dai",
        name: "Tranh chấp đất đai & bất động sản",
        desc: "Giải quyết tranh chấp quyền sử dụng đất, ranh giới, hợp đồng mua bán bất động sản.",
      },
      {
        slug: "tranh-chap-thua-ke",
        name: "Tranh chấp thừa kế & di chúc",
        desc: "Hỗ trợ lập di chúc hợp pháp, phân chia và giải quyết tranh chấp tài sản thừa kế.",
      },
      {
        slug: "tranh-chap-ly-hon",
        name: "Ly hôn & hôn nhân gia đình",
        desc: "Tư vấn ly hôn thuận tình, đơn phương, phân chia tài sản và quyền nuôi con.",
      },
      {
        slug: "tranh-chap-lao-dong",
        name: "Tranh chấp lao động",
        desc: "Bảo vệ quyền lợi người lao động và doanh nghiệp trong các tranh chấp hợp đồng lao động.",
      },
      {
        slug: "tranh-chap-thuong-mai",
        name: "Tranh chấp thương mại",
        desc: "Giải quyết tranh chấp hợp đồng thương mại, đòi nợ, bồi thường thiệt hại kinh doanh.",
      },
      {
        slug: "tranh-chap-hop-dong",
        name: "Tranh chấp hợp đồng dân sự",
        desc: "Tư vấn soạn thảo và giải quyết vi phạm các loại hợp đồng dân sự.",
      },
      {
        slug: "tranh-chap-so-huu-tri-tue",
        name: "Sở hữu trí tuệ",
        desc: "Đăng ký bảo hộ nhãn hiệu, kiểu dáng công nghiệp, giải quyết tranh chấp bản quyền.",
      },
    ],
  },
  {
    id: "hinh-su",
    label: "Hình Sự",
    icon: "🔒",
    desc: "Bào chữa, bảo vệ quyền lợi hợp pháp cho bị can, bị cáo và người bị hại trong tố tụng hình sự.",
    color: "#1e3a5f",
    services: [
      {
        slug: "bao-chua-nguoi-bi-buoc-toi",
        name: "Bào chữa người bị buộc tội",
        desc: "Bào chữa cho bị can, bị cáo, bảo vệ quyền và lợi ích hợp pháp tối đa trước pháp luật.",
      },
      {
        slug: "bao-ve-nguoi-bi-hai",
        name: "Bảo vệ quyền lợi người bị hại",
        desc: "Đại diện người bị hại trong tố tụng, yêu cầu bồi thường thiệt hại dân sự.",
      },
      {
        slug: "bao-ve-nguoi-bi-to-giac",
        name: "Bảo vệ người bị tố giác",
        desc: "Hỗ trợ pháp lý cho người bị tố giác, kiến nghị, khiếu nại trong giai đoạn điều tra.",
      },
    ],
  },
  {
    id: "dau-tu",
    label: "Đầu Tư – FDI",
    icon: "🌏",
    desc: "Tư vấn pháp lý toàn diện cho nhà đầu tư nước ngoài, hỗ trợ thành lập và vận hành doanh nghiệp FDI tại Việt Nam.",
    color: "#0f5c3a",
    services: [
      {
        slug: "tu-van-phap-ly-truoc-dau-tu",
        name: "Tư vấn pháp lý trước đầu tư",
        desc: "Phân tích pháp lý, đánh giá rủi ro và tư vấn cơ cấu đầu tư phù hợp quy định pháp luật.",
      },
      {
        slug: "tham-tra-phap-ly",
        name: "Thẩm tra pháp lý (Due Diligence)",
        desc: "Rà soát toàn diện hồ sơ pháp lý doanh nghiệp, tài sản trước khi ký kết đầu tư.",
      },
      {
        slug: "thanh-lap-cong-ty-von-nuoc-ngoai",
        name: "Thành lập công ty vốn nước ngoài",
        desc: "Hỗ trợ xin cấp Giấy chứng nhận đăng ký đầu tư và thành lập pháp nhân FDI.",
      },
      {
        slug: "thanh-lap-van-phong-dai-dien",
        name: "Thành lập văn phòng đại diện",
        desc: "Tư vấn và hỗ trợ thủ tục thành lập văn phòng đại diện của tổ chức nước ngoài tại Việt Nam.",
      },
      {
        slug: "dieu-chinh-muc-tieu",
        name: "Điều chỉnh mục tiêu dự án",
        desc: "Hỗ trợ điều chỉnh Giấy chứng nhận đăng ký đầu tư khi thay đổi mục tiêu hoạt động.",
      },
      {
        slug: "thay-doi-dia-diem",
        name: "Thay đổi địa điểm dự án",
        desc: "Tư vấn và thực hiện thủ tục thay đổi địa điểm thực hiện dự án đầu tư.",
      },
      {
        slug: "giai-the-cong-ty",
        name: "Giải thể / Chấm dứt dự án FDI",
        desc: "Hỗ trợ thủ tục chấm dứt hoạt động dự án đầu tư và giải thể công ty FDI.",
      },
    ],
  },
  {
    id: "doanh-nghiep",
    label: "Doanh Nghiệp",
    icon: "🏢",
    desc: "Đồng hành pháp lý toàn diện cho doanh nghiệp từ thành lập, vận hành đến tái cơ cấu và giải thể.",
    color: "#5c3a0f",
    services: [
      {
        slug: "tu-van-thuong-xuyen",
        name: "Tư vấn pháp lý thường xuyên",
        desc: "Dịch vụ luật sư nội bộ thuê ngoài, tư vấn pháp lý định kỳ cho doanh nghiệp.",
      },
      {
        slug: "thanh-lap-doanh-nghiep",
        name: "Thành lập doanh nghiệp",
        desc: "Hỗ trợ thủ tục thành lập công ty TNHH, cổ phần, hộ kinh doanh nhanh chóng.",
      },
      {
        slug: "tang-von-dieu-le",
        name: "Tăng / Giảm vốn điều lệ",
        desc: "Tư vấn và thực hiện thủ tục thay đổi vốn điều lệ theo quy định Luật Doanh nghiệp.",
      },
      {
        slug: "chuyen-nhuong-von",
        name: "Chuyển nhượng vốn / cổ phần",
        desc: "Soạn thảo hợp đồng và thực hiện thủ tục chuyển nhượng phần vốn góp, cổ phần.",
      },
      {
        slug: "thay-doi-dai-dien",
        name: "Thay đổi người đại diện pháp luật",
        desc: "Hỗ trợ thay đổi thông tin người đại diện theo pháp luật của doanh nghiệp.",
      },
      {
        slug: "giai-the",
        name: "Giải thể doanh nghiệp",
        desc: "Tư vấn và thực hiện thủ tục giải thể tự nguyện doanh nghiệp đúng quy trình pháp luật.",
      },
    ],
  },
  {
    id: "giay-phep",
    label: "Giấy Phép",
    icon: "📄",
    desc: "Tư vấn và hỗ trợ xin cấp các loại giấy phép con, giấy phép kinh doanh có điều kiện theo quy định.",
    color: "#2d5a27",
    services: [
      {
        slug: "moi-truong",
        name: "Giấy phép môi trường",
        desc: "Tư vấn và hỗ trợ xin cấp giấy phép môi trường, đánh giá tác động môi trường.",
      },
      {
        slug: "hoa-chat",
        name: "Giấy phép hóa chất",
        desc: "Hỗ trợ xin giấy phép sản xuất, kinh doanh và sử dụng hóa chất nguy hiểm.",
      },
      {
        slug: "phong-chay-chua-chay",
        name: "Phòng cháy chữa cháy",
        desc: "Tư vấn hồ sơ và hỗ trợ xin nghiệm thu phòng cháy chữa cháy cho công trình.",
      },
      {
        slug: "lao-dong",
        name: "Giấy phép lao động nước ngoài",
        desc: "Hỗ trợ xin giấy phép lao động, gia hạn và xác nhận miễn giấy phép cho người nước ngoài.",
      },
      {
        slug: "visa-the-tam-tru",
        name: "Visa & Thẻ tạm trú",
        desc: "Tư vấn và hỗ trợ thủ tục xin visa, thẻ tạm trú cho người nước ngoài tại Việt Nam.",
      },
      {
        slug: "kinh-doanh-ruou",
        name: "Giấy phép kinh doanh rượu",
        desc: "Hỗ trợ xin giấy phép bán lẻ, bán buôn rượu theo quy định pháp luật hiện hành.",
      },
    ],
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function ServicesCategory() {
  const [activeGroup, setActiveGroup] = useState("dan-su");

  const current = SERVICE_GROUPS.find((g) => g.id === activeGroup);

  return (
    <div className="sp-root">
      {/* ── HERO ── */}
      <section className="sp-hero">
        <div className="sp-hero-grid" />
        <div className="sp-hero-glow" />
        <div className="sp-hero-inner">
          <div className="sp-hero-eyebrow">
            <span className="sp-eyebrow-line" />
            Lĩnh vực hoạt động
            <span className="sp-eyebrow-line" />
          </div>
          <h1 className="sp-hero-title">
            Dịch Vụ <em>Pháp Lý</em>
            <br />
            Toàn Diện
          </h1>
          <p className="sp-hero-desc">
            Đội ngũ luật sư giàu kinh nghiệm của Phúc Gia Uy & Cộng Sự sẵn sàng
            đồng hành và bảo vệ quyền lợi hợp pháp của bạn trong mọi lĩnh vực
            pháp luật.
          </p>
          <div className="sp-hero-stats">
            <div className="sp-stat">
              <span className="sp-stat-num">10+</span>
              <span className="sp-stat-lbl">Năm kinh nghiệm</span>
            </div>
            <div className="sp-stat-div" />
            <div className="sp-stat">
              <span className="sp-stat-num">500+</span>
              <span className="sp-stat-lbl">Vụ việc thành công</span>
            </div>
            <div className="sp-stat-div" />
            <div className="sp-stat">
              <span className="sp-stat-num">5</span>
              <span className="sp-stat-lbl">Lĩnh vực chuyên sâu</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── GROUP TABS ── */}
      <div className="sp-tabs-wrap">
        <div className="sp-tabs">
          {SERVICE_GROUPS.map((g) => (
            <button
              key={g.id}
              className={`sp-tab ${activeGroup === g.id ? "active" : ""}`}
              onClick={() => setActiveGroup(g.id)}
              style={{ "--tab-color": g.color }}
            >
              <span className="sp-tab-icon">{g.icon}</span>
              <span className="sp-tab-label">{g.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="sp-content">
        {/* Group intro */}
        <div className="sp-group-intro" key={current.id}>
          <div className="sp-group-badge" style={{ background: current.color }}>
            <span>{current.icon}</span>
            {current.label}
          </div>
          <h2 className="sp-group-title">{current.label}</h2>
          <p className="sp-group-desc">{current.desc}</p>
        </div>

        {/* Services grid */}
        <div className="sp-grid">
          {current.services.map((svc, i) => (
            <Link
              key={svc.slug}
              to={`/${current.id}/${svc.slug}`}
              className="sp-card"
              style={{ "--delay": `${i * 60}ms`, "--accent": current.color }}
            >
              <div className="sp-card-top">
                <div className="sp-card-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="sp-card-arrow">→</div>
              </div>
              <h3 className="sp-card-name">{svc.name}</h3>
              <p className="sp-card-desc">{svc.desc}</p>
              <div className="sp-card-footer">
                <span className="sp-card-cta">Xem chi tiết</span>
                <div className="sp-card-bar" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="sp-cta">
          <div className="sp-cta-inner">
            <div className="sp-cta-text">
              <h3>Cần tư vấn pháp lý?</h3>
              <p>
                Liên hệ ngay để được tư vấn miễn phí từ đội ngũ luật sư của
                chúng tôi.
              </p>
            </div>
            <div className="sp-cta-actions">
              <a
                href="tel:0909724768"
                className="sp-cta-btn sp-cta-btn--primary"
              >
                ☎ Gọi ngay: 0909 724 768
              </a>
              <Link to="/lien-he" className="sp-cta-btn sp-cta-btn--ghost">
                Đặt lịch tư vấn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
