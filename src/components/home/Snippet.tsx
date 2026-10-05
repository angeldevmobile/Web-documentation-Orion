import type { ComponentType } from "react";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "@/components/docs/mdx";

/**
 * Un ejemplo de `src/content/snippets/*.mdx` dentro de una ventana de editor.
 * El código llega ya coloreado por Shiki (vite.config.ts), como en los docs.
 */
export default function Snippet({ file, code: Code }: { file: string; code: ComponentType }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2 border-b border-border/70 bg-muted/40 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">{file}</span>
      </div>
      {/* El marco ya pone borde y fondo: el bloque de código va sin los suyos. */}
      <div className="text-left [&_.not-prose]:my-0 [&_pre]:rounded-none [&_pre]:border-0 [&_pre]:bg-transparent">
        <MDXProvider components={mdxComponents}>
          <Code />
        </MDXProvider>
      </div>
    </div>
  );
}
