import { Footer } from '../components/layout/Footer/Footer'
import { Navbar } from '../components/layout/Navbar/Navbar'
import { DemoSection } from '../sections/DemoSection/DemoSection'
import { FeaturesSection } from '../sections/FeaturesSection/FeaturesSection'
import { FinalCtaSection } from '../sections/FinalCtaSection/FinalCtaSection'
import { HeroSection } from '../sections/HeroSection/HeroSection'
import { MockupSection } from '../sections/MockupSection/MockupSection'
import { ProblemSection } from '../sections/ProblemSection/ProblemSection'
import { RolesSection } from '../sections/RolesSection/RolesSection'
import { SecuritySection } from '../sections/SecuritySection/SecuritySection'
import { StatsSection } from '../sections/StatsSection/StatsSection'
import { WorkflowSection } from '../sections/WorkflowSection/WorkflowSection'

type LandingPageProps = {
  onTryNowClick: () => void
}

export function LandingPage({ onTryNowClick }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f3f0e7]">
      <Navbar onTryNowClick={onTryNowClick} />
      <HeroSection onTryNowClick={onTryNowClick} />
      <ProblemSection />
      <StatsSection />
      <FeaturesSection />
      <WorkflowSection />
      <RolesSection />
      <MockupSection />
      <SecuritySection />
      <DemoSection />
      <FinalCtaSection onTryNowClick={onTryNowClick} />
      <Footer onTryNowClick={onTryNowClick} />
    </main>
  )
}
