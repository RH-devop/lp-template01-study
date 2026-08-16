// 基本セクション: ギャラリー
import Image from 'next/image'
import { galleryItems, galleryContent } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { CtaButton } from '@/components/cta-button'
import { cn } from '@/lib/utils'

const spanClasses: Record<string, string> = {
  tall: 'md:row-span-2',
  wide: 'md:col-span-2',
  square: '',
}

export function Gallery() {
  return (
    <section
      id="gallery"
      className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8 md:py-36"
    >
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Reveal>
            <SectionLabel>{galleryContent.label}</SectionLabel>
            <h2 className="mt-8 text-balance text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl">
              {galleryContent.heading}
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={120}>
            <p className="text-pretty text-base leading-[1.9] text-muted-foreground">
              {galleryContent.lead}
            </p>
          </Reveal>
        </div>
      </div>

      {/* editorial mixed grid */}
      <div className="mt-12 grid grid-flow-dense auto-rows-[220px] grid-cols-2 gap-3 sm:gap-4 md:mt-16 md:auto-rows-[260px] md:grid-cols-3">
        {galleryItems.map((item, i) => (
          <Reveal
            key={item.src}
            delay={(i % 3) * 80}
            className={cn('relative overflow-hidden bg-muted', spanClasses[item.span])}
          >
            <Image
              src={item.src || '/placeholder.svg'}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.04]"
            />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 flex flex-col gap-5 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            {galleryContent.footerNote}
          </p>
          <CtaButton href={siteConfig.youtubeUrl} variant="ghost">
            {galleryContent.ctaLabel}
          </CtaButton>
        </div>
      </Reveal>
    </section>
  )
}
