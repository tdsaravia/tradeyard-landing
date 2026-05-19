import { useReducedMotion } from 'motion/react'
import type { MotionProps, Variants } from 'motion/react'
import { fadeIn } from '../lib/animations'

type ScrollRevealOptions = {
  amount?: number
  variants?: Variants
}

export function useScrollReveal(options: ScrollRevealOptions = {}): MotionProps {
  const shouldReduceMotion = useReducedMotion()

  return {
    initial: shouldReduceMotion ? false : 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: options.amount ?? 0.22 },
    variants: options.variants ?? fadeIn,
  }
}