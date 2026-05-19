import { motion } from 'motion/react'
import { Card, CardContent } from '../../components/ui/Card/Card'
import { Container } from '../../components/ui/Container/Container'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { cardMotion, staggerContainer } from '../../lib/animations'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { features } from './features-section.data'

export function FeaturesSection() {
  const reveal = useScrollReveal({ amount: 0.2 })

  return (
    <motion.section
      id="features"
      className="relative bg-[#050505] py-24 text-[#f3f0e7]"
      {...reveal}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(35deg, transparent, rgba(129,135,37,0.12) 44%, transparent 70%)',
        }}
      />
      <Container className="relative">
        <SectionHeader
          className="mb-12"
          eyebrow="Why Tradeyard"
          title="Jobsite support without the corporate fog machine."
        />

        <motion.div variants={staggerContainer} className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                variants={cardMotion}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <Card className="h-full bg-[#151515]/95 text-[#f3f0e7]">
                  <CardContent>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f3631f]/15 text-[#f3631f]">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-black">{feature.title}</h3>
                    <p className="mt-3 leading-7 text-[#bdb9ae]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </motion.section>
  )
}
