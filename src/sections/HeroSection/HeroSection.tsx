import { motion, useScroll, useTransform } from 'motion/react'
import {
  ArrowRight,
  BatteryFull,
  ChevronLeft,
  ListChecks,
  Mic,
  Play,
  Signal,
  Sparkles,
  UserCircle,
  Wifi,
  Wrench,
} from 'lucide-react'
import { Badge } from '../../components/ui/Badge/Badge'
import { Button } from '../../components/ui/Button/Button'
import { Container } from '../../components/ui/Container/Container'
import { fadeUp, staggerContainer } from '../../lib/animations'
import { heroStats } from './hero-section.data'

function scrollToDemo() {
  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
}

function IPhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[305px]">
      <div
        className="absolute -left-1 top-[23%] h-14 w-1.5 rounded-l-full bg-[#59606d]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-1 top-[34%] h-20 w-1.5 rounded-l-full bg-[#59606d]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-1 top-[29%] h-24 w-1.5 rounded-r-full bg-[#59606d]"
        aria-hidden="true"
      />

      <div className="relative rounded-[3.25rem] bg-gradient-to-b from-[#5f6675] via-[#14161b] to-[#050505] p-[3px] shadow-[0_34px_90px_rgba(0,0,0,0.55)]">
        <div className="rounded-[3.05rem] bg-[#020202] p-2">
          <div className="relative aspect-[430/932] overflow-hidden rounded-[2.55rem] border border-white/10 bg-[#0b0b09] text-[#f3f0e7]">
            <div
              className="absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
              aria-hidden="true"
            />

            <div className="flex items-start justify-between px-4 pt-4 text-white">
              <div>
                <div className="flex items-center gap-1.5 text-lg font-black leading-none">
                  <span>4:10</span>
                  <UserCircle size={15} fill="currentColor" aria-hidden="true" />
                </div>
                <div className="mt-2 flex items-center text-xs font-black">
                  <ChevronLeft size={14} strokeWidth={3} aria-hidden="true" />
                  <span>App Store</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Signal size={16} strokeWidth={3} aria-hidden="true" />
                <Wifi size={17} strokeWidth={3} aria-hidden="true" />
                <span className="rounded-md bg-[#2ec65c] px-1.5 py-0.5 text-xs font-black leading-none text-white">
                  100
                </span>
                <BatteryFull size={16} aria-hidden="true" />
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-[4.5rem] top-[4.75rem] overflow-hidden px-4 pt-12">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[clamp(1.55rem,3.4vw,2.1rem)] font-black leading-none">
                  Morning update
                </h2>
                <UserCircle size={25} className="text-[#f3f0e7]" aria-hidden="true" />
              </div>

              <div className="rounded-lg bg-[#d8d3c6] p-3 text-black">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase text-black/55">
                      Monday, May 18
                    </p>
                    <p className="mt-1.5 text-base font-black leading-tight">
                      1. Welcome to Tradeyard
                    </p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#818725] text-white">
                    <Play fill="currentColor" size={18} aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-black/30">
                  <div className="h-1.5 w-[3%] rounded-full bg-[#66711f]" />
                </div>
                <p className="mt-2.5 text-sm font-black text-black/80">0:00 / 2:30</p>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-black">My to-do list</h3>
                <div className="mt-3 rounded-lg border border-[#3b3b3b] bg-[#1a1a1a] px-4 py-5 text-center text-[#d6d1c5]">
                  <ListChecks className="mx-auto mb-2.5" size={22} aria-hidden="true" />
                  <p className="mx-auto max-w-48 text-sm font-black leading-snug">
                    Tap TALK to add items to your to-do list
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="flex items-center gap-1 text-lg font-black">
                  Materials and tools
                  <ArrowRight size={18} aria-hidden="true" />
                </h3>
                <div className="mt-3 rounded-lg border border-[#3b3b3b] bg-[#1a1a1a] px-4 py-5 text-center text-[#d6d1c5]">
                  <Wrench className="mx-auto mb-2.5" size={24} aria-hidden="true" />
                  <p className="mx-auto max-w-48 text-sm font-black leading-snug">
                    Tap TALK to add tools or materials
                  </p>
                </div>
              </div>

            </div>

            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black px-4 pb-3.5 pt-2.5">
              <div className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-[18px] bg-[#f3631f] px-5 text-base font-black text-white">
                <Mic size={18} aria-hidden="true" />
                <span>TALK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -48])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.24], [1, 0.42])

  return (
    <section className="relative overflow-hidden bg-[#050505] pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            'linear-gradient(115deg, rgba(243,99,31,0.22), transparent 28%, rgba(129,135,37,0.18) 68%, transparent), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
        }}
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <Badge>
              <Sparkles size={16} className="text-[#f3631f]" aria-hidden="true" />
              AI guidance for trade workers
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl font-black leading-none sm:text-6xl lg:text-7xl"
          >
            Built from the knowledge of real trade workers.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-[#c8c3b8] sm:text-xl"
          >
            Tradeyard helps field teams learn faster, organize daily tasks, and
            capture materials or tools with voice-first AI support. No fluff. No
            clipboard archaeology.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="h-14 px-8 text-base"
                icon={<ArrowRight size={18} aria-hidden="true" />}
                iconPosition="right"
                onClick={scrollToDemo}
              >
                Get early access
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="h-14 px-8 text-base"
                icon={<Play size={18} aria-hidden="true" />}
                onClick={() =>
                  document
                    .getElementById('product-flow')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                variant="outline"
              >
                Watch demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-3"
          >
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="border-l border-[#3a3a3a] pl-4"
              >
                <p className="text-xl font-black text-[#f3631f]">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-[#bdb9ae]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="pointer-events-none relative mx-auto w-full max-w-[320px] select-none"
          aria-hidden="true"
        >
          <IPhoneMockup />
        </motion.div>
      </Container>
    </section>
  )
}
