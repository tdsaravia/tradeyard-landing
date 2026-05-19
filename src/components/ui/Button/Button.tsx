import { forwardRef } from 'react'
import { cn } from '../../../lib/cn'
import type { ButtonProps, ButtonVariant } from './button.types'

const variantClassName: Record<ButtonVariant, string> = {
  primary: 'bg-[#f3631f] text-white hover:bg-[#ff7432]',
  secondary: 'bg-[#1c1c1c] text-[#f3f0e7] hover:bg-[#262626]',
  outline:
    'border border-[#3b3b3b] bg-[#111111] text-[#f3f0e7] hover:border-[#f3631f] hover:bg-[#1c1c1c]',
  light: 'bg-[#f3f0e7] text-[#050505] hover:bg-white',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      icon,
      iconPosition = 'left',
      type = 'button',
      variant = 'primary',
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex h-12 items-center justify-center gap-2 rounded-[18px] px-5 text-sm font-black transition duration-200 disabled:cursor-not-allowed disabled:opacity-60',
        variantClassName[variant],
        className,
      )}
      {...props}
    >
      {iconPosition === 'left' ? icon : null}
      <span>{children}</span>
      {iconPosition === 'right' ? icon : null}
    </button>
  ),
)

Button.displayName = 'Button'
