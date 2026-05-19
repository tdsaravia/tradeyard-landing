import { Wrench } from 'lucide-react'
import { motion } from 'motion/react'
import { Container } from '../../ui/Container/Container'

export function Footer() {
  return (
    <footer className="border-t border-[#242424] bg-[#050505] py-10">
      <Container className="flex flex-col gap-4 text-[#bdb9ae] md:flex-row md:items-center md:justify-between">
        <motion.a
          href="/"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3"
          aria-label="Tradeyard home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f3f0e7] text-black">
            <Wrench size={19} aria-hidden="true" />
          </span>
          <span className="font-black uppercase text-[#f3f0e7]">Tradeyard</span>
        </motion.a>
        <p className="text-sm">
          © 2026 Tradeyard.
        </p>
      </Container>
    </footer>
  )
}