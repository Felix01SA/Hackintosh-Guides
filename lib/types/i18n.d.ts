import messages from "@/i18n/messages/en.json";
import { routing } from "@/i18n/routing";

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof messages;
    Locales: (typeof routing.locales)[number];
  }
}
