export const scrollToSection = (href: string) => {
  const targetId = href.replace('#', '')

  const basePath = '/Pantino'
  const currentPath = window.location.pathname.replace(/\/$/, '')

  if (currentPath !== basePath) {
    window.location.href = `${basePath}/${href}`
    return
  }

  const element = document.getElementById(targetId)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}