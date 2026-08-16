// 基本セクション: Who It's For
import { whoItsFor, whoItsForContent, ctaLabels } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { CtaButton } from '@/components/cta-button'

export function WhoItsFor() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <SectionLabel>{whoItsForContent.label}</SectionLabel>
          <h2 className="mt-8 text-balance text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl">
            {whoItsForContent.heading}
          </h2>
        </Reveal>

        <ul className="mt-14 md:mt-20">
          {whoItsFor.map((line, i) => (
            <Reveal as="li" key={line} delay={i * 80}>
              <div className="flex items-baseline gap-4 border-b border-border py-7 md:gap-8 md:py-9">
                <span
                  className="font-display text-sm tracking-[0.15em] text-muted-foreground"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-balance text-xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
                  {line}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-14 text-pretty text-base leading-relaxed text-muted-foreground">
            {whoItsForContent.outro}
          </p>
          <div className="mt-8">
            <CtaButton href={siteConfig.reservationUrl}>{ctaLabels.reserve}</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
