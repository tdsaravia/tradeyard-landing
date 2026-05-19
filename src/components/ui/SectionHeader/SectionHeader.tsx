import { motion } from 'motion/react'
import { fadeUp, staggerContainer } from '../../../lib/animations'
import { cn } from '../../../lib/cn'

type SectionHeaderProps = {
  align?: 'left' | 'center'
  className?: string
  eyebrow: string
  eyebrowClassName?: string
  title: string
  description?: string
}

export function SectionHeader({
  align = 'left',
  className,
  description,
  eyebrow,
  eyebrowClassName,
  title,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      className={cn(
        align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl',
        className,
      )}
    >
      <motion.p
        variants={fadeUp}
        className={cn('mb-3 text-sm font-black uppercase text-[#f3631f]', eyebrowClassName)}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="text-4xl font-black leading-tight text-balance sm:text-5xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className="mt-5 text-lg leading-8 opacity-70"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}
