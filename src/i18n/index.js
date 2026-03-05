import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import file ngôn ngữ
import vi from './locales/vi.json';
import en from './locales/en.json';
import ko from './locales/ko.json';
import zh from './locales/zh.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: vi },
      en: { translation: en },
      ko: { translation: ko },
      zh: { translation: zh },
    },
    lng: localStorage.getItem('lang') || 'vi',           // Ngôn ngữ mặc định
    fallbackLng: 'vi',   // Fallback nếu không tìm thấy key
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;