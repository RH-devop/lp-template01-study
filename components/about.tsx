// 基本セクション: About
import { Fragment } from 'react'
import { aboutContent } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8 md:py-36"
    >
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <SectionLabel>{aboutContent.label}</SectionLabel>
            <h2 className="mt-8 text-balance text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl">
              {aboutContent.headingLines.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={120}>
            <p className="max-w-xl text-pretty text-base leading-[1.9] text-foreground/80">
              {aboutContent.paragraphs[0].map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br className="hidden sm:block" />}
                  {line}
                </Fragment>
              ))}
            </p>
            <p className="mt-6 max-w-xl text-pretty text-base leading-[1.9] text-muted-foreground">
              {aboutContent.paragraphs[1][0]}
            </p>
          </Reveal>
        </div>
      </div>

      {/* 3-step sequence — typography + rule, not icon cards */}
      <div className="mt-20 border-t border-border md:mt-28">
        {aboutContent.steps.map((step, i) => (
          <Reveal key={step.en} delay={i * 100}>
            <div className="group flex flex-col gap-2 border-b border-border py-8 md:flex-row md:items-baseline md:gap-10 md:py-10">
              <span
                className="font-display text-sm tracking-[0.2em] text-accent"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-3xl tracking-[0.08em] text-foreground transition-colors sm:text-5xl md:w-[42%]">
                {step.en}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {step.ja}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
