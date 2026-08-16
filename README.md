# Online Pilates LP / Next.js Learning Project

Next.js / React / TypeScript / Tailwind CSS を学習しながら制作した、オンラインピラティス向けの1ページLPです。

既存のLPをそのまま流用するのではなく、サービス情報・コンテンツ・UIコンポーネントを整理し、別業種にも展開しやすいLPテンプレートとして再構成しました。

制作では ChatGPT / Claude Code を開発支援として活用しながら、自分自身でもコードの確認・変更、UI調整、レスポンシブ確認、エラーの切り分け、Gitによる変更管理、GitHub / Vercelを利用した公開まで一連の開発フローを経験しています。

AIによるコード生成そのものを目的とするのではなく、生成・提案されたコードを確認しながら、Next.js / React / TypeScriptを使ったWeb開発の構造と流れを理解することを目的とした学習プロジェクトです。

---

## Demo

https://lp-template01-study.vercel.app

---

## 使用技術

| 技術 | 用途 |
|---|---|
| Next.js 16 | Webアプリケーションフレームワーク |
| React 19 | UIコンポーネント構築 |
| TypeScript | 型安全なコンテンツ・設定管理 |
| Tailwind CSS v4 | UI・レスポンシブデザイン |
| next/image | 画像表示・最適化 |
| next/font | Webフォント管理 |
| Vercel Analytics | アクセス解析 |
| npm | パッケージ管理 |
| Git / GitHub | バージョン管理・コード管理 |
| Vercel | ビルド・デプロイ |
| ChatGPT | 要件整理・設計・学習・問題切り分け支援 |
| Claude Code | コード確認・実装・リファクタリング支援 |

---

## このプロジェクトで実装・学習したこと

### Next.js

- App Routerを利用したページ構成
- `app/page.tsx` によるページ構築
- `app/layout.tsx` による共通レイアウト
- Metadata APIによるSEO情報設定
- OGP / Twitter Card設定
- `sitemap.ts` / `robots.ts` の設定
- `next/image` による画像表示
- `next/font` によるフォント管理
- JSON-LDによる構造化データ
- Production Buildの確認

### React

- セクション単位でのコンポーネント分割
- 新規コンポーネントの作成
- JSXによるUI構築
- `import` / `export` によるモジュール分割
- propsによるコンポーネント制御
- `map()` を利用したデータからのUI生成
- 条件レンダリング
- 共通CTAコンポーネントの利用

LP全体を1つの巨大なファイルにせず、Hero / About / Features / Pricing / FAQなどを独立したコンポーネントとして管理しています。

---

### TypeScript

サービス情報やLP内のコンテンツをTypeScriptで管理しています。

主に以下のファイルへ情報を集約しています。

```text
lib/site-config.ts
lib/content.ts
```

`site-config.ts` ではサイト全体で利用する設定情報、`content.ts` では各セクションのコンテンツを管理しています。

UIとデータを分離することで、別案件へ展開するときにコンポーネントそのものを大量に書き換えなくても、設定・コンテンツを中心に変更できる構成を目指しました。

また、公開前には以下を実行しています。

```bash
npx tsc --noEmit
```

`next build` の結果だけに依存せず、TypeScriptの型チェックを明示的に実行し、型エラーがないことを確認しています。

---

### Tailwind CSS

Tailwind CSSのUtility Classを利用してUIを構築しています。

学習・実装した内容：

- `px-*` / `py-*` による余白調整
- `text-*` による文字サイズ調整
- `grid` / `flex` によるレイアウト
- `gap-*` による要素間隔
- `max-w-*` によるコンテンツ幅制御
- `sm:` / `md:` / `lg:` によるレスポンシブ対応
- hover状態の変更
- CSS VariablesとTailwindを組み合わせたデザイントークン管理

---

## レスポンシブ対応

PCだけでなく、スマートフォン表示も確認しながら調整しています。

例えば、

```tsx
grid md:grid-cols-2
```

のようにTailwind CSSのブレークポイントを利用し、

```text
スマートフォン
1カラム
↓
PC
2カラム
```

のように画面幅によってレイアウトを変更しています。

Chrome DevToolsを利用してスマートフォンサイズでの表示を確認し、文字サイズ・余白・画像比率・CTAなどを調整しました。

---

## コンポーネント設計

`app/page.tsx` から各セクションコンポーネントを読み込み、LP全体を構成しています。

主な構成：

```text
Header
↓
Hero
↓
About
↓
Features
↓
Learning
↓
OnlineLesson
↓
Gallery
↓
WhoItsFor
↓
Experience
↓
Pricing
↓
FAQ
↓
Footer
```

各セクションを独立させることで、

- セクションの追加
- 削除
- 並び替え
- 別案件への再利用

を行いやすくしています。

---

## コンテンツ管理設計

案件固有の情報をできるだけコンポーネントから分離しています。

### `lib/site-config.ts`

サイト全体で使用する設定を管理します。

例：

- サービス名
- 提供エリア
- 予約URL
- SNS
- SEOタイトル
- description
- OGP画像
- サイトURL
- 構造化データ用情報

### `lib/content.ts`

LP各セクションのコンテンツを管理します。

例：

- Hero
- About
- Features
- Learning
- Online Lesson
- Gallery
- Who It's For
- Experience
- Pricing
- FAQ

これにより、

```text
デザイン・UI
components/

サービス固有情報
lib/
```

という役割分担を意識した構成にしています。

---

## デザイン

オンラインピラティスサービスを想定し、柔らかく落ち着いた印象になる配色を使用しています。

| 用途 | Color |
|---|---|
| Background | `#F7F3ED` |
| Accent | `#A97882` |
| Text | `#292827` |

- Background：あたたかいアイボリー
- Accent：くすみモーブ
- Text：チャコール

色はCSS Variablesとして管理し、案件ごとに変更しやすい構成にしています。

---

# トラブルシューティング

制作中には、正常に動くケースだけでなく複数のエラーにも遭遇しました。

エラー内容をそのままAIへ修正させるのではなく、コード・依存関係・実行環境を確認しながら原因範囲を切り分けることを意識しました。

## 1. Next.js実行環境 / node_modules

開発サーバー起動時にNext.jsの実行ファイルを正常に利用できない状態が発生しました。

依存関係を確認し、

```bash
npm install
```

を実行して `node_modules` を構築し直すことで開発環境を復旧しました。

この経験から、

```text
package.json
↓
npm install
↓
node_modules
↓
npm run dev
```

という依存関係と実行環境の基本的な関係を確認しました。

---

## 2. Turbopack / next/font

Google Fonts利用時に、Turbopack環境で以下のモジュール解決エラーが発生しました。

```text
Module not found:
Can't resolve '@vercel/turbopack-next/internal/font/google/font'
```

コードを闇雲に変更するのではなく、Webpackを使用して開発サーバーを起動しました。

```bash
npm run dev -- --webpack
```

Webpackでは正常に表示できることを確認し、アプリケーションコードそのものと開発環境・バンドラ側の問題を切り分けました。

---

## 3. Reactコンポーネント追加時のエラー

新しく`Features`コンポーネントを追加した際、

```text
Element type is invalid
```

というRuntime Errorが発生しました。

以下を確認しました。

- componentのexport
- `page.tsx`側のimport
- ファイルパス
- JSX
- コンポーネント定義

さらにコンポーネントを最小構成で表示し、正常にレンダリングできることを確認してから段階的にUIを戻すことで、問題範囲を切り分けました。

---

## 4. TypeScript / Production Build

公開前には、

```bash
npx tsc --noEmit
npm run build
```

をそれぞれ実行しています。

型チェックとProduction Buildを分けて確認することで、ビルド結果だけではなくTypeScript上の問題も明示的に確認しています。

---

## 5. GitHub Public公開前のGit履歴整理

GitHubでリポジトリをPublic公開する前に、APIキー・Secret・個人情報などが含まれていないか確認しました。

その過程で、

> 現在のファイルから情報を削除しても、過去のGitコミットには残る

というGitの履歴管理について学びました。

そこで、

- Git管理対象ファイルの確認
- `.gitignore` の確認
- `.env` の除外
- Secret / メールアドレス等の検索
- Gitコミット履歴の確認
- GitHub noreplyメールアドレスの設定
- バックアップ作成
- クリーンなroot commitの作成
- `--force-with-lease`を利用した安全性を考慮した履歴更新

を実施しました。

Publicリポジトリでは現在のソースコードだけでなく、過去のコミット履歴も公開対象になることを実際のGit操作を通して確認しました。

---

# AIを活用した開発フロー

このプロジェクトでは、ChatGPTとClaude Codeを開発支援ツールとして使用しています。

AIにすべてを任せるのではなく、役割を分けながら、提案されたコードや変更内容を確認して進めています。

### ChatGPT

- 要件整理
- LP構成検討
- コピー検討
- デザイン方針
- 技術概念の学習
- エラー内容の整理
- デバッグ方針の検討

### Claude Code

- 既存コードの調査
- 実装支援
- コンポーネント作成
- リファクタリング
- TypeScriptチェック
- Production Build確認
- リポジトリ内の横断的な確認

### 自分

- 要件・仕様の判断
- コードの確認・変更
- 配色・UI調整
- コンポーネント追加
- PC / スマートフォン表示確認
- エラーの再現・切り分け
- Git操作
- GitHub管理
- デプロイ確認
- 最終的な採否判断

AIを「コードを完成させてもらうためのツール」としてだけではなく、実装・検証・学習のサイクルを速める開発支援として利用しています。

---

# 開発フロー

```text
要件整理
   ↓
LP構成・デザイン設計
   ↓
Next.js / React実装
   ↓
ローカル環境で確認
   ↓
レスポンシブ確認
   ↓
TypeScriptチェック
   ↓
Production Build
   ↓
Git
   ↓
GitHub
   ↓
Vercel
```

GitHubとVercelを連携し、GitHubへのpushを起点としてVercel側で新しいデプロイが実行される構成を使用しています。

---

# LPテンプレートとしての利用

このプロジェクトはオンラインピラティスLPの実装例であると同時に、店舗・サロン・飲食・自動車・建築・各種サービスなど、別業種の1ページLPへ展開することを想定したテンプレートでもあります。

新しい案件では、サービス情報・コピー・画像・配色などを変更して利用します。

---

## 必要なツール

| ツール | 用途 |
|---|---|
| VS Code | コード編集・確認 |
| Node.js / npm | Next.jsの実行環境・パッケージ管理 |
| Git | バージョン管理 |
| GitHub | コード管理 |
| Vercel | デプロイ |
| Claude Code | AIによる実装支援 |
| ChatGPT | 要件整理・設計・学習支援 |

---

# 新案件を始める手順

## 1. テンプレートを複製

テンプレートフォルダをコピーし、新しい案件用フォルダを作成します。

例：

```text
lp-client-name
```

---

## 2. VS Codeで開く

VS Codeから複製したフォルダを開きます。

---

## 3. 依存パッケージをインストール

```bash
npm install
```

---

## 4. 開発サーバーを起動

```bash
npm run dev
```

環境によってTurbopack関連の問題が発生する場合は、原因切り分けとしてWebpackでの起動も確認します。

```bash
npm run dev -- --webpack
```

ブラウザ：

```text
http://localhost:3000
```

---

## 5. 案件情報を整理

制作前に以下を整理します。

- サービス名
- サービス内容
- ターゲット
- キャッチコピー
- 提供エリア
- 営業情報
- 料金
- 予約URL
- SNS
- 写真
- SEO情報
- LPの目的

---

## 6. サービス情報を変更

主に、

```text
lib/site-config.ts
lib/content.ts
```

を変更します。

---

## 7. 必要に応じて構成を変更

```text
app/page.tsx
```

でセクションの追加・削除・並び替えを行います。

必要に応じて、

```text
components/
```

へ新しいセクションコンポーネントを追加します。

---

## 8. デザインを変更

主に、

```text
app/globals.css
app/layout.tsx
components/
```

を変更します。

---

## 9. PC / スマートフォン表示を確認

Chrome DevTools等を利用し、

- PC
- スマートフォン

の両方で表示を確認します。

---

## 10. TypeScript / Build確認

```bash
npx tsc --noEmit
npm run build
```

両方が正常に完了することを確認します。

---

## 11. GitHubへpush

```bash
git status
git add .
git commit -m "Update LP"
git push
```

---

## 12. Vercelで確認

GitHubへのpush後、Vercel側でデプロイが完了したことを確認し、本番URLで最終確認します。

---

# どの情報を変更するとどこへ反映されるか

| 変更したい情報 | 編集するファイル | 反映される場所 |
|---|---|---|
| サービス名・基本情報 | `lib/site-config.ts` | Header / Footer / Hero / SEO等 |
| 提供エリア | `lib/site-config.ts` | Hero / Footer / JSON-LD |
| 予約URL・SNS | `lib/site-config.ts` | CTA / Footer等 |
| SEO・OGP | `lib/site-config.ts` | Metadata / OGP / JSON-LD |
| 各セクションの文章 | `lib/content.ts` | 各セクション |
| 料金・FAQ | `lib/content.ts` | Pricing / FAQ |
| 画像 | `public/images/` + `lib/content.ts` | Hero / Gallery等 |
| セクション構成 | `app/page.tsx` | LP全体 |
| 配色・角丸 | `app/globals.css` | LP全体 |
| フォント | `app/layout.tsx` | LP全体 |
| Hero | `components/hero.tsx` | Hero |
| CTA | `components/cta-button.tsx` | CTAボタン |

---

# 公開前チェックリスト

## コンテンツ

- [ ] サービス名
- [ ] キャッチコピー
- [ ] サービス内容
- [ ] 料金
- [ ] CTA
- [ ] 予約URL
- [ ] SNSリンク
- [ ] FAQ
- [ ] 画像

## UI

- [ ] PC表示
- [ ] スマートフォン表示
- [ ] 文字サイズ
- [ ] 余白
- [ ] 画像比率
- [ ] CTAの視認性

## SEO

- [ ] title
- [ ] description
- [ ] OGP
- [ ] JSON-LD
- [ ] robots.txt
- [ ] sitemap.xml

## Technical

- [ ] `npx tsc --noEmit`
- [ ] `npm run build`
- [ ] GitHubへpush済み
- [ ] Vercelでデプロイ成功
- [ ] 本番URLで表示確認

## Security

- [ ] `.env`がGit管理対象外
- [ ] APIキー / Secretが含まれていない
- [ ] 不要な個人情報が含まれていない
- [ ] Public公開する場合はGit履歴も確認

---

# セットアップ

```bash
npm install
npm run dev
```

ブラウザで以下を開きます。

```text
http://localhost:3000
```

型チェック：

```bash
npx tsc --noEmit
```

Production Build：

```bash
npm run build
```

---

# 今後の改善

- 実際のサービス情報への置き換え
- 実画像への差し替え
- 予約フォームとの連携
- SEO改善
- Lighthouse等を利用したパフォーマンス計測・改善
- アクセシビリティ改善
- LPテンプレートとしての再利用性向上
