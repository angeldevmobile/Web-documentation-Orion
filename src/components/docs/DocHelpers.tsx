import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  className?: string;
}

const COLLAPSE_LINES = 15;

export const CodeBlock = ({ code, className = "" }: CodeBlockProps) => {
  const trimmed = code.trim();
  const lines = trimmed.split("\n");
  const isLong = lines.length > COLLAPSE_LINES;
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const shown =
    isLong && !expanded ? lines.slice(0, COLLAPSE_LINES).join("\n") : trimmed;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(trimmed);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className={`relative my-4 ${className}`}>
      <button
        onClick={onCopy}
        aria-label="Copy code"
        className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1 rounded-md border border-border bg-background/80 backdrop-blur px-2 py-1 text-xs text-muted-foreground hover:text-foreground opacity-60 hover:opacity-100 transition-opacity"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-green-500" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
        {copied ? "Copied" : "Copy"}
      </button>

      <div className="relative">
        <pre className="bg-muted/60 border border-border rounded-lg p-5 text-[14px] font-mono overflow-x-auto leading-relaxed text-foreground whitespace-pre">
          <code>{shown}</code>
        </pre>
        {isLong && !expanded && (
          <div className="pointer-events-none absolute inset-x-px bottom-px h-14 bg-gradient-to-t from-muted to-transparent rounded-b-lg" />
        )}
      </div>

      {isLong && (
        <div className="mt-2 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-sm font-medium text-primary hover:underline"
          >
            {expanded
              ? "Show less"
              : `Show more (${lines.length - COLLAPSE_LINES} more lines)`}
          </button>
        </div>
      )}
    </div>
  );
};

export const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-muted px-1.5 py-0.5 rounded text-[14px] font-mono text-primary">
    {children}
  </code>
);

interface FnRow {
  signature: string;
  returns: string;
  description: string;
}

export const FnTable = ({ rows }: { rows: FnRow[] }) => (
  <div className="overflow-x-auto my-5">
    <table className="w-full text-[14px] border-collapse">
      <thead>
        <tr className="border-b border-border">
          <th className="text-left py-2.5 pr-6 font-semibold text-foreground/60 w-2/5">
            Signature
          </th>
          <th className="text-left py-2.5 pr-6 font-semibold text-foreground/60 w-1/5">
            Returns
          </th>
          <th className="text-left py-2.5 font-semibold text-foreground/60">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-border/40">
            <td className="py-2.5 pr-6 font-mono text-primary align-top">
              {row.signature}
            </td>
            <td className="py-2.5 pr-6 font-mono text-muted-foreground align-top">
              {row.returns}
            </td>
            <td className="py-2.5 text-foreground/80 align-top">{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

interface ParamRow {
  name: string;
  type: string;
  description: string;
}

export const ParamTable = ({ rows }: { rows: ParamRow[] }) => (
  <div className="overflow-x-auto my-5">
    <table className="w-full text-[14px] border-collapse">
      <thead>
        <tr className="border-b border-border">
          <th className="text-left py-2.5 pr-6 font-semibold text-foreground/60 w-1/4">
            Parameter
          </th>
          <th className="text-left py-2.5 pr-6 font-semibold text-foreground/60 w-1/4">
            Type
          </th>
          <th className="text-left py-2.5 font-semibold text-foreground/60">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-border/40">
            <td className="py-2.5 pr-6 font-mono text-primary align-top">{row.name}</td>
            <td className="py-2.5 pr-6 font-mono text-muted-foreground align-top">
              {row.type}
            </td>
            <td className="py-2.5 text-foreground/80 align-top">{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const SectionHeading = ({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) => (
  <h2
    id={id}
    className="text-3xl font-bold mt-14 mb-5 pb-3 border-b border-border scroll-mt-20"
  >
    {children}
  </h2>
);

export const SubHeading = ({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) => (
  <h3 id={id} className="text-xl font-semibold mt-9 mb-3 scroll-mt-20">
    {children}
  </h3>
);

export const Note = ({
  type = "note",
  children,
}: {
  type?: "note" | "warning" | "tip";
  children: React.ReactNode;
}) => {
  const styles = {
    note:    "border-primary/40 bg-primary/5 text-foreground/80",
    warning: "border-yellow-500/40 bg-yellow-500/5 text-foreground/80",
    tip:     "border-green-500/40 bg-green-500/5 text-foreground/80",
  };
  const labels = { note: "Note", warning: "Warning", tip: "Tip" };
  return (
    <div className={`border-l-4 pl-4 py-3 pr-4 rounded-r my-5 ${styles[type]}`}>
      <span className="font-semibold text-[14px] uppercase tracking-wide mr-2">
        {labels[type]}:
      </span>
      <span className="text-[15px]">{children}</span>
    </div>
  );
};
