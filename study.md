# 勉強用メモ

★小清水印刷調べ (2019/5/9)

## ツール

### git

バージョン管理システム

#### git リポジトリ

Microsoftに買収された。「設計図共有サイト」
 [GitHub](https://github.com/) `https://github.com/`

Attrasian [bitbucket](https://ja.atlassian.com/software/bitbucket) `https://ja.atlassian.com/software/bitbucket`

AWS [Codecommit](https://aws.amazon.com/jp/codecommit/) `https://aws.amazon.com/jp/codecommit/`

#### git用ツール

##### GUI

Attrasian　[sourcetree](https://ja.atlassian.com/software/sourcetree)

### vs-code

開発向けテキストエディタ
[ダウンロード](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)

#### vs-code の extension

■コード整形 [beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

■プロジェクトマネージャー
プロジェクトごとにフォルダを登録しておける。
[project-manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)

■コード内でその行を誰が編集したかがわかる。
[gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## ライブラリ

### puppeteer

WEBスクレイピング
[https://www.npmjs.com/package/puppeteer](https://www.npmjs.com/package/puppeteer)

### imagemagick

画像加工ライブラリ
[https://www.npmjs.com/package/imagemagick](https://www.npmjs.com/package/imagemagick)

### resemble.js

画像比較ツール
[https://www.npmjs.com/package/resemblejs](https://www.npmjs.com/package/resemblejs)

```script:title
npm install resemblejs
```

```script:title
getDiff('resemblejs/1.png','resemblejs/2.png','resemblejs/output2.png');
```

## markdown記法

[https://help.github.com/en/articles/basic-writing-and-formatting-syntax](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)

### インラインコード

インライン表示の`テキストやコード`

### コードの書き方

```java:title
int i = 0; //コード
```

### 引用の書き方

```markdown:title
> テキスト
>> テキスト
```

> テキスト
>> テキスト

### リンクさせない

\ バックスラッシュをコロンの前に使う

```markdown:tilte
https\://github.com/
```

## 言語

### javascript(ES6)

#### await async

### nodejs

### PHP

### Scratch

### HTML5

### CSS3

## フレームワーク

### vue

### Flutter