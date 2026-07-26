import { useState, useEffect } from "react";
import { Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/playground/CodeEditor";
import OutputPanel from "@/components/playground/OutputPanel";
import ExampleSelector from "@/components/playground/ExampleSelector";
import RunButton from "@/components/playground/RunButton";
import { EXAMPLES } from "@/components/playground/examples";
import { Sparkles } from "lucide-react";

const API_URL = import.meta.env.VITE_PLAYGROUND_API_URL ?? "http://localhost:8080";

const SHARE_PARAM = "c";

function encodeCode(code: string): string {
  return btoa(unescape(encodeURIComponent(code)));
}

function decodeCode(encoded: string): string | null {
  try {
    return decodeURIComponent(escape(atob(encoded)));
  } catch {
    return null;
  }
}

const Playground = () => {
  const [code, setCode] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const shared = params.get(SHARE_PARAM);
    if (shared) {
      const decoded = decodeCode(shared);
      if (decoded) return decoded;
    }
    return EXAMPLES[0].code;
  });

  const [stdout, setStdout] = useState("");
  const [stderr, setStderr] = useState("");
  const [timeMs, setTimeMs] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const encoded = encodeCode(code);
    const url = new URL(window.location.href);
    url.searchParams.set(SHARE_PARAM, encoded);
    window.history.replaceState(null, "", url.toString());
  }, [code]);

  const handleRun = async () => {
    setIsRunning(true);
    setStdout("");
    setStderr("");
    setTimeMs(null);

    try {
      const res = await fetch(`${API_URL}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (res.status === 429) {
        setStderr("Demasiadas solicitudes. Espera un momento.");
        return;
      }
      if (res.status === 413) {
        setStderr("El código es demasiado largo (máximo 10KB).");
        return;
      }
      if (!res.ok) {
        setStderr(`Error del servidor: ${res.status}`);
        return;
      }

      const data = await res.json();
      setStdout(data.stdout ?? "");
      setStderr(data.stderr ?? "");
      setTimeMs(data.time_ms ?? null);
    } catch {
      setStderr(
        `No se pudo conectar con la API del playground.\n\nAsegúrate de que playground-api esté corriendo en ${API_URL}`
      );
    } finally {
      setIsRunning(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-screen flex flex-col bg-[#1a1a2e] text-foreground overflow-hidden">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#12121e] shrink-0">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-1.5 group">
            <Sparkles className="w-4 h-4 text-primary group-hover:animate-float" />
            <span className="text-sm font-bold text-gradient">Orion</span>
          </a>
          <span className="text-white/20 text-xs">/ Playground</span>
        </div>

        <div className="flex items-center gap-2">
          <ExampleSelector onSelect={setCode} />
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="h-8 gap-1.5 text-xs text-white/60 hover:text-white hover:bg-white/10"
          >
            <Link2 className="w-3.5 h-3.5" />
            {copied ? "¡Copiado!" : "Compartir"}
          </Button>
          <RunButton onClick={handleRun} isRunning={isRunning} />
        </div>
      </header>

      {/* Editor + Output */}
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          <ResizablePanel defaultSize={55} minSize={30}>
            <CodeEditor value={code} onChange={setCode} />
          </ResizablePanel>

          <ResizableHandle className="w-px bg-white/10 hover:bg-primary/60 transition-colors" />

          <ResizablePanel defaultSize={45} minSize={25}>
            <OutputPanel
              stdout={stdout}
              stderr={stderr}
              timeMs={timeMs}
              isRunning={isRunning}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Playground;
