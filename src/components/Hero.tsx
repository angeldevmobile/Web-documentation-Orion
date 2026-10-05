import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Copy, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Snippet from "@/components/home/Snippet";
import ApiSnippet from "@/content/snippets/api.mdx";
import {
  INSTALL_COMMAND,
  LATEST_RELEASE_URL,
  MODULE_COUNT,
  ORION_VERSION,
  REPO_URL,
} from "@/lib/site";

function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* portapapeles no disponible */
    }
  };
  return (
    <button
      onClick={copy}
      className="group flex w-full max-w-lg items-center justify-between gap-3 rounded-lg border border-border bg-muted/40 px-4 py-3 text-left font-mono text-[13px] transition-colors hover:border-primary/50"
      aria-label="Copy install command"
    >
      <span className="truncate">
        <span className="select-none text-muted-foreground">$ </span>
        {INSTALL_COMMAND}
      </span>
      {copied ? (
        <Check className="h-4 w-4 flex-shrink-0 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
      )}
    </button>
  );
}

const Hero = () => (
  <section id="hero" className="px-4 pb-20 pt-32 md:pt-36">
    <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
      <div className="min-w-0 space-y-7 animate-fade-in-up">
        <a
          href={LATEST_RELEASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-sm text-foreground/80 transition-colors hover:border-primary/50"
        >
          <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
            v{ORION_VERSION}
          </span>
          <span className="truncate">JIT up to 10× faster, with 50× less memory</span>
          <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
        </a>

        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
          One language for your <span className="text-gradient">backend, scripts and data</span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Orion is a single executable with {MODULE_COUNT} built-in modules: an HTTP server,
          databases, browser automation, dataframes, Excel and PDF, AI. Write it like a
          script; run it on a Rust VM, or compile the hot paths to native code with the JIT.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="bg-primary px-6 text-primary-foreground hover:bg-primary/90">
            <Link to="/docs/getting-started/installation">
              Get started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border px-6">
            <Link to="/playground">
              <Play className="mr-2 h-4 w-4" /> Try it online
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="px-4">
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>

        <div className="space-y-2">
          <InstallCommand />
          <p className="text-sm text-muted-foreground">
            The VS Code extension downloads the compiler for you. Or grab the{" "}
            <a href={LATEST_RELEASE_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              standalone binary
            </a>{" "}
            for Windows, Linux or macOS.
          </p>
        </div>
      </div>

      <div className="min-w-0 animate-scale-in">
        <Snippet file="api.orx" code={ApiSnippet} />
        <p className="mt-3 text-center text-sm text-muted-foreground">
          A JSON API with a database. No framework, no dependencies: <code>orion api.orx</code>
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
