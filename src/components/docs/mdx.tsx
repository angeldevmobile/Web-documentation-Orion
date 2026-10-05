import { useRef, useState, type ComponentProps, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Check, Copy, Info, Lightbulb, TriangleAlert } from "lucide-react";

/** Bloque de código ya coloreado por Shiki al compilar; aquí solo el marco y copiar. */
function CodeFrame(props: ComponentProps<"pre">) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ref.current?.innerText ?? "");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* portapapeles no disponible */
    }
  };

  return (
    <div className="not-prose group relative my-5">
      <button
        onClick={copy}
        aria-label="Copy code"
        className="absolute right-2.5 top-2.5 z-10 inline-flex items-center gap-1 rounded-md border border-border bg-background/80 px-2 py-1 text-xs text-muted-foreground opacity-0 backdrop-blur transition-opacity hover:text-foreground focus:opacity-100 group-hover:opacity-100"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
      <pre
        ref={ref}
        {...props}
        className={`${props.className ?? ""} overflow-x-auto rounded-lg border border-border bg-muted/50 p-5 font-mono text-[13.5px] leading-relaxed`}
      />
    </div>
  );
}

function SmartLink({ href = "", ...rest }: ComponentProps<"a">) {
  if (href.startsWith("/")) return <Link to={href} {...rest} />;
  if (href.startsWith("#")) return <a href={href} {...rest} />;
  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />;
}

function Table(props: ComponentProps<"table">) {
  return (
    <div className="my-6 overflow-x-auto">
      <table {...props} className="my-0" />
    </div>
  );
}

const NOTE_STYLES = {
  note: { icon: Info, label: "Note", box: "border-primary/40 bg-primary/5", tint: "text-primary" },
  tip: { icon: Lightbulb, label: "Tip", box: "border-green-500/40 bg-green-500/5", tint: "text-green-600 dark:text-green-400" },
  warning: { icon: TriangleAlert, label: "Warning", box: "border-amber-500/40 bg-amber-500/5", tint: "text-amber-600 dark:text-amber-400" },
};

/** Aviso dentro del texto: `<Note type="tip">...</Note>` en cualquier .mdx. */
export function Note({ type = "note", children }: { type?: keyof typeof NOTE_STYLES; children: ReactNode }) {
  const s = NOTE_STYLES[type];
  const Icon = s.icon;
  return (
    <div className={`my-6 flex gap-3 rounded-lg border-l-4 px-4 py-3 text-[15px] leading-relaxed ${s.box}`}>
      <Icon className={`mt-1 h-4 w-4 flex-shrink-0 ${s.tint}`} />
      {/* El Markdown de dentro llega como párrafos: sin márgenes, y el primero
          en línea para que siga a la etiqueta. */}
      <div className="[&>p:first-of-type]:inline [&_p]:my-0">
        <span className={`mr-1.5 font-semibold ${s.tint}`}>{s.label}.</span>
        {children}
      </div>
    </div>
  );
}

export const mdxComponents = {
  pre: CodeFrame,
  a: SmartLink,
  table: Table,
  Note,
};
