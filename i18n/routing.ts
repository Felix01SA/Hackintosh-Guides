import { defineRouting } from "next-intl/routing";
import { I18nConfig } from "fumadocs-core/i18n";
import { LocaleItem } from "fumadocs-ui/contexts/i18n";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "pt"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export const i18n: I18nConfig = {
  languages: [...routing.locales],
  defaultLanguage: routing.defaultLocale,
  hideLocale: "default-locale",
};

export const localeItems: LocaleItem[] = [
  {
    locale: "en",
    name: "English",
  },
  {
    locale: "pt",
    name: "Português",
  },
];
