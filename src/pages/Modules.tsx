import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto max-w-5xl px-4 pt-28 pb-16">
        <h1 className="text-4xl font-bold text-foreground">Module reference</h1>
        <p className="text-muted-foreground mt-2">
          {all.length} modules and {totalFns} functions, generated from the compiler's
          type information.
        </p>

        <div className="relative mt-6 mb-10 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter modules..."
            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>

        {byCategory.map((g) => (
          <section key={g.cat} className="mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              {g.cat}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {g.modules.map((m) => (
                <Link
                  key={m.name}
                  to={`/modules/${m.name}`}
                  className="group border border-border rounded-lg p-4 bg-card hover:border-primary/50 transition-colors"
                >
                  <p className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                    {m.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {m.count} function{m.count === 1 ? "" : "s"}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {byCategory.length === 0 && (
          <p className="text-muted-foreground">No modules match "{q}".</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Modules;
