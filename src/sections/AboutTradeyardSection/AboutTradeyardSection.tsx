import { motion } from 'motion/react'
import { ArrowRight, BookOpenCheck, HardHat, Mic } from 'lucide-react'
import galleryLeftPhoto from '../../assets/images/gallery-left-photo-2.webp'
import galleryRightPhoto from '../../assets/images/gallery-right-screenshot.webp'
import heroPhoto from '../../assets/images/hero-photo.webp'
import landscapePhoto from '../../assets/images/landscape-photo.webp'
import { Container } from '../../components/ui/Container/Container'
import { cardMotion, fadeUp, staggerContainer } from '../../lib/animations'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const proofPoints = [
  {
    icon: HardHat,
    label: 'Certified trade knowledge',
  },
  {
    icon: BookOpenCheck,
    label: 'Your company playbook',
  },
  {
    icon: Mic,
    label: 'Hands-free answers on site',
  },
]

export function AboutTradeyardSection() {
  const reveal = useScrollReveal({ amount: 0.2 })

  return (
    <motion.section
      className="relative overflow-hidden bg-[#050505] py-24 text-[#f3f0e7]"
      {...reveal}
    >
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(125deg, rgba(243,99,31,0.12), transparent 34%, rgba(129,135,37,0.14) 72%, transparent)',
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={staggerContainer}>
            <motion.p
              variants={fadeUp}
              className="text-sm font-black uppercase text-[#f3631f]"
            >
              What is Tradeyard?
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl"
            >
              Hands-free guidance for the person holding the tools.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-[#c8c3b8]"
            >
              Tradeyard brings trade expertise, job instructions, and company
              standards into the moment work is happening. Crews get relevant
              help without stopping to search, type, or leave the task.
            </motion.p>

            <motion.div variants={staggerContainer} className="mt-8 grid gap-3">
              {proofPoints.map((item) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.label}
                    variants={cardMotion}
                    className="flex items-center gap-4 rounded-lg border border-white/10 bg-[#171717]/85 p-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#f3631f]/15 text-[#f3631f]">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span className="font-black text-[#f3f0e7]">{item.label}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-[1.1fr_0.8fr]"
          >
            <motion.div
              variants={cardMotion}
              className="overflow-hidden rounded-lg border border-white/10 bg-[#151515]"
            >
              <img
                src={heroPhoto}
                alt="Trade worker carrying lumber across scaffolding on a jobsite."
                className="h-full min-h-[360px] w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <div className="grid gap-4">
              <motion.div
                variants={cardMotion}
                className="overflow-hidden rounded-lg border border-white/10 bg-[#151515]"
              >
                <img
                  src={galleryLeftPhoto}
                  alt="Worker tool belt with hand tools on a construction site."
                  className="h-48 w-full object-cover sm:h-full"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={cardMotion}
                className="overflow-hidden rounded-lg border border-white/10 bg-[#151515]"
              >
                <img
                  src={galleryRightPhoto}
                  alt="Miter saw cutting lumber for a jobsite task."
                  className="h-48 w-full object-cover sm:h-full"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          className="mt-16 grid overflow-hidden rounded-lg border border-white/10 bg-[#151515] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={cardMotion} className="min-h-[280px]">
            <img
              src={landscapePhoto}
              alt="Wide residential construction site with framing and scaffolding."
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div variants={cardMotion} className="flex flex-col justify-center p-7 sm:p-10">
            <p className="text-sm font-black uppercase text-[#f3631f]">
              Who we are
            </p>
            <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Protective of craft. Practical about AI.
            </h3>
            <p className="mt-5 text-lg leading-8 text-[#c8c3b8]">
              Tradeyard is built around the daily reality of trade work: safety,
              judgment, skill, and pride in getting things right. The goal is
              to help workers move with more confidence while keeping human
              expertise in charge.
            </p>
            <a
              href="#demo"
              className="mt-7 inline-flex w-fit items-center gap-2 text-base font-black text-[#f3f0e7] transition hover:text-[#f3631f]"
            >
              Book a demo
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  )
}
