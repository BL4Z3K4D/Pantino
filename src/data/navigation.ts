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
  { label: 'Instagram', href: 'https://instagram.com/pantino' },
  { label: 'Facebook', href: 'https://facebook.com/pantino' },
  { label: 'TikTok', href: 'https://tiktok.com/@pantino' },
  { label: 'WhatsApp', href: 'https://wa.me/5491123456789' },
]
