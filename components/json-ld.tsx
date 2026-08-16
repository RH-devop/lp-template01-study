import { siteConfig } from '@/lib/site-config'

/**
 * "#" や「要確認」等のプレースホルダー値を除外するための判定。
 * lib/site-config.ts の未確定情報の扱い方針に合わせている。
 */
function isConfirmed(value: string): boolean {
  return value !== '' && value !== '#' && value !== '要確認'
}

/**
 * LocalBusiness系の構造化データ（JSON-LD）。
 * schema.orgの type は siteConfig.businessType から決定するため、
 * 特定業種に固定されない（案件ごとに businessType を差し替えれば良い）。
 */
export function LocalBusinessJsonLd() {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': siteConfig.businessType || 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.seoDescription,
    url: siteConfig.siteUrl,
    image: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
  }

  if (isConfirmed(siteConfig.location)) {
    jsonLd.address = siteConfig.location
  }
  // オンライン提供サービス向け: 物理住所の代わりに提供エリアを出力する。
  if (isConfirmed(siteConfig.areaServed)) {
    jsonLd.areaServed = siteConfig.areaServed
  }
  if (isConfirmed(siteConfig.phone)) {
    jsonLd.telephone = siteConfig.phone
  }
  if (isConfirmed(siteConfig.priceRange)) {
    jsonLd.priceRange = siteConfig.priceRange
  }

  const sameAs = [siteConfig.instagramUrl, siteConfig.youtubeUrl, siteConfig.lineUrl].filter(
    isConfirmed,
  )
  if (sameAs.length > 0) {
    jsonLd.sameAs = sameAs
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
