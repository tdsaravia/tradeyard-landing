import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Menu, Wrench, X } from 'lucide-react'
import { Button } from '../../ui/Button/Button'
import { Container } from '../../ui/Container/Container'
import { cn } from '../../../lib/cn'
import type { NavLinkItem } from '../../../types/landing'

const navLinks: NavLinkItem[] = [
  { label: 'Problem', href: '#problem' },
  { label: 'Features', href: '#features' },
  { label: 'Roles', href: '#roles' },
  { label: 'Safety', href: '#safety' },
]

function scrollToDemo() {
  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
}

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateScrollState = () => {
      setHasScrolled(window.scrollY > 24)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', closeMenuOnDesktop)

    return () => window.removeEventListener('resize', closeMenuOnDesktop)
  }, [])

  const handleDemoClick = () => {
    setIsMenuOpen(false)
    scrollToDemo()
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 -mb-[73px] border-b transition duration-300',
        hasScrolled || isMenuOpen
          ? 'border-white/10 bg-[#050505]/92 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <motion.a
          href="/"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3"
          aria-label="Tradeyard home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f3f0e7] text-black">
            <Wrench size={22} aria-hidden="true" />
          </span>
          <span className="text-xl font-black uppercase">Tradeyard</span>
        </motion.a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#bdb9ae] md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2 }}
              className="transition hover:text-[#f3f0e7]"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            icon={<ArrowRight size={17} aria-hidden="true" />}
            iconPosition="right"
            onClick={handleDemoClick}
          >
            Join waitlist
          </Button>
        </motion.div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[16px] border border-white/12 bg-[#151515]/85 text-[#f3f0e7] transition hover:border-[#f3631f]/70 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </Container>

      {isMenuOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="border-t border-white/10 bg-[#050505]/96 px-6 pb-6 pt-2 backdrop-blur-xl md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 text-base font-black text-[#f3f0e7]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-[16px] px-4 py-3 transition hover:bg-white/8"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            className="mt-4 w-full"
            icon={<ArrowRight size={17} aria-hidden="true" />}
            iconPosition="right"
            onClick={handleDemoClick}
          >
            Join waitlist
          </Button>
        </motion.div>
      ) : null}
    </header>
  )
}
