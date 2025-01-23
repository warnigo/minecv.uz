import { en, ru, uz } from "@/shared/locales";
import { createI18n } from "vue-i18n";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: "en",
    locale: "en",
    messages: {
      en: en,
      ru: ru,
      uz: uz,
    },
  });

  vueApp.use(i18n);
});
