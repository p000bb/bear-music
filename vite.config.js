import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@c": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@u": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@a": fileURLToPath(new URL("./src/assets", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "^/api": {
        target: "https://music-jbkk5mri6-p000bb.vercel.app/",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
