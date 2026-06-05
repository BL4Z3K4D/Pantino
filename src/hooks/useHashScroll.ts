import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useHashScroll = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return

    const targetId = hash.replace('#', '')

    const timeout = window.setTimeout(() => {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)

    return () => window.clearTimeout(timeout)
  }, [hash, pathname])
}