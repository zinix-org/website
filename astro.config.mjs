// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "IBM Plex Serif",
      cssVariable: "--font-primary-serif",
      provider: fontProviders.google(),
    },
  ],
});
