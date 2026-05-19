import { motion } from 'motion/react'
import { Zap } from 'lucide-react'
import { Container } from '../../components/ui/Container/Container'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { cardMotion, fadeUp, staggerContainer } from '../../lib/animations'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { trustItems } from './security-section.data'

export function SecuritySection() {
  const reveal = useScrollReveal({ amount: 0.22 })

  return (
    <motion.section
      id="safety"
      className="relative bg-[#050505] py-24 text-[#f3f0e7]"
      {...reveal}
    >
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(129,135,37,0.14), transparent 36%)',
        }}
      />
      <Container className="relative">
        <motion.div variants={staggerContainer} className="mb-14">
          <motion.div
            variants={fadeUp}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#818725]/20 text-[#b9c13b]"
          >
            <Zap size={30} aria-hidden="true" />
          </motion.div>
          <SectionHeader
            align="center"
            eyebrow="Safety-aware"
            eyebrowClassName="text-[#b9c13b]"
            title="Helpful AI. Human judgment stays in charge."
            description="Tradeyard is built to support learning and daily organization. It does not replace professional training, licensing, supervision, or jobsite safety requirements."
          />
        </motion.div>

        <motion.div variants={staggerContainer} className="grid gap-5 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                variants={cardMotion}
                whileHover={{ y: -8, scale: 1.01 }}
                className="rounded-lg border border-[#2f2f2f] bg-[#151515] p-7 shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f3f0e7] text-black">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#bdb9ae]">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </motion.section>
  )
}
