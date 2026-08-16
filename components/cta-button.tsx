// CTAの見た目（色・形状・矢印アイコンの有無）はこのファイルで一括管理。
// 色は app/globals.css の --accent / --accent-foreground / --border から決まる。
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CtaButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
  showArrow?: boolean
}

export function CtaButton({
  href,
  children,
  variant = 'primary',
  className,
  showArrow = true,
}: CtaButtonProps) {
  const isExternal = href.startsWith('http')

  return (
    <Link
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300',
        variant === 'primary'
          ? 'bg-accent px-8 py-4 text-accent-foreground hover:bg-accent/90'
          : 'border border-border px-8 py-4 text-foreground hover:border-foreground/40 hover:bg-surface',
        className,
      )}
    >
      {children}
      {showArrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </Link>
  )
}
