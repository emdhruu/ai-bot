// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target:
          "https://api.kidjig.com/provider/api/",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, " "),
      },
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
