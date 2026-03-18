import { name } from "@cloudinary/url-gen/actions/namedTransformation";
import introduce1 from "../assets/images/introduce_1.png";
export const serviceGroup = [
  {
    id: "dan-su",
    name: "Dân sự",
    description: [
      "Công ty Luật TNHH Phúc Gia Uy & Cộng sự với nhiều năm kinh nghiệm và chuyên môn trong nhiều lĩnh vực pháp luật như đất đai, thừa kế, ly hôn, lao động, hợp đồng, kinh doanh thương mại, sở hữu trí tuệ, luôn là đối tác pháp lý đáng tin cậy trong việc giải quyết tranh chấp dân sự.",
      "Chúng tôi cung cấp các giải pháp tư vấn và đại diện pháp lý từ đàm phán, hòa giải đến tham gia tố tụng tại tòa án và trọng tài, nhằm bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng.",
      "Dưới đây là các dịch vụ cụ thể mà Công ty cung cấp trong lĩnh vực giải quyết tranh chấp:",
      "Nếu Quý khách có nhu cầu hỗ trợ pháp lý, Công ty Luật TNHH Phúc Gia Uy & Cộng sự luôn sẵn sàng đồng hành, cung cấp giải pháp phù hợp và bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng với chi phí hợp lý.",
    ],
    services: [
      {
        key: "tranh-chap-dat-dai",
        name: "Tranh chấp Đất đai",
        to: "/dich-vu/dan-su/tranh-chap-dat-dai",
      },
      {
        key: "tranh-chap-thua-ke",
        name: "Tranh chấp Thừa kế",
        to: "/dich-vu/dan-su/tranh-chap-thua-ke",
      },
      {
        key: "tranh-chap-ly-hon",
        name: "Tranh chấp Ly hôn",
        to: "/dich-vu/dan-su/tranh-chap-ly-hon",
      },
      {
        key: "tranh-chap-lao-dong",
        name: "Tranh chấp Lao động",
        to: "/dich-vu/dan-su/tranh-chap-lao-dong",
      },
      {
        key: "tranh-chap-thuong-mai",
        name: "Tranh chấp Thương mại",
        to: "/dich-vu/dan-su/tranh-chap-thuong-mai",
      },
      {
        key: "tranh-chap-hop-dong",
        name: "Tranh chấp Hợp đồng",
        to: "/dich-vu/dan-su/tranh-chap-hop-dong",
      },
      {
        key: "tranh-chap-so-huu-tri-tue",
        name: "Tranh chấp Sở hữu trí tuệ",
        to: "/dich-vu/dan-su/tranh-chap-so-huu-tri-tue",
      },
    ],
    img: introduce1,
  },
  {
    id: "hinh-su",
    name: "Hình sự",
    description: [
      "Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ luật sư tư vấn và bào chữa trong các vụ án hình sự, hỗ trợ khách hàng bảo vệ quyền và lợi ích hợp pháp trong suốt quá trình điều tra, truy tố và xét xử. Với kinh nghiệm thực tiễn và sự am hiểu pháp luật hình sự, đội ngũ luật sư của chúng tôi tư vấn giải pháp pháp lý phù hợp, tham gia bào chữa cho bị can, bị cáo, bảo vệ quyền lợi cho bị hại và các bên liên quan. Dịch vụ được thực hiện nhanh chóng, bảo mật và tuân thủ đúng quy định pháp luật, giúp khách hàng giảm thiểu rủi ro pháp lý và đảm bảo quyền lợi tối đa.",
      "Dịch vụ chúng tôi cung cấp bao gồm: ",
      "Nếu Quý khách có nhu cầu hỗ trợ pháp lý, Công ty Luật TNHH Phúc Gia Uy & Cộng sự luôn sẵn sàng đồng hành, cung cấp giải pháp phù hợp và bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng với chi phí hợp lý.",
    ],
    services: [
      {
        key: "bao-chua-nguoi-bi-buoc-toi",
        name: "Bào chữa người bị buộc tội",
        to: "/dich-vu/hinh-su/bao-chua-nguoi-bi-buoc-toi",
      },
      {
        key: "bao-chua-bi-hai",
        name: "Bảo vệ quyền và lợi ích hợp pháp cho bị hại, đương sự trong vụ án hình sự",
        to: "/dich-vu/hinh-su/bao-chua-bi-hai",
      },
      {
        name: "Bảo vệ quyền và lợi ích hợp pháp cho người bị tố giác, người bị kiến nghị tố giác và người có đơn tố giác tội phạm",
        key: "bao-chua-nguoi-to-gia",
        to: "/dich-vu/hinh-su/bao-chua-nguoi-to-gia",
      },
    ],
    img: introduce1,
  },
  {
    id: "dau-tu-nuoc-ngoai",
    name: "Tư vấn đầu tư nước ngoài (FDI)",
    to: "/dich-vu/dau-tu-nuoc-ngoai",
    description: [
      "Dịch vụ tư vấn đầu tư nước ngoài (FDI) tại Việt Nam của Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp giải pháp pháp lý toàn diện dành cho nhà đầu tư nước ngoài muốn thành lập doanh nghiệp, thực hiện dự án đầu tư và mở rộng hoạt động kinh doanh tại Việt Nam.",
      "Với đội ngũ luật sư và chuyên viên giàu kinh nghiệm trong lĩnh vực đầu tư nước ngoài, doanh nghiệp và pháp luật thương mại, PGU hỗ trợ nhà đầu tư từ giai đoạn tư vấn trước đầu tư, lựa chọn hình thức đầu tư, thành lập công ty có vốn nước ngoài, xin cấp Giấy chứng nhận đăng ký đầu tư (IRC), Giấy chứng nhận đăng ký doanh nghiệp (ERC) đến điều chỉnh dự án đầu tư, thực hiện các thủ tục pháp lý trong quá trình hoạt động và chấm dứt dự án.",
      "Chúng tôi cam kết mang đến dịch vụ tư vấn đầu tư nước ngoài tại Việt Nam nhanh chóng, đúng quy định pháp luật và tối ưu chi phí, giúp nhà đầu tư hạn chế rủi ro pháp lý và triển khai dự án hiệu quả, bền vững.",
      "Các dịch vụ về đầu tư nước ngoài mà chúng tôi cung cấp:",
      "Nếu Quý khách có nhu cầu hỗ trợ pháp lý, Công ty Luật TNHH Phúc Gia Uy & Cộng sự luôn sẵn sàng đồng hành, cung cấp giải pháp phù hợp và bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng với chi phí hợp lý.",
    ],
    services: [
      {
        key: "dau-tu-moi",
        name: "Đầu tư mới",
        to: "/dich-vu/dau-tu-nuoc-ngoai/dau-tu-moi",
      },
      {
        key: "thay-doi-giay-chung-nhan-dang-ky-dau-tu",
        name: "Thay đổi Giấy chứng nhận đăng ký đầu tư",
        to: "/dich-vu/dau-tu-nuoc-ngoai/thay-doi-giay-chung-nhan-dang-ky-dau-tu",
      },
      {
        key: "bao-cao-du-an",
        name: "Báo cáo dự án",
        to: "/dich-vu/dau-tu-nuoc-ngoai/bao-cao-du-an",
      },
    ],
    img: introduce1,
  },
  {
    id: "doanh-nghiep",
    name: "Doanh nghiệp",
    description: [
      "Trong bối cảnh môi trường kinh doanh ngày càng cạnh tranh, việc tuân thủ các quy định pháp luật không chỉ là yêu cầu bắt buộc mà còn là nền tảng quan trọng giúp doanh nghiệp phát triển bền vững. Một hệ thống pháp lý rõ ràng và chặt chẽ sẽ giúp doanh nghiệp quản lý hiệu quả các nguồn lực như nhân sự, tài chính, tài sản, công nghệ và hoạt động kinh doanh, đồng thời hạn chế các rủi ro pháp lý có thể phát sinh.",
      "Thấu hiểu những nhu cầu đó, Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn pháp luật doanh nghiệp chuyên nghiệp và toàn diện, hỗ trợ doanh nghiệp từ giai đoạn thành lập đến quá trình vận hành và phát triển. Với đội ngũ luật sư và chuyên viên pháp lý giàu kinh nghiệm, Phúc Gia Uy luôn đưa ra các giải pháp pháp lý phù hợp, giúp doanh nghiệp tuân thủ đúng quy định pháp luật và yên tâm tập trung phát triển hoạt động kinh doanh.",
      "Các dịch vụ pháp lý cho doanh nghiệp mà chúng tôi cung cấp:",
      "Nếu Quý khách có nhu cầu hỗ trợ pháp lý, Công ty Luật TNHH Phúc Gia Uy & Cộng sự luôn sẵn sàng đồng hành, cung cấp giải pháp phù hợp và bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng với chi phí hợp lý.",
    ],
    services: [
      {
        key: "tu-van-thuong-xuyen",
        name: "Tư vấn thường xuyên",
        to: "/dich-vu/doanh-nghiep/tu-van-thuong-xuyen",
      },
      {
        key: "thanh-lap-moi",
        name: "Thành lập mới",
        to: "/dich-vu/doanh-nghiep/thanh-lap-moi",
      },
      {
        key: "thay-doi-giay-chung-nhan-dang-ky-kinh-doanh",
        name: "Thay đổi giấy chứng nhận đăng kí kinh doanh",
        to: "/dich-vu/doanh-nghiep/thay-doi-giay-chung-nhan-dang-ky-kinh-doanh",
      },
      {
        key: "cham-dut-kinh-doanh",
        name: "Chấm dứt kinh doanh",
        to: "/dich-vu/doanh-nghiep/cham-dut-kinh-doanh",
      },
    ],
    img: introduce1,
  },
  {
    id: "giay-phep",
    name: "Giấy phép",
    description: [
      "Giấy phép con là các loại giấy phép, chứng nhận hoặc văn bản chấp thuận do cơ quan nhà nước có thẩm quyền cấp cho doanh nghiệp khi kinh doanh trong những ngành nghề có điều kiện theo quy định của pháp luật. Việc xin cấp giấy phép con thường đòi hỏi doanh nghiệp phải đáp ứng nhiều điều kiện về nhân sự, cơ sở vật chất, an ninh, môi trường hoặc tiêu chuẩn kỹ thuật.",
      "Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ tư vấn và thực hiện thủ tục xin cấp các loại giấy phép con cho doanh nghiệp, hỗ trợ khách hàng từ khâu rà soát điều kiện pháp lý, chuẩn bị hồ sơ, nộp hồ sơ và làm việc với cơ quan có thẩm quyền cho đến khi giấy phép được cấp. Với kinh nghiệm thực tiễn và quy trình làm việc chuyên nghiệp, PGU giúp doanh nghiệp tiết kiệm thời gian, hạn chế rủi ro pháp lý và nhanh chóng đưa hoạt động kinh doanh vào vận hành hợp pháp.",
      "PGU cung cấp dịch vụ tư vấn và thực hiện thủ tục xin cấp đa dạng các loại giấy phép con cho doanh nghiệp, bao gồm:",
      "Nếu Quý khách có nhu cầu hỗ trợ pháp lý, Công ty Luật TNHH Phúc Gia Uy & Cộng sự luôn sẵn sàng đồng hành, cung cấp giải pháp phù hợp và bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng với chi phí hợp lý.",
    ],
    services: [
      {
        name: "Giấy phép môi trường",
        key: "giay-phep-moi-truong",
        to: "/dich-vu/giay-phep/giay-phep-moi-truong",
      },
      {
        name: "Giấy phép hóa chất",
        key: "giay-phep-hoa-chat",
        to: "/dich-vu/giay-phep/giay-phep-hoa-chat",
      },
      {
        name: "Phòng cháy chữa cháy",
        key: "giay-phep-phong-chay-chua-chay",
        to: "/dich-vu/giay-phep/giay-phep-phong-chay-chua-chay",
      },
      {
        name: "Hoàn công nhà xưởng",
        key: "hoan-cong-nha-xuong",
        to: "/dich-vu/giay-phep/hoan-cong-nha-xuong",
      },
      {
        name: "Giấy phép lao động",
        key: "giay-phep-lao-dong",
        to: "/dich-vu/giay-phep/giay-phep-lao-dong",
      },
      {
        name: "Giấy phép an ninh trật tự",
        key: "giay-phep-an-ninh-trat-tu",
        to: "/dich-vu/giay-phep/giay-phep-an-ninh-trat-tu",
      },
      {
        name: "Visa - Thẻ tạm trú",
        key: "visa-the-tam-tru",
        to: "/dich-vu/giay-phep/visa-the-tam-tru",
      },
      {
        name: "Hộ kinh doanh",
        key: "ho-kinh-doanh",
        to: "/dich-vu/giay-phep/ho-kinh-doanh",
      },
      {
        name: "Giấy phép kinh doanh rượu",
        key: "giay-phep-kinh-doanh-ruou",
        to: "/dich-vu/giay-phep/giay-phep-kinh-doanh-ruou",
      },
      {
        name: "Nhập khẩu thiết bị, vật tư y tế",
        key: "giay-phep-y-te",
        to: "/dich-vu/giay-phep/giay-phep-y-te",
      },
    ],
    img: introduce1,
  },
];
