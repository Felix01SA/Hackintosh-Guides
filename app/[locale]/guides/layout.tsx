import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { PropsWithChildren, ReactNode } from "react";
import { baseOptions } from "@/app/[locale]/layout.config";
import { source } from "@/lib/source";

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

  return (
    <DocsLayout tree={source.pageTree[locale]} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
