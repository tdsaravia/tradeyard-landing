import type { HTMLAttributes } from 'react'
import { cn } from '../../../lib/cn'

export function Badge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-lg border border-[#313131] bg-[#151515] px-4 py-2 text-sm font-bold text-[#d8d4c9]',
        className,
      )}
      {...props}
    />
  )
}
