import { motion } from 'motion/react'
import { Container } from '../../components/ui/Container/Container'
import { cardMotion, staggerContainer } from '../../lib/animations'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { stats } from './stats-section.data'

export function StatsSection() {
  const reveal = useScrollReveal({ amount: 0.24, variants: staggerContainer })

  return (
    <motion.section className="bg-[#050505] py-16 text-[#f3f0e7]" {...reveal}>
      <Container className="grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={cardMotion}
            whileHover={{ y: -8, scale: 1.01 }}
            className="rounded-lg border border-[#2f2f2f] bg-[#151515] p-8 text-center shadow-xl"
          >
            <p className="text-4xl font-black text-[#f3631f]">{stat.value}</p>
            <p className="mt-3 font-bold text-[#c8c3b8]">{stat.label}</p>
          </motion.div>
        ))}
      </Container>
    </motion.section>
  )
}
