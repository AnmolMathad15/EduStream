import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Import safely (won't fail if plugin isn't available)
let runtimeErrorOverlay: any = () => null;
try {
  runtimeErrorOverlay = (
    await import("@Replit/vite-plugin-runtime-error-modal")
  ).default;
} catch {}

const port = Number(process.env.PORT ?? 5173);
const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,

  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "../../attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    host: "0.0.0.0",
    port,
    strictPort: false,
    allowedHosts: true,
  },

  preview: {
    host: "0.0.0.0",
    port,
    allowedHosts: true,
  },
});