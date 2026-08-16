import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Cormorant_Garamond } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import { LocalBusinessJsonLd } from '@/components/json-ld'
import './globals.css'

/**
 * フォント設定。
 * 案件ごとに使うフォントに応じて next/font/google の import と呼び出しを差し替える
 * （過剰な抽象化はせず、ここを直接編集する）。
 * variable名（--font-body / --font-heading）を変えなければ、
 * app/globals.css 側（--font-sans / --font-display）の変更は不要。
 *
 * bodyFont    … 本文用（font-sans として全体に適用）
 * headingFont … 見出し・数字・ラベル等の装飾用（font-display として個別に適用）
 */
const bodyFont = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-body',
  display: 'swap',
})

const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  generator: 'v0.app',
  applicationName: siteConfig.name,
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    url: '/',
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.seoTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F7F3ED',
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${bodyFont.variable} ${headingFont.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LocalBusinessJsonLd />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
