import raw from "./builtins.json";

export interface BuiltinEntry {
  name: string;
  qualified: string;
  owner: string;
  kind: string;
  signature: string;
  description: string;
  example: string;
}

const ALL = raw as BuiltinEntry[];

const CATEGORIES: { title: string; modules: string[] }[] = [
  { title: "Text", modules: ["strings", "string", "regex", "template", "validate", "formato"] },
  { title: "Numbers and data", modules: ["math", "list", "dict", "vector", "matrix", "stat", "serie", "frame", "table"] },
  { title: "Files and formats", modules: ["fs", "json", "csv", "excel", "excel_f", "pdf", "zip"] },
  { title: "System", modules: ["env", "process", "config", "log", "term", "tui", "watch"] },
  { title: "Date and time", modules: ["datetime", "timewarp"] },
  { title: "Networking and web", modules: ["net", "router", "ws", "sse", "session", "middleware", "mail", "s3", "ssh", "docker", "search"] },
  { title: "Data and storage", modules: ["db", "cache", "cola", "state", "stream", "embed"] },
  { title: "Security", modules: ["crypto", "crypto2", "auth", "secret"] },
  { title: "Concurrency", modules: ["chan", "tarea"] },
  { title: "AI", modules: ["ai", "llm", "insight", "vision"] },
  { title: "Specialized", modules: ["quantum", "cosmos", "grafo", "gui", "random", "proto"] },
];

export const CATEGORY_ORDER = CATEGORIES.map((c) => c.title).concat("Other");

const CATEGORY_OF: Record<string, string> = {};
for (const c of CATEGORIES) for (const m of c.modules) CATEGORY_OF[m] = c.title;

export interface ModuleInfo {
  name: string;
  count: number;
  category: string;
}

export function listModules(): ModuleInfo[] {
  const counts = new Map<string, number>();
  for (const e of ALL) {
    if (!e.owner) continue;
    counts.set(e.owner, (counts.get(e.owner) || 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count, category: CATEGORY_OF[name] || "Other" }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Reemplaza guiones largos (— –) por guion normal en las descripciones.
// (Las descripciones del typeshed están en español; la traducción a inglés es un paso futuro.)
function clean(s: string): string {
  return (s || "").replace(/[—–]/g, "-");
}

export function getModuleEntries(name: string): BuiltinEntry[] {
  return ALL.filter((e) => e.owner === name).map((e) => ({
    ...e,
    description: clean(e.description),
  }));
}
