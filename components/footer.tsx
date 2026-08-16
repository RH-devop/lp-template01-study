// 基本セクション: フッター（全業種共通で利用）
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { navItems } from '@/lib/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl tracking-[0.2em] text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.service}｜{siteConfig.areaServed}
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-3"
            aria-label="フッターナビゲーション"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-xs tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Instagramアカウントが未確定の間（siteConfig.instagramUrlが"#"の間）は非表示 */}
          {siteConfig.instagramUrl !== '#' && (
            <Link
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {siteConfig.instagramHandle}
            </Link>
          )}
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}
