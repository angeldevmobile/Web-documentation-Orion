/**
 * El intérprete de Orion colorea sus errores con secuencias ANSI, pensadas para
 * una terminal. En el navegador aparecerían como texto literal (`[31;1m`), así
 * que se traducen a clases de Tailwind.
 *
 * Solo cubre SGR de color de texto e intensidad, que es lo que Orion emite.
 */

export interface AnsiSegment {
  text: string;
  className: string;
}

const FOREGROUND: Record<number, string> = {
  30: "text-white/40",
  31: "text-red-400",
  32: "text-green-400",
  33: "text-yellow-400",
  34: "text-blue-400",
  35: "text-fuchsia-400",
  36: "text-cyan-400",
  37: "text-white/80",
  90: "text-white/40",
  91: "text-red-300",
  92: "text-green-300",
  93: "text-yellow-300",
  94: "text-blue-300",
  95: "text-fuchsia-300",
  96: "text-cyan-300",
  97: "text-white",
};

// eslint-disable-next-line no-control-regex -- ESC es justamente lo que se busca
const SGR = /\u001b\[([0-9;]*)m/g;

export function parseAnsi(input: string): AnsiSegment[] {
  const segments: AnsiSegment[] = [];
  let color = "";
  let bold = false;
  let cursor = 0;

  const push = (text: string) => {
    if (!text) return;
    const className = [color, bold ? "font-bold" : ""].filter(Boolean).join(" ");
    const previous = segments[segments.length - 1];
    // Fusiona tramos contiguos con el mismo estilo para no generar un span por
    // cada fragmento suelto.
    if (previous && previous.className === className) {
      previous.text += text;
    } else {
      segments.push({ text, className });
    }
  };

  for (const match of input.matchAll(SGR)) {
    const start = match.index ?? 0;
    push(input.slice(cursor, start));
    cursor = start + match[0].length;

    // `ESC[m` sin parámetros equivale a `ESC[0m`.
    const codes = match[1] === "" ? [0] : match[1].split(";").map(Number);

    for (const code of codes) {
      if (code === 0) {
        color = "";
        bold = false;
      } else if (code === 1) {
        bold = true;
      } else if (code === 22) {
        bold = false;
      } else if (code === 39) {
        color = "";
      } else if (FOREGROUND[code]) {
        color = FOREGROUND[code];
      }
    }
  }

  push(input.slice(cursor));
  return segments;
}
