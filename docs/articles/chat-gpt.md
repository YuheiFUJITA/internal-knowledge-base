# ChatGPT

:::info
この記事は[ChatGPT \| AI Study Notebook](https://yuheifujita.github.io/ai-study-notebook/notebook/chat-gpt.html)から移植しました。
:::

ここでは、OpenAIが提供しているChatGPTの基本と注意点について解説します。

## ChatGPTとは

[ChatGPT](https://chat.openai.com/)とは、[OpenAI](https://openai.com/)が公開しているLLMであるGPTを利用したチャットサービスです。

Web上もしくはアプリ（[iOS](https://apps.apple.com/jp/app/chatgpt/id6448311069)）で利用できます。

ChatGPTではOpenAIが提供しているLLMである「[GPT-3.5](https://platform.openai.com/docs/models/gpt-3-5)」を利用して、AIとチャット形式で会話が可能です。

## 使い方

ChatGPTを利用するには、OpenAIのアカウントが必要になります。まだアカウントを所有していない場合は[アカウント登録](https://platform.openai.com/signup?launch)を行ってください。

ログインすると、画面左上の**New Chat**から新しいチャットを開始できます。同じチャット内では過去のやり取りを**ある程度**記憶しているので、チャット形式で会話を続けることができます。

また、ChatGPT Plus（20USD/month）を契約していると、より高性能な[GPT-4](https://openai.com/research/gpt-4)や[Plugins](https://openai.com/blog/chatgpt-plugins)、[Code Interpreter](https://openai.com/blog/chatgpt-plugins#Code%20interpreter:~:text=of%20the%20ecosystem.-,Code%20interpreter,-Alpha)などを利用できます。

## 利用する上での注意点

ChatGPTは基本無料で利用できますが、利用する上での注意点があります。

### 入力内容は学習データとして利用される

ChatGPTを提供している[OpenAIの利用規約](https://openai.com/policies/terms-of-use)には、以下のように記載されています。

> (c) Use of Content to Improve Services. We do not use Content that you provide to or receive from our API (“API Content”) to develop or improve our Services. We may use Content from Services other than our API (“Non-API Content”) to help develop and improve our Services. You can read more here about how Non-API Content may be used to improve model performance. If you do not want your Non-API Content used to improve Services, you can opt out by filling out this form. Please note that in some cases this may limit the ability of our Services to better address your specific use case.
>
> ---
>
> 引用：[Terms of use](https://openai.com/policies/terms-of-use)

学習データは、低確率ですがそのままAIの出力に含まれる場合があります。個人情報や機密情報などはChatGPTには入力しないようにしましょう。

もし学習に利用されたくない情報を入力する必要がある場合は、**Settings > Data controls > Chat history & training**をOFFにしてください。ただし、この場合は履歴は残りません。また、調査のために30日間は保存されます。詳しくは[Data Controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq)を参照してください。

もし履歴を残しつつ学習データとして利用してほしくない場合は、[申請フォーム](https://docs.google.com/forms/d/e/1FAIpQLScrnC-_A7JFs4LbIuzevQ_78hVERlNqqCPCt3d8XqnKOfdRdQ/viewform)からオプトアウトの申請も可能です。

### 出力結果は必ずしも正しいとは限らない

これはChatGPTに限った話ではないですが、AIの出力したテキストは正確な情報とは限りません。その例の1つが[ハルシネーション](hallucination)です。ChatGPTに出力結果を利用する場合、

### コンテンツに対する権利と責任はユーザーにある

ChatGPTを提供している[OpenAIの利用規約](https://openai.com/policies/terms-of-use)には、以下のように記載されています。

> (a) Your Content. You may provide input to the Services (“Input”), and receive output generated and returned by the Services based on the Input (“Output”). Input and Output are collectively “Content.” As between the parties and to the extent permitted by applicable law, you own all Input. Subject to your compliance with these Terms, OpenAI hereby assigns to you all its right, title and interest in and to Output. This means you can use Content for any purpose, including commercial purposes such as sale or publication, if you comply with these Terms. OpenAI may use Content to provide and maintain the Services, comply with applicable law, and enforce our policies. You are responsible for Content, including for ensuring that it does not violate any applicable law or these Terms.
>
> ---
>
> 引用：[Terms of use](https://openai.com/policies/terms-of-use)

ChatGPTに入力したコンテンツと出力したコンテンツに対する権利はユーザーにあります。そのため、ChatGPTの出力結果をユーザーは**ユーザーの責任の下**自由に利用できます。ただし、利用の結果発生した問題もすべてユーザー自身の責任となります。

## まとめ

ChatGPTは誰でも無料でAIとチャット形式の会話ができる便利なサービスです。活用方法によっては業務効率化など、さまざまな面で活用が期待できます。

ただし、注意点は常に意識して利用するようにしましょう。とくに業務上での利用では大きな問題になる可能性もあるので、しっかりと[利用規約](https://openai.com/policies/terms-of-use)や[プライバシーポリシー](https://openai.com/policies/privacy-policy)を理解して利用しましょう。
