// @ts-check
import { fileURLToPath, URL } from "node:url";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables" as *;`,
        },
      },
    },
  },
  fonts: [
    {
      name: "IBM Plex Serif",
      cssVariable: "--font-primary-serif",
      provider: fontProviders.google(),
    },
  ],
});
