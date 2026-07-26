import { Github, BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const REPO_URL = "https://github.com/angeldevmobile/Orion";
const AUTHOR_URL = "https://github.com/angeldevmobile";
const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=AngelZapata.oriondev";

/** Un enlace es externo (`url`, se abre en pestaña nueva) o interno (`to`),
 *  nunca ambos ni ninguno: así el render no puede quedarse sin destino. */
type FooterLink = { name: string } & (
  | { url: string; to?: never }
  | { to: string; url?: never }
);

const Footer = () => {
  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: "Product",
      links: [
        { name: "VS Code extension", url: MARKETPLACE_URL },
        { name: "Downloads", url: `${REPO_URL}/releases` },
        { name: "Playground", to: "/playground" },
      ],
    },
    {
      title: "Documentation",
      links: [
        { name: "Introduction", to: "/docs" },
        { name: "Language guide", to: "/docs" },
        { name: "CLI and tooling", to: "/docs" },
        { name: "Standard library", to: "/docs" },
        { name: "Module reference", to: "/modules" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "GitHub", url: REPO_URL },
        { name: "Report an issue", url: `${REPO_URL}/issues` },
        { name: "Releases", url: `${REPO_URL}/releases` },
      ],
    },
    {
      title: "Contributors",
      links: [
        { name: "How to contribute", url: REPO_URL },
        { name: "Contributors list", url: `${REPO_URL}/graphs/contributors` },
        { name: "Angel Zapata", url: AUTHOR_URL },
      ],
    },
  ];

  const linkClass =
    "text-sm text-muted-foreground hover:text-primary transition-colors text-left";

  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-14">
        {/* Community call to action */}
        <div className="mb-12 rounded-xl border border-border bg-card px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground">Orion is open source and growing</p>
            <p className="text-sm text-muted-foreground mt-1">
              Join the community to help test, improve, and shape the language.
            </p>
          </div>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Contribute on GitHub
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img src={`${import.meta.env.BASE_URL}orion.png`} alt="Orion" className="w-8 h-8" />
              <h3 className="text-lg font-bold text-foreground">Orion Language</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A modern programming language with native compilation, a complete standard
              library, and integrated development tools.
            </p>
            <div className="flex gap-4 pt-1">
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <Link
                to="/docs"
                aria-label="Documentation"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <BookOpen className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.to} className={linkClass}>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-border" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Orion Language. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              MIT License
            </a>
            <Link
              to="/status"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500/60 animate-ping"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
              </span>
              System status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
