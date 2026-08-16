// 基本サービス紹介の一部: Online Lesson（レッスン内容の仕様）
// 使用ツール・レッスン時間・必要なもの等、未確定の項目は content.ts 側で「要確認」としている。
import { Fragment } from 'react'
import { onlineLessonContent } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'

export function OnlineLesson() {
  return (
    <section
      id="lesson"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-24 md:px-8 md:py-36"
    >
      <Reveal>
        <SectionLabel>{onlineLessonContent.label}</SectionLabel>
        <h2 className="mt-8 text-balance text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl">
          {onlineLessonContent.headingLines.map((line, i) => (
            <Fragment key={line}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h2>
        <p className="mt-8 max-w-2xl text-pretty text-base leading-[1.9] text-foreground/80">
          {onlineLessonContent.lead}
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-14 border-t border-border md:mt-20">
          {onlineLessonContent.details.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 border-b border-border py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <p className="font-display text-xs tracking-[0.2em] text-muted-foreground">
                {row.label}
              </p>
              <p className="text-base text-foreground sm:text-right">{row.value}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          {onlineLessonContent.note}
        </p>
      </Reveal>
    </section>
  )
}
