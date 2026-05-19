import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { AccessRequestModal } from '../components/access/AccessRequestModal/AccessRequestModal'
import { LandingPage } from './LandingPage'
import { LegalPage } from './LegalPage'

export function AppRoutes() {
  const location = useLocation()
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false)

  const openAccessModal = () => setIsAccessModalOpen(true)
  const closeAccessModal = () => setIsAccessModalOpen(false)

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document
          .getElementById(location.hash.replace('#', ''))
          ?.scrollIntoView({ block: 'start' })
      })
      return
    }

    window.scrollTo({ left: 0, top: 0 })
  }, [location.hash, location.pathname])

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage onTryNowClick={openAccessModal} />} />
        <Route
          path="/privacy"
          element={
            <LegalPage pageKey="privacy" onTryNowClick={openAccessModal} />
          }
        />
        <Route
          path="/terms"
          element={<LegalPage pageKey="terms" onTryNowClick={openAccessModal} />}
        />
        <Route
          path="/support"
          element={
            <LegalPage pageKey="support" onTryNowClick={openAccessModal} />
          }
        />
        <Route path="*" element={<LandingPage onTryNowClick={openAccessModal} />} />
      </Routes>
      <AccessRequestModal
        isOpen={isAccessModalOpen}
        onClose={closeAccessModal}
      />
    </>
  )
}
