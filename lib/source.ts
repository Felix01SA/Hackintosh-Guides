import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { i18n } from "@/i18n/routing";
import { createMDXSource } from "fumadocs-mdx";
import { icons } from "lucide-react";
import * as faIcons from "react-icons/fa";
import { createElement } from "react";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: "/guides",
  source: createMDXSource(docs, meta),
  i18n,
  icon(icon) {
    const allIcons = {
      ...icons,
      ...faIcons,
    };
    if (icon && icon in allIcons)
      return createElement(allIcons[icon as keyof typeof allIcons]);
  },
});
