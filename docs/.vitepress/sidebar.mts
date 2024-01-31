import { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = {
  "/articles/": [
    {
      text: "ドキュメント",
      link: "/articles/",
      items: [
        {
          text: "Markdown記法",
          link: "/articles/how-to-use-markdown",
        },
        {
          text: "ChatGPT",
          link: "/articles/chat-gpt",
        },
        {
          text: "ハルシネーション",
          link: "/articles/hallucination",
        },
        {
          text: "ChatGPT Plugin",
          link: "/articles/chat-gpt-plugin",
        },
        {
          text: "JavaScript 基礎",
          link: "/articles/js-introduction",
        },
        {
          text: "Google Apps Script",
          collapsed: false,
          items: [
            {
              text: "基礎",
              link: "/articles/gas-introduction",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebar;
