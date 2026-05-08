import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'info' | 'muted'
}

export default function Badge({
  variant = 'default',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
        {
          'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30': variant === 'default',
          'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30': variant === 'success',
          'bg-sky-500/20 text-sky-400 border border-sky-500/30': variant === 'info',
          'bg-white/5 text-gray-400 border border-white/10': variant === 'muted',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
