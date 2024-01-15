import { defineConfig } from "vitepress";
import sidebar from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      host: true,
    },
  },
  markdown: {
    math: true,
  },
  base: "/internal-knowledge-base/",
  lang: "ja-JP",
  lastUpdated: true,
  title: "勉強会",
  description: "ドキュメント",
  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-Y80K0RYTJH",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y80K0RYTJH');`,
    ],
  ],
  themeConfig: {
    logo: "/images/logo.png",
    outline: {
      label: "目次",
      level: "deep",
    },
    nav: [
      { text: "はじめに", link: "/introduction" },
      { text: "ドキュメント", link: "/articles/" },
      { text: "メンバー", link: "/members" },
      {
        text: "Issue",
        link: "https://github.com/YuheiFUJITA/internal-knowledge-base/issues",
      },
    ],
    sidebar,
    editLink: {
      pattern:
        "https://github.com/YuheiFUJITA/internal-knowledge-base/commits/main/docs/:path",
      text: "GitHubで更新履歴を見る",
    },
    lastUpdated: {
      text: "最終更新日",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "&copy 2023-present Yuhei FUJITA",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/YuheiFUJITA/internal-knowledge-base",
      },
    ],
    docFooter: {
      prev: "前へ",
      next: "次へ",
    },
    sidebarMenuLabel: "メニュー",
    returnToTopLabel: "トップに戻る",
    search: {
      provider: "local",
    },
    externalLinkIcon: true,
    notFound: {
      title: "深淵へようこそ",
      quote: "立ち去れ、お前はまだここに来てはならぬ",
      linkLabel: "トップに戻る",
      linkText: "いるべき場所に帰る",
    },
  },
});
