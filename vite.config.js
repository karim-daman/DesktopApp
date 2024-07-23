import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// vite.config.js
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
      $utils: path.resolve("./src/utils"),
      $stores: path.resolve("./src/stores"),
      $assets: path.resolve("./src/assets"),
      $components: path.resolve("./src/components"),
    },
  },
});
