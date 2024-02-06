# Google Apps Script - Trigger

GASを実行するためには、 **Trigger** を設定する必要があります。このTriggerを設定することで、さまざまなイベントをトリガーとして任意のGASの実行ができます。

## TriggerによるGASの実行

GASの編集画面からでもGASは実行できますが、通常はTriggerを設定することでGASを実行します。

GASにTriggerを設定することで、特定の操作をトリガーにしてGASの関数を実行できます。

Triggerの設定には大きく分けで3種類の方法があります。

::: info
ここでは概要のみを紹介し、より具体的な設定方法は[Triggerの種類](#triggerの種類)で説明します。
:::

### 手動での登録

手動でTriggerを登録する方法です。設定は以下の手順で行えます。

1. GASの編集画面を開く
2. サイドメニューから **トリガー** を選択
3. 右下の **トリガーを追加** をクリック
4. トリガーの設定を行う

### スクリプトでの登録

GASのTriggerはGASを使って動的に設定することもできます。これには、 [`ScriptBuilder`](https://developers.google.com/apps-script/reference/script/trigger-builder)を利用します。

以下は、 `myFunction()` という関数を2013年10月31日に実行するTriggerを設定する例です。

```javascript
ScriptApp.newTrigger('myFunction')
  .timeBased()
  .atDate(2013, 10, 31)
  .create();
```

### Simple Triggersによる登録

GASの関数には、いくつか特別な関数があります。

たとえば、 `onOpen()` という関数は、紐づいたファイルが開かれたときに実行される関数です。

```javascript
function onOpen(e) {
  // ファイルが開かれたときに実行される関数
}
```

## Triggerの種類

Triggerにはいくつかの種類があります。

すべてを説明するとかなりの数になるので、今回はスプレッドシートに紐づいたGASについて説明します。

::: info
スプレッドシートに紐づいたGASとは、任意のスプレッドシートに紐づいたGASを指します。

任意のスプレッドシートのメニューにある **拡張機能** > **Apps Script** からGASを作成すると、スプレッドシートに紐づいたGASが作成されます。
:::

### スプレッドシート起動時

これはスプレッドシートを開くたびに実行されるTriggerです。

初期化処理など、毎回実行したい処理に利用します。

手動で設定する場合、[手動での登録](#手動での登録)を以下のように設定します。

| 項目 | 設定値 |
| --- | --- |
| 実行する関数を選択 | 実行したい関数を選択 |
| 実行するデプロイを選択 | 基本は **Head** |
| イベントのソースを選択 | **スプレッドシートから** |
| イベントの種類を選択 | **起動時** |

GASを使って登録する場合、以下のようなコードを実行します。

```javascript
ScriptApp
  .newTrigger('実行したい関数名') // 実行したい関数名を指定
  .forSpreadsheet(SpreadsheetApp.getActive()) // スプレッドシートを指定
  .onOpen() // 起動時に実行
  .create(); // トリガーを作成
```

また、Simple Triggersを利用する場合は、以下のように記述します。

```javascript
function onOpen(e) {
  // 起動時に実行したい処理
}
```

::: tip Event Objects
起動時に実行される関数に以下のような引数をしていると、Event Objectが渡されます。

```javascript
function onOpen(e) {
  // eにEvent Objectsが渡される
}
```

この引数 `e` には、起動時に関する情報が含まれています。

詳しくは、[Event Objects  \|  Apps Script  \|  Google for Developers](https://developers.google.com/apps-script/guides/triggers/events?hl=en#Google%20Sheets-events)を参照してください。
:::

### 時間ベースの実行

これは、指定した時間に実行されるTriggerです。

指定した時間とは、毎日の特定の時間や、特定の1回限りの日時などです。

Batch処理など、定期的に実行したい処理に利用します。

手動で設定する場合、[手動での登録](#手動での登録)を以下のように設定します。

| 項目 | 設定値 |
| --- | --- |
| 実行する関数を選択 | 実行したい関数を選択 |
| 実行するデプロイを選択 | 基本は **Head** |
| イベントのソースを選択 | **時間主導型** |
| 時間ベースのトリガーのタイプを選択 | 設定したい時間の種類を選択 |
| その他の設定 | 設定したい時間を選択 |

GASを使って登録する場合、以下のようなコードを実行します。

```javascript
ScriptApp
  .newTrigger('実行したい関数名') // 実行したい関数名を指定
  .timeBased() // 時間主導型のトリガーを指定
  .atHour(10) // 10:00~11:00に実行
  .everyDays(1) // 1日ごとに実行
  .create(); // トリガーを作成
```

これにはSimple Triggersは利用できません。

::: tip 時間指定の実行時間範囲
上記のように `atHour()` で時間を指定すると、その時間から1時間の間に実行されます。

たとえば、 `atHour(10)` とすると、10:00~11:00の間に実行され、これ以上細かくたとえば「10:00ちょうどに毎日実行」という指定はできません。

もしこのような指定をしたい場合、以下のように `at()` を利用したTriggerを毎日設定します。

```javascript
const date = new Date(); // 現在の日時を取得
date.setDate(date.getDate() + 1); // 翌日の日付にする
date.setHours(10); // 10時に設定
date.setMinutes(0); // 0分に設定
date.setSeconds(0); // 0秒に設定
date.setMilliseconds(0); // 0ミリ秒に設定
ScriptApp
  .newTrigger('実行したい関数名')
  .timeBased()
  .at(date) // Dateオブジェクトで実行日時を指定
  .create();
```

:::

### カスタムメニューを利用した実行

GASにはスプレッドシートのメニューにカスタムメニューを追加することができます。

これを利用すると、カスタムメニューから任意のGASを実行することができます。

また、これはGASでしか設定できないTriggerです。

```javascript
function onOpen(e) { // Simple Triggersで起動時に実行されるよう設定
  SpreadsheetApp
    .getUi() // UIを操作するためのmethod
    .createMenu('カスタムメニュー') // 「カスタムメニュー」という名前のメニューを作成
    .addItem( // メニューに項目を追加
      '実行', // メニューに表示する名前
      '実行したい関数名' // 実行したい関数名
    )
    .addToUi(); // UI（スプレッドシートのメニュー）に追加
}
```

## まとめ

Triggerを設定することで、さまざまなイベントをトリガーにしてGASの関数を実行できます。

実際に業務などでGASを利用する場合には、毎回編集画面から実行するわけにもいかないので、今回紹介したTriggerを設定して効率よくGASを実行しましょう。

- [Simple Triggers  \|  Apps Script  \|  Google for Developers](https://developers.google.com/apps-script/guides/triggers?hl=en)
- [Class TriggerBuilder  \|  Apps Script  \|  Google for Developers](https://developers.google.com/apps-script/reference/script/trigger-builder?hl=en)
