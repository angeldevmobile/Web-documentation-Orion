declare module "virtual:docs-meta" {
  /** Frontmatter de cada página, por ruta `./<sección>/<página>.mdx`. */
  const metas: Record<string, { title: string; description?: string; order?: number }>;
  export default metas;
}

declare module "*.mdx" {
  import type { ComponentType } from "react";

  /** Frontmatter de cada página (lo exporta remark-mdx-frontmatter). */
  export const frontmatter: {
    title: string;
    description?: string;
    order?: number;
  };

  const MDXContent: ComponentType<{ components?: Record<string, unknown> }>;
  export default MDXContent;
}
