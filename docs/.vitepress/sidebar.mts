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
      ],
    },
  ],
};

export default sidebar;
