import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Search } from "lucide-react";
import DocsShell from "@/components/docs/DocsShell";
import { OnThisPage, useActiveHeading } from "@/components/DocsLayout";
import { getModuleEntries, listModules } from "@/data/modules";

// Descripciones de relleno que genera el registro cuando la función no tiene
// comentario en el código: mejor no mostrar nada que repetir el nombre.
const PLACEHOLDER = /^Funci[oó]n del m[oó]dulo /i;

const fnId = (name: string) => `fn-${name}`;

const Module = () => {
  const { name = "" } = useParams();
  const entries = useMemo(() => getModuleEntries(name), [name]);
  const info = useMemo(() => listModules().find((m) => m.name === name), [name]);
  const [q, setQ] = useState("");

  const filtered = entries.filter((e) =>
    `${e.name} ${e.signature} ${e.description}`.toLowerCase().includes(q.toLowerCase()),
  );
  const ids = useMemo(() => filtered.map((e) => fnId(e.name)), [filtered]);
  const active = useActiveHeading(ids);

  const index = filtered.map((e) => ({ id: fnId(e.name), text: e.name, level: 2 as const }));

  return (
    <DocsShell aside={<OnThisPage headings={index} active={active} title="Functions" />}>
      <p className="mb-2 flex items-center gap-1 text-sm font-medium text-primary">
        <Link to="/modules" className="hover:underline">
          Module reference
        </Link>
        {info && (
          <>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">{info.category}</span>
          </>
        )}
      </p>
      <h1 className="font-mono text-4xl font-bold">{name}</h1>

      {entries.length === 0 ? (
        <p className="mt-6 text-muted-foreground">
          No module named "{name}" was found.{" "}
          <Link to="/modules" className="text-primary hover:underline">
            See every module
          </Link>
          .
        </p>
      ) : (
        <>
          <p className="mt-3 text-muted-foreground">
            {entries.length} function{entries.length === 1 ? "" : "s"}. Import it with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-primary">use "{name}"</code>.
          </p>

          <div className="relative mb-6 mt-6 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filter functions..."
              className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <div className="divide-y divide-border/70 border-y border-border/70">
            {filtered.map((e) => {
              const desc = e.description && !PLACEHOLDER.test(e.description) ? e.description : "";
              return (
                <div key={e.qualified} id={fnId(e.name)} className="scroll-mt-24 py-4">
                  <code className="break-words font-mono text-[14px] font-medium text-primary">
                    {e.signature || e.qualified}
                  </code>
                  {desc && <p className="mt-1 text-sm leading-relaxed text-foreground/75">{desc}</p>}
                  {e.example?.trim() && (
                    <details className="group mt-2">
                      <summary className="cursor-pointer select-none text-xs font-medium text-muted-foreground hover:text-primary">
                        Example
                      </summary>
                      <pre className="mt-2 overflow-x-auto rounded-lg border border-border bg-muted/50 p-3 font-mono text-[13px] leading-relaxed">
                        <code>{e.example.trim()}</code>
                      </pre>
                    </details>
                  )}
                </div>
              );
            })}
            {filtered.length === 0 && <p className="py-6 text-muted-foreground">No functions match "{q}".</p>}
          </div>
        </>
      )}
    </DocsShell>
  );
};

export default Module;
