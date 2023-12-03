# ChatGPT Plugin

:::info
この記事は[ChatGPT Plugin \| AI Study Notebook](https://yuheifujita.github.io/ai-study-notebook/notebook/chat-gpt-plugin.html)から移植しました。
:::

こちらはChatGPT上で利用できるPluginを実装するハンズオンです。

今回はChatGPTからタスク管理アプリを操作するPluginを実装しつつ、ChatGPT Pluginを実装する上で必要無学んでいきます。

## 事前準備

このハンズオンを実施するにあたって、以下の準備が必要です。

|事前準備|内容|
|---|---|
|ChatGPT Plus|Pluginを実行するにはChatGPT Plusが必要です。|
|ChatGPT Plugin waitlist|現在（2023/06/12）は[waitlist](https://openai.com/waitlist/plugins)の申請が必須です。|
|nodeの実行環境|今回はnode.jsでPluginを実装するので、node.jsの実行環境が必要です。|

## ChatGPT Pluginとは

ChatGPT Pluginは、OpenAIが開発した人工知能に基づいたテキスト生成システム、ChatGPTを他のプログラムやアプリケーションに組み込むためのツールです。このプラグインを使うと、たとえばウェブサイトやゲーム、モバイルアプリなどにChatGPTの機能を追加できます。これにより、それらのアプリケーションはユーザーとの対話や自動テキスト生成といったことが可能になります。質問に答えたり、物語を作成したり、さまざまな情報を検索したりできます（とChatGPTが言ってました）。

## ChatGPT Pluginで必要な要素

ChatGPT Pluginを実装するには、以下の要素が必要です。

### Plugin manifest

ここにはChatGPT Pluginの概要や、その他の情報が記載を記載します。これは、 `/.well-known/ai-plugin.json` で公開する必要があります。

> [Getting Started \- OpenAI API](https://platform.openai.com/docs/plugins/getting-started/plugin-manifest)

### OpenAPI definition

ChatGPT PluginはWeb APIとして実装します。そのWeb APIをChatGPTが理解するために必要となるのがOpenAPI Specificationです。

どこに公開するかはmanifestの `api.url` で指定します。

> [Getting Started \- OpenAI API](https://platform.openai.com/docs/plugins/getting-started/openapi-definition)

### Web API

OpenAPI definitionで定義したWeb APIを実装します。

ChatGPTは、OpenAPI definitionで定義したWeb APIを呼び出して利用します。

## 実装

必要な要素がわかったところで、実装を行っていきます。

### 環境構築

まずは環境構築を行います。

任意のディレクトリを作成し、そのディレクトリに移動します。

```bash
mkdir chatgpt-plugin && cd chatgpt-plugin
```

npmプロジェクトを初期化します。

```bash
npm init -y
```

今回は、以下のライブラリを利用します。

```bash
npm install body-parser cors express sqlite3
```

```bash
npm install -D @types/cors @types/express @types/node @types/sqlite3 typescript
```

TypeScriptの設定ファイルを作成します。

```bash
npx tsc --init
```

### ディレクトリ

ここまでで以下のようなディレクトリ構成になっているはずです。

```bash
chatgpt-plugin
├── node_modules
├── package-lock.json
├── package.json
└── tsconfig.json
```

これを以下のように`src`ディレクトリを作成します。

```bash
chatgpt-plugin
├── node_modules
├── package-lock.json
├── package.json
├── src
│   ├── ai-plugin.json
│   ├── openapi.yaml
│   └── server.ts
└── tsconfig.json
```

### Plugin manifestの作成

まずはChatGPT Pluginのmanifestを定義します。`src/ai-plugin.json`を以下のように入力してください。

```json{3-6,12}
{
  "schema_version": "v1",
  "name_for_human": "TODO List",
  "name_for_model": "todo",
  "description_for_human": "Manage your TODO list. You can add, remove and view your TODOs.",
  "description_for_model": "Help the user with managing a TODO list. You can add, remove and view your TODOs.",
  "auth": {
    "type": "none"
  },
  "api": {
    "type": "openapi",
    "url": "http://localhost:3000/openapi.yaml"
  },
  "logo_url": "http://localhost:3000/logo.png",
  "contact_email": "support@example.com",
  "legal_info_url": "http://www.example.com/legal"
}
```

ここで注目してほしいのが3−6行目です。ここではChatGPT Pluginの説明を書いていますが、`_for_human`と`_for_model`という2つの項目があります。これは「ユーザーが読む」ためのテキストと「ChatGPTが読む」ためのテキストが分かれていることを意味します。

### OpenAPI definitionの定義

Manifestができたら、次にOpenAPI definitionを定義します。`src/openapi.yaml`を以下のように入力してください。

:::details src/openapi.yaml

```yaml{13}
openapi: 3.0.1
info:
  version: 1.0.0
  title: Todo App API
  description: A simple API for managing Todos

servers:
  - url: http://localhost:3000

paths:
  /todos:
    get:
      operationId: getTodoList
      summary: List all todos
      responses:
        '200':
          description: An array of todos
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Todo'
    post:
      operationId: createTodo
      summary: Create a new todo
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                title:
                  type: string
              required:
                - title
      responses:
        '200':
          description: The created todo
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: integer

  /todos/{id}:
    parameters:
      - in: path
        name: id
        schema:
          type: integer
        required: true
        description: The todo ID
    put:
      operationId: updateTodo
      summary: Update a todo
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                title:
                  type: string
                status:
                  type: string
                  enum: [完了, 未完了]
      responses:
        '200':
          description: The todo was updated
    delete:
      operationId: deleteTodo
      summary: Delete a todo
      responses:
        '200':
          description: The todo was deleted

  /todos/{id}/complete:
    parameters:
      - in: path
        name: id
        schema:
          type: integer
        required: true
        description: The todo ID
    put:
      operationId: completeTodo
      summary: Mark a todo as completed
      responses:
        '200':
          description: The todo was marked as completed

components:
  schemas:
    Todo:
      type: object
      properties:
        id:
          type: integer
        created_at:
          type: string
          format: date-time
        title:
          type: string
        status:
          type: string
          enum: [完了, 未完了]
```

:::

ここで重要なのは、13行目などで定義している`operationId`です。これはChatGPT PluginのAPIを呼び出す際に使う識別子です。この値は必須ではないですが、ChatGPTに読み込ませるときに警告が表示されるため、設定しておくことをオススメします。

また、各`description`についてもChatGPTが読むことを前提として書く必要があります。具体的にどのような表現が適しているかは以下のドキュメントを参照してください。

> [Getting Started \- OpenAI API](https://platform.openai.com/docs/plugins/getting-started/best-practices)

### APIの実装

ここまで準備ができたら実際にAPIの実装を行います。

:::details src/server.ts

```ts{23-27}
import express from "express";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";
import path from "path";
import cors from "cors";

// Initialize express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = new sqlite3.Database("todos.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL,
      title TEXT NOT NULL,
      status TEXT NOT NULL
    );`);
});

app.use(
  "/.well-known/ai-plugin.json",
  express.static(path.join(__dirname, "ai-plugin.json"))
);
app.use("/openapi.yaml", express.static(path.join(__dirname, "openapi.yaml")));

app.get("/todos", (req, res) => {
  db.all("SELECT * FROM todos", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.post("/todos", (req, res) => {
  const { title } = req.body;
  const createdAt = new Date().toISOString();
  const status = "active";
  db.run(
    `INSERT INTO todos (created_at, title, status) VALUES (?, ?, ?)`,
    [createdAt, title, status],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      }
      db.get(`SELECT * FROM todos WHERE id = ?`, [this.lastID], (err, row) => {
        if (err) {
          res.status(500).json({ error: err.message });
        }
        res.json(row);
      });
    }
  );
});

app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  db.get(`SELECT * FROM todos WHERE id = ?`, [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    }
    res.json(row);
  });
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  db.run(
    `UPDATE todos SET title = ? WHERE id = ?`,
    [title, id],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      }
      db.get(`SELECT * FROM todos WHERE id = ?`, [id], (err, row) => {
        if (err) {
          res.status(500).json({ error: err.message });
        }
        res.json(row);
      });
    }
  );
});

app.put("/todos/:id/complete", (req, res) => {
  const { id } = req.params;
  db.run(
    `UPDATE todos SET status = "completed" WHERE id = ?`,
    [id],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      }
      db.get(`SELECT * FROM todos WHERE id = ?`, [id], (err, row) => {
        if (err) {
          res.status(500).json({ error: err.message });
        }
        res.json(row);
      });
    }
  );
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM todos WHERE id = ?`, [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    }
    res.json({ id: this.changes });
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

```

:::

ポイントは、23-27行目です。これはAPIではなく先ほど定義したManifestファイルとOpenAPIファイルを返すための処理です。

### 動作確認

ここまでできたら、Web APIとしては実装完了です。実際にPostmanなどでAPIを呼び出してみましょう。以下のコマンドで`localhost:300`としてローカルサーバーが起動します。

```bash
npx tsc && node src/server.js
```

APIの呼び出し方法はOASファイルを参照すればわかるはずです。

### ChatGPT Pluginのインストール

ChatGPT Pluginが実装できたら、実際にChatGPTにインストールしてみましょう。少々手順が複雑ですが、以下の手順でインストールできます。

1. ChatGPTにログインします。
2. **New Chat**から新しいチャットを作成します。
3. Modelから**GPT-4**を選択し、**Plugin**を選択します。
4. 一番下に表示される**Plugin Store**をクリックします。
5. **Develop your own plugin**をクリックします。
6. ドメインの入力を求められるので、今回は`localhost:8080`を入力します。
7. **Find manifest file**をクリックするとチェックが実行されます。

これでChatGPTにPluginがインストールできました。あとは、実際にこのPluginを有効にしてチャットを開始してみましょう。

また、動作することができたら自由にカスタマイズしてみてください。

## まとめ

以上でChatGPT Pluginの最低限の実装が完了しました。実際にストアに公開する場合はさらに設定などが必要になりますが、今回は割愛します。

より詳しいことを学びたい場合は、以下の公式ドキュメントを読んてみてください。

> [Introduction \- OpenAI API](https://platform.openai.com/docs/plugins/introduction)
