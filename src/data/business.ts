export const BUSINESS = {
  name: 'Pantino',
  tagline: 'Postres y Viennoiserie',
  fullName: 'Pantino - Postres y Viennoiserie',
  description:
    'Postres y viennoiserie elaborados artesanalmente en Pantino. Croissants, pasteles y creaciones horneadas diariamente con ingredientes seleccionados.',
  phone: '+51983754088',
  phoneDisplay: '+51 983754088',
  email: 'hola@pantino.com',
  address: 'Jr. Mariscal Luzuriaga 520 - Jesús María',
  hours: 'Lunes a Sábado: 12:00 - 21:00',
  whatsappMessage:
    'Hola Pantino, me gustaría hacer un pedido. ¿Me pueden ayudar?',
  instagram: 'https://www.instagram.com/pantino.pe',
  facebook: 'https://facebook.com/pantino',
  tiktok: 'https://www.tiktok.com/@pantino.peru',
  siteUrl: 'https://pantino.com',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5261635950255!2d-77.0486756!3d-12.076088600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8fb3b0e5063%3A0x724f2c38cb37a170!2sJr.%20Mariscal%20Luzuriaga%20%23%20520%2C%20Jes%C3%BAs%20Mar%C3%ADa%2015072!5e0!3m2!1ses-419!2spe!4v1780531015400!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
} as const

export const getWhatsAppUrl = (message?: string) => {
  const text = encodeURIComponent(message ?? BUSINESS.whatsappMessage)
  return `https://wa.me/${BUSINESS.phone.replace(/\D/g, '')}?text=${text}`
}
