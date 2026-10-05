import type { ComponentType } from "react";
// Frontmatter de cada .mdx, leído del disco por el plugin de vite.config.ts.
import metas from "virtual:docs-meta";

/**
 * La documentación vive en archivos .mdx: `<sección>/<página>.mdx`. Cada página
 * declara en su frontmatter `title`, `description` y `order`; la barra lateral,
 * las URLs (/docs/<sección>/<página>) y anterior/siguiente salen de aquí.
 */
export const SECTIONS = [
  { slug: "getting-started", title: "Getting Started" },
  { slug: "language", title: "Language Reference" },
  { slug: "stdlib", title: "Standard Library" },
  { slug: "tools", title: "CLI & Editor" },
  { slug: "guides", title: "Guides" },
] as const;

export interface DocMeta {
  section: string;
  slug: string;
  title: string;
  description?: string;
  order: number;
  path: string;
}

const loaders = import.meta.glob<{ default: ComponentType }>("./**/*.mdx");

function parse(file: string): { section: string; slug: string } {
  const [, section, name] = file.match(/^\.\/([^/]+)\/(.+)\.mdx$/) ?? [];
  return { section, slug: name };
}

export const DOCS: DocMeta[] = Object.entries(metas)
  .map(([file, fm]) => {
    const { section, slug } = parse(file);
    return {
      section,
      slug,
      title: fm.title,
      description: fm.description,
      order: fm.order ?? 999,
      path: `/docs/${section}/${slug}`,
    };
  })
  .sort((a, b) => {
    const sa = SECTIONS.findIndex((s) => s.slug === a.section);
    const sb = SECTIONS.findIndex((s) => s.slug === b.section);
    return sa - sb || a.order - b.order;
  });

export function docsOf(section: string): DocMeta[] {
  return DOCS.filter((d) => d.section === section);
}

export function findDoc(section?: string, slug?: string): DocMeta | undefined {
  return DOCS.find((d) => d.section === section && d.slug === slug);
}

export function loadDoc(doc: DocMeta): () => Promise<{ default: ComponentType }> {
  return loaders[`./${doc.section}/${doc.slug}.mdx`];
}
