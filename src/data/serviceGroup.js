import introduce1 from "../assets/images/introduce_1.png";
import dansu from "../assets/images/dan-su.png";
import hinhsu from "../assets/images/hinh-su.png";
import dautunuocngoai from "../assets/images/dau-tu-nuoc-ngoai.png";
import doanhnghiep from "../assets/images/doanh-nghiep.png";
import giayphep from "../assets/images/giay-phep.png";

export const SERVICE_GROUP = [
  {
    id: "dan-su",
    name: "civilname",

    description: [
      "civildescription1",
      "civildescription2",
      "civildescription3",
      "civildescription4",
    ],

    services: [
      {
        key: "tranh-chap-dat-dai",
        name: "civilservice_land",
        to: "/dich-vu/dan-su/detail/tranh-chap-dat-dai",
      },
      {
        key: "tranh-chap-thua-ke",
        name: "civilservice_inheritance",
        to: "/dich-vu/dan-su/detail/tranh-chap-thua-ke",
      },
      {
        key: "tranh-chap-ly-hon",
        name: "civilservice_divorce",
        to: "/dich-vu/dan-su/detail/tranh-chap-ly-hon",
      },
      {
        key: "tranh-chap-lao-dong",
        name: "civilservice_labor",
        to: "/dich-vu/dan-su/detail/tranh-chap-lao-dong",
      },
      {
        key: "tranh-chap-thuong-mai",
        name: "civilservice_trade",
        to: "/dich-vu/dan-su/detail/tranh-chap-thuong-mai",
      },
      {
        key: "tranh-chap-hop-dong",
        name: "civilservice_contract",
        to: "/dich-vu/dan-su/detail/tranh-chap-hop-dong",
      },
      {
        key: "tranh-chap-so-huu-tri-tue",
        name: "civilservice_ip",
        to: "/dich-vu/dan-su/detail/tranh-chap-so-huu-tri-tue",
      },
    ],
    img: dansu,
  },
  {
    id: "hinh-su",
    name: "criminalname",

    description: [
      "criminaldescription1",
      "criminaldescription2",
      "criminaldescription3",
    ],

    services: [
      {
        key: "bao-chua-nguoi-bi-buoc-toi",
        name: "criminalservice_defense",
        to: "/dich-vu/hinh-su/detail/bao-chua-nguoi-bi-buoc-toi",
      },
      {
        key: "bao-chua-bi-hai",
        name: "criminalservice_victim",
        to: "/dich-vu/hinh-su/detail/bao-ve-nguoi-bi-hai-duong-su",
      },
      {
        key: "bao-chua-nguoi-to-gia",
        name: "criminalservice_denunciation",
        to: "/dich-vu/hinh-su/detail/bao-ve-quyen-loi-nguoi-bi-to-giac-va-nguoi-to-giac-toi-pham",
      },
    ],
    img: hinhsu,
  },
  {
    id: "dau-tu-nuoc-ngoai",
    name: "fdiname",

    description: [
      "fdidescription1",
      "fdidescription2",
      "fdidescription3",
      "fdidescription4",
      "fdidescription5",
    ],
    explains: [
      {
        name: "fdiexplain_newinvestment",
        description: [
          "fdinewinvestment1",
          "fdinewinvestment2",
          "fdinewinvestment3",
          "fdinewinvestment4",
        ],
      },
      {
        name: "fdiexplain_amendirc",
        description: [
          "fdiamendirc1",
          "fdiamendirc2",
          "fdiamendirc3",
          "fdiamendirc4",
          "fdiamendirc5",
          "fdiamendirc6",
          "fdiamendirc7",
          "fdiamendirc8",
        ],
      },
      {
        name: "fdiexplain_projectreport",
        description: [
          "fdiprojectreport_loan",
          "fdiprojectloan1",
          "fdiprojectloan2",
          "fdiprojectloan3",
          "fdiprojectreport_terminate",
          "fdiprojectterminate1",
          "fdiprojectterminate2",
        ],
      },
    ],
    img: dautunuocngoai,
  },
  {
    id: "doanh-nghiep",
    name: "businessnamesection",

    description: [
      "businessdescription1",
      "businessdescription2",
      "businessdescription3",
    ],
    explains: [
      {
        name: "businessserviceheading",
        description: [
          "businessservice1",
          "businessservice2",
          "businessservice3",
          "businessservice4",
          "businessservice5",
          "businessservice6",
          "businessservice7",
          "businessservice8",
          "businessservice9",
          "businessservice10",
          "businessservice11",
          "businessservice12",
        ],
      },
      {
        name: "businessbenefitheading",
        description: [
          "businessbenefit1",
          "businessbenefit2",
          "businessbenefit3",
          "businessbenefit4",
          "businessbenefit5",
        ],
      },
    ],
    img: doanhnghiep,
  },
  {
    id: "giay-phep",
    name: "licensesnamesection",

    description: [
      "licensesdescription1",
      "licensesdescription2",
      "licensesdescription3",
      "licensesdescription4",
    ],
    services: [
      {
        name: "licensesservice1",
        key: "giay-phep-moi-truong",
        to: "/dich-vu/giay-phep/detail/giay-phep-moi-truong",
      },
      {
        name: "licensesservice2",
        key: "giay-phep-hoa-chat",
        to: "/dich-vu/giay-phep/detail/giay-phep-hoa-chat",
      },
      {
        name: "licensesservice3",
        key: "giay-phep-phong-chay-chua-chay",
        to: "/dich-vu/giay-phep/detail/giay-phep-pccc",
      },
      {
        name: "licensesservice4",
        key: "hoan-cong-nha-xuong",
        to: "/dich-vu/giay-phep/detail/hoan-cong-nha-xuong",
      },
      {
        name: "licensesservice5",
        key: "giay-phep-lao-dong",
        to: "/dich-vu/giay-phep/detail/giay-phep-lao-dong",
      },
      {
        name: "licensesservice6",
        key: "giay-phep-an-ninh-trat-tu",
        to: "/dich-vu/giay-phep/detail/giay-an-ninh-trat-tu",
      },
      {
        name: "licensesservice7",
        key: "visa-the-tam-tru",
        to: "/dich-vu/giay-phep/detail/visa-the-tam-tru",
      },
      {
        name: "licensesservice8",
        key: "ho-kinh-doanh",
        to: "/dich-vu/giay-phep/detail/ho-kinh-doanh",
      },
      {
        name: "licensesservice9",
        key: "giay-phep-kinh-doanh-ruou",
        to: "/dich-vu/giay-phep/detail/giay-phep-kinh-doanh-ruou",
      },
      {
        name: "licensesservice10",
        key: "giay-phep-y-te",
        to: "/dich-vu/giay-phep/detail/nhap-khau-thiet-bi-vat-tu-y-te",
      },
    ],
    img: giayphep,
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
    id: "thanh-lap-moi",
    name: "businessestablishmentnamesection",

    description: [
      "businessestablishmentdescription1",
      "businessestablishmentdescription2",
    ],
    services: [
      {
        name: "businessestablishmentservice1",
        key: "thanh-lap-moi-doanh-nghiep",
        to: "/dich-vu/doanh-nghiep/thanh-lap/detail/thanh-lap-doanh-nghiep",
      },
      {
        name: "businessestablishmentservice2",
        key: "thanh-lap-moi-chi-nhanh",
        to: "/dich-vu/doanh-nghiep/thanh-lap/detail/thanh-lap-chi-nhanh",
      },
      {
        name: "businessestablishmentservice3",
        key: "thanh-lap-moi-van-phong-dai-dien",
        to: "/dich-vu/doanh-nghiep/thanh-lap/detail/thanh-lap-van-phong-dai-dien",
      },
      {
        name: "businessestablishmentservice4",
        key: "thanh-lap-moi-dia-diem-kinh-doanh",
        to: "/dich-vu/doanh-nghiep/thanh-lap/detail/dang-ky-dia-diem-kinh-doanh",
      },
    ],
    img: introduce1,
  },
  {
    id: "thay-doi-giay-chung-nhan-dang-ky-doanh-nghiep",
    name: "businessercamendmentnamesection",

    description: [
      "businessercamendmentdescription1",
      "businessercamendmentdescription2",
    ],
    services: [
      {
        name: "businessercamendmentservice1",
        key: "cap-nhat-thong-tin",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/cap-nhat-thong-tin-doanh-nghiep",
      },
      {
        name: "businessercamendmentservice2",
        key: "doi-ten-doanh-nghiep",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/doi-ten-doanh-nghiep",
      },
      {
        name: "businessercamendmentservice3",
        key: "thay-doi-dia-chi",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/thay-doi-dia-chi-doanh-nghiep",
      },
      {
        name: "businessercamendmentservice4",
        key: "tang-von-dieu-le",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/tang-von-dieu-le",
      },
      {
        name: "businessercamendmentservice5",
        key: "giam-von-dieu-le",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/giam-von-dieu-le",
      },
      {
        name: "businessercamendmentservice6",
        key: "chuyen-nhuong-von",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/chuyen-nhuong-von",
      },
      {
        name: "businessercamendmentservice7",
        key: "thay-doi-dai-dien-phap-luat",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/thay-doi-dai-dien-phap-luat",
      },
      {
        name: "businessercamendmentservice8",
        key: "thay-doi-loai-hinh-doanh-nghiep",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/thay-doi-loai-hinh-doanh-nghiep",
      },
      {
        name: "businessercamendmentservice9",
        key: "thay-doi-nganh-nghe-kinh-doanh",
        to: "/dich-vu/doanh-nghiep/thay-doi-dang-ky/detail/thay-doi-nganh-nghe-kinh-doanh",
      },
    ],
    img: introduce1,
  },
  {
    id: "cham-dut-kinh-doanh",
    name: "businessterminationnamesection",

    description: [
      "businessterminationdescription1",
      "businessterminationdescription2",
      "businessterminationdescription3",
    ],
    services: [
      {
        name: "businessterminationservice1",
        key: "giai-the-doanh-nghiep",
        to: "/dich-vu/doanh-nghiep/giai-the-doanh-nghiep",
      },
      {
        name: "businessterminationservice2",
        key: "tam-ngung-hoat-dong-doanh-nghiep",
        to: "/dich-vu/doanh-nghiep/tam-ngung-hoat-dong-doanh-nghiep",
      },
      {
        name: "businessterminationservice3",
        key: "cham-dut-chi-nhanh-van-phong-dai-dien",
        to: "/dich-vu/doanh-nghiep/cham-dut-chi-nhanh-van-phong-dai-dien",
      },
    ],
    img: introduce1,
  },
  {
    id: "dau-tu-moi",
    name: "fdinewinvestmentname",

    description: [
      "fdinewinvestmentdescription1",
      "fdinewinvestmentdescription2",
      "fdinewinvestmentdescription3",
    ],
    services: [
      {
        name: "fdinewinvestmentservice1",
        key: "tu-van-phap-ly-truoc-dau-tu",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/tu-van-phap-ly-truoc-dau-tu",
      },
      {
        name: "fdinewinvestmentservice2",
        key: "tham-tra-phap-ly-dat-nha-xuong",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/tham-tra-phap-ly-dat-nha-xuong",
      },
      {
        name: "fdinewinvestmentservice3",
        key: "thanh-lap-cong-ty-co-von-dau-tu-nuoc-ngoai",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/thanh-lap-cong-ty-co-von-dau-tu-nuoc-ngoai",
      },
      {
        name: "fdinewinvestmentservice4",
        key: "thanh-lap-van-phong-dai-dien-cong-ty-nuoc-ngoai",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/thanh-lap-van-phong-dai-dien-cong-ty-nuoc-ngoai",
      },
    ],
    img: introduce1,
  },
  {
    id: "thay-doi-giay-chung-nhan-dang-ky-dau-tu",
    name: "fdiamendircnamesection",

    description: [
      "fdiamendircdescription1",
      "fdiamendircdescription2",
      "fdiamendircdescription3",
    ],
    services: [
      {
        name: "fdiamendircservice1",
        key: "dieu-chinh-muc-tieu-quy-mo-du-an-dau-tu",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/dieu-chinh-muc-tieu-quy-mo-du-an-dau-tu",
      },
      {
        name: "fdiamendircservice2",
        key: "thay-doi-dia-diem-thuc-hien-du-an-dau-tu",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/thay-doi-dia-diem-thuc-hien-du-an-dau-tu",
      },
      {
        name: "fdiamendircservice3",
        key: "thay-doi-tong-von-dau-tu-von-gop-thuc-hien-du-an",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/thay-doi-tong-von-dau-tu-von-gop-thuc-hien-du-an",
      },
      {
        name: "fdiamendircservice4",
        key: "gia-han-tien-do-gop-von-tien-do-thuc-hien-du-an",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/gia-han-tien-do-gop-von-tien-do-thuc-hien-du-an",
      },
      {
        name: "fdiamendircservice5",
        key: "thay-doi-nha-dau-tu-thuc-hien-du-an",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/thay-doi-nha-dau-tu-thuc-hien-du-an",
      },
      {
        name: "fdiamendircservice6",
        key: "cap-nhat-thong-tin-nha-dau-tu",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/cap-nhat-thong-tin-nha-dau-tu",
      },
      {
        name: "fdiamendircservice7",
        key: "gia-han-thoi-gian-thue-xuong",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/gia-han-thoi-gian-thue-xuong",
      },
      {
        name: "fdiamendircservice8",
        key: "gia-han-thoi-gian-hoat-dong-du-an",
        to: "/dich-vu/dau-tu/dau-tu-moi/detail/gia-han-thoi-gian-hoat-dong-du-an",
      },
    ],
    img: introduce1,
  },
  {
    id: "bao-cao-du-an",
    name: "fdiprojectreportnamesection",

    description: [
      "fdiprojectreportdescription1",
      "fdiprojectreportdescription2",
      "fdiprojectreportdescription3",
    ],
    services: [
      {
        name: "fdiprojectreportservice1",
        key: "dang-ky-khoan-vay-nuoc-ngoai",
        to: "/dich-vu/dau-tu/bao-cao/detail/dang-ky-khoan-vay-nuoc-ngoai",
      },
      {
        name: "fdiprojectreportservice2",
        key: "dang-ky-thay-doi-khoan-vay-nuoc-ngoai",
        to: "/dich-vu/dau-tu/bao-cao/detail/dang-ky-thay-doi-khoan-vay-nuoc-ngoai",
      },
      {
        name: "fdiprojectreportservice3",
        key: "bao-cao-khoan-vay-nuoc-ngoai",
        to: "/dich-vu/dau-tu/bao-cao/detail/bao-cao-khoan-vay-nuoc-ngoai",
      },
      {
        name: "fdiprojectreportservice4",
        key: "cham-dut-du-an-dau-tu",
        to: "/dich-vu/dau-tu/bao-cao/detail/cham-dut-du-an-dau-tu",
      },
      {
        name: "fdiprojectreportservice5",
        key: "giai-the-cong-ty-co-von-dau-tu-nuoc-ngoai",
        to: "/dich-vu/dau-tu/bao-cao/detail/giai-the-cong-ty-fdi",
      },
    ],
    img: introduce1,
  },
];
