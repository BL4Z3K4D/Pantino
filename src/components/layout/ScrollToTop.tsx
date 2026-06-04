import { motion, AnimatePresence } from 'framer-motion'
import { useShowScrollTop } from '../../hooks/useScrollPosition'
import { scrollToTop } from '../../utils/scroll'

export const ScrollToTop = () => {
  const isVisible = useShowScrollTop(500)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="fixed z-50 flex h-12 w-12 items-center justify-center rounded-full bg-pantino text-white shadow-lg transition-colors hover:bg-pantino-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pantino focus-visible:ring-offset-2 max-sm:bottom-5 max-sm:right-5 sm:bottom-[30px] sm:right-[30px]"
          aria-label="Volver arriba"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
