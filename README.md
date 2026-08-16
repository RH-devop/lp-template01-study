# LP Template（1ページLP量産テンプレート）

店舗・サロン・飲食・自動車・建築・各種サービスなど、さまざまな業種の1ページLP（ランディングページ）を作るためのNext.jsテンプレートです。
プログラミング未経験でも、この手順通りに進めれば新しい案件のLPを立ち上げられます。

現在このテンプレートには、個人で小規模に始めるオンラインピラティスサービスのLPが実装例として入っています。新しい案件では、この内容を差し替えて使います。

---

## 必要なツール

| ツール | 用途 |
|---|---|
| [VS Code](https://code.visualstudio.com/) | コードを開いて確認するエディタ |
| [Node.js / npm](https://nodejs.org/) | このLPを動かすための実行環境（npmはNode.jsに同梱） |
| [Git](https://git-scm.com/) | ファイルの変更履歴を管理するツール |
| Claude Code | このテンプレートを案件用に改修してもらうAIツール |
| [GitHub](https://github.com/) | コードを保管・共有する場所 |
| [Vercel](https://vercel.com/) | LPを実際に公開（デプロイ）するサービス |

---

## 新案件を始める手順

### 1. テンプレートフォルダを複製する

このテンプレートフォルダをまるごとコピーし、新しい案件用のフォルダ名（例: `lp-案件名`）にリネームします。

### 2. VS Codeでフォルダを開く

VS Codeを起動し、「フォルダを開く」で複製したフォルダを選択します。

### 3. 依存パッケージをインストールする

VS Code内のターミナルで以下を実行します。

```bash
npm install
```

### 4. Claude Codeを起動する

VS Codeのターミナル、またはClaude CodeのCLI/拡張機能からこのフォルダを対象にClaude Codeを起動します。
起動すると、Claude Codeはまず`CLAUDE.md`を読み、このテンプレートの構造とルールを理解します。

### 5. 店舗情報・LP仕様書をClaude Codeに渡す

事前にChatGPTで整理した以下の情報をClaude Codeに貼り付けて渡します。

- 店舗・サービス情報（店舗名、キャッチコピー、住所、営業時間、料金など）
- LPの構成案（どのセクションを使うか）
- コピー（見出し・本文・FAQなど）
- デザイン仕様書（配色・フォント・雰囲気など）

Claude Codeはこれをもとに、`lib/site-config.ts` → `lib/content.ts` → 画像 → `app/page.tsx` → デザインの順で改修します（詳細は`CLAUDE.md`参照）。

### 6. ローカルで確認する

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開き、表示を確認します。PC表示とスマホ表示（ブラウザの検証ツールでスマホサイズに切り替え）の両方を確認してください。

### 7. TypeScriptチェックとビルド確認

公開前に、コードにエラーがないかを必ず確認します。

```bash
npx tsc --noEmit
npm run build
```

どちらもエラーなく完了すれば問題ありません。

### 8. Gitで管理を始める（まだの場合）

```bash
git init
git add .
git commit -m "Initial commit"
```

### 9. GitHubへpushする

GitHubで新しいリポジトリを作成し、以下を実行します（GitHub側の表示に従ってURLを差し替えてください）。

```bash
git remote add origin <GitHubリポジトリのURL>
git branch -M main
git push -u origin main
```

### 10. Vercelで公開する

1. [Vercel](https://vercel.com/)にログインし、「New Project」から手順9のGitHubリポジトリを選択
2. 特別な設定は不要（Next.jsを自動検出）
3. 「Deploy」をクリックすると数分で公開URLが発行される

---

## どの情報を変更するとどこへ反映されるか

| 変更したい情報 | 編集するファイル | 反映される場所 |
|---|---|---|
| 店舗名・サービス名・キャッチコピー | `lib/site-config.ts` | ヘッダー、フッター、Hero、SEOタイトル等 |
| 提供エリア・営業情報 | `lib/site-config.ts` | Hero、フッター、JSON-LD |
| 予約URL・LINE・Instagram・YouTube | `lib/site-config.ts` | 各セクションのCTAボタン、フッター、JSON-LD |
| サイトURL・SEOタイトル/description・OGP画像 | `lib/site-config.ts` | `app/layout.tsx`のmetadata、OGP、Twitterカード、JSON-LD |
| 業種区分（businessType）・価格帯（priceRange） | `lib/site-config.ts` | JSON-LD構造化データ |
| 各セクションの見出し・本文・料金・FAQ・CTA文言 | `lib/content.ts` | 対応する各セクション |
| 画像 | `public/images/`配下に配置 → `lib/content.ts`のsrcを変更 | Hero・Gallery・各セクションの写真 |
| 表示するセクションの取捨選択・並び順 | `app/page.tsx` | LP全体の構成 |
| 配色・フォント・角丸などのデザイン | `app/globals.css`（色・角丸）/ `app/layout.tsx`（フォント） | LP全体の見た目 |
| Hero・CTAボタンの見た目 | `components/hero.tsx` / `components/cta-button.tsx` | Hero・各所のCTAボタン |

---

## 新案件チェックリスト

### 制作前に準備する情報

- [ ] 店舗名
- [ ] サービス内容
- [ ] キャッチコピー
- [ ] 住所
- [ ] 営業時間
- [ ] 定休日
- [ ] 料金
- [ ] 予約URL
- [ ] SNS（Instagram / LINE / YouTube等）
- [ ] 写真
- [ ] SEO情報（タイトル・説明文）
- [ ] LPの目的（何をしてもらいたいLPか）

### 公開前に確認する項目

- [ ] PC表示
- [ ] スマホ表示
- [ ] CTA（ボタンの文言・遷移先）
- [ ] 予約リンク
- [ ] SNSリンク
- [ ] 料金
- [ ] FAQ
- [ ] 住所
- [ ] OGP（SNSシェア時の見た目）
- [ ] metadata（タブのタイトル・検索結果の説明文）
- [ ] JSON-LD（構造化データの内容）
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] `npx tsc --noEmit`が通ること
- [ ] `npm run build`が通ること
- [ ] GitHubへpush済みであること
- [ ] Vercelで公開・動作確認済みであること
