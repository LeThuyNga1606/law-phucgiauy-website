import { Descriptions } from "antd";
import { exp } from "firebase/firestore/pipelines";
import introduce1 from "../assets/images/introduce_1.png";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";

// Import tất cả hình ảnh trong assets/images
import anh_ninh_trat_tu from "../assets/images/anh-ninh-trat-tu.png";
import bao_cao_khoan_vay_nuoc_ngoai from "../assets/images/bao-cao-khoan-vay-nuoc-ngoai.png";
import cap_nhat_thong_tin from "../assets/images/cap-nhat-thong-tin.png";
import cap_nhat_thong_tin_ndt from "../assets/images/cap-nhat-thong-tin-ndt.png";
import cham_dut_du_an_dau_tu from "../assets/images/cham-dut-du-an-dau-tu.png";
import cham_dut_van_phong from "../assets/images/cham-dut-van-phong.png";
import chuyen_nhuong_von from "../assets/images/chuyen-nhuong-von.png";
import dang_ki_dia_diem_kinh_doanh from "../assets/images/dang-ki-dia-diem-kinh-doanh.png";
import dang_ky_khoan_vay_nuoc_ngoai from "../assets/images/dang-ky-khoan-vay-nuoc-ngoai.png";
import dang_ky_thay_doi_khoan_vay from "../assets/images/dang-ky-thay-doi-khoan-vay.png";
import doi_ten_doanh_nghiep from "../assets/images/doi-ten-doanh-nghiep.png";
import giam_von_dieu_le from "../assets/images/giam-von-dieu-le.png";
import gia_han_tien_do_gop_von from "../assets/images/gia-han-tien-do-gop-von.png";
import giai_the_cong_ty from "../assets/images/giai-the-cong-ty.png";
import giai_the_doanh_nghiep from "../assets/images/giai-the-doanh-nghiep.png";
import gian_han_thoi_gian_thue_xuong from "../assets/images/gian-han-thoi-gian-thue-xuong.png";
import giay_phep_moi_truong from "../assets/images/giay-phep-moi-truong.png";
import ho_kinh_doanh from "../assets/images/ho-kinh-doanh.png";
import hoa_chat from "../assets/images/hoa-chat.png";
import hoan_cong_nha_xuong from "../assets/images/hoan-cong-nha-xuong.png";
import kinh_doanh_ruou from "../assets/images/kinh-doanh-ruou.png";
import lao_dong from "../assets/images/lao-dong.png";
import nguoi_bi_buoc_toi from "../assets/images/nguoi_bi_buoc_toi.png";
import nguoi_bi_hai from "../assets/images/nguoi_bi_hai.png";
import nguoi_bi_to_giac from "../assets/images/nguoi_bi_to_giac.png";
import pccc from "../assets/images/pccc.png";
import phap_ly_dat_nha_xuong from "../assets/images/phap_ly_dat_nha_xuong.png";
import quy_mo_du_an from "../assets/images/quy-mo-du-an.png";
import tam_ngung_hoat_dong from "../assets/images/tam-ngung-hoat-dong.png";
import tang_von_dieu_le from "../assets/images/tang-von-dieu-le.png";
import thanh_lap_chi_nhanh from "../assets/images/thanh-lap-chi-nhanh.png";
import thanh_lap_cong_ty_von_nuoc_ngoai from "../assets/images/thanh_lap_cong_ty_von_nuoc_ngoai.png";
import thanh_lap_doanh_nghiep from "../assets/images/thanh-lap-doanh-nghiep.png";
import thanh_lap_van_phong_dai_dien from "../assets/images/thanh-lap-van-phong-dai-dien.png";
import thanh_lap_van_phong_dai_dien_nuoc_ngoai from "../assets/images/thanh-lap-van-phong-dai-dien-nuoc-ngoai.png";
import thay_doi_dai_dien_theo_pl from "../assets/images/thay-doi-dai-dien-theo-pl.png";
import thay_doi_dia_chi from "../assets/images/thay-doi-dia-chi.png";
import thay_doi_dia_diem_thuc_hien_du_an from "../assets/images/thay-doi-dia-diem-thuc-hien-du-an.png";
import thay_doi_loai_hinh_doanh_nghiep from "../assets/images/thay-doi-loai-hinh-doanh-nghiep.png";
import thay_doi_nganh_nghe from "../assets/images/thay-doi-nganh-nghe.png";
import thay_doi_nha_dau_tu from "../assets/images/thay-doi-nha-dau-tu.png";
import thay_doi_thoi_gian_thuc_hien_du_an from "../assets/images/thay-doi-thoi-gian-thuc-hien-du-an.png";
import thay_doi_von_dau_tu from "../assets/images/thay-doi-von-dau-tu.png";
import tranh_chap_dat_dai from "../assets/images/tranh_chap_dat_dai.png";
import tranh_chap_hop_dong from "../assets/images/tranh_chap_hop_dong.png";
import tranh_chap_lao_dong from "../assets/images/tranh_chap_lao_dong.png";
import tranh_chap_ly_hon from "../assets/images/tranh_chap_ly_hon.png";
import tranh_chap_so_huu_tri_tue from "../assets/images/tranh_chap_so_huu_tri_tue.png";
import tranh_chap_thua_ke from "../assets/images/tranh_chap_thua_ke.png";
import tranh_chap_thuong_mai from "../assets/images/tranh_chap_thuong_mai.png";
import tu_van_phap_ly_truoc_dau_tu from "../assets/images/tu_van_phap_ly_truoc_dau_tu.png";
import tu_van_thuong_xuyen from "../assets/images/tu-van-thuong-xuyen.png";
import vat_tu_y_te from "../assets/images/vat-tu-y-te.png";
import visa from "../assets/images/visa.png";
import _1 from "../assets/images/1.png";

// src/data/services.js
export const SERVICE_DATA = [
  {
    id: "tranh-chap-dat-dai",
    label: "Tranh chấp đất đai",
    tagline: "Dân sự",
    img: tranh_chap_dat_dai, // thay bằng ảnh phù hợp nếu có
    color: "#A8171C",
    descriptions: [
      "Tranh chấp đất đai là một trong những loại tranh chấp phức tạp và kéo dài, thường liên quan đến quyền sử dụng đất, quyền sở hữu nhà ở và tài sản gắn liền với đất, thừa kế, chuyển nhượng, tặng cho hoặc ranh giới thửa đất. Nếu không được xử lý kịp thời và đúng quy định, tranh chấp có thể gây thiệt hại lớn về tài chính, ảnh hưởng đến quyền lợi hợp pháp và làm phát sinh mâu thuẫn kéo dài giữa các bên.",
      "Với kinh nghiệm trong lĩnh vực tố tụng và tư vấn pháp lý, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ giải quyết tranh chấp đất đai toàn diện, hỗ trợ khách hàng bảo vệ quyền và lợi ích hợp pháp một cách hiệu quả, đúng quy định pháp luật.",
    ],
    explains: [
      {
        name: "1. Các dạng tranh chấp đất đai thường gặp",
        key: "cac-dang-tranh-chap-dat-dai-thuong-gap",
        description: [
          "Tranh chấp quyền sử dụng đất",
          "Tranh chấp ranh giới, mốc giới thửa đất",
          "Tranh chấp hợp đồng chuyển nhượng, tặng cho, đặt cọc mua bán đất",
          "Tranh chấp thừa kế liên quan đến quyền sử dụng đất",
          "Tranh chấp đòi lại đất, tài sản gắn liền với đất",
          "Tranh chấp giữa cá nhân với cơ quan nhà nước về quyết định hành chính trong lĩnh vực đất đai",
        ],
      },
      {
        name: "2. Phạm vi dịch vụ cung cấp",
        key: "pham-vi-dich-vu-cung-cap",
        description: [
          "Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp các dịch vụ pháp lý nhà đất chuyên nghiệp - uy tín - đáng tin cậy, hỗ trợ khách hàng thực hiện đầy đủ thủ tục theo đúng quy định pháp luật, tiết kiệm thời gian và hạn chế tối đa rủi ro phát sinh.",
          "Với đội ngũ luật sư và chuyên viên am hiểu sâu về lĩnh vực đất đai - xây dựng - nhà ở, chúng tôi trực tiếp tư vấn, soạn thảo hồ sơ và đại diện khách hàng làm việc với cơ quan nhà nước có thẩm quyền trong các thủ tục sau:",
        ],
        scopes: [
          {
            name: "2.1. Thủ tục về Giấy chứng nhận",
            items: [
              "- Cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản gắn liền với đất lần đầu",
              "- Cấp đổi, cấp lại Giấy chứng nhận do mất, hư hỏng, thay đổi thông tin",
              "- Đăng ký biến động, đính chính sai sót trên Giấy chứng nhận (bổ sung tài sản gắn liền với đất, thay đổi căn cước công dân/căn cước, thay đổi diện tích, thông tin chủ sử dụng…)",
              "- Đăng ký sang tên Giấy chứng nhận do chuyển nhượng, tặng cho, thừa kế, góp vốn, tách thửa, hợp thửa, đấu giá…",
            ],
          },
          {
            name: "2.2. Thủ tục về xây dựng và hoàn công",
            items: [
              "- Xin cấp Giấy phép xây dựng nhà ở, công trình",
              "- Điều chỉnh, gia hạn Giấy phép xây dựng",
              "- Thực hiện thủ tục hoàn công công trình, cập nhật tài sản trên đất vào Giấy chứng nhận",
            ],
          },
          {
            name: "2.3. Thủ tục liên quan đến mục đích và quyền sử dụng đất",
            items: [
              "- Chuyển mục đích sử dụng đất (đất nông nghiệp, đất lúa sang đất ở…)",
              "- Thực hiện các nghĩa vụ tài chính và thủ tục thuế liên quan",
              "- Tách thửa, hợp thửa theo quy định của UBND cấp tỉnh/thành phố",
              "- Xin giao đất, thuê đất, đấu giá quyền sử dụng đất",
            ],
          },
          {
            name: "2.4. Tư vấn và soạn thảo hợp đồng nhà đất",
            items: [
              "- Hợp đồng chuyển nhượng, tặng cho, thế chấp, mua bán nhà đất (kể cả trường hợp chưa có Giấy chứng nhận)",
              "- Hợp đồng đặt cọc, cho thuê, cho ở nhờ",
              "- Hợp đồng góp vốn bằng quyền sử dụng đất và tài sản gắn liền với đất",
              "- Thủ tục khai nhận di sản thừa kế liên quan đến nhà đất",
            ],
          },
          {
            name: "2.5. Giải quyết tranh chấp nhà đất",
            items: [
              "- Tư vấn phương án xử lý tranh chấp",
              "- Soạn thảo đơn từ, hồ sơ khiếu nại, khởi kiện",
              "- Đại diện tham gia hòa giải, tố tụng tại Tòa án để bảo vệ quyền và lợi ích hợp pháp của khách hàng",
            ],
          },
        ],
      },
    ],
    reasons: {
      title: "3. Lợi ích của việc có Luật sư khi giải quyết tranh chấp đất đai",
      items: [
        "Xác định rõ quyền sử dụng đất hợp pháp và đánh giá đúng tình trạng pháp lý của thửa đất đang tranh chấp",
        "Định hướng phương án giải quyết hiệu quả, lựa chọn giữa hòa giải, khiếu nại hành chính hoặc khởi kiện tại Tòa án",
        "Chuẩn bị hồ sơ, tài liệu và chứng cứ đầy đủ, giúp bảo vệ tốt nhất quyền lợi của khách hàng",
        "Đại diện làm việc với các cơ quan có thẩm quyền như UBND, cơ quan quản lý đất đai hoặc Tòa án",
        "Hạn chế rủi ro pháp lý và tiết kiệm thời gian, giúp quá trình giải quyết tranh chấp diễn ra thuận lợi và đúng quy định pháp luật",
      ],
    },
    lastPara: [
      "Với phương châm “Thấu hiểu - Trách nhiệm - Phụng sự”, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cam kết đồng hành cùng Quý khách hàng trong mọi thủ tục pháp lý nhà đất, đảm bảo đúng quy định - minh bạch - hiệu quả.",
      "Nếu Quý khách có nhu cầu tư vấn hoặc thực hiện thủ tục pháp lý về nhà đất, vui lòng liên hệ để được hỗ trợ nhanh chóng và chuyên nghiệp.",
    ],
  },
  {
    id: "tranh-chap-thua-ke",
    label: "Tranh chấp thừa kế",
    tagline: "Dân sự",
    img: tranh_chap_thua_ke, // thay bằng ảnh phù hợp nếu có
    color: "#A8171C",

    descriptions: [
      "Tranh chấp thừa kế thường phát sinh khi phân chia di sản không rõ ràng, di chúc không hợp lệ, có dấu hiệu bị ép buộc, giả mạo hoặc giữa các đồng thừa kế không đạt được sự thống nhất. Đặc biệt, tranh chấp liên quan đến nhà đất, tài sản có giá trị lớn hoặc tài sản chung của vợ chồng dễ kéo dài và gây ảnh hưởng nghiêm trọng đến quyền lợi của các bên.",
      "Với kinh nghiệm trong lĩnh vực dân sự và tố tụng, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ giải quyết tranh chấp thừa kế toàn diện, đảm bảo bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng theo đúng quy định pháp luật.",
    ],

    explains: [
      {
        name: "1. Các dạng tranh chấp thừa kế thường gặp",
        key: "cac-dang-tranh-chap-thua-ke",
        description: [
          "Tranh chấp chia di sản theo di chúc",
          "Tranh chấp chia di sản theo pháp luật (không có di chúc)",
          "Tranh chấp về hiệu lực của di chúc",
          "Tranh chấp xác định hàng thừa kế, phần thừa kế",
          "Tranh chấp quyền thừa kế đối với nhà đất, tài sản chung vợ chồng",
          "Yêu cầu hủy văn bản khai nhận di sản, phân chia di sản đã lập",
        ],
      },
      {
        name: "2. Phạm vi dịch vụ cung cấp",
        key: "pham-vi-dich-vu-thua-ke",
        description: [
          "Với đội ngũ luật sư giàu kinh nghiệm trong lĩnh vực dân sự và tranh tụng, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ tư vấn thừa kế chuyên nghiệp, tận tâm, hỗ trợ khách hàng xử lý toàn diện các vấn đề pháp lý liên quan đến di chúc, phân chia di sản và giải quyết tranh chấp thừa kế.",
        ],
        scopes: [
          {
            name: "2.1. Tư vấn liên quan đến di chúc",
            items: [
              "- Tư vấn lập, sửa đổi, bổ sung, thay thế hoặc hủy bỏ di chúc",
              "- Tư vấn về hình thức, điều kiện có hiệu lực của di chúc",
              "- Tư vấn về tài sản lập di chúc có tính đặc thù như bất động sản, doanh nghiệp, tài sản chung vợ chồng hoặc tài sản có yếu tố nước ngoài",
              "- Tư vấn về người thừa kế không phụ thuộc vào nội dung di chúc theo quy định pháp luật",
              "- Hỗ trợ soạn thảo, rà soát và hoàn thiện di chúc bảo đảm chặt chẽ, hạn chế rủi ro tranh chấp",
            ],
          },
          {
            name: "2.2. Tư vấn về thừa kế di sản",
            items: [
              "- Xác định tính hợp pháp của di sản thừa kế",
              "- Tư vấn phương thức phân chia di sản theo di chúc hoặc theo pháp luật",
              "- Hỗ trợ thủ tục khai nhận di sản, từ chối nhận di sản, phân chia di sản",
              "- Hỗ trợ sang tên tài sản sau khi nhận thừa kế (nhà đất, phần vốn góp, cổ phần, tài sản có yếu tố nước ngoài…)",
              "- Xác định thứ tự ưu tiên thanh toán nghĩa vụ tài sản và các chi phí liên quan đến thừa kế",
            ],
          },
          {
            name: "2.3. Tư vấn và giải quyết tranh chấp thừa kế",
            items: [
              "- Tư vấn giải quyết tranh chấp về người có quyền hưởng di sản, phạm vi di sản, hiệu lực và nội dung di chúc",
              "- Tư vấn tranh chấp liên quan đến người quản lý di sản, quyền và nghĩa vụ của người quản lý di sản",
              "- Tư vấn tranh chấp chia thừa kế theo pháp luật hoặc theo di chúc giữa các đồng thừa kế",
              "- Tư vấn giải quyết nghĩa vụ tài sản của người để lại di sản đối với bên thứ ba",
              "- Tư vấn và xử lý tranh chấp thừa kế có yếu tố nước ngoài",
              "- Đại diện khách hàng đàm phán, thương lượng, hòa giải trước và trong quá trình tố tụng",
              "- Hỗ trợ chuẩn bị hồ sơ khởi kiện, thu thập chứng cứ và tham gia giải quyết tranh chấp tại Tòa án",
            ],
          },
        ],
      },
    ],
    reasons: {
      title: "3. Lợi ích của việc có Luật sư khi giải quyết tranh chấp thừa kế",
      items: [
        "Xác định đúng hàng thừa kế, di sản thừa kế và phần quyền của từng người theo quy định pháp luật",
        "Đánh giá giá trị pháp lý của di chúc và các tài liệu liên quan để bảo vệ quyền lợi hợp pháp của khách hàng",
        "Tư vấn phương án giải quyết tranh chấp phù hợp như thương lượng, hòa giải hoặc khởi kiện tại Tòa án",
        "Hỗ trợ chuẩn bị hồ sơ, chứng cứ liên quan đến di sản và quan hệ thừa kế",
        "Bảo vệ quyền và lợi ích hợp pháp của khách hàng, hạn chế rủi ro pháp lý và kéo dài tranh chấp",
      ],
    },

    lastPara: [
      "Với phương châm “Thấu hiểu - Trách nhiệm - Phụng sự”, PGU cam kết đồng hành cùng khách hàng trong từng giai đoạn của quá trình tư vấn và giải quyết thừa kế, đảm bảo đúng quy định pháp luật và bảo vệ tối đa quyền, lợi ích hợp pháp của Quý khách.",
      "Nếu Quý khách có nhu cầu tư vấn hoặc giải quyết vấn đề thừa kế, vui lòng liên hệ Công ty Luật TNHH Phúc Gia Uy & Cộng sự để được hỗ trợ nhanh chóng và hiệu quả.",
    ],
  },
  {
    id: "tranh-chap-ly-hon",
    label: "Tranh chấp ly hôn",
    tagline: "Dân sự",
    img: tranh_chap_ly_hon, // thay ảnh phù hợp nếu có
    color: "#A8171C",

    descriptions: [
      "Ly hôn không chỉ là việc chấm dứt quan hệ hôn nhân mà còn kéo theo nhiều vấn đề pháp lý phức tạp liên quan đến con chung, tài sản chung, nợ chung và nghĩa vụ cấp dưỡng. Khi các bên không đạt được sự thỏa thuận, tranh chấp ly hôn sẽ được giải quyết tại Tòa án theo quy định pháp luật.",
      "Với kinh nghiệm trong lĩnh vực hôn nhân và gia đình, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ tư vấn và tham gia giải quyết tranh chấp ly hôn, bảo vệ quyền và lợi ích hợp pháp của khách hàng một cách toàn diện, thận trọng và hiệu quả.",
    ],

    explains: [
      {
        name: "1. Các nội dung tranh chấp ly hôn thường gặp",
        key: "noi-dung-tranh-chap-ly-hon",
        scopes: [
          {
            name: "Tranh chấp quyền nuôi con và cấp dưỡng",
            items: [
              "- Xác định người trực tiếp nuôi con sau ly hôn",
              "- Mức cấp dưỡng, phương thức và thời gian cấp dưỡng",
              "- Thay đổi người nuôi con sau khi bản án có hiệu lực",
              "- Hạn chế quyền thăm nom trong trường hợp ảnh hưởng đến sự phát triển của trẻ",
              "- Tòa án sẽ căn cứ vào quyền lợi mọi mặt của con, ưu tiên môi trường sống, điều kiện kinh tế và tinh thần",
            ],
          },
          {
            name: "Tranh chấp tài sản chung và nợ chung",
            items: [
              "- Xác định tài sản chung - tài sản riêng của vợ chồng",
              "- Phân chia tài sản chung theo nguyên tắc công bằng, xét công sức đóng góp",
              "- Giải quyết nghĩa vụ trả nợ chung trong thời kỳ hôn nhân",
              "- Xử lý tài sản là nhà đất, doanh nghiệp, cổ phần hoặc tài sản có yếu tố nước ngoài",
              "- Việc chứng minh nguồn gốc tài sản, thời điểm hình thành là yếu tố quan trọng",
            ],
          },
          {
            name: "Ly hôn đơn phương và ly hôn thuận tình",
            items: [
              "- Ly hôn thuận tình: Hai bên tự nguyện và thỏa thuận được về con, tài sản",
              "- Ly hôn đơn phương: Một bên yêu cầu khi hôn nhân trầm trọng",
              "- Mỗi hình thức có trình tự, hồ sơ và thời gian khác nhau, cần chuẩn bị kỹ chứng cứ",
            ],
          },
        ],
      },
      {
        name: "2. Dịch vụ luật sư tư vấn thủ tục ly hôn",
        key: "tu-van-thu-tuc-ly-hon",
        description: [
          "PGU hỗ trợ tư vấn toàn diện các vấn đề pháp lý trước, trong và sau khi ly hôn",
        ],
        scopes: [
          {
            name: "Nội dung tư vấn",
            items: [
              "- Tư vấn quyền yêu cầu ly hôn và điều kiện khởi kiện",
              "- Phân tích căn cứ pháp lý để yêu cầu ly hôn",
              "- Tư vấn thủ tục thuận tình và đơn phương",
              "- Tư vấn ly hôn có yếu tố nước ngoài",
              "- Tư vấn quyền và nghĩa vụ của cha mẹ đối với con",
              "- Tư vấn mức cấp dưỡng và phương thức cấp dưỡng",
              "- Tư vấn xác định tài sản chung - riêng và phương án phân chia",
              "- Tư vấn chia tài sản trong và sau hôn nhân",
            ],
          },
          {
            name: "Hỗ trợ thủ tục ly hôn nhanh",
            items: [
              "- Thuận tình ly hôn khi đã thỏa thuận đầy đủ",
              "- Ly hôn theo yêu cầu một bên khi mâu thuẫn trầm trọng",
              "- Ly hôn có yếu tố nước ngoài đúng thẩm quyền",
            ],
          },
        ],
      },
      {
        name: "3. Dịch vụ luật sư tranh tụng giải quyết tranh chấp ly hôn",
        key: "tranh-tung-ly-hon",
        description: [
          "Trong trường hợp phát sinh tranh chấp, PGU trực tiếp tham gia bảo vệ quyền lợi cho khách hàng tại các cấp Tòa án, đặc biệt đối với các vấn đề:",
        ],
        scopes: [
          {
            name: "",
            items: [
              "- Tranh chấp quyền nuôi con, thay đổi người nuôi con",
              "- Tranh chấp cấp dưỡng nuôi con",
              "- Tranh chấp chia tài sản chung vợ chồng",
              "- Tranh chấp xác định cha, mẹ, con",
              "- Yêu cầu hủy kết hôn trái pháp luật",
              "- Yêu cầu công nhận thuận tình ly hôn",
              "- Yêu cầu hạn chế quyền của cha mẹ đối với con",
            ],
          },
        ],
      },
      {
        name: "4. Phạm vi công việc luật sư tại PGU",
        key: "pham-vi-luat-su-ly-hon",
        description: [
          "- Tư vấn trình tự, thủ tục và thẩm quyền Tòa án",
          "- Soạn thảo đơn khởi kiện và văn bản pháp lý",
          "- Hỗ trợ thu thập tài liệu, chứng cứ",
          "- Đại diện hoặc bảo vệ quyền lợi tại Tòa án",
          "- Kiến nghị khi có vi phạm tố tụng",
        ],
      },
    ],
    reasons: {
      title: "5. Lợi ích của việc có Luật sư khi giải quyết tranh chấp ly hôn",
      items: [
        "- Tư vấn quyền và nghĩa vụ khi ly hôn",
        "- Định hướng giải quyết vấn đề con cái, tài sản",
        "- Hỗ trợ chuẩn bị hồ sơ đúng quy định",
        "- Đại diện làm việc với Tòa án",
        "- Bảo vệ quyền lợi hợp pháp của khách hàng",
      ],
    },
    lastPara: [
      "Với phương châm “Thấu hiểu - Trách nhiệm - Phụng sự”, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cam kết đồng hành cùng khách hàng bằng giải pháp pháp lý phù hợp, bảo mật thông tin và bảo vệ tối đa quyền, lợi ích hợp pháp trong các vụ việc ly hôn.",
      "Nếu Quý khách cần tư vấn hoặc hỗ trợ giải quyết ly hôn, vui lòng liên hệ PGU để được hỗ trợ nhanh chóng và chuyên nghiệp.",
    ],
  },
  {
    id: "tranh-chap-lao-dong",
    label: "Tranh chấp lao động",
    tagline: "Dân sự",
    img: tranh_chap_lao_dong, // thay ảnh phù hợp nếu có
    color: "#A8171C",

    descriptions: [
      "Tranh chấp lao động phát sinh ngày càng phổ biến trong quá trình sử dụng lao động, đặc biệt liên quan đến tiền lương, chấm dứt hợp đồng, bảo hiểm xã hội, bồi thường thiệt hại hoặc xử lý kỷ luật. Nếu không được xử lý đúng quy định, tranh chấp có thể ảnh hưởng nghiêm trọng đến quyền lợi của người lao động hoặc làm phát sinh rủi ro pháp lý, tài chính cho doanh nghiệp.",
      "Với kinh nghiệm tư vấn và tham gia tố tụng trong lĩnh vực lao động, PGU cung cấp dịch vụ giải quyết tranh chấp lao động toàn diện, hỗ trợ khách hàng bảo vệ quyền và lợi ích hợp pháp một cách hiệu quả và đúng pháp luật.",
    ],

    explains: [
      {
        name: "1. Các dạng tranh chấp lao động thường gặp",
        key: "cac-dang-tranh-chap-lao-dong",
        description: [
          "Tranh chấp về tiền lương, thưởng, phụ cấp, làm thêm giờ",
          "Tranh chấp về đơn phương chấm dứt hợp đồng lao động",
          "Tranh chấp về sa thải, kỷ luật lao động",
          "Tranh chấp về bảo hiểm xã hội, bảo hiểm thất nghiệp",
          "Tranh chấp bồi thường thiệt hại, trợ cấp thôi việc, trợ cấp mất việc",
          "Tranh chấp lao động tập thể giữa người lao động và người sử dụng lao động",
        ],
      },

      {
        name: "2. Dịch vụ chúng tôi cung cấp",
        key: "dich-vu-lao-dong",
        scopes: [
          {
            name: "2.1. Đối với người lao động (NLĐ)",
            items: [
              "- Tư vấn quyền và nghĩa vụ của người lao động theo quy định pháp luật",
              "- Tư vấn, hỗ trợ các vấn đề về tiền lương, thưởng, bảo hiểm xã hội, bảo hiểm thất nghiệp, trợ cấp thôi việc",
              "- Tư vấn về đơn phương chấm dứt hợp đồng, sa thải, kỷ luật lao động trái pháp luật",
              "- Hỗ trợ soạn thảo đơn khiếu nại, đơn hòa giải, đơn khởi kiện",
              "- Đại diện hoặc bảo vệ quyền lợi trong đàm phán, hòa giải và tại Tòa án",
              "- Tư vấn tranh chấp lao động có yếu tố nước ngoài",
            ],
          },
          {
            name: "2.2. Đối với người sử dụng lao động (NSDLĐ)",
            items: [
              "- Nghiên cứu hồ sơ vụ việc và quy định pháp luật liên quan",
              "- Tư vấn, đề xuất phương án xử lý tối ưu",
              "- Lập kế hoạch và phối hợp thực hiện phương án",
              "- Đại diện tham gia thương lượng, hòa giải với người lao động",
              "- Hỗ trợ thu thập chứng cứ, soạn thảo hồ sơ khởi kiện",
              "- Đại diện tham gia tố tụng tại Tòa án và thực hiện thủ tục pháp lý",
            ],
          },
        ],
      },
    ],
    reasons: {
      title:
        "3. Lợi ích của việc có Luật sư khi giải quyết tranh chấp lao động",
      items: [
        "Tư vấn quyền và nghĩa vụ của người lao động hoặc người sử dụng lao động theo pháp luật",
        "Đánh giá hồ sơ, hợp đồng lao động và tài liệu liên quan để xác định căn cứ pháp lý",
        "Định hướng phương án giải quyết như thương lượng, hòa giải hoặc khởi kiện",
        "Hỗ trợ chuẩn bị hồ sơ, chứng cứ để bảo vệ quyền lợi hợp pháp",
        "Đại diện hoặc tham gia bảo vệ quyền lợi khách hàng trong quá trình giải quyết tranh chấp",
      ],
    },

    lastPara: [
      "Với kinh nghiệm thực tiễn và tinh thần “Thấu hiểu - Trách nhiệm - Phụng sự”, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cam kết đồng hành cùng khách hàng trong mọi giai đoạn của quá trình giải quyết tranh chấp lao động, từ tư vấn, thương lượng đến tố tụng, nhằm bảo vệ tối đa quyền và lợi ích hợp pháp của Quý khách hàng.",
    ],
  },
  {
    id: "tranh-chap-thuong-mai",
    label: "Tranh chấp thương mại",
    tagline: "Dân sự",
    img: tranh_chap_thuong_mai, // thay ảnh phù hợp nếu có
    color: "#A8171C",

    descriptions: [
      "Trong bối cảnh hoạt động kinh doanh ngày càng phức tạp, các tranh chấp thương mại phát sinh là điều khó tránh khỏi. Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ giải quyết tranh chấp thương mại chuyên nghiệp, nhằm bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng, đồng thời hạn chế rủi ro và thiệt hại về tài chính, uy tín.",
    ],

    explains: [
      {
        name: "1. Các loại tranh chấp thương mại thường gặp",
        key: "cac-loai-tranh-chap-thuong-mai",
        description: [
          "Tranh chấp hợp đồng dịch vụ (vi phạm về phạm vi, chất lượng, thời hạn hoặc thanh toán)",
          "Tranh chấp hợp đồng phân phối, đại lý (độc quyền, chiết khấu, doanh số, chấm dứt hợp đồng)",
          "Tranh chấp hợp đồng mua bán hàng hóa (chất lượng, số lượng, tiến độ giao hàng)",
          "Tranh chấp hợp đồng vận chuyển hàng hóa (hư hỏng, mất mát, chậm giao)",
          "Tranh chấp hợp đồng xây dựng (chất lượng, tiến độ, nghiệm thu, thanh toán)",
          "Tranh chấp hợp đồng bảo hiểm, hợp tác kinh doanh (BCC), tư vấn kỹ thuật",
          "Tranh chấp cổ phần, cổ phiếu, trái phiếu trong đầu tư và M&A",
        ],
      },

      {
        name: "2. Dịch vụ chúng tôi cung cấp",
        key: "dich-vu-thuong-mai",
        description: [
          "Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp giải pháp pháp lý toàn diện cho doanh nghiệp trong quá trình giao kết, thực hiện và xử lý tranh chấp hợp đồng thương mại, với định hướng kiểm soát rủi ro ngay từ đầu và bảo vệ tối đa quyền lợi khi phát sinh tranh chấp.",
        ],
        scopes: [
          {
            name: "1. Tư vấn, soạn thảo và rà soát hợp đồng thương mại",
            items: [
              "- Soạn thảo hợp đồng chặt chẽ, phù hợp pháp luật và bảo vệ lợi ích khách hàng",
              "- Rà soát, phân tích và cảnh báo rủi ro trong điều khoản hợp đồng",
              "- Đề xuất điều chỉnh nhằm hạn chế tranh chấp",
              "- Tư vấn quy trình ký kết, thực hiện, sửa đổi và chấm dứt hợp đồng",
            ],
          },
          {
            name: "2. Tư vấn và đại diện giải quyết tranh chấp hợp đồng",
            items: [
              "- Xây dựng chiến lược xử lý tranh chấp phù hợp mục tiêu doanh nghiệp",
              "- Soạn thảo hồ sơ khởi kiện, phản tố và văn bản tố tụng",
              "- Đại diện tham gia đàm phán, thương lượng, hòa giải",
              "- Bảo vệ quyền lợi tại Tòa án hoặc Trung tâm Trọng tài Quốc tế Việt Nam (VIAC)",
              "- Theo dõi tiến trình và đề xuất giải pháp tối ưu",
            ],
          },
          {
            name: "3. Tư vấn phòng ngừa tranh chấp hợp đồng",
            items: [
              "- Xây dựng quy trình kiểm soát pháp lý nội bộ",
              "- Tư vấn cơ chế quản lý, lưu trữ và giám sát hợp đồng",
              "- Đào tạo nâng cao năng lực nhận diện và phòng ngừa rủi ro pháp lý",
            ],
          },
        ],
      },
    ],
    reasons: {
      title:
        "3. Lợi ích của việc có Luật sư khi giải quyết tranh chấp thương mại",
      items: [
        "Phân tích hợp đồng, xác định rõ quyền và nghĩa vụ của các bên",
        "Đánh giá rủi ro và định hướng phương án giải quyết (thương lượng, hòa giải, trọng tài, Tòa án)",
        "Hỗ trợ thu thập, chuẩn bị chứng cứ bảo vệ quyền lợi",
        "Đại diện hoặc tham gia cùng khách hàng trong đàm phán và giải quyết tranh chấp",
        "Bảo vệ tối đa quyền lợi doanh nghiệp, hạn chế thiệt hại và rủi ro pháp lý",
      ],
    },

    lastPara: [
      "Với phương châm “Thấu hiểu - Trách nhiệm - Phụng sự”, Phúc Gia Uy & Cộng sự không chỉ đồng hành khi tranh chấp phát sinh mà còn chủ động hỗ trợ doanh nghiệp xây dựng nền tảng pháp lý vững chắc, phát triển bền vững và an toàn trong hoạt động thương mại.",
      "Nếu Quý khách hàng có nhu cầu tư vấn hoặc cần hỗ trợ giải quyết tranh chấp hợp đồng thương mại, vui lòng liên hệ với Công ty Luật TNHH Phúc Gia Uy & Cộng sự để được tư vấn và đồng hành kịp thời, hiệu quả.",
    ],
  },
  {
    id: "tranh-chap-so-huu-tri-tue",
    label: "Tranh chấp sở hữu trí tuệ",
    tagline: "Dân sự",
    img: tranh_chap_so_huu_tri_tue, // thay ảnh phù hợp nếu có
    color: "#A8171C",

    descriptions: [
      "Trong bối cảnh cạnh tranh ngày càng gay gắt, tài sản sở hữu trí tuệ như nhãn hiệu, bản quyền, sáng chế, kiểu dáng công nghiệp hay bí mật kinh doanh đóng vai trò quan trọng đối với sự phát triển bền vững của doanh nghiệp. Tuy nhiên, các hành vi xâm phạm quyền sở hữu trí tuệ ngày càng tinh vi, gây thiệt hại lớn về uy tín, doanh thu và lợi thế cạnh tranh.",
      "Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ tư vấn và giải quyết tranh chấp sở hữu trí tuệ toàn diện, giúp khách hàng bảo vệ hiệu quả quyền và lợi ích hợp pháp của mình theo đúng quy định pháp luật.",
    ],

    explains: [
      {
        name: "1. Các dạng tranh chấp sở hữu trí tuệ thường gặp",
        key: "cac-dang-tranh-chap-so-huu-tri-tue",
        description: [
          "Tranh chấp quyền đối với nhãn hiệu, tên thương mại, logo",
          "Tranh chấp bản quyền tác giả, quyền liên quan",
          "Tranh chấp sáng chế, giải pháp hữu ích, kiểu dáng công nghiệp",
          "Tranh chấp liên quan đến chuyển giao quyền sử dụng đối tượng sở hữu trí tuệ",
          "Hành vi xâm phạm bí mật kinh doanh, cạnh tranh không lành mạnh",
          "Tranh chấp phát sinh trong hoạt động nhượng quyền thương mại có yếu tố sở hữu trí tuệ",
        ],
      },

      {
        name: "2. Dịch vụ chúng tôi cung cấp",
        key: "dich-vu-so-huu-tri-tue",
        description: [
          "Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ pháp lý toàn diện trong lĩnh vực sở hữu trí tuệ, hỗ trợ khách hàng từ giai đoạn đăng ký bảo hộ đến khai thác, chuyển giao và xử lý vi phạm.",
        ],
        scopes: [
          {
            name: "1. Nhãn hiệu",
            items: [
              "- Thiết kế, tra cứu và đánh giá khả năng bảo hộ trước khi đăng ký",
              "- Soạn thảo, nộp và theo đuổi đơn đăng ký nhãn hiệu",
              "- Thực hiện thủ tục sửa đổi, gia hạn, cấp bản sao văn bằng bảo hộ",
              "- Tư vấn, soạn thảo và đăng ký hợp đồng chuyển nhượng, chuyển giao quyền sử dụng",
              "- Thực hiện phản đối, khiếu nại, hủy bỏ hoặc chấm dứt hiệu lực văn bằng",
              "- Tư vấn và xử lý hành vi xâm phạm quyền nhãn hiệu",
            ],
          },
          {
            name: "2. Kiểu dáng công nghiệp",
            items: [
              "- Tra cứu và đánh giá khả năng bảo hộ",
              "- Soạn thảo, nộp và theo đuổi đơn đăng ký",
              "- Thực hiện thủ tục sửa đổi, duy trì, chuyển nhượng hoặc thay đổi chủ sở hữu",
              "- Tư vấn và xử lý phản đối, khiếu nại, hủy bỏ hiệu lực",
            ],
          },
          {
            name: "3. Sáng chế và giải pháp hữu ích",
            items: [
              "- Tư vấn khả năng bảo hộ và hiệu lực",
              "- Tra cứu sáng chế trong và ngoài nước",
              "- Soạn thảo mô tả, nộp và theo đuổi đơn đăng ký",
              "- Thực hiện thủ tục duy trì, sửa đổi, phản đối hoặc hủy bỏ hiệu lực",
              "- Tư vấn và xử lý vi phạm quyền sáng chế",
            ],
          },
          {
            name: "4. Các đối tượng sở hữu trí tuệ khác",
            items: [
              "- Tên thương mại, chỉ dẫn địa lý, bí mật kinh doanh",
              "- Thiết kế bố trí mạch tích hợp bán dẫn, giống cây trồng",
              "- Tư vấn pháp luật cạnh tranh, chống cạnh tranh không lành mạnh",
              "- Tư vấn xuất nhập khẩu liên quan đến quyền sở hữu trí tuệ",
            ],
          },
          {
            name: "5. Điều tra và giải quyết tranh chấp",
            items: [
              "- Điều tra, thu thập chứng cứ hành vi xâm phạm",
              "- Yêu cầu cơ quan có thẩm quyền xác định thiệt hại",
              "- Đại diện thương lượng, làm việc với cơ quan chức năng",
              "- Tham gia tố tụng để bảo vệ quyền lợi khách hàng",
            ],
          },
        ],
      },
    ],
    reasons: {
      title:
        "3. Lợi ích của việc có Luật sư khi giải quyết tranh chấp sở hữu trí tuệ",
      items: [
        "Đánh giá tình trạng pháp lý của nhãn hiệu, bản quyền, sáng chế, kiểu dáng",
        "Xác định hành vi xâm phạm và căn cứ pháp lý",
        "Tư vấn phương án xử lý như thương lượng, xử lý vi phạm hoặc khởi kiện",
        "Hỗ trợ thu thập chứng cứ chứng minh quyền sở hữu và hành vi xâm phạm",
        "Bảo vệ quyền và lợi ích hợp pháp của khách hàng, hạn chế thiệt hại và rủi ro",
      ],
    },
    lastPara: [
      "Với nhiều kinh nghiệm thực tiễn, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cam kết đồng hành cùng khách hàng trong việc xây dựng, bảo vệ và khai thác hiệu quả tài sản sở hữu trí tuệ một cách an toàn và bền vững.",
    ],
  },
  {
    id: "tranh-chap-hop-dong",
    label: "Tranh chấp hợp đồng",
    tagline: "Dân sự",
    img: tranh_chap_hop_dong,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình giao kết và thực hiện hợp đồng, các rủi ro pháp lý và tranh chấp phát sinh là điều khó tránh khỏi, đặc biệt trong môi trường kinh doanh ngày càng phức tạp và cạnh tranh. Việc xử lý tranh chấp không chỉ đòi hỏi kiến thức pháp luật vững chắc mà còn cần chiến lược phù hợp để bảo vệ quyền và lợi ích hợp pháp của các bên liên quan.",
      "Công ty Luật TNHH Phúc Gia Uy & Cộng sự với đội ngũ luật sư giàu kinh nghiệm trong lĩnh vực hợp đồng và tranh tụng thương mại, cam kết cung cấp giải pháp pháp lý toàn diện, đồng hành cùng khách hàng từ giai đoạn phòng ngừa rủi ro đến khi giải quyết dứt điểm tranh chấp một cách hiệu quả và bền vững.",
    ],

    explains: [
      {
        name: "1. Các dạng tranh chấp hợp đồng thường gặp",
        description: [
          "Vi phạm nghĩa vụ thanh toán, chậm thanh toán;",
          "Giao hàng không đúng số lượng, chất lượng, thời hạn;",
          "Đơn phương chấm dứt hợp đồng trái pháp luật;",
          "Vi phạm điều khoản bảo mật, không cạnh tranh;",
          "Tranh chấp về phạt vi phạm, bồi thường thiệt hại;",
          "Tranh chấp liên quan đến hiệu lực hợp đồng.",
        ],
      },
      {
        name: "2. Phạm vi dịch vụ bao gồm",
        description: [
          "Tư vấn chiến lược và đề xuất phương án xử lý tranh chấp hợp đồng theo hướng tối ưu quyền và lợi ích hợp pháp của khách hàng;",
          "Soạn thảo văn bản trao đổi, công văn phản hồi hoặc yêu cầu đối tác thực hiện nghĩa vụ liên quan đến nội dung tranh chấp;",
          "Cử luật sư tham gia các buổi làm việc, thương lượng với đối tác với tư cách đại diện hoặc người bảo vệ quyền lợi cho khách hàng;",
          "Hỗ trợ chuẩn bị hồ sơ, tài liệu và thực hiện thủ tục khởi kiện tại Tòa án hoặc Trọng tài thương mại;",
          "Nhận ủy quyền đại diện khách hàng tham gia tố tụng nhằm bảo đảm tối đa quyền và lợi ích hợp pháp trước cơ quan giải quyết tranh chấp.",
        ],
      },
    ],

    reasons: {
      title:
        "3. Lợi ích của việc có Luật sư khi giải quyết tranh chấp hợp đồng",
      items: [
        "Phân tích nội dung hợp đồng và các tài liệu liên quan, xác định quyền và nghĩa vụ của các bên.",
        "Đánh giá mức độ vi phạm hợp đồng và trách nhiệm pháp lý phát sinh.",
        "Định hướng phương án giải quyết tranh chấp phù hợp như thương lượng, hòa giải hoặc khởi kiện tại Tòa án.",
        "Hỗ trợ thu thập, chuẩn bị chứng cứ và hồ sơ pháp lý cần thiết.",
        "Bảo vệ quyền và lợi ích hợp pháp của khách hàng, hạn chế thiệt hại và rủi ro pháp lý trong quá trình giải quyết tranh chấp.",
      ],
    },

    lastPara: [
      "Với nhiều năm kinh nghiệm và tinh thần “Thấu hiểu - Trách nhiệm - Phụng sự”, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cam kết đồng hành cùng doanh nghiệp trong suốt quá trình phòng ngừa và giải quyết tranh chấp hợp đồng, bảo đảm quyền và lợi ích hợp pháp được bảo vệ một cách hiệu quả, kịp thời và đúng quy định pháp luật.",
      "Nếu Quý khách hàng có nhu cầu tư vấn hoặc cần hỗ trợ giải quyết tranh chấp hợp đồng, vui lòng liên hệ với Công ty Luật TNHH Phúc Gia Uy & Cộng sự để được đội ngũ luật sư của chúng tôi tư vấn và hỗ trợ nhanh chóng, chuyên nghiệp.",
    ],
  },
  {
    id: "bao-chua-nguoi-bi-buoc-toi",
    label: "Bào chữa cho người bị buộc tội",
    tagline: "Hình sự",
    img: nguoi_bi_buoc_toi, // thay ảnh phù hợp nếu có
    color: "#A8171C",

    descriptions: [
      "Trong tố tụng hình sự, người bị buộc tội luôn có quyền được bảo vệ quyền và lợi ích hợp pháp của mình theo quy định của pháp luật. Việc có luật sư tham gia ngay từ giai đoạn đầu của quá trình điều tra, truy tố và xét xử đóng vai trò đặc biệt quan trọng nhằm bảo đảm tính khách quan, công bằng và tránh những sai sót có thể ảnh hưởng đến quyền lợi của người bị buộc tội.",
      "Với đội ngũ luật sư có kinh nghiệm trong lĩnh vực tranh tụng hình sự, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ bào chữa cho người bị buộc tội trong các vụ án hình sự, đồng hành cùng khách hàng trong toàn bộ quá trình tố tụng để bảo vệ quyền và lợi ích hợp pháp một cách hiệu quả.",
    ],

    explains: [
      {
        name: "1. Khái niệm người bị buộc tội",
        key: "khai-niem-nguoi-bi-buoc-toi",
        description: [
          "Theo điểm đ khoản 1 Điều 4 Bộ luật Tố tụng Hình sự năm 2015 quy định về người bị buộc tội gồm:\n - Người bị bắt \n - Người bị tạm giữ \n - Bị can \n - Bị cáo",
        ],
      },

      {
        name: "2. Phạm vi dịch vụ",
        key: "pham-vi-dich-vu-bao-chua",
        intros: [
          "Chúng tôi cung cấp các dịch vụ bào chữa và hỗ trợ pháp lý toàn diện cho người bị buộc tội",
        ],
        description: [
          "Tư vấn pháp lý cho người bị tạm giữ, bị can, bị cáo và gia đình về quyền và nghĩa vụ trong quá trình tố tụng hình sự",
          "Tham gia bào chữa cho người bị buộc tội trong các giai đoạn điều tra, truy tố và xét xử",
          "Tham gia các buổi hỏi cung, lấy lời khai, đối chất để bảo vệ quyền lợi hợp pháp của thân chủ",
          "Nghiên cứu hồ sơ vụ án, thu thập chứng cứ, tài liệu có lợi cho người bị buộc tội",
          "Soạn thảo đơn từ, kiến nghị, khiếu nại các quyết định tố tụng không đúng quy định pháp luật",
          "Xây dựng chiến lược bào chữa phù hợp nhằm làm rõ sự thật khách quan của vụ án",
          "Tham gia tranh tụng tại phiên tòa để bảo vệ tốt nhất quyền và lợi ích hợp pháp của người bị buộc tội",
          "Tư vấn và thực hiện các thủ tục kháng cáo, kháng nghị, giám đốc thẩm, tái thẩm khi cần thiết",
        ],
      },
    ],
    reasons: {
      title: "3. Vì sao nên có Luật sư bào chữa sớm?",
      intros: [
        "Sự tham gia của luật sư ngay từ giai đoạn đầu của vụ án có ý nghĩa quan trọng như:",
      ],
      items: [
        "Bảo đảm quyền lợi hợp pháp của người bị buộc tội theo quy định của pháp luật",
        "Hạn chế nguy cơ bị ép cung, mớm cung hoặc ghi nhận lời khai không khách quan",
        "Thu thập và bảo vệ các chứng cứ có lợi cho thân chủ",
        "Định hướng chiến lược pháp lý phù hợp để giảm nhẹ trách nhiệm hình sự hoặc bảo vệ quyền lợi tốt nhất cho người bị buộc tội",
      ],
    },
    lastPara: [
      "Với phương châm “Thấu hiểu - Trách nhiệm - Phụng sự”, Công ty Luật TNHH Phúc Gia Uy & Cộng sự luôn đặt quyền và lợi ích hợp pháp của khách hàng lên hàng đầu. Chúng tôi cam kết nghiên cứu hồ sơ kỹ lưỡng, xây dựng phương án bào chữa chặt chẽ và tận tâm đồng hành cùng khách hàng trong suốt quá trình giải quyết vụ án.",
    ],
  },
  {
    id: "bao-ve-nguoi-bi-hai-duong-su",
    label: "Bảo vệ người bị hại & đương sự",
    tagline: "Hình sự",
    img: nguoi_bi_hai,
    color: "#A8171C",

    descriptions: [
      "Trong các vụ án hình sự, bên cạnh người bị buộc tội, người bị hại và các đương sự khác cũng có những quyền và lợi ích hợp pháp cần được bảo vệ. Tuy nhiên, trên thực tế nhiều người chưa nắm rõ quyền của mình trong quá trình tố tụng, dẫn đến việc quyền lợi về bồi thường thiệt hại, yêu cầu xử lý trách nhiệm hoặc tham gia tố tụng chưa được bảo đảm đầy đủ.",
      "Với kinh nghiệm trong lĩnh vực tranh tụng hình sự, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ pháp lý nhằm bảo vệ quyền và lợi ích hợp pháp cho người bị hại, nguyên đơn dân sự, bị đơn dân sự và người có quyền lợi, nghĩa vụ liên quan trong vụ án hình sự. Chúng tôi đồng hành cùng khách hàng trong toàn bộ quá trình tố tụng để bảo đảm quyền lợi được xem xét một cách đầy đủ, khách quan và đúng quy định pháp luật.",
    ],

    explains: [
      {
        name: "1. Khái niệm bị hại, đương sự trong vụ án hình sự",
        key: "khai-niem-bi-hai-duong-su",
        description: [
          "Bị hại là cá nhân trực tiếp bị thiệt hại về thể chất, tinh thần, tài sản hoặc là cơ quan, tổ chức bị thiệt hại về tài sản, uy tín do tội phạm gây ra hoặc đe dọa gây ra (khoản 1 Điều 62 Bộ luật Tố tụng Hình sự năm 2015).",
          "Đương sự trong vụ án hình sự gồm: nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan đến vụ án hình sự (điểm g khoản 1 Điều 4 Bộ luật Tố tụng Hình sự năm 2015).",
        ],
      },

      {
        name: "2. Phạm vi dịch vụ",
        key: "pham-vi-dich-vu",
        description: ["Chúng tôi cung cấp các dịch vụ pháp lý bao gồm:"],
        items: [
          "- Tư vấn quyền và nghĩa vụ của người bị hại và các đương sự trong vụ án hình sự;",
          "- Hướng dẫn và hỗ trợ làm đơn tố giác tội phạm, đơn yêu cầu khởi tố theo quy định pháp luật;",
          "- Tham gia tố tụng với tư cách người bảo vệ quyền và lợi ích hợp pháp cho người bị hại hoặc đương sự;",
          "- Thu thập tài liệu, chứng cứ nhằm bảo vệ quyền lợi hợp pháp của khách hàng;",
          "- Tham gia các buổi làm việc, lấy lời khai, đối chất với cơ quan tiến hành tố tụng;",
          "- Tư vấn và yêu cầu bồi thường thiệt hại về vật chất và tinh thần trong vụ án hình sự;",
          "- Soạn thảo các đơn từ, kiến nghị, khiếu nại liên quan đến hoạt động tố tụng;",
          "- Tham gia tranh tụng tại phiên tòa nhằm bảo vệ quyền và lợi ích hợp pháp của khách hàng;",
          "- Tư vấn và hỗ trợ thực hiện kháng cáo bản án, quyết định của Tòa án khi cần thiết.",
        ],
      },
    ],
    reasons: {
      title:
        "3. Vai trò của Luật sư trong việc bảo vệ quyền lợi của bị hại, đương sự trong vụ án hình sự",

      items: [
        "Sự tham gia của luật sư giúp người bị hại và các đương sự:",
        "Hiểu rõ quyền và nghĩa vụ của mình trong quá trình tố tụng hình sự;",
        "Bảo đảm yêu cầu bồi thường thiệt hại được xem xét đầy đủ và hợp pháp;",
        "Tránh những thiếu sót về thủ tục, chứng cứ có thể ảnh hưởng đến quyền lợi;",
        "Được đại diện phát biểu, tranh luận và bảo vệ quyền lợi tại phiên tòa.",
      ],
    },
    lastPara: [
      "Với phương châm “Thấu hiểu - Trách nhiệm - Phụng sự”, Công ty Luật TNHH Phúc Gia Uy & Cộng sự luôn nỗ lực bảo vệ quyền và lợi ích hợp pháp của khách hàng một cách tận tâm và chuyên nghiệp. Chúng tôi nghiên cứu hồ sơ kỹ lưỡng, xây dựng chiến lược pháp lý phù hợp và đồng hành cùng khách hàng trong suốt quá trình giải quyết vụ án.",
    ],
  },
  {
    id: "bao-ve-quyen-loi-nguoi-bi-to-giac-va-nguoi-to-giac-toi-pham",
    label:
      "Bảo vệ quyền và lợi ích hợp pháp cho người bị tố giác, người bị kiến nghị khởi tố, người có đơn tố giác tội phạm",
    tagline: "Hình sự",
    img: nguoi_bi_to_giac,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình tiếp nhận và giải quyết nguồn tin về tội phạm, các chủ thể như người bị tố giác, người bị kiến nghị khởi tố hoặc người tố giác tội phạm đều có những quyền và lợi ích hợp pháp cần được bảo vệ. Tuy nhiên, nhiều cá nhân chưa nắm rõ quy định pháp luật, dẫn đến việc quyền lợi của mình có thể bị ảnh hưởng trong quá trình làm việc với cơ quan tiến hành tố tụng.",
      "Với kinh nghiệm trong lĩnh vực pháp luật hình sự, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ tư vấn và tham gia bảo vệ quyền và lợi ích hợp pháp cho các bên liên quan trong giai đoạn giải quyết nguồn tin về tội phạm. Chúng tôi hỗ trợ khách hàng hiểu rõ quyền và nghĩa vụ của mình, đồng thời bảo đảm các thủ tục tố tụng được thực hiện đúng quy định của pháp luật.",
    ],

    explains: [
      {
        name: "1. Khái niệm người bị tố giác, người bị kiến nghị khởi tố, người tố giác tội phạm",
        description: [
          "Người bị tố giác: cá nhân hoặc pháp nhân thương mại bị tố giác đã thực hiện hành vi phạm tội, đang được cơ quan có thẩm quyền tiếp nhận, kiểm tra, xác minh trong quá trình giải quyết nguồn tin về tội phạm.",
          "Người bị kiến nghị khởi tố: cá nhân hoặc pháp nhân thương mại bị cơ quan, tổ chức có thẩm quyền kiến nghị cơ quan điều tra xem xét khởi tố vụ án hình sự do có dấu hiệu thực hiện hành vi phạm tội được phát hiện trong quá trình thực hiện nhiệm vụ.",
          "Người tố giác tội phạm: cá nhân phát hiện và báo cho cơ quan có thẩm quyền biết về hành vi có dấu hiệu tội phạm, nhằm đề nghị cơ quan chức năng kiểm tra, xác minh và xử lý theo quy định của pháp luật.",
        ],
      },
      {
        name: "2. Phạm vi dịch vụ",
        description: [
          "Tư vấn quyền và nghĩa vụ của người bị tố giác, người bị kiến nghị khởi tố và người tố giác tội phạm theo quy định của pháp luật;",
          "Tư vấn hướng xử lý phù hợp khi có thông báo về việc tiếp nhận, xác minh nguồn tin về tội phạm;",
          "Tham gia cùng khách hàng trong các buổi làm việc với cơ quan điều tra, cơ quan có thẩm quyền khi được mời làm việc;",
          "Hỗ trợ soạn thảo các bản tường trình, giải trình, đơn trình bày ý kiến, kiến nghị;",
          "Thu thập, cung cấp tài liệu, chứng cứ nhằm bảo vệ quyền và lợi ích hợp pháp của khách hàng;",
          "Hỗ trợ soạn thảo đơn tố giác tội phạm, đơn kiến nghị khởi tố và các văn bản pháp lý liên quan;",
          "Kiến nghị cơ quan có thẩm quyền xem xét, giải quyết vụ việc đúng quy định pháp luật;",
          "Hỗ trợ khiếu nại các quyết định, hành vi tố tụng nếu có dấu hiệu vi phạm quyền và lợi ích hợp pháp của khách hàng.",
        ],
      },
    ],

    reasons: {
      title:
        "3. Vai trò của Luật sư trong giai đoạn giải quyết nguồn tin về tội phạm",
      items: [
        "Bảo đảm quyền và lợi ích hợp pháp của khách hàng được tôn trọng trong quá trình làm việc với cơ quan chức năng;",
        "Hạn chế rủi ro pháp lý do thiếu hiểu biết về quy trình và thủ tục tố tụng;",
        "Hỗ trợ chuẩn bị tài liệu, chứng cứ một cách đầy đủ và hợp pháp;",
        "Định hướng phương án pháp lý phù hợp để bảo vệ tốt nhất quyền lợi của khách hàng.",
      ],
    },

    lastPara: [
      "Với phương châm “Thấu hiểu - Trách nhiệm - Phụng sự”, Công ty Luật TNHH Phúc Gia Uy & Cộng sự luôn đặt quyền và lợi ích hợp pháp của khách hàng lên hàng đầu. Chúng tôi cam kết đồng hành cùng khách hàng một cách tận tâm, bảo đảm quá trình giải quyết vụ việc được thực hiện minh bạch, đúng pháp luật và hiệu quả.",
    ],
  },
  {
    id: "tu-van-phap-ly-truoc-dau-tu",
    label: "Tư vấn pháp lý trước đầu tư",
    tagline: "Đầu tư & Doanh nghiệp",
    img: tu_van_phap_ly_truoc_dau_tu, // thay bằng ảnh phù hợp nếu có
    color: "#A8171C",
    descriptions: [
      "Trước khi triển khai dự án tại Việt Nam, việc đánh giá đầy đủ khung pháp lý và điều kiện tiếp cận thị trường là yếu tố then chốt để hạn chế rủi ro và bảo đảm hiệu quả đầu tư. Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU Law Firm) cung cấp dịch vụ tư vấn pháp lý tiền đầu tư, hỗ trợ nhà đầu tư phân tích tính khả thi, lựa chọn cấu trúc đầu tư phù hợp và xây dựng nền tảng pháp lý vững chắc ngay từ giai đoạn khởi đầu.",
      "Dịch vụ tư vấn đầu tư của PGU được xây dựng trên cơ sở nghiên cứu thị trường và phân tích pháp lý toàn diện, triển khai xuyên suốt theo 03 giai đoạn chính:",
    ],
    processes: [
      {
        title:
          "Giai đoạn 1: Chuẩn bị đầu tư - Xây dựng nền tảng pháp lý vững chắc",
        steps: [
          {
            num: "01",
            title: "Xác định tư cách nhà đầu tư",
            desc: "Tư vấn lựa chọn tư cách pháp lý phù hợp (cá nhân hoặc pháp nhân) khi đầu tư tại Việt Nam, bảo đảm đáp ứng đầy đủ điều kiện theo quy định pháp luật và tối ưu hiệu quả về thuế cũng như quyền lợi pháp lý.",
          },
          {
            num: "02",
            title: "Lựa chọn mô hình đầu tư phù hợp",
            desc: "Đề xuất và phân tích các phương án đầu tư như thành lập công ty con, chi nhánh, văn phòng đại diện, liên doanh, góp vốn, mua cổ phần hoặc đầu tư thông qua chứng khoán. Trên cơ sở đánh giá ưu - nhược điểm của từng hình thức, chúng tôi hỗ trợ nhà đầu tư lựa chọn cấu trúc phù hợp với chiến lược kinh doanh và mục tiêu dài hạn.",
          },
          {
            num: "03",
            title: "Tư vấn ngành, nghề kinh doanh",
            desc: "Rà soát và tư vấn lựa chọn ngành nghề bảo đảm phù hợp với quy định pháp luật Việt Nam và các cam kết quốc tế mà Việt Nam tham gia, hạn chế rủi ro pháp lý trong quá trình triển khai dự án.",
          },
          {
            num: "04",
            title: "Cơ cấu vốn đầu tư và vốn điều lệ",
            desc: "Hỗ trợ xác định mức vốn đầu tư, vốn điều lệ và tỷ lệ sở hữu hợp lý, bảo đảm tuân thủ quy định pháp luật, đồng thời giúp nhà đầu tư sử dụng nguồn lực tài chính hiệu quả và nâng cao khả năng sinh lợi.",
          },
        ],
      },
      {
        title: "Giai đoạn 2: Thành lập dự án - Đồng hành triển khai thực tế",
        steps: [
          {
            num: "01",
            title: "Tư vấn lựa chọn và thẩm định địa điểm",
            desc: "Hỗ trợ tìm kiếm và đánh giá địa điểm phù hợp với nhu cầu kinh doanh: từ thuê văn phòng, nhà xưởng, thuê đất trong khu công nghiệp đến nhận chuyển nhượng quyền sử dụng đất hoặc mua tài sản gắn liền với đất. Luật sư tiến hành thẩm định pháp lý đối với bên cho thuê và tài sản theo quy định của pháp luật đất đai, kinh doanh bất động sản và nhà ở; đồng thời soạn thảo, đàm phán các thỏa thuận nhằm bảo vệ tối đa quyền và lợi ích của nhà đầu tư.",
          },
          {
            num: "02",
            title: "Tư vấn chính sách ưu đãi đầu tư",
            desc: "Phân tích và hướng dẫn áp dụng các chính sách ưu đãi theo ngành nghề, địa bàn hoặc khi đầu tư vào khu công nghiệp, khu kinh tế, nhằm tối ưu hóa lợi ích tài chính cho dự án.",
          },
          {
            num: "03",
            title: "Tư vấn pháp luật lao động",
            desc: "Hỗ trợ xây dựng hệ thống nội quy, chính sách tiền lương, bảo hiểm và phúc lợi phù hợp quy định pháp luật; góp phần xây dựng môi trường làm việc ổn định, chuyên nghiệp và hạn chế rủi ro tranh chấp lao động.",
          },
        ],
      },
      {
        title:
          "Giai đoạn 3: Vận hành và phát triển - Bảo đảm tuân thủ bền vững",
        steps: [
          {
            num: "01",
            title: "Tư vấn pháp luật thuế",
            desc: "Đồng hành trong việc tuân thủ và tối ưu nghĩa vụ thuế, bao gồm thuế thu nhập doanh nghiệp, thuế giá trị gia tăng, thuế xuất nhập khẩu, thuế tiêu thụ đặc biệt và thuế thu nhập cá nhân.",
          },
          {
            num: "02",
            title: "Hỗ trợ thủ tục hải quan và xuất nhập khẩu",
            desc: "Tư vấn, thực hiện các thủ tục hải quan, xin cấp chứng nhận xuất xứ hàng hóa (C/O), góp phần đảm bảo hoạt động thương mại quốc tế thông suốt và hiệu quả.",
          },
          {
            num: "03",
            title: "Tư vấn về môi trường, xây dựng và phòng cháy chữa cháy",
            desc: "Hướng dẫn tuân thủ các quy định pháp luật liên quan đến môi trường, xây dựng và PCCC, giảm thiểu rủi ro pháp lý và bảo đảm hoạt động sản xuất - kinh doanh ổn định.",
          },
          {
            num: "04",
            title: "Quản trị doanh nghiệp và tuân thủ pháp luật",
            desc: "Hỗ trợ xây dựng cơ chế quản trị nội bộ, rà soát tuân thủ pháp luật định kỳ và tư vấn xử lý các vấn đề phát sinh trong quá trình hoạt động, giúp doanh nghiệp phát triển an toàn và bền vững tại Việt Nam.",
          },
        ],
      },
    ],

    reasons: {
      title: "Lý do nhà đầu tư nên lựa chọn PGU",
      items: [
        "Đội ngũ luật sư giàu kinh nghiệm: PGU có nhiều năm kinh nghiệm trong lĩnh vực đầu tư và doanh nghiệp, đã hỗ trợ nhiều nhà đầu tư trong và ngoài nước triển khai dự án tại Việt Nam.",
        "Dịch vụ tư vấn toàn diện: Chúng tôi cung cấp dịch vụ tư vấn pháp lý trước đầu tư, thẩm định pháp lý dự án, tư vấn lựa chọn hình thức đầu tư và hỗ trợ các thủ tục pháp lý cần thiết để triển khai dự án.",
        "Giải pháp tối ưu chi phí và thời gian: Với kinh nghiệm thực tiễn, PGU đưa ra các giải pháp và lộ trình pháp lý phù hợp, giúp nhà đầu tư triển khai dự án nhanh chóng, hiệu quả và tiết kiệm chi phí.",
        "Hỗ trợ làm việc với nhà đầu tư nước ngoài: Đội ngũ luật sư của chúng tôi có khả năng làm việc bằng tiếng Anh, giúp quá trình trao đổi và thực hiện thủ tục pháp lý với nhà đầu tư nước ngoài thuận lợi.",
        "Uy tín và trách nhiệm nghề nghiệp: PGU luôn đặt sự minh bạch, trách nhiệm và chất lượng dịch vụ lên hàng đầu trong quá trình tư vấn và hỗ trợ nhà đầu tư.",
        "Đồng hành pháp lý lâu dài: Chúng tôi không chỉ hỗ trợ giai đoạn trước đầu tư mà còn sẵn sàng đồng hành cùng nhà đầu tư trong suốt quá trình triển khai và vận hành dự án tại Việt Nam.",
      ],
    },
    lastPara: [
      "Nếu Quý khách đang cân nhắc đầu tư tại Việt Nam và cần một đối tác pháp lý tin cậy đồng hành từ bước chuẩn bị ban đầu, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU Law Firm) luôn sẵn sàng hỗ trợ kịp thời, tận tâm, hiệu quả, an toàn và phù hợp với mục tiêu đầu tư của Quý khách.",
    ],
  },
  {
    id: "tham-tra-phap-ly-dat-nha-xuong",
    label: "Thẩm tra pháp lý đất, nhà xưởng",
    tagline: "Đầu tư & Doanh nghiệp",
    img: phap_ly_dat_nha_xuong,
    color: "#A8171C",
    descriptions: [
      "Việc lựa chọn và thẩm định địa điểm thực hiện dự án là bước quan trọng, ảnh hưởng trực tiếp đến tính khả thi, chi phí và sự ổn định lâu dài của hoạt động đầu tư. Với kinh nghiệm thực tiễn trong lĩnh vực đầu tư và bất động sản, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU Law Firm) cung cấp dịch vụ tư vấn pháp lý toàn diện về địa điểm thực hiện dự án, giúp nhà đầu tư đánh giá rủi ro, bảo đảm tính pháp lý và xây dựng nền tảng an toàn cho quá trình triển khai dự án tại Việt Nam.",
      "Dịch vụ thẩm tra pháp lý đất, nhà xưởng của chúng tôi bao gồm:",
    ],
    explains: [
      {
        name: "1. Tư vấn pháp lý về thuê, nhận chuyển nhượng địa điểm",
        key: "dich-vu-tham-tra-phap-ly",
        intros: [
          "Chúng tôi tư vấn chuyên sâu các quy định pháp luật liên quan đến",
        ],
        description: [
          "Thuê đất trong khu công nghiệp, khu chế xuất, khu công nghệ cao và cụm công nghiệp",
          "Thuê nhà xưởng, kho bãi, văn phòng;",
          "Nhận chuyển nhượng nhà máy, cơ sở sản xuất đã xây dựng sẵn.",
        ],
        lastIntro: [
          "Dịch vụ nhằm giúp nhà đầu tư lựa chọn phương án phù hợp với nhu cầu sử dụng và định hướng phát triển dự án.",
        ],
      },
      {
        name: "2. Thẩm định pháp lý toàn diện đất và tài sản",
        key: "tham-tra-phap-ly-dat-nha-xuong",
        intros: [
          "Chúng tôi thực hiện rà soát, đánh giá tính pháp lý của quyền sử dụng đất và tài sản gắn liền với đất dự kiến thuê hoặc mua, bao gồm",
        ],
        description: [
          "Xác định chủ thể có quyền sử dụng đất và quyền sở hữu hợp pháp đối với nhà xưởng, kho bãi, văn phòng và công trình trên đất;",
          "Kiểm tra mục đích sử dụng đất, tình trạng quy hoạch;",
          "Rà soát các hồ sơ, giấy phép liên quan như chủ trương đầu tư, giấy phép xây dựng, môi trường, phòng cháy và chữa cháy;",
          "Kiểm tra tình trạng pháp lý của tài sản: có đang bị tranh chấp, thế chấp, kê biên, thi hành án hoặc bị hạn chế giao dịch hay không;",
          "Phân tích các rủi ro tiềm ẩn và đề xuất phương án xử lý phù hợp.",
        ],
      },
      {
        name: "3. Soạn thảo và đàm phán hợp đồng",
        key: "soan-thao-hop-dong",
        description: [
          "Chúng tôi hỗ trợ soạn thảo, rà soát và tham gia đàm phán các hợp đồng thuê, hợp đồng chuyển nhượng quyền sử dụng đất và tài sản gắn liền với đất, bảo đảm quyền và lợi ích hợp pháp của nhà đầu tư được bảo vệ tối đa.",
        ],
      },
      {
        name: "4. Hỗ trợ định giá tài sản",
        key: "dinh-gia-tai-san",
        description: [
          "Trường hợp nhà đầu tư có nhu cầu xác định giá trị quyền sử dụng đất hoặc tài sản, chúng tôi phối hợp với đơn vị thẩm định giá độc lập, đủ điều kiện theo quy định pháp luật để cung cấp dịch vụ định giá khách quan và chính xác.",
        ],
      },
      {
        name: "5. Dịch vụ pháp lý tiếp theo",
        key: "dich-vu-phap-ly-tiep-theo",
        intros: [
          "Bên cạnh hoạt động thẩm định địa điểm dự án, chúng tôi tiếp tục đồng hành cùng nhà đầu tư thông qua các dịch vụ:",
        ],
        description: [
          "Thành lập doanh nghiệp để triển khai dự án;",
          "Tư vấn và thực hiện thủ tục mua lại công ty mục tiêu đang sở hữu quyền sử dụng đất hoặc tài sản;",
          "Thực hiện thủ tục đăng ký biến động, cập nhật thông tin trên Giấy chứng nhận quyền sử dụng đất và tài sản gắn liền với đất theo quy định pháp luật.",
        ],
      },
    ],
    reasons: {
      title: "5. Lý do nên chọn PGU",
      items: [
        "Đội ngũ luật sư giàu kinh nghiệm: PGU có đội ngũ luật sư am hiểu pháp luật về đất đai, đầu tư và kinh doanh bất động sản, đã hỗ trợ nhiều nhà đầu tư thực hiện thẩm tra pháp lý đối với đất đai, nhà xưởng và dự án tại Việt Nam.",
        "Thẩm tra pháp lý toàn diện: Thực hiện rà soát, đánh giá tình trạng pháp lý của quyền sử dụng đất, nhà xưởng, quy hoạch, mục đích sử dụng đất và các giấy tờ pháp lý liên quan trước khi nhà đầu tư quyết định thuê, nhận chuyển nhượng hoặc hợp tác đầu tư.",
        "Đánh giá rủi ro pháp lý: Phân tích các rủi ro pháp lý có thể phát sinh từ nguồn gốc đất, tình trạng quy hoạch, thế chấp, tranh chấp hoặc các hạn chế pháp lý khác.",
        "Hỗ trợ nhà đầu tư nước ngoài: Luật sư của PGU có khả năng làm việc bằng tiếng Anh, giúp nhà đầu tư nước ngoài dễ dàng tiếp cận thông tin pháp lý và đưa ra quyết định đầu tư phù hợp.",
        "Tư vấn phương án giao dịch an toàn: Đề xuất giải pháp pháp lý phù hợp để nhà đầu tư thực hiện giao dịch thuê, nhận chuyển nhượng hoặc hợp tác khai thác đất, nhà xưởng một cách an toàn và đúng quy định.",
        "Đồng hành trong quá trình triển khai dự án: PGU sẵn sàng hỗ trợ nhà đầu tư trong các bước tiếp theo như ký kết hợp đồng, thực hiện thủ tục pháp lý và triển khai dự án sau khi hoàn tất quá trình thẩm tra pháp lý.",
      ],
    },
    lastPara: [
      "Nếu Quý nhà đầu tư đang tìm kiếm địa điểm triển khai dự án và cần bảo đảm tính pháp lý an toàn, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU Law Firm) sẵn sàng đồng hành, hỗ trợ kịp thời và tận tâm nhằm bảo vệ tối đa quyền và lợi ích hợp pháp của Quý khách.",
    ],
  },
  {
    id: "thanh-lap-cong-ty-von-dau-tu-nuoc-ngoai",
    label: "Thành lập công ty có vốn đầu tư nước ngoài",
    tagline: "Đầu tư & Doanh nghiệp",
    img: thanh_lap_cong_ty_von_nuoc_ngoai,
    color: "#A8171C",

    descriptions: [
      "Trong bối cảnh Việt Nam ngày càng hội nhập sâu rộng vào nền kinh tế toàn cầu, việc thành lập công ty có vốn đầu tư nước ngoài (FDI) đang trở thành xu hướng của nhiều nhà đầu tư quốc tế mong muốn mở rộng hoạt động kinh doanh tại thị trường Việt Nam. Tuy nhiên, thủ tục pháp lý liên quan đến đầu tư nước ngoài thường phức tạp, đòi hỏi sự am hiểu chuyên sâu về pháp luật đầu tư, doanh nghiệp, đất đai, thuế và các điều kiện kinh doanh có điều kiện.",
      "Với kinh nghiệm tư vấn trong lĩnh vực đầu tư - doanh nghiệp, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ thành lập công ty có vốn đầu tư nước ngoài trọn gói, chuyên nghiệp, giúp nhà đầu tư tiết kiệm thời gian, chi phí và hạn chế tối đa rủi ro pháp lý.",
    ],

    explains: [
      {
        name: "1. Dịch vụ chúng tôi cung cấp",
        scopes: [
          {
            name: "Tư vấn trước đầu tư",
            items: [
              "- Đánh giá điều kiện tiếp cận thị trường đối với nhà đầu tư nước ngoài",
              "- Tư vấn lựa chọn loại hình doanh nghiệp phù hợp (Công ty TNHH, Công ty cổ phần…)",
              "- Tư vấn về tỷ lệ góp vốn, cơ cấu sở hữu, ngành nghề kinh doanh",
              "- Tư vấn địa điểm thực hiện dự án, thuê đất, thuê nhà xưởng",
            ],
          },
          {
            name: "Thực hiện thủ tục pháp lý",
            items: [
              "- Xin cấp Giấy chứng nhận đăng ký đầu tư (IRC)",
              "- Xin cấp Giấy chứng nhận đăng ký doanh nghiệp (ERC)",
              "- Thực hiện thủ tục góp vốn, mở tài khoản vốn đầu tư",
              "- Đăng ký thuế, khắc dấu, công bố thông tin doanh nghiệp",
            ],
          },
          {
            name: "Tư vấn sau thành lập",
            items: [
              "- Xin giấy phép con (nếu có)",
              "- Tư vấn lao động, giấy phép lao động cho người nước ngoài",
              "- Tư vấn hợp đồng, điều lệ, cơ cấu quản trị",
              "- Tư vấn tuân thủ pháp luật trong quá trình hoạt động",
            ],
          },
        ],
      },
    ],

    processes: [
      {
        title: "2. Quy trình thực hiện",
        intros: [
          "Để đảm bảo tính minh bạch và hiệu quả, chúng tôi triển khai dịch vụ theo quy trình chuyên nghiệp gồm 6 bước:",
        ],
        steps: [
          {
            num: "01",
            title: "Tiếp nhận thông tin & tư vấn sơ bộ",
            desc: "Tiếp nhận nhu cầu của nhà đầu tư; phân tích ngành nghề dự kiến, tỷ lệ vốn góp, hình thức đầu tư (thành lập mới hoặc góp vốn/mua cổ phần).",
          },
          {
            num: "02",
            title: "Đánh giá điều kiện pháp lý",
            desc: "Rà soát điều kiện tiếp cận thị trường, kiểm tra ngành nghề kinh doanh có điều kiện, yêu cầu về vốn pháp định, chứng chỉ hành nghề (nếu có).",
          },
          {
            num: "03",
            title: "Chuẩn bị hồ sơ đầu tư",
            desc: "Soạn thảo hồ sơ xin cấp Giấy chứng nhận đăng ký đầu tư (IRC), bao gồm: Văn bản đề nghị thực hiện dự án; Đề xuất dự án đầu tư; Tài liệu chứng minh năng lực tài chính; Hợp đồng thuê trụ sở/địa điểm.",
          },
          {
            num: "04",
            title: "Xin cấp Giấy chứng nhận đăng ký đầu tư (IRC)",
            desc: "Đại diện nhà đầu tư nộp hồ sơ và làm việc với cơ quan đăng ký đầu tư cho đến khi được cấp IRC.",
          },
          {
            num: "05",
            title: "Xin cấp Giấy chứng nhận đăng ký doanh nghiệp (ERC)",
            desc: "Soạn thảo điều lệ, danh sách thành viên/cổ đông; nộp hồ sơ đăng ký doanh nghiệp và nhận ERC.",
          },
          {
            num: "06",
            title: "Hoàn tất thủ tục sau thành lập",
            desc: "Công bố thông tin doanh nghiệp; Khắc dấu và thông báo mẫu dấu; Mở tài khoản vốn đầu tư; Đăng ký thuế ban đầu; Hỗ trợ thủ tục pháp lý liên quan đến hoạt động kinh doanh.",
          },
        ],
      },
    ],
    reasons: {
      title: "3. Lý do nên chọn PGU",
      items: [
        "Đội ngũ luật sư am hiểu pháp luật đầu tư: PGU có nhiều năm kinh nghiệm trong lĩnh vực đầu tư nước ngoài (FDI), đã hỗ trợ nhiều nhà đầu tư thực hiện thủ tục thành lập doanh nghiệp và triển khai dự án tại Việt Nam",
        "Tư vấn và thực hiện thủ tục pháp lý trọn gói: Hỗ trợ nhà đầu tư trong toàn bộ quá trình thành lập công ty có vốn đầu tư nước ngoài, bao gồm tư vấn dự án đầu tư, xin Giấy chứng nhận đăng ký đầu tư (IRC), Giấy chứng nhận đăng ký doanh nghiệp (ERC) và các thủ tục pháp lý liên quan",
        "Giải pháp pháp lý phù hợp với từng dự án: Tư vấn lựa chọn mô hình doanh nghiệp, tỷ lệ góp vốn, ngành nghề kinh doanh và cơ cấu hoạt động phù hợp với quy định pháp luật và nhu cầu của nhà đầu tư.",
        "Tiết kiệm thời gian và chi phí: Với kinh nghiệm thực tiễn trong việc thực hiện thủ tục đầu tư, PGU giúp nhà đầu tư chuẩn bị hồ sơ đầy đủ, hạn chế sai sót và rút ngắn thời gian xử lý thủ tục hành chính",
        "Hỗ trợ nhà đầu tư nước ngoài: Luật sư của PGU có khả năng làm việc bằng tiếng Anh, giúp quá trình trao đổi thông tin và thực hiện thủ tục pháp lý thuận lợi.",
        "Đồng hành trong quá trình hoạt động của doanh nghiệp: Sau khi thành lập doanh nghiệp, PGU tiếp tục hỗ trợ nhà đầu tư trong các vấn đề pháp lý phát sinh như điều chỉnh dự án đầu tư, giấy phép con, hợp đồng và tuân thủ pháp luật trong quá trình hoạt động.",
      ],
    },

    lastPara: [
      "Nếu Quý Nhà đầu tư đang có kế hoạch thành lập công ty có vốn đầu tư nước ngoài tại Việt Nam, hãy liên hệ với chúng tôi để được tư vấn chi tiết và xây dựng lộ trình pháp lý an toàn, hiệu quả, bền vững. Công ty Luật TNHH Phúc Gia Uy & Cộng sự luôn sẵn sàng trở thành đối tác pháp lý tin cậy của nhà đầu tư trong và ngoài nước.",
    ],
  },
  {
    id: "thanh-lap-van-phong-dai-dien-cong-ty-nuoc-ngoai",
    label: "Thành lập văn phòng đại diện công ty nước ngoài",
    tagline: "Đầu tư & Doanh nghiệp",
    img: thanh_lap_van_phong_dai_dien_nuoc_ngoai,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình mở rộng thị trường tại Việt Nam, nhiều thương nhân nước ngoài lựa chọn thành lập Văn phòng đại diện (VPĐD) như một bước đi chiến lược nhằm tìm hiểu thị trường, xúc tiến thương mại và xây dựng quan hệ đối tác trước khi đầu tư sâu rộng. Đây là mô hình phù hợp với doanh nghiệp muốn hiện diện hợp pháp tại Việt Nam nhưng chưa trực tiếp thực hiện hoạt động kinh doanh sinh lợi.",
      "Với kinh nghiệm tư vấn pháp lý trong lĩnh vực đầu tư - thương mại, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ thành lập Văn phòng đại diện công ty nước ngoài trọn gói, nhanh chóng và đúng quy định pháp luật.",
    ],

    explains: [
      {
        name: "1. Văn phòng đại diện của công ty nước ngoài là gì?",
        intros: [
          "Văn phòng đại diện là đơn vị phụ thuộc của thương nhân nước ngoài, được phép hoạt động tại Việt Nam với chức năng:",
        ],
        description: [
          "Xúc tiến thương mại",
          "Nghiên cứu thị trường",
          "Tìm kiếm, thúc đẩy cơ hội hợp tác",
          "Giám sát việc thực hiện hợp đồng của công ty mẹ",
        ],
        lastIntro: [
          "Lưu ý: Văn phòng đại diện không được trực tiếp thực hiện hoạt động kinh doanh sinh lợi tại Việt Nam và không được xuất hóa đơn.",
        ],
      },
      {
        name: "2. Điều kiện thành lập Văn phòng đại diện của công ty nước ngoài",
        intros: [
          "Thương nhân nước ngoài được phép thành lập Văn phòng đại diện tại Việt Nam khi đáp ứng các điều kiện sau:",
        ],
        description: [
          "Được thành lập, đăng ký kinh doanh hợp pháp tại quốc gia/vùng lãnh thổ tham gia điều ước quốc tế mà Việt Nam là thành viên hoặc được pháp luật quốc gia/vùng lãnh thổ đó công nhận;",
          "Đã hoạt động tối thiểu 01 năm kể từ ngày thành lập hoặc đăng ký;",
          "Trường hợp giấy đăng ký kinh doanh có quy định thời hạn hoạt động thì phải còn hiệu lực ít nhất 01 năm tính đến ngày nộp hồ sơ;",
          "Nội dung hoạt động của Văn phòng đại diện phù hợp với cam kết quốc tế của Việt Nam.",
        ],
        lastIntro: [
          "Lưu ý: Trường hợp nội dung hoạt động không phù hợp với cam kết quốc tế hoặc thương nhân không thuộc quốc gia/vùng lãnh thổ có điều ước với Việt Nam, việc thành lập phải được sự chấp thuận của Bộ trưởng hoặc cơ quan quản lý chuyên ngành có thẩm quyền.",
        ],
      },
      {
        name: "3. Phạm vi dịch vụ của chúng tôi",
        scopes: [
          {
            name: "Tư vấn trước khi thành lập",
            items: [
              "- Đánh giá điều kiện pháp lý của thương nhân nước ngoài",
              "- Tư vấn địa điểm đặt trụ sở VPĐD",
              "- Tư vấn về Trưởng Văn phòng đại diện (người đứng đầu)",
              "- Tư vấn phạm vi hoạt động phù hợp quy định pháp luật",
            ],
          },
          {
            name: "Thực hiện thủ tục xin cấp Giấy phép thành lập",
            items: [
              "- Soạn thảo và hoàn thiện hồ sơ",
              "- Hợp pháp hóa lãnh sự tài liệu từ nước ngoài",
              "- Đại diện nộp hồ sơ và làm việc với cơ quan có thẩm quyền",
              "- Nhận Giấy phép thành lập Văn phòng đại diện",
            ],
          },
          {
            name: "Thủ tục sau khi được cấp phép",
            items: [
              "- Khắc dấu và thông báo mẫu dấu",
              "- Đăng ký mã số thuế",
              "- Mở tài khoản ngân hàng",
              "- Đăng ký lao động, xin giấy phép lao động (nếu có người nước ngoài làm việc)",
            ],
          },
        ],
      },
    ],

    processes: [
      {
        title: "4. Quy trình thực hiện",
        intros: [
          "Để đảm bảo hiệu quả và tiết kiệm thời gian cho khách hàng, chúng tôi triển khai theo quy trình:",
        ],
        steps: [
          {
            num: "01",
            title: "Tiếp nhận thông tin và tài liệu",
            desc: "Tiếp nhận thông tin và tài liệu từ công ty mẹ.",
          },
          {
            num: "02",
            title: "Tư vấn và rà soát điều kiện",
            desc: "Rà soát điều kiện và hướng dẫn chuẩn bị hồ sơ.",
          },
          {
            num: "03",
            title: "Soạn thảo hồ sơ",
            desc: "Soạn thảo hồ sơ và thực hiện hợp pháp hóa lãnh sự (nếu cần).",
          },
          {
            num: "04",
            title: "Nộp hồ sơ",
            desc: "Nộp hồ sơ tại cơ quan có thẩm quyền và theo dõi xử lý.",
          },
          {
            num: "05",
            title: "Nhận giấy phép",
            desc: "Nhận Giấy phép thành lập Văn phòng đại diện.",
          },
          {
            num: "06",
            title: "Hoàn tất sau cấp phép",
            desc: "Hoàn tất các thủ tục sau cấp phép và bàn giao hồ sơ.",
          },
        ],
      },
    ],

    reasons: {
      title: "5. Lý do nên chọn PGU",
      items: [
        "Đội ngũ luật sư am hiểu pháp luật thương mại và đầu tư: PGU có nhiều năm kinh nghiệm trong lĩnh vực đầu tư và thương mại, đã hỗ trợ nhiều thương nhân nước ngoài thành lập và vận hành văn phòng đại diện tại Việt Nam.",
        "Tư vấn điều kiện và phạm vi hoạt động: Hỗ trợ nhà đầu tư hiểu rõ điều kiện thành lập, phạm vi hoạt động của văn phòng đại diện và các quy định pháp luật liên quan.",
        "Thực hiện thủ tục pháp lý trọn gói: Hỗ trợ chuẩn bị hồ sơ và thực hiện thủ tục xin Giấy phép thành lập văn phòng đại diện của thương nhân nước ngoài tại Việt Nam theo quy định pháp luật.",
        "Tiết kiệm thời gian và hạn chế rủi ro pháp lý: PGU hỗ trợ chuẩn bị hồ sơ đầy đủ, đúng quy định, giúp quá trình xin cấp phép diễn ra thuận lợi và nhanh chóng.",
        "Hỗ trợ nhà đầu tư nước ngoài: Luật sư của PGU có khả năng làm việc bằng tiếng Anh, giúp quá trình trao đổi thông tin và thực hiện thủ tục pháp lý thuận lợi.",
        "Đồng hành trong quá trình hoạt động: PGU tiếp tục hỗ trợ doanh nghiệp trong các vấn đề pháp lý phát sinh như gia hạn giấy phép, thay đổi nội dung đăng ký và tuân thủ các quy định pháp luật trong quá trình hoạt động của văn phòng đại diện.",
      ],
    },

    lastPara: [
      "Với phương châm “Thấu hiểu - Trách nhiệm - Phụng sự”, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cam kết bảo mật tuyệt đối thông tin khách hàng, tư vấn minh bạch, chính xác và đồng hành cùng doanh nghiệp trong suốt quá trình hiện diện và hoạt động tại Việt Nam.",
      "Nếu Quý Doanh nghiệp đang có kế hoạch thành lập Văn phòng đại diện tại Việt Nam, hãy liên hệ với chúng tôi để được tư vấn chi tiết và xây dựng lộ trình pháp lý phù hợp, an toàn và hiệu quả.",
    ],
  },
  {
    id: "dieu-chinh-muc-tieu-quy-mo-du-an-dau-tu",
    label: "Điều chỉnh mục tiêu - Quy mô dự án đầu tư",
    tagline: "Đầu tư & Doanh nghiệp",
    img: quy_mo_du_an,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình triển khai, nhiều dự án đầu tư phát sinh nhu cầu thay đổi mục tiêu hoạt động, mở rộng hoặc thu hẹp quy mô, điều chỉnh công suất, diện tích sử dụng đất, tổng vốn đầu tư… Tuy nhiên, mọi thay đổi liên quan đến mục tiêu và quy mô dự án đều phải thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký đầu tư theo quy định pháp luật.",
      "Hiểu rõ tính chất quan trọng và tác động pháp lý của việc điều chỉnh dự án, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ tư vấn và thực hiện thủ tục điều chỉnh mục tiêu - quy mô dự án đầu tư nhanh chóng, chính xác và đúng quy định.",
    ],

    explains: [
      {
        name: "1. Các trường hợp cần điều chỉnh",
        intros: [
          "Doanh nghiệp phải thực hiện thủ tục điều chỉnh khi có một trong các thay đổi sau:",
        ],
        description: [
          "Thay đổi, bổ sung mục tiêu hoạt động của dự án",
          "Mở rộng hoặc thu hẹp quy mô sản xuất, kinh doanh",
          "Thay đổi công suất, sản lượng dự kiến",
          "Điều chỉnh diện tích đất, địa điểm thực hiện dự án",
          "Tăng hoặc giảm tổng vốn đầu tư liên quan đến thay đổi quy mô",
          "Việc không thực hiện điều chỉnh kịp thời có thể dẫn đến rủi ro xử phạt hành chính hoặc ảnh hưởng đến tính hợp pháp của hoạt động dự án.",
        ],
      },
      {
        name: "2. Phạm vi dịch vụ PGU cung cấp",
        description: [
          "Khi lựa chọn dịch vụ điều chỉnh mục tiêu hoặc quy mô dự án đầu tư tại PGU, khách hàng sẽ được hỗ trợ toàn diện từ khâu tư vấn chiến lược đến thực hiện thủ tục pháp lý và xử lý các vấn đề phát sinh trong quá trình làm việc với cơ quan nhà nước, cụ thể:",
        ],
        scopes: [
          {
            name: "Tư vấn chuyên sâu, phù hợp từng dự án",
            items: [
              "Đội ngũ luật sư và chuyên viên pháp lý của PGU phân tích toàn diện các yếu tố pháp lý liên quan đến việc điều chỉnh dự án, đề xuất phương án bổ sung mục tiêu hoặc thay đổi quy mô phù hợp với thực tế hoạt động, quy hoạch, điều kiện đầu tư và quy định pháp luật hiện hành.",
            ],
          },
          {
            name: "Đại diện thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký đầu tư",
            items: [
              "PGU chịu trách nhiệm soạn thảo đầy đủ hồ sơ, đại diện theo ủy quyền nộp hồ sơ, theo dõi tiến độ xử lý, làm việc và giải trình với cơ quan có thẩm quyền liên quan đến việc điều chỉnh Giấy chứng nhận đăng ký đầu tư.",
              "Thủ tục được thực hiện tại cơ quan đăng ký đầu tư có thẩm quyền như Sở Tài chính hoặc Ban Quản lý khu công nghiệp, khu chế xuất, khu kinh tế theo từng trường hợp cụ thể.",
            ],
          },
          {
            name: "Thực hiện điều chỉnh nội dung đăng ký doanh nghiệp",
            items: [
              "Trường hợp việc điều chỉnh dự án kéo theo thay đổi nội dung đăng ký doanh nghiệp (ví dụ: ngành nghề kinh doanh), PGU sẽ chuẩn bị hồ sơ và đại diện khách hàng thực hiện thủ tục tại Phòng Đăng ký kinh doanh - Sở Tài chính nơi doanh nghiệp đặt trụ sở.",
            ],
          },
          {
            name: "Rà soát hồ sơ và tư vấn tuân thủ",
            items: [
              "PGU hỗ trợ kiểm tra tổng thể hồ sơ pháp lý của dự án, đánh giá tình hình triển khai thực tế và tư vấn các vấn đề pháp lý cần lưu ý, đặc biệt là các nội dung có thể thuộc phạm vi thanh tra, kiểm tra của cơ quan quản lý nhà nước.",
            ],
          },
          {
            name: "Hỗ trợ làm việc với đoàn kiểm tra",
            items: [
              "Trong trường hợp cơ quan có thẩm quyền tiến hành kiểm tra tình hình thực hiện dự án, PGU đồng hành cùng doanh nghiệp trong việc chuẩn bị hồ sơ, tài liệu và giải trình các nội dung liên quan, nhằm đảm bảo quá trình làm việc diễn ra thuận lợi và đúng quy định.",
            ],
          },
          {
            name: "Hỗ trợ thực hiện nghĩa vụ báo cáo dự án đầu tư",
            items: [
              "Nếu nhà đầu tư chưa thực hiện hoặc thực hiện chưa đầy đủ chế độ báo cáo dự án theo quy định, PGU sẽ hỗ trợ hoàn thiện và nộp báo cáo theo yêu cầu của cơ quan quản lý đầu tư.",
            ],
          },
        ],
      },
    ],

    reasons: {
      title: "3. Lý do nên chọn PGU",
      items: [
        "Đội ngũ luật sư am hiểu pháp luật đầu tư: PGU có nhiều năm kinh nghiệm trong việc tư vấn và thực hiện thủ tục điều chỉnh dự án đầu tư cho các doanh nghiệp và nhà đầu tư nước ngoài tại Việt Nam.",
        "Đánh giá nhu cầu điều chỉnh dự án: Tư vấn và phân tích các vấn đề pháp lý liên quan đến việc điều chỉnh mục tiêu, quy mô, vốn đầu tư hoặc địa điểm thực hiện dự án theo quy định của pháp luật.",
        "Thực hiện thủ tục pháp lý trọn gói: Hỗ trợ chuẩn bị hồ sơ và thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký đầu tư (IRC) tại cơ quan có thẩm quyền.",
        "Giải pháp pháp lý phù hợp với từng dự án: Đề xuất phương án điều chỉnh dự án phù hợp với quy định pháp luật và định hướng phát triển của nhà đầu tư.",
        "Tiết kiệm thời gian và hạn chế rủi ro pháp lý: Chuẩn bị hồ sơ đầy đủ, đúng quy định, giúp quá trình điều chỉnh dự án diễn ra thuận lợi và nhanh chóng.",
        "Đồng hành trong quá trình triển khai dự án: PGU tiếp tục hỗ trợ nhà đầu tư trong các thủ tục pháp lý liên quan sau khi điều chỉnh dự án.",
      ],
    },

    lastPara: [
      "Với phương châm “Thấu hiểu - Trách nhiệm - Phụng sự”, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cam kết đồng hành cùng doanh nghiệp trong mọi giai đoạn của dự án đầu tư, từ thành lập đến điều chỉnh, mở rộng và tái cấu trúc hoạt động.",
      "Nếu Quý Doanh nghiệp đang có nhu cầu điều chỉnh mục tiêu hoặc quy mô dự án đầu tư, hãy liên hệ với chúng tôi để được tư vấn và xây dựng phương án pháp lý an toàn, hiệu quả và bền vững.",
    ],
  },
  {
    id: "thay-doi-dia-diem-thuc-hien-du-an-dau-tu",
    label: "Thay đổi địa điểm thực hiện dự án đầu tư",
    tagline: "Đầu tư & Doanh nghiệp",
    img: thay_doi_dia_diem_thuc_hien_du_an,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình hoạt động, doanh nghiệp có thể phát sinh nhu cầu chuyển địa điểm thực hiện dự án do mở rộng quy mô, thay đổi chiến lược kinh doanh, tối ưu chi phí hoặc điều chỉnh theo quy hoạch. Tuy nhiên, việc thay đổi địa điểm dự án đầu tư phải được cơ quan có thẩm quyền chấp thuận thông qua thủ tục điều chỉnh Giấy chứng nhận đăng ký đầu tư và có thể kèm theo điều chỉnh đăng ký doanh nghiệp.",
      "Hiểu rõ những yêu cầu pháp lý và rủi ro có thể phát sinh, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU Law Firm) cung cấp dịch vụ thay đổi địa điểm thực hiện dự án đầu tư trọn gói, đảm bảo đúng quy định và tiết kiệm thời gian cho doanh nghiệp.",
    ],

    explains: [
      {
        name: "1. Các trường hợp cần thực hiện thủ tục",
        intros: [
          "Dự án đầu tư nước ngoài phải tiến hành điều chỉnh địa điểm thực hiện khi:",
        ],
        description: [
          "Chuyển địa điểm dự án sang tỉnh/thành phố khác;",
          "Thay đổi địa chỉ trong cùng địa bàn hành chính;",
          "Chuyển dự án vào hoặc ra khỏi khu công nghiệp, khu chế xuất, khu kinh tế;",
          "Điều chỉnh diện tích đất, mặt bằng sử dụng cho dự án.",
        ],
        lastIntro: [
          "Việc thay đổi địa điểm khi chưa hoàn tất thủ tục pháp lý có thể dẫn đến xử phạt vi phạm hành chính hoặc ảnh hưởng đến tính hợp pháp của dự án.",
        ],
      },
      {
        name: "2. Phạm vi hỗ trợ khi thay đổi địa điểm thực hiện dự án",
        description: [
          "Khi doanh nghiệp thực hiện thủ tục chuyển địa điểm dự án đầu tư, PGU cung cấp dịch vụ đồng hành toàn diện từ giai đoạn tìm kiếm địa điểm đến khi hoàn tất thủ tục và ổn định hoạt động tại nơi mới, cụ thể:",
        ],
        scopes: [
          {
            name: "Hỗ trợ tìm kiếm địa điểm phù hợp",
            items: [
              "Dựa trên mạng lưới đối tác uy tín và kinh nghiệm thực tiễn trong lĩnh vực đầu tư - doanh nghiệp, PGU hỗ trợ khách hàng khảo sát và lựa chọn địa điểm đáp ứng điều kiện pháp lý, thuận lợi về vị trí, hạ tầng và tối ưu chi phí thuê hoặc nhận chuyển nhượng.",
            ],
          },
          {
            name: "Rà soát pháp lý và tư vấn chuyên sâu",
            items: [
              "PGU kiểm tra toàn bộ hồ sơ pháp lý của địa điểm dự kiến chuyển đến, bao gồm: Giấy chứng nhận quyền sử dụng đất, hồ sơ xây dựng, phòng cháy chữa cháy, môi trường (nếu thuộc diện bắt buộc), cũng như hồ sơ pháp lý của bên cho thuê hoặc chuyển nhượng (Giấy chứng nhận đăng ký doanh nghiệp, Giấy chứng nhận đăng ký đầu tư nếu có).",
              "Trên cơ sở đó, PGU đánh giá các điều kiện đã đáp ứng, các điểm còn thiếu và đề xuất phương án xử lý phù hợp quy định pháp luật.",
            ],
          },
          {
            name: "Hỗ trợ đàm phán hợp đồng",
            items: [
              "PGU đồng hành cùng doanh nghiệp trong quá trình thương lượng các điều khoản liên quan đến hợp đồng thuê đất, thuê văn phòng, nhà xưởng hoặc hợp đồng chuyển nhượng quyền sử dụng đất, nhằm đảm bảo tối đa quyền và lợi ích hợp pháp của nhà đầu tư.",
            ],
          },
          {
            name: "Soạn thảo hồ sơ và đại diện thực hiện thủ tục",
            items: [
              "PGU chuẩn bị đầy đủ hồ sơ điều chỉnh, hướng dẫn khách hàng cung cấp tài liệu cần thiết và đại diện theo ủy quyền nộp hồ sơ, làm việc, giải trình với cơ quan có thẩm quyền như Sở Tài chính hoặc Ban Quản lý khu công nghiệp, khu chế xuất, khu kinh tế về việc điều chỉnh Giấy chứng nhận đăng ký đầu tư và Giấy chứng nhận đăng ký doanh nghiệp (nếu có thay đổi địa chỉ trụ sở).",
            ],
          },
          {
            name: "Hỗ trợ làm việc với đoàn kiểm tra",
            items: [
              "Trong trường hợp cơ quan chức năng tiến hành kiểm tra thực tế tại địa điểm mới, PGU hỗ trợ chuẩn bị hồ sơ, tài liệu và phối hợp cùng doanh nghiệp làm việc hiệu quả với đoàn kiểm tra.",
            ],
          },
          {
            name: "Hỗ trợ thủ tục với cơ quan thuế",
            items: [
              "Nếu việc thay đổi địa chỉ trụ sở dẫn đến thay đổi cơ quan thuế quản lý, PGU hỗ trợ doanh nghiệp làm việc với cơ quan thuế tại địa điểm cũ và mới để thực hiện thủ tục chuyển quản lý thuế theo đúng quy định.",
            ],
          },
          {
            name: "Hỗ trợ khắc dấu và thông báo liên quan",
            items: [
              "Trường hợp thay đổi địa điểm đồng thời thay đổi thông tin trên con dấu, PGU hỗ trợ khắc dấu mới và thực hiện các thủ tục thông báo cần thiết theo quy định.",
            ],
          },
          {
            name: "Bàn giao kết quả và hỗ trợ sau dịch vụ",
            items: [
              "Sau khi hoàn tất thủ tục và nhận bản gốc Giấy chứng nhận đăng ký đầu tư, Giấy chứng nhận đăng ký doanh nghiệp điều chỉnh, PGU sẽ bàn giao đầy đủ cho khách hàng.",
              "Đồng thời, chúng tôi tiếp tục tư vấn các vấn đề pháp lý phát sinh trong quá trình hoạt động tại địa điểm mới.",
            ],
          },
        ],
      },
    ],

    reasons: {
      title: "3. Lý do nên chọn PGU",
      items: [
        "- Đội ngũ luật sư am hiểu pháp luật đầu tư: PGU có nhiều kinh nghiệm trong việc tư vấn và thực hiện thủ tục điều chỉnh địa điểm thực hiện dự án đầu tư cho các doanh nghiệp và nhà đầu tư nước ngoài tại Việt Nam.",
        "- Đánh giá điều kiện pháp lý của địa điểm mới: Rà soát quy hoạch, mục đích sử dụng đất và các điều kiện pháp lý liên quan đến địa điểm dự kiến chuyển đến.",
        "- Thực hiện thủ tục pháp lý trọn gói: Hỗ trợ chuẩn bị hồ sơ và thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký đầu tư (IRC) và các thủ tục pháp lý liên quan khi thay đổi địa điểm thực hiện dự án.",
        "- Tư vấn phương án triển khai phù hợp: Đề xuất giải pháp pháp lý phù hợp để việc thay đổi địa điểm dự án diễn ra đúng quy định và thuận lợi cho hoạt động đầu tư.",
        "- Tiết kiệm thời gian và hạn chế rủi ro pháp lý: Chuẩn bị hồ sơ đầy đủ, hạn chế sai sót trong quá trình làm việc với cơ quan nhà nước có thẩm quyền.",
        "- Đồng hành trong quá trình triển khai dự án: PGU tiếp tục hỗ trợ nhà đầu tư trong các thủ tục pháp lý phát sinh sau khi thay đổi địa điểm dự án để bảo đảm hoạt động đầu tư được thực hiện đúng quy định pháp luật.",
      ],
    },

    lastPara: [
      "Với kinh nghiệm thực tiễn và tinh thần đồng hành lâu dài, PGU cam kết mang đến giải pháp pháp lý an toàn, hiệu quả và phù hợp với định hướng phát triển của từng doanh nghiệp.",
    ],
  },
  {
    id: "thay-doi-tong-von-dau-tu-von-gop-thuc-hien-du-an",
    label: "Thay đổi tổng vốn đầu tư, vốn góp thực hiện dự án",
    tagline: "Đầu tư & Doanh nghiệp",
    img: thay_doi_von_dau_tu,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình triển khai dự án đầu tư tại Việt Nam, việc điều chỉnh tổng vốn đầu tư hoặc vốn góp của nhà đầu tư là nhu cầu phổ biến nhằm mở rộng quy mô, bổ sung nguồn lực tài chính hoặc tái cấu trúc phương án đầu tư. Tuy nhiên, đây là nội dung điều chỉnh quan trọng, tác động trực tiếp đến Giấy chứng nhận đăng ký đầu tư (IRC) và hồ sơ doanh nghiệp, đòi hỏi thực hiện đúng trình tự pháp luật.",
      "Dịch vụ của chúng tôi hỗ trợ nhà đầu tư thực hiện thủ tục điều chỉnh vốn nhanh chóng, đúng quy định, hạn chế rủi ro pháp lý và đảm bảo tiến độ dự án.",
    ],

    explains: [
      {
        name: "1. Các trường hợp cần điều chỉnh tổng vốn đầu tư và vốn góp",
        description: [
          "Tăng/giảm tổng vốn đầu tư (bao gồm vốn góp và vốn huy động): Khi nhu cầu thực tế phát sinh yêu cầu bổ sung nguồn vốn để mở rộng, triển khai dự án hoặc điều chỉnh giảm vốn nhằm tối ưu hóa hiệu quả sử dụng nguồn lực, nhà đầu tư phải thực hiện thủ tục điều chỉnh do nội dung này làm thay đổi thông tin trên Giấy chứng nhận đăng ký đầu tư (IRC).",
          "Thay đổi nhà đầu tư hoặc tỷ lệ góp vốn: Trường hợp có sự thay đổi về chủ thể đầu tư (thêm mới, rút lui, thay thế nhà đầu tư) hoặc thay đổi tỷ lệ sở hữu vốn góp, đặc biệt trong các giao dịch chuyển nhượng vốn cho nhà đầu tư nước ngoài, doanh nghiệp bắt buộc phải thực hiện thủ tục điều chỉnh dự án theo quy định.",
          "Góp vốn không đúng tiến độ cam kết: Khi nhà đầu tư không góp đủ vốn theo tiến độ đã đăng ký trong IRC, doanh nghiệp cần thực hiện thủ tục điều chỉnh giảm vốn đầu tư hoặc vốn góp xuống bằng mức vốn thực tế đã góp để đảm bảo tuân thủ pháp luật và tránh rủi ro xử phạt hành chính.",
          "Điều chỉnh quy mô, mục tiêu dự án gắn với thay đổi vốn: Việc tăng hoặc giảm vốn đầu tư có thể kéo theo thay đổi về quy mô hoạt động, công nghệ áp dụng hoặc mục tiêu dự án đã được phê duyệt. Trong trường hợp này, nhà đầu tư phải thực hiện đồng thời thủ tục điều chỉnh các nội dung liên quan của dự án đầu tư.",
          "Đối với dự án đầu tư công hoặc dự án sử dụng vốn nhà nước: Khi tổng mức đầu tư tăng so với dự toán ban đầu đã được cơ quan có thẩm quyền phê duyệt, chủ đầu tư phải thực hiện thủ tục điều chỉnh theo quy định về quản lý đầu tư công và quản lý vốn nhà nước.",
        ],
      },
      {
        name: "2. Phạm vi dịch vụ điều chỉnh vốn đầu tư và vốn góp thực hiện dự án",
        scopes: [
          {
            name: "Tư vấn quy định pháp luật và phương án điều chỉnh",
            items: [
              "- Khách hàng được đội ngũ Luật sư giàu kinh nghiệm của PGU tư vấn toàn diện các quy định pháp luật liên quan đến việc điều chỉnh Giấy chứng nhận đăng ký đầu tư (IRC) và Giấy chứng nhận đăng ký doanh nghiệp (ERC).",
              "- Chúng tôi phân tích tình trạng pháp lý hiện tại của dự án, đánh giá rủi ro và đề xuất phương án thay đổi vốn phù hợp, đảm bảo tính khả thi, hiệu quả và tuân thủ quy định pháp luật.",
            ],
          },
          {
            name: "Hướng dẫn chuẩn bị hồ sơ pháp lý",
            items: [
              "PGU hỗ trợ khách hàng chuẩn bị đầy đủ và đúng quy định các tài liệu cần thiết, bao gồm:",
              "- Hồ sơ pháp lý của nhà đầu tư;",
              "- Tài liệu chứng minh năng lực tài chính;",
              "- Tài liệu chứng minh việc góp vốn thực tế;",
              "- Báo cáo tình hình thực hiện dự án.",
              "Việc chuẩn bị hồ sơ chính xác ngay từ đầu giúp tăng khả năng được chấp thuận, tiết kiệm thời gian và hạn chế tối đa việc sửa đổi, bổ sung nhiều lần.",
            ],
          },
          {
            name: "Thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký đầu tư (IRC)",
            items: [
              "PGU đại diện khách hàng thực hiện toàn bộ thủ tục điều chỉnh IRC liên quan đến:",
              "- Thay đổi tổng vốn đầu tư;",
              "- Thay đổi vốn góp thực hiện dự án;",
              "- Điều chỉnh tiến độ góp vốn (nếu có).",
              "Phạm vi công việc bao gồm:",
              "- Soạn thảo và hoàn thiện hồ sơ;",
              "- Đại diện theo ủy quyền nộp và nhận kết quả;",
              "- Làm việc, giải trình với cơ quan có thẩm quyền;",
              "- Theo dõi và xử lý các yêu cầu phát sinh.",
              "Thủ tục được thực hiện tại Sở Tài chính hoặc Ban Quản lý Khu công nghiệp/Khu chế xuất/Khu kinh tế tùy theo địa điểm triển khai dự án.",
            ],
          },
          {
            name: "Thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký doanh nghiệp (ERC)",
            items: [
              "Trường hợp việc điều chỉnh vốn đầu tư làm thay đổi vốn điều lệ, PGU đồng thời thực hiện thủ tục điều chỉnh ERC, bao gồm:",
              "- Soạn thảo hồ sơ thay đổi vốn điều lệ;",
              "- Đại diện nộp hồ sơ tại Phòng Đăng ký kinh doanh;",
              "- Nhận kết quả và bàn giao hồ sơ hoàn chỉnh cho doanh nghiệp.",
              "Thủ tục được thực hiện tại Phòng Đăng ký kinh doanh - Sở Tài chính nơi doanh nghiệp đặt trụ sở chính.",
            ],
          },
          {
            name: "Hỗ trợ làm việc với cơ quan thanh tra",
            items: [
              "Trong trường hợp phát sinh kiểm tra, thanh tra liên quan đến việc góp vốn, chậm góp vốn hoặc điều chỉnh dự án, PGU:",
              "- Hỗ trợ doanh nghiệp chuẩn bị tài liệu, hồ sơ giải trình;",
              "- Tham gia làm việc cùng Thanh tra Sở Tài chính;",
              "- Tư vấn phương án xử lý nhằm hạn chế rủi ro xử phạt (nếu có).",
            ],
          },
          {
            name: "Hỗ trợ thực hiện nghĩa vụ báo cáo dự án đầu tư",
            items: [
              "Nếu nhà đầu tư chưa thực hiện đầy đủ nghĩa vụ báo cáo hoạt động đầu tư theo quy định, PGU sẽ:",
              "- Rà soát tình trạng tuân thủ;",
              "- Hỗ trợ lập và nộp báo cáo bổ sung theo yêu cầu của cơ quan quản lý;",
              "- Tư vấn thiết lập quy trình báo cáo định kỳ nhằm tránh vi phạm trong tương lai.",
            ],
          },
        ],
      },
    ],

    reasons: {
      title: "3. Lý do nên chọn PGU",
      items: [
        "- Chuyên gia trong lĩnh vực đầu tư: Đội ngũ luật sư của PGU có kinh nghiệm trong việc tư vấn điều chỉnh vốn đầu tư cho các dự án FDI, nắm vững quy định về tỷ lệ góp vốn, tiến độ góp vốn và các điều kiện pháp lý liên quan.",
        "- Đánh giá và tư vấn phương án phù hợp: PGU hỗ trợ nhà đầu tư phân tích nhu cầu tăng hoặc giảm vốn, tư vấn phương án điều chỉnh phù hợp với tình hình tài chính, mục tiêu dự án và quy định pháp luật hiện hành.",
        "- Thực hiện thủ tục nhanh chóng, đúng quy định: Chúng tôi hỗ trợ chuẩn bị hồ sơ, làm việc với cơ quan đăng ký đầu tư để thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký đầu tư, giúp tiết kiệm thời gian cho nhà đầu tư.",
        "- Hỗ trợ đồng bộ các thủ tục liên quan: Ngoài điều chỉnh vốn đầu tư, PGU còn hỗ trợ thực hiện các thủ tục liên quan như thay đổi vốn điều lệ doanh nghiệp, cập nhật thông tin đăng ký doanh nghiệp và các nghĩa vụ pháp lý khác.",
        "- Đồng hành pháp lý lâu dài: PGU sẵn sàng hỗ trợ nhà đầu tư trong các lần điều chỉnh tiếp theo của dự án, cũng như cung cấp dịch vụ tư vấn pháp lý thường xuyên trong quá trình hoạt động tại Việt Nam.",
      ],
    },

    lastPara: [
      "Với kinh nghiệm đồng hành cùng nhiều dự án FDI, PGU Law Firm cam kết cung cấp giải pháp pháp lý toàn diện, chuyên nghiệp và hiệu quả, giúp doanh nghiệp an tâm trong mọi giai đoạn điều chỉnh và phát triển dự án.",
    ],
  },
  {
    id: "gia-han-tien-do-gop-von-tien-do-thuc-hien-du-an",
    label: "Gia hạn tiến độ góp vốn - Tiến độ thực hiện dự án",
    tagline: "Đầu tư & Doanh nghiệp",
    img: gia_han_tien_do_gop_von,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình triển khai dự án đầu tư, không ít trường hợp nhà đầu tư không thể góp đủ vốn hoặc hoàn thành các hạng mục đúng theo tiến độ đã đăng ký do thay đổi thị trường, khó khăn tài chính, chậm bàn giao mặt bằng hoặc các yếu tố khách quan khác. Khi đó, doanh nghiệp cần thực hiện thủ tục gia hạn tiến độ góp vốn và/hoặc tiến độ thực hiện dự án để bảo đảm tuân thủ quy định pháp luật và tránh rủi ro xử phạt.",
      "Việc gia hạn này làm thay đổi nội dung trên Giấy chứng nhận đăng ký đầu tư (IRC), do đó bắt buộc phải được cơ quan có thẩm quyền chấp thuận trước khi tiếp tục triển khai.",
    ],

    explains: [
      {
        name: "1. Trường hợp cần thực hiện gia hạn",
        description: [
          "Theo quy định của Luật Doanh nghiệp năm 2020, kể từ thời điểm được cấp Giấy chứng nhận đăng ký doanh nghiệp và Giấy chứng nhận đăng ký đầu tư, nhà đầu tư có nghĩa vụ góp đủ phần vốn đã đăng ký trong thời hạn 90 ngày hoặc theo đúng tiến độ góp vốn được ghi nhận trong Giấy chứng nhận đăng ký đầu tư.",
          "Trong trường hợp đến gần thời hạn cam kết mà nhà đầu tư vẫn chưa hoàn tất việc góp vốn hoặc chưa góp đủ theo đăng ký, doanh nghiệp phải thực hiện thủ tục điều chỉnh, gia hạn tiến độ góp vốn trước khi thời hạn kết thúc. Việc chủ động thực hiện thủ tục gia hạn đúng thời điểm không chỉ giúp doanh nghiệp tuân thủ quy định pháp luật, tránh nguy cơ bị xử phạt vi phạm hành chính, mà còn bảo đảm hoạt động đầu tư được duy trì liên tục, ổn định và hợp pháp.",
        ],
      },
      {
        name: "2. Phạm vi dịch vụ PGU cung cấp",
        description: [
          "Khi khách hàng lựa chọn dịch vụ gia hạn tiến độ góp vốn, PGU sẽ thay mặt doanh nghiệp triển khai toàn bộ các công việc cần thiết nhằm bảo đảm thủ tục được thực hiện đúng quy định và đúng thời điểm.",
        ],
        scopes: [
          {
            name: "Tư vấn pháp lý chuyên sâu",
            items: [
              "PGU rà soát hồ sơ dự án, đánh giá tình trạng góp vốn thực tế và tư vấn chi tiết các quy định liên quan đến việc điều chỉnh Giấy chứng nhận đăng ký đầu tư, đặc biệt là nội dung gia hạn tiến độ góp vốn.",
              "Đồng thời, đề xuất phương án xử lý phù hợp nhằm hạn chế rủi ro pháp lý cho nhà đầu tư.",
            ],
          },
          {
            name: "Soạn thảo và thực hiện thủ tục điều chỉnh",
            items: [
              "Chuẩn bị toàn bộ hồ sơ cần thiết; đại diện theo ủy quyền nộp hồ sơ, theo dõi quá trình xử lý và nhận kết quả điều chỉnh gia hạn tiến độ góp vốn tại Ban Quản lý Khu công nghiệp, Ban Quản lý Khu kinh tế hoặc Sở Tài chính nơi doanh nghiệp thực hiện dự án.",
            ],
          },
          {
            name: "Đại diện làm việc với cơ quan thanh tra (nếu có)",
            items: [
              "Trường hợp việc gia hạn được thực hiện sau khi đã quá thời hạn góp vốn cam kết, PGU hỗ trợ chuẩn bị hồ sơ giải trình và trực tiếp tham gia làm việc với Thanh tra Sở Tài chính để bảo vệ quyền và lợi ích hợp pháp của doanh nghiệp.",
            ],
          },
          {
            name: "Hỗ trợ hoàn thiện nghĩa vụ báo cáo đầu tư",
            items: [
              "Rà soát tình trạng thực hiện báo cáo dự án; hỗ trợ lập và nộp bổ sung các báo cáo theo yêu cầu của cơ quan quản lý đầu tư, đảm bảo doanh nghiệp tuân thủ đầy đủ quy định pháp luật.",
            ],
          },
        ],
      },
    ],

    reasons: {
      title: "3. Lý do nhà đầu tư nên chọn PGU",
      items: [
        "- Chuyên gia trong lĩnh vực đầu tư: Đội ngũ luật sư của PGU có kinh nghiệm tư vấn các quy định pháp luật liên quan đến tiến độ góp vốn và tiến độ thực hiện dự án, giúp nhà đầu tư thực hiện việc gia hạn đúng quy định pháp luật.",
        "- Đánh giá tình trạng dự án và tư vấn phương án phù hợp: PGU hỗ trợ rà soát tình hình thực hiện dự án, tiến độ góp vốn và các điều kiện pháp lý liên quan để tư vấn phương án gia hạn phù hợp với quy định của cơ quan quản lý đầu tư.",
        "- Chuẩn bị hồ sơ và thực hiện thủ tục nhanh chóng: Chúng tôi hỗ trợ soạn thảo hồ sơ, giải trình lý do gia hạn và làm việc với cơ quan đăng ký đầu tư để thực hiện thủ tục điều chỉnh tiến độ dự án một cách hiệu quả.",
        "- Hạn chế rủi ro pháp lý cho nhà đầu tư: Việc gia hạn tiến độ nếu không thực hiện đúng quy định có thể dẫn đến xử phạt hoặc bị xem xét chấm dứt dự án. PGU giúp nhà đầu tư thực hiện thủ tục đúng quy định, giảm thiểu rủi ro pháp lý.",
        "- Đồng hành pháp lý trong suốt quá trình triển khai dự án: PGU sẵn sàng hỗ trợ nhà đầu tư trong các vấn đề pháp lý phát sinh trong quá trình thực hiện dự án tại Việt Nam, từ điều chỉnh dự án đến tư vấn pháp lý thường xuyên.",
      ],
    },

    lastPara: [
      "Với kinh nghiệm thực tiễn trong lĩnh vực đầu tư và doanh nghiệp, PGU cam kết đồng hành cùng nhà đầu tư, cung cấp giải pháp pháp lý kịp thời, chặt chẽ và hiệu quả trong suốt quá trình gia hạn và triển khai dự án.",
    ],
  },
  {
    id: "thay-doi-nha-dau-tu-thuc-hien-du-an",
    label: "Thay đổi nhà đầu tư thực hiện dự án",
    tagline: "Đầu tư & M&A",
    img: thay_doi_nha_dau_tu,
    color: "#A8171C",

    descriptions: [
      "Thay đổi nhà đầu tư thực hiện dự án là một nội dung điều chỉnh quan trọng trong quá trình triển khai hoạt động đầu tư. Việc thay đổi này có thể phát sinh từ nhu cầu chuyển nhượng vốn, tái cấu trúc doanh nghiệp, hoạt động mua bán - sáp nhập (M&A) hoặc các sự kiện pháp lý khác làm thay đổi chủ thể thực hiện dự án.",
      "Khi có sự thay đổi về nhà đầu tư, doanh nghiệp bắt buộc phải thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký đầu tư để cập nhật thông tin chủ thể thực hiện dự án theo đúng quy định pháp luật.",
    ],

    explains: [
      {
        name: "1. Trường hợp thay đổi nhà đầu tư thực hiện dự án",
        description: [
          "Chuyển nhượng toàn bộ dự án đầu tư: Nhà đầu tư hiện hữu chuyển giao toàn bộ quyền, lợi ích và nghĩa vụ phát sinh từ dự án cho một chủ thể khác. Sau khi hoàn tất thủ tục, nhà đầu tư nhận chuyển nhượng sẽ kế thừa toàn bộ tư cách và trách nhiệm đối với dự án theo quy định pháp luật.",
          "Chuyển nhượng một phần dự án hoặc phần vốn góp: Trường hợp nhà đầu tư chuyển nhượng một phần quyền sở hữu hoặc phần vốn góp trong dự án, dẫn đến việc xuất hiện thêm nhà đầu tư mới cùng tham gia thực hiện dự án. Việc này làm thay đổi cơ cấu sở hữu và cần thực hiện thủ tục điều chỉnh tương ứng.",
          "Thay đổi nhà đầu tư do hoạt động mua bán, sáp nhập, hợp nhất doanh nghiệp: Khi nhà đầu tư là tổ chức thực hiện giao dịch M&A như mua bán, sáp nhập hoặc hợp nhất với doanh nghiệp khác, chủ thể pháp lý mới hình thành hoặc tiếp nhận sẽ trở thành nhà đầu tư kế thừa quyền và nghĩa vụ liên quan đến dự án.",
          "Chuyển giao dự án theo hình thức thừa kế: Trong trường hợp nhà đầu tư là cá nhân qua đời, quyền và nghĩa vụ đối với dự án được chuyển giao cho người thừa kế hợp pháp theo quy định của pháp luật dân sự, đồng thời phải thực hiện thủ tục điều chỉnh thông tin nhà đầu tư theo quy định pháp luật về đầu tư.",
        ],
      },
      {
        name: "2. Phạm vi dịch vụ cung cấp",
        description: [
          "Dịch vụ thay đổi Nhà đầu tư trên Giấy chứng nhận đăng ký đầu tư của PGU được xây dựng nhằm hỗ trợ khách hàng toàn diện từ khâu chuẩn bị, thực hiện thủ tục đến giai đoạn hoàn tất giao dịch, bảo đảm quá trình chuyển nhượng diễn ra an toàn, đúng pháp luật và hiệu quả. Cụ thể, PGU sẽ triển khai các công việc sau:",
        ],
        scopes: [
          {
            name: "Rà soát và thẩm định hồ sơ",
            items: [
              "- Chúng tôi tiến hành kiểm tra chi tiết tình trạng pháp lý của doanh nghiệp và dự án, bao gồm hồ sơ đầu tư, tình hình tài chính, nghĩa vụ góp vốn, cũng như các quyền và nghĩa vụ liên quan đến phần vốn hoặc phần dự án dự kiến chuyển nhượng.",
              "- Việc thẩm định kỹ lưỡng giúp phát hiện sớm rủi ro và bảo đảm tính minh bạch của giao dịch.",
            ],
          },
          {
            name: "Tư vấn cấu trúc và phương án chuyển nhượng",
            items: [
              "- Trên cơ sở kết quả rà soát, PGU đề xuất phương án phù hợp với mục tiêu của khách hàng, có thể là chuyển nhượng toàn bộ dự án, chuyển nhượng một phần dự án, chuyển nhượng vốn góp hoặc cổ phần.",
              "- Chúng tôi đồng thời tư vấn về điều kiện pháp lý áp dụng đối với nhà đầu tư nhận chuyển nhượng, đặc biệt trong trường hợp có yếu tố nước ngoài.",
            ],
          },
          {
            name: "Soạn thảo và hoàn thiện hồ sơ pháp lý",
            items: [
              "- PGU chuẩn bị đầy đủ các tài liệu phục vụ giao dịch và thủ tục hành chính, bao gồm hợp đồng chuyển nhượng, biên bản họp, quyết định của chủ sở hữu/thành viên/cổ đông, điều lệ sửa đổi (nếu có), cùng các biểu mẫu đăng ký thay đổi theo quy định của pháp luật đầu tư và doanh nghiệp.",
            ],
          },
          {
            name: "Đại diện thực hiện thủ tục hành chính",
            items: [
              "- Theo ủy quyền, PGU thay mặt khách hàng nộp hồ sơ và làm việc với cơ quan có thẩm quyền để điều chỉnh thông tin nhà đầu tư trên Giấy chứng nhận đăng ký đầu tư.",
              "- Thủ tục được thực hiện tại Sở Tài chính hoặc Ban Quản lý Khu công nghiệp, Khu kinh tế, Khu công nghệ cao tùy theo địa điểm dự án.",
              "- Trong trường hợp giao dịch là chuyển nhượng vốn, doanh nghiệp phải hoàn tất thủ tục thay đổi chủ sở hữu, thành viên hoặc cổ đông trên Giấy chứng nhận đăng ký doanh nghiệp trước khi thực hiện điều chỉnh thông tin nhà đầu tư trên Giấy chứng nhận đăng ký đầu tư.",
              "- PGU sẽ đồng thời triển khai các thủ tục này để bảo đảm tính đồng bộ và chính xác.",
            ],
          },
          {
            name: "Hỗ trợ cập nhật thông tin sau khi hoàn tất thủ tục",
            items: [
              "Sau khi hoàn tất việc điều chỉnh, chúng tôi hỗ trợ khách hàng thực hiện các bước cập nhật thông tin tại ngân hàng và các cơ quan, tổ chức liên quan (nếu cần thiết), bảo đảm hoạt động của doanh nghiệp không bị gián đoạn.",
            ],
          },
          {
            name: "Tư vấn và xử lý vấn đề phát sinh sau giao dịch",
            items: [
              "PGU tiếp tục đồng hành cùng khách hàng trong việc giải quyết các vấn đề phát sinh sau chuyển nhượng, bao gồm nghĩa vụ thuế liên quan đến giao dịch chuyển nhượng vốn hoặc các tranh chấp nội bộ (nếu có).",
            ],
          },
        ],
      },
    ],

    reasons: {
      title: "3. Vì sao nhà đầu tư nên chọn PGU",
      items: [
        "- Kinh nghiệm tư vấn chuyển nhượng dự án đầu tư: PGU có đội ngũ luật sư am hiểu quy định pháp luật về đầu tư, doanh nghiệp và chuyển nhượng dự án, hỗ trợ nhà đầu tư thực hiện thủ tục thay đổi nhà đầu tư đúng quy định.",
        "- Đánh giá điều kiện pháp lý của việc chuyển nhượng dự án: Chúng tôi hỗ trợ rà soát hồ sơ pháp lý của dự án, điều kiện chuyển nhượng và các nghĩa vụ liên quan nhằm đảm bảo việc thay đổi nhà đầu tư được thực hiện hợp pháp.",
        "- Chuẩn bị hồ sơ và thực hiện thủ tục nhanh chóng: PGU hỗ trợ soạn thảo hồ sơ, hợp đồng chuyển nhượng và thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký đầu tư tại cơ quan có thẩm quyền.",
        "- Hạn chế rủi ro pháp lý trong quá trình chuyển nhượng: Việc thay đổi nhà đầu tư có thể phát sinh nhiều vấn đề pháp lý liên quan đến nghĩa vụ tài chính, quyền và nghĩa vụ của các bên. PGU giúp nhà đầu tư nhận diện và kiểm soát các rủi ro này.",
        "- Đồng hành pháp lý lâu dài với nhà đầu tư: PGU không chỉ hỗ trợ thủ tục thay đổi nhà đầu tư mà còn sẵn sàng tư vấn các vấn đề pháp lý phát sinh trong quá trình triển khai và vận hành dự án tại Việt Nam.",
      ],
    },

    lastPara: [
      "Việc thay đổi nhà đầu tư thực hiện dự án là một bước chuyển quan trọng, ảnh hưởng trực tiếp đến quyền, nghĩa vụ và định hướng phát triển lâu dài của dự án. Do đó, mọi thủ tục cần được thực hiện đúng trình tự pháp luật, đồng bộ giữa hồ sơ đầu tư và hồ sơ doanh nghiệp để bảo đảm tính hợp pháp và liên tục trong hoạt động kinh doanh.",
      "Với kinh nghiệm thực tiễn trong lĩnh vực đầu tư và M&A, PGU cam kết đồng hành cùng khách hàng trong suốt quá trình chuyển giao, cung cấp giải pháp pháp lý chặt chẽ, minh bạch và hiệu quả, giúp giao dịch được hoàn tất an toàn và tối ưu lợi ích cho các bên liên quan.",
    ],
  },
  {
    id: "cap-nhat-thong-tin-nha-dau-tu",
    label: "Cập nhật thông tin nhà đầu tư",
    tagline: "Đầu tư",
    img: cap_nhat_thong_tin,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình hoạt động đầu tư tại Việt Nam, khi có sự thay đổi liên quan đến thông tin pháp lý của nhà đầu tư, doanh nghiệp bắt buộc phải thực hiện thủ tục cập nhật trên Giấy chứng nhận đăng ký đầu tư nhằm bảo đảm tính chính xác, minh bạch và phù hợp với hồ sơ thực tế. Việc chậm điều chỉnh có thể gây vướng mắc trong giao dịch ngân hàng, kê khai thuế, chuyển lợi nhuận hoặc thực hiện các thủ tục hành chính khác.",
      "Với kinh nghiệm tư vấn chuyên sâu trong lĩnh vực đầu tư nước ngoài, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ cập nhật thông tin nhà đầu tư nhanh chóng, đúng quy định và hạn chế tối đa rủi ro phát sinh.",
    ],

    explains: [
      {
        name: "1. Một số trường hợp cần cập nhật thông tin Nhà đầu tư trên Giấy chứng nhận đăng ký đầu tư",
        scopes: [
          {
            name: "Đối với Nhà đầu tư là cá nhân",
            items: [
              "- Điều chỉnh thông tin nhân thân: Khi có sự thay đổi về họ và tên, quốc tịch, số hộ chiếu hoặc giấy tờ pháp lý cá nhân khác so với thông tin đã đăng ký trước đó.",
              "- Thay đổi địa chỉ cư trú hoặc liên hệ: Trường hợp nhà đầu tư thay đổi địa chỉ thường trú, nơi ở hiện tại hoặc địa chỉ liên lạc, doanh nghiệp cần thực hiện thủ tục cập nhật để bảo đảm thông tin trên Giấy chứng nhận đăng ký đầu tư chính xác và đồng nhất.",
            ],
          },
          {
            name: "Đối với Nhà đầu tư là tổ chức",
            items: [
              "- Điều chỉnh thông tin pháp lý của doanh nghiệp đầu tư: Bao gồm việc thay đổi tên doanh nghiệp, địa chỉ trụ sở chính, số hoặc nội dung Giấy chứng nhận đăng ký doanh nghiệp, hoặc các thông tin pháp lý khác của tổ chức đầu tư theo giấy phép mới được cấp.",
              "- Thay đổi người đại diện theo pháp luật: Khi tổ chức đầu tư thay đổi người đại diện theo pháp luật, thông tin này cần được cập nhật trên Giấy chứng nhận đăng ký đầu tư để bảo đảm tính thống nhất trong hồ sơ quản lý.",
              "- Thay đổi do tái cấu trúc doanh nghiệp: Trong trường hợp tổ chức đầu tư thực hiện sáp nhập, hợp nhất, chia, tách hoặc chuyển đổi loại hình doanh nghiệp, dẫn đến thay đổi thông tin pháp lý của chủ thể đầu tư, doanh nghiệp phải thực hiện thủ tục điều chỉnh tương ứng trên Giấy chứng nhận đăng ký đầu tư.",
            ],
          },
        ],
      },
      {
        name: "2. Phạm vi dịch vụ PGU cung cấp",
        description: [
          "Khi lựa chọn dịch vụ thay đổi Nhà đầu tư tại PGU, khách hàng sẽ được hỗ trợ trọn gói từ khâu tư vấn ban đầu đến khi hoàn tất toàn bộ thủ tục điều chỉnh và các công việc sau đó.",
        ],
        scopes: [
          {
            name: "Tư vấn và rà soát pháp lý",
            items: [
              "- Đội ngũ Luật sư và chuyên viên của PGU tiến hành đánh giá hồ sơ hiện tại của doanh nghiệp và dự án, phân tích quy định pháp luật liên quan đến nội dung thay đổi.",
              "- Trên cơ sở đó, chúng tôi xác định chính xác phạm vi điều chỉnh cần thực hiện, bảo đảm phương án xử lý phù hợp với nhu cầu thực tế và tuân thủ đúng quy định.",
            ],
          },
          {
            name: "Chuẩn bị và hoàn thiện hồ sơ",
            items: [
              "- PGU thay mặt khách hàng soạn thảo toàn bộ tài liệu phục vụ việc điều chỉnh thông tin Nhà đầu tư trên Giấy chứng nhận đăng ký đầu tư, bảo đảm tính đầy đủ, thống nhất và chính xác.",
              "- Hồ sơ được chuẩn bị tối ưu để nhà đầu tư chỉ cần ký một lần, giúp tiết kiệm thời gian và hạn chế phát sinh thủ tục bổ sung.",
            ],
          },
          {
            name: "Đại diện thực hiện thủ tục tại cơ quan nhà nước",
            items: [
              "- Theo ủy quyền, PGU trực tiếp nộp hồ sơ tại cơ quan đăng ký đầu tư có thẩm quyền, theo dõi tiến độ xử lý và làm việc với cơ quan chức năng để giải trình, bổ sung tài liệu khi cần thiết.",
              "- Trong trường hợp thông tin Nhà đầu tư đồng thời được ghi nhận trên Giấy chứng nhận đăng ký doanh nghiệp, chúng tôi sẽ thực hiện thủ tục điều chỉnh đăng ký doanh nghiệp trước, sau đó tiến hành điều chỉnh Giấy chứng nhận đăng ký đầu tư nhằm bảo đảm tính đồng bộ.",
            ],
          },
          {
            name: "Nhận và bàn giao kết quả",
            items: [
              "- Sau khi hồ sơ được chấp thuận, PGU đại diện nhận kết quả từ cơ quan có thẩm quyền và bàn giao cho khách hàng các giấy tờ đã được điều chỉnh, bao gồm Giấy chứng nhận đăng ký doanh nghiệp và/hoặc Giấy chứng nhận đăng ký đầu tư.",
            ],
          },
          {
            name: "Hỗ trợ các thủ tục liên quan sau điều chỉnh",
            items: [
              "- PGU tiếp tục đồng hành cùng doanh nghiệp trong việc cập nhật thông tin với ngân hàng, cơ quan thuế và các đối tác có liên quan, bảo đảm hoạt động kinh doanh được duy trì ổn định và đúng quy định.",
            ],
          },
        ],
      },
    ],

    reasons: {
      title: "3. Vì sao nhà đầu tư nên chọn PGU",
      items: [
        "- Chuyên gia trong lĩnh vực đầu tư: PGU có đội ngũ luật sư am hiểu quy định pháp luật liên quan đến việc cập nhật thông tin nhà đầu tư trong Giấy chứng nhận đăng ký đầu tư và hồ sơ doanh nghiệp.",
        "- Rà soát và tư vấn phương án thực hiện phù hợp: Chúng tôi hỗ trợ nhà đầu tư rà soát các thông tin cần cập nhật như thay đổi tên, địa chỉ, giấy tờ pháp lý của nhà đầu tư để đảm bảo hồ sơ phù hợp với quy định pháp luật.",
        "- Chuẩn bị hồ sơ và thực hiện thủ tục nhanh chóng: PGU hỗ trợ soạn thảo hồ sơ, thực hiện thủ tục điều chỉnh thông tin nhà đầu tư tại cơ quan đăng ký đầu tư, giúp tiết kiệm thời gian cho nhà đầu tư.",
        "- Đảm bảo tính chính xác và hạn chế rủi ro pháp lý: Việc cập nhật thông tin kịp thời giúp bảo đảm tính thống nhất của hồ sơ pháp lý dự án và tránh các rủi ro trong quá trình hoạt động đầu tư.",
        "- Đồng hành pháp lý trong suốt quá trình đầu tư: PGU sẵn sàng hỗ trợ nhà đầu tư xử lý các thủ tục pháp lý phát sinh và cung cấp dịch vụ tư vấn pháp lý thường xuyên trong quá trình hoạt động tại Việt Nam.",
      ],
    },

    lastPara: [
      "Việc cập nhật thông tin nhà đầu tư kịp thời và chính xác không chỉ bảo đảm tuân thủ quy định pháp luật mà còn tạo nền tảng pháp lý minh bạch cho toàn bộ hoạt động của dự án. Sự đồng bộ giữa hồ sơ đầu tư và hồ sơ doanh nghiệp sẽ giúp doanh nghiệp thuận lợi trong giao dịch với ngân hàng, cơ quan thuế và các đối tác liên quan.",
      "Với kinh nghiệm thực tiễn trong lĩnh vực đầu tư và doanh nghiệp, PGU cam kết đồng hành cùng khách hàng trong từng bước điều chỉnh, bảo đảm thủ tục được thực hiện nhanh chóng, đúng quy định và hạn chế tối đa rủi ro phát sinh.",
    ],
  },
  {
    id: "gia-han-thoi-gian-thue-xuong",
    label: "Gia hạn thời gian thuê xưởng",
    tagline: "Đầu tư & Bất động sản công nghiệp",
    img: gian_han_thoi_gian_thue_xuong,
    color: "#A8171C",
    descriptions: [
      "Trong quá trình hoạt động sản xuất - kinh doanh, khi hợp đồng thuê xưởng sắp hết hạn nhưng doanh nghiệp vẫn có nhu cầu tiếp tục sử dụng địa điểm hiện tại, việc gia hạn thời gian thuê xưởng cần được thực hiện kịp thời và đúng quy định pháp luật. Nếu không xử lý đúng cách, doanh nghiệp có thể gặp rủi ro về hiệu lực hợp đồng, tiến độ dự án đầu tư hoặc các nghĩa vụ pháp lý liên quan.",
      "Với kinh nghiệm tư vấn pháp lý trong lĩnh vực đầu tư, doanh nghiệp và bất động sản công nghiệp, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ gia hạn thời gian thuê xưởng trọn gói, đảm bảo nhanh chóng - chặt chẽ - đúng quy định.",
    ],

    explains: [
      {
        name: "Khi lựa chọn dịch vụ gia hạn thời gian thuê xưởng tại PGU, Quý khách hàng sẽ được hỗ trợ trọn gói và đồng bộ các nội dung sau:",
        description: [
          "Tư vấn pháp lý chuyên sâu: Phân tích điều kiện gia hạn, thời hạn thuê, quyền và nghĩa vụ của các bên; đồng thời làm rõ các quy định pháp luật liên quan để đảm bảo việc gia hạn được thực hiện đúng quy định.",
          "Rà soát và hoàn thiện hợp đồng: Kiểm tra toàn bộ nội dung hợp đồng thuê hiện tại; chỉnh sửa, bổ sung hoặc soạn thảo phụ lục/hợp đồng mới phù hợp với quy định pháp luật và thực tế hoạt động của doanh nghiệp.",
          "Đại diện đàm phán và ký kết: Thay mặt khách hàng làm việc với chủ đầu tư khu công nghiệp hoặc bên cho thuê để thương lượng điều khoản gia hạn và hỗ trợ ký kết văn bản liên quan.",
          "Chuẩn bị và nộp hồ sơ gia hạn: Soạn thảo đầy đủ hồ sơ đề nghị gia hạn thời gian thuê xưởng và thực hiện thủ tục nộp tại cơ quan có thẩm quyền như Sở Tài chính hoặc Ban Quản lý khu công nghiệp (tùy từng trường hợp cụ thể).",
          "Theo dõi và xử lý hồ sơ: Chủ động theo dõi tiến độ giải quyết; làm việc, giải trình và bổ sung tài liệu theo yêu cầu của cơ quan quản lý đầu tư và các cơ quan chuyên môn liên quan.",
          "Nhận và bàn giao kết quả: Đại diện nhận văn bản chấp thuận gia hạn và bàn giao đầy đủ hồ sơ cho khách hàng.",
          "Hỗ trợ sau gia hạn: Tư vấn các nghĩa vụ phát sinh sau khi gia hạn như thuế, phí, cũng như các thủ tục hành chính liên quan khác (nếu có).",
        ],
      },
    ],

    reasons: {
      title: "Vì sao nhà đầu tư nên chọn PGU",
      items: [
        "- Am hiểu quy định pháp luật về đầu tư và thuê đất, nhà xưởng: PGU có đội ngũ luật sư giàu kinh nghiệm trong việc tư vấn các vấn đề pháp lý liên quan đến việc gia hạn thời gian thuê nhà xưởng, đặc biệt trong các khu công nghiệp và khu chế xuất.",
        "- Rà soát điều kiện pháp lý của hợp đồng thuê: Chúng tôi hỗ trợ kiểm tra các điều khoản hợp đồng thuê, thời hạn sử dụng đất, quy định của khu công nghiệp và các điều kiện pháp lý liên quan trước khi thực hiện gia hạn.",
        "- Hỗ trợ đàm phán và chuẩn bị hồ sơ pháp lý: PGU hỗ trợ nhà đầu tư trong quá trình làm việc với bên cho thuê, đồng thời chuẩn bị hồ sơ và thực hiện các thủ tục pháp lý cần thiết để gia hạn thời gian thuê xưởng.",
        "- Thực hiện thủ tục nhanh chóng, đúng quy định: Chúng tôi hỗ trợ nhà đầu tư hoàn thiện hồ sơ và thực hiện các thủ tục điều chỉnh liên quan đến dự án đầu tư (nếu có), giúp tiết kiệm thời gian và công sức.",
        "- Đồng hành pháp lý lâu dài: PGU luôn sẵn sàng hỗ trợ nhà đầu tư trong các vấn đề pháp lý phát sinh trong quá trình hoạt động và mở rộng sản xuất tại Việt Nam.",
      ],
    },

    lastPara: [
      "Với phương châm “Thấu hiểu - Trách nhiệm - Phụng sự”, PGU cam kết đồng hành cùng doanh nghiệp trong toàn bộ quá trình gia hạn thời gian thuê xưởng, đảm bảo thủ tục được thực hiện nhanh chóng, đúng quy định pháp luật và tối ưu quyền lợi cho khách hàng.",
      "Chúng tôi tin rằng một nền tảng pháp lý vững chắc chính là tiền đề quan trọng cho sự phát triển bền vững và lâu dài của doanh nghiệp.",
    ],
  },
  {
    id: "gia-han-thoi-gian-hoat-dong-du-an",
    label: "Gia hạn thời gian hoạt động dự án",
    tagline: "Đầu tư",
    img: thay_doi_thoi_gian_thuc_hien_du_an,
    color: "#A8171C",

    descriptions: [
      "Theo quy định pháp luật về đầu tư, mỗi dự án đều có thời hạn hoạt động được ghi nhận trên Giấy chứng nhận đăng ký đầu tư. Khi thời hạn sắp hết mà nhà đầu tư vẫn muốn tiếp tục triển khai, việc thực hiện thủ tục gia hạn là bắt buộc nhằm bảo đảm tính pháp lý và duy trì hoạt động ổn định. Thủ tục này đòi hỏi dự án phải đáp ứng các điều kiện về tiến độ, nghĩa vụ tài chính, đất đai, quy hoạch và các quy định chuyên ngành liên quan.",
      "Với kinh nghiệm tư vấn chuyên sâu trong lĩnh vực đầu tư và doanh nghiệp, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ gia hạn thời gian hoạt động dự án trọn gói, đảm bảo thực hiện đúng quy định, đúng thời hạn và hạn chế tối đa rủi ro pháp lý cho nhà đầu tư.",
    ],

    explains: [
      {
        name: "1. Phạm vi dịch vụ cung cấp",
        description: [
          "Khi sử dụng dịch vụ gia hạn thời gian hoạt động dự án tại PGU Law Firm, khách hàng sẽ được hỗ trợ đầy đủ các nội dung sau:",
        ],
        scopes: [
          {
            name: "Tư vấn điều kiện và thủ tục gia hạn",
            items: [
              "Tư vấn điều kiện và thủ tục gia hạn: PGU đánh giá khả năng được gia hạn của dự án theo quy định pháp luật hiện hành; phân tích các điều kiện cần đáp ứng, thời hạn gia hạn tối đa và xây dựng lộ trình thực hiện phù hợp. Đồng thời, chúng tôi tư vấn toàn diện các vấn đề pháp lý liên quan có thể phát sinh trong quá trình xin gia hạn.",
            ],
          },
          {
            name: "Chuẩn bị và hoàn thiện hồ sơ",
            items: [
              "Chuẩn bị và hoàn thiện hồ sơ: Soạn thảo đầy đủ bộ hồ sơ đề nghị gia hạn, bao gồm: văn bản đề nghị điều chỉnh dự án, báo cáo tình hình triển khai dự án, quyết định và biên bản họp của nhà đầu tư (nếu có), văn bản giải trình cùng các tài liệu pháp lý kèm theo theo đúng yêu cầu của cơ quan có thẩm quyền.",
            ],
          },
          {
            name: "Đại diện thực hiện thủ tục hành chính",
            items: [
              "Thay mặt khách hàng nộp hồ sơ tại cơ quan đăng ký đầu tư; trực tiếp làm việc, giải trình và bổ sung tài liệu theo yêu cầu trong suốt quá trình thẩm định.",
            ],
          },
          {
            name: "Theo dõi tiến độ và nhận kết quả",
            items: [
              "Chủ động theo sát quá trình xử lý hồ sơ, cập nhật tình trạng giải quyết và đại diện nhận Giấy chứng nhận đăng ký đầu tư đã được điều chỉnh thời hạn hoạt động.",
            ],
          },
          {
            name: " Hỗ trợ pháp lý sau gia hạn",
            items: [
              "Tư vấn và hướng dẫn khách hàng thực hiện các nghĩa vụ phát sinh sau khi được gia hạn, bao gồm nghĩa vụ tài chính, điều chỉnh hồ sơ liên quan và các thủ tục cần thiết khác (nếu có).",
            ],
          },
        ],
      },
    ],
    processes: [
      {
        title: "2. Quy trình cung cấp dịch vụ tại PGU",
        steps: [
          {
            num: "01",
            title: "Tiếp nhận và tư vấn ban đầu",
            desc: "PGU tiếp nhận yêu cầu từ khách hàng, nghiên cứu hồ sơ pháp lý hiện có và tư vấn cụ thể về khả năng gia hạn, phương án thực hiện cũng như các vấn đề pháp lý cần lưu ý.",
          },
          {
            num: "02",
            title: "Chuẩn bị và hoàn thiện hồ sơ",
            desc: "Tiến hành soạn thảo toàn bộ hồ sơ đề nghị gia hạn; đồng thời hướng dẫn khách hàng cung cấp, bổ sung các tài liệu cần thiết để đảm bảo hồ sơ đầy đủ và đúng quy định.",
          },
          {
            num: "03",
            title: "Nộp hồ sơ tại cơ quan có thẩm quyền",
            desc: "Đại diện khách hàng nộp hồ sơ điều chỉnh Giấy chứng nhận đăng ký đầu tư tại Sở Tài chính hoặc Ban Quản lý các khu công nghiệp (tùy từng trường hợp cụ thể).",
          },
          {
            num: "04",
            title: "Hỗ trợ khảo sát và chuẩn bị kiểm tra",
            desc: "Phối hợp rà soát thực tế địa điểm triển khai dự án; tư vấn, chuẩn bị nội dung và hồ sơ cần thiết trước khi cơ quan chức năng tiến hành kiểm tra (nếu có).",
          },
          {
            num: "05",
            title: "Làm việc và giải trình với cơ quan nhà nước",
            desc: "Tham gia đón tiếp đoàn kiểm tra hoặc đại diện khách hàng làm việc, giải trình, cung cấp thông tin theo yêu cầu của Sở Tài chính hoặc Ban Quản lý các khu công nghiệp trong quá trình thẩm định hồ sơ.",
          },
          {
            num: "06",
            title: "Nhận và bàn giao kết quả",
            desc: "PGU đại diện nhận Giấy chứng nhận đăng ký đầu tư đã được gia hạn và bàn giao đầy đủ cho khách hàng, đồng thời hướng dẫn các bước tiếp theo (nếu cần).",
          },
        ],
      },
    ],

    reasons: {
      title: "3. Lý do nhà đầu tư nên chọn PGU",
      items: [
        "- Chuyên gia trong lĩnh vực đầu tư: PGU có đội ngũ luật sư am hiểu các quy định pháp luật liên quan đến thời hạn hoạt động của dự án đầu tư và điều kiện để được gia hạn theo quy định hiện hành.",
        "- Đánh giá tình trạng pháp lý của dự án: Chúng tôi hỗ trợ rà soát hồ sơ pháp lý, tình hình thực hiện dự án và các nghĩa vụ của nhà đầu tư để xác định khả năng và phương án gia hạn phù hợp.",
        "- Chuẩn bị hồ sơ và thực hiện thủ tục trọn gói: PGU hỗ trợ soạn thảo hồ sơ, tài liệu giải trình và thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký đầu tư tại cơ quan có thẩm quyền.",
        "- Hạn chế rủi ro pháp lý cho nhà đầu tư: Việc gia hạn thời gian hoạt động dự án cần đáp ứng nhiều điều kiện pháp lý. PGU giúp nhà đầu tư thực hiện thủ tục đúng quy định, tránh các rủi ro phát sinh.",
        "- Đồng hành pháp lý trong suốt quá trình đầu tư: PGU luôn sẵn sàng hỗ trợ nhà đầu tư trong các vấn đề pháp lý phát sinh trong quá trình tiếp tục triển khai và vận hành dự án tại Việt Nam.",
      ],
    },

    lastPara: [
      "Với kinh nghiệm tư vấn chuyên sâu trong lĩnh vực đầu tư và doanh nghiệp, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ gia hạn thời gian hoạt động dự án trọn gói, đảm bảo thực hiện đúng quy định, đúng thời hạn và hạn chế tối đa rủi ro pháp lý cho nhà đầu tư.",
    ],
  },
  {
    id: "dang-ky-khoan-vay-nuoc-ngoai",
    label: "Đăng ký khoản vay nước ngoài",
    tagline: "Đầu tư - Ngoại hối",
    img: dang_ky_khoan_vay_nuoc_ngoai,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình mở rộng hoạt động, nhiều doanh nghiệp tại Việt Nam vay vốn từ công ty mẹ, cổ đông hoặc tổ chức tín dụng nước ngoài để phục vụ sản xuất - kinh doanh. Theo quy định về quản lý ngoại hối, các khoản vay nước ngoài trong một số trường hợp bắt buộc phải đăng ký hoặc đăng ký thay đổi với Ngân hàng Nhà nước Việt Nam; nếu không thực hiện đúng thời hạn có thể ảnh hưởng đến việc giải ngân, trả nợ và tiềm ẩn rủi ro xử phạt.",
      "Với kinh nghiệm trong lĩnh vực đầu tư, doanh nghiệp và ngoại hối, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ đăng ký khoản vay nước ngoài trọn gói, đảm bảo thực hiện đúng quy định, đúng thời hạn và hạn chế tối đa rủi ro pháp lý cho doanh nghiệp.",
    ],

    explains: [
      {
        name: "1. Trường hợp phải đăng ký khoản vay nước ngoài",
        description: [
          "Theo quy định tại Điều 11 Thông tư 12/2022/TT-NHNN, các khoản vay nước ngoài của doanh nghiệp phải thực hiện thủ tục đăng ký với Ngân hàng Nhà nước trong các trường hợp sau:",
        ],
        scopes: [
          {
            name: "Khoản vay trung và dài hạn từ nước ngoài",
            items: [
              "Tất cả các khoản vay có thời hạn trung hạn hoặc dài hạn đều thuộc diện bắt buộc phải đăng ký.",
            ],
          },
          {
            name: "Khoản vay ngắn hạn được gia hạn thời gian trả nợ gốc",
            items: [
              "Trường hợp khoản vay ban đầu là ngắn hạn nhưng được gia hạn, dẫn đến tổng thời hạn vay vượt quá 01 năm thì phải thực hiện đăng ký.",
            ],
          },
          {
            name: "Khoản vay ngắn hạn còn dư nợ gốc sau 01 năm",
            items: [
              "Đối với khoản vay ngắn hạn không có thỏa thuận gia hạn nhưng tại thời điểm đủ 01 năm kể từ ngày rút vốn đầu tiên vẫn còn dư nợ gốc (bao gồm cả phần lãi nhập gốc), thì doanh nghiệp phải đăng ký với Ngân hàng Nhà nước.",
            ],
          },
          {
            name: "Trường hợp không phải đăng ký",
            items: [
              "Nếu bên vay thanh toán toàn bộ dư nợ gốc trong vòng 30 ngày làm việc kể từ thời điểm tròn 01 năm nêu trên thì không phải thực hiện đăng ký.",
            ],
          },
          {
            name: "Tóm tắt quy định",
            items: [
              "Mọi khoản vay trung và dài hạn từ nước ngoài đều bắt buộc đăng ký. Đối với khoản vay ngắn hạn, chỉ khi phát sinh yếu tố kéo dài thời hạn thực tế vượt quá 01 năm hoặc còn dư nợ sau mốc 01 năm theo quy định thì mới phải đăng ký; ngược lại, nếu đáp ứng điều kiện thanh toán đúng thời hạn nêu trên thì không cần thực hiện thủ tục này.",
            ],
          },
        ],
      },
      {
        name: "2. Phạm vi dịch vụ cung cấp",
        description: [
          "PGU là đơn vị tư vấn pháp lý với đội ngũ luật sư và chuyên viên có nhiều năm kinh nghiệm trong lĩnh vực doanh nghiệp - đầu tư - quản lý ngoại hối. Khi sử dụng dịch vụ đăng ký khoản vay nước ngoài tại PGU, Quý khách hàng sẽ được hỗ trợ toàn diện các nội dung sau:",
        ],
        scopes: [
          {
            name: "Tư vấn điều kiện và thủ tục đăng ký",
            items: [
              "Tư vấn chi tiết về điều kiện, trình tự và thủ tục đăng ký khoản vay nước ngoài theo quy định hiện hành; hướng dẫn chuẩn bị các tài liệu cần thiết như thỏa thuận vay, thỏa thuận gia hạn, phụ lục hợp đồng và các hồ sơ liên quan.",
            ],
          },
          {
            name: "Chuẩn bị hồ sơ đăng ký",
            items: [
              "Soạn thảo và hoàn thiện bộ hồ sơ đăng ký khoản vay hoặc đăng ký thay đổi khoản vay với Ngân hàng Nhà nước.",
            ],
          },
          {
            name: "Đại diện nộp hồ sơ",
            items: [
              "Đại diện khách hàng nộp hồ sơ, nhận văn bản xác nhận và các tài liệu liên quan từ cơ quan có thẩm quyền.",
            ],
          },
          {
            name: "Làm việc và giải trình với cơ quan quản lý",
            items: [
              "Thay mặt khách hàng làm việc, trao đổi và giải trình với cơ quan quản lý để đảm bảo hồ sơ được xử lý thuận lợi.",
            ],
          },
          {
            name: "Bàn giao kết quả và hỗ trợ sau thủ tục",
            items: [
              "Bàn giao đầy đủ kết quả và hướng dẫn thực hiện các nghĩa vụ tiếp theo sau khi hoàn tất thủ tục.",
            ],
          },
        ],
      },
    ],

    reasons: {
      title: "3. Lý do nhà đầu tư nên chọn PGU",
      items: [
        "- Am hiểu quy định về quản lý ngoại hối: PGU có đội ngũ luật sư am hiểu quy định pháp luật về vay, trả nợ nước ngoài của doanh nghiệp và các quy định quản lý ngoại hối tại Việt Nam.",
        "- Tư vấn cấu trúc khoản vay phù hợp: Chúng tôi hỗ trợ doanh nghiệp phân tích điều kiện khoản vay, thời hạn vay, lãi suất và các yêu cầu pháp lý để bảo đảm khoản vay phù hợp với quy định hiện hành.",
        "- Thực hiện thủ tục đăng ký với cơ quan có thẩm quyền: PGU hỗ trợ chuẩn bị hồ sơ và thực hiện thủ tục đăng ký khoản vay nước ngoài với Ngân hàng Nhà nước Việt Nam, bảo đảm đúng quy trình và quy định pháp luật.",
        "- Tiết kiệm thời gian và hạn chế sai sót hồ sơ: Với kinh nghiệm thực tiễn, PGU giúp doanh nghiệp chuẩn bị hồ sơ đầy đủ, hạn chế việc phải sửa đổi, bổ sung trong quá trình xử lý hồ sơ.",
        "- Hỗ trợ trong quá trình thực hiện khoản vay: PGU tiếp tục hỗ trợ doanh nghiệp trong các thủ tục liên quan như báo cáo tình hình vay, thay đổi nội dung khoản vay hoặc các vấn đề pháp lý phát sinh trong quá trình vay và trả nợ nước ngoài.",
      ],
    },

    lastPara: [
      "Việc sử dụng dịch vụ tại PGU giúp doanh nghiệp tiết kiệm thời gian, hạn chế việc đi lại nhiều lần và tránh sai sót trong quá trình chuẩn bị hồ sơ. Đồng thời, khách hàng được tư vấn toàn diện các vấn đề pháp lý liên quan nhằm đảm bảo khoản vay được thực hiện đúng quy định, hạn chế tối đa rủi ro phát sinh.",
      "Nếu Quý khách hàng cần hỗ trợ hoặc có câu hỏi liên quan đến đăng ký khoản vay nước ngoài, vui lòng liên hệ PGU để được tư vấn chi tiết và kịp thời.",
    ],
  },
  {
    id: "dang-ky-thay-doi-khoan-vay-nuoc-ngoai",
    label: "Đăng ký thay đổi khoản vay nước ngoài",
    tagline: "Đầu tư - Ngoại hối",
    img: dang_ky_khoan_vay_nuoc_ngoai,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình thực hiện khoản vay nước ngoài, doanh nghiệp có thể cần điều chỉnh các nội dung như số tiền vay, thời hạn, lãi suất, bên cho vay hoặc kế hoạch rút vốn, trả nợ. Theo quy định về quản lý ngoại hối, nhiều trường hợp thay đổi bắt buộc phải đăng ký với Ngân hàng Nhà nước trước khi thực hiện; nếu không tuân thủ đúng thời hạn và thủ tục, doanh nghiệp có thể gặp vướng mắc trong giao dịch và đối mặt với rủi ro xử phạt.",
      "Với kinh nghiệm trong lĩnh vực đầu tư và quản lý ngoại hối, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ đăng ký thay đổi khoản vay nước ngoài trọn gói, đảm bảo thực hiện đúng quy định và hạn chế tối đa rủi ro pháp lý cho doanh nghiệp.",
    ],

    explains: [
      {
        name: "1. Các trường hợp phải đăng ký thay đổi khoản vay nước ngoài",
        description: [
          "Khi có sự điều chỉnh liên quan đến khoản vay nước ngoài đã được Ngân hàng Nhà nước xác nhận, doanh nghiệp cần xác định rõ trường hợp của mình thuộc diện chỉ thông báo thay đổi trên hệ thống điện tử hay phải thực hiện thủ tục đăng ký thay đổi khoản vay. Việc phân loại đúng giúp tránh vi phạm về quản lý ngoại hối và đảm bảo quá trình giải ngân, trả nợ diễn ra thuận lợi.",
        ],
        scopes: [
          {
            name: "Trường hợp chỉ cần thông báo thay đổi trên Trang điện tử (không phải đăng ký thay đổi)",
            items: [
              "- Điều chỉnh thời gian rút vốn hoặc trả nợ gốc trong phạm vi không quá 10 ngày làm việc so với kế hoạch đã được Ngân hàng Nhà nước xác nhận.",
              "- Thay đổi địa chỉ trụ sở nhưng không thay đổi tỉnh/thành phố nơi đặt trụ sở chính; doanh nghiệp gửi thông báo về việc thay đổi địa chỉ đến cơ quan đã xác nhận khoản vay.",
              "- Thay đổi bên cho vay hoặc thông tin liên quan trong khoản vay hợp vốn có chỉ định đại diện các bên cho vay, trừ trường hợp việc thay đổi làm thay đổi vai trò đại diện của bên cho vay.",
              "- Thay đổi tên thương mại của ngân hàng cung ứng dịch vụ tài khoản hoặc ngân hàng phục vụ giao dịch bảo đảm.",
              "- Điều chỉnh kế hoạch trả lãi, phí so với kế hoạch đã xác nhận nhưng không làm thay đổi phương pháp xác định lãi, phí theo thỏa thuận vay; doanh nghiệp phải lập bảng tính lãi, phí để ngân hàng có cơ sở kiểm tra khi chuyển tiền.",
              "- Điều chỉnh tăng hoặc giảm số tiền rút vốn, trả nợ gốc, lãi, phí trong phạm vi 100 đơn vị tiền tệ của đồng tiền vay so với nội dung đã được xác nhận.",
              "- Số tiền rút vốn hoặc trả nợ gốc thực tế của một kỳ thấp hơn so với kế hoạch đã đăng ký.",
            ],
          },
          {
            name: "Trường hợp phải thực hiện đăng ký thay đổi khoản vay",
            items: [
              "Ngoài các trường hợp chỉ cần thông báo trên hệ thống điện tử, nếu doanh nghiệp có bất kỳ thay đổi nào liên quan đến nội dung khoản vay đã được ghi nhận tại văn bản xác nhận đăng ký hoặc văn bản xác nhận đăng ký thay đổi của Ngân hàng Nhà nước thì bắt buộc phải thực hiện thủ tục đăng ký thay đổi khoản vay nước ngoài theo quy định.",
            ],
          },
        ],
      },
      {
        name: "2. Phạm vi dịch vụ PGU cung cấp",
        description: [
          "Khi sử dụng dịch vụ đăng ký thay đổi khoản vay nước ngoài tại PGU, khách hàng sẽ được hỗ trợ toàn diện các nội dung sau:",
        ],
        scopes: [
          {
            name: "Tư vấn quy định pháp luật liên quan",
            items: [
              "Phân tích và giải thích cụ thể các quy định pháp luật liên quan đến việc điều chỉnh khoản vay nước ngoài.",
            ],
          },
          {
            name: "Tư vấn phương án thay đổi khoản vay",
            items: [
              "Tư vấn phương án thay đổi phù hợp với nhu cầu và lợi ích của doanh nghiệp, đồng thời đảm bảo tuân thủ quy định quản lý ngoại hối.",
            ],
          },
          {
            name: "Chuẩn bị hồ sơ và tài liệu",
            items: [
              "Hướng dẫn khách hàng chuẩn bị đầy đủ hồ sơ, tài liệu theo yêu cầu của cơ quan có thẩm quyền.",
            ],
          },
          {
            name: "Soạn thảo văn bản pháp lý",
            items: [
              "Soạn thảo các văn bản pháp lý liên quan đến nội dung thay đổi khoản vay, bảo đảm tính chính xác và đầy đủ.",
            ],
          },
          {
            name: "Đại diện thực hiện thủ tục hành chính",
            items: [
              "Đại diện khách hàng nộp hồ sơ, làm việc và giải trình với cơ quan quản lý để hoàn tất thủ tục đăng ký thay đổi.",
            ],
          },
          {
            name: "Theo dõi và xử lý hồ sơ",
            items: [
              "Theo dõi sát tiến độ xử lý hồ sơ, kịp thời xử lý các yêu cầu bổ sung nhằm đảm bảo thủ tục được thực hiện nhanh chóng, thuận lợi.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lý do nhà đầu tư nên chọn PGU",
      items: [
        "- Am hiểu quy định pháp luật về vay, trả nợ nước ngoài: PGU có đội ngũ luật sư am hiểu các quy định về quản lý ngoại hối và thủ tục đăng ký, thay đổi khoản vay nước ngoài của doanh nghiệp tại Việt Nam.",
        "- Tư vấn phương án điều chỉnh khoản vay phù hợp: Chúng tôi hỗ trợ doanh nghiệp đánh giá các nội dung cần thay đổi như giá trị khoản vay, thời hạn vay, lãi suất, bên cho vay hoặc các điều kiện khác của khoản vay để bảo đảm phù hợp với quy định pháp luật.",
        "- Thực hiện thủ tục đăng ký thay đổi với cơ quan có thẩm quyền: PGU hỗ trợ chuẩn bị hồ sơ và thực hiện thủ tục đăng ký thay đổi khoản vay nước ngoài với Ngân hàng Nhà nước Việt Nam theo quy định.",
        "- Hạn chế rủi ro pháp lý trong quá trình vay và trả nợ: Việc thay đổi khoản vay nếu không đăng ký đúng quy định có thể dẫn đến rủi ro pháp lý. PGU giúp doanh nghiệp thực hiện thủ tục đầy đủ, đúng quy trình.",
        "- Hỗ trợ pháp lý trong suốt quá trình thực hiện khoản vay: PGU sẵn sàng hỗ trợ doanh nghiệp trong các nghĩa vụ báo cáo, quản lý khoản vay và các vấn đề pháp lý phát sinh trong quá trình vay và trả nợ nước ngoài.",
      ],
    },

    lastPara: [
      "Đối với nhiều doanh nghiệp, việc tự nghiên cứu quy định pháp luật về quản lý ngoại hối, chuẩn bị hồ sơ và làm việc với cơ quan có thẩm quyền khi thay đổi khoản vay nước ngoài thường phát sinh không ít khó khăn. Thủ tục hành chính có thể khác nhau tùy từng địa phương, yêu cầu hồ sơ chặt chẽ và việc giải trình cần thực hiện đúng trọng tâm.",
      "Nếu Quý khách hàng có nhu cầu đăng ký thay đổi khoản vay nước ngoài, vui lòng liên hệ Công ty Luật TNHH Phúc Gia Uy & Cộng sự để được đội ngũ luật sư của chúng tôi tư vấn, hỗ trợ thực hiện thủ tục nhanh chóng và đúng quy định pháp luật.",
    ],
  },
  {
    id: "bao-cao-khoan-vay-nuoc-ngoai",
    label: "Báo cáo khoản vay nước ngoài",
    tagline: "Đầu tư - Ngoại hối",
    img: bao_cao_khoan_vay_nuoc_ngoai,
    color: "#A8171C",

    descriptions: [
      "Trong bối cảnh hoạt động vay vốn nước ngoài ngày càng phổ biến, việc thực hiện đầy đủ nghĩa vụ báo cáo theo quy định của pháp luật về quản lý ngoại hối là yêu cầu bắt buộc đối với doanh nghiệp. Tuy nhiên, quy trình kê khai trên hệ thống trực tuyến, việc xác định đúng loại khoản vay và thời hạn báo cáo không phải lúc nào cũng đơn giản, đặc biệt đối với các doanh nghiệp không chuyên sâu về pháp lý và tài chính.",
      "Với kinh nghiệm tư vấn trong lĩnh vực đầu tư và quản lý ngoại hối, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ báo cáo khoản vay nước ngoài chuyên nghiệp, hỗ trợ doanh nghiệp thực hiện đúng, đủ và đúng hạn các nghĩa vụ theo quy định. Chúng tôi không chỉ đảm bảo tính chính xác của hồ sơ báo cáo mà còn đồng hành cùng khách hàng trong việc kiểm soát rủi ro pháp lý, tránh các vi phạm hành chính có thể ảnh hưởng đến hoạt động tài chính và uy tín doanh nghiệp.",
    ],

    explains: [
      {
        name: "1. Doanh nghiệp phải thực hiện các báo cáo khoản vay nước ngoài nào?",
        description: [
          "Theo quy định pháp luật về quản lý ngoại hối, doanh nghiệp có khoản vay nước ngoài phải thực hiện báo cáo định kỳ và báo cáo theo yêu cầu (đột xuất).",
        ],
        scopes: [
          {
            name: "Báo cáo định kỳ",
            items: [
              "- Căn cứ Điều 41 Thông tư 12/2022/TT-NHNN, bên đi vay có trách nhiệm thực hiện báo cáo tình hình thực hiện khoản vay nước ngoài hàng tháng, chậm nhất vào ngày 05 của tháng tiếp theo kỳ báo cáo.",
              "- Báo cáo được thực hiện trực tuyến trên Trang điện tử quản lý khoản vay nước ngoài của Ngân hàng Nhà nước.",
              "- Trường hợp hệ thống điện tử gặp sự cố kỹ thuật, doanh nghiệp phải gửi báo cáo bằng văn bản theo đúng quy định.",
              "- Nội dung báo cáo thường bao gồm tình hình rút vốn, trả nợ gốc, lãi, phí và dư nợ còn lại của khoản vay.",
            ],
          },
          {
            name: "Báo cáo đột xuất",
            items: [
              "- Ngoài nghĩa vụ báo cáo định kỳ, khi có yêu cầu của Ngân hàng Nhà nước, bên đi vay phải thực hiện báo cáo theo yêu cầu trong thời hạn được thông báo.",
              "- Đây là trách nhiệm bắt buộc nhằm phục vụ công tác quản lý ngoại hối và giám sát tình hình vay, trả nợ nước ngoài của doanh nghiệp.",
            ],
          },
        ],
      },
      {
        name: "2. Phạm vi dịch vụ cung cấp",
        description: [
          "Việc thực hiện báo cáo khoản vay nước ngoài trên hệ thống trực tuyến của Ngân hàng Nhà nước đòi hỏi doanh nghiệp phải kê khai nhiều biểu mẫu với số liệu chi tiết, chính xác và thống nhất với hồ sơ vay, chứng từ rút vốn, trả nợ.",
          "Đối với các doanh nghiệp không chuyên sâu về lĩnh vực pháp lý và quản lý ngoại hối, việc tự thực hiện báo cáo thường mất nhiều thời gian và công sức. Vì vậy, lựa chọn dịch vụ báo cáo khoản vay nước ngoài là giải pháp giúp doanh nghiệp tối ưu nguồn lực và tập trung vào hoạt động sản xuất - kinh doanh.",
        ],
        scopes: [
          {
            name: "Tư vấn quy định pháp luật về báo cáo khoản vay",
            items: [
              "Tư vấn quy định pháp luật liên quan đến nghĩa vụ báo cáo khoản vay nước ngoài, thời hạn và phương thức thực hiện.",
            ],
          },
          {
            name: "Chuẩn bị hồ sơ và biểu mẫu báo cáo",
            items: [
              "Soạn thảo, hoàn thiện hồ sơ và biểu mẫu báo cáo theo quy định.",
            ],
          },
          {
            name: "Hỗ trợ chuẩn bị số liệu báo cáo",
            items: [
              "Hỗ trợ doanh nghiệp chuẩn bị số liệu, tài liệu liên quan đến tình hình rút vốn, trả nợ và dư nợ khoản vay.",
            ],
          },
          {
            name: "Xử lý vấn đề phát sinh trong quá trình báo cáo",
            items: [
              "Tư vấn và xử lý các vấn đề phát sinh trong quá trình thực hiện báo cáo.",
            ],
          },
          {
            name: "Làm việc với cơ quan quản lý",
            items: [
              "Đại diện khách hàng làm việc với cơ quan có thẩm quyền thuộc Ngân hàng Nhà nước khi cần thiết.",
            ],
          },
          {
            name: "Theo dõi và nhắc lịch báo cáo",
            items: [
              "Theo dõi kỳ báo cáo, nhắc lịch và hỗ trợ khách hàng thực hiện các kỳ tiếp theo đúng hạn.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lý do nhà đầu tư nên chọn PGU",
      items: [
        "- Chuyên gia trong lĩnh vực đầu tư: PGU có đội ngũ luật sư am hiểu các quy định pháp luật về vay, trả nợ nước ngoài và nghĩa vụ báo cáo của doanh nghiệp theo quy định của cơ quan quản lý.",
        "- Rà soát và chuẩn hóa số liệu báo cáo: Chúng tôi hỗ trợ doanh nghiệp kiểm tra, đối chiếu các thông tin liên quan đến khoản vay nhằm bảo đảm nội dung báo cáo chính xác và phù hợp với quy định.",
        "- Thực hiện thủ tục báo cáo đúng thời hạn: PGU hỗ trợ doanh nghiệp lập và nộp báo cáo định kỳ về khoản vay nước ngoài theo đúng biểu mẫu và thời hạn quy định.",
        "- Hạn chế rủi ro pháp lý cho doanh nghiệp: Việc chậm hoặc sai sót trong báo cáo khoản vay có thể dẫn đến xử phạt hành chính. PGU giúp doanh nghiệp tuân thủ đầy đủ nghĩa vụ pháp lý.",
        "- Hỗ trợ pháp lý trong suốt quá trình thực hiện khoản vay: Ngoài việc thực hiện báo cáo, PGU còn hỗ trợ doanh nghiệp xử lý các vấn đề pháp lý phát sinh trong quá trình vay và trả nợ nước ngoài.",
      ],
    },

    lastPara: [
      "PGU cam kết đồng hành cùng doanh nghiệp trong suốt quá trình thực hiện nghĩa vụ báo cáo, bảo đảm tính chính xác, kịp thời và an toàn pháp lý cho hoạt động vay vốn nước ngoài.",
      "Nếu Quý doanh nghiệp có nhu cầu tư vấn hoặc sử dụng dịch vụ báo cáo khoản vay nước ngoài, vui lòng liên hệ Công ty Luật TNHH Phúc Gia Uy & Cộng sự để được hỗ trợ nhanh chóng và chuyên nghiệp.",
    ],
  },
  {
    id: "cham-dut-du-an-dau-tu",
    label: "Chấm dứt dự án đầu tư",
    tagline: "Đầu tư",
    img: cham_dut_du_an_dau_tu,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình hoạt động, do thay đổi chiến lược, tái cấu trúc, khó khăn tài chính hoặc điều chỉnh kế hoạch đầu tư, nhà đầu tư có thể quyết định chấm dứt dự án. Tuy nhiên, việc chấm dứt không chỉ là ngừng hoạt động mà còn phải hoàn tất đầy đủ thủ tục pháp lý với cơ quan đăng ký đầu tư, thuế, hải quan, người lao động và các nghĩa vụ tài chính liên quan; nếu không thực hiện đúng quy trình, doanh nghiệp có thể đối mặt với rủi ro xử phạt hoặc phát sinh trách nhiệm chưa hoàn tất.",
      "Với kinh nghiệm trong lĩnh vực đầu tư trong nước và FDI, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ chấm dứt dự án đầu tư trọn gói, hỗ trợ khách hàng thực hiện thủ tục nhanh chóng, đúng quy định và đảm bảo an toàn pháp lý trong suốt quá trình thực hiện.",
    ],

    explains: [
      {
        name: "1. Các trường hợp chấm dứt hoạt động dự án đầu tư",
        description: [],
        scopes: [
          {
            name: "Trường hợp nhà đầu tư chủ động chấm dứt dự án",
            items: [
              "- Nhà đầu tư tự quyết định chấm dứt hoạt động dự án.",
              "- Việc chấm dứt được thực hiện theo điều kiện đã thỏa thuận trong hợp đồng, điều lệ doanh nghiệp.",
              "- Dự án đã hết thời hạn hoạt động theo quy định tại Giấy chứng nhận đăng ký đầu tư hoặc văn bản chấp thuận chủ trương đầu tư.",
            ],
          },
          {
            name: "Trường hợp cơ quan đăng ký đầu tư chấm dứt (hoặc chấm dứt một phần) dự án",
            items: [
              "- Dự án thuộc diện phải ngừng hoạt động theo quy định pháp luật nhưng nhà đầu tư không có khả năng khắc phục điều kiện để tiếp tục thực hiện.",
              "- Sau 24 tháng kể từ thời điểm kết thúc tiến độ thực hiện mục tiêu dự án theo văn bản chấp thuận mà nhà đầu tư vẫn không hoàn thành mục tiêu và không được điều chỉnh tiến độ.",
              "- Nhà đầu tư không còn quyền sử dụng địa điểm đầu tư và không thực hiện thủ tục điều chỉnh địa điểm trong vòng 06 tháng kể từ ngày mất quyền sử dụng.",
              "- Dự án đã ngừng hoạt động và sau 12 tháng kể từ ngày ngừng, cơ quan đăng ký đầu tư không thể liên lạc với nhà đầu tư hoặc đại diện hợp pháp.",
              "- Dự án thuộc trường hợp bị thu hồi đất theo pháp luật về đất đai.",
              "- Nhà đầu tư không thực hiện nghĩa vụ ký quỹ hoặc không có bảo lãnh nghĩa vụ ký quỹ đối với dự án thuộc diện phải bảo đảm thực hiện.",
              "- Hoạt động đầu tư được thực hiện dựa trên giao dịch dân sự giả tạo.",
              "- Theo bản án, quyết định có hiệu lực của Tòa án hoặc phán quyết của Trọng tài.",
              "- Tổ chức kinh tế đã giải thể nhưng không thực hiện thủ tục chấm dứt, chuyển nhượng hoặc chuyển quyền sở hữu dự án theo quy định pháp luật.",
            ],
          },
        ],
      },
    ],

    processes: [
      {
        title: "2. Quy trình thực hiện dịch vụ tại PGU",
        intros: [
          "Dịch vụ chấm dứt dự án đầu tư của PGU được triển khai theo từng giai đoạn cụ thể, bảo đảm nhà đầu tư hoàn tất đầy đủ các thủ tục pháp lý, tài chính và nghĩa vụ liên quan một cách chặt chẽ, đúng quy định.",
        ],
        steps: [
          {
            num: "01",
            title: "Tư vấn và đánh giá ban đầu",
            desc: "Rà soát hồ sơ dự án, đánh giá căn cứ pháp lý và các rủi ro liên quan đến thuế, tài chính, lao động và đất đai; từ đó xây dựng phương án và kế hoạch thực hiện thủ tục chấm dứt dự án phù hợp.",
          },
          {
            num: "02",
            title: "Chuẩn bị hồ sơ và thực hiện thủ tục",
            desc: "Soạn thảo và hoàn thiện hồ sơ chấm dứt dự án; đại diện nhà đầu tư nộp hồ sơ và làm việc với cơ quan đăng ký đầu tư, Ban Quản lý khu công nghiệp/khu kinh tế và các cơ quan liên quan.",
          },
          {
            num: "03",
            title: "Hoàn tất thủ tục và xử lý nghĩa vụ liên quan",
            desc: "Theo dõi tiến độ xử lý hồ sơ, nhận kết quả và hỗ trợ khách hàng thực hiện các thủ tục liên quan như quyết toán thuế, thanh lý tài sản, xử lý nghĩa vụ với người lao động.",
          },
        ],
      },
    ],

    reasons: {
      title: "3. Lý do nhà đầu tư nên chọn PGU",
      items: [
        "- Chuyên gia trong lĩnh vực đầu tư: PGU có đội ngũ luật sư am hiểu các quy định pháp luật liên quan đến việc chấm dứt hoạt động dự án đầu tư.",
        "- Rà soát nghĩa vụ pháp lý của dự án: Chúng tôi hỗ trợ kiểm tra tình trạng pháp lý của dự án và các nghĩa vụ liên quan trước khi thực hiện thủ tục chấm dứt.",
        "- Thực hiện thủ tục pháp lý trọn gói: PGU hỗ trợ chuẩn bị hồ sơ và thực hiện thủ tục chấm dứt dự án tại cơ quan có thẩm quyền.",
        "- Hạn chế rủi ro pháp lý cho nhà đầu tư: PGU giúp nhà đầu tư thực hiện đúng quy trình và hạn chế các rủi ro phát sinh.",
        "- Hỗ trợ các thủ tục liên quan sau khi chấm dứt dự án: PGU tiếp tục hỗ trợ thực hiện các thủ tục liên quan như thanh lý hợp đồng, nghĩa vụ tài chính và các vấn đề pháp lý khác.",
      ],
    },

    lastPara: [
      "Nếu Quý nhà đầu tư có nhu cầu tư vấn hoặc thực hiện thủ tục chấm dứt dự án đầu tư, vui lòng liên hệ Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) để được đội ngũ luật sư của chúng tôi hỗ trợ nhanh chóng, chính xác và đảm bảo an toàn pháp lý trong toàn bộ quá trình thực hiện.",
    ],
  },
  {
    id: "giai-the-cong-ty-fdi",
    label: "Giải thể công ty có vốn đầu tư nước ngoài",
    tagline: "Đầu tư",
    img: giai_the_cong_ty,
    color: "#A8171C",

    descriptions: [
      "Giải thể công ty có vốn đầu tư nước ngoài là thủ tục pháp lý phức tạp, đòi hỏi doanh nghiệp phải đồng thời thực hiện nhiều nghĩa vụ liên quan đến đầu tư, doanh nghiệp, thuế, hải quan, lao động và ngoại hối. Không giống như doanh nghiệp trong nước, công ty FDI trước khi giải thể thường phải hoàn tất thủ tục chấm dứt dự án đầu tư, quyết toán thuế, đóng mã số thuế, xử lý tài khoản vốn đầu tư và thanh lý tài sản theo đúng quy định pháp luật.",
      "Nếu không thực hiện đầy đủ và đúng trình tự, doanh nghiệp có thể gặp vướng mắc trong việc đóng mã số thuế, chấm dứt hiệu lực Giấy chứng nhận đăng ký đầu tư hoặc phát sinh trách nhiệm pháp lý kéo dài đối với người đại diện theo pháp luật và nhà đầu tư.",
      "Với kinh nghiệm chuyên sâu trong lĩnh vực đầu tư nước ngoài, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ giải thể công ty FDI trọn gói, hỗ trợ khách hàng thực hiện thủ tục nhanh chóng, đúng quy định và đảm bảo an toàn pháp lý.",
    ],

    explains: [
      {
        name: "1. Điều kiện giải thể công ty có vốn đầu tư nước ngoài (FDI)",
        description: [
          "Doanh nghiệp có vốn đầu tư nước ngoài chỉ được giải thể khi đáp ứng đầy đủ các điều kiện theo quy định pháp luật.",
        ],
        scopes: [
          {
            name: "Điều kiện giải thể",
            items: [
              "- Bảo đảm thanh toán hết các khoản nợ và nghĩa vụ tài sản khác.",
              "- Không đang trong quá trình giải quyết tranh chấp tại Tòa án hoặc Trọng tài.",
              "- Hoàn tất các nghĩa vụ về thuế, lao động và các nghĩa vụ tài chính liên quan.",
            ],
          },
          {
            name: "Các thủ tục cần thực hiện trước khi giải thể",
            items: [
              "- Cấp đổi Giấy chứng nhận đăng ký doanh nghiệp và Giấy chứng nhận đăng ký đầu tư đối với doanh nghiệp đang hoạt động theo Giấy phép đầu tư/Giấy đầu tư cũ.",
              "- Thực hiện thủ tục chấm dứt hoạt động chi nhánh, văn phòng đại diện hoặc địa điểm kinh doanh (nếu có).",
              "- Sau khi hoàn tất các thủ tục trên và được cấp lại giấy tờ pháp lý tương ứng, doanh nghiệp mới tiến hành thủ tục giải thể theo quy định pháp luật.",
            ],
          },
        ],
      },
      {
        name: "2. Phạm vi dịch vụ của PGU",
        description: [],
        scopes: [
          {
            name: "Tư vấn và chuẩn bị thủ tục giải thể",
            items: [
              "- Tư vấn điều kiện và trình tự giải thể công ty có vốn đầu tư nước ngoài.",
              "- Soạn thảo hồ sơ giải thể doanh nghiệp theo quy định pháp luật.",
            ],
          },
          {
            name: "Thực hiện thủ tục pháp lý liên quan",
            items: [
              "- Thực hiện thủ tục chấm dứt hoạt động dự án đầu tư (nếu có).",
              "- Đại diện khách hàng làm việc với cơ quan đăng ký đầu tư, cơ quan đăng ký kinh doanh và cơ quan thuế.",
            ],
          },
          {
            name: "Xử lý nghĩa vụ tài chính và tài sản",
            items: [
              "- Hỗ trợ quyết toán thuế, đóng mã số thuế và hoàn tất nghĩa vụ tài chính.",
              "- Hỗ trợ xử lý tài khoản vốn đầu tư, tài khoản thanh toán.",
              "- Tư vấn và thực hiện thủ tục thanh lý tài sản, chấm dứt hợp đồng lao động.",
            ],
          },
          {
            name: "Theo dõi và hoàn tất thủ tục",
            items: [
              "- Theo dõi tiến độ xử lý hồ sơ và bàn giao kết quả hoàn tất thủ tục giải thể cho khách hàng.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Vì sao nhà đầu tư nên chọn PGU",
      items: [
        "- Chuyên gia trong lĩnh vực đầu tư: PGU có đội ngũ luật sư am hiểu các quy định pháp luật về doanh nghiệp, đầu tư và nghĩa vụ pháp lý liên quan đến việc giải thể công ty có vốn đầu tư nước ngoài tại Việt Nam.",
        "- Rà soát toàn bộ nghĩa vụ pháp lý của doanh nghiệp: Chúng tôi hỗ trợ kiểm tra tình trạng pháp lý của doanh nghiệp, bao gồm nghĩa vụ thuế, nghĩa vụ với người lao động, hợp đồng và các nghĩa vụ tài chính khác trước khi tiến hành giải thể.",
        "- Thực hiện thủ tục giải thể trọn gói: PGU hỗ trợ chuẩn bị hồ sơ và thực hiện các thủ tục cần thiết như chấm dứt hoạt động dự án đầu tư (nếu có), giải thể doanh nghiệp, đóng mã số thuế và các thủ tục liên quan.",
        "- Hạn chế rủi ro pháp lý cho nhà đầu tư: Việc giải thể doanh nghiệp cần tuân thủ đúng trình tự, thủ tục pháp luật. PGU giúp nhà đầu tư thực hiện đúng quy định, tránh các rủi ro phát sinh sau khi doanh nghiệp chấm dứt hoạt động.",
        "- Hỗ trợ các thủ tục pháp lý sau giải thể: PGU tiếp tục hỗ trợ nhà đầu tư xử lý các vấn đề pháp lý phát sinh sau khi giải thể.",
      ],
    },

    lastPara: [
      "PGU cam kết đồng hành cùng nhà đầu tư trong toàn bộ quá trình giải thể, đảm bảo thủ tục được thực hiện minh bạch, đúng pháp luật và hạn chế tối đa rủi ro phát sinh.",
      "Nếu Quý nhà đầu tư có nhu cầu tư vấn hoặc thực hiện thủ tục giải thể công ty có vốn đầu tư nước ngoài, vui lòng liên hệ Công ty Luật TNHH Phúc Gia Uy & Cộng sự để được hỗ trợ kịp thời và chuyên nghiệp.",
    ],
  },
  {
    id: "thanh-lap-doanh-nghiep",
    label: "Thành lập doanh nghiệp",
    tagline: "Doanh nghiệp",
    img: thanh_lap_doanh_nghiep,
    color: "#A8171C",

    descriptions: [
      "Trong bối cảnh kinh tế ngày càng phát triển, nhiều cá nhân và tổ chức lựa chọn thành lập doanh nghiệp để khởi nghiệp, mở rộng hoạt động kinh doanh và xây dựng thương hiệu. Tuy nhiên, thủ tục đăng ký doanh nghiệp thường khá phức tạp và cần tuân thủ đúng quy định pháp luật.",
      "Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn và hỗ trợ thành lập doanh nghiệp trọn gói, giúp khách hàng hoàn tất thủ tục nhanh chóng, đúng quy định và tiết kiệm thời gian, chi phí.",
      "Với đội ngũ luật sư và chuyên viên giàu kinh nghiệm, Phúc Gia Uy luôn đồng hành cùng khách hàng từ khâu tư vấn ban đầu đến khi doanh nghiệp chính thức đi vào hoạt động.",
    ],

    explains: [
      {
        name: "1. Thành lập doanh nghiệp",
        description: [
          "Thành lập doanh nghiệp là quá trình cá nhân hoặc tổ chức thực hiện các thủ tục pháp lý theo quy định của pháp luật để đăng ký kinh doanh và được cơ quan nhà nước có thẩm quyền cấp Giấy chứng nhận đăng ký doanh nghiệp.",
          "Sau khi hoàn tất thủ tục thành lập, doanh nghiệp sẽ được pháp luật công nhận và có quyền thực hiện các hoạt động kinh doanh hợp pháp theo ngành nghề đã đăng ký.",
        ],
        scopes: [
          {
            name: "Các loại hình doanh nghiệp phổ biến",
            items: [
              "- Công ty trách nhiệm hữu hạn một thành viên",
              "- Công ty trách nhiệm hữu hạn hai thành viên trở lên",
              "- Công ty cổ phần",
              "- Doanh nghiệp tư nhân",
              "- Công ty hợp danh",
            ],
          },
          {
            name: "Lưu ý khi lựa chọn loại hình doanh nghiệp",
            items: [
              "- Mỗi loại hình doanh nghiệp có đặc điểm riêng về cơ cấu tổ chức.",
              "- Trách nhiệm tài sản của chủ sở hữu hoặc thành viên góp vốn khác nhau.",
              "- Phương thức quản lý và điều hành doanh nghiệp có sự khác biệt.",
            ],
          },
        ],
      },

      {
        name: "2. Phạm vi dịch vụ thành lập doanh nghiệp",
        description: [],
        scopes: [
          {
            name: "Tư vấn trước khi thành lập",
            items: [
              "- Tư vấn lựa chọn loại hình doanh nghiệp phù hợp.",
              "- Tư vấn đặt tên doanh nghiệp đúng quy định pháp luật.",
              "- Tư vấn ngành nghề kinh doanh.",
              "- Tư vấn vốn điều lệ và cơ cấu góp vốn.",
              "- Tư vấn địa chỉ trụ sở hợp pháp.",
            ],
          },
          {
            name: "Soạn thảo hồ sơ đăng ký doanh nghiệp",
            items: [
              "- Chuẩn bị Giấy đề nghị đăng ký doanh nghiệp.",
              "- Soạn thảo điều lệ công ty.",
              "- Lập danh sách thành viên hoặc cổ đông sáng lập.",
              "- Chuẩn bị hồ sơ pháp lý của cá nhân hoặc tổ chức góp vốn.",
            ],
          },
          {
            name: "Đại diện thực hiện thủ tục tại cơ quan nhà nước",
            items: [
              "- Nộp hồ sơ đăng ký doanh nghiệp.",
              "- Theo dõi và xử lý hồ sơ.",
              "- Nhận Giấy chứng nhận đăng ký doanh nghiệp.",
              "- Thực hiện công bố thông tin doanh nghiệp theo quy định.",
            ],
          },
          {
            name: "Hỗ trợ thủ tục sau khi thành lập",
            items: [
              "- Khắc dấu pháp nhân.",
              "- Đăng ký chữ ký số.",
              "- Mở tài khoản ngân hàng cho doanh nghiệp.",
              "- Đăng ký hóa đơn điện tử.",
              "- Tư vấn các thủ tục thuế ban đầu.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- Tư vấn pháp lý chính xác và đầy đủ.",
        "- Tiết kiệm thời gian cho khách hàng.",
        "- Hạn chế tối đa rủi ro pháp lý trong quá trình thành lập.",
        "- Hồ sơ được chuẩn bị chuyên nghiệp và nhanh chóng.",
        "- Hỗ trợ pháp lý lâu dài trong quá trình hoạt động của doanh nghiệp.",
      ],
    },

    lastPara: [
      "Với đội ngũ luật sư giàu kinh nghiệm và am hiểu pháp luật doanh nghiệp, Công ty Luật Phúc Gia Uy giúp khách hàng hoàn tất thủ tục pháp lý nhanh chóng, đúng quy định và tiết kiệm thời gian.",
      "Phúc Gia Uy luôn sẵn sàng đồng hành, hỗ trợ pháp lý để doanh nghiệp hoạt động ổn định và phát triển bền vững.",
    ],
  },
  {
    id: "tu-van-phap-ly-thuong-xuyen",
    label: "Tư vấn pháp lý thường xuyên",
    tagline: "Pháp lý doanh nghiệp",
    img: tu_van_thuong_xuyen,
    color: "#A8171C",

    descriptions: [
      "Hoạt động kinh doanh của các doanh nghiệp luôn phụ thuộc và bị điều chỉnh bởi các quy định pháp luật có liên quan. Để hoạt động hiệu quả, doanh nghiệp cần kiểm soát tốt các rủi ro pháp lý phát sinh trong quá trình vận hành. Các doanh nghiệp lớn thường xây dựng bộ phận pháp chế với đội ngũ luật sư để hỗ trợ xin giấy phép, tư vấn pháp lý và giải quyết các tranh chấp trong quá trình hoạt động.",
      "Tuy nhiên, không phải doanh nghiệp nào cũng có đủ nguồn lực tài chính để xây dựng bộ phận pháp chế riêng. Đối với những doanh nghiệp không có đội ngũ pháp chế nội bộ, việc sử dụng dịch vụ tư vấn pháp lý thường xuyên của các đơn vị pháp lý độc lập là một lựa chọn hiệu quả và tiết kiệm chi phí.",
    ],

    explains: [
      {
        name: "1. Tư vấn pháp lý thường xuyên là gì?",
        description: [
          "Tư vấn pháp lý thường xuyên là dịch vụ pháp lý phù hợp với các doanh nghiệp có nhu cầu được tư vấn pháp luật trong quá trình hoạt động nhưng không có bộ phận pháp lý nội bộ.",
          "Dịch vụ này giúp doanh nghiệp kiểm soát chi phí pháp lý, đồng thời vẫn được hỗ trợ bởi đội ngũ luật sư chuyên môn trong hầu hết các vấn đề pháp lý phát sinh.",
        ],
        scopes: [
          {
            name: "Nội dung tư vấn thường xuyên",
            items: [
              "- Tư vấn các vấn đề pháp lý phát sinh trong hoạt động doanh nghiệp.",
              "- Tư vấn liên quan đến lao động, giao dịch thương mại và quản trị doanh nghiệp.",
              "- Tư vấn về tài sản, quyền sở hữu trí tuệ và các vấn đề pháp lý khác trong quá trình kinh doanh.",
            ],
          },
          {
            name: "Hình thức cung cấp dịch vụ",
            items: [
              "- Tư vấn pháp lý thường xuyên được thực hiện với mức phí cố định hàng tháng.",
              "- Doanh nghiệp được hỗ trợ pháp lý liên tục trong suốt thời gian sử dụng dịch vụ.",
            ],
          },
        ],
      },

      {
        name: "2. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Tư vấn và giải đáp pháp lý",
            items: [
              "- Giải đáp, tư vấn về các quy định và chính sách pháp luật có liên quan đến hoạt động của doanh nghiệp.",
              "- Đưa ra các giải pháp pháp lý và giải pháp thực tiễn cho các vụ việc cụ thể.",
            ],
          },
          {
            name: "Soạn thảo và rà soát tài liệu",
            items: [
              "- Soạn thảo các văn bản, tài liệu giao dịch liên quan đến hoạt động kinh doanh.",
              "- Xem xét, rà soát và xác nhận tính hợp pháp của các văn bản và tài liệu giao dịch.",
            ],
          },
          {
            name: "Hỗ trợ đàm phán và giao dịch",
            items: [
              "- Hỗ trợ chuẩn bị các tài liệu phục vụ thương thảo và đàm phán hợp đồng.",
              "- Tư vấn các vấn đề pháp lý liên quan đến các cuộc thảo luận, thương lượng và đàm phán kinh doanh.",
            ],
          },
          {
            name: "Tư vấn giải quyết tranh chấp",
            items: [
              "- Tư vấn hướng giải quyết chung liên quan đến các vụ khiếu nại, khiếu kiện hoặc tranh chấp cụ thể.",
              "- Phạm vi tư vấn không bao gồm việc đại diện tham gia giải quyết tranh chấp tại cơ quan nhà nước, tòa án hoặc trọng tài.",
            ],
          },
          {
            name: "Hỗ trợ xây dựng quy chế nội bộ",
            items: [
              "- Hỗ trợ xây dựng và soạn thảo Điều lệ công ty.",
              "- Soạn thảo Nội quy lao động và các quy chế quản lý, điều hành của doanh nghiệp.",
              "- Soạn thảo các văn bản quản trị nội bộ quan trọng khác.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- Hỗ trợ pháp lý kịp thời và liên tục: Doanh nghiệp được đội ngũ luật sư và chuyên viên pháp lý tư vấn thường xuyên trong quá trình hoạt động.",
        "- Phòng ngừa và hạn chế rủi ro pháp lý: Luật Phúc Gia Uy hỗ trợ rà soát và dự báo các rủi ro pháp lý có thể phát sinh.",
        "- Tư vấn soạn thảo và rà soát hợp đồng: Doanh nghiệp được hỗ trợ soạn thảo, chỉnh sửa và rà soát các hợp đồng và văn bản pháp lý.",
        "- Tiết kiệm chi phí pháp lý: Doanh nghiệp không cần xây dựng bộ phận pháp chế nội bộ nhưng vẫn được hỗ trợ bởi đội ngũ luật sư chuyên môn.",
        "- Đồng hành trong quá trình phát triển doanh nghiệp: Luật Phúc Gia Uy tư vấn chiến lược pháp lý dài hạn, giúp doanh nghiệp phát triển bền vững.",
      ],
    },

    lastPara: [
      "Với đội ngũ luật sư giàu kinh nghiệm và am hiểu pháp luật doanh nghiệp, Công ty Luật Phúc Gia Uy cam kết mang đến dịch vụ tư vấn pháp lý thường xuyên chuyên nghiệp, hiệu quả và luôn đặt lợi ích của khách hàng lên hàng đầu.",
    ],
  },
  {
    id: "thanh-lap-chi-nhanh",
    label: "Thành lập chi nhánh",
    tagline: "Doanh nghiệp",
    img: thanh_lap_chi_nhanh,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình mở rộng hoạt động kinh doanh, nhiều doanh nghiệp lựa chọn thành lập chi nhánh để gia tăng sự hiện diện trên thị trường và tiếp cận khách hàng ở các khu vực khác nhau. Tuy nhiên, thủ tục thành lập chi nhánh đòi hỏi phải tuân thủ đúng các quy định của pháp luật về đăng ký doanh nghiệp.",
      "Thành lập chi nhánh là bước đi quan trọng giúp doanh nghiệp mở rộng hoạt động và nâng cao năng lực cạnh tranh trên thị trường. Tuy nhiên, để đảm bảo thủ tục được thực hiện đúng quy định và nhanh chóng, việc lựa chọn một đơn vị tư vấn pháp lý uy tín là điều cần thiết.",
    ],

    explains: [
      {
        name: "1. Thành lập chi nhánh",
        description: [
          "Thành lập chi nhánh công ty là việc thành lập một đơn vị phụ thuộc của doanh nghiệp, có chức năng thực hiện toàn bộ hoặc một phần chức năng của doanh nghiệp, bao gồm cả chức năng đại diện theo uỷ quyền.",
          "Ngành nghề kinh doanh của chi nhánh phải phù hợp với ngành nghề kinh doanh của doanh nghiệp thành lập chi nhánh.",
        ],
        scopes: [
          {
            name: "Ý nghĩa của việc thành lập chi nhánh",
            items: [
              "- Mở rộng phạm vi hoạt động của doanh nghiệp.",
              "- Gia tăng khả năng tiếp cận khách hàng ở nhiều khu vực.",
              "- Nâng cao hiệu quả hoạt động kinh doanh của doanh nghiệp.",
            ],
          },
        ],
      },

      {
        name: "2. Lưu ý khi thành lập chi nhánh",
        description: [],
        scopes: [
          {
            name: "Các vấn đề cần lưu ý trước khi thành lập",
            items: [
              "- Tư cách hoạt động của chi nhánh.",
              "- Tên chi nhánh phải đúng quy định pháp luật.",
              "- Ngành nghề kinh doanh của chi nhánh phải phù hợp với ngành nghề của doanh nghiệp.",
              "- Lựa chọn hình thức hạch toán phù hợp.",
            ],
          },
          {
            name: "Các thủ tục cần thực hiện sau khi thành lập",
            items: [
              "- Nộp tờ khai thuế môn bài và thực hiện nghĩa vụ thuế môn bài của chi nhánh.",
              "- Làm biển và treo biển tại chi nhánh.",
              "- Đăng ký chữ ký số điện tử để thực hiện nghĩa vụ thuế điện tử.",
            ],
          },
        ],
      },

      {
        name: "3. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Nội dung hỗ trợ của PGU",
            items: [
              "- Tư vấn điều kiện thành lập chi nhánh của công ty.",
              "- Tư vấn lựa chọn hình thức hoạt động của chi nhánh.",
              "- Soạn thảo hồ sơ, tài liệu liên quan đến thủ tục thành lập chi nhánh.",
              "- Đại diện khách hàng nộp hồ sơ và theo dõi quá trình xử lý hồ sơ tại cơ quan nhà nước.",
              "- Tư vấn các loại thuế và lệ phí của chi nhánh.",
              "- Hỗ trợ các thủ tục pháp lý liên quan như thành lập địa điểm kinh doanh hoặc văn phòng đại diện.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "4. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- Được tư vấn đầy đủ các quy định pháp luật trong suốt quá trình thành lập chi nhánh.",
        "- Hồ sơ được tư vấn và soạn thảo dựa trên thông tin cụ thể của khách hàng.",
        "- Đại diện hoặc đồng hành cùng khách hàng làm việc với cơ quan nhà nước có thẩm quyền.",
        "- Hỗ trợ giải trình và xử lý các vấn đề phát sinh trong quá trình thực hiện thủ tục.",
        "- Giúp doanh nghiệp hạn chế rủi ro vi phạm thủ tục hành chính.",
      ],
    },

    lastPara: [
      "Công ty Luật Phúc Gia Uy sẵn sàng đồng hành và hỗ trợ doanh nghiệp trong mọi thủ tục liên quan đến thành lập chi nhánh, giúp doanh nghiệp yên tâm tập trung phát triển hoạt động kinh doanh.",
    ],
  },
  {
    id: "thanh-lap-van-phong-dai-dien",
    label: "Thành lập văn phòng đại diện",
    tagline: "Doanh nghiệp",
    img: thanh_lap_van_phong_dai_dien,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình mở rộng hoạt động, nhiều doanh nghiệp lựa chọn thành lập văn phòng đại diện nhằm tăng cường hoạt động giao dịch, xúc tiến thương mại và xây dựng hình ảnh thương hiệu tại các khu vực khác nhau. Tuy nhiên, thủ tục pháp lý liên quan đến việc thành lập văn phòng đại diện cần được thực hiện đúng theo quy định pháp luật.",
      "Công ty Luật Phúc Gia Uy hỗ trợ thành lập văn phòng đại diện trọn gói, giúp doanh nghiệp hoàn thiện hồ sơ, thực hiện thủ tục nhanh chóng và đúng quy định pháp luật.",
    ],

    explains: [
      {
        name: "1. Thành lập văn phòng đại diện",
        description: [
          "Văn phòng đại diện là đơn vị phụ thuộc của doanh nghiệp, có nhiệm vụ đại diện theo ủy quyền cho doanh nghiệp trong việc giao dịch, xúc tiến thương mại và hỗ trợ hoạt động kinh doanh.",
          "Văn phòng đại diện không trực tiếp thực hiện hoạt động kinh doanh sinh lợi mà chủ yếu thực hiện chức năng liên lạc, quảng bá và phát triển thị trường cho doanh nghiệp.",
        ],
        scopes: [
          {
            name: "Vai trò của văn phòng đại diện",
            items: [
              "-Tăng cường hoạt động giao dịch và xúc tiến thương mại.",
              "- Hỗ trợ doanh nghiệp mở rộng thị trường.",
              "- Quảng bá hình ảnh và thương hiệu của doanh nghiệp.",
            ],
          },
        ],
      },

      {
        name: "2. Các lưu ý quan trọng khi xin giấy phép thành lập văn phòng đại diện",
        description: [],
        scopes: [
          {
            name: "Các vấn đề cần chuẩn bị trước khi thành lập",
            items: [
              "- Đặt tên văn phòng đại diện đúng quy định pháp luật.",
              "- Xác định địa chỉ đặt văn phòng đại diện.",
              "- Kê khai thông tin người đứng đầu văn phòng đại diện.",
            ],
          },
          {
            name: "Các thủ tục cần thực hiện sau khi được cấp giấy chứng nhận",
            items: [
              "- Treo bảng hiệu tại văn phòng đại diện.",
              "- Nộp tờ khai và lệ phí môn bài theo quy định.",
            ],
          },
        ],
      },

      {
        name: "3. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Nội dung hỗ trợ của PGU",
            items: [
              "- Tư vấn các quy định pháp luật liên quan đến việc thành lập văn phòng đại diện.",
              "- Phân tích, so sánh ưu nhược điểm của văn phòng đại diện với các loại hình đơn vị phụ thuộc khác.",
              "- Tư vấn chi tiết trình tự và thủ tục đăng ký hoạt động văn phòng đại diện.",
              "- Soạn thảo hồ sơ và chuẩn bị toàn bộ tài liệu cần thiết để đăng ký văn phòng đại diện.",
              "- Thực hiện thủ tục xin cấp Giấy chứng nhận đăng ký hoạt động văn phòng đại diện.",
              "- Hỗ trợ khắc dấu văn phòng đại diện (nếu khách hàng yêu cầu).",
              "- Hướng dẫn nộp tờ khai và lệ phí môn bài cho văn phòng đại diện.",
              "- Tư vấn các vấn đề pháp lý phát sinh trong quá trình hoạt động của văn phòng đại diện.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "4. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- Được tư vấn pháp lý rõ ràng và chính xác.",
        "- Hồ sơ được hỗ trợ soạn thảo nhanh chóng và đầy đủ.",
        "- Tiết kiệm thời gian và chi phí thực hiện thủ tục.",
        "- Hạn chế rủi ro pháp lý trong quá trình đăng ký.",
      ],
    },

    lastPara: [
      "Việc thành lập văn phòng đại diện giúp doanh nghiệp mở rộng mạng lưới hoạt động và nâng cao khả năng tiếp cận thị trường.",
      "Luật Phúc Gia Uy sẵn sàng đồng hành và hỗ trợ doanh nghiệp thực hiện thủ tục thành lập văn phòng đại diện nhanh chóng, hiệu quả và đúng quy định pháp luật.",
    ],
  },
  {
    id: "dang-ky-dia-diem-kinh-doanh",
    label: "Đăng ký địa điểm kinh doanh",
    tagline: "Doanh nghiệp",
    img: thay_doi_dia_chi,
    color: "#A8171C",

    descriptions: [
      "Để mở rộng hoạt động kinh doanh tại nhiều địa điểm khác nhau, doanh nghiệp có thể lựa chọn đăng ký địa điểm kinh doanh. Tuy nhiên, thủ tục đăng ký cần được thực hiện theo đúng quy định pháp luật nhằm đảm bảo tính hợp pháp của hoạt động kinh doanh.",
      "Công ty Luật Phúc Gia Uy hỗ trợ đăng ký địa điểm kinh doanh trọn gói, giúp doanh nghiệp hoàn tất thủ tục nhanh chóng và đúng quy định.",
    ],

    explains: [
      {
        name: "1. Địa điểm kinh doanh",
        description: [
          "Địa điểm kinh doanh là nơi doanh nghiệp thực hiện hoạt động kinh doanh cụ thể ngoài trụ sở chính hoặc chi nhánh. Địa điểm kinh doanh không có tư cách pháp nhân và hoạt động phụ thuộc vào doanh nghiệp hoặc chi nhánh quản lý.",
          "Việc đăng ký địa điểm kinh doanh giúp doanh nghiệp mở rộng phạm vi hoạt động và thuận tiện trong việc tiếp cận khách hàng tại nhiều khu vực khác nhau.",
        ],
        scopes: [
          {
            name: "Vai trò của địa điểm kinh doanh",
            items: [
              "- Mở rộng phạm vi hoạt động kinh doanh của doanh nghiệp.",
              "- Tăng khả năng tiếp cận khách hàng tại nhiều khu vực.",
              "- Tạo điều kiện thuận lợi cho việc phát triển thị trường.",
            ],
          },
        ],
      },

      {
        name: "2. Các lưu ý quan trọng khi đăng ký địa điểm kinh doanh",
        description: [],
        scopes: [
          {
            name: "Các vấn đề cần chuẩn bị trước khi đăng ký",
            items: [
              "- Xác định tên địa điểm kinh doanh theo đúng quy định.",
              "- Xác định địa chỉ đặt địa điểm kinh doanh.",
              "- Kê khai thông tin người đứng đầu địa điểm kinh doanh.",
            ],
          },
          {
            name: "Các thủ tục cần thực hiện sau khi được cấp giấy chứng nhận",
            items: [
              "- Treo bảng hiệu tại địa điểm kinh doanh.",
              "- Thực hiện nghĩa vụ kê khai và nộp lệ phí môn bài theo quy định.",
            ],
          },
        ],
      },

      {
        name: "3. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Nội dung hỗ trợ của PGU",
            items: [
              "- Tư vấn đầy đủ các vấn đề pháp lý liên quan đến việc đăng ký địa điểm kinh doanh.",
              "- Hướng dẫn chuẩn bị và soạn thảo hồ sơ đăng ký địa điểm kinh doanh đúng quy định pháp luật.",
              "- Thay mặt khách hàng thực hiện thủ tục với cơ quan nhà nước có thẩm quyền và theo dõi quá trình giải quyết hồ sơ.",
              "- Hỗ trợ sửa đổi, bổ sung hồ sơ khi có yêu cầu từ cơ quan nhà nước.",
              "- Thực hiện các thủ tục liên quan đến kê khai và nộp thuế khi thành lập địa điểm kinh doanh.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "4. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- Được tư vấn pháp lý chính xác và đầy đủ.",
        "- Hồ sơ được chuẩn bị nhanh chóng và đúng quy định pháp luật.",
        "- Tiết kiệm thời gian thực hiện thủ tục hành chính.",
        "- Được hỗ trợ pháp lý trong quá trình hoạt động kinh doanh.",
      ],
    },

    lastPara: [
      "Đăng ký địa điểm kinh doanh là giải pháp hiệu quả giúp doanh nghiệp mở rộng hoạt động và phát triển thị trường.",
      "Với kinh nghiệm và sự tận tâm, Công ty Luật Phúc Gia Uy cam kết hỗ trợ doanh nghiệp thực hiện thủ tục đăng ký địa điểm kinh doanh nhanh chóng, thuận lợi và đúng quy định pháp luật.",
    ],
  },
  {
    id: "cap-nhat-thong-tin-doanh-nghiep",
    label: "Cập nhật thông tin doanh nghiệp",
    tagline: "Doanh nghiệp",
    img: cap_nhat_thong_tin,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình hoạt động, doanh nghiệp có thể phát sinh nhu cầu cập nhật hoặc thay đổi thông tin đăng ký doanh nghiệp để đảm bảo thông tin pháp lý luôn chính xác và phù hợp với thực tế hoạt động.",
      "Theo quy định pháp luật, khi có sự thay đổi các nội dung đăng ký doanh nghiệp, doanh nghiệp cần thực hiện thủ tục thông báo hoặc đăng ký thay đổi với cơ quan đăng ký kinh doanh đúng thời hạn.",
      "Công ty Luật Phúc Gia Uy cung cấp dịch vụ cập nhật và thay đổi đăng ký doanh nghiệp trọn gói, giúp doanh nghiệp hoàn tất thủ tục nhanh chóng, chính xác và đúng quy định pháp luật.",
    ],

    explains: [
      {
        name: "1. Cập nhật thông tin doanh nghiệp",
        description: [
          "Cập nhật thông tin doanh nghiệp là việc bổ sung hoặc điều chỉnh các thông tin liên quan đến doanh nghiệp trên hệ thống đăng ký kinh doanh quốc gia.",
          "Việc cập nhật giúp đảm bảo rằng các thông tin pháp lý của doanh nghiệp được ghi nhận đầy đủ, chính xác và phù hợp với tình trạng hoạt động thực tế.",
        ],
        scopes: [
          {
            name: "Các nội dung thường được cập nhật",
            items: [
              "- Cập nhật, bổ sung thông tin cá nhân của người đại diện theo pháp luật, chủ sở hữu hoặc thành viên như căn cước công dân, hộ chiếu, địa chỉ thường trú, địa chỉ liên lạc (không phải trường hợp thay đổi người).",
              "- Cập nhật địa chỉ công ty hoặc địa chỉ nhận thông báo thuế do thay đổi địa giới hành chính (không phải trường hợp thay đổi địa điểm kinh doanh).",
              "- Cập nhật hoặc bổ sung số điện thoại, thư điện tử (email), website của doanh nghiệp.",
            ],
          },
        ],
      },

      {
        name: "2. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Nội dung hỗ trợ của PGU",
            items: [
              "- Tư vấn các quy định pháp luật liên quan đến việc cập nhật hoặc thay đổi thông tin đăng ký doanh nghiệp.",
              "- Tư vấn phương án cập nhật thông tin phù hợp với tình hình hoạt động của doanh nghiệp.",
              "- Soạn thảo và hoàn thiện hồ sơ pháp lý cần thiết.",
              "- Đại diện doanh nghiệp nộp hồ sơ tại cơ quan đăng ký kinh doanh.",
              "- Theo dõi và xử lý hồ sơ cho đến khi hoàn tất thủ tục.",
              "- Hỗ trợ các thủ tục pháp lý liên quan sau khi cập nhật thông tin.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lợi ích khi lựa chọn dịch vụ",
      items: [
        "- Tiết kiệm thời gian và chi phí cho doanh nghiệp.",
        "- Hồ sơ được chuẩn bị chính xác và đúng quy định pháp luật.",
        "- Hạn chế các rủi ro pháp lý trong quá trình thực hiện thủ tục.",
        "- Được hỗ trợ pháp lý lâu dài trong quá trình hoạt động của doanh nghiệp.",
      ],
    },

    lastPara: [
      "Việc cập nhật thông tin doanh nghiệp giúp đảm bảo hồ sơ pháp lý luôn chính xác, minh bạch và tuân thủ đúng quy định pháp luật, tạo thuận lợi cho hoạt động kinh doanh.",
      "Công ty Luật Phúc Gia Uy cung cấp dịch vụ thay đổi đăng ký và cập nhật thông tin doanh nghiệp nhanh chóng, chính xác, giúp doanh nghiệp yên tâm tập trung phát triển hoạt động kinh doanh.",
    ],
  },
  {
    id: "doi-ten-doanh-nghiep",
    label: "Đổi tên doanh nghiệp",
    tagline: "Doanh nghiệp",
    img: doi_ten_doanh_nghiep,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình phát triển, nhiều doanh nghiệp có nhu cầu đổi tên doanh nghiệp để phù hợp hơn với chiến lược thương hiệu, mở rộng lĩnh vực hoạt động hoặc tái định vị trên thị trường.",
      "Tuy nhiên, việc thay đổi tên công ty không chỉ đơn thuần là thay đổi tên gọi mà còn phải thực hiện thủ tục pháp lý tại cơ quan đăng ký kinh doanh theo quy định của pháp luật.",
      "Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn và hỗ trợ thủ tục đổi tên doanh nghiệp nhanh chóng, đúng quy định, giúp doanh nghiệp tiết kiệm thời gian và hạn chế các rủi ro pháp lý trong quá trình thay đổi thông tin đăng ký kinh doanh.",
    ],

    explains: [
      {
        name: "1. Đổi tên doanh nghiệp",
        description: [
          "Đổi tên doanh nghiệp là việc doanh nghiệp thực hiện thủ tục thay đổi tên đã đăng ký trên Giấy chứng nhận đăng ký doanh nghiệp tại cơ quan đăng ký kinh doanh.",
        ],
        scopes: [
          {
            name: "Tên doanh nghiệp bao gồm hai thành phần chính",
            items: [
              "- Loại hình doanh nghiệp (Công ty TNHH, Công ty cổ phần, Doanh nghiệp tư nhân…).",
              "- Tên riêng của doanh nghiệp.",
            ],
          },
        ],
      },

      {
        name: "2. Lưu ý khi đổi tên doanh nghiệp",
        description: [
          "Khi thực hiện đổi tên công ty, doanh nghiệp cần lưu ý một số vấn đề sau:",
        ],
        scopes: [
          {
            name: "Các lưu ý quan trọng",
            items: [
              "- Tên doanh nghiệp mới không được trùng hoặc gây nhầm lẫn với doanh nghiệp đã đăng ký trước đó.",
              "- Không sử dụng tên cơ quan nhà nước, tổ chức chính trị, tổ chức xã hội nếu chưa được phép.",
              "- Sau khi đổi tên, doanh nghiệp cần cập nhật lại thông tin trên hóa đơn, hợp đồng, tài khoản ngân hàng, chữ ký số và các giấy phép liên quan.",
              "- Nếu doanh nghiệp có nhãn hiệu hoặc thương hiệu, nên cân nhắc việc đăng ký bảo hộ để tránh tranh chấp.",
            ],
          },
        ],
      },

      {
        name: "3. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Nội dung hỗ trợ của PGU",
            items: [
              "- Tra cứu, tư vấn và hỗ trợ đặt tên doanh nghiệp đảm bảo khả năng được Phòng Đăng ký Kinh doanh chấp thuận.",
              "- Soạn thảo hồ sơ thay đổi tên doanh nghiệp.",
              "- Đại diện khách hàng nộp và nhận kết quả tại Phòng Đăng ký Kinh doanh.",
              "- Khắc con dấu thể hiện tên mới của doanh nghiệp; hướng dẫn và hỗ trợ thay đổi tên trên các tài liệu pháp lý, chữ ký số, ngân hàng.",
              "- Hỗ trợ cập nhật thông tin tại cơ quan thuế, BHXH và các giấy tờ pháp lý liên quan khác như Giấy chứng nhận đăng ký đầu tư, Giấy chứng nhận quyền sử dụng đất, giấy phép con… (nếu khách hàng có nhu cầu).",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "4. Lợi ích khi chọn dịch vụ",
      items: [
        "- Được tư vấn pháp lý rõ ràng và chính xác.",
        "- Hồ sơ chuẩn xác, hạn chế việc bị trả hồ sơ.",
        "- Tiết kiệm thời gian và chi phí thực hiện thủ tục.",
        "- Được hỗ trợ trọn gói từ tư vấn đến hoàn tất thủ tục.",
        "- Đảm bảo tuân thủ đầy đủ quy định pháp luật.",
      ],
    },

    lastPara: [
      "Đổi tên doanh nghiệp là bước quan trọng trong quá trình xây dựng và phát triển thương hiệu. Việc thực hiện đúng quy trình pháp lý sẽ giúp doanh nghiệp tránh các rủi ro và đảm bảo hoạt động kinh doanh được liên tục.",
      "Công ty Luật Phúc Gia Uy cam kết cung cấp dịch vụ đổi tên doanh nghiệp nhanh chóng, chuyên nghiệp và hiệu quả, đồng hành cùng doanh nghiệp trong mọi giai đoạn phát triển.",
    ],
  },
  {
    id: "thay-doi-dia-chi-doanh-nghiep",
    label: "Thay đổi địa chỉ doanh nghiệp",
    tagline: "Doanh nghiệp",
    img: thay_doi_dia_chi,
    color: "#A8171C",

    descriptions: [
      "Thay đổi địa chỉ trụ sở chính là nhu cầu phát sinh phổ biến khi doanh nghiệp mở rộng hoạt động, thay đổi văn phòng hoặc di chuyển đến địa bàn thuận tiện hơn.",
      "Tuy nhiên, việc thay đổi địa chỉ công ty cần tuân thủ nhiều quy định, đặc biệt nếu địa chỉ mới khác tỉnh, thành phố hoặc xã, phường.",
    ],

    explains: [
      {
        name: "1. Thay đổi địa chỉ doanh nghiệp",
        description: [
          "Thay đổi địa chỉ doanh nghiệp là việc doanh nghiệp thực hiện thủ tục điều chỉnh địa chỉ trụ sở chính đã đăng ký trên Giấy chứng nhận đăng ký doanh nghiệp.",
        ],
        scopes: [
          {
            name: "Các trường hợp thay đổi địa chỉ",
            items: [
              "- Chuyển địa chỉ trong cùng xã/phường.",
              "- Chuyển địa chỉ sang xã/phường khác.",
              "- Chuyển địa chỉ sang tỉnh hoặc thành phố khác.",
            ],
          },
          {
            name: "Lưu ý",
            items: [
              "- Trường hợp thay đổi địa chỉ do thay đổi địa giới hành chính nhưng doanh nghiệp không thay đổi địa điểm kinh doanh thì thuộc trường hợp cập nhật địa chỉ công ty.",
            ],
          },
        ],
      },

      {
        name: "2. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Nội dung hỗ trợ của PGU",
            items: [
              "- Tư vấn quy trình và các quy định pháp luật liên quan đến việc thay đổi địa chỉ doanh nghiệp.",
              "- Đại diện doanh nghiệp thực hiện thủ tục quyết toán thuế để chuyển địa điểm tại cơ quan quản lý thuế hiện tại (nếu có) và thông báo việc chuyển địa điểm đến cơ quan quản lý thuế mới.",
              "- Soạn thảo hồ sơ, hướng dẫn chuẩn bị tài liệu cần thiết; đại diện làm việc, nộp hồ sơ và nhận kết quả điều chỉnh Giấy chứng nhận đăng ký doanh nghiệp tại Phòng Đăng ký Kinh doanh.",
              "- Khắc con dấu thể hiện địa chỉ mới của doanh nghiệp.",
              "- Hỗ trợ cập nhật chữ ký số và hóa đơn.",
              "- Hướng dẫn cập nhật thông tin trên hợp đồng và tại các cơ quan, tổ chức liên quan như cơ quan thuế, ngân hàng, bảo hiểm xã hội.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- Được tư vấn pháp lý chính xác và đầy đủ.",
        "- Hồ sơ được chuẩn bị nhanh chóng và đúng quy định.",
        "- Tiết kiệm thời gian và chi phí thực hiện thủ tục.",
        "- Hạn chế tối đa các rủi ro pháp lý phát sinh.",
        "- Được hỗ trợ trọn gói các thủ tục sau khi thay đổi.",
      ],
    },

    lastPara: [
      "Thay đổi địa chỉ doanh nghiệp là thủ tục quan trọng cần được thực hiện đúng quy định để tránh các rủi ro pháp lý trong quá trình hoạt động.",
      "Với kinh nghiệm và đội ngũ chuyên môn cao, Công ty Luật Phúc Gia Uy cam kết mang đến dịch vụ thay đổi đăng ký doanh nghiệp nhanh chóng, hiệu quả và an toàn cho doanh nghiệp.",
    ],
  },
  {
    id: "tang-von-dieu-le",
    label: "Tăng vốn điều lệ",
    tagline: "Doanh nghiệp",
    img: tang_von_dieu_le,
    color: "#A8171C",

    descriptions: [
      "Vốn điều lệ là một trong những yếu tố quan trọng thể hiện năng lực tài chính và quy mô hoạt động của doanh nghiệp. Trong quá trình phát triển, nhiều doanh nghiệp lựa chọn tăng vốn điều lệ nhằm mở rộng hoạt động kinh doanh, nâng cao uy tín với đối tác hoặc đáp ứng các yêu cầu pháp lý đối với một số ngành nghề kinh doanh.",
    ],

    explains: [
      {
        name: "1. Tăng vốn điều lệ",
        description: [
          "Vốn điều lệ là tổng giá trị tài sản do các thành viên công ty, chủ sở hữu công ty đã góp hoặc cam kết góp khi thành lập công ty trách nhiệm hữu hạn, công ty hợp danh; là tổng mệnh giá cổ phần đã bán hoặc được đăng ký mua khi thành lập công ty cổ phần.",
          "Vốn điều lệ được ghi nhận trên Giấy chứng nhận đăng ký doanh nghiệp. Trong quá trình hoạt động, doanh nghiệp có thể tăng vốn điều lệ nhưng phải thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký doanh nghiệp.",
        ],
        scopes: [
          {
            name: "Các hình thức tăng vốn điều lệ",
            items: [
              "- Thành viên hoặc cổ đông góp thêm vốn.",
              "- Tiếp nhận thành viên hoặc cổ đông mới.",
              "- Chuyển đổi lợi nhuận hoặc nguồn vốn khác thành vốn điều lệ.",
            ],
          },
        ],
      },

      {
        name: "2. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Nội dung hỗ trợ của PGU",
            items: [
              "- Tư vấn hình thức và phương án tăng vốn điều lệ phù hợp với quy định pháp luật và tình hình hoạt động của doanh nghiệp.",
              "- Soạn thảo hồ sơ tăng vốn điều lệ và đại diện doanh nghiệp nộp hồ sơ, nhận kết quả, làm việc với cơ quan nhà nước có thẩm quyền.",
              "- Hỗ trợ tư vấn các thủ tục liên quan đến việc tăng vốn điều lệ như kê khai và nộp thuế môn bài, chuyển quyền sở hữu khi góp vốn bằng tài sản khác, điều chỉnh Điều lệ công ty, cấp chứng từ góp vốn và các vấn đề pháp lý liên quan.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- Được tư vấn pháp lý chuyên sâu và chính xác.",
        "- Thực hiện thủ tục nhanh chóng và đúng quy định.",
        "- Hồ sơ được chuẩn bị đầy đủ và chính xác.",
        "- Giảm thiểu các rủi ro pháp lý trong quá trình thực hiện.",
        "- Tiết kiệm thời gian và chi phí cho doanh nghiệp.",
      ],
    },

    lastPara: [
      "Tăng vốn điều lệ là bước quan trọng giúp doanh nghiệp nâng cao năng lực tài chính và mở rộng quy mô hoạt động. Tuy nhiên, thủ tục này cần được thực hiện đúng quy định pháp luật để đảm bảo quyền lợi của doanh nghiệp và các thành viên góp vốn.",
      "Công ty Luật Phúc Gia Uy sẵn sàng hỗ trợ doanh nghiệp thực hiện thủ tục tăng vốn điều lệ nhanh chóng, hiệu quả và đúng quy định pháp luật.",
    ],
  },
  {
    id: "giam-von-dieu-le",
    label: "Giảm vốn điều lệ",
    tagline: "Doanh nghiệp",
    img: giam_von_dieu_le,
    color: "#A8171C",

    descriptions: [
      "Trong một số trường hợp, doanh nghiệp cần điều chỉnh vốn điều lệ nhằm phù hợp với tình hình hoạt động thực tế hoặc cơ cấu tài chính. Khi đó, doanh nghiệp phải thực hiện thủ tục giảm vốn điều lệ theo quy định của Luật Doanh nghiệp. Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn và hỗ trợ doanh nghiệp thực hiện thủ tục giảm vốn điều lệ nhanh chóng, đúng quy định pháp luật.",
    ],

    explains: [
      {
        name: "1. Giảm vốn điều lệ",
        description: [
          "Vốn điều lệ là tổng giá trị tài sản do các thành viên công ty, chủ sở hữu công ty đã góp hoặc cam kết góp khi thành lập công ty trách nhiệm hữu hạn, công ty hợp danh; là tổng mệnh giá cổ phần đã bán hoặc được đăng ký mua khi thành lập công ty cổ phần. Trong quá trình hoạt động, doanh nghiệp có thể đăng ký giảm vốn điều lệ, tuy nhiên cần kiểm tra kỹ các điều kiện để tránh những rủi ro pháp lý về sau.",
        ],
        scopes: [
          {
            name: "Các hình thức giảm vốn điều lệ",
            items: [
              "- Hoàn trả một phần vốn góp.",
              "- Không thanh toán đầy đủ và đúng hạn.",
              "- Mua lại phần vốn góp/cổ phần.",
              "- Hoàn trả vốn góp cho cổ đông sở hữu cổ phần có quyền ưu đãi hoàn lại.",
            ],
          },
        ],
      },

      {
        name: "2. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Nội dung hỗ trợ của PGU",
            items: [
              "- Tư vấn toàn diện các quy định liên quan đến việc giảm vốn và hình thức giảm vốn phù hợp đảm bảo tuân thủ pháp luật, tránh rủi ro pháp lý.",
              "- Soạn thảo hồ sơ pháp lý để thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký doanh nghiệp và các hồ sơ nội bộ khác của công ty như Điều lệ, cập nhật sổ đăng ký cổ đông hoặc giấy xác nhận phần vốn góp (nếu khách hàng có nhu cầu).",
              "- Đại diện doanh nghiệp nộp hồ sơ, nhận kết quả, giải trình và làm việc với Sở Tài chính, cơ quan thanh tra, cơ quan thuế về việc điều chỉnh Giấy chứng nhận đăng ký doanh nghiệp, cụ thể là giảm vốn điều lệ. Hỗ trợ tham gia các phiên họp, đón tiếp đoàn thanh tra (nếu có) đến kiểm tra việc góp vốn, sử dụng vốn.",
              "- Tư vấn, hỗ trợ và hướng dẫn thực hiện các thủ tục pháp lý có liên quan sau khi được Phòng Đăng ký Kinh doanh chấp thuận việc giảm vốn điều lệ.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- Tư vấn pháp lý chuyên sâu.",
        "- Thực hiện thủ tục nhanh chóng và đúng quy định.",
        "- Hồ sơ đầy đủ, chính xác.",
        "- Giảm thiểu rủi ro pháp lý.",
        "- Tiết kiệm thời gian và chi phí cho doanh nghiệp.",
      ],
    },

    lastPara: [
      "Giảm vốn điều lệ là thủ tục quan trọng cần thực hiện đúng quy định để đảm bảo quyền lợi của doanh nghiệp và các bên liên quan.",
      "Luật Phúc Gia Uy sẵn sàng đồng hành và hỗ trợ doanh nghiệp hoàn tất thủ tục một cách nhanh chóng, hiệu quả và đúng quy định pháp luật.",
    ],
  },
  {
    id: "chuyen-nhuong-von",
    label: "Chuyển nhượng vốn",
    tagline: "Doanh nghiệp",
    img: chuyen_nhuong_von,
    color: "#A8171C",

    descriptions: [
      "Chuyển nhượng vốn góp là hoạt động phổ biến trong quá trình hoạt động của doanh nghiệp, đặc biệt khi có sự thay đổi thành viên hoặc cổ đông. Việc chuyển nhượng vốn cần tuân thủ các quy định pháp luật và phải được đăng ký thay đổi thông tin doanh nghiệp. Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn và hỗ trợ doanh nghiệp thực hiện thủ tục chuyển nhượng vốn nhanh chóng, đúng quy định pháp luật.",
    ],

    explains: [
      {
        name: "1. Chuyển nhượng vốn là gì?",
        description: [
          "Chuyển nhượng vốn là hoạt động chuyển quyền sở hữu toàn bộ hoặc một phần cổ phần/ phần vốn góp từ cá nhân hoặc tổ chức này sang cá nhân hoặc tổ chức khác.",
        ],
      },

      {
        name: "2. Điều kiện để chuyển nhượng vốn",
        description: [],
        scopes: [
          {
            name: "Đối với công ty TNHH một thành viên",
            items: [
              "Chủ sở hữu có toàn quyền thực hiện thủ tục chuyển nhượng một phần hoặc toàn bộ phần vốn góp cho cá nhân/ tổ chức khác.",
            ],
          },
          {
            name: "Đối với công ty TNHH hai thành viên trở lên",
            items: [
              "- Thành viên muốn chuyển nhượng phần vốn góp phải chào bán phần vốn góp đó cho thành viên còn lại theo tỷ lệ tương ứng với phần vốn góp của thành viên còn lại trong công ty với cùng điều kiện chào bán.",
              "- Nếu các thành viên còn lại không mua hết trong thời hạn 30 ngày, thành viên đó mới được quyền chuyển nhượng cho người không phải là thành viên với điều kiện không thuận lợi hơn so với điều kiện chào bán cho các thành viên còn lại.",
            ],
          },
          {
            name: "Đối với công ty cổ phần",
            items: [
              "- Cổ phần được tự do chuyển nhượng, trừ cổ phần phổ thông của cổ đông sáng lập và điều lệ công ty có quy định hạn chế chuyển nhượng cổ phần.",
              "- Trong 03 năm kể từ ngày công ty được cấp Giấy chứng nhận đăng ký doanh nghiệp, cổ phần phổ thông của cổ đông sáng lập được tự do chuyển nhượng cho cổ đông sáng lập khác và chỉ được chuyển nhượng cho người không phải cổ đông sáng lập nếu được sự chấp thuận của Đại hội đồng cổ đông.",
            ],
          },
        ],
      },

      {
        name: "3. Phạm vi dịch vụ",
        description: [
          "- Rà soát chuyên sâu: Kiểm tra tình trạng pháp lý, tài chính và toàn bộ hồ sơ doanh nghiệp liên quan đến phần vốn chuyển nhượng.",
          "- Tư vấn phương án tối ưu: Đề xuất và tư vấn các lựa chọn chuyển nhượng phù hợp với nhu cầu của khách hàng, bao gồm bán toàn bộ hay một phần vốn, hình thức chuyển nhượng cổ phần hay vốn góp, và quy trình thực hiện thông qua Hội đồng thành viên/Đại hội đồng cổ đông hay không.",
          "- Soạn thảo hồ sơ đầy đủ: Chuẩn bị toàn bộ tài liệu cần thiết từ Hợp đồng chuyển nhượng, biên bản họp, quyết định, điều lệ sửa đổi đến các mẫu đơn đăng ký thay đổi theo đúng quy định pháp luật.",
          "- Đại diện thực hiện thủ tục: Thay mặt khách hàng nộp hồ sơ và làm việc trực tiếp với Sở Tài chính, cơ quan thuế, đảm bảo thủ tục hành chính hoàn tất nhanh chóng và chính xác.",
          "- Hỗ trợ sau giao dịch: Cung cấp sự hỗ trợ cần thiết trong việc cập nhật thông tin tại các ngân hàng, cơ quan liên quan nếu có yêu cầu.",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "4. Lợi ích khi chọn dịch vụ",
      items: [
        "- Hạn chế rủi ro pháp lý.",
        "- Thẩm định pháp lý toàn diện.",
        "- Thủ tục pháp lý chuẩn xác, nhanh chóng.",
        "- Quy trình chuyên nghiệp.",
        "- Hợp đồng chuyển nhượng an toàn, minh bạch.",
        "- Tối ưu hóa lợi ích tài chính và thuế.",
      ],
    },

    lastPara: [
      "Thủ tục chuyển nhượng vốn cần được thực hiện đúng quy định để tránh tranh chấp pháp lý.",
      "Luật Phúc Gia Uy luôn sẵn sàng hỗ trợ doanh nghiệp thực hiện thủ tục này nhanh chóng, hiệu quả và đúng quy định pháp luật.",
    ],
  },
  {
    id: "thay-doi-dai-dien-phap-luat",
    label: "Thay đổi đại diện pháp luật",
    tagline: "Doanh nghiệp",
    img: thay_doi_dai_dien_theo_pl,
    color: "#A8171C",

    descriptions: [
      "Người đại diện theo pháp luật là cá nhân đại diện cho doanh nghiệp thực hiện các quyền và nghĩa vụ phát sinh từ hoạt động kinh doanh. Khi có sự thay đổi về nhân sự quản lý, doanh nghiệp cần thực hiện thủ tục thay đổi người đại diện theo pháp luật. Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn và hỗ trợ thủ tục thay đổi người đại diện theo pháp luật nhanh chóng, đúng quy định.",
    ],

    explains: [
      {
        name: "1. Thay đổi đại diện pháp luật là gì?",
        description: [
          "Người đại diện theo pháp luật là cá nhân được doanh nghiệp chỉ định để đại diện cho doanh nghiệp trong các giao dịch và quan hệ pháp lý. Thông tin người đại diện được ghi nhận trên Giấy chứng nhận đăng ký doanh nghiệp.",
        ],
      },

      {
        name: "2. Phạm vi dịch vụ",
        description: [
          "Tư vấn chuyên sâu và xây dựng phương án tối ưu: Tư vấn chi tiết về các điều kiện pháp lý đối với người đại diện mới theo Luật Doanh nghiệp 2020, đồng thời phân tích loại hình doanh nghiệp để đưa ra phương án thay đổi phù hợp nhất.",
          "Soạn thảo và hoàn thiện hồ sơ pháp lý: Chuẩn bị toàn bộ văn bản pháp lý cần thiết để thực hiện thủ tục thay đổi người đại diện theo pháp luật.",
          "Đại diện thực hiện thủ tục hành chính: Thay mặt khách hàng nộp hồ sơ tại Phòng Đăng ký kinh doanh, theo dõi tiến độ và chủ động làm việc với cơ quan chức năng để xử lý mọi vấn đề phát sinh.",
          "Bàn giao kết quả cuối cùng: Nhận Giấy chứng nhận đăng ký doanh nghiệp mới và bàn giao tận tay khách hàng một cách nhanh chóng.",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- Tư vấn pháp lý chuyên sâu: Đội ngũ Luật sư và chuyên viên của PGU hướng dẫn chi tiết các quy định pháp luật liên quan, giúp doanh nghiệp nắm rõ điều kiện, quy trình thực hiện và hạn chế rủi ro pháp lý.",
        "- Tiết kiệm thời gian và chi phí: PGU thực hiện toàn bộ quy trình từ soạn thảo hồ sơ, nộp hồ sơ đến theo dõi và nhận kết quả tại cơ quan có thẩm quyền.",
        "- Đảm bảo tính chính xác của hồ sơ: Hồ sơ được chuẩn bị đầy đủ, đúng quy định, hạn chế tối đa các sai sót có thể dẫn đến việc hồ sơ bị yêu cầu sửa đổi, bổ sung hoặc bị từ chối.",
        "- Tư vấn thủ tục pháp lý sau khi thay đổi: PGU tiếp tục tư vấn các vấn đề pháp lý liên quan đến việc cập nhật thông tin nhà đầu tư và các nghĩa vụ pháp lý cần thực hiện để đảm bảo hoạt động của doanh nghiệp thuận lợi.",
      ],
    },

    lastPara: [
      "Thay đổi người đại diện theo pháp luật là thủ tục quan trọng trong quản trị doanh nghiệp.",
      "Luật Phúc Gia Uy sẽ giúp doanh nghiệp hoàn tất thủ tục nhanh chóng, hiệu quả và đúng quy định pháp luật.",
    ],
  },
  {
    id: "thay-doi-loai-hinh-doanh-nghiep",
    label: "Thay đổi loại hình doanh nghiệp",
    tagline: "Doanh nghiệp",
    img: thay_doi_loai_hinh_doanh_nghiep,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình phát triển, doanh nghiệp có thể cần thay đổi loại hình để phù hợp với chiến lược kinh doanh và nhu cầu huy động vốn. Việc chuyển đổi loại hình doanh nghiệp cần tuân thủ đúng quy định pháp luật. Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn và hỗ trợ trọn gói để doanh nghiệp thực hiện thủ tục chuyển đổi loại hình nhanh chóng, chính xác và hiệu quả.",
    ],

    explains: [
      {
        name: "1. Thay đổi loại hình doanh nghiệp là gì?",
        intros: [
          "Thay đổi loại hình doanh nghiệp là việc chuyển đổi hình thức pháp lý của doanh nghiệp. Các hình thức chuyển đổi bao gồm:",
        ],
        description: [
          "Chuyển đổi công ty TNHH thành công ty cổ phần",
          "Chuyển đổi công ty cổ phần thành công ty TNHH (một thành viên hoặc hai thành viên trở lên)",
          "Chuyển đổi công ty TNHH một thành viên thành công ty TNHH hai thành viên trở lên",
          "Chuyển đổi công ty TNHH hai thành viên trở lên thành công ty TNHH một thành viên",
          "Chuyển đổi doanh nghiệp tư nhân",
        ],
      },

      {
        name: "2. Phạm vi dịch vụ",
        description: [
          "Tư vấn pháp lý: Hướng dẫn chi tiết các quy định pháp luật liên quan, giúp lựa chọn hình thức chuyển đổi phù hợp, tư vấn các vấn đề về quản lý, thuế, tài chính và quyền lợi pháp lý của doanh nghiệp.",
          "Soạn thảo hồ sơ: Chuẩn bị đầy đủ giấy tờ cần thiết để thực hiện thủ tục chuyển đổi loại hình doanh nghiệp theo quy định pháp luật.",
          "Hướng dẫn nghĩa vụ tài chính: Tư vấn và hướng dẫn thực hiện các nghĩa vụ tài chính theo quy định pháp luật.",
          "Thực hiện thủ tục tại cơ quan nhà nước: Đại diện nộp hồ sơ tại Phòng Đăng ký kinh doanh, theo dõi tiến độ và xử lý các vấn đề phát sinh. Nếu có Giấy chứng nhận đăng ký đầu tư, thực hiện điều chỉnh phù hợp.",
          "Nhận kết quả và bàn giao: Nhận Giấy chứng nhận đăng ký doanh nghiệp mới, Giấy chứng nhận đăng ký đầu tư mới (nếu có) và bàn giao tận nơi cho khách hàng.",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- Đảm bảo tính pháp lý, hạn chế rủi ro: Thủ tục được thực hiện đúng quy định, tránh vi phạm hành chính.",
        "- Tiết kiệm thời gian và công sức: Dịch vụ trọn gói từ tư vấn, soạn hồ sơ, nộp và nhận kết quả.",
        "- Tư vấn chuyên sâu, hỗ trợ toàn diện: Luật sư và chuyên viên pháp lý giàu kinh nghiệm tư vấn giải pháp phù hợp trong suốt quá trình thực hiện thủ tục.",
        "- Bảo mật thông tin khách hàng: Cam kết bảo mật tuyệt đối mọi thông tin, dữ liệu nội bộ và kế hoạch kinh doanh.",
        "- Chi phí hợp lý, minh bạch: Mức phí rõ ràng, không phát sinh chi phí ẩn.",
        "- Hạn chế gián đoạn hoạt động kinh doanh: Quy trình chuyên nghiệp giúp hoàn tất thủ tục nhanh chóng, hạn chế tối đa ảnh hưởng đến hoạt động thường ngày.",
      ],
    },

    lastPara: [
      "Việc chuyển đổi loại hình doanh nghiệp cần được thực hiện đúng quy định để đảm bảo hoạt động kinh doanh ổn định.",
      "Luật Phúc Gia Uy cam kết mang đến dịch vụ chuyên nghiệp, hiệu quả và trọn gói cho doanh nghiệp.",
    ],
  },
  {
    id: "thay-doi-nganh-nghe-kinh-doanh",
    label: "Thay đổi ngành nghề kinh doanh",
    tagline: "Doanh nghiệp",
    img: thay_doi_nganh_nghe,
    color: "#A8171C",

    descriptions: [
      "Khi doanh nghiệp mở rộng hoặc thay đổi lĩnh vực hoạt động, cần thực hiện thủ tục bổ sung hoặc thay đổi ngành nghề kinh doanh theo quy định pháp luật. Công ty Luật Phúc Gia Uy cung cấp dịch vụ trọn gói, giúp doanh nghiệp thực hiện thủ tục nhanh chóng, chính xác và hiệu quả.",
    ],

    explains: [
      {
        name: "1. Thay đổi ngành nghề kinh doanh là gì?",
        description: [
          "Khi doanh nghiệp mở rộng hoặc thay đổi lĩnh vực hoạt động, cần thực hiện thủ tục bổ sung hoặc thay đổi ngành nghề kinh doanh theo quy định pháp luật.",
        ],
        scopes: [
          {
            name: "Thay đổi ngành nghề kinh doanh là việc doanh nghiệp:",
            items: [
              "- Bổ sung ngành nghề mới",
              "- Loại bỏ ngành nghề cũ",
              "- Điều chỉnh nội dung ngành nghề",
            ],
          },
          {
            name: "Khi thực hiện thủ tục thay đổi ngành nghề kinh doanh, doanh nghiệp cần lưu ý những vấn đề sau:",
            items: [
              "- Xác định đúng mã ngành",
              "- Sửa đổi Điều lệ công ty",
              "- Tuân thủ thời hạn theo quy định",
              "- Lựa chọn ngành nghề phù hợp",
              "- Thực hiện các thủ tục pháp lý liên quan",
              "- Rà soát nghĩa vụ thuế",
            ],
          },
        ],
      },

      {
        name: "2. Phạm vi dịch vụ",
        description: [
          "Tư vấn pháp lý: Tư vấn chi tiết về các quy định pháp luật liên quan đến việc thay đổi ngành nghề kinh doanh, tư vấn lựa chọn mã ngành nghề phù hợp theo yêu cầu của doanh nghiệp và tuân thủ quy định của pháp luật",
          "Soạn thảo hồ sơ: Chuẩn bị đầy đủ các giấy tờ cần thiết để thực hiện thủ tục thay đổi ngành nghề kinh doanh theo đúng quy định pháp luật.",
          "Thực hiện thủ tục tại cơ quan có thẩm quyền: Đại diện nộp hồ sơ tại Phòng Đăng ký kinh doanh thuộc Sở Tài Chính nơi doanh nghiệp đặt địa chỉ trụ sở, theo dõi tiến độ và xử lý các vấn đề phát sinh. Trong trường hợp doanh nghiệp có Giấy chứng nhận đăng ký đầu tư, thực hiện thủ tục điều chỉnh Giấy chứng nhận đăng ký đầu tư phù hợp theo quy định của pháp luật.",
          "Nhận kết quả và bàn giao: Nhận Giấy chứng nhận đăng ký doanh nghiệp mới, Giấy chứng nhận đăng ký đầu tư mới (nếu có) và bàn giao tận nơi cho khách hàng.",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- PGU thay mặt khách hàng thực hiện toàn bộ thủ tục pháp lý liên quan đến việc bổ sung ngành nghề kinh doanh, từ khâu soạn thảo hồ sơ, đại diện nộp hồ sơ tại Phòng Đăng ký kinh doanh, theo dõi và xử lý hồ sơ cho đến khi nhận được kết quả cuối cùng. Nhờ đó, doanh nghiệp có thể tiết kiệm đáng kể thời gian và tập trung vào hoạt động kinh doanh.",
        "- Với kinh nghiệm trong lĩnh vực pháp lý doanh nghiệp, PGU hỗ trợ khách hàng thực hiện thủ tục một cách nhanh chóng và hiệu quả hơn so với việc tự thực hiện. Đồng thời, PGU cung cấp dịch vụ với mức chi phí hợp lý, minh bạch và phù hợp với nhu cầu của doanh nghiệp.",
        "- Đội ngũ Luật sư và chuyên viên pháp lý của PGU sẽ tư vấn, rà soát và chuẩn bị hồ sơ đầy đủ, chính xác theo quy định pháp luật hiện hành, giúp hạn chế tối đa các sai sót có thể dẫn đến việc hồ sơ bị từ chối hoặc phải sửa đổi, bổ sung.",
        "- PGU tư vấn chi tiết về các vấn đề pháp lý liên quan đến việc bổ sung ngành nghề kinh doanh như: điều kiện kinh doanh đối với ngành nghề có điều kiện, yêu cầu về vốn pháp định (nếu có), cũng như các rủi ro pháp lý có thể phát sinh và phương án xử lý phù hợp.",
        "- PGU cam kết bảo mật tuyệt đối mọi thông tin và dữ liệu nội bộ của doanh nghiệp, bao gồm các kế hoạch, chiến lược kinh doanh và các tài liệu liên quan trong suốt quá trình cung cấp dịch vụ.",
      ],
    },

    lastPara: [
      "Thay đổi ngành nghề kinh doanh giúp doanh nghiệp mở rộng hoạt động và phát triển bền vững.",
      "Luật Phúc Gia Uy sẵn sàng đồng hành và hỗ trợ doanh nghiệp thực hiện thủ tục một cách nhanh chóng, hiệu quả và đúng quy định pháp luật.",
    ],
  },
  {
    id: "giai-the-doanh-nghiep",
    label: "Giải thể doanh nghiệp",
    tagline: "Doanh nghiệp",
    img: giai_the_cong_ty,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình hoạt động, doanh nghiệp có thể giải thể do thay đổi chiến lược, thị trường hoặc khó khăn tài chính. Việc giải thể cần thực hiện đúng quy định để hoàn tất nghĩa vụ với cơ quan nhà nước, đối tác và người lao động.",
      "Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn và hỗ trợ giải thể doanh nghiệp trọn gói, giúp doanh nghiệp hoàn tất thủ tục nhanh chóng, đúng quy định và hạn chế rủi ro pháp lý.",
    ],

    explains: [
      {
        name: "1. Giải thể doanh nghiệp là gì?",
        description: [
          "Giải thể doanh nghiệp là việc chấm dứt sự tồn tại của doanh nghiệp theo quyết định của chủ sở hữu, các thành viên hoặc cổ đông, hoặc theo yêu cầu của cơ quan nhà nước có thẩm quyền khi doanh nghiệp không còn đáp ứng điều kiện hoạt động.",
        ],
        scopes: [
          {
            name: "Doanh nghiệp chỉ được giải thể khi:",
            items: [
              "- Đã thanh toán hết các khoản nợ và nghĩa vụ tài sản",
              "- Không đang trong quá trình giải quyết tranh chấp tại tòa án hoặc trọng tài",
              "- Hoàn tất nghĩa vụ thuế và nghĩa vụ với người lao động",
            ],
          },
        ],
      },

      {
        name: "2. Các trường hợp doanh nghiệp thực hiện thủ tục giải thể",
        description: [
          "Đã hết thời hạn hoạt động được ghi nhận trong Điều lệ công ty mà không gia hạn",
          "Theo quyết định giải thể của chủ sở hữu/Hội đồng thành viên/Đại hội đồng cổ đông",
          "Công ty không đáp ứng đủ điều kiện về số lượng thành viên tối thiểu theo quy định pháp luật trong thời hạn 06 tháng liên tục nhưng không chuyển đổi loại hình doanh nghiệp",
          "Doanh nghiệp bị thu hồi Giấy chứng nhận đăng ký doanh nghiệp, trừ trường hợp Luật có quy định khác",
        ],
      },

      {
        name: "3. Phạm vi dịch vụ",
        description: [
          "Tư vấn quy định pháp luật về giải thể doanh nghiệp",
          "Tư vấn phương án giải thể phù hợp với tình hình doanh nghiệp",
          "Soạn thảo toàn bộ hồ sơ pháp lý",
          "Đại diện doanh nghiệp làm việc với cơ quan nhà nước",
          "Theo dõi và xử lý hồ sơ cho đến khi hoàn tất thủ tục giải thể",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "4. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- Tiết kiệm thời gian và chi phí thực hiện thủ tục",
        "- Hồ sơ được chuẩn bị đầy đủ và chính xác",
        "- Đảm bảo tuân thủ quy định pháp luật",
        "- Hạn chế tối đa các rủi ro pháp lý phát sinh",
        "- Được hỗ trợ và tư vấn pháp lý trong suốt quá trình thực hiện",
      ],
    },

    lastPara: [
      "Luật Phúc Gia Uy cam kết mang đến dịch vụ pháp lý chuyên nghiệp, hiệu quả và đồng hành cùng doanh nghiệp trong quá trình hoàn tất thủ tục giải thể.",
    ],
  },
  {
    id: "tam-ngung-hoat-dong",
    label: "Tạm ngừng hoạt động doanh nghiệp",
    tagline: "Doanh nghiệp",
    img: tam_ngung_hoat_dong,
    color: "#A8171C",

    descriptions: [
      "Trong một số giai đoạn nhất định, doanh nghiệp có thể cần tạm ngừng hoạt động kinh doanh để tái cấu trúc, thay đổi chiến lược hoặc giải quyết khó khăn về tài chính. Việc tạm ngừng hoạt động phải được thông báo và đăng ký với cơ quan đăng ký kinh doanh theo quy định của pháp luật.",
      "Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn và hỗ trợ thủ tục tạm ngừng hoạt động doanh nghiệp nhanh chóng, giúp doanh nghiệp hoàn tất thủ tục đúng quy định và tránh các rủi ro pháp lý.",
    ],

    explains: [
      {
        name: "1. Tạm ngừng hoạt động doanh nghiệp là gì?",
        description: [
          "Tạm ngừng hoạt động doanh nghiệp là việc doanh nghiệp tạm thời dừng hoạt động sản xuất, kinh doanh trong một khoảng thời gian nhất định nhưng không chấm dứt tư cách pháp nhân của doanh nghiệp.",
        ],
        scopes: [
          {
            name: "Trong thời gian tạm ngừng hoạt động:",
            items: [
              "- Doanh nghiệp không phát sinh hoạt động kinh doanh",
              "- Vẫn phải thực hiện các nghĩa vụ theo quy định nếu có phát sinh",
              "- Thời gian tạm ngừng phải được thông báo với cơ quan đăng ký kinh doanh",
            ],
          },
        ],
      },

      {
        name: "2. Các trường hợp doanh nghiệp tạm ngừng kinh doanh",
        description: [
          "- Doanh nghiệp chủ động tạm ngừng hoạt động: Tái cơ cấu hoặc thay đổi chiến lược kinh doanh; Khó khăn về tài chính hoặc thị trường; Tạm dừng để hoàn thiện các thủ tục pháp lý; Thay đổi địa điểm hoặc cơ sở hoạt động hoặc lý do khác.",
          "- Theo yêu cầu của cơ quan có thẩm quyền: Trong một số trường hợp, cơ quan quản lý nhà nước có thể yêu cầu doanh nghiệp tạm ngừng hoạt động để kiểm tra, khắc phục vi phạm hoặc hoàn thiện các điều kiện kinh doanh theo quy định.",
        ],
      },

      {
        name: "3. Phạm vi dịch vụ",
        description: [
          "Tư vấn quy định pháp luật về tạm ngừng hoạt động",
          "Soạn thảo hồ sơ tạm ngừng kinh doanh",
          "Đại diện nộp hồ sơ tại cơ quan đăng ký kinh doanh",
          "Theo dõi và xử lý hồ sơ",
          "Bàn giao kết quả cho doanh nghiệp",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "4. Lợi ích khi sử dụng dịch vụ",
      items: [
        "- Tiết kiệm thời gian và chi phí thực hiện thủ tục",
        "- Hồ sơ được chuẩn bị đầy đủ và chính xác",
        "- Đảm bảo tuân thủ quy định pháp luật",
        "- Hạn chế tối đa các rủi ro pháp lý phát sinh",
        "- Được hỗ trợ và tư vấn pháp lý trong suốt quá trình thực hiện",
      ],
    },

    lastPara: [
      "Luật Phúc Gia Uy luôn đồng hành cùng doanh nghiệp trong việc thực hiện các thủ tục pháp lý liên quan đến hoạt động kinh doanh.",
    ],
  },
  {
    id: "cham-dut-chi-nhanh",
    label: "Chấm dứt chi nhánh, văn phòng đại diện",
    tagline: "Doanh nghiệp",
    img: cham_dut_van_phong,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình hoạt động, doanh nghiệp có thể quyết định chấm dứt hoạt động chi nhánh hoặc văn phòng đại diện nhằm tái cơ cấu tổ chức hoặc tối ưu hóa hoạt động kinh doanh. Khi đó, doanh nghiệp cần thực hiện thủ tục pháp lý tại cơ quan đăng ký kinh doanh và cơ quan thuế theo quy định.",
      "Công ty Luật Phúc Gia Uy cung cấp dịch vụ tư vấn và hỗ trợ thủ tục chấm dứt hoạt động chi nhánh, văn phòng đại diện nhanh chóng, chính xác và đúng quy định pháp luật",
    ],

    explains: [
      {
        name: "1. Chấm dứt hoạt động chi nhánh, văn phòng đại diện là gì?",
        description: [
          "Chấm dứt hoạt động chi nhánh hoặc văn phòng đại diện là việc doanh nghiệp thực hiện thủ tục đóng cửa và kết thúc hoạt động của đơn vị phụ thuộc đã đăng ký trước đó.",
          "Sau khi hoàn tất thủ tục, chi nhánh hoặc văn phòng đại diện sẽ không còn tồn tại về mặt pháp lý trong hệ thống đăng ký doanh nghiệp.",
        ],
      },

      {
        name: "2. Các trường hợp doanh nghiệp chấm dứt hoạt động chi nhánh, văn phòng đại diện",
        description: [
          "Tái cơ cấu tổ chức và hoạt động kinh doanh, thay đổi chiến lược phát triển thị trường: Doanh nghiệp điều chỉnh để nâng cao hiệu quả hoạt động, chuyển hướng phát triển sang khu vực hoặc lĩnh vực khác, không còn nhu cầu duy trì chi nhánh hoặc văn phòng đại diện tại địa điểm cũ.",
          "Hoạt động không hiệu quả, khó khăn về tài chính hoặc quản lý: Chi nhánh hoặc văn phòng đại diện không đạt hiệu quả kinh doanh như mong muốn, doanh nghiệp quyết định chấm dứt hoạt động để giảm chi phí vận hành.",
          "Theo yêu cầu của cơ quan quản lý nhà nước: Trong một số trường hợp, chi nhánh hoặc văn phòng đại diện có thể bị yêu cầu chấm dứt hoạt động nếu không đáp ứng các điều kiện pháp lý hoặc vi phạm quy định pháp luật.",
        ],
      },

      {
        name: "3. Phạm vi dịch vụ",
        description: [
          "Tư vấn quy định pháp luật về chấm dứt hoạt động",
          "Soạn thảo hồ sơ pháp lý",
          "Đại diện nộp hồ sơ tại cơ quan đăng ký kinh doanh",
          "Theo dõi và xử lý hồ sơ",
          "Bàn giao kết quả hoàn tất thủ tục",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "4. Lợi ích khi sử dụng dịch vụ",
      intros: [
        "Lựa chọn Luật Phúc Gia Uy mang lại nhiều lợi ích cho doanh nghiệp: ",
      ],
      items: [
        "- Tiết kiệm thời gian và chi phí thực hiện thủ tục",
        "- Hồ sơ được chuẩn bị đầy đủ và chính xác",
        "- Đảm bảo tuân thủ quy định pháp luật",
        "- Hạn chế tối đa các rủi ro pháp lý phát sinh",
        "- Được hỗ trợ và tư vấn pháp lý trong suốt quá trình thực hiện",
      ],
    },

    lastPara: [
      "Công ty Luật Phúc Gia Uy luôn cam kết mang đến dịch vụ pháp lý chuyên nghiệp và hiệu quả, đồng hành cùng doanh nghiệp trong mọi giai đoạn hoạt động.",
    ],
  },
  {
    id: "giay-phep-moi-truong",
    label: "Giấy phép môi trường",
    tagline: "Giấy phép",
    img: giay_phep_moi_truong,
    color: "#A8171C",

    descriptions: [
      "Giấy phép môi trường là yêu cầu quan trọng trong hoạt động đầu tư, sản xuất, kinh doanh. Không chỉ là thủ tục hành chính, đây còn là công cụ quản lý của Nhà nước nhằm phòng ngừa ô nhiễm và bảo đảm phát triển bền vững.",
      "Với đội ngũ chuyên gia pháp lý giàu kinh nghiệm, Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ tư vấn, soạn thảo và đại diện thực hiện thủ tục xin Giấy phép môi trường trọn gói, giúp doanh nghiệp tiết kiệm thời gian, hạn chế rủi ro và đảm bảo tuân thủ đúng quy định của pháp luật.",
    ],

    explains: [
      {
        name: "1. Giấy phép môi trường là gì?",
        description: [
          "Giấy phép môi trường là văn bản do cơ quan quản lý nhà nước có thẩm quyền cấp cho tổ chức, cá nhân có hoạt động sản xuất, kinh doanh, dịch vụ được phép xả chất thải ra môi trường, quản lý chất thải, nhập khẩu phế liệu từ nước ngoài làm nguyên liệu sản xuất kèm theo yêu cầu và điều kiện về bảo vệ môi trường theo quy định của pháp luật (khoản 8 Điều 3 Luật Bảo vệ môi trường năm 2020).",
        ],
      },

      {
        name: "2. Phạm vi dịch vụ",
        description: ["Chúng tôi cung cấp các dịch vụ như sau: "],
        scopes: [
          {
            name: "Khảo sát và đánh giá sơ bộ dự án",
            items: [
              "- Xem xét ngành nghề, quy mô, công suất của cơ sở để xác định dự án thuộc nhóm I, II hay III theo Luật Bảo vệ môi trường 2020",
              "- Tư vấn ban đầu để doanh nghiệp xác định có cần xin Giấy phép môi trường hay chỉ cần đăng ký môi trường",
            ],
          },
          {
            name: "Tư vấn và chuẩn bị hồ sơ pháp lý",
            items: [
              "- Hướng dẫn doanh nghiệp thu thập đầy đủ các giấy tờ cần thiết như giấy phép đầu tư, giấy chứng nhận đăng ký doanh nghiệp, báo cáo ĐTM, giấy phép xây dựng",
              "- Rà soát và chuẩn hóa hồ sơ pháp lý nhằm hạn chế sai sót hoặc thiếu thông tin",
            ],
          },
          {
            name: "Lập hồ sơ kỹ thuật, báo cáo chuyên ngành môi trường",
            items: [
              "- Soạn thảo báo cáo quản lý chất thải và hồ sơ hệ thống xử lý nước thải, khí thải, chất thải rắn",
              "- Xây dựng phương án phòng ngừa và ứng phó sự cố môi trường phù hợp với hoạt động sản xuất của doanh nghiệp",
              "- Chuẩn bị tài liệu kỹ thuật và bản vẽ hệ thống xử lý theo đúng quy chuẩn",
            ],
          },
          {
            name: "Đại diện nộp và theo dõi hồ sơ",
            items: [
              "- Trực tiếp làm việc với Bộ Tài nguyên và Môi trường hoặc UBND cấp tỉnh/thành phố tùy theo thẩm quyền",
              "- Giải trình, bổ sung hồ sơ và xử lý các yêu cầu phát sinh từ cơ quan quản lý",
            ],
          },
          {
            name: "Bàn giao giấy phép môi trường",
            items: [
              "- Bàn giao giấy phép môi trường hợp lệ để doanh nghiệp vận hành dự án đúng tiến độ",
              "- Hướng dẫn doanh nghiệp niêm yết, công khai và lưu trữ giấy phép theo quy định",
            ],
          },
          {
            name: "Hỗ trợ pháp lý sau cấp phép",
            items: [
              "- Tư vấn nghĩa vụ định kỳ như báo cáo công tác bảo vệ môi trường, quan trắc môi trường và vận hành thử nghiệm hệ thống xử lý chất thải",
              "- Hỗ trợ gia hạn, điều chỉnh hoặc xin cấp lại giấy phép khi doanh nghiệp thay đổi quy mô hoặc ngành nghề",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lý do nên sử dụng dịch vụ của PGU",
      items: [
        "Việc xin Giấy phép môi trường là yêu cầu pháp lý bắt buộc đối với nhiều doanh nghiệp, tuy nhiên quá trình thực hiện thường phức tạp và tốn thời gian. Công ty Luật TNHH Phúc Gia Uy & Cộng sự cam kết đồng hành cùng doanh nghiệp để thực hiện thủ tục này một cách nhanh chóng - đúng luật - hiệu quả.",
        "Tiết kiệm thời gian và công sức: PGU sẽ đại diện doanh nghiệp chuẩn bị toàn bộ hồ sơ, trực tiếp làm việc với cơ quan nhà nước, xử lý các tình huống phát sinh. Doanh nghiệp không cần mất thời gian tìm hiểu quy trình pháp lý hay lo lắng về các thủ tục thay đổi liên tục.",
        "Đội ngũ pháp lý giàu kinh nghiệm: Với đội ngũ luật sư và chuyên viên pháp lý nhiều năm kinh nghiệm, PGU đảm bảo hồ sơ được soạn thảo đúng quy định, hạn chế tối đa việc bị trả hồ sơ hay yêu cầu bổ sung, tăng tỷ lệ được cấp phép ngay từ lần đầu",
        "Đồng hành sau dịch vụ: Chúng tôi không chỉ dừng lại ở việc xin giấy phép môi trường, mà còn tư vấn các giải pháp pháp lý dài hạn, giúp doanh nghiệp duy trì hoạt động ổn định, tuân thủ các quy định pháp luật về môi trường trong suốt quá trình vận hành",
        "Chi phí minh bạch, rõ ràng: Toàn bộ chi phí dịch vụ đều được báo giá trọn gói, công khai, không phát sinh thêm chi phí ẩn. Doanh nghiệp có thể yên tâm tập trung vào sản xuất, kinh doanh - mọi vấn đề pháp lý đã có PGU hỗ trợ",
      ],
    },

    lastPara: [
      "Nếu Quý doanh nghiệp có nhu cầu thực hiện thủ tục xin Giấy phép môi trường, hãy liên hệ với Công ty Luật Phúc Gia Uy để được tư vấn và hỗ trợ nhanh chóng, kịp thời và hiệu quả.",
    ],
  },
  {
    id: "giay-phep-hoa-chat",
    label: "Giấy phép hóa chất",
    tagline: "Giấy phép",
    img: hoa_chat,
    color: "#A8171C",

    descriptions: [
      "Trong bối cảnh công nghiệp phát triển mạnh, hóa chất giữ vai trò quan trọng nhưng cũng tiềm ẩn nhiều rủi ro đối với an toàn, sức khỏe và môi trường. Vì vậy, hoạt động quản lý, kinh doanh và sử dụng hóa chất phải tuân thủ các quy định pháp luật, trong đó Giấy phép hóa chất là yêu cầu quan trọng nhằm bảo đảm an toàn và đúng quy định.",
      "Với kinh nghiệm thực tiễn và hiểu biết sâu về pháp luật chuyên ngành, PGU cung cấp dịch vụ tư vấn và thực hiện trọn gói thủ tục xin Giấy phép hóa chất, giúp doanh nghiệp nhanh chóng hoàn tất hồ sơ, hạn chế rủi ro pháp lý và yên tâm tập trung vào hoạt động sản xuất - kinh doanh.",
    ],

    explains: [
      {
        name: "1. Giấy phép kinh doanh hóa chất là gì?",
        description: [
          "Giấy phép kinh doanh hóa chất là văn bản do cơ quan có thẩm quyền (Bộ Công Thương) cấp cho doanh nghiệp, cho phép thực hiện hoạt động sản xuất, kinh doanh và buôn bán hóa chất theo đúng quy định của pháp luật.",
        ],
      },
      {
        name: "2. Các loại giấy phép hóa chất",
        description: [
          "Giấy chứng nhận đủ điều kiện sản xuất, kinh doanh hóa chất: Áp dụng cho các hóa chất sản xuất, kinh doanh có điều kiện trong lĩnh vực công nghiệp.",
          "Giấy phép sản xuất, kinh doanh hóa chất hạn chế: Áp dụng đối với các loại hóa chất thuộc danh mục hạn chế kinh doanh do có mức độ nguy hiểm cao.",
          "Xác nhận khai báo hóa chất nhập khẩu: Áp dụng khi tổ chức, cá nhân thực hiện hoạt động nhập khẩu hóa chất vào Việt Nam.",
        ],
      },
      {
        name: "3. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Khảo sát và tư vấn sơ bộ",
            items: [
              "- Đánh giá loại hình hoạt động sản xuất, kinh doanh hoặc nhập khẩu hóa chất của doanh nghiệp",
              "- Xác định doanh nghiệp có cần xin giấy phép hay không và cần xin loại giấy phép phù hợp",
            ],
          },
          {
            name: "Soạn thảo và hoàn thiện hồ sơ",
            items: [
              "- Chuẩn bị hồ sơ pháp lý và hồ sơ kỹ thuật theo quy định",
              "- Xây dựng hồ sơ kho chứa, phương án phòng ngừa sự cố hóa chất và hồ sơ nhân sự phụ trách an toàn hóa chất",
              "- Hỗ trợ dịch thuật, công chứng giấy tờ khi cần thiết",
            ],
          },
          {
            name: "Đại diện nộp hồ sơ và làm việc với cơ quan nhà nước",
            items: [
              "- Đại diện doanh nghiệp nộp hồ sơ tại Cục Hóa chất - Bộ Công Thương hoặc Sở Công Thương",
              "- Theo dõi tiến trình xử lý hồ sơ, bổ sung tài liệu và giải trình khi có yêu cầu",
            ],
          },
          {
            name: "Nhận và bàn giao giấy phép",
            items: [
              "- Bàn giao giấy phép kinh doanh hóa chất đúng thời hạn",
              "- Đảm bảo doanh nghiệp đủ điều kiện pháp lý để hoạt động",
            ],
          },
          {
            name: "Hỗ trợ pháp lý sau cấp phép",
            items: [
              "- Tư vấn nghĩa vụ pháp lý liên quan đến an toàn hóa chất, PCCC và xử lý chất thải",
              "- Hỗ trợ gia hạn, điều chỉnh hoặc bổ sung giấy phép khi doanh nghiệp thay đổi hoạt động",
            ],
          },
        ],
      },
    ],

    processes: [
      {
        title: "4. Quy trình thực hiện",
        steps: [
          {
            num: "01",
            title: "Bước 1: Tiếp nhận thông tin và tư vấn sơ bộ",
            desc: "Thu thập thông tin về loại hình hoạt động của doanh nghiệp (sản xuất, kinh doanh, nhập khẩu). \nXác định loại giấy phép cần xin và các điều kiện pháp lý liên quan",
          },
          {
            num: "02",
            title: "Bước 2: Đánh giá điều kiện thực tế và rà soát hồ sơ",
            desc: "Kiểm tra cơ sở vật chất, kho chứa và nhân sự phụ trách hóa chất. \nRà soát giấy tờ pháp lý như đăng ký doanh nghiệp, hồ sơ môi trường và PCCC. \nĐề xuất phương án khắc phục nếu doanh nghiệp chưa đáp ứng điều kiện.",
          },

          {
            num: "03",
            title: "Bước 3: Soạn thảo và hoàn thiện hồ sơ",
            desc: "Chuẩn bị đầy đủ các tài liệu theo quy định như đơn đề nghị, bản vẽ mặt bằng, hồ sơ PCCC, bằng cấp chuyên môn và MSDS",
          },
          {
            num: "04",
            title: "Bước 4: Đại diện doanh nghiệp nộp hồ sơ",
            desc: "Nộp hồ sơ tại Sở Công Thương hoặc Cục Hóa chất - Bộ Công Thương. \nTheo dõi tình trạng hồ sơ và xử lý các yêu cầu bổ sung.",
          },
          {
            num: "05",
            title: "Bước 5: Nhận giấy phép và bàn giao",
            desc: "Kiểm tra tính hợp lệ của giấy phép trước khi bàn giao. \nHướng dẫn doanh nghiệp lưu trữ và sử dụng giấy phép đúng quy định.",
          },
        ],
      },
    ],

    reasons: {
      title: "5. Lợi ích khi lựa chọn dịch vụ tại PGU",
      items: [
        "Việc xin Giấy phép hóa chất là một thủ tục pháp lý phức tạp, liên quan đến nhiều yếu tố kỹ thuật và an toàn nghiêm ngặt. Khi đồng hành cùng PGU, doanh nghiệp sẽ được hỗ trợ toàn diện với gói dịch vụ trọn gói - nhanh chóng, chính xác và đúng quy định pháp luật.",
        "Am hiểu chuyên sâu về hồ sơ pháp lý ngành hóa chất: Hồ sơ xin Giấy phép hóa chất không chỉ đơn thuần là giấy tờ hành chính, mà còn bao gồm các tài liệu kỹ thuật như thiết kế kho chứa, phương án phòng cháy chữa cháy, hồ sơ nhân sự phụ trách hóa chất... Đội ngũ chuyên viên của Phúc Gia Uy có kinh nghiệm thực tế và chuyên môn sâu, giúp xây dựng hồ sơ hoàn chỉnh ngay từ đầu, giảm thiểu rủi ro bị yêu cầu chỉnh sửa, bổ sung.",
        "Tiết kiệm thời gian - giảm áp lực thủ tục: Thủ tục xin phép thường phải thực hiện tại Sở Công Thương hoặc Cục Hóa chất - Bộ Công Thương, bao gồm nhiều bước nộp, giải trình và bổ sung. Phúc Gia Uy sẽ đại diện doanh nghiệp làm việc trực tiếp với cơ quan chức năng, giúp khách hàng tiết kiệm đáng kể thời gian, công sức và tránh các vướng mắc hành chính không cần thiết.",
        "Chi phí minh bạch theo từng loại hình hoạt động: Mỗi loại hình kinh doanh hóa chất sẽ có yêu cầu pháp lý và mức độ phức tạp khác nhau. Phúc Gia Uy báo giá rõ ràng theo từng trường hợp cụ thể, cam kết không phát sinh ngoài hợp đồng. Khách hàng được tư vấn đầy đủ về chi phí và nội dung công việc ngay từ đầu, giúp doanh nghiệp chủ động trong việc lựa chọn dịch vụ phù hợp với nhu cầu và ngân sách.",
        "Tư vấn tuân thủ pháp luật và hỗ trợ dài hạn: Không chỉ hỗ trợ xin cấp phép ban đầu, Phúc Gia Uy còn tư vấn các nghĩa vụ pháp lý liên quan đến an toàn hóa chất, phòng chống cháy nổ, quản lý chất thải, và đào tạo cán bộ phụ trách. Trong quá trình hoạt động, doanh nghiệp cũng sẽ được hỗ trợ khi cần gia hạn, điều chỉnh hoặc bổ sung nội dung giấy phép.",
      ],
    },

    lastPara: [
      "Chủ động thực hiện và duy trì các yêu cầu của giấy phép hóa chất cũng chính là cách doanh nghiệp khẳng định uy tín, nâng cao năng lực quản lý và hướng tới phát triển bền vững trong lĩnh vực đầy tiềm ẩn rủi ro này. Nếu có nhu cầu tìm một tổ chức pháp lý uy tín, giàu kinh nghiệm để đồng hành xuyên suốt, Công ty Luật Phúc Gia Uy & Cộng sự là sự lựa chọn phù hợp dành cho mọi quý khách hàng.",
    ],
  },
  {
    id: "giay-phep-pccc",
    label: "Phòng cháy chữa cháy",
    tagline: "Giấy phép",
    img: pccc,
    color: "#A8171C",

    descriptions: [
      "Trong bối cảnh đô thị hóa và phát triển công nghiệp ngày càng mạnh mẽ, nguy cơ cháy nổ luôn tiềm ẩn và có thể xảy ra bất cứ lúc nào nếu thiếu các biện pháp phòng ngừa hiệu quả. Phòng cháy chữa cháy (PCCC) không chỉ là yêu cầu bắt buộc theo quy định pháp luật mà còn là trách nhiệm của mỗi cơ quan, doanh nghiệp và cá nhân nhằm bảo vệ tính mạng con người, tài sản và môi trường sống.",
      "Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ tư vấn và thực hiện trọn gói thủ tục xin Giấy phép PCCC, hỗ trợ doanh nghiệp chuẩn bị đầy đủ hồ sơ, phối hợp với đơn vị thiết kế - thi công và làm việc với cơ quan công an PCCC, giúp tiết kiệm thời gian, chi phí và đảm bảo tuân thủ đúng quy định pháp luật hiện hành.",
    ],

    explains: [
      {
        name: "1. Giấy phép phòng cháy chữa cháy là gì?",
        description: [
          "Giấy phép phòng cháy chữa cháy (Giấy chứng nhận đủ điều kiện về PCCC) là văn bản do cơ quan công an có thẩm quyền cấp cho các cơ sở, công trình hoặc phương tiện đáp ứng đầy đủ các điều kiện về phòng cháy và chữa cháy theo quy định của pháp luật.",
        ],
      },
      {
        name: "2. Đối tượng cần thực hiện thủ tục",
        intros: [
          "Dự án, công trình quy định tại Phụ lục V ban hành kèm theo Nghị định 50/2024/NĐ-CP khi xây dựng mới hoặc cải tạo, thay đổi tính chất sử dụng dẫn đến các trường hợp như:",
        ],
        description: [
          "Tăng quy mô về số tầng hoặc diện tích khoang cháy",
          "Thay đổi chủng loại hoặc vị trí thang bộ thoát nạn",
          "Giảm số lượng lối thoát nạn của tầng, khoang cháy hoặc công trình",
          "Lắp mới hoặc thay thế hệ thống báo cháy",
          "Lắp mới hoặc thay thế hệ thống chữa cháy",
          "Thay đổi công năng làm tăng yêu cầu an toàn cháy đối với công trình",
        ],
        lastIntro: [
          "Phương tiện giao thông cơ giới có yêu cầu đặc biệt về bảo đảm an toàn PCCC khi chế tạo mới hoặc hoán cải ảnh hưởng đến các yêu cầu an toàn theo quy định tại Nghị định 136/2020/NĐ-CP.",
        ],
      },
      {
        name: "3. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Tiếp nhận và tư vấn",
            items: [
              "Tư vấn điều kiện và thủ tục xin giấy phép PCCC cho từng loại hình cơ sở như nhà xưởng, kho hàng, chung cư, khách sạn, nhà hàng, quán karaoke, vũ trường, trung tâm thương mại",
            ],
          },
          {
            name: "Hướng dẫn chuẩn bị hồ sơ",
            items: [
              "Hướng dẫn chuẩn bị hồ sơ pháp lý, bản vẽ thiết kế và phương án phòng cháy chữa cháy theo đúng quy định",
            ],
          },
          {
            name: "Đại diện làm việc với cơ quan chức năng",
            items: [
              "Đại diện khách hàng làm việc với cơ quan công an PCCC trong quá trình thẩm duyệt hồ sơ",
            ],
          },
          {
            name: "Theo dõi và xử lý hồ sơ",
            items: [
              "Theo dõi tiến độ xử lý hồ sơ, bổ sung tài liệu khi cần và xử lý các vướng mắc phát sinh",
            ],
          },
          {
            name: "Bàn giao giấy phép",
            items: [
              "Nhận và bàn giao giấy phép PCCC nhanh chóng, đúng thời hạn",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "4. Lợi ích khi lựa chọn dịch vụ tại PGU",
      intros: [
        "Giấy phép Phòng cháy chữa cháy (PCCC) là một điều kiện pháp lý bắt buộc đối với nhiều công trình, cơ sở sản xuất, kinh doanh. Tuy nhiên, quá trình xin cấp phép thường phức tạp, đòi hỏi hồ sơ kỹ thuật chuyên sâu và sự phối hợp chặt chẽ với cơ quan chức năng.",
        "Công ty Luật TNHH Phúc Gia Uy & Cộng sự mang đến giải pháp pháp lý toàn diện, hỗ trợ doanh nghiệp từ khâu chuẩn bị đến khi hoàn tất cấp phép, với những lợi ích thiết thực sau:",
      ],
      items: [
        "Hiểu rõ chuyên môn - xử lý hồ sơ hiệu quả: Hồ sơ PCCC yêu cầu bản vẽ kỹ thuật, thuyết minh biện pháp phòng cháy, phương án thoát nạn, phương tiện chữa cháy, và nhiều tài liệu kỹ thuật khác. Phúc Gia Uy & Cộng sự phối hợp chặt chẽ với đơn vị thiết kế, thi công để chuẩn bị đầy đủ và chính xác từng hạng mục hồ sơ, giúp tăng tỷ lệ phê duyệt ngay từ lần đầu.",
        "Tiết kiệm thời gian - giảm áp lực thủ tục: Thay vì doanh nghiệp phải trực tiếp đi lại, nộp hồ sơ, bổ sung và giải trình, chúng tôi sẽ đại diện toàn bộ quá trình làm việc với cơ quan PCCC, giúp tiết kiệm thời gian, công sức và tránh vướng mắc do thiếu kinh nghiệm thực hiện",
        "Chi phí rõ ràng - dịch vụ trọn gói: Chúng tôi báo giá minh bạch, chi tiết theo từng loại công trình hoặc hoạt động, ký kết hợp đồng dịch vụ rõ ràng, cam kết không phát sinh chi phí ngoài thỏa thuận.",
        "Tư vấn tuân thủ - hỗ trợ sau cấp phép: Sau khi được cấp Giấy phép PCCC, doanh nghiệp vẫn phải đảm bảo nhiều nghĩa vụ liên quan như duy trì hệ thống PCCC, tổ chức huấn luyện, diễn tập định kỳ... Phúc Gia Uy & Cộng sự tư vấn đầy đủ các yêu cầu pháp lý cần tuân thủ và sẵn sàng hỗ trợ khi có phát sinh như gia hạn, điều chỉnh hoặc kiểm tra định kỳ.",
      ],
    },

    lastPara: [
      "Chủ động hoàn thiện hồ sơ, tuân thủ quy định sẽ giúp bạn hạn chế rủi ro pháp lý và phòng ngừa những sự cố đáng tiếc. Vì thế, hãy liên hệ ngay đến PGU nếu như bạn cần sự hỗ trợ về mặt pháp lý. ",
    ],
  },
  {
    id: "hoan-cong-nha-xuong",
    label: "Hoàn công nhà xưởng",
    tagline: "Giấy phép",
    img: hoan_cong_nha_xuong,
    color: "#A8171C",

    descriptions: [
      "Trong quá trình xây dựng nhà xưởng, nhiều doanh nghiệp thường tập trung vào thiết kế và thi công mà quên mất một khâu pháp lý quan trọng là hoàn công. Đây là thủ tục bắt buộc nhằm xác nhận công trình đã được xây dựng đúng theo giấy phép và đủ điều kiện đưa vào sử dụng.",
      "Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ tư vấn và thực hiện trọn gói thủ tục hoàn công nhà xưởng, hỗ trợ doanh nghiệp từ khâu chuẩn bị hồ sơ, làm việc với đơn vị thiết kế - thi công và cơ quan nhà nước, giúp quá trình hoàn công diễn ra nhanh chóng, hợp pháp và hiệu quả.",
    ],

    explains: [
      {
        name: "1. Hoàn công nhà xưởng là gì?",
        description: [
          "Hoàn công (nghiệm thu hoàn thành công trình xây dựng) là thủ tục pháp lý xác nhận công trình đã được thi công xong theo đúng giấy phép xây dựng đã được cấp.",
          "Sau khi hoàn công, cơ quan có thẩm quyền sẽ cập nhật hiện trạng công trình vào giấy chứng nhận quyền sử dụng đất, qua đó bảo đảm tính pháp lý cho nhà xưởng trong quá trình sử dụng, chuyển nhượng hoặc đầu tư mở rộng.",
        ],
      },
      {
        name: "2. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Tư vấn pháp lý ban đầu",
            items: [
              "- Tư vấn quy định pháp luật về hoàn công theo Luật Xây dựng 2014 (sửa đổi, bổ sung năm 2020) và các nghị định liên quan",
              "- Xác định điều kiện hoàn công, nghĩa vụ của chủ đầu tư và các yêu cầu liên quan đến PCCC, môi trường",
            ],
          },
          {
            name: "Khảo sát và đánh giá hiện trạng công trình",
            items: [
              "- Kiểm tra hồ sơ thiết kế, giấy phép xây dựng và tiến độ thi công",
              "- Đánh giá sự phù hợp giữa hiện trạng công trình và giấy phép xây dựng để hạn chế vi phạm pháp lý",
            ],
          },
          {
            name: "Soạn thảo và hoàn thiện hồ sơ hoàn công",
            items: [
              "- Lập bản vẽ hoàn công theo đúng mẫu quy định",
              "- Chuẩn bị các tài liệu bắt buộc:",
              "  + Biên bản nghiệm thu hoàn thành công trình",
              "  + Hồ sơ nghiệm thu PCCC nếu thuộc diện bắt buộc",
              "  + Hồ sơ môi trường (ĐTM hoặc cam kết bảo vệ môi trường)",
              "  + Văn bản xác nhận an toàn công trình theo quy định",
            ],
          },
          {
            name: "Đại diện khách hàng làm việc với cơ quan nhà nước",
            items: [
              "- Nộp hồ sơ hoàn công tại cơ quan có thẩm quyền",
              "- Theo dõi tiến trình xử lý hồ sơ và giải trình khi có yêu cầu bổ sung",
              "- Đề xuất phương án khắc phục nếu hồ sơ bị trả lại hoặc cần chỉnh sửa",
            ],
          },
          {
            name: "Bàn giao kết quả cho khách hàng",
            items: [
              "- Nhận và bàn giao hồ sơ hoàn công hợp pháp",
              "- Hướng dẫn cập nhật thông tin công trình vào Giấy chứng nhận quyền sử dụng đất",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lý do chọn dịch vụ Hoàn công nhà xưởng tại PGU",
      intros: [
        "Thủ tục hoàn công nhà xưởng là bước bắt buộc để công trình được pháp lý công nhận và đảm bảo quyền lợi cho doanh nghiệp trong quá trình vận hành, chuyển nhượng hoặc đầu tư mở rộng. Với đặc thù pháp lý và kỹ thuật phức tạp, việc lựa chọn một đơn vị có kinh nghiệm và chuyên môn là yếu tố then chốt để thủ tục diễn ra thuận lợi, nhanh chóng",
        "Công ty Luật TNHH Phúc Gia Uy & Cộng sự là đơn vị tư vấn pháp lý uy tín, sẵn sàng đồng hành cùng doanh nghiệp với những lợi ích vượt trội:",
      ],
      items: [
        "Kinh nghiệm thực hiện đa dạng công trình: Chúng tôi đã xử lý hoàn công cho nhiều loại hình nhà xưởng: từ nhà máy sản xuất, kho bãi, xưởng cơ khí, đến các công trình xây dựng hạ tầng công nghiệp - mỗi hồ sơ đều được xử lý bài bản, đúng quy định pháp luật hiện hành.",
        "Hồ sơ đầy đủ, đúng kỹ thuật - đúng pháp lý: Đội ngũ chuyên viên của chúng tôi phối hợp chặt chẽ với đơn vị thiết kế, thi công và cơ quan chức năng để soạn thảo, kiểm tra và hoàn thiện hồ sơ đầy đủ, đúng mẫu biểu, đảm bảo tính pháp lý và kỹ thuật.",
        "Tiết kiệm thời gian, không phát sinh rắc rối: Doanh nghiệp không cần trực tiếp đi lại, làm việc với các bên liên quan. PGU đại diện trọn gói: từ nộp hồ sơ, bổ sung tài liệu đến theo dõi và xử lý các vấn đề phát sinh, giúp thủ tục hoàn công diễn ra nhanh gọn và hiệu quả.",
        "Chi phí minh bạch - cam kết không phát sinh: Chúng tôi báo giá trọn gói theo từng loại công trình và quy mô, với hợp đồng dịch vụ rõ ràng, minh bạch - không chi phí ẩn, không phát sinh ngoài thỏa thuận.",
        "Tư vấn pháp lý đồng hành sau hoàn công: Sau khi hoàn công, chúng tôi tiếp tục hỗ trợ doanh nghiệp trong các thủ tục liên quan như: cập nhật giấy chứng nhận quyền sử dụng đất, đăng ký tài sản gắn liền với đất, xin giấy phép hoạt động, PCCC, môi trường… giúp doanh nghiệp yên tâm vận hành và mở rộng quy mô.",
      ],
    },

    lastPara: [
      "Nếu doanh nghiệp của bạn đang có nhu cầu thực hiện thủ tục hoàn công nhà xưởng, vui lòng liên hệ chúng tôi để được tư vấn chi tiết và hỗ trợ trọn gói, đảm bảo đúng quy định pháp luật và tiết kiệm thời gian.",
    ],
  },
  {
    id: "giay-phep-lao-dong",
    label: "Giấy phép lao động",
    tagline: "Giấy phép",
    img: lao_dong,
    color: "#A8171C",

    descriptions: [
      "Trong xu hướng hội nhập quốc tế, nhu cầu sử dụng lao động nước ngoài tại Việt Nam ngày càng tăng. Giấy phép lao động (GPLĐ) là điều kiện bắt buộc để người nước ngoài làm việc hợp pháp theo quy định pháp luật. Hiểu rõ thủ tục và điều kiện cấp phép sẽ giúp doanh nghiệp và người lao động tránh rủi ro pháp lý.",
      "Với kinh nghiệm thực tiễn và sự am hiểu sâu sắc về pháp luật lao động - xuất nhập cảnh, Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ tư vấn và thực hiện trọn gói thủ tục xin Giấy phép lao động, giúp doanh nghiệp và người lao động nước ngoài tiết kiệm thời gian, tuân thủ đầy đủ quy định pháp luật và yên tâm làm việc lâu dài tại Việt Nam.",
    ],

    explains: [
      {
        name: "1. Giấy phép lao động là gì?",
        description: [
          "Giấy phép lao động (Work Permit) là giấy tờ pháp lý do cơ quan nhà nước có thẩm quyền cấp, cho phép người lao động mang quốc tịch nước ngoài được làm việc hợp pháp tại Việt Nam.",
        ],
      },
      {
        name: "2. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Tư vấn pháp lý chuyên sâu",
            items: [
              "- Phân tích điều kiện tuyển dụng lao động nước ngoài theo quy định của Bộ luật Lao động 2019 và Nghị định 219/2025/NĐ-CP.",
              "- Xác định đối tượng phải xin giấy phép và trường hợp được miễn, hướng dẫn thủ tục xin Giấy xác nhận miễn GPLĐ nếu đủ điều kiện",
              "- Tư vấn về thời hạn giấy phép, quy định gia hạn, cấp lại và thu hồi.",
            ],
          },
          {
            name: "Chuẩn bị và hoàn thiện hồ sơ",
            items: [
              "- Soạn thảo văn bản giải trình nhu cầu sử dụng lao động nước ngoài",
              "- Hướng dẫn và hỗ trợ hợp pháp hóa lãnh sự, dịch thuật công chứng các giấy tờ nước ngoài",
              "- Chuẩn bị đầy đủ hồ sơ cá nhân: lý lịch tư pháp, giấy khám sức khỏe, bằng cấp, chứng minh kinh nghiệm theo đúng yêu cầu pháp luật",
            ],
          },
          {
            name: "Đại diện thực hiện thủ tục hành chính",
            items: [
              "- Nộp hồ sơ trực tiếp hoặc trực tuyến qua Cổng Dịch vụ công Quốc gia",
              "- Theo dõi tiến trình xử lý hồ sơ và kịp thời bổ sung khi có yêu cầu",
              "- Làm việc với cơ quan quản lý lao động để đảm bảo hồ sơ được xét duyệt nhanh chóng",
            ],
          },
          {
            name: "Bàn giao kết quả và hỗ trợ sau cấp phép",
            items: [
              "- Nhận và bàn giao giấy phép lao động hợp lệ cho khách hàng đúng thời hạn",
              "- Tư vấn và hỗ trợ xin thẻ tạm trú, gia hạn GPLĐ, hoặc cấp lại khi có thay đổi thông tin",
              "- Cập nhật các quy định mới, đảm bảo khách hàng luôn tuân thủ pháp luật trong suốt quá trình sử dụng lao động nước ngoài.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lý do chọn dịch vụ xin Giấy phép lao động tại PGU",
      items: [
        "Tư vấn cá nhân hóa cho từng doanh nghiệp: Nhiều doanh nghiệp không nắm rõ trường hợp của mình có thuộc diện miễn giấy phép lao động hay không, dẫn đến việc chuẩn bị hồ sơ sai hướng. PGU sẽ phân tích từng trường hợp cụ thể - từ nhà quản lý, chuyên gia, lao động kỹ thuật đến di chuyển nội bộ trong doanh nghiệp, và cung cấp hướng pháp lý tối ưu để tránh lãng phí thời gian và chi phí cho doanh nghiệp",
        "Hỗ trợ toàn diện trong thủ tục hồ sơ: Hồ sơ xin Giấy phép lao động yêu cầu nhiều loại giấy tờ phức tạp như: giấy khám sức khỏe, lý lịch tư pháp, giấy tờ chứng minh kinh nghiệm, bằng cấp… PGU không chỉ hướng dẫn mà còn đại diện doanh nghiệp liên hệ để hợp pháp hóa lãnh sự, dịch thuật công chứng và bổ sung hồ sơ y tế, giúp doanh nghiệp hoàn thiện hồ sơ một cách đầy đủ và hợp lệ ngay từ lần nộp đầu tiên.",
        "Quy trình nhanh chóng - tiết kiệm thời gian: Quá trình làm việc với Sở Lao động - Thương binh & Xã hội có thể phát sinh nhiều yêu cầu bổ sung và giải trình. PGU sẽ đại diện doanh nghiệp làm việc trực tiếp với cơ quan nhà nước, giải quyết mọi vấn đề kịp thời, giúp doanh nghiệp không bị gián đoạn hoạt động và nhanh chóng hoàn tất thủ tục.",
        "Chi phí minh bạch - không phát sinh ngoài hợp đồng: PGU cam kết báo giá rõ ràng và chi tiết cho từng hạng mục (dịch thuật, công chứng, hợp pháp hóa, phí nhà nước…). Chúng tôi luôn ký kết hợp đồng dịch vụ rõ ràng, giúp doanh nghiệp dễ dàng kiểm soát ngân sách và không lo phát sinh chi phí ngoài thỏa thuận.",
        "Chuyên phục vụ doanh nghiệp FDI: PGU hỗ trợ xuyên suốt trong mọi khâu: tư vấn, soạn thảo hồ sơ và làm việc với cơ quan nhà nước. Nhờ đó, ban lãnh đạo và người lao động nước ngoài có thể dễ dàng nắm rõ quy trình và không bị rào cản ngôn ngữ làm khó khăn.",
      ],
    },

    lastPara: [
      "Nếu Quý khách hàng đang có nhu cầu thực hiện thủ tục xin giấy phép lao động, vui lòng liên hệ chúng tôi để được tư vấn chi tiết và hỗ trợ trọn gói, đảm bảo đúng quy định pháp luật và tiết kiệm thời gian.",
    ],
  },
  {
    id: "giay-an-ninh-trat-tu",
    label: "Giấy an ninh trật tự",
    tagline: "Giấy phép",
    img: anh_ninh_trat_tu,
    color: "#A8171C",

    descriptions: [
      "Trong môi trường kinh doanh hiện nay, việc tuân thủ các quy định về an ninh, trật tự là yêu cầu bắt buộc đối với nhiều ngành nghề đặc thù. Giấy phép an ninh trật tự không chỉ thể hiện sự chấp hành pháp luật mà còn góp phần bảo đảm môi trường hoạt động an toàn, minh bạch.",
      "Công ty Luật TNHH Phúc Gia Uy & Cộng sự cung cấp dịch vụ tư vấn và thực hiện thủ tục xin Giấy chứng nhận đủ điều kiện về an ninh trật tự, giúp doanh nghiệp hoàn thiện hồ sơ nhanh chóng, đúng quy định pháp luật và đảm bảo hoạt động kinh doanh được triển khai thuận lợi.",
    ],

    explains: [
      {
        name: "1. Giấy phép an ninh trật tự là gì?",
        description: [
          "Giấy phép an ninh trật tự (Giấy chứng nhận đủ điều kiện về an ninh, trật tự) là văn bản do cơ quan Công an có thẩm quyền cấp cho các cơ sở kinh doanh ngành nghề có điều kiện về an ninh trật tự, xác nhận cơ sở đáp ứng đầy đủ các yêu cầu pháp lý để được phép hoạt động.",
        ],
      },
      {
        name: "2. Đối tượng cần xin giấy phép",
        description: [
          "Dịch vụ cầm đồ, cho thuê lưu trú, khách sạn, karaoke, vũ trường",
          "Dịch vụ bảo vệ, vận chuyển hàng hóa có giá trị",
          "Sản xuất và kinh doanh công cụ hỗ trợ, pháo, vật liệu nổ công nghiệp",
          "Dịch vụ in ấn, photocopy",
          "Các loại hình kinh doanh dễ phát sinh tệ nạn xã hội hoặc ảnh hưởng đến an ninh trật tự",
          "Một số ngành nghề khác theo quy định của pháp luật",
        ],
      },
      {
        name: "3. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Khảo sát và tư vấn điều kiện pháp lý",
            items: [
              "- Rà soát ngành nghề kinh doanh của doanh nghiệp để xác định có thuộc diện bắt buộc xin Giấy phép ANTT hay không",
              "- Tư vấn rõ các điều kiện cần đáp ứng: nhân sự chủ chốt phải có lý lịch tư pháp trong sạch, cơ sở vật chất phải phù hợp, phương án kinh doanh đảm bảo an ninh trật tự.",
            ],
          },
          {
            name: "Hướng dẫn và chuẩn bị hồ sơ",
            items: [
              "- Thu thập giấy tờ pháp lý của doanh nghiệp: Giấy chứng nhận đăng ký doanh nghiệp, giấy tờ về cơ sở kinh doanh.",
              "- Soạn thảo phương án đảm bảo an ninh trật tự, mô tả chi tiết biện pháp phòng ngừa, quản lý và xử lý sự cố",
            ],
          },
          {
            name: "Đại diện nộp và theo dõi hồ sơ tại cơ quan Công an",
            items: [
              "- Nộp hồ sơ tại Phòng Cảnh sát Quản lý hành chính về trật tự xã hội (PC06) - Công an cấp tỉnh/ thành phố",
              "- Theo dõi tiến trình xử lý hồ sơ, kịp thời bổ sung hoặc giải trình theo yêu cầu của cơ quan công an.Trực tiếp đại diện doanh nghiệp làm việc, giúp tiết kiệm thời gian và công sức cho khách hàng",
              "- Nhận và bàn giao Giấy phép ANTT hợp lệ: PGU cam kết bàn giao giấy phép đúng hạn, để doanh nghiệp đủ điều kiện khai trương và kinh doanh hợp pháp",
            ],
          },
          {
            name: "Hỗ trợ pháp lý sau cấp phép",
            items: [
              "- Hỗ trợ gia hạn, điều chỉnh hoặc xin lại giấy phép khi có thay đổi về địa điểm, ngành nghề, người đại diện pháp luật hoặc nhân sự quản lý",
              "- Đồng hành cùng doanh nghiệp khi có đoàn kiểm tra, đảm bảo luôn duy trì đủ điều kiện an ninh trật tự",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "4. Lợi ích của việc sử dụng dịch vụ tại PGU",
      items: [
        "Tư vấn đúng điều kiện pháp lý: PGU hỗ trợ rà soát ngành nghề kinh doanh, điều kiện về nhân sự, địa điểm và các yêu cầu pháp lý liên quan để đảm bảo hồ sơ đáp ứng quy định",
        "Chuẩn bị hồ sơ đầy đủ và chính xác: Luật sư và chuyên viên của PGU trực tiếp hỗ trợ soạn thảo, hoàn thiện hồ sơ, hạn chế tối đa việc phải bổ sung hoặc chỉnh sửa nhiều lần",
        "Tiết kiệm thời gian cho doanh nghiệp: PGU đại diện khách hàng làm việc với cơ quan công an, theo dõi quá trình xử lý hồ sơ và kịp thời xử lý các yêu cầu phát sinh",
        "Hạn chế rủi ro pháp lý: Việc thực hiện đúng thủ tục giúp doanh nghiệp tránh các rủi ro bị xử phạt hoặc bị đình chỉ hoạt động do chưa đáp ứng điều kiện về an ninh trật tự",
        "Đồng hành pháp lý lâu dài: PGU không chỉ hỗ trợ xin cấp giấy phép mà còn tư vấn các vấn đề pháp lý phát sinh trong quá trình hoạt động kinh doanh của doanh nghiệp",
      ],
    },

    lastPara: [
      "Nếu Quý khách hàng có nhu cầu thực hiện thủ tục xin Giấy chứng nhận đủ điều kiện về an ninh trật tự, hãy liên hệ với PGU Law Firm để được tư vấn và hỗ trợ kịp thời, giúp thủ tục được thực hiện nhanh chóng và đúng quy định pháp luật.",
    ],
  },
  {
    id: "visa-the-tam-tru",
    label: "Visa - Thẻ tạm trú",
    tagline: "Giấy phép",
    img: visa,
    color: "#A8171C",

    descriptions: [
      "Nhu cầu nhập cảnh và cư trú tại Việt Nam ngày càng tăng trong bối cảnh hội nhập quốc tế. Visa và thẻ tạm trú là giấy tờ bắt buộc để người nước ngoài lưu trú hợp pháp. Hiểu rõ thủ tục cấp phép sẽ giúp quá trình xin cấp diễn ra nhanh chóng và thuận lợi.",
      "Với kinh nghiệm trong lĩnh vực tư vấn pháp lý cho doanh nghiệp và nhà đầu tư nước ngoài, PGU giúp khách hàng tiết kiệm thời gian, hạn chế rủi ro pháp lý và đảm bảo quá trình cư trú, làm việc tại Việt Nam được thuận lợi.",
    ],

    explains: [
      {
        name: "1. Visa và thẻ tạm trú là gì?",
        description: [
          "Visa (hay còn gọi là thị thực):\n - Bao gồm visa xuất cảnh cho người Việt Nam ra nước ngoài và visa nhập cảnh cho người nước ngoài vào Việt Nam\n - Có thời hạn tối đa 5 năm và mỗi visa thường sẽ được dán vào từng trang của sổ hộ chiếu (passport)",
          "Thẻ tạm trú:\n - Được xem như visa dài hạn và có giá trị thay thế visa\n - Có thời hạn tối đa 2 năm tùy vào từng loại thẻ tạm trú, nhưng phải ngắn hơn tối thiểu 30 ngày so với thời hạn còn lại trên sổ hộ chiếu",
        ],
      },
      {
        name: "2. Phạm vi dịch vụ",
        description: ["Chúng tôi cung cấp các dịch vụ như sau:"],
        scopes: [
          {
            name: "Tư vấn và thực hiện thủ tục visa",
            items: [
              "- Xin visa nhập cảnh cho cá nhân, tổ chức và nhà đầu tư nước ngoài",
              "- Xin visa du lịch, công tác, du học và các mục đích khác cho người nước ngoài vào Việt Nam",
              "- Xin visa đầu tư (DT1, DT2, DT3)",
              "- Xin visa doanh nghiệp (DN1, DN2)",
            ],
          },
          {
            name: "Thực hiện các thủ tục liên quan đến visa",
            items: [
              "- Chuyển đổi mục đích xin visa",
              "- Xin giấy miễn thị thực, visa cho người nước ngoài",
              "- Xin visa nhập cảnh (thị thực rời) cho người Trung Quốc có hộ chiếu E",
              "- Xin cấp thị thực có giá trị 1 lần, nhiều lần (dưới 1 tháng, dưới 6 tháng và từ 6 tháng trở lên)",
            ],
          },
          {
            name: "Thực hiện thủ tục thẻ tạm trú",
            items: [
              "- Chuyển ngang giá trị thị thực, tạm trú từ hộ chiếu cũ đã hết giá trị sử dụng sang hộ chiếu mới",
              "- Tất cả các trường hợp xin visa nhập cảnh và thẻ tạm trú khác",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lý do nên sử dụng dịch vụ tại PGU",
      items: [
        "Hồ sơ có tỷ lệ thành công cao: Đội ngũ Luật sư và chuyên viên của PGU giàu kinh nghiệm và am hiểu quy định pháp luật sẽ tư vấn cho khách hàng các yêu cầu pháp lý một cách chính xác, rõ ràng và thực tiễn, giúp hồ sơ được chuẩn bị đầy đủ, hạn chế tối đa rủi ro bị yêu cầu bổ sung hoặc bị từ chối.",
        "Cam kết bảo mật thông tin: Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) luôn tôn trọng và bảo mật tuyệt đối thông tin của khách hàng. Chúng tôi cam kết xử lý hồ sơ và các vấn đề pháp lý liên quan với tính bảo mật và trách nhiệm cao nhất.",
        "Thời gian xử lý nhanh chóng: PGU hỗ trợ chuẩn bị hồ sơ đầy đủ, đúng quy định và theo dõi sát quá trình xử lý, giúp rút ngắn thời gian thực hiện thủ tục và hạn chế các phát sinh không cần thiết.",
        "Đồng hành cùng khách hàng: PGU không chỉ hỗ trợ trong quá trình xin cấp giấy phép mà còn tư vấn các thủ tục liên quan như gia hạn, điều chỉnh hoặc các vấn đề pháp lý phát sinh, đảm bảo khách hàng yên tâm trong quá trình hoạt động.",
      ],
    },

    lastPara: [
      "Visa và thẻ tạm trú là cơ sở pháp lý quan trọng giúp người nước ngoài cư trú hợp pháp tại Việt Nam. Thực hiện đúng thủ tục sẽ giúp cá nhân và doanh nghiệp tránh rủi ro pháp lý và tiết kiệm thời gian xử lý hồ sơ. Nếu Quý khách có nhu cầu xin visa, thẻ tạm trú, hãy liên hệ ngay đến chúng tôi để được hỗ trợ nhanh chóng và kịp thời",
    ],
  },
  {
    id: "ho-kinh-doanh",
    label: "Hộ kinh doanh",
    tagline: "Giấy phép",
    img: ho_kinh_doanh,
    color: "#A8171C",

    descriptions: [
      "Trong bối cảnh kinh tế năng động, ngày càng nhiều cá nhân và hộ gia đình lựa chọn mô hình hộ kinh doanh do thủ tục thành lập đơn giản, chi phí thấp và cơ cấu quản lý linh hoạt. Tuy nhiên, để hoạt động đúng quy định và hạn chế rủi ro pháp lý, cá nhân cần nắm rõ điều kiện, hồ sơ cũng như nghĩa vụ thuế khi đăng ký hộ kinh doanh.",
      "Công ty Luật TNHH Phúc Gia Uy & Cộng sự (PGU) cung cấp dịch vụ tư vấn và hỗ trợ đăng ký hộ kinh doanh, bao gồm: tư vấn lựa chọn ngành nghề, chuẩn bị hồ sơ đăng ký, đại diện nộp hồ sơ và làm việc với cơ quan có thẩm quyền. Chúng tôi giúp khách hàng hoàn tất thủ tục nhanh chóng, đúng quy định và tiết kiệm thời gian để sớm đưa hoạt động kinh doanh vào vận hành.",
    ],

    explains: [
      {
        name: "1. Hộ kinh doanh là gì?",
        description: [
          "Hộ kinh doanh là mô hình kinh doanh do một cá nhân hoặc đại diện hộ gia đình đăng ký và quản lý, chịu trách nhiệm bằng toàn bộ tài sản của mình đối với hoạt động kinh doanh.",
        ],
      },
      {
        name: "2. Phạm vi dịch vụ",
        description: [],
        scopes: [
          {
            name: "Khảo sát và tư vấn mô hình kinh doanh",
            items: [
              "- Phân tích nhu cầu, vốn, ngành nghề dự kiến để xác định mô hình hộ kinh doanh có phù hợp hay nên chuyển sang doanh nghiệp.",
              "- Giải thích rõ ưu - nhược điểm của hộ kinh doanh cá thể so với doanh nghiệp, giúp khách hàng đưa ra quyết định đúng ngay từ đầu.",
            ],
          },
          {
            name: "Tư vấn điều kiện pháp lý cần đáp ứng",
            items: [
              "- Kiểm tra địa điểm kinh doanh, nhân sự, ngành nghề để xác định tính hợp lệ.",
              "- Hướng dẫn chuẩn bị giấy tờ cá nhân, giấy tờ chứng minh quyền sử dụng địa điểm",
            ],
          },
          {
            name: "Soạn thảo và hoàn thiện hồ sơ đăng ký",
            items: [
              "- Lập giấy đề nghị đăng ký hộ kinh doanh theo mẫu quy định",
              "- Soạn thảo danh mục ngành nghề kinh doanh và mức vốn phù hợp",
              "- Rà soát hồ sơ để đảm bảo không thiếu hoặc sai thông tin",
            ],
          },
          {
            name: "Đại diện nộp hồ sơ và làm việc với cơ quan nhà nước",
            items: [
              "- Trực tiếp nộp hồ sơ tại UBND cấp xã/phường nơi đặt địa điểm kinh doanh.",
              "- Theo dõi quá trình xử lý, bổ sung hoặc giải trình kịp thời khi có yêu cầu từ cơ quan đăng ký kinh doanh.",
              "- Tiết kiệm tối đa thời gian và công sức cho khách hàng, không cần đi lại nhiều lần",
            ],
          },
          {
            name: "Hỗ trợ pháp lý sau đăng ký",
            items: [
              "- Tư vấn nghĩa vụ thuế: thuế môn bài, thuế khoán/kê khai, sử dụng hóa đơn (nếu có).",
              "- Hướng dẫn kê khai ban đầu với cơ quan thuế, tránh sai sót dẫn đến bị xử phạt.",
              "- Đồng hành lâu dài khi hộ kinh doanh cần mở rộng quy mô, thay đổi ngành nghề, hoặc chuyển đổi sang doanh nghiệp.",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "3. Lợi ích khi sử dụng dịch vụ tại PGU",
      items: [
        "Được tư vấn mô hình kinh doanh phù hợp: PGU phân tích quy mô vốn, ngành nghề và định hướng phát triển để giúp khách hàng lựa chọn mô hình hộ kinh doanh phù hợp ngay từ đầu, hạn chế rủi ro pháp lý trong quá trình hoạt động.",
        "Hồ sơ hợp lệ, đúng quy định pháp luật: Đội ngũ luật sư và chuyên viên của PGU hỗ trợ chuẩn bị trọn bộ hồ sơ đăng ký hộ kinh doanh đầy đủ, đúng quy định, giúp quá trình nộp hồ sơ thuận lợi và hạn chế việc phải sửa đổi, bổ sung.",
        "Tiết kiệm thời gian và chi phí: PGU thực hiện quy trình dịch vụ trọn gói, minh bạch, giúp khách hàng nhanh chóng hoàn tất thủ tục đăng ký mà không cần mất nhiều thời gian tìm hiểu quy định pháp luật.",
        "Tư vấn thuế và nghĩa vụ tài chính: PGU hỗ trợ tư vấn về thuế khoán, hóa đơn, nghĩa vụ tài chính và các quy định liên quan, giúp chủ hộ kinh doanh hiểu rõ và thực hiện đúng nghĩa vụ theo quy định pháp luật.",
        "Đồng hành khi mở rộng kinh doanh: Khi khách hàng có nhu cầu mở rộng quy mô hoặc chuyển đổi từ hộ kinh doanh sang doanh nghiệp, PGU sẽ tư vấn và hỗ trợ thực hiện thủ tục cần thiết, đồng hành cùng khách hàng trong quá trình phát triển hoạt động kinh doanh.",
      ],
    },

    lastPara: [
      "Nếu Quý khách có nhu cầu đăng ký hộ kinh doanh hoặc cần tư vấn các thủ tục pháp lý liên quan đến hoạt động kinh doanh, vui lòng liên hệ Công ty Luật TNHH Phúc Gia Uy & Cộng sự để được đội ngũ luật sư và chuyên viên của chúng tôi hỗ trợ nhanh chóng, chính xác và hiệu quả. Chúng tôi luôn sẵn sàng đồng hành cùng Quý khách trong quá trình khởi sự và phát triển hoạt động kinh doanh.",
    ],
  },
  {
    id: "giay-phep-kinh-doanh-ruou",
    label: "Giấy phép kinh doanh rượu",
    tagline: "Giấy phép",
    img: kinh_doanh_ruou,
    color: "#A8171C",

    descriptions: [
      "Kinh doanh rượu là ngành nghề có điều kiện và được quản lý chặt chẽ theo quy định pháp luật. Cá nhân, doanh nghiệp muốn hoạt động hợp pháp bắt buộc phải xin giấy phép kinh doanh rượu. Nắm rõ thủ tục và điều kiện cấp phép sẽ giúp việc kinh doanh diễn ra thuận lợi, đúng quy định.",
      "Với kinh nghiệm trong lĩnh vực tư vấn pháp lý doanh nghiệp và giấy phép con, PGU giúp khách hàng hoàn thiện thủ tục nhanh chóng, đúng quy định pháp luật, tiết kiệm thời gian và đảm bảo hoạt động kinh doanh được triển khai thuận lợi.",
    ],

    explains: [
      {
        name: "1. Giấy phép kinh doanh rượu là gì?",
        description: [
          "Giấy phép kinh doanh rượu là văn bản pháp lý do cơ quan nhà nước có thẩm quyền cấp, xác nhận thương nhân đáp ứng đầy đủ điều kiện để thực hiện hoạt động sản xuất, phân phối, bán buôn, bán lẻ hoặc bán rượu tiêu dùng tại chỗ theo quy định của pháp luật.",
        ],
      },
      {
        name: "2. Các loại giấy phép kinh doanh rượu",
        description: [
          "Giấy phép sản xuất rượu công nghiệp",
          "Giấy phép sản xuất rượu thủ công nhằm mục đích kinh doanh",
          "Giấy phép sản xuất rượu thủ công bán cho cơ sở có giấy phép sản xuất rượu để chế biến lại",
          "Giấy phép phân phối rượu: Dành cho các đơn vị nhập khẩu hoặc phân phối quy mô lớn",
          "Giấy phép bán buôn rượu: Dành cho các đơn vị bán rượu cho các đại lý bán lẻ",
          "Giấy phép bán lẻ rượu: Dành cho các cửa hàng bán trực tiếp cho người tiêu dùng",
          "Giấy đăng ký bán rượu tiêu dùng tại chỗ: Áp dụng cho nhà hàng, quán bar, quán cà phê có bán rượu.",
        ],
      },
      {
        name: "3. Phạm vi dịch vụ",
        description: [
          "Rà soát điều kiện pháp lý đối với hoạt động kinh doanh rượu theo quy định hiện hành",
          "Tư vấn loại giấy phép phù hợp (bán buôn, bán lẻ, phân phối rượu…)",
          "Hỗ trợ soạn thảo và hoàn thiện hồ sơ xin cấp Giấy phép kinh doanh rượu",
          "Đại diện khách hàng nộp hồ sơ và làm việc với cơ quan có thẩm quyền",
          "Theo dõi quá trình thẩm định và xử lý hồ sơ, kịp thời bổ sung khi có yêu cầu",
          "Nhận và bàn giao Giấy phép kinh doanh rượu cho khách hàng",
          "Tư vấn các vấn đề pháp lý liên quan trong quá trình hoạt động như gia hạn, điều chỉnh hoặc cấp lại giấy phép.",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "4. Lý do nên lựa chọn dịch vụ tại PGU",
      items: [
        "Đội ngũ luật sư giàu kinh nghiệm: PGU sở hữu đội ngũ luật sư và chuyên viên am hiểu pháp luật doanh nghiệp và các loại giấy phép kinh doanh có điều kiện, sẵn sàng đưa ra giải pháp pháp lý phù hợp cho từng trường hợp cụ thể.",
        "Tư vấn rõ ràng, đúng quy định pháp luật: Khách hàng được tư vấn đầy đủ về điều kiện pháp lý, quy trình thực hiện và các lưu ý quan trọng, giúp hạn chế rủi ro và tránh sai sót trong quá trình chuẩn bị hồ sơ.",
        "Hồ sơ chuẩn xác, tỷ lệ thành công cao: PGU hỗ trợ chuẩn bị và rà soát hồ sơ kỹ lưỡng trước khi nộp, đảm bảo hồ sơ hợp lệ và đáp ứng yêu cầu của cơ quan có thẩm quyền.",
        "Tiết kiệm thời gian và chi phí: Dịch vụ trọn gói giúp khách hàng không phải tự tìm hiểu và thực hiện các thủ tục phức tạp, từ đó tiết kiệm đáng kể thời gian và chi phí.",
        "Đồng hành lâu dài cùng doanh nghiệp: Không chỉ hỗ trợ xin cấp giấy phép, PGU còn tư vấn các vấn đề pháp lý phát sinh trong quá trình hoạt động kinh doanh của khách hàng.",
      ],
    },

    lastPara: [
      "Nếu Quý khách có nhu cầu xin cấp Giấy phép kinh doanh rượu hoặc cần tư vấn các vấn đề pháp lý liên quan đến hoạt động kinh doanh rượu, vui lòng liên hệ Công ty Luật TNHH Phúc Gia Uy & Cộng sự để được đội ngũ luật sư và chuyên viên của chúng tôi hỗ trợ nhanh chóng, đúng quy định và hiệu quả. Chúng tôi luôn sẵn sàng đồng hành cùng Quý khách trong quá trình xin cấp và duy trì giấy phép kinh doanh.",
    ],
  },
  {
    id: "nhap-khau-thiet-bi-vat-tu-y-te",
    label: "Nhập khẩu thiết bị, vật tư y tế",
    tagline: "Giấy phép",
    img: vat_tu_y_te,
    color: "#A8171C",

    descriptions: [
      "Nhập khẩu thiết bị, vật tư y tế là lĩnh vực quan trọng, ảnh hưởng trực tiếp đến chất lượng khám chữa bệnh và chăm sóc sức khỏe. Do đây là mặt hàng đặc thù, hoạt động nhập khẩu phải tuân thủ chặt chẽ các quy định pháp luật về chuyên ngành và hải quan.",
      "Với kinh nghiệm trong lĩnh vực tư vấn pháp lý doanh nghiệp và thủ tục nhập khẩu hàng hóa có điều kiện, PGU giúp doanh nghiệp thực hiện thủ tục đúng quy định, hạn chế rủi ro pháp lý và đảm bảo hoạt động nhập khẩu được triển khai thuận lợi.",
    ],

    explains: [
      {
        name: "1. Trang thiết bị y tế là gì?",
        intros: [
          "Trang thiết bị y tế là các loại thiết bị, vật tư cấy ghép, dụng cụ, vật liệu, thuốc thử và chất hiệu chuẩn in vitro, phần mềm (software) đáp ứng đồng thời các yêu cầu sau đây:",
        ],
        description: [
          "Được sử dụng riêng lẻ hay phối hợp với nhau theo chỉ định của chủ sở hữu thiết bị y tế để phục vụ cho con người nhằm một hoặc nhiều mục đích.",
          "Không sử dụng cơ chế dược lý, miễn dịch hoặc chuyển hóa trong hoặc trên cơ thể người hoặc nếu có sử dụng các cơ chế này thì chỉ mang tính chất hỗ trợ để đạt mục đích theo quy định pháp luật.",
        ],
      },
      {
        name: "2. Các loại dịch vụ nhập khẩu",
        description: [
          "Nhập khẩu thiết bị y tế",
          "Nhập khẩu thuốc đạt tiêu chuẩn GSP",
          "Nhập khẩu nguyên liệu thuốc",
          "Nhập khẩu dược liệu đạt tiêu chuẩn GSP",
        ],
      },
      {
        name: "3. Phạm vi dịch vụ",
        description: [
          "Tiếp nhận thông tin khách hàng: Chuyên viên tiếp nhận thông tin khách hàng, trao đổi thông tin sơ bộ (danh sách hồ sơ cần chuẩn bị cho các dịch vụ khách hàng yêu cầu)",
          "Tư vấn dịch vụ: Chuyên viên trao đổi với khách hàng về quy trình thực hiện, báo giá chi phí, thương lượng và ký kết hợp đồng.",
          "Triển khai dịch vụ: Chuyên viên sẽ kiểm tra các giấy tờ đã đầy đủ, đúng theo quy định chưa, và báo lại cho khách hàng nếu có bất kỳ vấn đề nào liên quan đến hồ sơ, để khách hàng bổ sung kịp thời. Sau đó, chuyên viên tiến hành chuẩn bị hồ sơ và làm các thủ tục để tiến hành thông quan cho TBYT).",
        ],
      },
    ],

    processes: [],

    lastPara: [
      "Nếu Quý khách có nhu cầu tư vấn hoặc thực hiện thủ tục pháp lý liên quan đến nhập khẩu thiết bị, vật tư y tế, vui lòng liên hệ Công ty Luật TNHH Phúc Gia Uy & Cộng sự để được đội ngũ luật sư và chuyên viên của chúng tôi hỗ trợ nhanh chóng, đúng quy định và hiệu quả. Chúng tôi luôn sẵn sàng đồng hành cùng doanh nghiệp trong quá trình thực hiện thủ tục pháp lý và triển khai hoạt động nhập khẩu tại Việt Nam.",
    ],
  },
];
