import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MODULE_COUNT } from "@/lib/site";

// Por área, como en el README del lenguaje. `serve` no es un módulo sino una
// sentencia, por eso no está.
const AREAS: { title: string; modules: string[] }[] = [
  { title: "Web", modules: ["net", "router", "middleware", "ws", "sse", "session", "proto", "browser"] },
  { title: "Backend", modules: ["db", "auth", "cache", "mail", "validate"] },
  { title: "Data and science", modules: ["frame", "table", "csv", "excel", "excel_f", "stat", "serie", "matrix", "search"] },
  { title: "Files and system", modules: ["fs", "json", "zip", "process", "env", "config", "log", "term", "watch"] },
  { title: "Concurrency", modules: ["tarea", "cola", "chan", "state", "stream"] },
  { title: "Security", modules: ["crypto", "crypto2", "secret"] },
  { title: "AI", modules: ["llm", "embed", "vector", "ai", "vision", "insight"] },
  { title: "Cloud", modules: ["s3", "ssh", "docker"] },
  { title: "Documents and UI", modules: ["pdf", "template", "formato", "gui", "tui", "grafo"] },
  { title: "Utilities", modules: ["strings", "regex", "datetime", "random", "quantum", "cosmos", "timewarp"] },
];

const StdlibGrid = () => (
  <section id="stdlib" className="border-t border-border/60 px-4 py-24">
    <div className="container mx-auto max-w-6xl">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Batteries included</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {MODULE_COUNT} modules compiled into the executable. Import one with{" "}
          <code>use "name"</code>; there is no package to install and no version to pin.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {AREAS.map((a) => (
          <div key={a.title} className="rounded-xl border border-border bg-card p-5">
            <p className="mb-3 font-semibold">{a.title}</p>
            <div className="flex flex-wrap gap-1.5">
              {a.modules.map((m) => (
                <span key={m} className="rounded bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-foreground/80">
                  {m}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center">
        <Link to="/modules" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
          Browse every module and function <ArrowRight className="h-4 w-4" />
        </Link>
      </p>
    </div>
  </section>
);

export default StdlibGrid;
