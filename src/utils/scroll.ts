export const scrollToSection = (href: string) => {
  const targetId = href.replace('#', '')
  const element = document.getElementById(targetId)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }

  window.location.href = `/Pantino/#${targetId}`
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}