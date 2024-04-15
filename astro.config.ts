import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import { THEME_CONFIG } from "./src/theme.config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: THEME_CONFIG.website,
  prefetch: true,
  markdown: {
    shikiConfig: {
      // 使用 shiki 的主题
      // https://shiki.style/themes
      theme: 'one-dark-pro',
      // Or visit here for more themes
      // https://shikiji.netlify.app/guide/dual-themes#light-dark-dual-themes
      // experimentalThemes: {
      //   light: 'github-light',
      //   dark: 'github-dark',
      // },
      // Add your customized languages
      // Note that shiki has many build-in langs including .astro！
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // auto wrap for better display
      wrap: true
    }
  },
  integrations: [UnoCSS({
    injectReset: true
  }), robotsTxt(), sitemap()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});