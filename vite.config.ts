import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  // En Render (o dominio propio) el sitio vive en la raíz → "/".
  // GitHub Pages lo sirve bajo /<repo>/ → el workflow define VITE_BASE_PATH.
  base: command === "build" ? process.env.VITE_BASE_PATH ?? "/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
