import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import DocsShell from "@/components/docs/DocsShell";
import { listModules, CATEGORY_ORDER } from "@/data/modules";

const Modules = () => {
  const all = useMemo(() => listModules(), []);
  const [q, setQ] = useState("");

  const filtered = all.filter((m) => m.name.toLowerCase().includes(q.toLowerCase()));
  const byCategory = CATEGORY_ORDER.map((cat) => ({
    cat,
    modules: filtered.filter((m) => m.category === cat),
  })).filter((g) => g.modules.length > 0);
  const totalFns = all.reduce((sum, m) => sum + m.count, 0);

  return (
    <DocsShell>
      <p className="mb-2 text-sm font-medium text-primary">Reference</p>
      <h1 className="text-4xl font-bold">Module reference</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        {all.length} modules and {totalFns} functions, generated from the compiler's own
        registry. Every module is imported with <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-primary">use "name"</code>{" "}
        and ships inside the <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-primary">orion</code> executable.
      </p>

      <div className="relative mb-10 mt-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter modules..."
          className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <div className="space-y-8">
        {byCategory.map((g) => (
          <section key={g.cat}>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{g.cat}</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
              {g.modules.map((m) => (
                <Link
                  key={m.name}
                  to={`/modules/${m.name}`}
                  className="group flex items-baseline justify-between rounded-lg border border-border bg-card px-3 py-2.5 transition-colors hover:border-primary/50"
                >
                  <span className="font-mono text-sm font-semibold group-hover:text-primary">{m.name}</span>
                  <span className="text-xs text-muted-foreground">{m.count}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
        {byCategory.length === 0 && <p className="text-muted-foreground">No modules match "{q}".</p>}
      </div>
    </DocsShell>
  );
};

export default Modules;
