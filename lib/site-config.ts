/**
 * サイト共通設定（サービス・事業者情報の一元管理）。
 *
 * 案件（店舗・サービス）ごとに複製した際は、このファイルの値を
 * 差し替えるだけでサイト全体の情報を更新できるようにしています。
 *
 * すべての外部URL・事業者情報はここで一元管理します。
 * URLや情報が未確定のものは "#" または "要確認" のプレースホルダーにしています。
 * 確定した情報のみをここへ入力してください（未確定情報は捏造しない）。
 *
 * 今回の案件：個人で小規模に始めるオンラインピラティスサービス。
 * 店舗・スタジオを主役にしないため、所在地・営業時間等の「店舗」情報は
 * 基本的に持たず、オンライン提供であることを前提に構成しています。
 */
export const siteConfig = {
  // --- サービス・事業者基本情報 ---
  // 要確認: サービス正式名称・事業者名は未確定。"LUNE" は仮称です。
  name: 'LUNE',
  nameJa: 'ルーン',
  service: 'オンラインピラティス',
  tagline: '自分の身体と、ちゃんと向き合う時間。',
  taglineEn: 'Move Better, Live Lighter.',

  // --- 提供エリア ---
  // オンライン中心のサービスのため、店舗所在地ではなく提供エリアを表記する。
  areaLabel: 'ONLINE PILATES', // Hero等で使う短縮表記（英字）
  areaServed: 'オンライン（全国）', // どこからでも参加できることを示す表記

  // --- 店舗アクセス情報（今回のオンラインサービスでは非表示。 ---
  // --- 汎用テンプレートとしての互換のため項目自体は残すが、値は未確定のまま） ---
  location: '要確認',
  station: '要確認',
  openingHours: '要確認',
  closedDays: '要確認',
  phone: '要確認',

  // --- 外部リンク：確定URLに差し替え ---
  reservationUrl: '#', // 予約フォーム / LINE の最終URL
  lineUrl: '#',
  // 要確認: 今回のオンラインピラティスサービス用アカウントが未確定のため未設定。
  // 確定後、確定URL・ハンドル名に差し替えてください（footer.tsx側で
  // instagramUrlが未確定の間は自動的に非表示になります）。
  instagramUrl: '#',
  instagramHandle: '要確認',
  youtubeUrl: '#',
  googleMapUrl: '#', // オンライン中心のため基本未使用

  // --- サイト / SEO / 構造化データ ---
  // app/layout.tsx のmetadataおよびJSON-LD（components/json-ld.tsx）から参照。
  siteUrl: 'https://lune-pilates.example.com', // 要確認：確定ドメインに差し替え
  seoTitle: 'LUNE｜自宅から始めるオンラインピラティス', // 要確認：正式名称確定後に見直し
  seoDescription:
    '自宅から受けられるオンラインピラティス。マンツーマンで、一人ひとりの身体に合わせて。ピラティスを学び続ける指導者が、はじめての方にも丁寧にお伝えします。',
  ogImage: '/images/pilates/og/og-image.png', // 要確認：画像未配置。差し替え用フォルダのみ準備済み
  locale: 'ja_JP',
  // schema.org の type。物理店舗を持たないオンラインサービスのため、
  // LocalBusiness系（旧: HealthAndBeautyBusiness）から汎用の 'Service' に変更。
  // 要確認: 'ProfessionalService' 等より適切な type がないか、確定情報が揃った時点で再検討してください。
  businessType: 'Service',
  // schema.org priceRange相当の目安。料金確定後に入力。
  priceRange: '要確認',
} as const

export type SiteConfig = typeof siteConfig
