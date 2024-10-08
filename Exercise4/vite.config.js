import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  css: { postcss: "./postcss.config.js" },
  resolve: {
    alias: {
      reactQuery: path.resolve(__dirname, "src/reactQuery"),
      lib: path.resolve(__dirname, "src/lib"),
    },
  },
});
