// 基本セクション: ヒーロー
import { Fragment } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/lib/site-config'
import { heroContent } from '@/lib/content'
import { CtaButton } from '@/components/cta-button'

export function Hero() {
  return (
    // Heroの高さ・レイアウトはこのsection/直下divの min-h-[80svh] とgrid-cols-2で決まる
    <section id="top" className="relative min-h-[80svh] w-full overflow-hidden">
      <div className="relative mx-auto grid min-h-[80svh] max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-xs tracking-[0.3em] text-accent uppercase">
            {heroContent.eyebrow} — {siteConfig.service}
          </p>

          <h1 className="mt-6 text-balance text-[2.75rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {heroContent.headingLines.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h1>

          <p className="mt-5 font-display text-lg tracking-[0.12em] text-foreground/70 sm:text-2xl">
            {heroContent.subHeadingLines.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <br className="hidden sm:block" />}
                {i > 0 ? ' ' : ''}
                {line}
              </Fragment>
            ))}
          </p>

          <p className="mt-8 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            {heroContent.lead}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton href={siteConfig.reservationUrl}>{heroContent.ctaPrimaryLabel}</CtaButton>
            <CtaButton href={heroContent.ctaSecondaryHref} variant="ghost">
              {heroContent.ctaSecondaryLabel}
            </CtaButton>
          </div>

          <div className="mt-10 flex items-center gap-3 text-xs tracking-wide text-muted-foreground">
            <span className="h-px w-6 bg-muted-foreground/50" aria-hidden="true" />
            <span className="font-display tracking-[0.18em]">{siteConfig.areaLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{siteConfig.areaServed}</span>
          </div>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-[40px]">
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
