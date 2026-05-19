import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '../../components/ui/Container/Container'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { cardMotion, staggerContainer } from '../../lib/animations'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { painPoints } from './problem-section.data'

export function ProblemSection() {
  const reveal = useScrollReveal({ amount: 0.22 })

  return (
    <motion.section
      id="problem"
      className="relative bg-[#f3f0e7] py-24 text-black"
      {...reveal}
    >
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(243,99,31,0.18), transparent 38%), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 56px 56px',
        }}
      />
      <Container className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="The problem"
          title="Jobsites move fast. Information does not."
          description="Tradeyard helps trade workers capture what matters in the moment: tasks, materials, tools, training, and quick guidance without slowing down the work."
        />

        <motion.div variants={staggerContainer} className="grid gap-4">
          {painPoints.map((item) => (
            <motion.div
              key={item}
              variants={cardMotion}
              whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
              className="rounded-lg border border-black/10 bg-white/70 p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 shrink-0 text-[#7b8420]" />
                <p className="text-lg font-black">{item}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  )
}
