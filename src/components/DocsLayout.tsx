'use client';
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const NAV = [
  {
    group: "Getting Started",
    items: [
      { id: "what-is-orion",  label: "What is Orion" },
      { id: "installation",   label: "Installation" },
      { id: "quickstart",     label: "Quick Start" },
      { id: "repl",           label: "Interactive REPL" },
    ],
  },
  {
    group: "Language Reference",
    items: [
      { id: "variables",      label: "Variables & Types" },
      { id: "operators",      label: "Operators" },
      { id: "control-flow",   label: "Control Flow" },
      { id: "functions",      label: "Functions" },
      { id: "error-handling", label: "Error Handling" },
      { id: "modules",        label: "Module System" },
      { id: "shapes",         label: "Shapes (OOP)" },
      { id: "async",          label: "Async / Await" },
      { id: "type-system",    label: "Type System" },
      { id: "ai-primitives",  label: "AI Primitives" },
    ],
  },
  {
    group: "Standard Library",
    items: [
      { id: "stdlib-overview", label: "Overview" },
      { id: "lib-strings",     label: "strings" },
      { id: "lib-math",        label: "math" },
      { id: "lib-list",        label: "Lists" },
      { id: "lib-fs",          label: "fs" },
      { id: "lib-json",        label: "json" },
      { id: "lib-datetime",    label: "datetime" },
      { id: "lib-random",      label: "random" },
      { id: "lib-frame",       label: "frame" },
    ],
  },
  {
    group: "CLI Reference",
    items: [
      { id: "cli-run",        label: "Running Programs" },
      { id: "cli-tools",      label: "Development Tools" },
      { id: "cli-packages",   label: "Package Manager" },
    ],
  },
  {
    group: "Editor Support",
    items: [
      { id: "vscode-setup",   label: "VS Code Extension" },
    ],
  },
  {
    group: "Guides",
    items: [
      { id: "guide-api",        label: "Build a REST API" },
      { id: "guide-automation", label: "Automate file processing" },
    ],
  },
];

// Both CLI Reference and Editor Support share the same page (index 3)
const GROUP_TO_PAGE: Record<string, number> = {
  "Getting Started":    0,
  "Language Reference": 1,
  "Standard Library":   2,
  "CLI Reference":      3,
  "Editor Support":     3,
  "Guides":             4,
};

export interface DocPage {
  group: string;
  content: React.ReactNode;
}

interface DocsLayoutProps {
  pages: DocPage[];
}

export default function DocsLayout({ pages }: DocsLayoutProps) {
  const [activePage, setActivePage]     = useState(0);
  const [activeItem, setActiveItem]     = useState(NAV[0].items[0].id);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const [openGroups, setOpenGroups]     = useState<Record<string, boolean>>(() =>
    Object.fromEntries(NAV.map((g, i) => [g.group, i === 0]))
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Re-attach IntersectionObserver whenever the rendered page changes
  useEffect(() => {
    observerRef.current?.disconnect();
    const timer = setTimeout(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveItem(entry.target.id);
              break;
            }
          }
        },
        { rootMargin: "-15% 0% -75% 0%", threshold: 0 }
      );
      document.querySelectorAll("section[id]").forEach((el) =>
        observerRef.current?.observe(el)
      );
    }, 80);
    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [activePage]);

  // Scroll to a section after a page change has rendered
  useEffect(() => {
    if (!pendingScroll) return;
    const timer = setTimeout(() => {
      document.getElementById(pendingScroll)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setPendingScroll(null);
    }, 120);
    return () => clearTimeout(timer);
  }, [activePage, pendingScroll]);

  const goToPage = useCallback((index: number, scrollId?: string) => {
    if (index < 0 || index >= pages.length) return;
    window.scrollTo({ top: 0 });
    setActivePage(index);
    // open the first NAV group that maps to this page
    const firstGroup = NAV.find((g) => GROUP_TO_PAGE[g.group] === index);
    if (firstGroup) {
      setOpenGroups((prev) => ({ ...prev, [firstGroup.group]: true }));
      setActiveItem(scrollId ?? firstGroup.items[0].id);
    }
    if (scrollId) setPendingScroll(scrollId);
  }, [pages.length]);

  const goToItem = useCallback((itemId: string) => {
    const navGroup = NAV.find((g) => g.items.some((i) => i.id === itemId));
    if (!navGroup) return;
    const pageIndex = GROUP_TO_PAGE[navGroup.group];
    setOpenGroups((prev) => ({ ...prev, [navGroup.group]: true }));
    setActiveItem(itemId);
    setMobileOpen(false);
    if (pageIndex === activePage) {
      document.getElementById(itemId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      goToPage(pageIndex, itemId);
    }
  }, [activePage, goToPage]);

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const prevPage = activePage > 0 ? pages[activePage - 1] : null;
  const nextPage = activePage < pages.length - 1 ? pages[activePage + 1] : null;

  const renderSidebar = () => (
    <nav className="px-3 py-6 space-y-1">
      {NAV.map((group, gi) => {
        const pageIndex  = GROUP_TO_PAGE[group.group];
        const onThisPage = pageIndex === activePage;
        const isOpen     = openGroups[group.group];

        return (
          <div key={group.group}>
            {/* Group header */}
            <button
              onClick={() => {
                toggleGroup(group.group);
                if (!onThisPage) goToPage(pageIndex);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[15px] font-semibold transition-all duration-200 ${
                onThisPage
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted/40"
              }`}
            >
              <span>
                <span className="text-muted-foreground mr-1.5 tabular-nums">{gi + 1}.</span>
                {group.group}
              </span>
              <ChevronDown
                className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-0" : "-rotate-90"
                } ${onThisPage ? "text-primary" : "text-muted-foreground"}`}
              />
            </button>

            {/* Items */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="mt-1 mb-2 ml-2 space-y-0.5 border-l-2 border-border/40 pl-3">
                {group.items.map((item, ii) => {
                  const isActive = activeItem === item.id && onThisPage;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => goToItem(item.id)}
                        className={`w-full text-left text-[14px] px-2.5 py-2 rounded-md transition-colors ${
                          isActive
                            ? "text-primary font-semibold bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                        }`}
                      >
                        <span className="text-muted-foreground mr-1.5 tabular-nums">
                          {gi + 1}.{ii + 1}
                        </span>
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </nav>
  );

  return (
    <div className="flex min-h-screen pt-16">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed top-16 left-0 bottom-0 w-64 border-r border-border/60 bg-card/40 backdrop-blur-sm overflow-y-auto">
        {renderSidebar()}
      </aside>

      {/* Mobile toggle button */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-3 shadow-lg"
        onClick={() => setMobileOpen((v) => !v)}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 overflow-y-auto pt-16">
          {renderSidebar()}
        </div>
      )}

      {/* Main content */}
      <main className="w-full lg:pl-64">
        <div className="docs-content max-w-3xl mx-auto px-6 md:px-10 py-12">

          {/* Page content */}
          {pages[activePage]?.content}

          {/* Prev / Next navigation */}
          <div className="mt-16 pt-8 border-t border-border/50 flex items-stretch justify-between gap-4">
            {prevPage ? (
              <button
                onClick={() => goToPage(activePage - 1)}
                className="flex items-center gap-3 px-5 py-4 rounded-xl border border-border/60 bg-card/40 hover:bg-muted/30 hover:border-primary/50 transition-all group text-left"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Anterior</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {prevPage.group}
                  </p>
                </div>
              </button>
            ) : <div />}

            {nextPage ? (
              <button
                onClick={() => goToPage(activePage + 1)}
                className="flex items-center gap-3 px-5 py-4 rounded-xl border border-border/60 bg-card/40 hover:bg-muted/30 hover:border-primary/50 transition-all group text-right ml-auto"
              >
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Siguiente</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {nextPage.group}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </button>
            ) : <div />}
          </div>
        </div>
      </main>
    </div>
  );
}
