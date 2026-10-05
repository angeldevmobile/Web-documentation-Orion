import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Database, Globe, Server, Terminal } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Snippet from "@/components/home/Snippet";
import BackendSnippet from "@/content/snippets/backend.mdx";
import DataSnippet from "@/content/snippets/data.mdx";
import BrowserSnippet from "@/content/snippets/browser.mdx";
import AutomationSnippet from "@/content/snippets/automation.mdx";
import AiSnippet from "@/content/snippets/ai.mdx";
import { REPO_URL } from "@/lib/site";
import builtins from "@/data/builtins.json";

// Módulos con página en /modules (los que trae builtins.json).
const KNOWN = new Set((builtins as { owner: string }[]).map((b) => b.owner));

interface UseCase {
  id: string;
  tab: string;
  icon: typeof Server;
  title: string;
  body: string[];
  modules: string[];
  link: { label: string; to: string };
  file: string;
  code: ComponentType;
}

const CASES: UseCase[] = [
  {
    id: "backend",
    tab: "APIs",
    icon: Server,
    title: "APIs and services without a framework",
    body: [
      "`serve` is part of the language: a port and a handler function. Each request arrives as a dict; return a dict and Orion answers with JSON.",
      "Routes with `:id` parameters, middleware for rate limiting, CORS and JWT, and SQLite or Postgres through `db` are standard modules. Nothing to install, nothing to keep in sync.",
    ],
    modules: ["router", "middleware", "db", "auth", "cache", "validate", "mail"],
    link: { label: "Build a REST API", to: "/docs/guides/rest-api" },
    file: "server.orx",
    code: BackendSnippet,
  },
  {
    id: "data",
    tab: "Data",
    icon: Database,
    title: "Data and reports without pandas",
    body: [
      "`frame` loads a CSV, or its own binary `.odf` format, straight into typed columns. Statistics, grouping and sorting run in Rust, and from a million rows the aggregations use every core.",
      "The result goes to Excel with styles and charts, to CSV or JSON, or into a PDF report. Loading 500k rows is twice as fast as Python's csv module, with the same memory.",
    ],
    modules: ["frame", "table", "stat", "serie", "excel", "pdf", "csv"],
    link: { label: "The frame data engine", to: "/docs/stdlib/frame" },
    file: "report.orx",
    code: DataSnippet,
  },
  {
    id: "browser",
    tab: "Browser",
    icon: Globe,
    title: "Browser automation without Selenium",
    body: [
      "`browser` drives the Chrome or Edge you already have over the DevTools protocol: no chromedriver, no browser download, no Node.js.",
      "`extract` reads a whole listing in a single call inside the page, so 500 products take milliseconds instead of seconds. `with` closes the browser even if the script fails, and a killed process takes the browser with it.",
    ],
    modules: ["browser"],
    link: { label: "Browser reference", to: `${REPO_URL}/blob/master/BROWSER.md` },
    file: "scrape.orx",
    code: BrowserSnippet,
  },
  {
    id: "automation",
    tab: "Automation",
    icon: Terminal,
    title: "Scripts and DevOps in one file",
    body: [
      "Files, processes, archives, SSH, Docker and S3 are standard modules, so a deployment or a nightly job is one file that runs wherever the orion binary does.",
      "Errors stop at the line that failed and show the code around it, and `attempt`/`handle` lets a script recover and carry on.",
    ],
    modules: ["fs", "process", "zip", "ssh", "docker", "s3", "watch", "tarea"],
    link: { label: "Automate file processing", to: "/docs/guides/file-automation" },
    file: "deploy.orx",
    code: AutomationSnippet,
  },
  {
    id: "ai",
    tab: "AI",
    icon: Bot,
    title: "AI as part of the standard library",
    body: [
      "`llm` talks to OpenAI, Anthropic, Gemini or a local Ollama with the same call, so changing provider is changing one string.",
      "`embed` and `vector` cover embeddings and semantic search over your own documents, without a separate vector database. `think` is a keyword for a quick prompt from any script.",
    ],
    modules: ["llm", "embed", "vector", "ai", "vision", "insight"],
    link: { label: "AI primitives", to: "/docs/language/ai-primitives" },
    file: "assistant.orx",
    code: AiSnippet,
  },
];

/** Pinta como código lo que va entre comillas invertidas. */
function Prose({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/).map((part, i) =>
        part.startsWith("`") ? (
          <code key={i} className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-primary">
            {part.slice(1, -1)}
          </code>
        ) : (
          part
        ),
      )}
    </>
  );
}

const CHIP =
  "rounded-md border border-border bg-muted/40 px-2 py-1 font-mono text-xs text-foreground/80 transition-colors";

function CaseLink({ to, label }: { to: string; label: string }) {
  const cls = "inline-flex items-center gap-1 font-medium text-primary hover:underline";
  const inner = (
    <>
      {label} <ArrowRight className="h-4 w-4" />
    </>
  );
  return to.startsWith("http") ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  );
}

const UseCases = () => (
  <section id="use-cases" className="border-t border-border/60 px-4 py-24">
    <div className="container mx-auto max-w-6xl">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What you can build with it</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          The tools for everyday work ship with the language. Each example below is a
          complete program.
        </p>
      </div>

      <Tabs defaultValue={CASES[0].id}>
        <TabsList className="mx-auto mb-10 flex h-auto w-fit flex-wrap justify-center gap-1 bg-muted/60 p-1">
          {CASES.map((c) => (
            <TabsTrigger key={c.id} value={c.id} className="gap-2 px-4 py-2">
              <c.icon className="h-4 w-4" /> {c.tab}
            </TabsTrigger>
          ))}
        </TabsList>

        {CASES.map((c) => (
          <TabsContent key={c.id} value={c.id} className="mt-0">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="min-w-0 space-y-5">
                <h3 className="text-2xl font-semibold">{c.title}</h3>
                {c.body.map((p, i) => (
                  <p key={i} className="leading-relaxed text-muted-foreground">
                    <Prose text={p} />
                  </p>
                ))}
                <div className="flex flex-wrap gap-2">
                  {c.modules.map((m) =>
                    KNOWN.has(m) ? (
                      <Link key={m} to={`/modules/${m}`} className={`${CHIP} hover:border-primary/50 hover:text-primary`}>
                        {m}
                      </Link>
                    ) : (
                      <span key={m} className={CHIP}>
                        {m}
                      </span>
                    ),
                  )}
                </div>
                <CaseLink {...c.link} />
              </div>
              <div className="min-w-0">
                <Snippet file={c.file} code={c.code} />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

export default UseCases;
