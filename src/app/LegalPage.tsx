import { useEffect } from 'react'
import { Footer } from '../components/layout/Footer/Footer'
import { Navbar } from '../components/layout/Navbar/Navbar'
import { Container } from '../components/ui/Container/Container'
import { legalPages } from './legal-pages.data'
import type { LegalPageKey } from './legal-pages.data'

type LegalPageProps = {
  onTryNowClick: () => void
  pageKey: LegalPageKey
}

export function LegalPage({ onTryNowClick, pageKey }: LegalPageProps) {
  const page = legalPages[pageKey]

  useEffect(() => {
    document.title = `${page.title} | Tradeyard`

    return () => {
      document.title = 'Tradeyard'
    }
  }, [page.title])

  return (
    <main className="min-h-screen bg-[#050505] text-[#f3f0e7]">
      <Navbar onTryNowClick={onTryNowClick} />
      <section className="relative bg-[#0c0c0b] pb-20 pt-32 sm:pt-36">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(115deg, rgba(243,99,31,0.12), transparent 32%, rgba(129,135,37,0.12) 72%, transparent)',
          }}
        />
        <Container className="relative max-w-4xl">
          <p className="text-sm font-black uppercase text-[#f3631f]">
            Tradeyard
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            {page.title}
          </h1>

          {page.meta ? (
            <p className="mt-5 text-base font-semibold leading-7 text-[#d8d4c9]">
              {page.meta}
            </p>
          ) : null}

          {page.intro ? (
            <p className="mt-5 text-lg leading-8 text-[#c8c3b8]">
              {page.intro}
            </p>
          ) : null}

          <div className="mt-10 space-y-9 text-[#c8c3b8]">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-black text-[#f3f0e7]">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>
      <Footer onTryNowClick={onTryNowClick} />
    </main>
  )
}