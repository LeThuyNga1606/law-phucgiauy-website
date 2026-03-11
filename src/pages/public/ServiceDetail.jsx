import { useParams, Link } from "react-router-dom";
import "../../styles/serviceDetail.css";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const SERVICE_DATA = {
  "dan-su": {
    label: "Dân Sự",
    color: "#A8171C",
    services: {
      "tranh-chap-dat-dai": {
        name: "Tranh Chấp Đất Đai & Bất Động Sản",
        tagline: "Bảo vệ quyền sử dụng đất và tài sản gắn liền với đất của bạn",
        image: "/images/services/dat-dai.jpg",
        desc: `Tranh chấp đất đai là một trong những loại tranh chấp phổ biến và phức tạp nhất tại Việt Nam. Với đội ngũ luật sư giàu kinh nghiệm, Phúc Gia Uy & Cộng Sự cung cấp dịch vụ tư vấn và đại diện pháp lý toàn diện giúp bạn bảo vệ quyền lợi hợp pháp trong các tranh chấp liên quan đến đất đai và bất động sản.`,
        scope: [
          "Tranh chấp quyền sử dụng đất, ranh giới thửa đất",
          "Tranh chấp hợp đồng mua bán, chuyển nhượng bất động sản",
          "Tranh chấp thừa kế đất đai trong gia đình",
          "Thu hồi đất, bồi thường giải phóng mặt bằng",
          "Khiếu nại quyết định hành chính về đất đai",
          "Cấp, đổi Giấy chứng nhận quyền sử dụng đất",
        ],
        steps: [
          {
            num: "01",
            title: "Tiếp nhận & tư vấn ban đầu",
            desc: "Lắng nghe, phân tích hồ sơ và đánh giá tình huống pháp lý cụ thể của khách hàng.",
          },
          {
            num: "02",
            title: "Nghiên cứu hồ sơ pháp lý",
            desc: "Thu thập, rà soát toàn bộ giấy tờ đất đai, hợp đồng và tài liệu liên quan.",
          },
          {
            num: "03",
            title: "Xây dựng chiến lược",
            desc: "Đề xuất phương án giải quyết tối ưu: thương lượng, hòa giải hoặc khởi kiện.",
          },
          {
            num: "04",
            title: "Đại diện & thực hiện",
            desc: "Đại diện khách hàng tại cơ quan nhà nước, UBND, Tòa án hoặc trọng tài.",
          },
          {
            num: "05",
            title: "Theo dõi & bàn giao",
            desc: "Giám sát quá trình thực thi kết quả và bàn giao hồ sơ hoàn chỉnh cho khách hàng.",
          },
        ],
      },
      "tranh-chap-ly-hon": {
        name: "Ly Hôn & Hôn Nhân Gia Đình",
        tagline:
          "Đồng hành pháp lý trong những quyết định quan trọng của cuộc đời",
        image: "/images/services/hon-nhan.jpg",
        desc: `Ly hôn là một quyết định khó khăn và phức tạp về mặt pháp lý. Chúng tôi cung cấp dịch vụ tư vấn và hỗ trợ thủ tục ly hôn chuyên nghiệp, giúp bạn bảo vệ quyền lợi về tài sản và quyền nuôi con trong quá trình giải quyết tranh chấp hôn nhân.`,
        scope: [
          "Ly hôn thuận tình — nhanh chóng, thủ tục đơn giản",
          "Ly hôn đơn phương khi không có sự đồng thuận",
          "Phân chia tài sản chung vợ chồng hợp lý",
          "Giải quyết quyền nuôi con và nghĩa vụ cấp dưỡng",
          "Chia tài sản là bất động sản, doanh nghiệp",
          "Công nhận ly hôn yếu tố nước ngoài",
        ],
        steps: [
          {
            num: "01",
            title: "Tư vấn & lắng nghe",
            desc: "Tư vấn các hình thức ly hôn, quyền lợi pháp lý và hướng giải quyết phù hợp.",
          },
          {
            num: "02",
            title: "Chuẩn bị hồ sơ",
            desc: "Hướng dẫn và hỗ trợ thu thập đầy đủ giấy tờ theo yêu cầu của Tòa án.",
          },
          {
            num: "03",
            title: "Nộp đơn & hòa giải",
            desc: "Đại diện nộp đơn, tham gia phiên hòa giải và bảo vệ quyền lợi khách hàng.",
          },
          {
            num: "04",
            title: "Phiên xét xử",
            desc: "Đại diện khách hàng tại Tòa án, trình bày lập luận và bảo vệ yêu cầu.",
          },
          {
            num: "05",
            title: "Thi hành bản án",
            desc: "Hỗ trợ thủ tục thi hành bản án ly hôn, phân chia tài sản và cấp dưỡng.",
          },
        ],
      },
      "tranh-chap-thua-ke": {
        name: "Tranh Chấp Thừa Kế & Di Chúc",
        tagline:
          "Bảo vệ quyền thừa kế hợp pháp, giải quyết tranh chấp di sản gia đình",
        image: "/images/services/thua-ke.jpg",
        desc: `Tranh chấp thừa kế thường nảy sinh trong nội bộ gia đình và mang tính chất phức tạp về cả pháp lý lẫn tình cảm. Chúng tôi tư vấn và hỗ trợ giải quyết tranh chấp thừa kế theo di chúc hoặc theo pháp luật một cách công bằng và đúng quy định.`,
        scope: [
          "Lập di chúc hợp pháp, đúng quy định pháp luật",
          "Phân chia di sản theo di chúc hoặc theo pháp luật",
          "Tranh chấp về hiệu lực di chúc",
          "Xác định hàng thừa kế và phần thừa kế bắt buộc",
          "Từ chối nhận di sản thừa kế",
          "Khởi kiện tranh chấp thừa kế tại Tòa án",
        ],
        steps: [
          {
            num: "01",
            title: "Xác định di sản & người thừa kế",
            desc: "Xác định toàn bộ di sản, hàng thừa kế và các bên liên quan.",
          },
          {
            num: "02",
            title: "Tư vấn phương án phân chia",
            desc: "Đề xuất phương án phân chia hợp pháp và hòa giải giữa các bên.",
          },
          {
            num: "03",
            title: "Lập văn bản thỏa thuận",
            desc: "Soạn thảo văn bản phân chia di sản, công chứng theo quy định.",
          },
          {
            num: "04",
            title: "Khởi kiện (nếu cần)",
            desc: "Đại diện khởi kiện và bảo vệ quyền lợi tại Tòa án khi không thỏa thuận được.",
          },
          {
            num: "05",
            title: "Thực hiện chuyển giao",
            desc: "Hỗ trợ thủ tục chuyển quyền sở hữu, đăng ký tài sản sau khi phân chia.",
          },
        ],
      },
    },
  },
  "hinh-su": {
    label: "Hình Sự",
    color: "#1e3a5f",
    services: {
      "bao-chua-nguoi-bi-buoc-toi": {
        name: "Bào Chữa Người Bị Buộc Tội",
        tagline: "Bảo vệ quyền và lợi ích hợp pháp tối đa trước pháp luật",
        image: "/images/services/hinh-su.jpg",
        desc: `Trong tố tụng hình sự, mọi người đều có quyền được bào chữa. Luật sư của Phúc Gia Uy & Cộng Sự sẽ đồng hành từ giai đoạn điều tra đến xét xử, đảm bảo quyền và lợi ích hợp pháp của bạn được bảo vệ tối đa theo quy định của Bộ luật Tố tụng hình sự.`,
        scope: [
          "Bào chữa tại giai đoạn điều tra, truy tố",
          "Bào chữa tại phiên tòa sơ thẩm và phúc thẩm",
          "Kháng cáo bản án, quyết định của Tòa án",
          "Giám sát điều kiện tạm giam, tạm giữ",
          "Tư vấn quyền im lặng và quyền của bị can",
          "Yêu cầu bồi thường oan sai",
        ],
        steps: [
          {
            num: "01",
            title: "Tiếp xúc & ủy quyền",
            desc: "Gặp gỡ khẩn cấp, nhận ủy quyền và nghiên cứu hồ sơ vụ án ngay lập tức.",
          },
          {
            num: "02",
            title: "Gặp thân chủ tại nơi tạm giam",
            desc: "Tiếp xúc với bị can, lắng nghe và tư vấn quyền lợi pháp lý.",
          },
          {
            num: "03",
            title: "Nghiên cứu chứng cứ",
            desc: "Phân tích toàn bộ hồ sơ, chứng cứ buộc tội và xây dựng luận cứ bào chữa.",
          },
          {
            num: "04",
            title: "Bào chữa tại Tòa",
            desc: "Trình bày luận cứ bào chữa, đặt câu hỏi nhân chứng và phản bác cáo trạng.",
          },
          {
            num: "05",
            title: "Kháng cáo (nếu cần)",
            desc: "Tư vấn và hỗ trợ thủ tục kháng cáo, giám đốc thẩm nếu bản án chưa thỏa đáng.",
          },
        ],
      },
    },
  },
  "dau-tu": {
    label: "Đầu Tư – FDI",
    color: "#0f5c3a",
    services: {
      "thanh-lap-cong-ty-von-nuoc-ngoai": {
        name: "Thành Lập Công Ty Vốn Nước Ngoài",
        tagline: "Đồng hành nhà đầu tư nước ngoài gia nhập thị trường Việt Nam",
        image: "/images/services/fdi.jpg",
        desc: `Việt Nam là điểm đến hấp dẫn cho nhà đầu tư nước ngoài với nhiều ưu đãi và tiềm năng tăng trưởng. Phúc Gia Uy & Cộng Sự cung cấp dịch vụ pháp lý toàn diện giúp nhà đầu tư nước ngoài thành lập và vận hành doanh nghiệp FDI tại Việt Nam nhanh chóng và đúng quy định.`,
        scope: [
          "Tư vấn lựa chọn hình thức đầu tư phù hợp",
          "Xin cấp Giấy chứng nhận đăng ký đầu tư (IRC)",
          "Thành lập công ty TNHH/Cổ phần vốn nước ngoài",
          "Mở tài khoản vốn đầu tư trực tiếp",
          "Đăng ký người lao động nước ngoài",
          "Tư vấn ưu đãi đầu tư và chính sách thuế",
        ],
        steps: [
          {
            num: "01",
            title: "Tư vấn cơ cấu đầu tư",
            desc: "Phân tích ngành nghề, lựa chọn hình thức pháp lý và địa điểm đầu tư tối ưu.",
          },
          {
            num: "02",
            title: "Chuẩn bị hồ sơ",
            desc: "Soạn thảo và dịch thuật toàn bộ hồ sơ theo yêu cầu của cơ quan cấp phép.",
          },
          {
            num: "03",
            title: "Xin cấp IRC",
            desc: "Nộp hồ sơ và làm việc với Sở KH&ĐT để được cấp Giấy chứng nhận đăng ký đầu tư.",
          },
          {
            num: "04",
            title: "Đăng ký doanh nghiệp",
            desc: "Hoàn thiện thủ tục thành lập doanh nghiệp, khắc dấu và khai thuế ban đầu.",
          },
          {
            num: "05",
            title: "Hỗ trợ vận hành",
            desc: "Tư vấn các thủ tục sau thành lập: tài khoản ngân hàng, giấy phép con, lao động.",
          },
        ],
      },
    },
  },
  "doanh-nghiep": {
    label: "Doanh Nghiệp",
    color: "#5c3a0f",
    services: {
      "thanh-lap-doanh-nghiep": {
        name: "Thành Lập Doanh Nghiệp",
        tagline:
          "Khởi đầu kinh doanh đúng pháp luật, nhanh chóng và chuyên nghiệp",
        image: "/images/services/doanh-nghiep.jpg",
        desc: `Thành lập doanh nghiệp là bước đầu tiên quan trọng trong hành trình kinh doanh. Phúc Gia Uy & Cộng Sự hỗ trợ bạn lựa chọn loại hình doanh nghiệp phù hợp và hoàn thiện thủ tục đăng ký nhanh chóng, chính xác theo đúng quy định của Luật Doanh nghiệp 2020.`,
        scope: [
          "Thành lập Công ty TNHH một thành viên",
          "Thành lập Công ty TNHH hai thành viên trở lên",
          "Thành lập Công ty Cổ phần",
          "Thành lập Hộ kinh doanh cá thể",
          "Đăng ký ngành nghề kinh doanh phù hợp",
          "Tư vấn cơ cấu vốn điều lệ và bộ máy quản lý",
        ],
        steps: [
          {
            num: "01",
            title: "Tư vấn loại hình",
            desc: "Phân tích ưu nhược điểm từng loại hình doanh nghiệp để lựa chọn phù hợp nhất.",
          },
          {
            num: "02",
            title: "Soạn hồ sơ",
            desc: "Chuẩn bị điều lệ công ty, danh sách thành viên và toàn bộ hồ sơ đăng ký.",
          },
          {
            num: "03",
            title: "Nộp & nhận kết quả",
            desc: "Nộp hồ sơ tại Sở KH&ĐT, theo dõi và nhận Giấy chứng nhận đăng ký doanh nghiệp.",
          },
          {
            num: "04",
            title: "Khắc dấu & khai thuế",
            desc: "Thực hiện khắc con dấu doanh nghiệp và đăng ký kê khai thuế ban đầu.",
          },
          {
            num: "05",
            title: "Hoàn thiện sau thành lập",
            desc: "Tư vấn mở tài khoản ngân hàng, đăng ký bảo hiểm xã hội và các thủ tục khác.",
          },
        ],
      },
    },
  },
  "giay-phep": {
    label: "Giấy Phép",
    color: "#2d5a27",
    services: {
      "lao-dong": {
        name: "Giấy Phép Lao Động Nước Ngoài",
        tagline:
          "Hỗ trợ người lao động nước ngoài làm việc hợp pháp tại Việt Nam",
        image: "/images/services/lao-dong.jpg",
        desc: `Người lao động nước ngoài muốn làm việc tại Việt Nam cần có giấy phép lao động theo quy định. Phúc Gia Uy & Cộng Sự cung cấp dịch vụ tư vấn và hỗ trợ xin cấp giấy phép lao động, gia hạn và xác nhận miễn giấy phép cho người nước ngoài nhanh chóng, đúng quy định.`,
        scope: [
          "Xin cấp giấy phép lao động lần đầu",
          "Gia hạn giấy phép lao động hết hạn",
          "Cấp lại giấy phép lao động bị mất, hỏng",
          "Xác nhận không thuộc diện cấp giấy phép",
          "Tư vấn điều kiện và hồ sơ cần thiết",
          "Hỗ trợ dịch thuật và công chứng giấy tờ",
        ],
        steps: [
          {
            num: "01",
            title: "Kiểm tra điều kiện",
            desc: "Xác định đối tượng, điều kiện và loại hồ sơ phù hợp với từng trường hợp cụ thể.",
          },
          {
            num: "02",
            title: "Thu thập hồ sơ",
            desc: "Hướng dẫn chuẩn bị đầy đủ giấy tờ, hỗ trợ dịch thuật và hợp pháp hóa lãnh sự.",
          },
          {
            num: "03",
            title: "Nộp hồ sơ",
            desc: "Nộp hồ sơ tại Sở Lao động – Thương binh và Xã hội theo đúng quy trình.",
          },
          {
            num: "04",
            title: "Theo dõi xử lý",
            desc: "Theo dõi tiến trình và bổ sung hồ sơ theo yêu cầu của cơ quan chức năng nếu cần.",
          },
          {
            num: "05",
            title: "Nhận & bàn giao",
            desc: "Nhận giấy phép lao động và bàn giao đầy đủ hồ sơ pháp lý cho khách hàng.",
          },
        ],
      },
    },
  },
};

const DEFAULT_SERVICE = {
  name: "Dịch Vụ Pháp Lý",
  tagline: "Tư vấn và hỗ trợ pháp lý chuyên nghiệp",
  image: "",
  desc: "Liên hệ với chúng tôi để được tư vấn chi tiết về dịch vụ này.",
  scope: [],
  steps: [],
};

export default function ServiceDetail() {
  const { category, slug } = useParams();

  const group = SERVICE_DATA[category];
  const service = group?.services?.[slug] || DEFAULT_SERVICE;
  const color = group?.color || "#A8171C";
  const groupLabel = group?.label || "Dịch vụ";

  const related = group
    ? Object.entries(group.services)
        .filter(([s]) => s !== slug)
        .slice(0, 3)
        .map(([s, d]) => ({ slug: s, ...d }))
    : [];

  return (
    <div className="sd-root">
      {/* ── BREADCRUMB ── */}
      <div className="sd-breadcrumb">
        <div className="sd-breadcrumb-inner">
          <Link to="/">Trang chủ</Link>
          <span>›</span>
          <Link to="/dich-vu">Dịch vụ</Link>
          <span>›</span>
          <Link to={`/${category}`}>{groupLabel}</Link>
          <span>›</span>
          <span className="sd-bread-current">{service.name}</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="sd-hero" style={{ "--accent": color }}>
        <div className="sd-hero-grid" />
        <div className="sd-hero-inner">
          <div className="sd-hero-left">
            <div className="sd-hero-badge" style={{ background: color }}>
              {groupLabel}
            </div>
            <h1 className="sd-hero-title">{service.name}</h1>
            <p className="sd-hero-tagline">{service.tagline}</p>
            <div className="sd-hero-actions">
              <a
                href="tel:0909724768"
                className="sd-btn sd-btn--primary"
                style={{ background: color }}
              >
                ☎ Gọi tư vấn ngay
              </a>
              <Link to="/lien-he" className="sd-btn sd-btn--ghost">
                Đặt lịch hẹn
              </Link>
            </div>
          </div>

          <div className="sd-hero-img-wrap">
            {service.image ? (
              <img
                src={service.image}
                alt={service.name}
                className="sd-hero-img"
              />
            ) : (
              <div
                className="sd-hero-img-placeholder"
                style={{ "--accent": color }}
              >
                <span>⚖</span>
              </div>
            )}
            <div className="sd-hero-img-badge" style={{ background: color }}>
              <span>✓</span> Tư vấn miễn phí lần đầu
            </div>
          </div>
        </div>
      </section>

      {/* ── LAYOUT ── */}
      <div className="sd-layout">
        <div className="sd-main">
          {/* Mô tả */}
          <section className="sd-section">
            <div className="sd-section-label" style={{ color }}>
              <span className="sd-label-dot" style={{ background: color }} />
              Tổng quan dịch vụ
            </div>
            <p className="sd-desc">{service.desc}</p>
          </section>

          {/* Phạm vi */}
          {service.scope?.length > 0 && (
            <section className="sd-section">
              <div className="sd-section-label" style={{ color }}>
                <span className="sd-label-dot" style={{ background: color }} />
                Phạm vi hỗ trợ
              </div>
              <div className="sd-scope-grid">
                {service.scope.map((item, i) => (
                  <div key={i} className="sd-scope-item">
                    <div
                      className="sd-scope-check"
                      style={{ background: color }}
                    >
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Quy trình */}
          {service.steps?.length > 0 && (
            <section className="sd-section">
              <div className="sd-section-label" style={{ color }}>
                <span className="sd-label-dot" style={{ background: color }} />
                Quy trình thực hiện
              </div>
              <div className="sd-steps">
                {service.steps.map((step, i) => (
                  <div key={i} className="sd-step">
                    <div className="sd-step-left">
                      <div
                        className="sd-step-num"
                        style={{ color, borderColor: color }}
                      >
                        {step.num}
                      </div>
                      {i < service.steps.length - 1 && (
                        <div
                          className="sd-step-line"
                          style={{ background: `${color}25` }}
                        />
                      )}
                    </div>
                    <div className="sd-step-body">
                      <h4 className="sd-step-title">{step.title}</h4>
                      <p className="sd-step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Liên quan */}
          {related.length > 0 && (
            <section className="sd-section">
              <div className="sd-section-label" style={{ color }}>
                <span className="sd-label-dot" style={{ background: color }} />
                Dịch vụ liên quan
              </div>
              <div className="sd-related-grid">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/${category}/${r.slug}`}
                    className="sd-related-card"
                    style={{ "--accent": color }}
                  >
                    <div className="sd-related-name">{r.name}</div>
                    <div className="sd-related-desc">{r.desc}</div>
                    <div className="sd-related-arrow">→</div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* ── SIDEBAR ── */}
        <aside className="sd-sidebar">
          <div className="sd-sidebar-cta" style={{ "--accent": color }}>
            <div className="sd-cta-icon">💬</div>
            <h3>Tư vấn miễn phí</h3>
            <p>
              Gặp gỡ trực tiếp hoặc tư vấn qua điện thoại — hoàn toàn miễn phí
              lần đầu.
            </p>
            <a
              href="tel:0909724768"
              className="sd-cta-call"
              style={{ background: color }}
            >
              ☎ 0909 724 768
            </a>
            <a
              href="https://zalo.me/0909724768"
              target="_blank"
              rel="noreferrer"
              className="sd-cta-zalo"
            >
              Chat Zalo ngay
            </a>
            <Link to="/lien-he" className="sd-cta-form">
              Để lại thông tin
            </Link>
          </div>

          <div className="sd-sidebar-block">
            <div className="sd-block-title">Cam kết của chúng tôi</div>
            {[
              { icon: "🔒", text: "Bảo mật thông tin tuyệt đối" },
              { icon: "⚡", text: "Phản hồi trong vòng 2 giờ" },
              { icon: "✓", text: "Luật sư có chứng chỉ hành nghề" },
              { icon: "💰", text: "Chi phí minh bạch, rõ ràng" },
            ].map((c, i) => (
              <div key={i} className="sd-commit-item">
                <span className="sd-commit-icon">{c.icon}</span>
                <span>{c.text}</span>
              </div>
            ))}
          </div>

          <div className="sd-sidebar-block">
            <div className="sd-block-title">Văn phòng</div>
            <div className="sd-office-info">
              {[
                {
                  icon: "📍",
                  text: "Tầng trệt, Số 17 Đường số 4, Khu phố 5, Phường Hiệp Bình, TP. HCM",
                },
                { icon: "⏰", text: "Thứ 2 – Thứ 6: 8:00 – 17:30" },
                { icon: "✉", text: "luatsunguyen0909@gmail.com" },
              ].map((o, i) => (
                <div key={i} className="sd-office-row">
                  <span>{o.icon}</span>
                  <span>{o.text}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
