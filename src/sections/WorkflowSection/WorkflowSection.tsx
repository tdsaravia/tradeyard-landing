import { motion } from 'motion/react'
import { Container } from '../../components/ui/Container/Container'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { cardMotion, staggerContainer } from '../../lib/animations'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { workflowSteps } from './workflow-section.data'

export function WorkflowSection() {
  const reveal = useScrollReveal({ amount: 0.22 })

  return (
    <motion.section
      className="relative overflow-hidden bg-[#d8d7bd] py-24 text-black"
      {...reveal}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(145deg, rgba(255,255,255,0.7), transparent 44%), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 52px 52px',
        }}
      />

      <Container className="relative">
        <SectionHeader
          className="mb-14"
          eyebrow="How it works"
          eyebrowClassName="text-[#6f761f]"
          title="From role setup to daily execution."
        />

        <motion.div variants={staggerContainer} className="grid gap-5 md:grid-cols-3">
          {workflowSteps.map((step) => (
            <motion.div
              key={step.title}
              variants={cardMotion}
              whileHover={{ y: -8, scale: 1.01 }}
              className="rounded-lg bg-[#f3f0e7]/85 p-7 shadow-xl"
            >
              <span className="text-sm font-black text-[#f3631f]">{step.eyebrow}</span>
              <h3 className="mt-5 text-2xl font-black">{step.title}</h3>
              <p className="mt-4 leading-7 text-black/65">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  )
}
