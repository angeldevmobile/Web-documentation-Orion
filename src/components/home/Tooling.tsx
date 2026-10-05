import { Link } from "react-router-dom";
import { ArrowRight, Bug, FlaskConical, Lightbulb, Play, Puzzle, Workflow } from "lucide-react";
import { MARKETPLACE_URL } from "@/lib/site";

const FEATURES = [
  { icon: Lightbulb, title: "IntelliSense and real diagnostics", body: "Completion, hover docs and the compiler's own errors as you type, through a language server." },
  { icon: Bug, title: "Debugger", body: "Breakpoints, stepping and watches in VS Code, over the Debug Adapter Protocol." },
  { icon: Play, title: "Run, watch and REPL", body: "A ▶ Run lens on every file, re-run on save, and an integrated REPL that keeps its state." },
  { icon: FlaskConical, title: "Tests", body: "A test explorer that finds every test_*.orx file; orion test runs the same suite in CI." },
  { icon: Workflow, title: "Visual tools", body: "Shape diagrams, an import graph, and a route explorer with a built-in REST client." },
  { icon: Puzzle, title: "Zero setup", body: "The extension downloads the compiler the first time you open a .orx file and keeps it updated." },
];

const CLI = `orion app.orx              # run
orion --jit app.orx        # run with the JIT
orion --build app.orx      # standalone native executable
orion new my-api           # new project with a server and tests
orion test                 # run every test_*.orx
orion fmt app.orx --write  # format`;

const Tooling = () => (
  <section id="tooling" className="border-t border-border/60 bg-muted/20 px-4 py-24">
    <div className="container mx-auto max-w-6xl">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Tooling from day one</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          An editor extension and a CLI that cover writing, running, testing, debugging
          and shipping, built alongside the language.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
          <img
            src={`${import.meta.env.BASE_URL}images/vscode.jpeg`}
            alt="The Orion extension in VS Code: syntax highlighting, diagnostics and the run lens"
            className="w-full"
            loading="lazy"
          />
        </figure>

        <div className="space-y-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="h-fit rounded-lg bg-primary/10 p-2 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">{f.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </div>
          ))}
          <a
            href={MARKETPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Get the extension <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">One binary, every command</h3>
          <p className="leading-relaxed text-muted-foreground">
            The same executable runs your code, compiles it, formats it, tests it and
            manages packages. No separate toolchain to install or keep in step.
          </p>
          <Link to="/docs/tools/running" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
            CLI reference <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <pre className="overflow-x-auto rounded-xl border border-border bg-card p-5 font-mono text-[13px] leading-relaxed">
          <code>{CLI}</code>
        </pre>
      </div>
    </div>
  </section>
);

export default Tooling;
