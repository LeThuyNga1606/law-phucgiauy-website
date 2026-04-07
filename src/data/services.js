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
    label: "landdispute_label",
    tagline: "landdispute_tagline",
    img: tranh_chap_dat_dai, // thay bằng ảnh phù hợp nếu có
    color: "#A8171C",
    descriptions: ["landdispute_desc_1", "landdispute_desc_2"],
    explains: [
      {
        name: "landdispute_explain1_title",
        key: "cac-dang-tranh-chap-dat-dai-thuong-gap",
        description: [
          "landdispute_explain1_item1",
          "landdispute_explain1_item2",
          "landdispute_explain1_item3",
          "landdispute_explain1_item4",
          "landdispute_explain1_item5",
          "landdispute_explain1_item6",
        ],
      },
      {
        name: "landdispute_explain2_title",
        key: "pham-vi-dich-vu-cung-cap",
        description: [
          "landdispute_explain2_desc1",
          "landdispute_explain2_desc2",
        ],
        scopes: [
          {
            name: "landdispute_scope1_title",
            items: [
              "landdispute_scope1_item1",
              "landdispute_scope1_item2",
              "landdispute_scope1_item3",
              "landdispute_scope1_item4",
            ],
          },
          {
            name: "landdispute_scope2_title",
            items: [
              "landdispute_scope2_item1",
              "landdispute_scope2_item2",
              "landdispute_scope2_item3",
            ],
          },
          {
            name: "landdispute_scope3_title",
            items: [
              "landdispute_scope3_item1",
              "landdispute_scope3_item2",
              "landdispute_scope3_item3",
              "landdispute_scope3_item4",
            ],
          },
          {
            name: "landdispute_scope4_title",
            items: [
              "landdispute_scope4_item1",
              "landdispute_scope4_item2",
              "landdispute_scope4_item3",
              "landdispute_scope4_item4",
            ],
          },
          {
            name: "landdispute_scope5_title",
            items: [
              "landdispute_scope5_item1",
              "landdispute_scope5_item2",
              "landdispute_scope5_item3",
            ],
          },
        ],
      },
    ],
    reasons: {
      title: "landdispute_reason_title",
      items: [
        "landdispute_reason1",
        "landdispute_reason2",
        "landdispute_reason3",
        "landdispute_reason4",
        "landdispute_reason5",
      ],
    },
    lastPara: ["landdispute_last_1", "landdispute_last_2"],
  },
  {
    id: "tranh-chap-thua-ke",
    label: "inheritance_dispute_label",
    tagline: "inheritance_dispute_tagline",
    img: tranh_chap_thua_ke,
    color: "#A8171C",

    descriptions: ["inheritance_dispute_desc_1", "inheritance_dispute_desc_2"],

    explains: [
      {
        name: "inheritance_dispute_explain_title_1",
        key: "cac-dang-tranh-chap-thua-ke",
        description: [
          "inheritance_dispute_type_1",
          "inheritance_dispute_type_2",
          "inheritance_dispute_type_3",
          "inheritance_dispute_type_4",
          "inheritance_dispute_type_5",
          "inheritance_dispute_type_6",
        ],
      },
      {
        name: "inheritance_dispute_explain_title_2",
        key: "pham-vi-dich-vu-thua-ke",
        description: ["inheritance_dispute_service_intro"],
        scopes: [
          {
            name: "inheritance_dispute_scope_1_title",
            items: [
              "inheritance_dispute_scope_1_item_1",
              "inheritance_dispute_scope_1_item_2",
              "inheritance_dispute_scope_1_item_3",
              "inheritance_dispute_scope_1_item_4",
              "inheritance_dispute_scope_1_item_5",
            ],
          },
          {
            name: "inheritance_dispute_scope_2_title",
            items: [
              "inheritance_dispute_scope_2_item_1",
              "inheritance_dispute_scope_2_item_2",
              "inheritance_dispute_scope_2_item_3",
              "inheritance_dispute_scope_2_item_4",
              "inheritance_dispute_scope_2_item_5",
            ],
          },
          {
            name: "inheritance_dispute_scope_3_title",
            items: [
              "inheritance_dispute_scope_3_item_1",
              "inheritance_dispute_scope_3_item_2",
              "inheritance_dispute_scope_3_item_3",
              "inheritance_dispute_scope_3_item_4",
              "inheritance_dispute_scope_3_item_5",
              "inheritance_dispute_scope_3_item_6",
              "inheritance_dispute_scope_3_item_7",
            ],
          },
        ],
      },
    ],
    reasons: {
      title: "inheritance_dispute_reason_title",
      items: [
        "inheritance_dispute_reason_1",
        "inheritance_dispute_reason_2",
        "inheritance_dispute_reason_3",
        "inheritance_dispute_reason_4",
        "inheritance_dispute_reason_5",
      ],
    },

    lastPara: ["inheritance_dispute_last_1", "inheritance_dispute_last_2"],
  },
  {
    id: "tranh-chap-ly-hon",
    label: "divorce_dispute_label",
    tagline: "civil_tagline",
    img: tranh_chap_ly_hon, // thay ảnh phù hợp nếu có
    color: "#A8171C",

    descriptions: ["divorce_desc_1", "divorce_desc_2"],

    explains: [
      {
        name: "divorce_section_1_title",
        key: "noi-dung-tranh-chap-ly-hon",
        scopes: [
          {
            name: "divorce_scope_child_title",
            items: [
              "divorce_child_1",
              "divorce_child_2",
              "divorce_child_3",
              "divorce_child_4",
              "divorce_child_5",
            ],
          },
          {
            name: "divorce_scope_property_title",
            items: [
              "divorce_property_1",
              "divorce_property_2",
              "divorce_property_3",
              "divorce_property_4",
              "divorce_property_5",
            ],
          },
          {
            name: "divorce_scope_type_title",
            items: ["divorce_type_1", "divorce_type_2", "divorce_type_3"],
          },
        ],
      },
      {
        name: "divorce_section_2_title",
        key: "tu-van-thu-tuc-ly-hon",
        description: ["divorce_service_desc"],
        scopes: [
          {
            name: "divorce_consult_title",
            items: [
              "divorce_consult_1",
              "divorce_consult_2",
              "divorce_consult_3",
              "divorce_consult_4",
              "divorce_consult_5",
              "divorce_consult_6",
              "divorce_consult_7",
              "divorce_consult_8",
            ],
          },
          {
            name: "divorce_fast_title",
            items: ["divorce_fast_1", "divorce_fast_2", "divorce_fast_3"],
          },
        ],
      },
      {
        name: "divorce_section_3_title",
        key: "tranh-tung-ly-hon",
        description: ["divorce_litigation_desc"],
        scopes: [
          {
            name: "",
            items: [
              "divorce_litigate_1",
              "divorce_litigate_2",
              "divorce_litigate_3",
              "divorce_litigate_4",
              "divorce_litigate_5",
              "divorce_litigate_6",
              "divorce_litigate_7",
            ],
          },
        ],
      },
      {
        name: "divorce_section_4_title",
        key: "pham-vi-luat-su-ly-hon",
        description: [
          "divorce_scope_work_1",
          "divorce_scope_work_2",
          "divorce_scope_work_3",
          "divorce_scope_work_4",
          "divorce_scope_work_5",
        ],
      },
    ],
    reasons: {
      title: "divorce_reason_title",
      items: [
        "divorce_reason_1",
        "divorce_reason_2",
        "divorce_reason_3",
        "divorce_reason_4",
        "divorce_reason_5",
      ],
    },
    lastPara: ["divorce_last_1", "divorce_last_2"],
  },
  {
    id: "tranh-chap-lao-dong",
    label: "labor_dispute_label",
    tagline: "labor_dispute_tagline",
    img: tranh_chap_lao_dong, // thay ảnh phù hợp nếu có
    color: "#A8171C",

    descriptions: ["labor_desc_1", "labor_desc_2"],

    explains: [
      {
        name: "labor_section_1_title",
        key: "cac-dang-tranh-chap-lao-dong",
        description: [
          "labor_type_1",
          "labor_type_2",
          "labor_type_3",
          "labor_type_4",
          "labor_type_5",
          "labor_type_6",
        ],
      },

      {
        name: "labor_section_2_title",
        key: "dich-vu-lao-dong",
        scopes: [
          {
            name: "labor_employee_title",
            items: [
              "labor_employee_1",
              "labor_employee_2",
              "labor_employee_3",
              "labor_employee_4",
              "labor_employee_5",
              "labor_employee_6",
            ],
          },
          {
            name: "labor_employer_title",
            items: [
              "labor_employer_1",
              "labor_employer_2",
              "labor_employer_3",
              "labor_employer_4",
              "labor_employer_5",
              "labor_employer_6",
            ],
          },
        ],
      },
    ],
    reasons: {
      title: "labor_section_3_title",
      items: [
        "labor_benefit_1",
        "labor_benefit_2",
        "labor_benefit_3",
        "labor_benefit_4",
        "labor_benefit_5",
      ],
    },

    lastPara: ["labor_last_1"],
  },
  {
    id: "tranh-chap-thuong-mai",
    label: "commercial_dispute_label",
    tagline: "commercial_dispute_tagline",
    img: tranh_chap_thuong_mai, // thay ảnh phù hợp nếu có
    color: "#A8171C",

    descriptions: ["commercial_desc_1"],

    explains: [
      {
        name: "commercial_section_1_title",
        key: "cac-loai-tranh-chap-thuong-mai",
        description: [
          "commercial_type_1",
          "commercial_type_2",
          "commercial_type_3",
          "commercial_type_4",
          "commercial_type_5",
          "commercial_type_6",
          "commercial_type_7",
        ],
      },

      {
        name: "commercial_section_2_title",
        key: "dich-vu-thuong-mai",
        description: ["commercial_service_desc"],
        scopes: [
          {
            name: "commercial_contract_title",
            items: [
              "commercial_contract_1",
              "commercial_contract_2",
              "commercial_contract_3",
              "commercial_contract_4",
            ],
          },
          {
            name: "commercial_dispute_service_title",
            items: [
              "commercial_dispute_service_1",
              "commercial_dispute_service_2",
              "commercial_dispute_service_3",
              "commercial_dispute_service_4",
              "commercial_dispute_service_5",
            ],
          },
          {
            name: "commercial_prevent_title",
            items: [
              "commercial_prevent_1",
              "commercial_prevent_2",
              "commercial_prevent_3",
            ],
          },
        ],
      },
    ],
    reasons: {
      title: "commercial_section_3_title",
      items: [
        "commercial_benefit_1",
        "commercial_benefit_2",
        "commercial_benefit_3",
        "commercial_benefit_4",
        "commercial_benefit_5",
      ],
    },

    lastPara: ["commercial_last_1", "commercial_last_2"],
  },
  {
    id: "tranh-chap-so-huu-tri-tue",
    label: "intellectual_property_dispute_label",
    tagline: "intellectual_property_dispute_tagline",
    img: tranh_chap_so_huu_tri_tue, // thay ảnh phù hợp nếu có
    color: "#A8171C",

    descriptions: [
      "intellectual_property_dispute_desc_1",
      "intellectual_property_dispute_desc_2",
    ],

    explains: [
      {
        name: "intellectual_property_dispute_common_types_title",
        key: "cac-dang-tranh-chap-so-huu-tri-tue",
        description: [
          "intellectual_property_dispute_common_types_item_1",
          "intellectual_property_dispute_common_types_item_2",
          "intellectual_property_dispute_common_types_item_3",
          "intellectual_property_dispute_common_types_item_4",
          "intellectual_property_dispute_common_types_item_5",
          "intellectual_property_dispute_common_types_item_6",
        ],
      },

      {
        name: "intellectual_property_dispute_services_title",
        key: "dich-vu-so-huu-tri-tue",
        description: ["intellectual_property_dispute_services_desc"],
        scopes: [
          {
            name: "intellectual_property_dispute_trademark_title",
            items: [
              "intellectual_property_dispute_trademark_item_1",
              "intellectual_property_dispute_trademark_item_2",
              "intellectual_property_dispute_trademark_item_3",
              "intellectual_property_dispute_trademark_item_4",
              "intellectual_property_dispute_trademark_item_5",
              "intellectual_property_dispute_trademark_item_6",
            ],
          },
          {
            name: "intellectual_property_dispute_design_title",
            items: [
              "intellectual_property_dispute_design_item_1",
              "intellectual_property_dispute_design_item_2",
              "intellectual_property_dispute_design_item_3",
              "intellectual_property_dispute_design_item_4",
            ],
          },
          {
            name: "intellectual_property_dispute_patent_title",
            items: [
              "intellectual_property_dispute_patent_item_1",
              "intellectual_property_dispute_patent_item_2",
              "intellectual_property_dispute_patent_item_3",
              "intellectual_property_dispute_patent_item_4",
              "intellectual_property_dispute_patent_item_5",
            ],
          },
          {
            name: "intellectual_property_dispute_other_title",
            items: [
              "intellectual_property_dispute_other_item_1",
              "intellectual_property_dispute_other_item_2",
              "intellectual_property_dispute_other_item_3",
              "intellectual_property_dispute_other_item_4",
            ],
          },
          {
            name: "intellectual_property_dispute_investigation_title",
            items: [
              "intellectual_property_dispute_investigation_item_1",
              "intellectual_property_dispute_investigation_item_2",
              "intellectual_property_dispute_investigation_item_3",
            ],
          },
        ],
      },
    ],
    reasons: {
      title: "intellectual_property_dispute_benefits_title",
      items: [
        "intellectual_property_dispute_benefits_item_1",
        "intellectual_property_dispute_benefits_item_2",
        "intellectual_property_dispute_benefits_item_3",
        "intellectual_property_dispute_benefits_item_4",
        "intellectual_property_dispute_benefits_item_5",
      ],
    },
    lastPara: ["intellectual_property_dispute_final"],
  },
  {
    id: "tranh-chap-hop-dong",
    label: "contract_dispute_label",
    tagline: "contract_dispute_tagline",
    img: tranh_chap_hop_dong,
    color: "#A8171C",

    descriptions: ["contract_desc_1", "contract_desc_2"],

    explains: [
      {
        name: "contract_section_1_title",
        description: [
          "contract_type_1",
          "contract_type_2",
          "contract_type_3",
          "contract_type_4",
          "contract_type_5",
          "contract_type_6",
        ],
      },
      {
        name: "contract_section_2_title",
        description: [
          "contract_service_1",
          "contract_service_2",
          "contract_service_3",
          "contract_service_4",
          "contract_service_5",
        ],
      },
    ],

    reasons: {
      title: "contract_section_3_title",
      items: [
        "contract_benefit_1",
        "contract_benefit_2",
        "contract_benefit_3",
        "contract_benefit_4",
        "contract_benefit_5",
      ],
    },

    lastPara: ["contract_last_1", "contract_last_2"],
  },
  {
    id: "bao-chua-nguoi-bi-buoc-toi",
    label: "criminal_defense_accused_label",
    tagline: "criminal_defense_accused_tagline",
    img: nguoi_bi_buoc_toi, // thay ảnh phù hợp nếu có
    color: "#A8171C",

    descriptions: [
      "criminal_defense_accused_desc_1",
      "criminal_defense_accused_desc_2",
    ],

    explains: [
      {
        name: "criminal_defense_accused_definition_title",
        key: "khai-niem-nguoi-bi-buoc-toi",
        description: ["criminal_defense_accused_definition_item_1"],
      },

      {
        name: "criminal_defense_accused_services_title",
        key: "pham-vi-dich-vu-bao-chua",
        intros: ["criminal_defense_accused_services_intro"],
        description: [
          "criminal_defense_accused_services_item_1",
          "criminal_defense_accused_services_item_2",
          "criminal_defense_accused_services_item_3",
          "criminal_defense_accused_services_item_4",
          "criminal_defense_accused_services_item_5",
          "criminal_defense_accused_services_item_6",
          "criminal_defense_accused_services_item_7",
          "criminal_defense_accused_services_item_8",
        ],
      },
    ],
    reasons: {
      title: "criminal_defense_accused_benefits_title",
      intros: ["criminal_defense_accused_benefits_intro"],
      items: [
        "criminal_defense_accused_benefits_item_1",
        "criminal_defense_accused_benefits_item_2",
        "criminal_defense_accused_benefits_item_3",
        "criminal_defense_accused_benefits_item_4",
      ],
    },
    lastPara: ["criminal_defense_accused_final"],
  },
  {
    id: "bao-ve-nguoi-bi-hai-duong-su",
    label: "criminal_victim_protection_label",
    tagline: "criminal_victim_protection_tagline",
    img: nguoi_bi_hai,
    color: "#A8171C",

    descriptions: [
      "criminal_victim_protection_desc_1",
      "criminal_victim_protection_desc_2",
    ],

    explains: [
      {
        name: "criminal_victim_protection_definition_title",
        key: "khai-niem-bi-hai-duong-su",
        description: [
          "criminal_victim_protection_definition_item_1",
          "criminal_victim_protection_definition_item_2",
        ],
      },

      {
        name: "criminal_victim_protection_services_title",
        key: "pham-vi-dich-vu",
        description: ["criminal_victim_protection_services_intro"],
        items: [
          "criminal_victim_protection_services_item_1",
          "criminal_victim_protection_services_item_2",
          "criminal_victim_protection_services_item_3",
          "criminal_victim_protection_services_item_4",
          "criminal_victim_protection_services_item_5",
          "criminal_victim_protection_services_item_6",
          "criminal_victim_protection_services_item_7",
          "criminal_victim_protection_services_item_8",
        ],
      },
    ],
    reasons: {
      title: "criminal_victim_protection_role_title",
      intros: ["criminal_victim_protection_role_intro"],
      items: [
        "criminal_victim_protection_role_item_1",
        "criminal_victim_protection_role_item_2",
        "criminal_victim_protection_role_item_3",
        "criminal_victim_protection_role_item_4",
      ],
    },
    lastPara: ["criminal_victim_protection_final"],
  },
  {
    id: "bao-ve-quyen-loi-nguoi-bi-to-giac-va-nguoi-to-giac-toi-pham",
    label: "legal_protection_reported_persons_label",
    tagline: "legal_protection_reported_persons_tagline",
    img: nguoi_bi_to_giac,
    color: "#A8171C",

    descriptions: [
      "legal_protection_reported_persons_desc_1",
      "legal_protection_reported_persons_desc_2",
    ],

    explains: [
      {
        name: "reported_persons_concept_title",
        key: "khai-niem-bi-hai-duong-su",
        description: [
          "reported_person_definition",
          "recommended_prosecution_definition",
          "crime_informant_definition",
        ],
      },
      {
        name: "service_scope_title",
        description: [
          "service_scope_item_1",
          "service_scope_item_2",
          "service_scope_item_3",
          "service_scope_item_4",
          "service_scope_item_5",
          "service_scope_item_6",
          "service_scope_item_7",
          "service_scope_item_8",
        ],
      },
    ],

    reasons: {
      title: "lawyer_role_title",
      items: [
        "lawyer_role_item_1",
        "lawyer_role_item_2",
        "lawyer_role_item_3",
        "lawyer_role_item_4",
      ],
    },

    lastPara: ["law_firm_commitment"],
  },
  {
    id: "tu-van-phap-ly-truoc-dau-tu",
    label: "pre_investment_label",
    tagline: "pre_investment_tagline",
    img: tu_van_phap_ly_truoc_dau_tu, // thay bằng ảnh phù hợp nếu có
    color: "#A8171C",
    descriptions: ["pre_investment_desc_1", "pre_investment_desc_2"],
    processes: [
      {
        title: "investment_phase_1_title",
        steps: [
          {
            num: "01",
            title: "investor_status_title",
            desc: "investor_status_desc",
          },
          {
            num: "02",
            title: "investment_structure_title",
            desc: "investment_structure_desc",
          },
          {
            num: "03",
            title: "business_sector_title",
            desc: "business_sector_desc",
          },
          {
            num: "04",
            title: "investment_capital_title",
            desc: "investment_capital_desc",
          },
        ],
      },
      {
        title: "investment_phase_2_title",
        steps: [
          {
            num: "01",
            title: "location_advisory_title",
            desc: "location_advisory_desc_1",
          },
          {
            num: "02",
            title: "investment_incentive_title",
            desc: "investment_incentive_desc",
          },
          {
            num: "03",
            title: "labor_law_title",
            desc: "labor_law_desc",
          },
        ],
      },
      {
        title: "investment_phase_3_title",
        steps: [
          {
            num: "01",
            title: "tax_advisory_title",
            desc: "tax_advisory_desc",
          },
          {
            num: "02",
            title: "customs_procedure_title",
            desc: "customs_procedure_desc",
          },
          {
            num: "03",
            title: "environment_construction_fire_title",
            desc: "environment_construction_fire_desc",
          },
          {
            num: "04",
            title: "corporate_governance_title",
            desc: "corporate_governance_desc",
          },
        ],
      },
    ],

    reasons: {
      title: "reasons_choose_pgu_title",
      items: [
        "reason_experienced_lawyers",
        "reason_comprehensive_services",
        "reason_cost_time_solution",
        "reason_foreign_investor_support",
        "reason_professional_integrity",
        "reason_long_term_support",
      ],
    },
    lastPara: ["pre_investment_final_paragraph"],
  },
  {
    id: "tham-tra-phap-ly-dat-nha-xuong",
    label: "legalDueDiligenceLandFactory_title",
    tagline: "legalDueDiligenceLandFactory_tagline",
    img: phap_ly_dat_nha_xuong,
    color: "#A8171C",
    descriptions: [
      "legalDueDiligenceLandFactory_desc1",
      "legalDueDiligenceLandFactory_desc2",
      "legalDueDiligenceLandFactory_desc3",
    ],
    explains: [
      {
        name: "legalDueDiligenceLandFactory_section1_title",
        key: "dich-vu-tham-tra-phap-ly",
        intros: ["legalDueDiligenceLandFactory_section1_intro"],
        description: [
          "legalDueDiligenceLandFactory_section1_item1",
          "legalDueDiligenceLandFactory_section1_item2",
          "legalDueDiligenceLandFactory_section1_item3",
        ],
        lastIntro: ["legalDueDiligenceLandFactory_section1_conclusion"],
      },
      {
        name: "legalDueDiligenceLandFactory_section2_title",
        key: "tham-tra-phap-ly-dat-nha-xuong",
        intros: ["legalDueDiligenceLandFactory_section2_intro"],
        description: [
          "legalDueDiligenceLandFactory_section2_item1",
          "legalDueDiligenceLandFactory_section2_item2",
          "legalDueDiligenceLandFactory_section2_item3",
          "legalDueDiligenceLandFactory_section2_item4",
          "legalDueDiligenceLandFactory_section2_item5",
        ],
      },
      {
        name: "legalDueDiligenceLandFactory_section3_title",
        key: "soan-thao-hop-dong",
        description: ["legalDueDiligenceLandFactory_section3_desc"],
      },
      {
        name: "legalDueDiligenceLandFactory_section4_title",
        key: "dinh-gia-tai-san",
        description: ["legalDueDiligenceLandFactory_section4_desc"],
      },
      {
        name: "legalDueDiligenceLandFactory_section5_title",
        key: "dich-vu-phap-ly-tiep-theo",
        intros: ["legalDueDiligenceLandFactory_section5_intro"],
        description: [
          "legalDueDiligenceLandFactory_section5_item1",
          "legalDueDiligenceLandFactory_section5_item2",
          "legalDueDiligenceLandFactory_section5_item3",
        ],
      },
    ],
    reasons: {
      title: "legalDueDiligenceLandFactory_reasons_title",
      items: [
        "legalDueDiligenceLandFactory_reasons_item1",
        "legalDueDiligenceLandFactory_reasons_item2",
        "legalDueDiligenceLandFactory_reasons_item3",
        "legalDueDiligenceLandFactory_reasons_item4",
        "legalDueDiligenceLandFactory_reasons_item5",
        "legalDueDiligenceLandFactory_reasons_item6",
      ],
    },
    lastPara: ["legalDueDiligenceLandFactory_closing"],
  },
  {
    id: "thanh-lap-cong-ty-von-dau-tu-nuoc-ngoai",
    label: "foreignInvestedCompanyEstablishment_title",
    tagline: "foreignInvestedCompanyEstablishment_tagline",
    img: thanh_lap_cong_ty_von_nuoc_ngoai,
    color: "#A8171C",

    descriptions: [
      "foreignInvestedCompanyEstablishment_desc1",
      "foreignInvestedCompanyEstablishment_desc2",
      "foreignInvestedCompanyEstablishment_desc3",
    ],

    explains: [
      {
        name: "foreignInvestedCompanyEstablishment_services_title",
        scopes: [
          {
            name: "foreignInvestedCompanyEstablishment_preInvestment_title",
            items: [
              "foreignInvestedCompanyEstablishment_preInvestment_item1",
              "foreignInvestedCompanyEstablishment_preInvestment_item2",
              "foreignInvestedCompanyEstablishment_preInvestment_item3",
              "foreignInvestedCompanyEstablishment_preInvestment_item4",
            ],
          },
          {
            name: "foreignInvestedCompanyEstablishment_legalProcedures_title",
            items: [
              "foreignInvestedCompanyEstablishment_legalProcedures_item1",
              "foreignInvestedCompanyEstablishment_legalProcedures_item2",
              "foreignInvestedCompanyEstablishment_legalProcedures_item3",
              "foreignInvestedCompanyEstablishment_legalProcedures_item4",
            ],
          },
          {
            name: "foreignInvestedCompanyEstablishment_postEstablishment_title",
            items: [
              "foreignInvestedCompanyEstablishment_postEstablishment_item1",
              "foreignInvestedCompanyEstablishment_postEstablishment_item2",
              "foreignInvestedCompanyEstablishment_postEstablishment_item3",
              "foreignInvestedCompanyEstablishment_postEstablishment_item4",
            ],
          },
        ],
      },
    ],

    processes: [
      {
        title: "foreignInvestedCompanyEstablishment_process_title",
        intros: ["foreignInvestedCompanyEstablishment_process_intro"],
        steps: [
          {
            num: "01",
            title: "foreignInvestedCompanyEstablishment_step1_title",
            desc: "foreignInvestedCompanyEstablishment_step1_desc",
          },
          {
            num: "02",
            title: "foreignInvestedCompanyEstablishment_step2_title",
            desc: "foreignInvestedCompanyEstablishment_step2_desc",
          },
          {
            num: "03",
            title: "foreignInvestedCompanyEstablishment_step3_title",
            desc: "foreignInvestedCompanyEstablishment_step3_desc",
          },
          {
            num: "04",
            title: "foreignInvestedCompanyEstablishment_step4_title",
            desc: "foreignInvestedCompanyEstablishment_step4_desc",
          },
          {
            num: "05",
            title: "foreignInvestedCompanyEstablishment_step5_title",
            desc: "foreignInvestedCompanyEstablishment_step5_desc",
          },
          {
            num: "06",
            title: "foreignInvestedCompanyEstablishment_step6_title",
            desc: "foreignInvestedCompanyEstablishment_step6_desc",
          },
        ],
      },
    ],
    reasons: {
      title: "foreignInvestedCompanyEstablishment_reasons_title",
      items: [
        "foreignInvestedCompanyEstablishment_reasons_item1",
        "foreignInvestedCompanyEstablishment_reasons_item2",
        "foreignInvestedCompanyEstablishment_reasons_item3",
        "foreignInvestedCompanyEstablishment_reasons_item4",
        "foreignInvestedCompanyEstablishment_reasons_item5",
        "foreignInvestedCompanyEstablishment_reasons_item6",
      ],
    },

    lastPara: ["foreignInvestedCompanyEstablishment_closing"],
  },
  {
    id: "thanh-lap-van-phong-dai-dien-cong-ty-nuoc-ngoai",
    label: "foreignRepresentativeOffice_label",
    tagline: "foreignRepresentativeOffice_tagline",
    img: thanh_lap_van_phong_dai_dien_nuoc_ngoai,
    color: "#A8171C",

    descriptions: [
      "foreignRepresentativeOffice_description_1",
      "foreignRepresentativeOffice_description_2",
      "foreignRepresentativeOffice_description_3",
    ],

    explains: [
      {
        name: "foreignRepresentativeOffice_section1_title",
        intros: ["foreignRepresentativeOffice_section1_intro"],
        description: [
          "foreignRepresentativeOffice_section1_item1",
          "foreignRepresentativeOffice_section1_item2",
          "foreignRepresentativeOffice_section1_item3",
          "foreignRepresentativeOffice_section1_item4",
        ],
        lastIntro: ["foreignRepresentativeOffice_section1_note"],
      },
      {
        name: "foreignRepresentativeOffice_section2_title",
        intros: ["foreignRepresentativeOffice_section2_intro"],
        description: [
          "foreignRepresentativeOffice_section2_item1",
          "foreignRepresentativeOffice_section2_item2",
          "foreignRepresentativeOffice_section2_item3",
          "foreignRepresentativeOffice_section2_item4",
        ],
        lastIntro: ["foreignRepresentativeOffice_section2_note"],
      },
      {
        name: "foreignRepresentativeOffice_service_title",
        scopes: [
          {
            name: "foreignRepresentativeOffice_service_pre_title",
            items: [
              "foreignRepresentativeOffice_service_pre_1",
              "foreignRepresentativeOffice_service_pre_2",
              "foreignRepresentativeOffice_service_pre_3",
              "foreignRepresentativeOffice_service_pre_4",
            ],
          },
          {
            name: "foreignRepresentativeOffice_service_license_title",
            items: [
              "foreignRepresentativeOffice_service_license_1",
              "foreignRepresentativeOffice_service_license_2",
              "foreignRepresentativeOffice_service_license_3",
              "foreignRepresentativeOffice_service_license_4",
            ],
          },
          {
            name: "foreignRepresentativeOffice_service_after_title",
            items: [
              "foreignRepresentativeOffice_service_after_1",
              "foreignRepresentativeOffice_service_after_2",
              "foreignRepresentativeOffice_service_after_3",
              "foreignRepresentativeOffice_service_after_4",
            ],
          },
        ],
      },
    ],

    processes: [
      {
        title: "foreignRepresentativeOffice_process_title",
        intros: ["foreignRepresentativeOffice_process_intro"],
        steps: [
          {
            num: "01",
            title: "foreignRepresentativeOffice_process_step1_title",
            desc: "foreignRepresentativeOffice_process_step1_desc",
          },
          {
            num: "02",
            title: "foreignRepresentativeOffice_process_step2_title",
            desc: "foreignRepresentativeOffice_process_step2_desc",
          },
          {
            num: "03",
            title: "foreignRepresentativeOffice_process_step3_title",
            desc: "foreignRepresentativeOffice_process_step3_desc",
          },
          {
            num: "04",
            title: "foreignRepresentativeOffice_process_step4_title",
            desc: "foreignRepresentativeOffice_process_step4_desc",
          },
          {
            num: "05",
            title: "foreignRepresentativeOffice_process_step5_title",
            desc: "foreignRepresentativeOffice_process_step5_desc",
          },
          {
            num: "06",
            title: "foreignRepresentativeOffice_process_step6_title",
            desc: "foreignRepresentativeOffice_process_step6_desc",
          },
        ],
      },
    ],

    reasons: {
      title: "foreignRepresentativeOffice_reason_title",
      items: [
        "foreignRepresentativeOffice_reason_1",
        "foreignRepresentativeOffice_reason_2",
        "foreignRepresentativeOffice_reason_3",
        "foreignRepresentativeOffice_reason_4",
        "foreignRepresentativeOffice_reason_5",
        "foreignRepresentativeOffice_reason_6",
      ],
    },

    lastPara: [
      "foreignRepresentativeOffice_final_1",
      "foreignRepresentativeOffice_final_2",
    ],
  },
  {
    id: "dieu-chinh-muc-tieu-quy-mo-du-an-dau-tu",
    label: "projectAdjustment_label",
    tagline: "projectAdjustment_tagline",
    img: quy_mo_du_an,
    color: "#A8171C",

    descriptions: [
      "projectAdjustment_description1",
      "projectAdjustment_description2",
    ],

    explains: [
      {
        name: "projectAdjustment_case_title",
        intros: ["projectAdjustment_case_intro"],
        description: [
          "projectAdjustment_case_item1",
          "projectAdjustment_case_item2",
          "projectAdjustment_case_item3",
          "projectAdjustment_case_item4",
          "projectAdjustment_case_item5",
        ],
        lastIntro: ["projectAdjustment_case_note"],
      },
      {
        name: "projectAdjustment_scope_title",
        description: ["projectAdjustment_scope_intro"],
        scopes: [
          {
            name: "projectAdjustment_scope_consulting_title",
            items: ["projectAdjustment_scope_consulting_desc"],
          },
          {
            name: "projectAdjustment_scope_irc_title",
            items: [
              "projectAdjustment_scope_irc_desc1",
              "projectAdjustment_scope_irc_desc2",
            ],
          },
          {
            name: "projectAdjustment_scope_business_title",
            items: ["projectAdjustment_scope_business_desc"],
          },
          {
            name: "projectAdjustment_scope_review_title",
            items: ["projectAdjustment_scope_review_desc"],
          },
          {
            name: "projectAdjustment_scope_inspection_title",
            items: ["projectAdjustment_scope_inspection_desc"],
          },
          {
            name: "projectAdjustment_scope_report_title",
            items: ["projectAdjustment_scope_report_desc"],
          },
        ],
      },
    ],

    reasons: {
      title: "projectAdjustment_reason_title",
      items: [
        "projectAdjustment_reason_item1",
        "projectAdjustment_reason_item2",
        "projectAdjustment_reason_item3",
        "projectAdjustment_reason_item4",
        "projectAdjustment_reason_item5",
        "projectAdjustment_reason_item6",
      ],
    },

    lastPara: [
      "projectAdjustment_conclusion1",
      "projectAdjustment_conclusion2",
    ],
  },
  {
    id: "thay-doi-dia-diem-thuc-hien-du-an-dau-tu",
    label: "projectLocationChange_label",
    tagline: "projectLocationChange_tagline",
    img: thay_doi_dia_diem_thuc_hien_du_an,
    color: "#A8171C",

    descriptions: [
      "projectLocationChange_description1",
      "projectLocationChange_description2",
    ],

    explains: [
      {
        name: "projectLocationChange_case_title",
        intros: ["projectLocationChange_case_intro"],
        description: [
          "projectLocationChange_case_item1",
          "projectLocationChange_case_item2",
          "projectLocationChange_case_item3",
          "projectLocationChange_case_item4",
        ],
        lastIntro: ["projectLocationChange_case_note"],
      },
      {
        name: "projectLocationChange_scope_title",
        description: ["projectLocationChange_scope_intro"],
        scopes: [
          {
            name: "projectLocationChange_scope_location_title",
            items: ["projectLocationChange_scope_location_desc"],
          },
          {
            name: "projectLocationChange_scope_legal_title",
            items: [
              "projectLocationChange_scope_legal_desc1",
              "projectLocationChange_scope_legal_desc2",
            ],
          },
          {
            name: "projectLocationChange_scope_contract_title",
            items: ["projectLocationChange_scope_contract_desc"],
          },
          {
            name: "projectLocationChange_scope_procedure_title",
            items: ["projectLocationChange_scope_procedure_desc"],
          },
          {
            name: "projectLocationChange_scope_inspection_title",
            items: ["projectLocationChange_scope_inspection_desc"],
          },
          {
            name: "projectLocationChange_scope_tax_title",
            items: ["projectLocationChange_scope_tax_desc"],
          },
          {
            name: "projectLocationChange_scope_seal_title",
            items: ["projectLocationChange_scope_seal_desc"],
          },
          {
            name: "projectLocationChange_scope_result_title",
            items: [
              "projectLocationChange_scope_result_desc1",
              "projectLocationChange_scope_result_desc2",
            ],
          },
        ],
      },
    ],

    reasons: {
      title: "projectLocationChange_reason_title",
      items: [
        "projectLocationChange_reason_item1",
        "projectLocationChange_reason_item2",
        "projectLocationChange_reason_item3",
        "projectLocationChange_reason_item4",
        "projectLocationChange_reason_item5",
        "projectLocationChange_reason_item6",
      ],
    },

    lastPara: ["projectLocationChange_conclusion"],
  },
  {
    id: "thay-doi-tong-von-dau-tu-von-gop-thuc-hien-du-an",
    label: "serviceInvestmentCapitalChange_label",
    tagline: "serviceInvestmentCapitalChange_tagline",
    img: thay_doi_von_dau_tu,
    color: "#A8171C",

    descriptions: [
      "serviceInvestmentCapitalChange_description1",
      "serviceInvestmentCapitalChange_description2",
    ],

    explains: [
      {
        name: "serviceInvestmentCapitalChange_case_title",
        description: [
          "serviceInvestmentCapitalChange_case1",
          "serviceInvestmentCapitalChange_case2",
          "serviceInvestmentCapitalChange_case3",
          "serviceInvestmentCapitalChange_case4",
          "serviceInvestmentCapitalChange_case5",
        ],
      },
      {
        name: "serviceInvestmentCapitalChange_scope_title",
        scopes: [
          {
            name: "serviceInvestmentCapitalChange_scope_legal_title",
            items: [
              "serviceInvestmentCapitalChange_scope_legal1",
              "serviceInvestmentCapitalChange_scope_legal2",
            ],
          },
          {
            name: "serviceInvestmentCapitalChange_scope_document_title",
            items: [
              "serviceInvestmentCapitalChange_scope_document_intro",
              "serviceInvestmentCapitalChange_scope_document1",
              "serviceInvestmentCapitalChange_scope_document2",
              "serviceInvestmentCapitalChange_scope_document3",
              "serviceInvestmentCapitalChange_scope_document4",
              "serviceInvestmentCapitalChange_scope_document_note",
            ],
          },
          {
            name: "serviceInvestmentCapitalChange_scope_irc_title",
            items: [
              "serviceInvestmentCapitalChange_scope_irc_intro",
              "serviceInvestmentCapitalChange_scope_irc1",
              "serviceInvestmentCapitalChange_scope_irc2",
              "serviceInvestmentCapitalChange_scope_irc3",
              "serviceInvestmentCapitalChange_scope_irc_work_title",
              "serviceInvestmentCapitalChange_scope_irc_work1",
              "serviceInvestmentCapitalChange_scope_irc_work2",
              "serviceInvestmentCapitalChange_scope_irc_work3",
              "serviceInvestmentCapitalChange_scope_irc_work4",
              "serviceInvestmentCapitalChange_scope_irc_location",
            ],
          },
          {
            name: "serviceInvestmentCapitalChange_scope_erc_title",
            items: [
              "serviceInvestmentCapitalChange_scope_erc_intro",
              "serviceInvestmentCapitalChange_scope_erc1",
              "serviceInvestmentCapitalChange_scope_erc2",
              "serviceInvestmentCapitalChange_scope_erc3",
              "serviceInvestmentCapitalChange_scope_erc_location",
            ],
          },
          {
            name: "serviceInvestmentCapitalChange_scope_inspection_title",
            items: [
              "serviceInvestmentCapitalChange_scope_inspection_intro",
              "serviceInvestmentCapitalChange_scope_inspection1",
              "serviceInvestmentCapitalChange_scope_inspection2",
              "serviceInvestmentCapitalChange_scope_inspection3",
            ],
          },
          {
            name: "serviceInvestmentCapitalChange_scope_report_title",
            items: [
              "serviceInvestmentCapitalChange_scope_report_intro",
              "serviceInvestmentCapitalChange_scope_report1",
              "serviceInvestmentCapitalChange_scope_report2",
              "serviceInvestmentCapitalChange_scope_report3",
            ],
          },
        ],
      },
    ],

    reasons: {
      title: "serviceInvestmentCapitalChange_reasons_title",
      items: [
        "serviceInvestmentCapitalChange_reason1",
        "serviceInvestmentCapitalChange_reason2",
        "serviceInvestmentCapitalChange_reason3",
        "serviceInvestmentCapitalChange_reason4",
        "serviceInvestmentCapitalChange_reason5",
      ],
    },

    lastPara: ["serviceInvestmentCapitalChange_conclusion"],
  },
  {
    id: "gia-han-tien-do-gop-von-tien-do-thuc-hien-du-an",
    label: "extension_capital_contribution_project_progress_label",
    tagline: "extension_capital_contribution_project_progress_tagline",
    img: gia_han_tien_do_gop_von,
    color: "#A8171C",

    descriptions: [
      "extension_capital_contribution_project_progress_description_1",
      "extension_capital_contribution_project_progress_description_2",
      "extension_capital_contribution_project_progress_description_3",
    ],

    explains: [
      {
        name: "extension_capital_contribution_project_progress_cases_title",
        description: [
          "extension_capital_contribution_project_progress_case_1",
          "extension_capital_contribution_project_progress_case_2",
          "extension_capital_contribution_project_progress_case_3",
        ],
      },
      {
        name: "extension_capital_contribution_project_progress_scope_title",
        description: [
          "extension_capital_contribution_project_progress_scope_intro",
        ],
        scopes: [
          {
            name: "extension_capital_contribution_project_progress_scope_legal_title",
            items: [
              "extension_capital_contribution_project_progress_scope_legal_1",
              "extension_capital_contribution_project_progress_scope_legal_2",
            ],
          },
          {
            name: "extension_capital_contribution_project_progress_scope_procedure_title",
            items: [
              "extension_capital_contribution_project_progress_scope_procedure_1",
            ],
          },
          {
            name: "extension_capital_contribution_project_progress_scope_inspection_title",
            items: [
              "extension_capital_contribution_project_progress_scope_inspection_1",
            ],
          },
          {
            name: "extension_capital_contribution_project_progress_scope_report_title",
            items: [
              "extension_capital_contribution_project_progress_scope_report_1",
            ],
          },
        ],
      },
    ],

    reasons: {
      title: "extension_capital_contribution_project_progress_reasons_title",
      items: [
        "extension_capital_contribution_project_progress_reason_1",
        "extension_capital_contribution_project_progress_reason_2",
        "extension_capital_contribution_project_progress_reason_3",
        "extension_capital_contribution_project_progress_reason_4",
        "extension_capital_contribution_project_progress_reason_5",
      ],
    },

    lastPara: ["extension_capital_contribution_project_progress_conclusion"],
  },
  {
    id: "thay-doi-nha-dau-tu-thuc-hien-du-an",
    label: "project_change_investor_label",
    tagline: "project_change_investor_tagline",
    img: thay_doi_nha_dau_tu,
    color: "#A8171C",

    descriptions: [
      "project_change_investor_description_1",
      "project_change_investor_description_2",
    ],

    explains: [
      {
        name: "project_change_investor_cases_title",
        description: [
          "project_change_investor_case_transfer_entire_project",
          "project_change_investor_case_transfer_partial_project",
          "project_change_investor_case_merger_acquisition",
          "project_change_investor_case_inheritance_transfer",
        ],
      },
      {
        name: "project_change_investor_service_scope_title",
        description: ["project_change_investor_service_scope_intro"],
        scopes: [
          {
            name: "project_change_investor_service_review_documents_title",
            items: [
              "project_change_investor_service_review_documents_1",
              "project_change_investor_service_review_documents_2",
            ],
          },
          {
            name: "project_change_investor_service_transfer_structure_title",
            items: [
              "project_change_investor_service_transfer_structure_1",
              "project_change_investor_service_transfer_structure_2",
            ],
          },
          {
            name: "project_change_investor_service_prepare_documents_title",
            items: ["project_change_investor_service_prepare_documents"],
          },
          {
            name: "project_change_investor_service_administrative_procedure_title",
            items: [
              "project_change_investor_service_administrative_procedure",
              "project_change_investor_service_administrative_procedure_location",
              "project_change_investor_service_capital_transfer_requirement",
              "project_change_investor_service_parallel_procedure",
            ],
          },
          {
            name: "project_change_investor_service_update_info_title",
            items: ["project_change_investor_service_update_information"],
          },
          {
            name: "project_change_investor_service_post_transaction_title",
            items: ["project_change_investor_service_post_transaction"],
          },
        ],
      },
    ],

    reasons: {
      title: "project_change_investor_reason_title",
      items: [
        "project_change_investor_reason_experience",
        "project_change_investor_reason_legal_assessment",
        "project_change_investor_reason_prepare_documents",
        "project_change_investor_reason_reduce_risk",
        "project_change_investor_reason_long_term_support",
      ],
    },

    lastPara: [
      "project_change_investor_conclusion_1",
      "project_change_investor_conclusion_2",
    ],
  },
  {
    id: "cap-nhat-thong-tin-nha-dau-tu",
    label: "update_investor_information_label",
    tagline: "update_investor_information_tagline",
    img: cap_nhat_thong_tin,
    color: "#A8171C",

    descriptions: [
      "update_investor_information_description_1",
      "update_investor_information_description_2",
    ],

    explains: [
      {
        name: "investor_update_cases_title",
        scopes: [
          {
            name: "individual_investor_title",
            items: [
              "individual_investor_personal_info_change",
              "individual_investor_address_change",
            ],
          },
          {
            name: "organization_investor_title",
            items: [
              "organization_investor_legal_info_change",
              "organization_investor_legal_representative_change",
              "organization_investor_restructure_change",
            ],
          },
        ],
      },
      {
        name: "pgu_service_scope_title",
        description: ["pgu_service_scope_description"],
        scopes: [
          {
            name: "legal_consultation_review_title",
            items: [
              "legal_consultation_review_item_1",
              "legal_consultation_review_item_2",
            ],
          },
          {
            name: "document_preparation_title",
            items: [
              "document_preparation_item_1",
              "document_preparation_item_2",
            ],
          },
          {
            name: "government_procedure_title",
            items: [
              "government_procedure_item_1",
              "government_procedure_item_2",
            ],
          },
          {
            name: "result_delivery_title",
            items: ["result_delivery_item"],
          },
          {
            name: "post_adjustment_support_title",
            items: ["post_adjustment_support_item"],
          },
        ],
      },
    ],

    reasons: {
      title: "why_choose_pgu_title",
      items: [
        "why_choose_pgu_expert",
        "why_choose_pgu_review_solution",
        "why_choose_pgu_fast_procedure",
        "why_choose_pgu_accuracy",
        "why_choose_pgu_legal_support",
      ],
    },

    lastPara: [
      "investor_information_update_conclusion_1",
      "investor_information_update_conclusion_2",
    ],
  },
  {
    id: "gia-han-thoi-gian-thue-xuong",
    label: "factory_lease_extension_label",
    tagline: "factory_lease_extension_tagline",
    img: gian_han_thoi_gian_thue_xuong,
    color: "#A8171C",
    descriptions: [
      "factory_lease_extension_description_1",
      "factory_lease_extension_description_2",
    ],

    explains: [
      {
        name: "factory_lease_extension_service_intro",
        description: [
          "factory_lease_extension_service_legal_consulting",
          "factory_lease_extension_service_contract_review",
          "factory_lease_extension_service_negotiation",
          "factory_lease_extension_service_prepare_application",
          "factory_lease_extension_service_monitor_application",
          "factory_lease_extension_service_result_handover",
          "factory_lease_extension_service_post_support",
        ],
      },
    ],

    reasons: {
      title: "why_choose_pgu_title",
      items: [
        "why_investors_choose_pgu_expertise",
        "why_investors_choose_pgu_contract_review",
        "why_investors_choose_pgu_negotiation_support",
        "why_investors_choose_pgu_fast_procedure",
        "why_investors_choose_pgu_long_term_support",
      ],
    },

    lastPara: [
      "factory_lease_extension_conclusion_1",
      "factory_lease_extension_conclusion_2",
    ],
  },
  {
    id: "gia-han-thoi-gian-hoat-dong-du-an",
    label: "project_operation_extension_label",
    tagline: "project_operation_extension_tagline",
    img: thay_doi_thoi_gian_thuc_hien_du_an,
    color: "#A8171C",

    descriptions: [
      "project_operation_extension_desc_1",
      "project_operation_extension_desc_2",
    ],

    explains: [
      {
        name: "scope_services_title",
        description: ["scope_intro"],
        scopes: [
          {
            name: "scope_consulting_title",
            items: ["scope_consulting_desc"],
          },
          {
            name: "scope_prepare_documents_title",
            items: ["scope_prepare_documents_desc"],
          },
          {
            name: "scope_administrative_representation_title",
            items: ["scope_administrative_representation_desc"],
          },
          {
            name: "scope_monitor_progress_title",
            items: ["scope_monitor_progress_desc"],
          },
          {
            name: "scope_post_extension_support_title",
            items: ["scope_post_extension_support_desc"],
          },
        ],
      },
    ],
    processes: [
      {
        title: "process_title",
        steps: [
          {
            num: "01",
            title: "process_step_1_title",
            desc: "process_step_1_desc",
          },
          {
            num: "02",
            title: "process_step_2_title",
            desc: "process_step_2_desc",
          },
          {
            num: "03",
            title: "process_step_3_title",
            desc: "process_step_3_desc",
          },
          {
            num: "04",
            title: "process_step_4_title",
            desc: "process_step_4_desc",
          },
          {
            num: "05",
            title: "process_step_5_title",
            desc: "process_step_5_desc",
          },
          {
            num: "06",
            title: "process_step_6_title",
            desc: "process_step_6_desc",
          },
        ],
      },
    ],

    reasons: {
      title: "reasons_title",
      items: ["reasons_1", "reasons_2", "reasons_3", "reasons_4", "reasons_5"],
    },

    lastPara: ["final_paragraph"],
  },
  {
    id: "dang-ky-khoan-vay-nuoc-ngoai",
    label: "foreign_loan_registration_label",
    tagline: "foreign_loan_registration_tagline",
    img: dang_ky_khoan_vay_nuoc_ngoai,
    color: "#A8171C",

    descriptions: [
      "foreign_loan_registration_desc_1",
      "foreign_loan_registration_desc_2",
    ],

    explains: [
      {
        name: "cases_requiring_registration_title",
        description: ["cases_requiring_registration_intro"],
        scopes: [
          {
            name: "case_medium_long_term_loans_title",
            items: ["case_medium_long_term_loans_desc"],
          },
          {
            name: "case_short_term_extended_title",
            items: ["case_short_term_extended_desc"],
          },
          {
            name: "case_short_term_outstanding_after_one_year_title",
            items: ["case_short_term_outstanding_after_one_year_desc"],
          },
          {
            name: "case_no_registration_title",
            items: ["case_no_registration_desc"],
          },
          {
            name: "case_summary_title",
            items: ["case_summary_desc"],
          },
        ],
      },
      {
        name: "loans_scope_services_title",
        description: ["scope_services_intro"],
        scopes: [
          {
            name: "loans_scope_consulting_title",
            items: ["loans_scope_consulting_desc"],
          },
          {
            name: "loans_scope_prepare_documents_title",
            items: ["loans_scope_prepare_documents_desc"],
          },
          {
            name: "scope_submit_application_title",
            items: ["scope_submit_application_desc"],
          },
          {
            name: "scope_work_with_authorities_title",
            items: ["scope_work_with_authorities_desc"],
          },
          {
            name: "scope_result_handover_title",
            items: ["scope_result_handover_desc"],
          },
        ],
      },
    ],

    reasons: {
      title: "loans_reasons_choose_pgu_title",
      items: [
        "reason_foreign_exchange_expertise",
        "reason_foreign_exchange_expertise",
        "reason_loan_structure_consulting",
        "reason_registration_procedure_support",
        "reason_save_time_reduce_errors",
      ],
    },

    lastPara: ["final_paragraph_1", "final_paragraph_2"],
  },
  {
    id: "dang-ky-thay-doi-khoan-vay-nuoc-ngoai",
    label: "foreign_loan_change_registration_label",
    tagline: "foreign_loan_change_registration_tagline",
    img: dang_ky_khoan_vay_nuoc_ngoai,
    color: "#A8171C",

    descriptions: [
      "foreign_loan_change_registration_description_1",
      "foreign_loan_change_registration_description_2",
      "foreign_loan_change_registration_description_3",
    ],

    explains: [
      {
        name: "foreign_loan_cases_requiring_registration_title",
        description: [
          "cases_requiring_registration_description_1",
          "cases_requiring_registration_description_2",
        ],
        scopes: [
          {
            name: "cases_only_notification_title",
            items: [
              "cases_only_notification_item_1",
              "cases_only_notification_item_2",
              "cases_only_notification_item_3",
              "cases_only_notification_item_4",
              "cases_only_notification_item_5",
              "cases_only_notification_item_6",
              "cases_only_notification_item_7",
            ],
          },
          {
            name: "cases_requiring_registration_change_title",
            items: ["cases_requiring_registration_change_description"],
          },
        ],
      },
      {
        name: "foreign_loan_service_scope_title",
        description: ["foreign_loan_service_scope_description"],
        scopes: [
          {
            name: "foreign_loan_service_scope_item_1_title",
            items: ["foreign_loan_service_scope_item_1"],
          },
          {
            name: "foreign_loan_service_scope_item_2_title",
            items: ["foreign_loan_service_scope_item_2"],
          },
          {
            name: "foreign_loan_service_scope_item_3_title",
            items: ["foreign_loan_service_scope_item_3"],
          },
          {
            name: "foreign_loan_service_scope_item_4_title",
            items: ["foreign_loan_service_scope_item_4"],
          },
          {
            name: "foreign_loan_service_scope_item_5_title",
            items: ["foreign_loan_service_scope_item_5"],
          },
          {
            name: "foreign_loan_service_scope_item_6_title",
            items: ["foreign_loan_service_scope_item_6"],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "reasons_choose_pgu_title",
      items: [
        "reasons_choose_pgu_item_1",
        "reasons_choose_pgu_item_2",
        "reasons_choose_pgu_item_3",
        "reasons_choose_pgu_item_4",
      ],
    },

    lastPara: [
      "foreign_loan_change_registration_last_para_1",
      "foreign_loan_change_registration_last_para_2",
      "foreign_loan_change_registration_last_para_3",
    ],
  },
  {
    id: "bao-cao-khoan-vay-nuoc-ngoai",
    label: "foreign_loan_report_label",
    tagline: "foreign_loan_report_tagline",
    img: bao_cao_khoan_vay_nuoc_ngoai,
    color: "#A8171C",

    descriptions: ["foreign_loan_report_desc_1", "foreign_loan_report_desc_2"],

    explains: [
      {
        name: "foreign_loan_report_section1_title",
        description: ["foreign_loan_report_section1_desc_1"],
        scopes: [
          {
            name: "foreign_loan_report_periodic_report_title",
            items: [
              "foreign_loan_report_periodic_item_1",
              "foreign_loan_report_periodic_item_2",
              "foreign_loan_report_periodic_item_3",
              "foreign_loan_report_periodic_item_4",
            ],
          },
          {
            name: "foreign_loan_report_ad_hoc_report_title",
            items: [
              "foreign_loan_report_ad_hoc_item_1",
              "foreign_loan_report_ad_hoc_item_2",
            ],
          },
        ],
      },
      {
        name: "foreign_loan_report_section2_title",
        description: [
          "foreign_loan_report_section2_desc_1",
          "foreign_loan_report_section2_desc_2",
        ],
        scopes: [
          {
            name: "foreign_loan_report_section2_scope_1_title",
            items: ["foreign_loan_report_service_legal_consulting"],
          },
          {
            name: "foreign_loan_report_section2_scope_2_title",
            items: ["foreign_loan_report_service_prepare_documents"],
          },
          {
            name: "foreign_loan_report_section2_scope_3_title",
            items: ["foreign_loan_report_service_prepare_data"],
          },
          {
            name: "foreign_loan_report_section2_scope_4_title",
            items: ["foreign_loan_report_service_handle_issues"],
          },
          {
            name: "foreign_loan_report_section2_scope_5_title",
            items: ["foreign_loan_report_service_work_with_authority"],
          },
          {
            name: "foreign_loan_report_section2_scope_6_title",
            items: ["foreign_loan_report_service_reminder"],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "foreign_loan_report_reason_title",
      items: [
        "foreign_loan_report_reason_1",
        "foreign_loan_report_reason_2",
        "foreign_loan_report_reason_3",
        "foreign_loan_report_reason_4",
        "foreign_loan_report_reason_5",
      ],
    },

    lastPara: [
      "foreign_loan_report_last_para_1",
      "foreign_loan_report_last_para_2",
    ],
  },
  {
    id: "cham-dut-du-an-dau-tu",
    label: "investment_project_termination_label",
    tagline: "investment_project_termination_tagline",
    img: cham_dut_du_an_dau_tu,
    color: "#A8171C",

    descriptions: [
      "investment_project_termination_desc_1",
      "investment_project_termination_desc_2",
    ],

    explains: [
      {
        name: "investment_project_termination_section1_title",
        description: [],
        scopes: [
          {
            name: "investment_project_termination_case_investor_title",
            items: [
              "investment_project_termination_case_investor_item_1",
              "investment_project_termination_case_investor_item_2",
              "investment_project_termination_case_investor_item_3",
            ],
          },
          {
            name: "investment_project_termination_case_authority_title",
            items: [
              "investment_project_termination_case_authority_item_1",
              "investment_project_termination_case_authority_item_2",
              "investment_project_termination_case_authority_item_3",
              "investment_project_termination_case_authority_item_4",
              "investment_project_termination_case_authority_item_5",
              "investment_project_termination_case_authority_item_6",
              "investment_project_termination_case_authority_item_7",
              "investment_project_termination_case_authority_item_8",
              "investment_project_termination_case_authority_item_9",
            ],
          },
        ],
      },
    ],

    processes: [
      {
        title: "investment_project_termination_process_title",
        intros: ["investment_project_termination_process_intro"],
        steps: [
          {
            num: "01",
            title: "investment_project_termination_step_1_title",
            desc: "investment_project_termination_step_1_desc",
          },
          {
            num: "02",
            title: "investment_project_termination_step_2_title",
            desc: "investment_project_termination_step_2_desc",
          },
          {
            num: "03",
            title: "investment_project_termination_step_3_title",
            desc: "investment_project_termination_step_3_desc",
          },
        ],
      },
    ],

    reasons: {
      title: "investment_project_termination_reason_title",
      items: [
        "investment_project_termination_reason_1",
        "investment_project_termination_reason_2",
        "investment_project_termination_reason_3",
        "investment_project_termination_reason_4",
        "investment_project_termination_reason_5",
      ],
    },

    lastPara: ["investment_project_termination_last_para"],
  },
  {
    id: "giai-the-cong-ty-fdi",
    label: "foreign_invested_company_dissolution_title",
    tagline: "foreign_invested_company_dissolution_tagline",
    img: giai_the_cong_ty,
    color: "#A8171C",

    descriptions: [
      "foreign_invested_company_dissolution_desc_1",
      "foreign_invested_company_dissolution_desc_2",
      "foreign_invested_company_dissolution_desc_3",
    ],

    explains: [
      {
        name: "foreign_invested_company_dissolution_condition_title",
        description: ["foreign_invested_company_dissolution_condition_intro"],
        scopes: [
          {
            name: "foreign_invested_company_dissolution_condition_c_title",
            items: [
              "foreign_invested_company_dissolution_condition_item_1",
              "foreign_invested_company_dissolution_condition_item_2",
              "foreign_invested_company_dissolution_condition_item_3",
            ],
          },
          {
            name: "foreign_invested_company_dissolution_pre_procedure_title",
            items: [
              "foreign_invested_company_dissolution_pre_procedure_item_1",
              "foreign_invested_company_dissolution_pre_procedure_item_2",
              "foreign_invested_company_dissolution_pre_procedure_note",
            ],
          },
        ],
      },
      {
        name: "foreign_invested_pgu_service_scope_title",
        description: [],
        scopes: [
          {
            name: "pgu_service_scope_title_1",
            items: ["pgu_service_scope_item_1", "pgu_service_scope_item_3"],
          },
          {
            name: "pgu_service_scope_title_2",
            items: ["pgu_service_scope_item_2", "pgu_service_scope_item_7"],
          },
          {
            name: "pgu_service_scope_title_3",
            items: [
              "pgu_service_scope_item_4",
              "pgu_service_scope_item_5",
              "pgu_service_scope_item_6",
            ],
          },
          {
            name: "pgu_service_scope_title_4",
            items: ["pgu_service_scope_item_8"],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "foreign_invested_why_choose_pgu_title",
      items: [
        "why_choose_pgu_item_1",
        "why_choose_pgu_item_2",
        "why_choose_pgu_item_3",
        "why_choose_pgu_item_4",
        "why_choose_pgu_item_5",
      ],
    },

    lastPara: ["pgu_commitment", "pgu_contact_invitation"],
  },
  {
    id: "thanh-lap-doanh-nghiep",
    label: "enterprise_establishment_label",
    tagline: "enterprise_establishment_tagline",
    img: thanh_lap_doanh_nghiep,
    color: "#A8171C",

    descriptions: [
      "enterprise_intro_paragraph_1",
      "enterprise_intro_paragraph_2",
      "enterprise_intro_paragraph_3",
    ],

    explains: [
      {
        name: "enterprise_explain_title_1",
        description: [
          "enterprise_explain_description_1",
          "enterprise_explain_description_2",
        ],
        scopes: [
          {
            name: "enterprise_types_title",
            items: [
              "enterprise_type_single_member_llc",
              "enterprise_type_multi_member_llc",
              "enterprise_type_joint_stock_company",
              "enterprise_type_private_enterprise",
              "enterprise_type_partnership_company",
            ],
          },
          {
            name: "enterprise_note_title",
            items: [
              "enterprise_note_1",
              "enterprise_note_2",
              "enterprise_note_3",
            ],
          },
        ],
      },

      {
        name: "enterprise_service_scope_title",
        description: [],
        scopes: [
          {
            name: "enterprise_pre_establishment_advisory_title",
            items: [
              "enterprise_pre_establishment_advisory_1",
              "enterprise_pre_establishment_advisory_2",
              "enterprise_pre_establishment_advisory_3",
              "enterprise_pre_establishment_advisory_4",
              "enterprise_pre_establishment_advisory_5",
            ],
          },
          {
            name: "enterprise_registration_dossier_title",
            items: [
              "enterprise_registration_dossier_1",
              "enterprise_registration_dossier_2",
              "enterprise_registration_dossier_3",
              "enterprise_registration_dossier_4",
            ],
          },
          {
            name: "enterprise_state_authority_procedure_title",
            items: [
              "enterprise_state_authority_procedure_1",
              "enterprise_state_authority_procedure_2",
              "enterprise_state_authority_procedure_3",
              "enterprise_state_authority_procedure_4",
            ],
          },
          {
            name: "enterprise_post_establishment_support_title",
            items: [
              "enterprise_post_establishment_support_1",
              "enterprise_post_establishment_support_2",
              "enterprise_post_establishment_support_3",
              "enterprise_post_establishment_support_4",
              "enterprise_post_establishment_support_5",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "enterprise_benefits_title",
      items: [
        "enterprise_benefit_1",
        "enterprise_benefit_2",
        "enterprise_benefit_3",
        "enterprise_benefit_4",
        "enterprise_benefit_5",
      ],
    },

    lastPara: ["enterprise_final_paragraph_1", "enterprise_final_paragraph_2"],
  },
  {
    id: "tu-van-phap-ly-thuong-xuyen",
    label: "service_regular_legal_consulting_label",
    tagline: "service_regular_legal_consulting_tagline",
    img: tu_van_thuong_xuyen,
    color: "#A8171C",

    descriptions: [
      "business_operations_are_governed_by_legal_regulations",
      "businesses_need_to_control_legal_risks_during_operations",
      "large_enterprises_build_legal_departments",
      "not_all_businesses_have_financial_resources_for_legal_department",
      "using_regular_legal_consulting_service_is_a_smart_choice",
    ],

    explains: [
      {
        name: "section_what_is_regular_legal_consulting",
        description: [
          "regular_legal_consulting_definition",
          "regular_legal_consulting_definition_additional",
        ],
        scopes: [
          {
            name: "regular_legal_consulting_explain1_title",
            items: [
              "regular_legal_consulting_explain1_item1",
              "regular_legal_consulting_explain1_item2",
              "regular_legal_consulting_explain1_item3",
            ],
          },
          {
            name: "regular_legal_consulting_explain2_title",
            items: [
              "regular_legal_consulting_explain2_item1",
              "regular_legal_consulting_explain2_item2",
            ],
          },
        ],
      },

      {
        name: "section_scope_of_services",
        description: [],
        scopes: [
          {
            name: "regular_legal_consulting_scope1_title",
            items: [
              "service_scope_legal_advice",
              "service_scope_legal_advice_additional",
            ],
          },
          {
            name: "regular_legal_consulting_scope2_title",
            items: [
              "service_scope_drafting_documents",
              "service_scope_review_documents",
            ],
          },
          {
            name: "regular_legal_consulting_scope3_title",
            items: [
              "service_scope_prepare_negotiation_documents",
              "service_scope_business_negotiation_advice",
            ],
          },
          {
            name: "regular_legal_consulting_scope4_title",
            items: [
              "service_scope_dispute_consulting",
              "service_scope_dispute_consulting_exclusion",
            ],
          },
          {
            name: "regular_legal_consulting_scope5_title",
            items: [
              "service_scope_internal_regulation_support",
              "service_scope_internal_regulation_support_additional",
              "service_scope_internal_regulation_support_other",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "section_benefits_of_service",
      items: [
        "benefit_timely_legal_support",
        "benefit_prevent_legal_risks",
        "benefit_contract_drafting_review",
        "benefit_cost_saving",
        "benefit_long_term_business_support",
      ],
    },

    lastPara: ["closing_statement_phuc_gia_uy_commitment"],
  },
  {
    id: "thanh-lap-chi-nhanh",
    label: "branch_establishment_label",
    tagline: "branch_establishment_tagline",
    img: thanh_lap_chi_nhanh,
    color: "#A8171C",

    descriptions: [
      "branch_intro_business_expansion",
      "branch_intro_strategic_step",
    ],

    explains: [
      {
        name: "branch_establishment_section_title",
        description: [
          "branch_establishment_definition",
          "branch_establishment_meaning",
        ],
        scopes: [
          {
            name: "branch_establishment_meaning_title",
            items: [
              "branch_establishment_scope_expand_business",
              "branch_establishment_scope_increase_customer_access",
              "branch_establishment_scope_improve_business_efficiency",
            ],
          },
        ],
      },

      {
        name: "branch_considerations_section_title",
        description: [],
        scopes: [
          {
            name: "branch_considerations_before_title",
            items: [
              "branch_considerations_legal_status",
              "branch_considerations_branch_name",
              "branch_considerations_business_scope",
              "branch_considerations_accounting_method",
            ],
          },
          {
            name: "branch_considerations_after_title",
            items: [
              "branch_after_license_tax",
              "branch_after_signboard",
              "branch_after_digital_signature",
            ],
          },
        ],
      },

      {
        name: "branch_service_scope_section_title",
        description: [],
        scopes: [
          {
            name: "branch_service_scope_intro",
            items: [
              "branch_service_scope_condition_advice",
              "branch_service_scope_branch_type_advice",
              "branch_service_scope_document_drafting",
              "branch_service_scope_submit_application",
              "branch_service_scope_tax_fee_advice",
              "branch_service_scope_other_legal_support",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "business_location_benefit_title",
      intro: ["branch_benefits_intro"],
      items: [
        "branch_benefits_full_legal_consulting",
        "branch_benefits_document_preparation",
        "branch_benefits_support_authorities",
        "branch_benefits_handle_arising_issues",
        "branch_benefits_reduce_administrative_risk",
      ],
    },

    lastPara: ["branch_closing_statement"],
  },
  {
    id: "thanh-lap-van-phong-dai-dien",
    label: "representative_office_establishment_label",
    tagline: "representative_office_establishment_tagline",
    img: thanh_lap_van_phong_dai_dien,
    color: "#A8171C",

    descriptions: [
      "representative_office_intro_business_expansion",
      "representative_office_intro_pgu_service",
    ],

    explains: [
      {
        name: "representative_office_establishment_section_title",
        description: [
          "representative_office_definition",
          "representative_office_non_profit_function",
        ],
        scopes: [
          {
            name: "representative_office_role_section_title",
            items: [
              "representative_office_role_promote_trade",
              "representative_office_role_expand_market",
              "representative_office_role_build_brand",
            ],
          },
        ],
      },

      {
        name: "representative_office_considerations_section_title",
        description: [],
        scopes: [
          {
            name: "representative_office_preparation_before_establishment",
            items: [
              "representative_office_preparation_name",
              "representative_office_preparation_address",
              "representative_office_preparation_head_information",
            ],
          },
          {
            name: "representative_office_procedures_after_certificate",
            items: [
              "representative_office_after_signboard",
              "representative_office_after_license_tax",
            ],
          },
        ],
      },

      {
        name: "representative_office_service_scope_section_title",
        description: [],
        scopes: [
          {
            name: "representative_office_service_scope_intro",
            items: [
              "representative_office_service_scope_legal_advice",
              "representative_office_service_scope_compare_models",
              "representative_office_service_scope_procedure_advice",
              "representative_office_service_scope_document_preparation",
              "representative_office_service_scope_apply_certificate",
              "representative_office_service_scope_seal_support",
              "representative_office_service_scope_license_tax_guidance",
              "representative_office_service_scope_other_legal_support",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "representative_office_benefits_section_title",
      items: [
        "representative_office_benefit_clear_legal_advice",
        "representative_office_benefit_fast_document_support",
        "representative_office_benefit_save_time_cost",
        "representative_office_benefit_reduce_legal_risk",
      ],
    },

    lastPara: [
      "representative_office_conclusion_expand_network",
      "representative_office_conclusion_pgu_support",
    ],
  },
  {
    id: "dang-ky-dia-diem-kinh-doanh",
    label: "business_location_register_label",
    tagline: "business_location_tagline",
    img: thay_doi_dia_chi,
    color: "#A8171C",

    descriptions: [
      "business_location_description_1",
      "business_location_description_2",
    ],

    explains: [
      {
        name: "business_location_section_1_title",
        description: [
          "business_location_section_1_description_1",
          "business_location_section_1_description_2",
        ],
        scopes: [
          {
            name: "business_location_role_title",
            items: [
              "business_location_role_item_1",
              "business_location_role_item_2",
              "business_location_role_item_3",
            ],
          },
        ],
      },

      {
        name: "business_location_section_2_title",
        description: [],
        scopes: [
          {
            name: "business_location_prepare_title",
            items: [
              "business_location_prepare_item_1",
              "business_location_prepare_item_2",
              "business_location_prepare_item_3",
            ],
          },
          {
            name: "business_location_after_certificate_title",
            items: [
              "business_location_after_certificate_item_1",
              "business_location_after_certificate_item_2",
            ],
          },
        ],
      },

      {
        name: "business_location_service_scope_title",
        description: [],
        scopes: [
          {
            name: "business_location_service_scope_support_title",
            items: [
              "business_location_service_item_1",
              "business_location_service_item_2",
              "business_location_service_item_3",
              "business_location_service_item_4",
              "business_location_service_item_5",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "business_location_benefit_title",
      items: [
        "business_location_benefit_item_1",
        "business_location_benefit_item_2",
        "business_location_benefit_item_3",
        "business_location_benefit_item_4",
      ],
    },

    lastPara: [
      "business_location_last_paragraph_1",
      "business_location_last_paragraph_2",
    ],
  },
  {
    id: "cap-nhat-thong-tin-doanh-nghiep",
    label: "update_enterprise_information",
    tagline: "enterprise",
    img: cap_nhat_thong_tin,
    color: "#A8171C",

    descriptions: [
      "enterprise_update_intro_1",
      "enterprise_update_intro_2",
      "enterprise_update_intro_3",
    ],

    explains: [
      {
        name: "section_update_enterprise_information",
        description: [
          "enterprise_update_definition",
          "enterprise_update_definition_explain",
        ],
        scopes: [
          {
            name: "common_update_cases",
            items: [
              "update_case_personal_information",
              "update_case_company_address",
              "update_case_contact_information",
            ],
          },
        ],
      },

      {
        name: "section_scope_of_service",
        description: [],
        scopes: [
          {
            name: "pgu_support_scope",
            items: [
              "service_consulting_regulation",
              "service_consulting_solution",
              "service_prepare_documents",
              "service_submit_application",
              "service_follow_application",
              "service_post_support",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "section_service_benefits",
      items: [
        "benefit_save_time_cost",
        "benefit_correct_document",
        "benefit_reduce_legal_risk",
        "benefit_long_term_support",
      ],
    },

    lastPara: [
      "enterprise_update_conclusion_1",
      "enterprise_update_conclusion_2",
    ],
  },
  {
    id: "doi-ten-doanh-nghiep",
    label: "change_enterprise_name",
    tagline: "enterprise",
    img: doi_ten_doanh_nghiep,
    color: "#A8171C",

    descriptions: [
      "change_enterprise_name_intro_1",
      "change_enterprise_name_intro_2",
      "change_enterprise_name_intro_3",
    ],

    explains: [
      {
        name: "section_change_enterprise_name",
        description: ["enterprise_name_change_definition"],
        scopes: [
          {
            name: "enterprise_name_structure",
            items: [
              "enterprise_name_component_type",
              "enterprise_name_component_proper_name",
            ],
          },
        ],
      },

      {
        name: "section_change_name_notes",
        description: ["change_name_note_intro"],
        scopes: [
          {
            name: "section_change_name_important_notes",
            items: [
              "change_name_note_unique",
              "change_name_note_state_name",
              "change_name_note_update_documents",
              "change_name_note_trademark",
            ],
          },
        ],
      },

      {
        name: "change_enterprise_section_scope_of_service",
        description: [],
        scopes: [
          {
            name: "change_enterprise_pgu_support_scope",
            items: [
              "service_name_search_consulting",
              "service_prepare_name_change_documents",
              "service_submit_and_receive_results",
              "service_new_seal_and_update_documents",
              "service_update_related_information",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "change_enterprise_section_service_benefits",
      items: [
        "benefit_clear_legal_consulting",
        "benefit_correct_documents",
        "change_enterprise_benefit_save_time_cost",
        "benefit_full_service_support",
        "benefit_legal_compliance",
      ],
    },

    lastPara: ["change_name_conclusion_1", "change_name_conclusion_2"],
  },
  {
    id: "thay-doi-dia-chi-doanh-nghiep",
    label: "change_enterprise_address",
    tagline: "enterprise",
    img: thay_doi_dia_chi,
    color: "#A8171C",

    descriptions: [
      "change_enterprise_address_intro_1",
      "change_enterprise_address_intro_2",
    ],

    explains: [
      {
        name: "section_change_enterprise_address",
        description: ["enterprise_address_change_definition"],
        scopes: [
          {
            name: "enterprise_address_change_cases",
            items: [
              "enterprise_address_change_same_ward",
              "enterprise_address_change_other_ward",
              "enterprise_address_change_other_province",
            ],
          },
          {
            name: "enterprise_address_change_note_title",
            items: ["enterprise_address_change_note_admin_boundary"],
          },
        ],
      },

      {
        name: "change_enterprise_address_section_scope_of_service",
        description: [],
        scopes: [
          {
            name: "change_enterprise_address_pgu_support_scope",
            items: [
              "service_consulting_change_address",
              "service_tax_finalization_procedure",
              "service_prepare_documents_and_submit",
              "service_new_seal_address",
              "service_update_digital_signature_invoice",
              "service_update_contracts_and_authorities",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "change_enterprise_address_section_service_benefits",
      items: [
        "benefit_accurate_legal_consulting",
        "benefit_fast_correct_documents",
        "change_enterprise_address_benefit_save_time_cost",
        "benefit_reduce_legal_risks",
        "benefit_full_support_after_change",
      ],
    },

    lastPara: ["change_address_conclusion_1", "change_address_conclusion_2"],
  },
  {
    id: "tang-von-dieu-le",
    label: "increase_charter_capital",
    tagline: "Doanh nghiệp",
    img: tang_von_dieu_le,
    color: "#A8171C",

    descriptions: ["increase_charter_capital_intro_1"],

    explains: [
      {
        name: "section_increase_charter_capital",
        description: ["charter_capital_definition", "charter_capital_recorded"],
        scopes: [
          {
            name: "charter_capital_increase_methods",
            items: [
              "charter_capital_increase_existing_members",
              "charter_capital_increase_new_members",
              "charter_capital_increase_convert_profit",
            ],
          },
        ],
      },

      {
        name: "increase_charter_section_scope_of_service",
        description: [],
        scopes: [
          {
            name: "increase_charter_pgu_support_scope",
            items: [
              "service_consult_capital_increase_method",
              "service_prepare_capital_increase_documents",
              "service_support_related_procedures",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "increase_charter_section_service_benefits",
      items: [
        "benefit_in_depth_legal_consulting",
        "benefit_fast_procedure",
        "benefit_complete_documents",
        "increase_charter_benefit_reduce_legal_risk",
        "increase_charter_benefit_save_time_cost",
      ],
    },

    lastPara: [
      "increase_charter_capital_conclusion_1",
      "increase_charter_capital_conclusion_2",
    ],
  },
  {
    id: "giam-von-dieu-le",
    label: "charter_capital_reduction_label",
    tagline: "enterprise",
    img: giam_von_dieu_le,
    color: "#A8171C",

    descriptions: ["charter_capital_reduction_intro"],

    explains: [
      {
        name: "section_charter_capital_reduction_title",
        description: ["charter_capital_reduction_definition"],
        scopes: [
          {
            name: "charter_capital_reduction_methods_title",
            items: [
              "charter_capital_reduction_method_partial_refund",
              "charter_capital_reduction_method_unpaid_capital",
              "charter_capital_reduction_method_share_buyback",
              "charter_capital_reduction_method_redeemable_share_refund",
            ],
          },
        ],
      },

      {
        name: "section_service_scope_title",
        description: [],
        scopes: [
          {
            name: "pgu_support_scope_title",
            items: [
              "service_consult_charter_capital_reduction",
              "service_prepare_legal_documents",
              "service_represent_enterprise_authorities",
              "service_post_reduction_procedures",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "section_service_benefits_title",
      items: [
        "charter_capital_reduction_benefit_in_depth_legal_consulting",
        "benefit_fast_and_compliant_procedure",
        "benefit_complete_and_accurate_documents",
        "benefit_minimize_legal_risk",
        "benefit_save_time_and_cost",
      ],
    },

    lastPara: [
      "charter_capital_reduction_conclusion_1",
      "charter_capital_reduction_conclusion_2",
    ],
  },
  {
    id: "chuyen-nhuong-von",
    label: "capital_transfer_label",
    tagline: "enterprise",
    img: chuyen_nhuong_von,
    color: "#A8171C",

    descriptions: ["capital_transfer_description_1"],

    explains: [
      {
        name: "capital_transfer_section_what_is_title",
        description: ["capital_transfer_section_what_is_desc_1"],
      },

      {
        name: "capital_transfer_section_conditions_title",
        description: [],
        scopes: [
          {
            name: "capital_transfer_condition_single_member_title",
            items: ["capital_transfer_condition_single_member_desc_1"],
          },
          {
            name: "capital_transfer_condition_multi_member_title",
            items: [
              "capital_transfer_condition_multi_member_desc_1",
              "capital_transfer_condition_multi_member_desc_2",
            ],
          },
          {
            name: "capital_transfer_condition_joint_stock_title",
            items: [
              "capital_transfer_condition_joint_stock_desc_1",
              "capital_transfer_condition_joint_stock_desc_2",
            ],
          },
        ],
      },

      {
        name: "capital_transfer_scope_title",
        description: [
          "capital_transfer_scope_review",
          "capital_transfer_scope_consulting",
          "capital_transfer_scope_documents",
          "capital_transfer_scope_representative",
          "capital_transfer_scope_post_support",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "capital_transfer_benefits_title",
      items: [
        "capital_transfer_benefit_1",
        "capital_transfer_benefit_2",
        "capital_transfer_benefit_3",
        "capital_transfer_benefit_4",
        "capital_transfer_benefit_5",
        "capital_transfer_benefit_6",
      ],
    },

    lastPara: ["capital_transfer_last_para_1", "capital_transfer_last_para_2"],
  },
  {
    id: "thay-doi-dai-dien-phap-luat",
    label: "change_legal_representative_label",
    tagline: "enterprise",
    img: thay_doi_dai_dien_theo_pl,
    color: "#A8171C",

    descriptions: ["change_legal_representative_description_1"],

    explains: [
      {
        name: "change_legal_representative_section_definition_title",
        description: [
          "change_legal_representative_definition_1",
          "change_legal_representative_definition_2",
        ],
      },

      {
        name: "change_legal_representative_section_scope_title",
        description: [
          "change_legal_representative_scope_consulting",
          "change_legal_representative_scope_documents",
          "change_legal_representative_scope_representative",
          "change_legal_representative_scope_result_delivery",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "change_legal_representative_benefits_title",
      items: [
        "change_legal_representative_benefit_1",
        "change_legal_representative_benefit_2",
        "change_legal_representative_benefit_3",
        "change_legal_representative_benefit_4",
      ],
    },

    lastPara: [
      "change_legal_representative_last_para_1",
      "change_legal_representative_last_para_2",
    ],
  },
  {
    id: "thay-doi-loai-hinh-doanh-nghiep",
    label: "change_enterprise_type_label",
    tagline: "enterprise",
    img: thay_doi_loai_hinh_doanh_nghiep,
    color: "#A8171C",

    descriptions: ["change_enterprise_type_description_1"],

    explains: [
      {
        name: "change_enterprise_type_section_definition_title",
        intros: [
          "change_enterprise_type_definition_1",
          "change_enterprise_type_definition_intro",
        ],
        description: [
          "change_enterprise_type_form_1",
          "change_enterprise_type_form_2",
          "change_enterprise_type_form_3",
          "change_enterprise_type_form_4",
          "change_enterprise_type_form_5",
        ],
      },

      {
        name: "change_enterprise_type_section_scope_title",
        description: [
          "change_enterprise_type_scope_legal_consulting",
          "change_enterprise_type_scope_documents",
          "change_enterprise_type_scope_financial_guidance",
          "change_enterprise_type_scope_government_procedure",
          "change_enterprise_type_scope_result_delivery",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "change_enterprise_type_benefits_title",
      items: [
        "change_enterprise_type_benefit_1",
        "change_enterprise_type_benefit_2",
        "change_enterprise_type_benefit_3",
        "change_enterprise_type_benefit_4",
        "change_enterprise_type_benefit_5",
        "change_enterprise_type_benefit_6",
      ],
    },

    lastPara: [
      "change_enterprise_type_last_para_1",
      "change_enterprise_type_last_para_2",
    ],
  },
  {
    id: "thay-doi-nganh-nghe-kinh-doanh",
    label: "change_business_lines_label",
    tagline: "enterprise",
    img: thay_doi_nganh_nghe,
    color: "#A8171C",

    descriptions: ["change_business_lines_description_1"],

    explains: [
      {
        name: "change_business_lines_scope_definition_title",
        description: ["change_business_lines_section_what_is_description_1"],
        scopes: [
          {
            name: "change_business_lines_scope_definition_title",
            items: [
              "change_business_lines_scope_definition_item_1",
              "change_business_lines_scope_definition_item_2",
              "change_business_lines_scope_definition_item_3",
            ],
          },
          {
            name: "change_business_lines_notes_title",
            items: [
              "change_business_lines_notes_item_1",
              "change_business_lines_notes_item_2",
              "change_business_lines_notes_item_3",
              "change_business_lines_notes_item_4",
              "change_business_lines_notes_item_5",
              "change_business_lines_notes_item_6",
            ],
          },
        ],
      },

      {
        name: "change_business_lines_services_title",
        description: [
          "change_business_lines_service_legal_consulting",
          "change_business_lines_service_document_preparation",
          "change_business_lines_service_authority_procedure",
          "change_business_lines_service_result_delivery",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "change_business_lines_benefits_title",
      items: [
        "change_business_lines_benefit_time_efficiency",
        "change_business_lines_benefit_full_service",
        "change_business_lines_benefit_accuracy",
        "change_business_lines_benefit_risk_reduction",
        "change_business_lines_benefit_confidentiality",
      ],
    },

    lastPara: [
      "change_business_lines_final_1",
      "change_business_lines_final_2",
    ],
  },
  {
    id: "giai-the-doanh-nghiep",
    label: "enterprise_dissolution",
    tagline: "enterprise",
    img: giai_the_cong_ty,
    color: "#A8171C",

    descriptions: [
      "enterprise_dissolution_description_1",
      "enterprise_dissolution_description_2",
    ],

    explains: [
      {
        name: "enterprise_dissolution_explain_title_1",
        description: ["enterprise_dissolution_explain_description_1"],
        scopes: [
          {
            name: "enterprise_dissolution_condition_title",
            items: [
              "enterprise_dissolution_condition_1",
              "enterprise_dissolution_condition_2",
              "enterprise_dissolution_condition_3",
            ],
          },
        ],
      },

      {
        name: "enterprise_dissolution_case_title",
        description: [
          "enterprise_dissolution_case_1",
          "enterprise_dissolution_case_2",
          "enterprise_dissolution_case_3",
          "enterprise_dissolution_case_4",
        ],
      },

      {
        name: "enterprise_dissolution_service_scope_title",
        description: [
          "enterprise_dissolution_service_1",
          "enterprise_dissolution_service_2",
          "enterprise_dissolution_service_3",
          "enterprise_dissolution_service_4",
          "enterprise_dissolution_service_5",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "enterprise_dissolution_benefit_title",
      items: [
        "enterprise_dissolution_benefit_1",
        "enterprise_dissolution_benefit_2",
        "enterprise_dissolution_benefit_3",
        "enterprise_dissolution_benefit_4",
        "enterprise_dissolution_benefit_5",
      ],
    },

    lastPara: ["enterprise_dissolution_last_paragraph"],
  },
  {
    id: "tam-ngung-hoat-dong",
    label: "business_suspension",
    tagline: "Enterprise",
    img: tam_ngung_hoat_dong,
    color: "#A8171C",

    descriptions: [
      "business_suspension_description_1",
      "business_suspension_description_2",
    ],

    explains: [
      {
        name: "business_suspension_definition_title",
        description: ["business_suspension_definition_description"],
        scopes: [
          {
            name: "business_suspension_period_title",
            items: [
              "business_suspension_period_item_1",
              "business_suspension_period_item_2",
              "business_suspension_period_item_3",
            ],
          },
        ],
      },

      {
        name: "business_suspension_cases_title",
        description: [
          "business_suspension_case_1",
          "business_suspension_case_2",
        ],
      },

      {
        name: "business_suspension_service_scope_title",
        description: [
          "business_suspension_service_1",
          "business_suspension_service_2",
          "business_suspension_service_3",
          "business_suspension_service_4",
          "business_suspension_service_5",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "business_suspension_benefits_title",
      items: [
        "business_suspension_benefit_1",
        "business_suspension_benefit_2",
        "business_suspension_benefit_3",
        "business_suspension_benefit_4",
        "business_suspension_benefit_5",
      ],
    },

    lastPara: ["business_suspension_last_paragraph"],
  },
  {
    id: "cham-dut-chi-nhanh",
    label: "branch_termination",
    tagline: "Enterprise",
    img: cham_dut_van_phong,
    color: "#A8171C",

    descriptions: [
      "branch_termination_description_1",
      "branch_termination_description_2",
    ],

    explains: [
      {
        name: "branch_termination_definition_title",
        description: [
          "branch_termination_definition_description_1",
          "branch_termination_definition_description_2",
        ],
      },

      {
        name: "branch_termination_cases_title",
        description: [
          "branch_termination_case_1",
          "branch_termination_case_2",
          "branch_termination_case_3",
        ],
      },

      {
        name: "branch_termination_service_scope_title",
        description: [
          "branch_termination_service_1",
          "branch_termination_service_2",
          "branch_termination_service_3",
          "branch_termination_service_4",
          "branch_termination_service_5",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "branch_termination_benefits_title",
      intros: ["branch_termination_benefits_intro"],
      items: [
        "branch_termination_benefit_1",
        "branch_termination_benefit_2",
        "branch_termination_benefit_3",
        "branch_termination_benefit_4",
        "branch_termination_benefit_5",
      ],
    },

    lastPara: ["branch_termination_last_paragraph"],
  },
  {
    id: "giay-phep-moi-truong",
    label: "environmental_permit_label",
    tagline: "environmental_permit_tagline",
    img: giay_phep_moi_truong,
    color: "#A8171C",

    descriptions: [
      "environmental_permit_desc_1",
      "environmental_permit_desc_2",
    ],

    explains: [
      {
        name: "environmental_permit_definition_title",
        description: ["environmental_permit_definition_content"],
      },

      {
        name: "environmental_permit_scope_title",
        description: ["environmental_permit_scope_intro"],
        scopes: [
          {
            name: "project_preliminary_assessment_title",
            items: [
              "project_preliminary_assessment_item_1",
              "project_preliminary_assessment_item_2",
            ],
          },
          {
            name: "legal_consulting_dossier_title",
            items: [
              "legal_consulting_dossier_item_1",
              "legal_consulting_dossier_item_2",
            ],
          },
          {
            name: "technical_environmental_reports_title",
            items: [
              "technical_environmental_reports_item_1",
              "technical_environmental_reports_item_2",
              "technical_environmental_reports_item_3",
            ],
          },
          {
            name: "authority_submission_tracking_title",
            items: [
              "authority_submission_tracking_item_1",
              "authority_submission_tracking_item_2",
            ],
          },
          {
            name: "environmental_license_delivery_title",
            items: [
              "environmental_license_delivery_item_1",
              "environmental_license_delivery_item_2",
            ],
          },
          {
            name: "post_license_legal_support_title",
            items: [
              "post_license_legal_support_item_1",
              "post_license_legal_support_item_2",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "environmental_permit_why_choose_pgu_title",
      items: [
        "why_choose_pgu_intro",
        "save_time_effort",
        "experienced_legal_team",
        "post_service_support",
        "transparent_cost",
      ],
    },

    lastPara: ["environmental_permit_contact"],
  },
  {
    id: "giay-phep-hoa-chat",
    label: "chemical_license_label",
    tagline: "chemical_license_tagline",
    img: hoa_chat,
    color: "#A8171C",

    descriptions: ["chemical_license_desc_1", "chemical_license_desc_2"],

    explains: [
      {
        name: "chemical_business_license_definition_title",
        description: ["chemical_business_license_definition_content"],
      },
      {
        name: "chemical_license_types_title",
        description: [
          "chemical_license_type_certificate",
          "chemical_license_type_restricted",
          "chemical_license_type_import_declaration",
        ],
      },
      {
        name: "chemical_license_service_scope_title",
        description: [],
        scopes: [
          {
            name: "chemical_preliminary_consulting_title",
            items: [
              "chemical_preliminary_consulting_item_1",
              "chemical_preliminary_consulting_item_2",
            ],
          },
          {
            name: "chemical_dossier_preparation_title",
            items: [
              "chemical_dossier_preparation_item_1",
              "chemical_dossier_preparation_item_2",
              "chemical_dossier_preparation_item_3",
            ],
          },
          {
            name: "chemical_submission_authority_title",
            items: [
              "chemical_submission_authority_item_1",
              "chemical_submission_authority_item_2",
            ],
          },
          {
            name: "chemical_license_delivery_title",
            items: [
              "chemical_license_delivery_item_1",
              "chemical_license_delivery_item_2",
            ],
          },
          {
            name: "chemical_post_license_support_title",
            items: [
              "chemical_post_license_support_item_1",
              "chemical_post_license_support_item_2",
            ],
          },
        ],
      },
    ],

    processes: [
      {
        title: "chemical_process_title",
        steps: [
          {
            num: "01",
            title: "chemical_process_step_1_title",
            desc: "chemical_process_step_1_desc",
          },
          {
            num: "02",
            title: "chemical_process_step_2_title",
            desc: "chemical_process_step_2_desc",
          },

          {
            num: "03",
            title: "chemical_process_step_3_title",
            desc: "chemical_process_step_3_desc",
          },
          {
            num: "04",
            title: "chemical_process_step_4_title",
            desc: "chemical_process_step_4_desc",
          },
          {
            num: "05",
            title: "chemical_process_step_5_title",
            desc: "chemical_process_step_5_desc",
          },
        ],
      },
    ],

    reasons: {
      title: "chemical_service_benefits_title",
      items: [
        "chemical_service_benefit_item_1",
        "chemical_service_benefit_item_2",
        "chemical_service_benefit_item_3",
        "chemical_service_benefit_item_4",
        "chemical_service_benefit_item_5",
      ],
    },

    lastPara: ["chemical_license_final_paragraph"],
  },
  {
    id: "giay-phep-pccc",
    label: "fire_prevention_and_fighting_label",
    tagline: "fire_prevention_and_fighting_tagline",
    img: pccc,
    color: "#A8171C",

    descriptions: ["fire_prevention_intro_1", "fire_prevention_intro_2"],

    explains: [
      {
        name: "fire_prevention_definition_title",
        description: ["fire_prevention_definition_description"],
      },
      {
        name: "fire_prevention_entities_title",
        intros: ["fire_prevention_entities_intro"],
        description: [
          "fire_prevention_entities_item_1",
          "fire_prevention_entities_item_2",
          "fire_prevention_entities_item_3",
          "fire_prevention_entities_item_4",
          "fire_prevention_entities_item_5",
          "fire_prevention_entities_item_6",
        ],
        lastIntro: ["fire_prevention_entities_last"],
      },
      {
        name: "fire_prevention_scope_title",
        description: [],
        scopes: [
          {
            name: "fire_prevention_scope_consultation_title",
            items: ["fire_prevention_scope_consultation_item"],
          },
          {
            name: "fire_prevention_scope_guidance_title",
            items: ["fire_prevention_scope_guidance_item"],
          },
          {
            name: "fire_prevention_scope_representation_title",
            items: ["fire_prevention_scope_representation_item"],
          },
          {
            name: "fire_prevention_scope_monitoring_title",
            items: ["fire_prevention_scope_monitoring_item"],
          },
          {
            name: "fire_prevention_scope_handover_title",
            items: ["fire_prevention_scope_handover_item"],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "fire_prevention_benefits_title",
      intros: [
        "fire_prevention_benefits_intro_1",
        "fire_prevention_benefits_intro_2",
      ],
      items: [
        "fire_prevention_benefits_item_1",
        "fire_prevention_benefits_item_2",
        "fire_prevention_benefits_item_3",
        "fire_prevention_benefits_item_4",
      ],
    },

    lastPara: ["fire_prevention_last_paragraph"],
  },
  {
    id: "hoan-cong-nha-xuong",
    label: "factory_completion_label",
    tagline: "factory_completion_tagline",
    img: hoan_cong_nha_xuong,
    color: "#A8171C",

    descriptions: ["factory_completion_intro_1", "factory_completion_intro_2"],

    explains: [
      {
        name: "factory_completion_definition_title",
        description: [
          "factory_completion_definition_description_1",
          "factory_completion_definition_description_2",
        ],
      },
      {
        name: "factory_completion_scope_title",
        description: [],
        scopes: [
          {
            name: "factory_completion_scope_initial_consultation_title",
            items: [
              "factory_completion_scope_initial_consultation_item_1",
              "factory_completion_scope_initial_consultation_item_2",
            ],
          },
          {
            name: "factory_completion_scope_site_survey_title",
            items: [
              "factory_completion_scope_site_survey_item_1",
              "factory_completion_scope_site_survey_item_2",
            ],
          },
          {
            name: "factory_completion_scope_document_preparation_title",
            items: [
              "factory_completion_scope_document_preparation_item_1",
              "factory_completion_scope_document_preparation_item_2",
              "factory_completion_scope_document_preparation_item_3",
              "factory_completion_scope_document_preparation_item_4",
              "factory_completion_scope_document_preparation_item_5",
              "factory_completion_scope_document_preparation_item_6",
            ],
          },
          {
            name: "factory_completion_scope_authority_representation_title",
            items: [
              "factory_completion_scope_authority_representation_item_1",
              "factory_completion_scope_authority_representation_item_2",
              "factory_completion_scope_authority_representation_item_3",
            ],
          },
          {
            name: "factory_completion_scope_result_delivery_title",
            items: [
              "factory_completion_scope_result_delivery_item_1",
              "factory_completion_scope_result_delivery_item_2",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "factory_completion_reasons_title",
      intros: [
        "factory_completion_reasons_intro_1",
        "factory_completion_reasons_intro_2",
      ],
      items: [
        "factory_completion_reasons_item_1",
        "factory_completion_reasons_item_2",
        "factory_completion_reasons_item_3",
        "factory_completion_reasons_item_4",
        "factory_completion_reasons_item_5",
      ],
    },

    lastPara: ["factory_completion_last_paragraph"],
  },
  {
    id: "giay-phep-lao-dong",
    label: "work_permit_label",
    tagline: "work_permit_tagline",
    img: lao_dong,
    color: "#A8171C",

    descriptions: ["work_permit_description_1", "work_permit_description_2"],

    explains: [
      {
        name: "work_permit_section_what_is_title",
        description: ["work_permit_section_what_is_description_1"],
      },
      {
        name: "work_permit_section_scope_title",
        description: [],
        scopes: [
          {
            name: "work_permit_scope_legal_consulting_title",
            items: [
              "work_permit_scope_legal_consulting_item_1",
              "work_permit_scope_legal_consulting_item_2",
              "work_permit_scope_legal_consulting_item_3",
            ],
          },
          {
            name: "work_permit_scope_prepare_documents_title",
            items: [
              "work_permit_scope_prepare_documents_item_1",
              "work_permit_scope_prepare_documents_item_2",
              "work_permit_scope_prepare_documents_item_3",
            ],
          },
          {
            name: "work_permit_scope_administrative_representation_title",
            items: [
              "work_permit_scope_administrative_representation_item_1",
              "work_permit_scope_administrative_representation_item_2",
              "work_permit_scope_administrative_representation_item_3",
            ],
          },
          {
            name: "work_permit_scope_result_delivery_title",
            items: [
              "work_permit_scope_result_delivery_item_1",
              "work_permit_scope_result_delivery_item_2",
              "work_permit_scope_result_delivery_item_3",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "work_permit_reasons_title",
      items: [
        "work_permit_reason_item_1",
        "work_permit_reason_item_2",
        "work_permit_reason_item_3",
        "work_permit_reason_item_4",
        "work_permit_reason_item_5",
      ],
    },

    lastPara: ["work_permit_last_paragraph"],
  },
  {
    id: "giay-an-ninh-trat-tu",
    label: "security_order_license_label",
    tagline: "security_order_license_tagline",
    img: anh_ninh_trat_tu,
    color: "#A8171C",

    descriptions: [
      "security_order_intro_1",
      "security_order_intro_2",
      "security_order_intro_3",
      "security_order_intro_4",
    ],

    explains: [
      {
        name: "security_order_section_1_title",
        description: ["security_order_definition"],
      },
      {
        name: "security_order_section_2_title",
        description: [
          "security_order_entity_1",
          "security_order_entity_2",
          "security_order_entity_3",
          "security_order_entity_4",
          "security_order_entity_5",
          "security_order_entity_6",
        ],
      },
      {
        name: "security_order_section_3_title",
        description: [],
        scopes: [
          {
            name: "security_order_scope_1_title",
            items: [
              "security_order_scope_1_item_1",
              "security_order_scope_1_item_2",
            ],
          },
          {
            name: "security_order_scope_2_title",
            items: [
              "security_order_scope_2_item_1",
              "security_order_scope_2_item_2",
            ],
          },
          {
            name: "security_order_scope_3_title",
            items: [
              "security_order_scope_3_item_1",
              "security_order_scope_3_item_2",
              "security_order_scope_3_item_3",
            ],
          },
          {
            name: "security_order_scope_4_title",
            items: [
              "security_order_scope_4_item_1",
              "security_order_scope_4_item_2",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "security_order_section_4_title",
      items: [
        "security_order_benefit_1",
        "security_order_benefit_2",
        "security_order_benefit_3",
        "security_order_benefit_4",
        "security_order_benefit_5",
      ],
    },

    lastPara: ["security_order_last_paragraph"],
  },
  {
    id: "visa-the-tam-tru",
    label: "visa_temporary_residence_label",
    tagline: "visa_temporary_residence_tagline",
    img: visa,
    color: "#A8171C",

    descriptions: [
      "visa_intro_1",
      "visa_intro_2",
      "visa_intro_3",
      "visa_intro_4",
    ],

    explains: [
      {
        name: "visa_section_1_title",
        description: ["visa_definition_visa", "visa_definition_trc"],
      },
      {
        name: "visa_section_2_title",
        description: ["visa_services_intro"],
        scopes: [
          {
            name: "visa_section_2_scope_1_title",
            items: [
              "visa_service_1",
              "visa_service_2",
              "visa_service_3",
              "visa_service_4",
            ],
          },
          {
            name: "visa_section_2_scope_2_title",
            items: [
              "visa_service_5",
              "visa_service_6",
              "visa_service_7",
              "visa_service_8",
            ],
          },
          {
            name: "visa_section_2_scope_3_title",
            items: ["visa_service_9", "visa_service_10"],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "visa_section_3_title",
      items: [
        "visa_reason_1",
        "visa_reason_2",
        "visa_reason_3",
        "visa_reason_4",
      ],
    },

    lastPara: ["visa_last_paragraph"],
  },
  {
    id: "ho-kinh-doanh",
    label: "household_business_label",
    tagline: "household_business_tagline",
    img: ho_kinh_doanh,
    color: "#A8171C",

    descriptions: [
      "household_business_intro_1",
      "household_business_intro_2",
      "household_business_intro_3",
      "household_business_intro_4",
    ],

    explains: [
      {
        name: "household_business_section_1_title",
        description: ["household_business_definition"],
      },
      {
        name: "household_business_section_2_title",
        description: [],
        scopes: [
          {
            name: "household_business_scope_1_title",
            items: [
              "household_business_scope_1_item_1",
              "household_business_scope_1_item_2",
            ],
          },
          {
            name: "household_business_scope_2_title",
            items: [
              "household_business_scope_2_item_1",
              "household_business_scope_2_item_2",
            ],
          },
          {
            name: "household_business_scope_3_title",
            items: [
              "household_business_scope_3_item_1",
              "household_business_scope_3_item_2",
              "household_business_scope_3_item_3",
            ],
          },
          {
            name: "household_business_scope_4_title",
            items: [
              "household_business_scope_4_item_1",
              "household_business_scope_4_item_2",
              "household_business_scope_4_item_3",
            ],
          },
          {
            name: "household_business_scope_5_title",
            items: [
              "household_business_scope_5_item_1",
              "household_business_scope_5_item_2",
              "household_business_scope_5_item_3",
            ],
          },
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "household_business_section_3_title",
      items: [
        "household_business_reason_1",
        "household_business_reason_2",
        "household_business_reason_3",
        "household_business_reason_4",
        "household_business_reason_5",
      ],
    },

    lastPara: ["household_business_last_paragraph"],
  },
  {
    id: "giay-phep-kinh-doanh-ruou",
    label: "alcohol_business_license_label",
    tagline: "alcohol_business_license_tagline",
    img: kinh_doanh_ruou,
    color: "#A8171C",

    descriptions: [
      "alcohol_business_license_description_1",
      "alcohol_business_license_description_2",
    ],

    explains: [
      {
        name: "what_is_alcohol_business_license_title",
        description: ["what_is_alcohol_business_license_description"],
      },
      {
        name: "types_of_alcohol_business_license_title",
        description: [
          "alcohol_production_license_industrial",
          "alcohol_production_license_craft_for_business",
          "alcohol_production_license_craft_for_processing",
          "alcohol_distribution_license",
          "alcohol_wholesale_license",
          "alcohol_retail_license",
          "alcohol_on_premise_registration",
        ],
      },
      {
        name: "scope_of_service_title",
        description: [
          "alcohol_business_license_scope_1",
          "alcohol_business_license_scope_2",
          "alcohol_business_license_scope_3",
          "alcohol_business_license_scope_4",
          "alcohol_business_license_scope_5",
          "alcohol_business_license_scope_6",
          "alcohol_business_license_scope_7",
        ],
      },
    ],

    processes: [],

    reasons: {
      title: "alcohol_business_reasons_choose_pgu_title",
      items: [
        "alcohol_business_reasons_choose_pgu_1",
        "alcohol_business_reasons_choose_pgu_2",
        "alcohol_business_reasons_choose_pgu_3",
        "alcohol_business_reasons_choose_pgu_4",
        "alcohol_business_reasons_choose_pgu_5",
      ],
    },

    lastPara: ["alcohol_business_license_last_paragraph"],
  },
  {
    id: "nhap-khau-thiet-bi-vat-tu-y-te",
    label: "medical_equipment_import_label",
    tagline: "medical_equipment_import_tagline",
    img: vat_tu_y_te,
    color: "#A8171C",

    descriptions: [
      "medical_equipment_import_description_1",
      "medical_equipment_import_description_2",
    ],

    explains: [
      {
        name: "what_is_medical_device_title",
        intros: ["what_is_medical_device_intro"],
        description: [
          "medical_device_condition_1",
          "medical_device_condition_2",
        ],
      },
      {
        name: "medical_import_service_types_title",
        description: [
          "medical_import_service_type_1",
          "medical_import_service_type_2",
          "medical_import_service_type_3",
          "medical_import_service_type_4",
        ],
      },
      {
        name: "medical_import_service_scope_title",
        description: [
          "service_scope_receive_customer_information",
          "service_scope_consulting",
          "service_scope_implementation",
        ],
      },
    ],

    processes: [],

    lastPara: ["medical_import_last_paragraph"],
  },
];
