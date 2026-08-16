// 基本セクション: オンラインならではの特徴
import { featuresContent } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionLabel>{featuresContent.label}</SectionLabel>
        <h2 className="mt-8 max-w-xl text-balance text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl">
          {featuresContent.heading}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
        {featuresContent.items.map((item, i) => (
          <Reveal key={item.no} delay={i * 100}>
            <div className="h-full rounded-2xl border border-border p-6">
              <p className="font-display text-sm text-accent">{item.no}</p>
              <h3 className="mt-3 text-xl font-medium text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
