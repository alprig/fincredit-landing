import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export default function Card({ hover = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-[#111827] border border-white/8 rounded-2xl',
        hover && 'transition-colors duration-200 hover:border-white/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
