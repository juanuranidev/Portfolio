import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_es from "../util/translations/es/global.json";
import global_en from "../util/translations/en/global.json";

const resources = {
  es: {
    translation: global_es,
  },
  en: {
    translation: global_en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
