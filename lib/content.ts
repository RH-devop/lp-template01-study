/**
 * LP本文データ（配列・オブジェクトで一元管理）。
 * JSX内に同じ情報を直書きせず、ここを編集すればページに反映されます。
 * 案件（店舗・サービス）ごとに複製した際は、主にこのファイルと
 * lib/site-config.ts を差し替えることでコピーを更新できます。
 *
 * 今回の案件：個人で小規模に始めるオンラインピラティスサービス。
 * 資格名・料金・レッスン時間・使用ツール等、未確定の情報は
 * 捏造せず「要確認」のまま残しています。確定次第差し替えてください。
 */

/* -------------------------------------------------------------------------- */
/* NAVIGATION                                                                 */
/* header.tsx / footer.tsx 共通で使用                                        */
/* -------------------------------------------------------------------------- */
export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'LEARNING', href: '#learning' },
  { label: 'LESSON', href: '#lesson' },
  { label: 'PRICE', href: '#price' },
  { label: 'FAQ', href: '#faq' },
]

/* -------------------------------------------------------------------------- */
/* CTA LABELS（複数セクションで共通の文言）                                  */
/* -------------------------------------------------------------------------- */
export const ctaLabels = {
  reserve: 'レッスンを予約する',
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */
export const heroContent = {
  eyebrow: 'ONLINE LESSON',
  headingLines: ['自分の身体と、', 'ちゃんと向き合う時間。'],
  subHeadingLines: ['Move Better,', 'Live Lighter.'],
  lead: 'オンラインだから、もっと気軽に。でも、身体には丁寧に。画面越しでも、一人ひとりの動きを見ながらお伝えするピラティスレッスンです。',
  ctaPrimaryLabel: 'オンラインレッスンを予約する',
  ctaSecondaryLabel: 'レッスン内容を見る',
  ctaSecondaryHref: '#lesson',
  image: {
    // 要確認: /images/pilates/hero/hero-01.jpg 等の実写に差し替え予定（本人がピラティスをしている写真を想定）
    src: '/placeholder.svg',
    alt: 'オンラインでピラティスを指導する本人の写真（画像は準備中）',
  },
}

/* -------------------------------------------------------------------------- */
/* ABOUT / PROFILE                                                            */
/* 店舗紹介ではなく「誰から教わるか」が伝わる、指導者本人のプロフィール。   */
/* -------------------------------------------------------------------------- */
export type AboutStep = {
  en: string
  ja: string
}

export const aboutContent = {
  label: 'Profile',
  headingLines: ['どこで受けるかより、', '誰から教わるか。'],
  paragraphs: [
    [
      'ふだんはピラティススタジオでインストラクターとして指導しながら、',
      '身体の仕組みや動きについて学び続けています。',
    ],
    [
      '強さや回数を追うのではなく、その人の身体の声を聞きながら、ひとつひとつの動きを丁寧に。まずはオンラインで、気軽に始めてみませんか。',
    ],
  ] as string[][],
  steps: [
    { en: 'LISTEN', ja: '身体の状態や目的をうかがう' },
    { en: 'MOVE TOGETHER', ja: '一つひとつの動きを一緒に確認する' },
    { en: 'KEEP LEARNING', ja: '学び続け、指導に還元する' },
  ] as AboutStep[],
}

/* -------------------------------------------------------------------------- */
/* FEATURES（オンラインならではの特徴）                                      */
/* -------------------------------------------------------------------------- */
export type FeatureItem = {
  no: string
  title: string
  description: string
}

export const featuresContent = {
  label: 'Why Online',
  heading: 'オンラインだからできること。',
  items: [
    {
      no: '01',
      title: '自宅から受けられる',
      description: '通う時間を、そのままレッスンの時間に。オンラインだから、住んでいる場所を選びません。',
    },
    {
      no: '02',
      title: '一人ひとりに合わせたレッスン',
      description: 'マンツーマンを基本に、身体の状態や目的に合わせてレッスン内容を調整します。',
    },
    {
      no: '03',
      title: '初心者でも始めやすい',
      description: '運動経験がなくても大丈夫。基本の動きから、ゆっくりお伝えします。',
    },
  ] as FeatureItem[],
}

/* -------------------------------------------------------------------------- */
/* LEARNING（学び続ける姿勢・保有資格）                                      */
/* 資格名・講習名は未提供のため、データ構造のみ準備し「要確認」としている。 */
/* -------------------------------------------------------------------------- */
export type LearningCategory = {
  title: string
  items: string[]
}

export const learningContent = {
  label: 'Learning',
  headingLines: ['学び続けることが、', '信頼のかたち。'],
  lead: '資格を取って終わりにせず、身体をより深く理解するために、今も学び続けています。研修やセミナーで得た知識を、日々のレッスンに還元しています。',
  categories: [
    { title: '保有資格', items: ['要確認'] },
    { title: '受講した講習・研修', items: ['要確認'] },
    { title: '現在学んでいること', items: ['要確認'] },
  ] as LearningCategory[],
  note: '※資格名・講習名は確定次第、随時掲載します。',
}

/* -------------------------------------------------------------------------- */
/* ONLINE LESSON（オンラインレッスンの内容）                                 */
/* -------------------------------------------------------------------------- */
export type LessonDetail = {
  label: string
  value: string
}

export const onlineLessonContent = {
  label: 'Online Lesson',
  headingLines: ['画面越しでも、', '丁寧に、届くように。'],
  lead: 'ビデオ通話を使って、ご自宅から参加できるレッスンです。動きの見え方や呼吸のタイミングを確認しながら、一人ひとりのペースで進めます。',
  details: [
    { label: '受講方法', value: 'オンライン（ビデオ通話）' },
    { label: '定員', value: 'マンツーマン、または少人数（要確認）' },
    { label: 'レッスン時間', value: '要確認' },
    { label: '使用ツール', value: '要確認' },
    { label: '必要なもの', value: '要確認（動きやすい服装・ヨガマットなどを想定）' },
    { label: '参加場所', value: 'ご自宅など、安定した通信環境があればどこでも' },
  ] as LessonDetail[],
  note: '※内容は準備が整い次第、随時更新します。',
}

/* -------------------------------------------------------------------------- */
/* WHO IT'S FOR                                                               */
/* 医療的効果・治療効果を断定する表現は使用しない。                          */
/* -------------------------------------------------------------------------- */
export const whoItsFor: string[] = [
  'ピラティスを始めてみたい',
  'スタジオへ通う時間が取りにくい',
  '大人数のレッスンが苦手',
  '自分の身体を丁寧に見てほしい',
  '身体を動かす習慣をつくりたい',
]

export const whoItsForContent = {
  label: "Who It's For",
  heading: 'こんな方へ。',
  outro: 'ひとつでも当てはまったら、まずはオンラインで気軽に体験してみてください。',
}

/* -------------------------------------------------------------------------- */
/* EXPERIENCE / LESSON FLOW                                                   */
/* -------------------------------------------------------------------------- */
export type FlowStep = {
  no: string
  label: string
  labelJa: string
  description: string
}

export const flowSteps: FlowStep[] = [
  {
    no: '01',
    label: 'RESERVATION',
    labelJa: '予約',
    description: '予約フォームからご希望の日時をご連絡ください。（要確認：予約方法）',
  },
  {
    no: '02',
    label: 'CONFIRM',
    labelJa: '日程確定',
    description: '日程を確認のうえ、確定のご連絡をします。',
  },
  {
    no: '03',
    label: 'CONNECT',
    labelJa: 'オンライン接続',
    description: '当日はビデオ通話ツールに接続してレッスンを開始します。（要確認：使用ツール）',
  },
  {
    no: '04',
    label: 'LISTEN',
    labelJa: '簡単なヒアリング',
    description: '身体の状態や気になっていることを簡単にお伺いします。',
  },
  {
    no: '05',
    label: 'LESSON',
    labelJa: 'レッスン',
    description: '一人ひとりのペースに合わせて、動きをお伝えします。',
  },
  {
    no: '06',
    label: 'CLOSE',
    labelJa: '終了',
    description: 'お疲れさまでした。気になったことがあれば、レッスン後にご相談いただけます。',
  },
]

export const experienceContent = {
  label: 'Lesson Flow',
  heading: 'レッスンの流れ',
}

/* -------------------------------------------------------------------------- */
/* PRICE                                                                      */
/* 金額は未確定のため「要確認」。勝手に金額を設定しない。                    */
/* -------------------------------------------------------------------------- */
export type PricingPlan = {
  tag: string
  label: string
  price: string
  description: string
}

export const pricingPlans: PricingPlan[] = [
  {
    tag: 'TRIAL',
    label: '体験レッスン',
    price: '要確認',
    description: 'はじめての方向けの体験レッスンです。',
  },
  {
    tag: 'SINGLE',
    label: '1回レッスン',
    price: '要確認',
    description: '都度払いで受けられる、1回完結のレッスンです。',
  },
  {
    tag: 'PACK',
    label: '回数プラン',
    price: '要確認',
    description: '継続して受けたい方向けの回数プランです。（要確認：回数・有効期限）',
  },
]

export const pricingContent = {
  label: 'Price',
  heading: '料金',
  note: '※料金は準備中です。確定次第、随時掲載します。',
}

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */
export type FaqItem = {
  q: string
  a: string
}

export const faqItems: FaqItem[] = [
  {
    q: '初心者でも受けられますか？',
    a: 'はい。運動経験がない方でも大丈夫です。基本の動きから、無理のないペースでお伝えします。',
  },
  {
    q: '身体が硬くても大丈夫ですか？',
    a: 'はい。柔軟性は問いません。今の身体の状態に合わせて、できる範囲で進めていきます。',
  },
  {
    q: '何を準備すればいいですか？',
    a: '動きやすい服装と、レッスンを受けられるスペースがあれば始められます。必要なものの詳細は確定次第ご案内します。（要確認）',
  },
  {
    q: 'スマートフォンでも参加できますか？',
    a: '対応予定です。推奨環境の詳細は確定次第ご案内します。（要確認）',
  },
  {
    q: 'カメラは必要ですか？',
    a: 'カメラの要否については、現在検討中です。（要確認）',
  },
  {
    q: 'どのくらいのスペースが必要ですか？',
    a: '目安のスペースについては、確定次第ご案内します。（要確認）',
  },
]

export const faqContent = {
  label: 'FAQ',
  heading: 'よくある質問',
  note: '※レッスン内容・準備物・使用ツールなどの詳細は、確定次第随時更新します。',
}

/* -------------------------------------------------------------------------- */
/* GALLERY / MOMENTS                                                          */
/* 写真は本人のInstagram等から選定予定。現時点では実画像がないため、        */
/* 汎用プレースホルダー（/placeholder.svg）を暫定srcとし、差し替え予定の    */
/* 実際のパス（public/images/pilates/配下）はコメントで明示している。       */
/* -------------------------------------------------------------------------- */
export type GalleryItem = {
  src: string
  alt: string
  /** editorial layout span */
  span: 'tall' | 'wide' | 'square'
}

export const galleryItems: GalleryItem[] = [
  {
    // 差し替え予定: /images/pilates/lesson/lesson-01.jpg
    src: '/placeholder.svg',
    alt: 'ピラティスのレッスンをしている様子（画像は準備中）',
    span: 'tall',
  },
  {
    // 差し替え予定: /images/pilates/learning/learning-01.jpg
    src: '/placeholder.svg',
    alt: '学び・研修に取り組む様子（画像は準備中）',
    span: 'wide',
  },
  {
    // 差し替え予定: /images/pilates/lifestyle/lifestyle-01.jpg
    src: '/placeholder.svg',
    alt: '普段の自然な様子（画像は準備中）',
    span: 'square',
  },
  {
    // 差し替え予定: /images/pilates/lesson/lesson-02.jpg
    src: '/placeholder.svg',
    alt: 'ピラティスの動きを確認している様子（画像は準備中）',
    span: 'tall',
  },
  {
    // 差し替え予定: /images/pilates/lesson/lesson-03.jpg
    src: '/placeholder.svg',
    alt: '指導している様子（画像は準備中）',
    span: 'wide',
  },
  {
    // 差し替え予定: /images/pilates/lifestyle/lifestyle-02.jpg
    src: '/placeholder.svg',
    alt: '普段の暮らしの一コマ（画像は準備中）',
    span: 'square',
  },
]

export const galleryContent = {
  label: 'Moments',
  heading: '学び、指導し、暮らす。',
  lead: 'スタジオでの指導風景や、日々ピラティスと向き合う様子から。実際の写真は準備が整い次第差し替えます。',
  footerNote: 'Instagramでは、日々のピラティスや学びの様子を発信しています。',
  ctaLabel: 'Instagramを見る',
}
