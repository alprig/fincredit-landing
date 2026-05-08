import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        align === 'left' && 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {headline}
      </h2>
      {subheadline && (
        <p
          className={cn(
            'text-base sm:text-lg text-gray-400 leading-relaxed',
            align === 'center' && 'max-w-2xl'
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  )
}
