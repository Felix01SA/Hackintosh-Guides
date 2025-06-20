import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import {
  remarkExtendedTable,
  extendedTableHandlers,
} from "remark-extended-table";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const { docs, meta } = defineDocs({
  dir: "content/guides",
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    // MDX options
    remarkPlugins: (v) => [...v, remarkExtendedTable],
    remarkRehypeOptions: {
      handlers: {
        ...extendedTableHandlers,
      },
    },
    rehypeCodeOptions: {
      themes: {
        dark: "catppuccin-mocha",
        light: "catppuccin-latte",
      },
      inline: "tailing-curly-colon",
    },
  },
});
