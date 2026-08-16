'use client'

// 基本セクション: FAQ
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqItems, faqContent } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { cn } from '@/lib/utils'

function FaqRow({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div className="border-b border-border">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start justify-between gap-4 py-6 text-left"
        >
          <span className="flex gap-3 text-base font-bold leading-relaxed text-foreground sm:text-lg">
            <span className="font-display text-accent" aria-hidden="true">
              Q.
            </span>
            {q}
          </span>
          <Plus
            className={cn(
              'mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-300',
              open && 'rotate-45',
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-7 pl-7 pr-9 text-pretty text-sm leading-[1.9] text-muted-foreground sm:text-base">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-4xl scroll-mt-20 px-5 py-24 md:px-8 md:py-36"
    >
      <Reveal>
        <SectionLabel>{faqContent.label}</SectionLabel>
        <h2 className="mt-8 text-balance text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl">
          {faqContent.heading}
        </h2>
      </Reveal>

      <Reveal>
        <div className="mt-12 border-t border-border md:mt-16">
          {faqItems.map((item, i) => (
            <FaqRow key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          {faqContent.note}
        </p>
      </Reveal>
    </section>
  )
}
