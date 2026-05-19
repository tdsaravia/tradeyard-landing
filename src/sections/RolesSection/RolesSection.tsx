import { motion } from 'motion/react'
import { Hammer, HardHat } from 'lucide-react'
import { Container } from '../../components/ui/Container/Container'
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader'
import { cardMotion, staggerContainer } from '../../lib/animations'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { roles } from './roles-section.data'

export function RolesSection() {
  const reveal = useScrollReveal({ amount: 0.22 })

  return (
    <motion.section
      id="roles"
      className="bg-[#050505] py-24 text-[#f3f0e7]"
      {...reveal}
    >
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="Role-based"
          title="Start with your trade. Get guidance that makes sense."
          description="Tradeyard adapts the onboarding around the work users actually do, from HVAC to project management."
        />

        <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2">
          {roles.map((role, index) => {
            const RoleIcon = index % 2 === 0 ? HardHat : Hammer

            return (
              <motion.div
                key={role}
                variants={cardMotion}
                whileHover={{ x: 6, scale: 1.01, borderColor: 'rgba(243,99,31,0.65)' }}
                className="rounded-lg border border-[#363636] bg-[#171717] p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f3f0e7] text-black">
                    <RoleIcon size={22} aria-hidden="true" />
                  </div>
                  <span className="text-lg font-black">{role}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </motion.section>
  )
}
