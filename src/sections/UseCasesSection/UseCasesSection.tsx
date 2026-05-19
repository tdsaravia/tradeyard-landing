import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '../../components/ui/Container/Container'
import { cardMotion, fadeUp, staggerContainer } from '../../lib/animations'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useCases } from './use-cases-section.data'

type UseCasesSectionProps = {
  onTryNowClick: () => void
}

function scrollToDemo() {
  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
}

export function UseCasesSection({ onTryNowClick }: UseCasesSectionProps) {
  const reveal = useScrollReveal({ amount: 0.18 })

  return (
    <motion.section
      className="relative overflow-hidden bg-[#050505] py-24 text-[#f3f0e7]"
      {...reveal}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(145deg, transparent 12%, rgba(243,99,31,0.12) 48%, transparent 78%)',
        }}
      />

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          className="mb-12 flex flex-col gap-4 md:max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-black uppercase text-[#f3631f]"
          >
            Built for the crew
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-black leading-tight sm:text-5xl"
          >
            Useful whether you run a crew or work solo.
          </motion.h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid gap-6 lg:grid-cols-2">
          {useCases.map((useCase) => (
            <motion.article
              key={useCase.title}
              variants={cardMotion}
              whileHover={{ y: -8, scale: 1.01 }}
              className="overflow-hidden rounded-lg border border-white/10 bg-[#1d1d1b] shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
            >
              <div className="aspect-[16/9] overflow-hidden bg-black">
                <img
                  src={useCase.image}
                  alt={useCase.imageAlt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="flex min-h-[320px] flex-col p-7 sm:p-9">
                <h3 className="text-3xl font-black">{useCase.title}</h3>
                <p className="mt-5 text-lg leading-8 text-[#c8c3b8]">
                  {useCase.description}
                </p>

                <button
                  type="button"
                  className="mt-auto inline-flex w-fit cursor-pointer items-center gap-2 pt-8 text-base font-black text-[#f3f0e7] transition hover:text-[#f3631f]"
                  onClick={
                    useCase.variant === 'access' ? onTryNowClick : scrollToDemo
                  }
                >
                  {useCase.ctaLabel}
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  )
}
