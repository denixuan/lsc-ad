import { searchPlugin } from "@vuepress/plugin-search";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import inferSiderbars from "./utils";

export default defineUserConfig({
  lang: "en-US",
  title: "Adirondack Swimming, Inc",
  description: "Athletes are our focus. Providing opportunities to succeed in life through swimming is our passion. Moving mountains, one stroke at a time is our vision",
  base: "/", // if deployed to the root, then use "/"
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  ],
  theme: defaultTheme({
    // default theme config
    logo: "/logo.png",
    sidebar: inferSiderbars(),
    repo: "denixuan/lsc-ad",
    editLinks: false,
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "General",
        link: "/general/",
      },
      {
        text: "Officers",
        link: "/officers/",
      },
      {
        text: "meets",
        link: "/meets/",
      },
      {
        text: "forms",
        link: "/forms/",
      },
    ],
  }),
  configureWebpack: {
    resolve: {
      alias: {
        "@public": "./public",
      },
    },
  },
  plugins: [
    sitemapPlugin({
      // your options
      hostname: "lscad.swimstandards.com/",
    }),
    googleAnalyticsPlugin({
      // options
      id: "G-P2TFX6P8ZL",
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        }
      },
    }),
  ],
});
