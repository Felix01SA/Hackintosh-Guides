import { i18n, localeItems, routing } from "@/i18n/routing";
import { RootProvider } from "fumadocs-ui/provider";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { JetBrains_Mono, Outfit } from "next/font/google";
import type { PropsWithChildren, ReactNode } from "react";
import { notFound } from "next/navigation";
import "../global.css";
import { getMessages } from "next-intl/server";
import { cn } from "@/lib/utils";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit-sans",
});

type Params = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Layout({
  children,
  params,
}: PropsWithChildren<Params>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          outfit.className,
          jetBrainsMono.className,
          "flex flex-col min-h-screen antialiased"
        )}
      >
        <NextIntlClientProvider>
          <RootProvider
            i18n={{
              locale,
              locales: localeItems,
              translations: messages.interface,
            }}
          >
            {children}
          </RootProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
