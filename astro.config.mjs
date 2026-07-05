// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import rehypeVideoLinks from "./src/lib/rehypeVideoLinks.mjs";

export default defineConfig({
  site: "https://capstonecrac-github-io.pages.dev",
  base: "/",
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    rehypePlugins: [rehypeVideoLinks]
  }
});
