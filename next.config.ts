import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withMDX = createMDX();
const withIntl = createNextIntlPlugin();

const config: NextConfig = {
  reactStrictMode: true,
};

export default withMDX(withIntl(config));
