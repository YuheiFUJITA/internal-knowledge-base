# Google Apps Script 基礎

ここでは、Googleのサービスを操作できるGoogle Apps Script（以下、GAS）の基礎を学びます。

GASをマスターすることで、Googleサービス間の連携や自動化を簡単に実現できます。

## GASとは

GASとは、Googleが提供しているスクリプト言語です。GASを使うことで、Googleのサービスを操作することができます。

GASが対応ししているサービスは多岐にわたるためすべてを紹介しきれませんが、代表的なものでいうと以下のようなサービスがあります。

- [Google カレンダー](https://developers.google.com/apps-script/reference/calendar)
- [Google ドライブ](https://developers.google.com/apps-script/reference/drive)
- [Google フォーム](https://developers.google.com/apps-script/reference/forms)
- [Gmail](https://developers.google.com/apps-script/reference/gmail)
- [スプレッドシート](https://developers.google.com/apps-script/reference/spreadsheet)

## Getting Started

GASを使うには、Googleアカウントが必要です。Googleアカウントを持っていない場合は、[Googleアカウントの作成](https://accounts.google.com/signup)を行ってください。

Googleアカウントでログインした状態で [自分のプロジェクト \- Apps Script](https://script.google.com/home) にアクセスすると、現在作成しているGASプロジェクトの一覧が表示されます。

新規にプロジェクトを作成する場合、画面左上の「新しいプロジェクト」から作成できます。

まずは簡単なスクリプトとして、以下のものを実行してみましょう。

```javascript
function sayHello() {
  console.log('Hello World!');
}
```

元々あるソースコードを上記のものに置き換え、保存（ <kbd>Cmd</kbd> / <kbd>Ctrl</kbd> + <kbd>S</kbd> ）してください。

すると、上部の**実行**や**デバッグ**の隣のプルダウンから `sayHello` を選択肢てください。

その後、**実行**をクリックすると、コンソールに `Hello World!` と表示されるはずです。

これで、GASの新規プロジェクト作成から最小限のスクリプトを実行できました。

::: warning 関数名が出てこない場合
新しく作成した関数や、関数名を変更した関数はファイルを保存するまでプルダウンに出てきません。

関数名が出てこない場合は、一度保存を実行してください。
:::

::: info
ここに出てくるソースコードは[サンプルコード](https://script.google.com/d/1So_4UbgukdQ06NeKpqZBEyZLHzLa-8wb3j0wJec1F5NQYxwlD9Oz3rr4/edit?usp=sharing)として公開しています。

便宜上それぞれのサンプルコードを1つの関数にまとめていますが、必ずしも関数内でなければならないわけではありません。また、より細かく関数を分けることもできます。
:::

## GASを使った操作

それでは、GASを使ってGoogleサービスを操作してみましょう。

今回は代表的なサービスであるGoogleカレンダー、Gmail、スプレッドシートを操作してみます。

::: tip 「承認が必要です」と表示される場合
GASを実行しようとすると、たまに「承認が必要です」というダイアログが表示されることがあります。

このダイアログは、GASがGoogleサービスを操作するための権限を求めているものです。自分で作成したスクリプトであれば基本的には問題ないので、画面にしたがって承認してください。

ただし、**ネット上などから拾ってきたソースコード**など、内容を自身で把握していないものの場合、悪意のあるソースコードに権限を付与してしまう可能性があります。必ずソースコードを実行するときには自身で内容を確認し、権限を付与するかどうかを判断してください。
:::

### Googleカレンダー

GASでGoogleカレンダーを操作すると、予定の取得や予定の作成などが行なえます。

GASでGoogleカレンダーを操作するには、[Calendar Service](https://developers.google.com/apps-script/reference/calendar) を利用します。

#### 予定の取得

Googleカレンダーから予定を取得するには、 `CalendarApp` が提供している [`getEvents()`](https://developers.google.com/apps-script/reference/calendar/calendar-app#getEvents(Date,Date)) を利用します。

`getEvents()` の返り値は指定した範囲内の予定の配列になっているので、これを1件ずつ処理することで予定を取得できます。

```javascript
function getEvents() {
  // 今日の予定を取得するため、開始（今日の00:00）と終了（明日の00:00）を指定
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  // 指定範囲内の予定を取得
  const events = CalendarApp.getEvents(start, end);

  // 取得した予定を1件ずつ処理
  for (let i = 0; i < events.length; i++) {
    // 予定のタイトルを取得
    const title = events[i].getTitle();
    console.log(title);
  }
}
```

#### 予定の作成

Googleカレンダーに予定を作成するには、 `CalendarApp` が提供している [`createEvent()`](https://developers.google.com/apps-script/reference/calendar/calendar-app#createEvent(String,Date,Date)) を利用します。

以下のコードを実行後、Googleカレンダーを開くと、今日の12:00に予定が追加されています。

```javascript
function createEvent() {
  // 今日の12:00~13:00に予定を作成するため、開始日時と終了日時を指定
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0);
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 0);

  // 予定をカレンダー上に作成
  CalendarApp.createEvent(
    'GASから作成',
    start,
    end
  )
}
```

### Gmail

GASでGmailを操作すると、受信したメールの取得やメールの送信などが行なえます。

GASでGmailを操作するには、[Gmail Service](https://developers.google.com/apps-script/reference/gmail) を利用します。

#### メールの取得

Gmailの受信トレイにあるメールを取得するには、 `GmailApp` が提供している [`getInboxThreads()`](https://developers.google.com/apps-script/reference/gmail/gmail-app#getinboxthreads) を利用します。

Gmailのメールはスレッド形式で管理されているので、まずスレッドを取得し、その後にスレッドに紐づいているメールを取得します。

::: details スレッドとメッセージ
イメージとしてはこのような構成になっています。

厳密には異なりますが、2次元配列をイメージするとわかりやすいかもしれません。

```md
- スレッド1
  - メール1
  - メール2
- スレッド2
  - メール3
  - メール4
```

:::

```javascript
function showSubjects() {
  // 受信トレイにあるメールのスレッド一覧を取得
  const threads = GmailApp.getInboxThreads();

  // スレッドを1件ずつ処理
  for (let i = 0; i < threads.length; i++) {
    // スレッドに紐づいているメール一覧を取得
    const messages = threads[i].getMessages();

    // メールを一軒ずつ処理
    for (let j = 0; j < messages.length; j++) {
      // メールの件名を取得
      const subject = messages[j].getSubject();
      // 件名を標準出力
      console.log(subject);
    }
  }
}
```

#### メールの送信

メールの送信はもっと簡単です。

`GmailApp` が提供している [`sendEmail()`](https://developers.google.com/apps-script/reference/gmail/gmail-app#sendemailrecipient,-subject,-body) を利用します。

```javascript
function sendEmail() {
  GmailApp.sendEmail(
    "送信先のメールアドレス", // 任意のメールアドレスに変更してください
    "GASから送信",
    "このメールはGASから送信されています。"
  )
}
```

### スプレッドシート

GASでスプレッドシートを操作すると、セルの値の取得や変更ができます。

::: info スプレッドシートID

この後のサンプルコードを実行するには事前にスプレッドシートのファイルをGoogleドライブ上に作成しておく必要があります。

スプレッドシートのIDはGASからでも取得できますが、スプレッドシートのURLからも取得できます。

以下のようなURLのスプレッドシートがある場合、IDは `sQ1Cy5eWWxe4hWPo2epnKb7YSAmGRiFLpMiVOQR0zkpi` の部分になります。

```text
https://docs.google.com/spreadsheets/d/sQ1Cy5eWWxe4hWPo2epnKb7YSAmGRiFLpMiVOQR0zkpi/edit#gid=0
```

`スプレッドシートID` と言われたら、上記のものを指します。
:::

#### セルの値の取得

スプレッドシートの任意の範囲のセルの値を取得するには、 `SpreadsheetApp` が提供している [`getValues()`](https://developers.google.com/apps-script/reference/spreadsheet/range#getvalues) を利用します。

この結果は2次元配列で返ってきます。

```javascript
function getSpreadsheetValues() {
  // スプレッドシートを取得
  const ss = SpreadsheetApp.openById('スプレッドシートID'); // 任意のスプレッドシートIDに置き換えてください
  // 取得したスプレッドシートにある任意のシートを取得
  const sheet = ss.getSheetByName('シート1');
  // 取得したシートの任意のセルの範囲を取得
  const range = sheet.getRange('A1:B2');
  // 取得した範囲のセルの値を取得
  const values = range.getValues();
  console.log(values)
}
```

::: details 範囲指定
上記のサンプルコードでは `A1:B2` のようなスプレッドシートの関数と同じような書き方をしましたが、 `getRange()` には他にも以下のような書き方があります。

```javascript
// 1行1列目から2行2列取得（A1:B2と同等）
sheet.getRange(1, 1, 2, 2);
// R1C1表記で1行1列目から2行2列取得（A1:B2と同等）
sheet.getRange('R1C1:R2C2');
```

:::

::: details 取得した値のデータ型
`getValues()` で取得した値は、セルの値によってデータ型が変わります。

| セルの値 | GASで取得した場合のデータ型 |
|---|---|
| 数値 | `Number` |
| 文字列 | `String` |
| 空（未入力） | `''` |
| 日付 | `Date` |
| 真偽値（ `TRUE` / `FALSE` ）<br>関数が真偽値を返した場合<br>チェックボックス | `Boolean` |

:::

#### セルに値を挿入

取得ではなく挿入の場合は、 [`setValues()`](https://developers.google.com/apps-script/reference/spreadsheet/range#setvaluesvalues) を利用します。

取得時の返り値が2次元配列だったように、2次元配列を引数に渡すことで複数のセルに値を挿入できます。

```javascript
function getSpreadsheetValues() {
  // スプレッドシートを取得
  const ss = SpreadsheetApp.openById('スプレッドシートID'); // 任意のスプレッドシートIDに置き換えてください
  // 取得したスプレッドシートにある任意のシートを取得
  const sheet = ss.getSheetByName('シート1');
  // 取得したシートの任意のセルの範囲を取得
  const range = sheet.getRange('A1:B2');
  // 挿入する値を2次元配列で指定
  const values = [
    ['A1', 'B1'],
    ['A2', 'B2']
  ];
  // 取得した範囲のセルに値を挿入
  range.setValues(values);
}
```

::: details 挿入したデータ型
`setValues()` で挿入した値は、データ型によってセルの表示が変わります。

| 挿入する値のデータ型 | セルの表示 |
|---|---|
| `Number` | 数値 |
| `String` | 文字列 |
| `''`<br>`null`<br>`undefined` | 空（未入力） |
| `Date` | 日付 |
| `Boolean` | 真偽値（ `TRUE` / `FALSE` ） |
| その他 | 文字列化された値 |

とくにその他の値については、元のオブジェクトによって結果が変わるので注意が必要です。
以下はその一例ですが、基本的に利用できるような値には基本的にはなりません。

```javascript
class Foo {
  constructor() {
    this.bar = 'bar';
  }
}

const foo = new Foo();

SpreadsheetApp
  .getActiveSpreadsheet()
  .getSheetByName('シート1')
  .getRange('A1')
  .setValue(foo); // => `"{bar=bar}"` がA1に挿入される
```

:::

## まとめ

以上がGASによる基本的なGoogleサービスの操作です。

今回は簡単のために各サービス単体・単一機能のみにフォーカスして説明しましたが、実際はこれらを組み合わせることでより高度な操作が可能になります。

他のサービスなどについては[Reference overview  \|  Apps Script  \|  Google for Developers](https://developers.google.com/apps-script/reference)を参照してください。
