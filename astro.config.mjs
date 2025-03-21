import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt({
    sitemap: false,
    policy: [
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
  }),],
  site: 'https://dstefanelli.dev/',
  output: "static",
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
        prefixDefaultLocale: false
    }
  }
})
