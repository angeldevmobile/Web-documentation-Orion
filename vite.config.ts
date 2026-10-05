import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeSlug from "rehype-slug";
import rehypeShiki from "@shikijs/rehype";

// Gramática de Orion copiada de orion-extension/syntaxes: el código de la web se
// colorea igual que en VS Code. Si la extensión cambia la gramática, copiarla aquí.
const orionGrammar = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "src/content/orion.tmLanguage.json"), "utf-8"),
);

/**
 * `virtual:docs-meta`: el frontmatter (title, description, order) de cada .mdx,
 * leído del disco. Importar los .mdx para eso metería todas las páginas en el
 * bundle principal, y `?raw` no sirve: el plugin de MDX también lo compila.
 */
function docsMeta(): Plugin {
  const id = "virtual:docs-meta";
  const resolved = "\0" + id;
  const dir = path.resolve(__dirname, "src/content/docs");

  const parse = (raw: string) => {
    const block = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
    const fm: Record<string, string | number> = {};
    for (const line of block.split(/\r?\n/)) {
      const m = line.match(/^(\w+):\s*(.*)$/);
      if (!m) continue;
      const value = m[2].replace(/^"(.*)"$/, "$1").replace(/\\"/g, '"');
      fm[m[1]] = m[1] === "order" ? Number(value) : value;
    }
    return fm;
  };

  return {
    name: "orion-docs-meta",
    resolveId: (source) => (source === id ? resolved : undefined),
    load(loadId) {
      if (loadId !== resolved) return;
      const out: Record<string, unknown> = {};
      for (const section of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!section.isDirectory()) continue;
        for (const name of fs.readdirSync(path.join(dir, section.name))) {
          if (!name.endsWith(".mdx")) continue;
          const file = path.join(dir, section.name, name);
          this.addWatchFile(file);
          out[`./${section.name}/${name}`] = parse(fs.readFileSync(file, "utf-8"));
        }
      }
      return `export default ${JSON.stringify(out)};`;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  // En Render (o dominio propio) el sitio vive en la raíz → "/".
  // GitHub Pages lo sirve bajo /<repo>/ → el workflow define VITE_BASE_PATH.
  base: command === "build" ? process.env.VITE_BASE_PATH ?? "/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    docsMeta(),
    {
      enforce: "pre" as const,
      ...mdx({
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeShiki,
            {
              // Dos temas a la vez: el CSS elige según la clase `dark` de <html>.
              themes: { light: "github-light", dark: "github-dark" },
              defaultColor: false,
              langs: [
                { ...orionGrammar, name: "orion", aliases: ["orx"] },
                "bash", "powershell", "json", "toml", "rust", "python",
              ],
              fallbackLanguage: "text",
            },
          ],
        ],
      }),
    },
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
