import { motion } from 'motion/react'
import { Link } from 'react-router'
import tradeyardLogo from '../../../assets/images/tradeyard-logo.svg'
import { Container } from '../../ui/Container/Container'

type FooterProps = {
  onTryNowClick: () => void
}

const footerLinkClassName =
  'w-fit cursor-pointer text-left text-sm font-semibold text-[#c8c3b8] transition hover:text-[#f3631f] sm:text-base'

const legalLinkClassName =
  'text-sm font-medium text-[#a7a39a] transition hover:text-[#f3f0e7]'

export function Footer({ onTryNowClick }: FooterProps) {
  return (
    <footer className="border-t border-[#242424] bg-[#050505] py-14">
      <Container className="grid gap-10 text-[#a7a39a] lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="flex flex-col items-start gap-7">
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            className="inline-flex"
            aria-label="Tradeyard home"
          >
            <img
              src={tradeyardLogo}
              alt=""
              className="h-12 w-[186px] object-contain sm:h-14 sm:w-[216px]"
              aria-hidden="true"
            />
          </motion.a>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              className={footerLinkClassName}
              onClick={onTryNowClick}
            >
              Get early access
            </button>
            <a className={footerLinkClassName} href="mailto:info@tradeyard.com">
              info@tradeyard.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <p className="text-sm leading-6 text-[#8f8a82]">
            © 2026 Tradeyard. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:justify-end">
            <Link className={legalLinkClassName} to="/privacy">
              Privacy Policy
            </Link>
            <Link className={legalLinkClassName} to="/terms">
              Terms of Service
            </Link>
            <Link className={legalLinkClassName} to="/support">
              Support
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  )
}