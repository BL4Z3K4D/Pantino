export type ProductCategory =
  | 'Postres'
  | 'Viennoiserie'
  | 'Tortas'
  | 'Especiales'

export interface Product {
  id: string
  name: string
  description: string
  category: ProductCategory
  image: string
  imageAlt: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'helados-artesanales',
    name: 'Helados Artesanales',
    description: 'Helado artesanal elaborado con ingredientes seleccionados, de textura cremosa y sabor auténtico en cada cucharada.',
    category: 'Postres',
    image: '/assets/helados_artesanales.webp',
    imageAlt: 'Helados artesanales Pantino en envases individuales con diferentes sabores'
  },
  {
    id: 'danes-cereza',
    name: 'Danés de cereza ',
    description: 'Hojaldre dorado y ligero, relleno con una deliciosa compota de cereza que aporta un sabor frutal irresistible.',
    category: 'Viennoiserie',
    image: 'src/assets/danes_cereza.webp',
    imageAlt: 'Pain au chocolat artesanal de Pantino',
  },
  {
    id: 'panettone-artesanal',
    name: 'Panettone Artesanal',
    description: 'Panettone artesanal elaborado con fermentación lenta, masa suave y esponjosa, enriquecida con ingredientes seleccionados.',
    category: 'Postres',
    image: 'src/assets/panettone artesanal.webp',
    imageAlt: 'Cheesecake de frutos rojos de Pantino',
  },
  {
    id: 'croissant',
    name: 'Croissant',
    description: 'Croissant recién horneado, ligero y crujiente por fuera, tierno por dentro y perfecto para cualquier momento del día.',
    category: 'Postres',
    image: 'src/assets/croissant.webp',
    imageAlt: 'Éclair de chocolate artesanal de Pantino',
  },
  {
    id: 'cookies',
    name: 'Cookies',
    description: 'Galletas artesanales horneadas diariamente, con una textura perfecta entre suavidad y crujiente.',
    category: 'Tortas',
    image: 'src/assets/galletas.webp',
    imageAlt: 'Tarta de limón con merengue de Pantino',
  },
  {
    id: 'Crujiente-de-tocino-y-queso',
    name: 'Crujiente de tocino y queso',
    description: 'Delicado hojaldre dorado relleno de tocino y queso fundido, con una textura crujiente y un sabor irresistible.',
    category: 'Especiales',
    image: 'src/assets/Crujiente de tocino y queso.png',
    imageAlt: 'Caja de macarons artesanales de Pantino',
  },
  {
    id: 'brioche',
    name: 'Brioche Tradicional',
    description: 'Miga esponjosa y aroma a mantequilla, ideal para desayunos especiales.',
    category: 'Viennoiserie',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    imageAlt: 'Brioche tradicional horneado en Pantino',
  },
  {
    id: 'tiramisu',
    name: 'Tiramisú Clásico',
    description: 'Capas de bizcocho, mascarpone y café con un toque de cacao amargo.',
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
    imageAlt: 'Tiramisú clásico de Pantino',
  },
  {
    id: 'torta-chocolate',
    name: 'Torta de Chocolate',
    description: 'Bizcocho húmedo con ganache intensa para los amantes del cacao.',
    category: 'Tortas',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    imageAlt: 'Torta de chocolate premium de Pantino',
  },
  {
    id: 'canelle',
    name: 'Canelé',
    description: 'Exterior caramelizado y centro tierno con notas de vainilla y ron.',
    category: 'Especiales',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80',
    imageAlt: 'Canelé artesanal de Pantino',
  },
  {
    id: 'palmera',
    name: 'Palmera de Hojaldre',
    description: 'Hojaldre crujiente caramelizado, perfecta para compartir.',
    category: 'Viennoiserie',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    imageAlt: 'Palmera de hojaldre de Pantino',
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet',
    description: 'Bizcocho aterciopelado con frosting de queso crema suave y equilibrado.',
    category: 'Tortas',
    image: 'https://images.unsplash.com/photo-1586788680434-30d3246832ca?w=600&q=80',
    imageAlt: 'Pastel red velvet de Pantino',
  },
]

export const FEATURED_PRODUCTS = PRODUCTS.slice(0, 8)
