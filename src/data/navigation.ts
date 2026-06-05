export interface NavItem {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export const FOOTER_NAV_ITEMS: NavItem[] = [
  ...NAV_ITEMS,
]

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/pantino.pe/' },
  { label: 'Facebook', href: 'https://www.facebook.com/search/top/?q=pantino' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@pantino.peru' },
  { label: 'WhatsApp', href: 'https://wa.me/51983754088' },
]
