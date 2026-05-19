import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '../../components/ui/Button/Button'
import { Container } from '../../components/ui/Container/Container'
import { fadeUp, staggerContainer } from '../../lib/animations'
import { useScrollReveal } from '../../hooks/useScrollReveal'

type FinalCtaSectionProps = {
  onTryNowClick: () => void
}

export function FinalCtaSection({ onTryNowClick }: FinalCtaSectionProps) {
  const reveal = useScrollReveal({ amount: 0.3 })

  return (
    <motion.section className="relative bg-[#f3631f] py-20 text-white" {...reveal}>
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            'linear-gradient(115deg, rgba(255,255,255,0.25), transparent 42%, rgba(0,0,0,0.24))',
        }}
      />
      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
        >
          <div className="max-w-2xl">
            <motion.p
              variants={fadeUp}
              className="mb-3 text-sm font-black uppercase text-white/75"
            >
              Early access
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-black leading-tight sm:text-5xl"
            >
              Bring AI to the jobsite without making it weird.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg font-semibold leading-8 text-white/80"
            >
              Give crews a faster way to learn, plan, and capture the day with a
              tool that feels built for actual work.
            </motion.p>
          </div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="h-14 px-8 text-base"
              icon={<ArrowRight size={18} aria-hidden="true" />}
              iconPosition="right"
              onClick={onTryNowClick}
              variant="light"
            >
              Try it now
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  )
}
