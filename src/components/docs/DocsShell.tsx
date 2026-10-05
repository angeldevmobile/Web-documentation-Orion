import { useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SECTIONS, docsOf } from "@/content/docs";

/** Enlaces fijos de la barra lateral que no son páginas .mdx. */
const REFERENCE = [{ title: "Module reference", to: "/modules" }];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-md px-3 py-1.5 text-[14px] transition-colors ${
    isActive ? "bg-primary/10 font-medium text-primary" : "text-foreground/70 hover:bg-muted/60 hover:text-foreground"
  }`;

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const group = (title: string, items: { title: string; to: string }[]) => (
    <div key={title}>
      <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
      <ul className="space-y-0.5">
        {items.map((it) => (
          <li key={it.to}>
            <NavLink to={it.to} onClick={onNavigate} className={linkClass}>
              {it.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="space-y-7 px-4 py-8" aria-label="Documentation">
      {SECTIONS.map((s) =>
        group(
          s.title,
          docsOf(s.slug).map((d) => ({ title: d.title, to: d.path })),
        ),
      )}
      {group("Reference", REFERENCE)}
    </nav>
  );
}

/**
 * Armazón de la documentación y de la referencia de módulos: barra superior,
 * barra lateral (fija en escritorio, desplegable en móvil), contenido y una
 * columna derecha opcional (`aside`) en pantallas anchas.
 */
export default function DocsShell({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex min-h-screen pt-16">
        <aside className="fixed bottom-0 left-0 top-16 hidden w-64 overflow-y-auto border-r border-border/60 bg-card/40 lg:block">
          <Sidebar />
        </aside>

        <button
          className="fixed bottom-6 right-6 z-50 rounded-full bg-primary p-3 text-primary-foreground shadow-lg lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        {mobileOpen && (
          <div className="fixed inset-0 z-40 overflow-y-auto bg-background/95 pt-16 lg:hidden">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        )}

        <main className="w-full lg:pl-64">
          <div className="mx-auto flex max-w-6xl gap-12 px-6 py-12 md:px-10">
            <div className="min-w-0 flex-1">{children}</div>
            {aside && <aside className="sticky top-24 hidden h-fit w-56 flex-shrink-0 xl:block">{aside}</aside>}
          </div>
        </main>
      </div>
      {/* La barra lateral es `fixed` y sale del flujo: el footer necesita el
          mismo desplazamiento que el contenido o queda tapado. */}
      <div className="lg:pl-64">
        <Footer />
      </div>
    </div>
  );
}
