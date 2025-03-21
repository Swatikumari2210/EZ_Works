// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "0.0.0.0",
      port: 3000,
      proxy: {
        "/api": {
          // target: apiUrl, // Base API URL
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [react()],
    optimizeDeps: {
      include: ["@tanstack/react-query"],
    },
  };
});
