import { motion } from 'motion/react'
import { Container } from '../../components/ui/Container/Container'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { cardMotion, staggerContainer } from '../../lib/animations'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { productScreens } from './mockup-section.data'

export function MockupSection() {
  const reveal = useScrollReveal({ amount: 0.22 })

  return (
    <motion.section
      id="product-flow"
      className="relative overflow-hidden bg-[#050505] py-20 text-[#f3f0e7]"
      {...reveal}
    >
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(125deg, rgba(129,135,37,0.14), transparent 38%, rgba(243,99,31,0.12) 78%, transparent)',
        }}
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Product flow"
          eyebrowClassName="text-[#f3631f]"
          title="From onboarding to morning execution."
          description="A simple product rhythm: identify the worker, prepare the day, capture what happens, and keep the crew aligned."
        />

        <motion.div variants={staggerContainer} className="grid gap-4 md:grid-cols-3">
          {productScreens.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardMotion}
              whileHover={{ y: -8 }}
              className="rounded-lg bg-black p-6 text-[#f3f0e7] shadow-xl"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f3631f] font-black">
                {index + 1}
              </div>
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#c8c3b8]">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  )
}
