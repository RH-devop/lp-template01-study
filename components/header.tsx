'use client'

// 基本セクション: ヘッダー（全業種共通で利用）
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { navItems, ctaLabels } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled || open
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="#top"
          className="font-display text-xl tracking-[0.2em] text-foreground md:text-2xl"
          aria-label={`${siteConfig.name} ホーム`}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="メインナビゲーション">
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

        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.reservationUrl}
            className="hidden bg-accent px-5 py-2.5 text-xs font-medium tracking-wide text-accent-foreground transition-colors hover:bg-accent/90 sm:inline-flex"
          >
            {ctaLabels.reserve}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center text-foreground lg:hidden"
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden bg-background/95 backdrop-blur-md transition-[max-height] duration-500 ease-in-out lg:hidden',
          open ? 'max-h-[80vh] border-b border-border' : 'max-h-0',
        )}
      >
        <nav
          className="flex flex-col gap-1 px-5 py-6"
          aria-label="モバイルナビゲーション"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-border/60 py-4 font-display text-lg tracking-[0.15em] text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.reservationUrl}
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center bg-accent px-6 py-4 text-sm font-medium tracking-wide text-accent-foreground"
          >
            {ctaLabels.reserve}
          </Link>
        </nav>
      </div>
    </header>
  )
}
