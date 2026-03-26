import { name } from "@cloudinary/url-gen/actions/namedTransformation";
import introduce1 from "../assets/images/introduce_1.png";
export const SERVICE_GROUP = [
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
        to: "/dich-vu/dan-su/detail/tranh-chap-dat-dai",
      },
      {
        key: "tranh-chap-thua-ke",
        name: "Tranh chấp Thừa kế",
        to: "/dich-vu/dan-su/detail/tranh-chap-thua-ke",
      },
      {
        key: "tranh-chap-ly-hon",
        name: "Tranh chấp Ly hôn",
        to: "/dich-vu/dan-su/detail/tranh-chap-ly-hon",
      },
      {
        key: "tranh-chap-lao-dong",
        name: "Tranh chấp Lao động",
        to: "/dich-vu/dan-su/detail/tranh-chap-lao-dong",
      },
      {
        key: "tranh-chap-thuong-mai",
        name: "Tranh chấp Thương mại",
        to: "/dich-vu/dan-su/detail/tranh-chap-thuong-mai",
      },
      {
        key: "tranh-chap-hop-dong",
        name: "Tranh chấp Hợp đồng",
        to: "/dich-vu/dan-su/detail/tranh-chap-hop-dong",
      },
      {
        key: "tranh-chap-so-huu-tri-tue",
        name: "Tranh chấp Sở hữu trí tuệ",
        to: "/dich-vu/dan-su/detail/tranh-chap-so-huu-tri-tue",
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
        to: "/dich-vu/hinh-su/detail/bao-chua-nguoi-bi-buoc-toi",
      },
      {
        key: "bao-chua-bi-hai",
        name: "Bảo vệ quyền và lợi ích hợp pháp cho bị hại, đương sự trong vụ án hình sự",
        to: "/dich-vu/hinh-su/detail/bao-ve-nguoi-bi-hai-duong-su",
      },
      {
        name: "Bảo vệ quyền và lợi ích hợp pháp cho người bị tố giác, người bị kiến nghị tố giác và người có đơn tố giác tội phạm",
        key: "bao-chua-nguoi-to-gia",
        to: "/dich-vu/hinh-su/detail/bao-ve-quyen-loi-nguoi-bi-to-giac-va-nguoi-to-giac-toi-pham",
      },
    ],
    img: introduce1,
  },
  {
    id: "dau-tu-nuoc-ngoai",
    name: "Tư vấn đầu tư nước ngoài (FDI)",
    description: [
      "Dịch vụ tư vấn đầu tư nước ngoài (FDI) tại Việt Nam của Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp giải pháp pháp lý toàn diện dành cho nhà đầu tư nước ngoài muốn thành lập doanh nghiệp, thực hiện dự án đầu tư và mở rộng hoạt động kinh doanh tại Việt Nam.",
      "Với đội ngũ luật sư và chuyên viên giàu kinh nghiệm trong lĩnh vực đầu tư nước ngoài, doanh nghiệp và pháp luật thương mại, PGU hỗ trợ nhà đầu tư từ giai đoạn tư vấn trước đầu tư, lựa chọn hình thức đầu tư, thành lập công ty có vốn nước ngoài, xin cấp Giấy chứng nhận đăng ký đầu tư (IRC), Giấy chứng nhận đăng ký doanh nghiệp (ERC) đến điều chỉnh dự án đầu tư, thực hiện các thủ tục pháp lý trong quá trình hoạt động và chấm dứt dự án.",
      "Chúng tôi cam kết mang đến dịch vụ tư vấn đầu tư nước ngoài tại Việt Nam nhanh chóng, đúng quy định pháp luật và tối ưu chi phí, giúp nhà đầu tư hạn chế rủi ro pháp lý và triển khai dự án hiệu quả, bền vững.",
      "Các dịch vụ về đầu tư nước ngoài mà chúng tôi cung cấp:",
      "Nếu Quý nhà đầu tư có nhu cầu hỗ trợ pháp lý, Công ty Luật TNHH Phúc Gia Uy & Cộng sự luôn sẵn sàng đồng hành, cung cấp giải pháp phù hợp và bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng với chi phí hợp lý.",
    ],
    img: introduce1,
  },
  {
    id: "doanh-nghiep",
    name: "Doanh nghiệp",
    description: [
      "Trong bối cảnh môi trường kinh doanh ngày càng cạnh tranh, việc tuân thủ các quy định pháp luật không chỉ là yêu cầu bắt buộc mà còn là nền tảng quan trọng giúp doanh nghiệp phát triển bền vững. Một hệ thống pháp lý rõ ràng và chặt chẽ sẽ giúp doanh nghiệp quản lý hiệu quả các nguồn lực như nhân sự, tài chính, tài sản, công nghệ và hoạt động kinh doanh, đồng thời hạn chế các rủi ro pháp lý có thể phát sinh.",
      "Thấu hiểu những nhu cầu đó, Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn pháp luật doanh nghiệp chuyên nghiệp và toàn diện, hỗ trợ doanh nghiệp từ giai đoạn thành lập đến quá trình vận hành và phát triển. Với đội ngũ luật sư và chuyên viên pháp lý giàu kinh nghiệm, Phúc Gia Uy luôn đưa ra các giải pháp pháp lý phù hợp, giúp doanh nghiệp tuân thủ đúng quy định pháp luật và yên tâm tập trung phát triển hoạt động kinh doanh.",
      "Với đội ngũ luật sư giàu kinh nghiệm và am hiểu pháp luật doanh nghiệp, Công ty Luật Phúc Gia Uy cam kết mang đến dịch vụ tư vấn pháp lý thường xuyên chuyên nghiệp, hiệu quả và luôn đặt lợi ích của khách hàng lên hàng đầu.",
    ],
    explains: [
      {
        name: "1. Các dịch vụ tư vấn pháp luật doanh nghiệp của Phúc Gia Uy",
        key: "cac-dich-vu-tu-van-phap-luat-doanh-nghiep-cua-phuc-gia-uy",
        description: [
          "- Tư vấn thành lập doanh nghiệp",
          "- Tư vấn thành lập chi nhánh, văn phòng đại diện, địa điểm kinh doanh",
          "- Tư vấn thay đổi đăng ký doanh nghiệp",
          "- Tư vấn chuyển đổi loại hình doanh nghiệp",
          "- Tư vấn xử lý các vấn đề phát sinh trong quá trình hoạt động",
          "- Tư vấn tạm ngừng kinh doanh",
          "- Tư vấn giải thể doanh nghiệp",
          "- Tư vấn pháp luật lao động",
          "- Tư vấn pháp luật kế toán, thuế",
          "- Tư vấn pháp luật về hợp đồng",
          "- Tư vấn pháp luật về sở hữu trí tuệ",
          "- Tư vấn giải quyết tranh chấp nội bộ doanh nghiệp",
        ],
      },
      {
        name: "2. Lợi ích khi chọn dịch vụ của luật Phúc Gia Uy",
        key: "loi-ich-khi-chon-dich-vu-cua-luat-phuc-gia-uy",
        description: [
          "- Công ty Luật Phúc Gia Uy không chỉ cung cấp dịch vụ pháp lý thông thường mà còn là đối tác pháp lý đồng hành cùng doanh nghiệp trong suốt quá trình hoạt động và phát triển. Chúng tôi luôn thấu hiểu nhu cầu pháp lý riêng của từng doanh nghiệp để đưa ra các giải pháp phù hợp, hiệu quả và đúng quy định pháp luật.",
          "- Nền tảng pháp lý vững chắc: Phúc Gia Uy hỗ trợ doanh nghiệp từ giai đoạn thành lập đến quá trình vận hành, đảm bảo mọi hoạt động kinh doanh được thực hiện đúng quy định pháp luật.",
          "- Hạn chế rủi ro pháp lý: Với đội ngũ luật sư và chuyên viên giàu kinh nghiệm, chúng tôi giúp doanh nghiệp nhận diện và phòng ngừa các rủi ro pháp lý liên quan đến hợp đồng, lao động, thuế và hoạt động kinh doanh.",
          "- Đồng hành phát triển: Phúc Gia Uy cam kết mang đến giải pháp pháp lý kịp thời và hiệu quả, giúp doanh nghiệp yên tâm tập trung phát triển và mở rộng hoạt động kinh doanh một cách bền vững.",
          "Với sự tận tâm và chuyên nghiệp, Công ty Luật Phúc Gia Uy luôn nỗ lực mang đến dịch vụ thành lập doanh nghiệp hiệu quả, giúp khách hàng nhanh chóng bắt đầu hoạt động kinh doanh với nền tảng pháp lý vững chắc.",
        ],
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
        to: "/dich-vu/giay-phep/detail/giay-phep-moi-truong",
      },
      {
        name: "Giấy phép hóa chất",
        key: "giay-phep-hoa-chat",
        to: "/dich-vu/giay-phep/detail/giay-phep-hoa-chat",
      },
      {
        name: "Phòng cháy chữa cháy",
        key: "giay-phep-phong-chay-chua-chay",
        to: "/dich-vu/giay-phep/detail/giay-phep-pccc",
      },
      {
        name: "Hoàn công nhà xưởng",
        key: "hoan-cong-nha-xuong",
        to: "/dich-vu/giay-phep/detail/hoan-cong-nha-xuong",
      },
      {
        name: "Giấy phép lao động",
        key: "giay-phep-lao-dong",
        to: "/dich-vu/giay-phep/detail/giay-phep-lao-dong",
      },
      {
        name: "Giấy phép an ninh trật tự",
        key: "giay-phep-an-ninh-trat-tu",
        to: "/dich-vu/giay-phep/detail/giay-an-ninh-trat-tu",
      },
      {
        name: "Visa - Thẻ tạm trú",
        key: "visa-the-tam-tru",
        to: "/dich-vu/giay-phep/detail/visa-the-tam-tru",
      },
      {
        name: "Hộ kinh doanh",
        key: "ho-kinh-doanh",
        to: "/dich-vu/giay-phep/detail/ho-kinh-doanh",
      },
      {
        name: "Giấy phép kinh doanh rượu",
        key: "giay-phep-kinh-doanh-ruou",
        to: "/dich-vu/giay-phep/detail/giay-phep-kinh-doanh-ruou",
      },
      {
        name: "Nhập khẩu thiết bị, vật tư y tế",
        key: "giay-phep-y-te",
        to: "/dich-vu/giay-phep/detail/nhap-khau-thiet-bi-vat-tu-y-te",
      },
    ],
    img: introduce1,
  },
  {
    id: "tu-van-thuong-xuyen",
    name: "Tư vấn thường xuyên",
    description: [
      "Hoạt động kinh doanh của các doanh nghiệp luôn phụ thuộc và bị điều chỉnh bởi các quy định pháp luật có liên quan. Để có thể hoạt động hiệu quả, doanh nghiệp cần kiểm soát tốt các rủi ro pháp lý phát sinh trong quá trình hoạt động của mình. Các doanh nghiệp lớn sẽ lựa chọn việc xây dựng một đội ngũ pháp chế với những luật sư giỏi để có thể hỗ trợ doanh nghiệp thực hiện xin giấy phép, tư vấn pháp lý và giải quyết các tranh chấp về lao động trong quá trình vận hành của mình.",
      "Tuy nhiên, không phải doanh nghiệp nào cũng tiềm lực tài chính để xây dựng bộ phận pháp chế cho công ty mình. Đối với những doanh nghiệp không có đội ngũ pháp chế riêng thì việc sử dụng dịch vụ tư vấn thường xuyên của các đơn vị pháp lý độc lập là sự lựa chọn thông minh",
    ],
    services: [
      {
        name: "1.1. Tư vấn thường xuyên là gì?",
        key: "tu-van-thuong-xuyen-la-gi",
        description: [
          "Tư vấn pháp lý thường xuyên là dịch vụ pháp lý đặc biệt và phù hợp với các doanh nghiệp thường xuyên có nhu cầu được tư vấn pháp lý nhưng không có bộ phận pháp lý nội bộ và lo ngại về mức chi phí quá cao và khó kiểm soát khi thuê luật sư theo từng vụ việc.",
          "Tư vấn thường xuyên sẽ bao gồm tư vấn trong hầu hết mọi vấn đề pháp lý thường nhật của doanh nghiệp, từ vấn đề lao động đến các giao dịch thương mại, cho đến tài sản sở hữu trí tuệ và vấn đề quản trị doanh nghiệp.",
          "Tất cả sẽ được thực hiện với mức phí cố định hàng tháng.",
        ],
      },
      {
        name: "1.2. Phạm vi dịch vụ",
        key: "pham-vi-dich-vu",
        description: [
          "- Giải đáp, tư vấn về các quy định, chính sách của pháp luật và đưa ra các giải pháp pháp lý, giải pháp thực tiễn cho các vụ việc cụ thể",
          "- Soạn thảo các văn bản, tài liệu giao dịch liên quan tới hoạt động kinh doanh",
          "- Xem xét, rà soát và xác nhận tính hợp pháp của các văn bản, tài liệu giao dịch",
          "- Hỗ trợ chuẩn bị các tài liệu phục vụ thương thảo, đàm phán hợp đồng",
          "- Tư vấn các vấn đề pháp lý liên quan đến các cuộc thảo luận, thương lượng, đàm phán kinh doanh.",
          "- Tư vấn hướng giải quyết chung liên quan đến các vụ khiếu nại, khiếu kiện hay tranh chấp cụ thể. Phạm vi tư vấn không bao gồm việc đại diện thực hiện các công việc cụ thể hoặc đại diện tham gia giải quyết tranh chấp hoặc khiếu nại tại cơ quan nhà nước có thẩm quyền, tòa án hoặc trọng tài.",
          "- Hỗ trợ, tư vấn xây dựng, soạn thảo Điều lệ, Nội quy lao động và các quy chế về tổ chức quản lý, điều hành của bộ máy doanh nghiệp và các văn bản quan trọng khác.",
        ],
      },
      {
        name: "1.3. Lợi ích khi sử dụng dịch vụ",
        key: "loi-ich-khi-su-dung-dich-vu",
        description: [
          "- Hỗ trợ pháp lý kịp thời và liên tục: Doanh nghiệp được đội ngũ luật sư và chuyên viên pháp lý tư vấn thường xuyên trong quá trình hoạt động, giúp giải đáp nhanh chóng các vấn đề pháp lý phát sinh.",
          "- Phòng ngừa và hạn chế rủi ro pháp lý: Luật Phúc Gia Uy giúp doanh nghiệp rà soát, đánh giá và dự báo các rủi ro pháp lý có thể phát sinh trong hoạt động kinh doanh, từ đó đưa ra giải pháp phòng ngừa hiệu quả.",
          "- Tư vấn soạn thảo và rà soát hợp đồng: Doanh nghiệp được hỗ trợ soạn thảo, chỉnh sửa và rà soát các loại hợp đồng, văn bản pháp lý nhằm đảm bảo tính chặt chẽ và hạn chế tranh chấp.",
          "- Tiết kiệm chi phí pháp lý: Thay vì phải tuyển dụng bộ phận pháp chế nội bộ với chi phí lớn, doanh nghiệp có thể sử dụng dịch vụ tư vấn pháp lý thường xuyên với chi phí hợp lý nhưng vẫn được hỗ trợ bởi đội ngũ luật sư chuyên môn.",
          "- Đồng hành trong quá trình phát triển doanh nghiệp: Luật Phúc Gia Uy không chỉ hỗ trợ xử lý các vấn đề pháp lý hiện tại mà còn tư vấn chiến lược pháp lý dài hạn, giúp doanh nghiệp phát triển bền vững và tuân thủ đúng quy định pháp luật.",
        ],
      },
    ],
    img: introduce1,
  },
  {
    name: "Thành lập mới",
    id: "thanh-lap-moi",
    description: [
      "Trong quá trình phát triển kinh doanh, việc thành lập doanh nghiệp mới hoặc mở rộng hệ thống thông qua các đơn vị phụ thuộc là nhu cầu phổ biến của nhiều cá nhân và tổ chức. Tuy nhiên, các thủ tục pháp lý liên quan đến đăng ký kinh doanh, thành lập chi nhánh, văn phòng đại diện hay địa điểm kinh doanh thường khá phức tạp và đòi hỏi phải tuân thủ đúng quy định của pháp luật.",
      "Nhằm hỗ trợ khách hàng giải quyết nhanh chóng các thủ tục pháp lý này, Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn và thực hiện thủ tục thành lập mới doanh nghiệp và các đơn vị phụ thuộc trọn gói. Với đội ngũ luật sư và chuyên viên pháp lý giàu kinh nghiệm, Phúc Gia Uy cam kết mang đến giải pháp tối ưu, giúp khách hàng tiết kiệm thời gian, chi phí và đảm bảo tuân thủ đúng quy định pháp luật.",
    ],
    services: [
      {
        name: "Thành lập mới Doanh nghiệp",
        key: "thanh-lap-moi-doanh-nghiep",
        to: "/dich-vu/doanh-nghiep/thanh-lap/detail/thanh-lap-doanh-nghiep",
      },
      {
        name: "Thành lập mới Chi nhánh",
        key: "thanh-lap-moi-chi-nhanh",
        to: "/dich-vu/doanh-nghiep/thanh-lap/detail/thanh-lap-chi-nhanh",
      },
      {
        name: "Thành lập mới Văn phòng đại diện",
        key: "thanh-lap-moi-van-phong-dai-dien",
        to: "/dich-vu/doanh-nghiep/thanh-lap/detail/thanh-lap-van-phong-dai-dien",
      },
      {
        name: "Thành lập mới Địa điểm kinh doanh",
        key: "thanh-lap-moi-dia-diem-kinh-doanh",
        to: "/dich-vu/doanh-nghiep/thanh-lap/detail/dang-ky-dia-diem-kinh-doanh",
      },
    ],
    img: introduce1,
  },
  {
    name: "Thay đổi giấy chứng nhận đăng ký doanh nghiệp",
    id: "thay-doi-giay-chung-nhan-dang-ky-doanh-nghiep",
    description: [
      "Trong quá trình hoạt động, doanh nghiệp thường phải điều chỉnh thông tin trên Giấy chứng nhận đăng ký doanh nghiệp (hay thường gọi là Giấy phép kinh doanh) như: tên công ty, địa chỉ, ngành nghề, vốn điều lệ, người đại diện pháp luật hoặc loại hình doanh nghiệp. Việc thực hiện đúng thủ tục pháp lý là điều kiện cần thiết để đảm bảo hoạt động ổn định và tránh rủi ro pháp lý.",
      "Với kinh nghiệm thực tiễn tại thành phố Hồ Chí Minh và các khu vực lân cận, PGU cam kết hỗ trợ doanh nghiệp thực hiện các thủ tục điều chỉnh nhanh chóng, chính xác và đúng quy định, giúp tiết kiệm thời gian và chi phí cho khách hàng.",
      "Các loại dịch vụ làm thay đổi Giấy chứng nhận đăng ký doanh nghiệp gồm: ",
    ],
    services: [
      {
        name: "Cập nhật thông tin",
        key: "cap-nhat-thong-tin",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/cap-nhat-thong-tin-doanh-nghiep",
      },
      {
        name: "Đổi tên doanh nghiệp",
        key: "doi-ten-doanh-nghiep",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/doi-ten-doanh-nghiep",
      },
      {
        name: "Thay đổi địa chỉ",
        key: "thay-doi-dia-chi",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/thay-doi-dia-chi-doanh-nghiep",
      },
      {
        name: "Tăng vốn điều lệ",
        key: "tang-von-dieu-le",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/tang-von-dieu-le",
      },
      {
        name: "Giảm vốn điều lệ",
        key: "giam-von-dieu-le",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/giam-von-dieu-le",
      },
      {
        name: "Chuyển nhượng vốn",
        key: "chuyen-nhuong-von",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/chuyen-nhuong-von",
      },
      {
        name: "Thay đổi đại diện pháp luật",
        key: "thay-doi-dai-dien-phap-luat",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/thay-doi-dai-dien-phap-luat",
      },
      {
        name: "Thay đổi loại hình doanh nghiệp",
        key: "thay-doi-loai-hinh-doanh-nghiep",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/thay-doi-loai-hinh-doanh-nghiep",
      },
      {
        name: "Thay đổi ngành nghề kinh doanh",
        key: "thay-doi-nganh-nghe-kinh-doanh",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/thay-doi-nganh-nghe-kinh-doanh",
      },
    ],
    img: introduce1,
  },
  {
    name: "Chấm dứt kinh doanh",
    id: "cham-dut-kinh-doanh",
    description: [
      "Trong quá trình hoạt động, vì nhiều lý do như thay đổi chiến lược kinh doanh, tái cơ cấu hoặc khó khăn tài chính, doanh nghiệp và hộ kinh doanh có thể quyết định chấm dứt hoạt động kinh doanh. Việc này cần được thực hiện đúng quy định pháp luật nhằm đảm bảo hoàn tất các nghĩa vụ về thuế, tài chính và tránh các rủi ro pháp lý phát sinh.",
      "Thủ tục chấm dứt kinh doanh thường bao gồm các bước như thông báo với cơ quan đăng ký kinh doanh, hoàn thành nghĩa vụ thuế, thanh lý tài sản và xử lý các nghĩa vụ liên quan. Nếu thực hiện không đúng quy trình, doanh nghiệp có thể gặp khó khăn trong việc đóng mã số thuế hoặc bị xử phạt hành chính.",
      "Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn và hỗ trợ thủ tục chấm dứt kinh doanh nhanh chóng, đúng quy định, giúp doanh nghiệp hoàn tất các thủ tục pháp lý một cách thuận lợi và an toàn.",
    ],
    services: [
      {
        name: "Giải thể doanh nghiệp",
        key: "giai-the-doanh-nghiep",
        to: "/dich-vu/doanh-nghiep/giai-the-doanh-nghiep",
      },
      {
        name: "Tạm ngừng hoạt động doanh nghiệp",
        key: "tam-ngung-hoat-dong-doanh-nghiep",
        to: "/dich-vu/doanh-nghiep/tam-ngung-hoat-dong-doanh-nghiep",
      },
      {
        name: "Chấm dứt chi nhánh, văn phòng đại diện",
        key: "cham-dut-chi-nhanh-van-phong-dai-dien",
        to: "/dich-vu/doanh-nghiep/cham-dut-chi-nhanh-van-phong-dai-dien",
      },
    ],
    img: introduce1,
  },
  {
    id: "dau-tu-moi",
    name: "Đầu tư mới",
    description: [
      "Đầu tư mới tại Việt Nam là bước khởi đầu quan trọng đối với nhà đầu tư nước ngoài khi muốn thành lập doanh nghiệp và triển khai dự án kinh doanh. Quá trình này đòi hỏi phải tuân thủ nhiều quy định pháp lý liên quan đến ngành nghề đầu tư, điều kiện tiếp cận thị trường, địa điểm thực hiện dự án, vốn đầu tư và các thủ tục cấp phép.",
      "Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ tư vấn pháp lý toàn diện cho nhà đầu tư nước ngoài khi thực hiện dự án đầu tư mới tại Việt Nam. Chúng tôi hỗ trợ từ giai đoạn tư vấn tiền khả thi, lựa chọn mô hình đầu tư, xin cấp Giấy chứng nhận đăng ký đầu tư (IRC), thành lập doanh nghiệp có vốn đầu tư nước ngoài đến các thủ tục pháp lý cần thiết để dự án đi vào hoạt động.",
      "Với kinh nghiệm thực tiễn trong lĩnh vực đầu tư nước ngoài (FDI), PGU cam kết mang đến giải pháp pháp lý hiệu quả, thủ tục nhanh chóng, chi phí hợp lý, giúp nhà đầu tư triển khai dự án thuận lợi và tuân thủ đúng quy định pháp luật Việt Nam.",
    ],
    services: [
      {
        name: "Tư vấn pháp lý trước đầu tư",
        key: "tu-van-phap-ly-truoc-dau-tu",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/tu-van-phap-ly-truoc-dau-tu",
      },
      {
        name: "Thẩm tra pháp lý đất, nhà xưởng",
        key: "tham-tra-phap-ly-dat-nha-xuong",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/tham-tra-phap-ly-dat-nha-xuong",
      },
      {
        name: "Thành lập công ty có vốn đầu tư nước ngoài",
        key: "thanh-lap-cong-ty-co-von-dau-tu-nuoc-ngoai",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/thanh-lap-cong-ty-co-von-dau-tu-nuoc-ngoai",
      },
      {
        name: "Thành lập văn phòng đại diện công ty nước ngoài",
        key: "thanh-lap-van-phong-dai-dien-cong-ty-nuoc-ngoai",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/thanh-lap-van-phong-dai-dien-cong-ty-nuoc-ngoai",
      },
    ],
    img: introduce1,
  },
  {
    id: "thay-doi-giay-chung-nhan-dang-ky-dau-tu",
    name: "2. Thay đổi Giấy chứng nhận đăng ký đầu tư",
    description: [
      "Thay đổi Giấy chứng nhận đăng ký đầu tư (IRC) là thủ tục pháp lý cần thực hiện khi nhà đầu tư có sự điều chỉnh liên quan đến mục tiêu dự án, quy mô đầu tư, địa điểm thực hiện, vốn đầu tư, tiến độ góp vốn, nhà đầu tư hoặc các nội dung quan trọng khác của dự án. Việc thực hiện đúng và kịp thời thủ tục điều chỉnh giúp đảm bảo dự án hoạt động phù hợp với quy định pháp luật và nội dung đã được cơ quan nhà nước phê duyệt.",
      "Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ tư vấn và thực hiện thủ tục thay đổi Giấy chứng nhận đăng ký đầu tư cho nhà đầu tư nước ngoài tại Việt Nam. Chúng tôi hỗ trợ đánh giá điều kiện pháp lý, chuẩn bị hồ sơ, làm việc với cơ quan đăng ký đầu tư và theo dõi toàn bộ quá trình xử lý hồ sơ cho đến khi hoàn tất việc điều chỉnh.",
      "Với kinh nghiệm thực tiễn trong lĩnh vực đầu tư nước ngoài (FDI), PGU giúp nhà đầu tư thực hiện thủ tục nhanh chóng, đúng quy định và hạn chế rủi ro pháp lý, đảm bảo dự án được điều chỉnh và tiếp tục triển khai thuận lợi.",
    ],
    services: [
      {
        name: "Điều chỉnh mục tiêu - Quy mô dự án đầu tư",
        key: "dieu-chinh-muc-tieu-quy-mo-du-an-dau-tu",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/dieu-chinh-muc-tieu-quy-mo-du-an-dau-tu",
      },
      {
        name: "Thay đổi địa điểm thực hiện dự án đầu tư",
        key: "thay-doi-dia-diem-thuc-hien-du-an-dau-tu",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/thay-doi-dia-diem-thuc-hien-du-an-dau-tu",
      },
      {
        name: "Thay đổi tổng vốn đầu tư, vốn góp thực hiện dự án",
        key: "thay-doi-tong-von-dau-tu-von-gop-thuc-hien-du-an",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/thay-doi-tong-von-dau-tu-von-gop-thuc-hien-du-an",
      },
      {
        name: "Gia hạn tiến độ góp vốn - Tiến độ thực hiện dự án",
        key: "gia-han-tien-do-gop-von-tien-do-thuc-hien-du-an",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/gia-han-tien-do-gop-von-tien-do-thuc-hien-du-an",
      },
      {
        name: "Thay đổi nhà đầu tư thực hiện dự án",
        key: "thay-doi-nha-dau-tu-thuc-hien-du-an",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/thay-doi-nha-dau-tu-thuc-hien-du-an",
      },
      {
        name: "Cập nhật thông tin nhà đầu tư",
        key: "cap-nhat-thong-tin-nha-dau-tu",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/cap-nhat-thong-tin-nha-dau-tu",
      },
      {
        name: "Gia hạn thời gian thuê xưởng",
        key: "gia-han-thoi-gian-thue-xuong",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/gia-han-thoi-gian-thue-xuong",
      },
      {
        name: "Gia hạn thời gian hoạt động dự án",
        key: "gia-han-thoi-gian-hoat-dong-du-an",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/gia-han-thoi-gian-hoat-dong-du-an",
      },
    ],
    img: introduce1,
  },
  {
    id: "bao-cao-du-an",
    name: "Báo cáo dự án đầu tư",
    description: [
      "Báo cáo dự án đầu tư là nghĩa vụ pháp lý bắt buộc của nhà đầu tư trong quá trình thực hiện dự án tại Việt Nam. Theo quy định, doanh nghiệp có vốn đầu tư nước ngoài phải thực hiện báo cáo định kỳ về tình hình triển khai dự án, vốn đầu tư, lao động, doanh thu và các thông tin liên quan thông qua hệ thống báo cáo đầu tư hoặc gửi đến cơ quan quản lý nhà nước có thẩm quyền.",
      "Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ tư vấn và thực hiện báo cáo dự án đầu tư cho doanh nghiệp có vốn đầu tư nước ngoài, bao gồm: rà soát nghĩa vụ báo cáo, chuẩn bị nội dung báo cáo, thực hiện báo cáo trên hệ thống và hỗ trợ xử lý các vấn đề phát sinh với cơ quan quản lý.",
      "Với kinh nghiệm trong lĩnh vực đầu tư nước ngoài (FDI), PGU giúp doanh nghiệp thực hiện nghĩa vụ báo cáo đúng thời hạn, đúng quy định, hạn chế rủi ro vi phạm hành chính và đảm bảo quá trình hoạt động của dự án diễn ra ổn định.",
    ],
    services: [
      {
        name: "Đăng ký khoản vay nước ngoài",
        key: "dang-ky-khoan-vay-nuoc-ngoai",
        to: "/dich-vu/dau-tu/bao-cao/detail/dang-ky-khoan-vay-nuoc-ngoai",
      },
      {
        name: "Đăng ký thay đổi khoản vay nước ngoài",
        key: "dang-ky-thay-doi-khoan-vay-nuoc-ngoai",
        to: "/dich-vu/dau-tu/bao-cao/detail/dang-ky-thay-doi-khoan-vay-nuoc-ngoai",
      },
      {
        name: "Báo cáo khoản vay nước ngoài",
        key: "bao-cao-khoan-vay-nuoc-ngoai",
        to: "/dich-vu/dau-tu/bao-cao/detail/bao-cao-khoan-vay-nuoc-ngoai",
      },
      {
        name: "Chấm dứt dự án đầu tư",
        key: "cham-dut-du-an-dau-tu",
        to: "/dich-vu/dau-tu/bao-cao/detail/cham-dut-du-an-dau-tu",
      },
      {
        name: "Giải thể công ty có vốn đầu tư nước ngoài",
        key: "giai-the-cong-ty-co-von-dau-tu-nuoc-ngoai",
        to: "/dich-vu/dau-tu/bao-cao/detail/giai-the-cong-ty-fdi",
      },
    ],
    img: introduce1,
  },
];
