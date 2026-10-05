import { lazy, Suspense, useEffect, useRef, useState, type ComponentType } from "react";
import { Link, useLocation } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { ChevronLeft, ChevronRight, PencilLine } from "lucide-react";
import { DOCS, SECTIONS, loadDoc, type DocMeta } from "@/content/docs";
import { mdxComponents } from "@/components/docs/mdx";
import DocsShell from "@/components/docs/DocsShell";

const EDIT_BASE =
  "https://github.com/angeldevmobile/Web-documentation-Orion/edit/master/src/content/docs";

// Un componente lazy por página, creado una sola vez: si se recreara en cada
// render, React volvería a montar la página y perdería el scroll.
const lazyPages = new Map<string, ComponentType>();
function pageComponent(doc: DocMeta): ComponentType {
  let c = lazyPages.get(doc.path);
  if (!c) {
    c = lazy(loadDoc(doc));
    lazyPages.set(doc.path, c);
  }
  return c;
}

interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

export function OnThisPage({ headings, active, title = "On this page" }: { headings: Heading[]; active: string; title?: string }) {
  if (headings.length < 2) return null;
  return (
    <nav className="max-h-[calc(100vh-8rem)] space-y-2 overflow-y-auto text-[13px]" aria-label={title}>
      <p className="mb-3 font-semibold text-foreground">{title}</p>
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          className={`block transition-colors ${h.level === 3 ? "pl-3" : ""} ${
            active === h.id ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {h.text}
        </a>
      ))}
    </nav>
  );
}

/** Resalta en el índice el título que está a la vista. */
export function useActiveHeading(ids: string[]): string {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (ids.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

export default function DocsLayout({ doc }: { doc: DocMeta }) {
  const location = useLocation();
  const articleRef = useRef<HTMLElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const active = useActiveHeading(headings.map((h) => h.id));

  const Page = pageComponent(doc);
  const section = SECTIONS.find((s) => s.slug === doc.section);
  const index = DOCS.findIndex((d) => d.path === doc.path);
  const prev = index > 0 ? DOCS[index - 1] : undefined;
  const next = index < DOCS.length - 1 ? DOCS[index + 1] : undefined;

  // Al cargar la página: leer sus títulos para el índice, y llevar el scroll
  // arriba o al ancla de la URL.
  useEffect(() => {
    const article = articleRef.current;
    if (!article) return;
    const collect = () => {
      const found = Array.from(article.querySelectorAll<HTMLHeadingElement>("h2[id], h3[id]")).map(
        (h) => ({ id: h.id, text: h.textContent ?? "", level: (h.tagName === "H2" ? 2 : 3) as 2 | 3 }),
      );
      if (found.length === 0) return false;
      setHeadings(found);
      const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
      if (target) target.scrollIntoView();
      else window.scrollTo({ top: 0 });
      return true;
    };
    setHeadings([]);
    if (collect()) return;
    // La página llega por lazy: esperar a que el contenido aparezca.
    const mo = new MutationObserver(() => collect() && mo.disconnect());
    mo.observe(article, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, [doc.path, location.hash]);

  return (
    <DocsShell aside={<OnThisPage headings={headings} active={active} />}>
      <p className="mb-2 text-sm font-medium text-primary">{section?.title}</p>
      <article
        ref={articleRef}
        className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-h1:mb-4 prose-h1:text-4xl prose-h1:font-bold prose-h2:mt-12 prose-h2:border-b prose-h2:border-border prose-h2:pb-2 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:text-primary prose-code:before:content-none prose-code:after:content-none prose-th:text-left"
      >
        <h1>{doc.title}</h1>
        {doc.description && <p className="lead text-muted-foreground">{doc.description}</p>}
        <MDXProvider components={mdxComponents}>
          <Suspense fallback={<p className="text-muted-foreground">Loading…</p>}>
            <Page />
          </Suspense>
        </MDXProvider>
      </article>

      <a
        href={`${EDIT_BASE}/${doc.section}/${doc.slug}.mdx`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
      >
        <PencilLine className="h-4 w-4" /> Edit this page on GitHub
      </a>

      <div className="mt-8 grid gap-4 border-t border-border/50 pt-8 sm:grid-cols-2">
        {prev ? (
          <Link to={prev.path} className="group rounded-xl border border-border/60 p-4 transition-colors hover:border-primary/50">
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <ChevronLeft className="h-3.5 w-3.5" /> Previous
            </p>
            <p className="mt-1 font-semibold group-hover:text-primary">{prev.title}</p>
          </Link>
        ) : (
          <div />
        )}
        {next && (
          <Link to={next.path} className="group rounded-xl border border-border/60 p-4 text-right transition-colors hover:border-primary/50">
            <p className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
              Next <ChevronRight className="h-3.5 w-3.5" />
            </p>
            <p className="mt-1 font-semibold group-hover:text-primary">{next.title}</p>
          </Link>
        )}
      </div>
    </DocsShell>
  );
}
