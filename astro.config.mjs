import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://dstefanelli.dev/',
  integrations: [
    robotsTxt({
      sitemap: false,
      policy: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    }),
  ],
  output: "static",
  // vite: {
  //   server: {
  //     host: "0.0.0.0",
  //     strictPort: true,
  //     hmr: {
  //       clientPort: 443,
  //     },
  //     allowedHosts: ["bug-today-silicon-errors.trycloudflare.com"],
  //   },
  // },
})
