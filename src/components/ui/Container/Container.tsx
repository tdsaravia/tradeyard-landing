import type { HTMLAttributes } from 'react'
import { cn } from '../../../lib/cn'

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-20', className)}
      {...props}
    />
  )
}
