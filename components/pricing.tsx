// 基本セクション: 料金
import { pricingPlans, pricingContent, ctaLabels } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { CtaButton } from '@/components/cta-button'

export function Pricing() {
  return (
    <section
      id="price"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-24 md:px-8 md:py-36"
    >
      <Reveal>
        <SectionLabel>{pricingContent.label}</SectionLabel>
        <h2 className="mt-8 text-balance text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl">
          {pricingContent.heading}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 border-t border-border md:mt-20 md:grid-cols-3 md:gap-8 md:border-t-0">
        {pricingPlans.map((plan, i) => (
          <Reveal key={plan.tag} delay={i * 100}>
            <div className="border-t border-border pt-8 md:border-t-0 md:pt-0 md:not-first:border-l md:not-first:border-border md:not-first:pl-8">
              <p className="font-display text-xs tracking-[0.22em] text-accent">{plan.tag}</p>
              <p className="mt-2 text-lg font-bold text-foreground">{plan.label}</p>
              <p className="mt-4 text-3xl font-black tracking-tight text-foreground">
                {plan.price}
              </p>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          {pricingContent.note}
        </p>
        <div className="mt-8">
          <CtaButton href={siteConfig.reservationUrl}>{ctaLabels.reserve}</CtaButton>
        </div>
      </Reveal>
    </section>
  )
}
