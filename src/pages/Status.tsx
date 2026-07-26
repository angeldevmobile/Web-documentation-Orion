import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Loader2,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

const REPO = "angeldevmobile/Orion";
const REGISTRY_URL =
  "https://raw.githubusercontent.com/angeldevmobile/Orion/master/packages/registry.json";

type State = "loading" | "ok" | "warn" | "down";
type Check = { state: State; detail: string; link?: string };

const INITIAL: Check = { state: "loading", detail: "Checking..." };

function StatusIcon({ state }: { state: State }) {
  if (state === "loading")
    return <Loader2 className="w-5 h-5 text-muted-foreground animate-spin" />;
  if (state === "ok") return <CheckCircle2 className="w-5 h-5 text-green-500" />;
  if (state === "warn") return <AlertCircle className="w-5 h-5 text-amber-500" />;
  return <XCircle className="w-5 h-5 text-red-500" />;
}

function Row({ title, check }: { title: string; check: Check }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 px-5 border-b border-border last:border-0">
      <div className="flex items-center gap-3">
        <StatusIcon state={check.state} />
        <div>
          <p className="font-medium text-foreground">{title}</p>
          <p className="text-sm text-muted-foreground">{check.detail}</p>
        </div>
      </div>
      {check.link && (
        <a
          href={check.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}`}
          className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

const Status = () => {
  const [release, setRelease] = useState<Check>(INITIAL);
  const [build, setBuild] = useState<Check>(INITIAL);
  const [registry, setRegistry] = useState<Check>(INITIAL);
  const [github, setGithub] = useState<Check>(INITIAL);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadAll = useCallback(async () => {
    setRefreshing(true);
    setRelease(INITIAL);
    setBuild(INITIAL);
    setRegistry(INITIAL);
    setGithub(INITIAL);

    const pRelease = fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) =>
        setRelease({
          state: "ok",
          detail: `Latest published version: ${d.tag_name}`,
          link: d.html_url,
        })
      )
      .catch(() =>
        setRelease({ state: "warn", detail: "Could not fetch the latest release" })
      );

    const pBuild = fetch(`https://api.github.com/repos/${REPO}/actions/runs?per_page=1`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => {
        const run = d.workflow_runs?.[0];
        if (!run) {
          setBuild({ state: "warn", detail: "No recent runs" });
          return;
        }
        const c: string | null = run.conclusion;
        const state: State = c === "success" ? "ok" : c === "failure" ? "down" : "warn";
        const label =
          c === "success" ? "passing" : c === "failure" ? "failing" : run.status;
        setBuild({
          state,
          detail: `Latest CI build: ${label}`,
          link: run.html_url,
        });
      })
      .catch(() =>
        setBuild({ state: "warn", detail: "Could not fetch the build status" })
      );

    const pRegistry = fetch(REGISTRY_URL, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => {
        const n = Object.keys(d.packages ?? {}).length;
        setRegistry({
          state: "ok",
          detail: `Registry reachable — ${n} package${n === 1 ? "" : "s"} available`,
          link: REGISTRY_URL,
        });
      })
      .catch(() =>
        setRegistry({ state: "down", detail: "The package registry is not responding" })
      );

    const pGithub = fetch("https://www.githubstatus.com/api/v2/status.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => {
        const ind: string = d.status?.indicator ?? "unknown";
        const state: State = ind === "none" ? "ok" : ind === "minor" ? "warn" : "down";
        setGithub({
          state,
          detail: d.status?.description ?? "Unknown status",
          link: "https://www.githubstatus.com",
        });
      })
      .catch(() =>
        setGithub({ state: "warn", detail: "Could not check GitHub status" })
      );

    await Promise.allSettled([pRelease, pBuild, pRegistry, pGithub]);
    setUpdatedAt(new Date());
    setRefreshing(false);
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  const checks = [release, build, registry, github];
  const anyLoading = checks.some((c) => c.state === "loading");
  const anyDown = checks.some((c) => c.state === "down");
  const anyWarn = checks.some((c) => c.state === "warn");

  const overall = anyLoading
    ? { state: "loading" as State, text: "Checking system status..." }
    : anyDown
    ? { state: "down" as State, text: "Some issues detected" }
    : anyWarn
    ? { state: "warn" as State, text: "Operational with warnings" }
    : { state: "ok" as State, text: "All systems operational" };

  const bannerBg =
    overall.state === "ok"
      ? "border-green-500/30 bg-green-500/5"
      : overall.state === "warn"
      ? "border-amber-500/30 bg-amber-500/5"
      : overall.state === "down"
      ? "border-red-500/30 bg-red-500/5"
      : "border-border bg-muted/30";

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto max-w-3xl px-4 pt-28 pb-16">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              System status
            </h1>
            <p className="text-muted-foreground mt-2">
              Real-time status of the Orion project and the services it depends on.
            </p>
          </div>
          <button
            onClick={loadAll}
            disabled={refreshing}
            className="flex-shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border text-sm text-foreground hover:bg-muted/60 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {/* Overall banner */}
        <div className={`flex items-center gap-3 rounded-xl border px-5 py-4 mb-8 ${bannerBg}`}>
          <StatusIcon state={overall.state} />
          <span className="font-semibold text-foreground">{overall.text}</span>
        </div>

        {/* Project */}
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
          Orion project
        </h2>
        <div className="rounded-xl border border-border bg-card mb-8">
          <Row title="Version and releases" check={release} />
          <Row title="Continuous integration (build)" check={build} />
          <Row title="Package registry" check={registry} />
        </div>

        {/* External */}
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
          External services
        </h2>
        <div className="rounded-xl border border-border bg-card mb-8">
          <Row title="GitHub (hosting and downloads)" check={github} />
        </div>

        <p className="text-sm text-muted-foreground">
          {updatedAt
            ? `Last updated: ${updatedAt.toLocaleTimeString()}`
            : "Loading..."}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Data comes from GitHub's public APIs. Orion runs locally; the package registry
          and downloads are served from GitHub.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Status;
