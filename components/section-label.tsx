import { cn } from '@/lib/utils'

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 font-display text-xs tracking-[0.25em] text-accent uppercase',
        className,
      )}
    >
      <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
      {children}
    </span>
  )
}
