import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'light'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: false
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  variant?: ButtonVariant
}
