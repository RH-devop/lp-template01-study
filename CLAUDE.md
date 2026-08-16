@AGENTS.md

# このリポジトリについて（Claude Code向け作業ルール）

## 1. このテンプレートの目的

店舗・サロン・飲食・自動車・建築・各種サービスなど、**さまざまな業種の1ページLP（ランディングページ）を量産するためのNext.jsテンプレート**です。
現状のLP本体は、個人で小規模に始めるオンラインピラティスサービスの実装例ですが、コード構造自体は業種を問わず再利用できるように整理されています。

### 基本制作フロー

1. このテンプレートフォルダを案件ごとに複製
2. ChatGPTで店舗・サービス情報を整理
3. ChatGPTでLP構成・コピー・デザイン仕様書を作成
4. Claude Codeに店舗情報と仕様書を渡す
5. Claude Codeがテンプレートを案件用に改修
6. `npm run dev`でlocalhost確認
7. `npx tsc --noEmit` / `npm run build`で確認
8. GitHubへpush
9. Vercelで公開

新しい会話でこのテンプレートを使う場合、Claude Codeはまずこのファイルを読み、上記フローに沿って作業する。

## 2. ファイルの役割

| ファイル / ディレクトリ | 役割 |
|---|---|
| `lib/site-config.ts` | 店舗名・キャッチコピー・所在地・営業情報・外部URL・SEO/構造化データ用の値を一元管理 |
| `lib/content.ts` | LP本文（各セクションの見出し・本文・料金・FAQ・画像src/alt・CTA文言・ナビゲーション）を一元管理 |
| `app/page.tsx` | 使用するセクションのimportと表示順序 |
| `app/globals.css` | ブランドカラー・フォントトークン・角丸などのデザイントークン |
| `app/layout.tsx` | フォント読み込みとmetadata（`site-config.ts`の値を参照） |
| `components/` | 各LPセクションの実装（1コンポーネント=1セクション） |
| `components/json-ld.tsx` | LocalBusiness系構造化データ（JSON-LD）の生成。`site-config.ts`の値から自動生成 |
| `app/robots.ts` / `app/sitemap.ts` | robots.txt / sitemap.xml。`site-config.ts`の`siteUrl`を参照 |
| `public/images/` | LPで使う画像。`pilates/hero` `pilates/profile` `pilates/lesson` `pilates/learning` `pilates/lifestyle` `pilates/gallery` `pilates/og`の用途別フォルダ構成 |

## 3. セクションの考え方

`app/page.tsx`のimportとJSXを直接編集してセクション構成を変える。過剰なセクション管理システム（レジストリ、CMS的な仕組み等）は作らない。

- **基本セクション**（ほぼ全業種でそのまま使用）
  `Header` / `Hero` / `About` / `Gallery` / `WhoItsFor` / `Experience` / `Pricing` / `FAQ` / `Footer`
- **業種・案件固有セクションの実装例**（今回はオンラインピラティス向け。他業種では削除するか、同じ書き方で案件固有のセクションを作る参考にする）
  `Features` / `Learning` / `OnlineLesson`

新案件では、ChatGPTから渡されたLP構成仕様に従って`app/page.tsx`のimportとJSXを追加・削除・並べ替える。

## 4. 新案件での変更順序

1. `lib/site-config.ts`（店舗情報・URL・SEO値）
2. `lib/content.ts`（LP本文・料金・FAQ・画像パス・CTA文言）
3. `public/images/`（画像の配置）
4. `app/page.tsx`（セクション構成の追加・削除・並べ替え）
5. `app/globals.css`（ブランドカラー・デザイントークン）
6. `app/layout.tsx`（フォント）
7. Hero（`components/hero.tsx`） / CTA（`components/cta-button.tsx`）
8. 各セクションの個別デザイン調整
9. SEO / JSON-LDの値確認（`site-config.ts`の`seoTitle` `seoDescription` `ogImage` `businessType` `priceRange`等）
10. `npx tsc --noEmit` → `npm run build` → localhost確認

## 5. 重要ルール

- 未確定情報を推測して作らない
- 「要確認」「未定」「#」等のプレースホルダーは構造化データ（JSON-LD）へ出力しない（`components/json-ld.tsx`は既にこの方針で未確定値を自動的に除外する実装になっている）
- 店舗情報は可能な限り`lib/site-config.ts`へ集約する
- LP本文は可能な限り`lib/content.ts`へ集約する
- コンポーネントへ案件固有の文言を直接ハードコードしない
- 画像のsrc/altも可能な限り`lib/content.ts`（または`site-config.ts`のogImage等）から管理する
- デザイン変更で過剰な抽象化をしない（`app/globals.css`のCSS変数と各コンポーネントのTailwindクラスを直接編集する）
- 不要なCMSやセクションレジストリを追加しない
- 既存のアクセシビリティ対応（aria属性、focus-visible、reduced-motion対応等）を壊さない
- モバイル表示を優先して確認する
- SEO metadata / JSON-LD / sitemap / robotsは案件の実際の情報と一致させる
- 外部URL（予約・LINE・Google Map等）が未確定の場合は、ダミーURL（`#`）を本番公開用データとして扱わない
