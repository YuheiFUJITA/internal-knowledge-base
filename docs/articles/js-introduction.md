# JavaScript 基礎

ここでは、Google Apps Scriptなどでも利用されているJavaScriptを基礎から学びます。

## JavaScriptとは

JavaScriptは、ウェブページを動的にするためのプログラミング言語です。HTMLとCSSで作られた静的なページに、ユーザーの操作に応じた変化や動きを加えられます。

たとえば、ボタンをクリックしたときに何かが表示されたり、データをリアルタイムに更新したりするのに使われます。簡単な文法で学びやすく、インターネット上で多くのリソースが利用できます。

また、Google Apps Script（GAS）もJavaScriptをベースにしています。GASは、GoogleのサービスをJavaScriptで操作できるようにしたものです。GASを使うと、Googleのサービスを自動化したり、カスタマイズしたりできます。

## JavaScriptの基本

JavaScriptの基本的な文法を学びます。

::: info console.log()
なお、途中に出てくる `console.log()` というのは画面にテキストを表示するためのものです。

また、 `console.log()` で画面にテキストを表示することを「標準出力」といいます。
:::

::: info Go to Playgound
`Go to Playgound` というリンクを開くと実際にコードを実行できるページに飛びます。

<kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>Enter</kbd> で実行でき、自由に編集もできます。実際に試してみてください。
:::

::: info Deep Dive
途中で `Deep Dive` というものが出てきますが、クリックするとより詳しい説明が書かれています。必要に応じて読んでみてください。
:::

::: info
途中で `Exam` というものが出てきますが、クリックすると問題が出題されます。理解度チェックのための問題なので、実際に解いてみてください。
:::

## 四則演算

JavaScriptでは、四則演算を行うことができます。

プログラミングでは、加算を表す `+` などは「演算子」と呼ばれます。

```js
/* 加算 */
console.log(1 + 1); // 2

/* 減算 */
console.log(2 - 1); // 1

/* 乗算 */
console.log(2 * 3); // 6

/* 除算 */
console.log(10 / 2); // 5

/* 剰余 */
console.log(10 % 3); // 1

/**
 * 複数の項がある場合、乗算・除算が先に行われ、そのあと加算・減算が行われます。
 * その後、左から順に計算されます。
 * この場合、 `2 * 3` が先に計算され、そのあとに `1 + 6` が計算されます。
 */
console.log(1 + 2 * 3); // 7

/** 
 * `()` がある場合、 `()` の中が先に計算されます。
 * この場合、 `(1 + 2)` が先に計算され、そのあとに `3 * 3` が計算されます。
 */
console.log((1 + 2) * 3); // 9
```

[Go to Playgound](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/PQKgBIBUqOneYsBQBjA9gOwM7IDYFMB0WyA5gBQCMYA1GGQJQDcYwwYATPPKGINh2McSaTLgLESrMAFoaDJizIcugdTk+CFBmz5CpceADMM5mABsC8IBM0lQPXCt5AAxM2BlgFZTYQA5KgTXlYqwRpFSMgcAUjB9RkN5ThAQeFgwQHBIwAdTQDsGQFAMwBkGQCEGQGiGQBYNQAgVQEAGZUBvhgtMwAlFQGsGQBkIwHiGQBiGYsBdBlTswAsGaDLeTMamwD8GQE0GQCAGePB2wBj9YsAz3UBpBkBIhkAwDJrACCioQFUGIbGJsEBlBlSi4rAAAx1w07Bq9a2W9q6as4pqIyvMje2R8d8rIU1RC82AkIrIwAB2UzgPanEi0d55Y5nOFXVKAWjkbp8dj9wIckbCgax4ddali2h1Ok9TroQe8sd8Jn5rADSOQqE4Qc4wABOIA)

::: details Deep Dive: 演算子の優先順位
実際には他にもさまざなな演算子や順番のルールがあります。詳しくは[演算子の優先順位 \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)を参照してください。
:::

::: warning Exam
以下の計算をJavaScriptで計算し、計算結果を標準出力せよ。

1. $1 + 2 \times 3$
2. $100 \div \{(2 + 3) \times 2\}$
3. $\frac{2}{5}$
4. $2^8$
5. $\frac{3}{6} \div \frac{2}{10}$

[解答例](https://www.typescriptlang.org/ja/play?noImplicitAny=false&filetype=js#code/PQKgBAjGLAUAxgewHYGdEBsCmA6DiBzACigGowAmaMAZgEoBuWWUS6OJNTXfYiABn5hgYIkSrl61CnUbNWNdghTpseQuOFgArHJbgALEs6qeGquAttL02zct15IELGqBSJUDHka-CBwY0AOpoAQUYDp3oD2DGAABs7hYIBJDID+8oASDIB+DICaDIBADN4cKtzqxBbgAByO+jrG2Wq8YooiAGx0WpoiArJAA)
:::

## 変数

JavaScriptには値を一時的に保存しておくための**変数**というものがあります。変数は `const 変数名 = 値` という形で宣言します。これを「変数宣言」と呼び、変数に値を保存することを「代入」と呼びます。

これは、数値や文字列などの値を保存することができます。変数には名前をつけることができ、その名前を使って値を取り出したり、値を変更したりすることができます。

また、変数同士で四則演算などを行うこともできます。

```js
/* 変数 `a` に `1` を代入 */
const a = 1;

/* 変数 `b` に `2` を代入 */
const b = 2;

/* 変数 `c` に `a` と `b` を加算した値を代入 */
const c = a + b;

/* 変数 `d` に `1 + 2` を代入 */
const d = 1 + 2;

/* 変数 `a` の値を表示 */
console.log(a); // 1

/* 変数 `b` の値を表示 */
console.log(b); // 2

/* 変数 `a` と `b` を加算した値を表示 */
console.log(a + b); // 3

/* 変数 `c` の値を表示 */
console.log(c); // 3

/* 変数 `d` の値を表示 */
console.log(d); // 3
```

[Go to Playgound](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/PQKgBIkJqA6mYAYIazIawY4EYmCSGQx3KFNFMIwAUAMYD2AdgM4AuY8YAvGGgNxFGiQywBGSqWACYseAsXLU6vJmCHtO4aHBIC4iMIAsGOPzCZABUqB070DqDIH0GQCQKOfIVKVaYErIYBqMLwVdlsACZrYaMFcRPTEbSXtvWQCgjyUeDUA7BktACwjALk9xW2oyABsAUwA6bLIAcwAKeABKVjBgYBYOTx5dJMw0jPCcgqKy3iqauqEGuPUkbT4sIzMU9LC7TsKS8sC3PtqwAGYh7hUkFrbZrLyFspJVus3FbZ9d6fa5o+7S7zONoA)

::: tip 変数名
サンプルコードでは変数名に `a` や `b` など単純なものを利用していますが、実際にはどのよう用途の変数なのかわかるような名前をつけるようにしましょう。

以下の記事はPython向けですが、同様なことがJavaScriptでも言えます。
[【日本人エンジニア必携】英語命名規則の決定版 \#Python \- Qiita](https://qiita.com/hironori_narita/items/4b06db0953053d41c4a0)
:::

::: details Deep Dive: `const` / `let` / `var`
今回は `const` で変数宣言しましたが、他にも `let` や `var` を使って以下のように変数宣言することもできます。

```js
const a = 1;
let b = 2;
var c = 3;
```

`const` は一度変数宣言すると値を変更できません（これを「再代入不可」といいます）。それに対して `let` はあとから何度でも値を上書きできます。

基本的には `const` を使い、あとから値を変更したい場合のみ `let` を使いましょう。

また、 `var` は `let` に似ていますが細かい部分で異なります。 `const` や `let` がまだなかった頃は `var` が使われていましたが、現在では非推奨なものになります。詳しくは[var \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/var)を参照してください。
:::

::: warning Exam
以下の指示に従い、JavaScriptを書け。

1. 変数 `a1` に `1` を代入し、標準出力せよ。
2. 変数 `a2` に $2 \times 3$ の結果を代入し、標準出力せよ。
3. 変数 `a3` に `10` 、変数 `b3` に `5` を代入し、その2つを乗算した結果を標準出力せよ。
4. 変数 `a4` に `1` 、変数 `b4` に `2` を代入し、その2つを加算した結果を変数 `a4` に代入しなおした結果を標準出力せよ。

[解答例](https://www.typescriptlang.org/ja/play?noImplicitAny=false&filetype=js#code/PQKgBAjGLAUAxgewHYGcAuYCGUC8kBuBFVRAGwFMA6MxAcwAocBKI2UMAJmjiTUyzd83cAGYifUpRr0mnVrHZiexftlFh8EAAwSSmAEYb8AVj1py1WoywbwRhUpCxoYQKRKgY8iX4QMoMgGIZAewZAGAZAMCVAJyVAY7lAU0VAWAZACwZAEQZAMQZAMYZAeoZAaYZAYYY0wCSGQEolQApXQHUGQH0GQCCGQDsGQHMGQE0GQCAGbzAAC3R0AAdUAC5gYAATCgA3Clp2igAnKgBbRAAvAEsyMiwqRHG6YAArLH7EeFRgAHUKA2AAKSxBrABleHH59vRgACUKADMJimR4CmAAeTG4yw6DWBwAIhQMOMAK7wdDQ+7IOgAfSwqFQ8zoyCmX3Q3l4+jAAG1bBAADRgIwQAC6mmJOgpJmp5ikVlkpNcVNYYEUHAALCpKAIBVoWYYRVwiFgJVAANSS1SsmQ2PmsIA)
:::

## 基本的なデータ型

JavaScriptには、値の種類によって「データ型」というものがあります。

今回は代表的な3つのデータ型を紹介します。

### Number

これは数値を表すデータ型です。四則演算などを行うときに使います。

```js
/* 整数の `1` */
const a = 1;

/* 小数の `1.5` */
const b = 1.5

/* 負の数の `-1` */
const c = -1;

/* 整数と小数の計算 */
console.log(a + b) // 2.5

/* 整数と負の数の計算 */
console.log(a + c) // 0
```

[Go to Playgound](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/PQKgBILqaA6mh2DGAGBGeYTAFAGMD2A7AzgC5gCGYAvGIgNzrqhiDwOrAogHQCsKaWeRYAIwpVOdBoAKYmC3gBaZKgw4CxTMLm164aIAsGZjEAQUYHTvBbwLYANgFM257AHMAFGQDUggJRhgwMACZRmyChtSVgjEyV8C2tbRxcwTA8vMAAGIA)

::: details Deep Dive: 大きな数字
最近のJavaScriptでは、大きな数字を見やすくするために以下のような書き方も可能です。

```js
/* `1000000` と同じ */
const a = 1_000_000;
```

また、より大きな数字を扱いたい場合には[BigInt \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)を参照してください。
:::

::: warning Exam
以下の値を変数に代入し、標準出力せよ。

1. `1`
2. `-10`
3. `3.14`
4. `299792458`
5. `4700000000`

[解答例](https://www.typescriptlang.org/ja/play?noImplicitAny=false&filetype=js#code/PQKgBAjGLAUAxgewHYGcAuYCGYC8kBuBFVRAGwFMA6MxAcwAosBKI2UMAJmjiTUwBGeMAFoIABiJ9SlGvQYDWsduADMPYvzDxhqqhAAsUkuWq1G8JSrAGN0zABNhnAJwuA7C84GArAA5jNFM5RgcrUBBYaDBAUiVAY8io8EBBC0AHU0AZBkByTUBZBkARBkALBizAewYwAAMAfRKwQHMGQC5lQHAlQGiGPMBaqMB-BkAQhkBNBkB5BkArBkAohkA-Bk7AIAZE3hJHKHxXFzLPTjLfAM0ZM3kHCHDwHztJsAphA3dxU7PTwLWQhgptyOj4xLBAcGMUwAsIwC5PQCCGQHvlQF+AqqjcarTAUaY2dwUFbSYLmG5bWBAA)
:::

### String

これは文字列を表すデータ型です。文字列とは、`"` や `'` で囲まれた文字のことです。

文字列同士を `+` でつなげることができます。

```js
/* 文字列の `Hello` */
const a = "Hello";

/* 文字列の `World` */
const b = 'World';

/* 文字列同士の結合 */
console.log(a + b); // HelloWorld
```

[Go to Playgound](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/PQKgBI4aaOrajoSodgxgAYAkCmAbdB7RYTACgBjLAOwGcAXMAQzAF4wAiNTLJgbgINElgUQB1LACd0AE1z5iZKmABGDMAHJhY8cq49w0GIBgVQNcacQAq+gCBU8hEhSzpUAOmwBzABR0A1AoCUHMMGBhWbDUJIA)

::: details Deep Dive: `"` と `'`
`"` と `'` のどちらも使えると書きましたが、読みやすさやミスを無くすために基本的にはどちらかに統一するようにしましょう。

また、 `"` で囲まれた文字列の中に `"` を含めたい場合は `\"` と書きます。 `'` の場合は `\'` と書きます。

```js
/* `"` を含む文字列 */
const a = "Hello \"World\"";

/* `'` を含む文字列 */
const b = 'Hello \'World\'';

/* `"` で囲んだときは `'` は自由に使える */
const c = "Hello 'World'";

/* `'` で囲んだときは `"` は自由に使える */
const d = 'Hello "World"';
```

:::

::: details Deep Dive: テンプレートリテラル
この他に、「テンプレートリテラル」というものがあります。これは `` ` `` で囲まれた文字列のことです。

この中では、 `${変数名}` と書くことで変数の値を埋め込むことができます。

```js
const a = "World";
const b = `Hello ${a}`;
console.log(b); // Hello World
```

また、`${}` の中では四則演算なども行うことができます。

```js
const a = 1;
const b = 2;
const c = `${a} + ${b} = ${a + b}`; // 1 + 2 = 3
```

詳しくは[テンプレートリテラル \(テンプレート文字列\) \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals)を参照してください。
:::

::: warning Exam
以下の文字列を標準出力してください。

※プログラミングでもは文章内で文字列であることを明示的に表すために `""` で囲んで表記することがあるため、最初と最後の `"` は不要です（例数字の1は `1` 、文字列の1は `"1"` ）。

1. `"Hello, World!"`
2. `"I'm Tom."`
3. `"Alice said, "It looks like it's going to rain.""`
4. 変数 `age` に `13` を代入し、 `age` を使って `"わたしは13歳です。"`

[解答例](https://www.typescriptlang.org/ja/play?noImplicitAny=false&filetype=js#code/PQKgBAjGLAUAxgewHYGdEBsCmA6DiBzACgCIAJLDfAGjAHVEAnDAEwEISBKAblllDAAmaHCRpMufMRIBJAOQBbMABVECnF179wAZhEIU6bHkJE5AQQwBLeFjCoAhlZa1ZAFzD5EAa1Ser3nZWbgA6cn4EiFbIBGBuiGCMTsgacjx8oCCw0GCApEqAx5HZ4IBgCYDWDIDqDIBmDIBBDADyANKA5gyAmgyAQAxFooYSJtKWNnaOzrQh7p6IPn7WgWDB4WCR0bHxick4I5oZ4AAs+mKoHg4EdgC8kDq8e91SpIDxDID6DOWA9gwkYADUYId27ySAztYtrRttFkcgUimBAGMMgGeGQDrDIAbhkAPwyACYZAFcM4MAlwyAa4ZAEkMgH95QBiDIALBkAtVGAfwZACEMzUA8gyAKwZAFEMgD8GNodAziYzXAAG9yeABIAN6fAC+fza7PSQA)
:::

### Boolean

これはいわゆるYes/Noを表すデータ型で、`true` と `false` の2つの値しかありません。

```js
const a = true;
const b = false;
```

これは、このあと出てくる条件分岐などで使われます。

::: details Deep Dive: 他のデータ型をBooleanとして扱う
実は、他のデータ型をBooleanとして扱うこともできます。

```js
/* `0` は `false` として扱われる */
const a = Boolean(0); // false

/* `1` は `true` として扱われる */
const b = Boolean(1); // true

/* 空文字列は `false` として扱われる */
const c = Boolean(""); // false

/* `"Hello"` は `true` として扱われる */
const d = Boolean("Hello"); // true
```

こういったテクニックを使うことはありますが、安易に使うと読みにくくなるので注意しましょう。
:::

### キャスト

ここまででNumber・String・Booleanの3つのデータ型を紹介しましたが、これらは互いに変換することができます。

このように、データ型を変換することを「キャスト」といいます。

```js
/* Numberにキャスト */
console.log(Number("1")); // 1
console.log(Number("1.5")); // 1.5
console.log(Number("Hello")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

/* Stringにキャスト */
console.log(String(1)); // "1"
console.log(String(1.5)); // "1.5"
console.log(String(true)); // "true"
console.log(String(false)); // "false"

/* Booleanにキャスト */
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
```

[Go to Playgound](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/PQKgBAcgrgtgRgUwE6GsGQtQyGOGQnQyAmGMJgAoAYwHsA7AZ1IBsEA6G0gcwApp5lWAiARm4CUAgNxhgwMLxIVqdRi3axESHr3oBWQSLES166VVoMmbDsp4AJBDSZbR4yAEMIB2cYVmuAFyRQEQ+11XI3lTJS4AM0caSn9tBwAGQkJQMABlHwBLcmZ0bDwCYLkTVgykbLZeAJ0wPm4i9zYyitY9aoc+DXqyQ2KFZpzWHz92iW5hhG6ZEJKBtiiYuMDahdj6lPAAIVIjR3I83HwiHrdQ1m3d8lYE0bBVhAazi7o91tuJx5LnhFfuOxr7p8FN9flYbKR-g4JkA)

::: details Deep Dive: 暗黙的なキャスト
NumberとStringを `+` でつなげると、暗黙的にStringにキャストされて結合されます。

以下の例は、Numberの `1` とStringの `"1"` を `+` でつなげていますが、結果は `"11"` になります。これは、NumberとStringを `+` で繋げた結果自動的に `1` に `String(1)` が実行されているためです。

```js
console.log(1 + "1"); // "11"
```

このように、異なるデータ型に対して `+` を使う場合は意図しない結果になることがあるので注意しましょう。
:::

::: details Deep Dive: `NaN`
`NaN` は「Not a Number」の略で、数値ではないことを表します。

これは、Numberにキャストできない文字列をNumberにキャストしたときに返されます。
:::

::: details Deep Dive: 他のキャスト方法
キャスト方法は他にもいくつか手段があります。

```js
const a = 1;
const b = "1";

console.log(a.toString()); // "1"
console.log(parseInt(b)); // 1
console.log(!!a) // true
```

ここでは詳しく触れませんが、それぞれ細かい違いがあります。それぞれ結果に微妙な違いがあるので、実際に試してみてください。
:::

::: warning Exam
以下の指示に従い値をキャストし、標準出力せよ。

1. `1` を `String` にキャスト
2. `"1"` を `Number` にキャスト
3. `"false"` を `Boolean` にキャスト
4. `"Infinity"` を `Number` にキャスト
5. `"10e4"` を `Number` にキャスト

[解答例](https://www.typescriptlang.org/ja/play?noImplicitAny=false&filetype=js#code/PQKgBAjGLAUAxgewHYGdEBsCmA6DiBzACgGUAXAJwEtliIBKegblllDACZo4k1Nd8xAHIBXALYAjLBSIAiCLMYs2IELGhhApEqBjyPXhALqaAHU0DmDICEGQNEMgZQZAFgyAZBkDxDIGkGQMYMgMwZAIgznALBqAIFUD2DGAABqKS0jgADgCGFKhYAJLIZET0gWDGgEEMgPfKgL8BxoCaDIBADHo8KOjYeIREIVIUEdGxCUnyisys7ADM3Ail-BXEAEKI-JHIcgBmkRixLcqgaho6ekEAhMupfoDpZoCbeYAhboBWDIDR6oCQmoDbxoB2DIBkKoBZ2oAo9oDp3oAK2oBJDO6AIr6A-gw+9oDaDID6DIBjDIB6hkA0wyAYYZAfkil1eGUBJVVrIJlMsIpZuAACzQnrlQRVcQ1OQJMY0KhkACeMza4AArFi+DjKtVpHIIAAGLDomZAA)
:::

## 配列

これまで紹介したデータ型は、1つの値を表すものでした。しかし、複数の値をまとめて扱いたい場合もあります。

そういった場合は、「配列」を利用します。

配列は `[値1, 値2, 値3, ...]` という形で表し、各値のことを「要素」と呼びます。

配列内の任意の値のみを取り出したいときは `配列名[インデックス]` という形で取り出すことができます。この時注意すべきなのは、1つ目の値を取り出したいときは `配列名[0]` というように、インデックスは `0` から始まるということです（「0番目の要素」などと言います）。

```js
const a = [1, 2, 3];
console.log(a); // [1, 2, 3]

const b = ["Hello", "World"];
console.log(b); // ["Hello", "World"]

const c = [true, false];
console.log(c); // [true, false]

console.log(a[0]); // 1
console.log(a[1]); // 2
console.log(a[2]); // 3
```

[Go to Playground](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYewdgzgLgBAhjAvDA2gRgDQwExYMwC6A3AFCiQgA2ApgHSUgDmAFHAJREwD0XqmO+AiTLhoMAEZJUAIgAS1Sg2lZpAdRAAnSgBNpxERRr0mzcR268UchUpXqtuoQbHApKKBoCu1LADM4lBDU+uQQVHQMLMDmPKge3n4BQU6h4cYscCgADAQxvGjOaZGs6LmcsdiFRsWZ2GUWMHhAA)

また、配列の中に配列を入れる「2次元配列」というものもあります。以下の例は、Excelで言うところの2行2列の表を表しています。

2次元配列の場合は、 `配列名[行のインデックス][列のインデックス]` という形で取り出すことができます。

```js
const a = [
    [1, 2],
    [3, 4]
];
console.log(a); // [[1, 2], [3, 4]]

console.log(a[0]); // [1, 2]
console.log(a[0][0]); // 1
```

[Go to Playground](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYewdgzgLgBAhjAvDA2gKBp1BGANDAJgF1cMsUBmfAFiLSIG41RIQAbAUwDo2QBzABRwAlAxgB6cahR5CJVFRi06zcBHbdeguCgAMRURKkz8xVa049+QvUVuHJMbEA)

::: details Deep Dive: データ型が混在した配列
ここまでの例では、配列の中に同じデータ型の値しか入れていませんでしたが、実は異なるデータ型の値を入れることもできます。

以下は、ユーザーの名前、年齢、性別（男性なら `true` ）を配列に入れた例です。

```js
const person = ["John", 20, true];
```

しかし、これはどういった順番で値が入っているかプログラマー自身が把握しておく必要があるため推奨されません。こういったデータを管理したい場合は、次の「オブジェクト」を利用してください。
:::

::: warning Exam
以下の配列を作成し、標準出力せよ。

1. 1~10の整数
2. `"I am John"` を単語区切りにした配列
3. 下の表を表す3行3列の2次元配列
4. 3で作成した配列の0行目の配列
5. 3で作成した配列の2行目の2列目の要素

|  | A | B | C |
| --- | --- | --- | --- |
| 1 | 1 | 2 | 3 |
| 2 | 4 | 5 | 6 |
| 3 | 7 | 8 | 9 |

[解答例](https://www.typescriptlang.org/ja/play?noImplicitAny=false&filetype=js#code/PQKgBAjGLAUAxgewHYGdEBsCmA6DiBzACgG0IAaMAJkoGZKAWSgVkoDZKB2SgDkoE5KEAAwBdAJQBuWLFDVocJGky58xEgCIAkhsoaAhgFtdYDQClEAC2QaJ02eFoKEKVABcwb-QCNsYALxgJLBgoUEU1HSi5CFhJExgrGBs0bGhJNxgfGD8qaLSSujYeIREXr5YUjJyDM6FKiXE5dgkYlUOiXWuDWplPi1UoiSDUkA)
:::

## オブジェクト

先ほどの配列は、ただ単に値が並んでいるだけでした。それに対してオブジェクトは値を「名前」で管理することができます。

配列との違いは、 `[]` ではなく `{}` で囲むことと `key: value` という形で記述する点です。

値を取り出すときは、 `オブジェクト名.名前` または `オブジェクト名["名前"]` という形で取り出すことができます。

```js
const person = {
    name: "John", // `name` という名前で `"John"` という値を管理
    age: 20, // `age` という名前で `20` という値を管理
    isMale: true, // `isMale` という名前で `true` という値を管理
};

console.log(person); // {name: "John", age: 20, isMale: true}
console.log(person.name); // "John"
console.log(person["age"]); // 20
```

[Go to Playground](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYewdgzgLgBADgUwE4XDAvDA3gKBvmMAQwFsEAuGAIgCkQALMKgGhgHo2YADYsrmQBYMgEQZAYgyBYFUCySoHMGbrQZN+wkYBIFQEkMgQu9AYC54CRAOYUYAJgAMrDt30JFoyTK6mbKjdoIwAlhACyRADaGoJABXBHNOLk8ffyc7bkCQpzUtHABfAG4cHFBIEH8AOl8QPQAKRBRwAEo09k4sXkM5RhYYK0pTVki-AOCEFKzwVHzCkrLUMDz6qprqOib+nKGi0uQxgG0qKyoAXSmLUyA)

::: details Deep Dive: 配列とオブジェクトの組み合わせ
配列とオブジェクトを組み合わせることもできます。

```js
const person = {
    name: "John",
    age: 20,
    isMale: true,
    famiies: [
        {
            name: "Mary",
            age: 20,
            isMale: false
        },
        {
            name: "Bob",
            age: 10,
            isMale: true
        }
    ]
};

console.log(person); // {name: "John", age: 20, isMale: true, famiies: [{name: "Mary", age: 20, isMale: false}, {name: "Bob", age: 10, isMale: true}]}
console.log(person.name); // "John"
console.log(person["age"]); // 20
console.log(person.famiies[0].name); // "Mary"
console.log(person.famiies[1]["age"]); // 10
```

これを見るとわかりますが、オブジェクトの中に配列を入れることもできますし、配列の中にオブジェクトを入れることもできます。
:::

::: details Deep Dive: オブジェクトのキーに変数を使う
`オブジェクト名["名前"]` という形で値を取り出すとき、 `名前` の部分に変数を使うことができます。

```js
const person = {
    name: "John",
    age: 20,
    isMale: true,
};
const key = "age";
console.log(person[key]); // 20
```

:::

::: details Deep Dive: オブジェクトで配列を表現する
ここまで読むと気づく人もいるかと思いますが、配列は言ってしまえばkeyが `0` から始まるオブジェクトと見ることができます（厳密には違います）。

```js
const a = [
    "iPhone",
    "Pixel",
    "Galaxy"
]
console.log(a[0]); // "iPhone"

const b = {
    0: "iPhone",
    1: "Pixel",
    2: "Galaxy"
}
console.log(b[0]); // "iPhone"
```

ただし、この場合は `b.0` という書き方はできません。

通常こういったことはしませんが、1つの知識として覚えておくとよいでしょう。
:::

::: warning Exam
以下の指示に従いオブジェクトを作成し、標準出力せよ。

1. 以下の表の項目を持った社員を表すオブジェクト
2. 以下の表の項目を持った社員リスト（2人分）を表す配列
3. 2で作成した配列の0番目の社員の名前
4. 2で作成した配列の1番目の社員の0番目の端末の名前

社員情報
| 項目 | データ型 |
| --- | --- |
| 名前 | テキスト |
| 年齢 | 数値 |
| 役員フラグ | 真偽値 |
| 所持端末 | 常に2台 |

端末情報
| 項目 | データ型 |
| --- | --- |
| 名前 | テキスト |
| メーカー | テキスト |

[解答例](https://www.typescriptlang.org/ja/play?noImplicitAny=false&filetype=js#code/PQKgBAjGLAUAxgewHYGcAuYMEMBmuwBeMAb1jArGWwFsBTALjACIBBAGwEt47mAacpWwBzRiwDMABn6CKnVACFE2AE4ATALJ0aAIzoqm6FQFc6AymDV0AbtzqomAbVkXSL15Wr0mzAAqcADzp2MAAOMF8VRBkPDxpsAGt9HwBxRERhdl5zWIBfHI8yWNcvMWYNbHgddISIqJjiynikgxZWAAd2rOZ3SlyXAF0BXIBuBBRURCyAOnYMgAocfABKMdhQMAAmaDgkNEwl3FQiMGcLItjSnw47Bo8RMqk713klVU1tPVajUwLXK1sPAcp16hVBjSuLH8QRC4Ui0T+jSaiWSLDSGW6iLyWLBSI8kPKlWqiFq8OeeLAzVRbE63XBFn6xSGLnyLgu+NoZSUOnJQlEPk24l5ckUynUWl0qNw2HYqDM4IBdmBZzx7IpVE5qRl2ACAE9hY0qa1mABlWioYzIYQGhk41xqikEgAqAAtOMgEr5sGobbEjT4ADJ0ZCIazRel9cHMhmwAZjPaTGZzYSLdB4I6rWDrcDiHbjNBTOizBaHVCOSQDaalTPZkDkcCAUiVAMeR9d2E0LxZTpfLA0czFKzAGyyzGwALHmEx3k6n02WIJXFUCe1XOZnJ0mS2n8HPe8xF-ZBz2+wOhyMgA)
:::

## 3つの処理

JavaScriptに限らず、プログラミングは基本的に以下の3つの処理に分類されます。

### 順次処理

順次は、プログラムを上から順に実行する処理です。

```js
const a = 1;
const b = 2;
/* ここより前で `a` と `b` が宣言されているので、ここで利用できる */
const c = a + b; // 3

/* `e` はまだ宣言されていないので、ここでは利用できない */
const d = e + 1; // [!code error] [ERR]: Cannot access 'e' before initialization 
const e = 1;
```

[Go to Playground](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYewdgzgLgBAhjAvDAjAbgFCkrARkmAJkwHoAqGQZQZLAIhkCiGQWSVBzBhgAM5WZALBjd08BkGQMXagACjAqgyAYhkBmDIBEGQNEMgOwYmgQAZqTQJRKgClcmgWQZZMMiSzhoMYAQQBqGLjQwSJGAGYMGcmwCmnQPYMgPwZABgwiEjKAVgzSiiqUTF6aOqH6htgmACYE7jBW6HYOANoAhKBJae4ATsUgxQC6WTDZAKIASvUVAFwwAMJwYGAgsHDAwO4QEDAA5O4j1u4AZuVpAJZgc1BzcAA2cwBecMvgMEY4MGnI6EA)

::: details Deep Dive: 巻き上げ（Hoisting）
上の例で「まだ宣言されていないものは利用できない」と書きましたが、特定の条件を満たす場合のみ、宣言前に利用できるようになります。

これを「巻き上げ（Hoisting）」と呼び、 `var` による変数宣言と後で紹介する関数で発生します。

```js
console.log(a); // エラーにはならないが、まだこの時点で変数に値は代入されていないので未定義を意味する `undefined` になる
var a = 1;

console.log(b); // [!code error] [ERR]: Cannot access 'b' before initialization 
const b = 1;

sayHello(); // この時点では `sayHello()` は宣言していないが、巻き上げによって実行できる
function sayHello() {
    console.log("Hello");
}
```

詳しくは[Hoisting \(巻き上げ、ホイスティング\) \- MDN Web Docs 用語集: ウェブ関連用語の定義 \| MDN](https://developer.mozilla.org/ja/docs/Glossary/Hoisting)を参照してください。
:::

::: warning Exam
以下のソースコードが正常に実行されるよう、順番を並び替えよ。

```js
const a = 1;
console.log(a + c);
const b = a + c;
console.log(b);
const c = 2;
```

[解答例](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYewdgzgLgBAhjAvDAjAbgFCkrYSYBMm2EIANgKYB0ZIA5gBQIDUMwAlMeNDAEb4s2XSOWq1GvTkA)

:::

### 分岐処理

条件によって処理を分ける場合、分岐処理を利用します。

書き方は以下のようになります。

```txt
if (条件式1) {
    条件式1が `true` の場合に実行される処理
} else if (条件式2) {
    条件式2が `true` の場合に実行される処理
} else {
    条件式が `false` の場合に実行される処理
}
```

注意点としては、最初に `true` となった条件式の処理のみが実行され、それ以外の処理は実行されないということです。上の例でいうと、条件式1が `true` になった場合、条件式2が `true` になったとしても条件式2の処理は実行されません。

また、 `else if` や `else` は不要であれば書く必要はありません。

ここまでに出てきた「条件式」というのは、 `{}` 内を実行する条件を表したものです。

詳しくはこの次に説明する「条件式」を参照してください。

具体的には以下のようになります。

```js
const a = 10;

/* 奇数か偶数かで処理を分ける場合 */
if (a % 2 == 0) { // `a` を2で割った余りが `0` なら `true`
    console.log("偶数");
} else { // それ以外
    console.log("奇数");
}

/* 正の数か負の数か0で処理を分ける場合 */
if (a > 0) { // `a` が `0` より大きいなら `true`
    console.log("正の数");
} else if (a < 0) { // `a` が `0` より小さいなら `true`
    console.log("負の数");
} else { // それ以外
    console.log("0");
}

/* 3の倍数と3が付く時だけバカになる場合 */
if (a % 3 == 0 || String(a).includes("3")) {
    console.log("バカになる");
}
```

[Go to Playground](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYewdgzgLgBAhjAvDAjABgNwCgsHoBUMg4pqAOpoNIMgbgrmDmDIGeKgYC6BJDIGBKgigyDRDICwagECoz65YAlgDMYACgQBSGACYkyNAEoYAbxi5cMAAZwtMRjOqAnJUDGDIH0GQJrygKIZAMgza0ewFYMgSIZtUAE4BXAKZasMAJhQSBAAG28AOlCQAHMxACIqeMVsAF8Yb1CIb1V1TUBdBkAYhkBTuUA0TX9A4IgwyOi4+NJktJwCGEBja0A7BnJAApiusjQ6JjYuXn4hUQkYAD4YJVyNbV0YOy0HGEAIhitAck1AWQZAEQYXNy9fCoCqmqjYhM6SJqx0zOyYEXEEAB5Z5TUFnT0Vtc2gHgdQCqDAdXFoPD4-IEguBquFLvVercUvcMlkct8CiVyjDzgi6gk0HdUi1CABmDqAWAUSIALBnJNkAG3KAeQZAEJmgAMGViABYZANUMgGsGRwjPgCF6TaTk+SzGAAH2lMAAyh5BGA4nBFBFlcBQp4ACbeCAJcnJL6nWEhAlXeK8gXsElAA)

::: details Deep Dive: if文のネスト
if文の中にif文を書くこともできます。

しかし、あまりネストしすぎると読みにくくなってしまうので注意しましょう。

```js
const a = 15;
if (a % 5 == 0) {
    if (a % 3 == 0) {
        console.log("aは5の倍数かつ3の倍数です");
    } else {
        console.log("aは5の倍数です");
    }
} else if (a % 3 == 0) {
    console.log("aは3の倍数です");
} else {
    console.log("aは5の倍数でも3の倍数でもありません");
}
```

:::

#### 条件式

条件式とは、if文などで利用する条件を表したものです。

以下はその例で、ここで出てくる `==` や `<=` などは左右の値を比較することから「比較演算子」と呼ばれます。

```js
const a = 5;

if (a == 5) {
    console.log("aは5です");
} else {
    console.log("aは5ではありません");
}

if (a != 5) {
    console.log("aは5ではありません");
} else {
    console.log("aは5です");
}

if (a < 5) {
    console.log("aは5より小さいです");
} else {
    console.log("aは5以上です。");
}

if (a <= 5) {
    console.log("aは5以下です");
} else {
    console.log("aは5より大きいです");
}

if (a > 5) {
    console.log("aは5より大きいです");
} else {
    console.log("aは5以下です");
}

if (a >= 5) {
    console.log("aは5以上です");
} else {
    console.log("aは5より小さいです");
}
```

[Go to Playground](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYewdgzgLgBAhjAvDArAbgFAYJYDMYAUCiyKAlDAN4Yy0yiQgA2ApgHRMgDmBARHIHsGFIHMGQJoMvMpgC+MFkwgsqNOgwjN2nHvyHCBgIQZAUQyA-BkDaDIGSGCdKx5CCAISkK1OvXBrWHbn0Ej9x85YYMnIKSi6q6p5aPmKBUtb4RDAAPKhOyrQRHpreQoARDAaA8DqAqgyAIgyxkkGy8orOKm6ROdoogKdygFByYoBADHEJtimOYfWM2V7NLYDQchXS1aF1mQ0j0fkGgOSagLIM5eKV8TiJCAB8aYPzwxqjPgXrm3EztRmup1G5rZNbVrt9+wNzD+5nS60Om8qiE7uEFv9ngUStdtkA)

また、条件が複数ある場合は `&&` や `||` などの「論理演算子」というものを使います。

`&&` は左右の条件式が両方とも `true` の場合に `true` になります。

`||` は左右の条件式のどちらか1つでも `true` の場合に `true` になります。

```js
const a = 5;

/* 数学で言う 0 <= a <= 10 と同じ */
if (0 <= a && a <= 10) {
    console.log("aは0以上、かつ、10以下です");
} else {
    console.log("aは0より小さいか、10より大きいです");
}

/* 数学で言う a < 0 または a > 10 と同じ */
if (a < 0 || a > 10) {
    console.log("aは0より小さいか、10より大きいです");
} else {
    console.log("aは0以上、かつ、10以下です");
}
```

[Go to Playground](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYewdgzgLgBAhjAvDArAbgFAYPQCoaAOpoGbag5gyAAUYGIMMADDADzIIMwCMtgFgyAwKoBoMMu2GAJYAzGAApazBADJp8esjYBKGAG8MMTTFCQQAGwCmAOj0gA5mIBEcQPYM1QKdygKDlAgAyBpBkAmDM7b3A0HIlAmgyWSpgAvjAGehAGahpaOhD6xqYW1naAEQyAUQyA8DqAqgyAIgyuXtSZgOSagLIMeQFBoVh4hKSU8nQ0MIB+DID6DDbyAHysHDx8AiLiTC0APmM9fSrqWtrgCYYm5la2xdn5hWylFVXBGGERUTFz8YnLKWtObp7efoH7IUA)

::: details Deep Dive: 比較演算子の優先順位
先ほど `0 <= a && a <= 10` （ `a` は `5` ）という例を出しましたが、よくあるミスとしてこれを `0 <= a <= 10` と書いてしまうというものがあります。

実はこれはコードとしてはエラーにはなりません。この場合、以下のような順番で処理が行われます。

1. `0 <= a <= 10` の前方の `<=` から処理される
2. `(0 <= a) <= 10`
3. `(0 <= a)` が処理され、 `a` は `5` なので `true` となる
4. `true <= 10` となり、 `true` は `1` として扱われるので `1 <= 10` となる
5. 結果的に `true` となる

今回は `a` が `5` だったので意図した通り `true` になりましたが、では `a` が `11` だった場合はどうなるでしょうか？実際に以下のコードを実行して、意図した結果が得られるか確認してみてください。

```js
const a = 5;
console.log(0 <= a && a <= 10);
console.log(0 <= a <= 10);

const b = 11;
console.log(0 <= b && b <= 10);
console.log(0 <= b <= 10);
```

:::

::: warning Exam
以下のソースコードのコメントに従い、条件式・if文を書け。

```js
const a = 10;
if (/* aが10未満 */) {
    console.log("aは10未満です");
} else {
    console.log("aは10以上です");
}

const b = 30;
if (/* bが10以上かつ20未満 */) {
    console.log("bは10以上かつ20未満です");
} else {
    console.log("bは10未満または20以上です");
}

const c = 30;
if (/* cが10未満または20以上 */) {
    console.log("cは10未満または20以上です");
} else {
    console.log("cは10以上かつ20未満です");
}

const d = 30;
/**
 * 以下のルールにしたがって標準出力するようなif文を書け。
 * - dが3の倍数のとき、"dは3の倍数です"
 * - dが5の倍数のとき、"dは5の倍数です"
 * - dが3の倍数かつ5の倍数のとき、"dは3の倍数かつ5の倍数です"
 * - それ以外のとき、"dは3の倍数でも5の倍数でもありません"
 */
```

[解答例](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYewdgzgLgBAhjAvDAjABgNwCgCWAzGACgQB5U0BKGAbyxnplEhABsBTAOhZAHNCAiOIHsGdICpzQAF2gcwZAmgz8K2AL4w2LCGxp0GTCK07c+gkWkCncoCg5GXMVYs22ACMkMAMyZcBQuhglkDgGS+YBzIAJkoNBkZwHXYuXgE7IzNAaQZAEwZQiQt5LCUVNXCtKN1YgwSxcUA-BkB9BiFQs0yrGyjYYEcXbHwiFrJPAB8emFCvZGAqWgjtIv0BYCMJKpqTc1ksnNV1MYLmGKn+GfRktLQM5YbbGAATVtcAegAqW7pbmGNAaDlAOwZAa4ZAH4YPwGsGQHUGSqAGQZAMYMgDMGQCYVoA0u0AX4qAbKVpIBohkAEQyAMQZAFYM+EA4aaAJIZAB9mgEUGQBADI8YABaC5ApxvQCwCoAHUzegAsGQCyDIBABn45yE1PpFlJFPOQIArLSGSz2ZzhTzZHzKdy6alJaK2RyuSKFSLeTAnhTALoMgBiGYyANE0mcrOXLJIAghkVlsAQgyAKIZyoBtBkAyQz8R7XNxES4AUmcSGQaBg-guMF9gv9MDC1Bg12uMBVcvV9P4QhVKEV-EZgBgVQAaDIBlBkZ6LeklZMAABj7UOHEAGyzBLYBja3+gBEGGSaegTbZxBNqlLWk7ZZRrGAdQiVpwRqPtyJbPTds0agerPKjyvVgOjaeducGCWLyyD3LrLeFLu7oT9g8KIA)

:::

### 反復処理

反復処理は、同じ処理を繰り返し実行する処理です。

これは主に配列の中身に対して処理を行う場合などで「for文」を利用します。

for文は以下のような書き方をします。

```txt
for (初期化処理; 条件式; 更新処理) {
    条件式が `true` の間、繰り返し実行される処理
}
```

具体的な例を見たほうがわかりやすいので以下の例を元にどのように動くか説明します。

1. `i` という変数を宣言し、 `0` を代入する（初期化処理）
2. `i` が `a.length` （配列 `a` の長さ）より小さいかどうかを判定する（条件式）
3. 条件式が `true` だった場合、for文の `{}` 内の処理を実行する（ `false` の場合、終了する）
4. `console.log(a[i])` を実行する
5. `i++` （ `i = i + 1` と同じ意味で `i` の値を1大きくする）を実行する（更新処理）
6. 2に戻る

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
```

[Go to Playground](https://www.typescriptlang.org/ja/play?noImplicitAny=false&filetype=js#code/MYewdgzgLgBAhjAvDA2gRgDQwExYMxYAsWArFgGxYDsWAHFgJxZoAMAugNwBQXAZiACcYACgA2AU1gBLJDBYcYMgDzwAdBLABzKAAsFUgNQGAlDADeXGFZihIICepCbhcFFLbHuAXyA)

これを実行すると、結果的に以下のようになります。

```bash
1
2
3
4
5
6
7
8
9
10
```

また、if文と同じようにfor文もネストさせることができます。

::: details Deep Dive: `continue` / `break`
for文の中で利用できる特殊な処理に、 `continue` と `break` があります。

`continue` とは、その時点での処理を終了し、次のループに進む（上の例だと2番の処理に進む）。というもので、たとえば以下のような使い方ができます。

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(a[i]);
}
```

これを実行すると、 `a[i]` が偶数の場合に `continue` が呼ばれるので、その後の `console.log(a[i])` は実行されません。その結果、奇数のときのみ値が出力されます。

```bash
1
3
5
7
9
```

次に `break` ですが、 `break` が呼ばれるとその時点でfor文を終了します。

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < a.length; i++) {
    if (5 < a[i]) {
        break;
    }
    console.log(a[i]);
}
```

この場合、 `a[i]` が5よりも大きくなると `break` が呼ばれるため、5よりも大きい値は出力されません。

```bash
1
2
3
4
5
```

:::

::: details Deep Dive: `while` / `do-while` 文
反復処理には `for` 文以外にも `while` 文や `do-while` 文というものがあります。

以下の `for` / `while` / `do-while` はすべて同じ結果になります。

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

let j = 0;
while(j < a.length) {
    console.log(a[j]);
    j++;
}

let k = 0;
do {
    console.log(a[k]);
    k++;
} while(k < a.length);
```

`while` と `do-while` の違いは、 `while` が先に条件式が評価されるのに対して、 `do-while` はブロック内の処理が実行されたあとに条件式が評価されます。
:::

::: details Deep Dive: 配列に対する反復処理
配列に対して反復処理を行う場合、よりスマートな書き方として `forEach` や `map` というものがあります。

これらは配列に実装されているメソッドであり、以下のソースコードはすべて同じ結果になります。

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

a.forEach(function(value) {
    console.log(value);
})

a.map(function(value) {
    console.log(value);
})
```

具体的な使い方や違いについては、 [Array\.prototype\.map\(\) \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) や [Array\.prototype\.forEach\(\) \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) を参照してください。
:::

::: warning Exam
以下の処理を反復処理を使って書け。

1. 1から100までの数字を順番に出力する
2. 1から100までの数字のうち、3の倍数のみを順番に出力する
3. 以下のような2次元配列の値を順にすべて出力する

```js
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
```

[回答例](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/PQKgBAjGLAUAZgewE5gBQBsCmAXMBLMAXkgG4CwAeEiABlvPwGomBKMAb1jDAGNEAdgGdE2AHQZEAczT5WpWAF9YsUGABM0OElSZcFGoyo16jFuy4988WWACkYAMzEStC9x59BI8ZJlyFHmVlVXBnGFh+YTwAQ2RUEgBtDx5EiAAaDUzHAF10lLBEgBZMgFZMgDY8gsSAdkyADkyATmqchR10bDxCVyNKMDjkCSwBKRwACzM2Tg9OvTwAK2IwBjBlgaHE-ByRscnyRfNZzy9hUSwJaTQtncTFnPkPYJU1QFIlQGPIrVghsR0AURivAmaHgAFcBLwcPhBGhkIgAO7uHjwhF-FCA4GgiFQmECNAANxiGDBWGRniiPkufkJxNJTyCT0U8iAA)
:::

## 関数

ある程度プログラムを書いていくと、同じような処理が何箇所も出てきたり、ある程度まとまった処理をひとまとめにしたくなることがあります。

そういったときに利用するのが「関数」です。

関数とは、処理をまとめて再利用できるようにしたものであり、以下のように書きます。

```txt
function 関数名(引数1, 引数2, ...) {
    処理
    return 値;
}
```

以下は有名な関数で、fizzBuzzといものです。これは、「3の倍数ならfizz、5の倍数ならbuzz、3の倍数かつ5の倍数ならfizzbuzz、それ以外は数字をそのまま返す」という処理を行います。

```js
function fizzBuzz(a) { // `fizzBuzz` という名前の関数で、引数は `a` という名前で利用できる
    if(a % 3 == 0 && a % 5 == 0) {
        return "fizzbuzz"; // `return 値;` と書くことで呼び出し元に値を返し、その時点で関数の処理を終了する
    } else if(a % 3 == 0) {
        return "fizz";
    } else if(a % 5 == 0) {
        return "buzz";
    } else {
        return a;
    }
}

for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i)); // `fizzBuzz` という関数に `i` の値を渡し、その返り値を出力する
}
```

[Go to Playground](https://www.typescriptlang.org/ja/play?noImplicitAny=false&filetype=js#code/PQKhCgQAgAQBwIYCcEFsoG8B2BXVAjAUyQF8oFJhwAzHLAYwBcBLAeyymuYC9uAhHLwAUCAJSZwUKVGbURUAKRQAzFAC8aqAAYoAMl3lFUAKzrNW8RknSbSQoxxIOAIi698g7s4Dc1qWUIAGwBnQhk5BCNVDW1LPxsoOwcnKFceL18bAJCw2XklUxiLCQTpJMcXD14feOzQktLE+wryTOkScA6aViQoIUD7GXUoAEZvIYAeTRGtLXHmAGoFuJt6dmDWAYA6QNYAcyE3fk8hZlFRXxIgA)

::: details Deep Dive: jsdoc
特殊なコメントの書き方として、jsdocというものがあります。

これは、関数などに対して「どのような引数を受け取り、どのような処理を行い、どのような値を返すのか」ということをコメントとして書くことができます。

これを書いておくとあとから関数を見たときにぱっと見で処理の内容が把握できたり、開発環境によってはこのjsdocを利用して入力補完が効いたりします。

```js

/**
 * 値を合計します
 * 
 * 引数で受け取った数値をすべて合計し、その値を返します。
 * 
 * @param {number} a - 1つ目の数字
 * @param {number} b - 2つ目の数字
 * @param {number} c - 3つ目の数字
 * @return {number} 合計値
 */
function sum(a, b, c) {
    return a + b + c;
}
```

:::

:::details Deep Dive: アロー関数式
関数定義には、アロー関数式というものもあります。

以下の2つの `sum()` はどちらも同じ結果を返します。

```js
function sum1(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(sum1([1, 2, 3]));

const sum2 = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(sum2([1, 2, 3]));
```

厳密には細かい部分で違いがありますが、詳しくは [アロー関数式 \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) を参照してください。
:::

### 引数

引数とは、関数内のみで利用できる変数のようなものです。また、引数を使って関数を呼び出すときに値を受け取ることができます。

以下の例だと、 `a` ・ `b` ・ `c` が引数になります。

```js
// ここで `a` は使えない

function sum(a, b, c) {
    // ここなら `a` が使える
    return a + b + c;
}

// ここで `a` は使えない

const result = sum(1, 2, 3); // `a` に `1` 、 `b` に `2` 、 `c` に `3` が渡される
```

### 返り値（戻り値）

返り値とは、関数が実行した結果を呼び出し元に返す値です。

関数が値を返すには、 `return` を使います。また、関数内で `return` が呼ばれるとその時点で関数の処理を終了し、以降の処理は実行されません。

```js
function sum(a, b, c) {
    return a + b + c; // return で `a + b + c` の結果を返している
    // これ以降に書かれた関数の処理は実行されない
}

const result = sum(1, 2, 3); // `sum()` は 6を返すので、その値を `result` に代入している
```

::: warning Exam
以下のような関数を定義せよ。

1. 文字列を受け取り、 `"こんにちは、{受け取った文字列}さん"` という文字列を標準出力する関数
2. 2つの引数を受け取り、その合計値を返す関数
3. 2つの引数を受け取り、そのうち大きい方の値を返す関数
4. 数値の配列を受け取り、すべての値が2倍された配列を返す関数
5. 数値の配列を受け取り、奇数だけを取り出した配列を返す関数

[回答例](https://www.typescriptlang.org/play?noImplicitAny=false&noImplicitAny=false&filetype=js#code/PQKgBAjGLAUAZgVwHYGMAuBLA9ssBnAQwE8AKZQgWwFMBKMAb1jDFV32wBtqA6T7AOakABoGUGQMkMgawZAhgyB7BkCADABIGFGgF9AqgzjhtANyw1sWKDAAmaHCRosuMIQAm90oQA0YAEb0mLAE7V0iD54hGAA1B76hsbgAMwWCCgYOHhslAAOhH7Obp6MzGCY8GDOYAA8Hl75vv6BeO76LGpg1Jz41AVFpO5ldpUs1QFBdg1gTS1tef1gfoPBI4ZRoCDM4ICkSoDHkStgW6KAMQyygJBygKAZgCj2gOnegAragBYMgCIMgGIMgEEMgHYMgEkMgJRKgBSugOoMgPoMgIsMgH6GQA-DIBnhkA5gyATQZAEAMK0siRsKWw6Uy1AAgshsOgABbUHzZCqTaY1IYhcrdAD8HjAAC5hgYjCYACzxKxJWz2bCIdzcZw+Hx9VjsdBgDlc7iovlgAC8YAA2gBdEbwbA+YrcYWYaVgAAMugKPUyPj41GQAmxeswoVCApYou5aL5ssw8q1hqdLvApnm+RmtRFnPtEp8kQZIGW0DAGy2W0AsomAdCUnoAQFUAgZGAAl9JIA-7S+gDMGQBnioAwFxeEMA0QyAFg1ABAqsjAwkohDSpFowjAgBkGQCQ5oBOpUhMJZ8OS-rFaIx2NxvP5hN9JL5PFr9dZCNIADdCJxEHRCQM-UuV+1PfNaPTomAAKw96x93CcYgAeUco4FbGQ+GF2EcQa1CpG6rAACstbr8sqeJfpqMq6vq5SGsaprmgUVo2h0xRus6YAAKRmGAACEoHwSwL72EGsrfi6MpIYqVT9N+VojI0+SGBuQx4UGIbROGaybBGsYJoAJAqZjmgCrDIAxQyANcMAKAFcMIKAA0MLyADIRNw-DcFbyNW8CYJw6Ajo2LYdl2sIJGetgXter5DjieKGgKE7BFOKlqSOc7JIuy6rvBllgFuq6oehWE6nuIZAA)
:::

## クラス

ここまででデータ型や変数、関数などについて学びましたが、これらを組み合わせてより複雑なデータを扱うためには、クラスというものを利用します。

### クラスの定義方法

まずは、基本的なクラスの定義方法を見ていきます。

クラスを新しく定義するには、`class`キーワードを使います。

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`こんにちは、私の名前は${this.name}です。`);
    }
}
```

[Go to Playground](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGn6w6EALogK7DEqIAUaYAtvADTRgDm8AlFrvv8QAWASwgA6ek2gBeaJPgBuPvzxDRYjvBltOS-gF9sy6O0Tx4xGjxwr8hNKhDwxIFOxoADQMoMgZIZA1gyAhgyA9gyAgAyAg56AdgyAsCqAskpBACSYauLy+oDmDICaDIBADB5ceviG+kA)

こうすることで、新しく `Person` というデータ型を作成することができます。

### `new` キーワード

クラスを使って新しいオブジェクト（変数）を作成するには、`new`キーワードを使います。

```js
const person = new Person("山田太郎", 30);
```

[Go to Playground](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGn6w6EALogK7DEqIAUaYAtvADTRgDm8AlFrvv8QAWASwgA6ek2gBeaJPgBuPvzxDRYjvBltOS-gF9sy6O0Tx4xGjxwr8hNKhDwxIFOxoADQMoMgZIZA1gyAhgyA9gyAgAyAg56AdgyAsCqAskpBACSYauLy+oDmDICaDIBADB5ceviGhtj2JNAADkioGLJo8ADucJXoNABEgI46gAyugFSagHMJLawAzAAMeUA)

これで `person` という変数に、`Person` 型の値を代入することができます。

このとき、 `person` は `Person` クラスのインスタンスと呼ばれます。

::: details Deep Dive: `Array` クラス
今まで配列は `const arr = [1, 2, 3]` のように定義してきましたが、これは `Array` クラスを使って以下のように書くこともできます。

```js
const arr = new Array(1, 2, 3);
```

:::

### プロパティ

クラス内で定義される変数をプロパティと言います。上記の例で言うと、`name`と`age`がプロパティにあたります。これらはクラスの各インスタンスに紐づいた変数のようなものです。

プロパティには、以下のようにしてアクセスできます。

```js
console.log(person.name); // 山田太郎
```

[Go to Playground](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGn6w6EALogK7DEqIAUaYAtvADTRgDm8AlFrvv8QAWASwgA6ek2gBeaJPgBuPvzxDRYjvBltOS-gF9sy6O0Tx4xGjxwr8hNKhDwxIFOxoADQMoMgZIZA1gyAhgyA9gyAgAyAg56AdgyAsCqAskpBACSYauLy+oDmDICaDIBADB5ceviGhtj2JNAADkioGLJo8ADucJXoNABEgI46gAyugFSagHMJLawAzAAMeUYlKE4ubjQVyOgSjNwK0AD0K9CdvUA)

配列の反復処理で `.length` というものが出てきましたが、これは配列の要素数が保存されたプロパティです。

### メソッド

クラス内で定義される関数をメソッドと言います。これにより、クラスの振る舞いを定義できます。

```js
person.greet(); // こんにちは、私の名前は山田太郎です。
```

[Go to Playground](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGn6w6EALogK7DEqIAUaYAtvADTRgDm8AlFrvv8QAWASwgA6ek2gBeaJPgBuPvzxDRYjvBltOS-gF9sy6O0Tx4xGjxwr8hNKhDwxIFOxoADQMoMgZIZA1gyAhgyA9gyAgAyAg56AdgyAsCqAskpBACSYauLy+oDmDICaDIBADB5ceviGhtj2JNAADkioGLJo8ADucJXoNABEgI46gAyugFSagHMJLawAzAAMeUYlKE4ubjQVyOgSjNwK0AD0K9CdvUazVWKm5pZ5q+u+gaGRsUGbPZlZQA)

配列のDeep Diveに `map()` や `filter()` が出てきましたが、これらは配列のメソッドです。

### 代表的な標準のクラス

ここまででクラスを新しく作成する方法を学びましたが、JavaScriptにはすでにいくつかのクラスが用意されています。

代表的なところでいうと、日付を扱うための `Date` クラスです。

`Date` クラスは以下のように利用できます。

```js
const now = new Date(); // 現在日時から `Date` インスタンスを作成
console.log(now.toString()); // `Date` クラスが保存している日時を文字列に変換して出力
console.log(now.getFullYear()); // `Date` クラスが保存している年を取得

const date = new Date("2023/01/01"); // 2023年1月1日の `Date` インスタンスを作成
date.setDate(date.getDate() + 1); // 1日後の日付をセット
console.log(date.toString()); // 2023年1月2日の文字列を出力
```

より詳しくは [Date \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) を参照してください。

::: warning Exam
以下の要件を満たすクラスを定義せよ。

- `Wallet` というクラスを定義する
- `new` で残高を指定する
- プロパティとして `money` を持つ
- `show()` というメソッドがあり、残高を標準出力する
- `use(price)` というメソッドがあり、引数で利用した金額をプロパティの `money` から引く
- `add(price)` というメソッドがあり、引数で追加する金額をプロパティの `money` に足す

上記で定義したクラスを使って以下の処理を行え。

1. 新しく `Wallet` インスタンスを作成し、残高を1000円にする
2. `show()` を呼び出し、残高を標準出力する
3. 残高から500円引く
4. 残高に300円を追加する
5. `show()` を呼び出し、残高を標準出力する
6. もう一つ新しく `Wallet` インスタンスを作成し、残高を700円にする
7. 1つ目と2つ目の残高を比較し、多い方の残高を標準出力する

[回答例](https://www.typescriptlang.org/play?noImplicitAny=false&filetype=js#code/MYGwhgzhAEDqYhAUwC7QN4ChrWAewDsIUAnAV2BTxIAoBbQpATwEoNsdoUALASwgB0DAs2gBeaMOYBuDgF9MHCNzwB3GmyydchCHmQCQeAOY0e-IY1aycCjmQhIaABxK9gSTR07nBUpuJcfH5W0AC00K7uSNLQAPRx0AAGvpYiAWESUR5J0IDmDIBBDIARDIAiDPKKOGAAJlUubh5e2qn+gc2hANSR9UjxiSnBaaLtWd25haXldnEAVNAAjNDTcZj4RGiqCMgoCxIiqnCbqDRzAAxnLLKYM9AATIvLG4iocwLKahqX1wDM95iPWy8HE4AKznT6zAAsv3+zwE1VqXzBimuwOhh22rxU6guyNmADZfqtiNAYSg7rskPt4E8UDQAOxIq6zOm-XgAM2gNFJLxaAB4SeiboNWOwcET9EhDCYuYLhTi5NAkCBHKKdEQJVLTNy5bIFEA)
:::

## まとめ

以上が、JavaScriptの基本的な書き方です。

GASを扱う場合、ここに書かれている内容は最低限理解しておく必要があります。もしGASなどを書いていてわからないことがあれば、このドキュメントを参照してください。
