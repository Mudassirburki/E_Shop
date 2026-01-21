import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import en from './locales/en.json';
import ur from './locales/ur.json';

const resources = {
  en: en,
  ur: ur,
};

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en', // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
        useSuspense: false
    }
  });

export default i18next;
