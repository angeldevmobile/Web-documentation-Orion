import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Search } from "lucide-react";
import { getModuleEntries } from "@/data/modules";
import { CodeBlock } from "@/components/docs/DocHelpers";

const Module = () => {
  const { name = "" } = useParams();
  const entries = useMemo(() => getModuleEntries(name), [name]);
  const [q, setQ] = useState("");

  const filtered = entries.filter((e) =>
    `${e.name} ${e.signature} ${e.description}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto max-w-3xl px-4 pt-28 pb-16">
        <Link
          to="/modules"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> All modules
        </Link>

        <h1 className="text-4xl font-bold font-mono text-foreground">{name}</h1>

        {entries.length === 0 ? (
          <p className="text-muted-foreground mt-6">
            No module named "{name}" was found.
          </p>
        ) : (
          <>
            <p className="text-muted-foreground mt-2">
              {entries.length} function{entries.length === 1 ? "" : "s"}. Import it with{" "}
              <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-primary text-sm">
                use "{name}"
              </code>
              .
            </p>

            <div className="relative mt-6 mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Filter functions..."
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div className="space-y-5">
              {filtered.map((e, i) => (
                <div
                  key={i}
                  id={e.name}
                  className="border border-border rounded-xl p-5 bg-card scroll-mt-24"
                >
                  <p className="font-mono text-primary font-semibold break-words">
                    {e.signature || e.qualified}
                  </p>
                  {e.description && (
                    <p className="text-foreground/80 text-sm mt-2 leading-relaxed">
                      {e.description}
                    </p>
                  )}
                  {e.example && e.example.trim() && <CodeBlock code={e.example} />}
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="text-muted-foreground">No functions match "{q}".</p>
              )}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Module;
