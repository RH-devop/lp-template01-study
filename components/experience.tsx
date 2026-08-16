// 基本セクション: 利用の流れ（Experience / Flow）
import { flowSteps, experienceContent } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export function Experience() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <SectionLabel>{experienceContent.label}</SectionLabel>
          <h2 className="mt-8 text-balance text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl">
            {experienceContent.heading}
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px md:mt-20 md:grid-cols-2">
          {flowSteps.map((step, i) => (
            <Reveal as="li" key={step.no} delay={(i % 2) * 100}>
              <div className="flex h-full gap-5 border-t border-border py-8 md:gap-6">
                <span className="font-display text-3xl leading-none tracking-[0.05em] text-accent md:text-4xl">
                  {step.no}
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="font-display text-sm tracking-[0.18em] text-foreground">
                    {step.label}
                  </p>
                  <p className="mt-1 text-base font-bold text-foreground">
                    {step.labelJa}
                  </p>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
