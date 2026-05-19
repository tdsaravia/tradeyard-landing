import { Route, Routes } from 'react-router'
import { LandingPage } from './LandingPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}