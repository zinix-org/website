// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "Instrument Serif",
      cssVariable: "--primary-font",
      provider: fontProviders.google(),
    },
  ],
});
