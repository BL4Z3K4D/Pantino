export interface Testimonial {
  id: string
  name: string
  comment: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    comment:
      'Los croissants de Pantino son simplemente perfectos. Se nota la calidad en cada bocado y la atención es impecable.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos Ruiz',
    comment:
      'Pedimos una torta personalizada para un cumpleaños y superó todas nuestras expectativas. Sabor excepcional y presentación elegante.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Lucía Fernández',
    comment:
      'Mi lugar favorito para postres especiales. Todo se siente artesanal, fresco y hecho con mucho cariño.',
    rating: 5,
  },
]
