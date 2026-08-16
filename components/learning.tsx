// 基本サービス紹介の一部: Learning / Qualifications
// 「資格をたくさん持っている」ではなく「今も学び続けている」ことを伝えるセクション。
// 資格名・講習名は未確定のため、データ構造のみ用意し content.ts 側で「要確認」としている。
import { Fragment } from 'react'
import { learningContent } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export function Learning() {
  return (
    <section
      id="learning"
      className="scroll-mt-20 bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>{learningContent.label}</SectionLabel>
            <h2 className="mt-8 text-balance text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl">
              {learningContent.headingLines.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h2>
            <p className="mt-8 text-pretty text-base leading-[1.9] text-foreground/80">
              {learningContent.lead}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 border-t border-border pt-12 md:mt-20 md:grid-cols-3 md:gap-8">
          {learningContent.categories.map((category, i) => (
            <Reveal key={category.title} delay={i * 100}>
              <p className="font-display text-sm tracking-[0.2em] text-accent">
                {category.title}
              </p>
              <ul className="mt-4 space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
            {learningContent.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
