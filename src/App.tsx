import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { useHashScroll } from './hooks/useHashScroll'

const CatalogPage = lazy(() =>
  import('./pages/CatalogPage').then((module) => ({ default: module.CatalogPage })),
)

const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center bg-cream">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-pantino border-t-transparent" />
  </div>
)

const AppRoutes = () => {
  useHashScroll()

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
      </Routes>
    </Suspense>
  )
}

function App() {
  return (
    <BrowserRouter basename='/Pantino/'>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-pantino focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <AppRoutes />
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
