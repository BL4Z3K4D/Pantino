import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PRODUCTS, type ProductCategory } from '../data/products'
import { BUSINESS } from '../data/business'
import { ProductCard } from '../components/ui/ProductCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { SEOHead } from '../components/seo/SEOHead'

const CATEGORIES: Array<ProductCategory | 'Todos'> = [
  'Todos',
  'Viennoiserie',
  'Postres',
  'Tortas',
  'Especiales',
]

export const CatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'Todos'>('Todos')

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todos') return PRODUCTS
    return PRODUCTS.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <SEOHead
        title={`Catálogo | ${BUSINESS.fullName}`}
        description="Explora el catálogo completo de postres, viennoiserie y creaciones artesanales de Pantino."
        path="/catalogo"
      />

      <main className="bg-cream pt-28 pb-20 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-text-secondary">
              <li>
                <Link to="/" className="transition-colors hover:text-pantino">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-text-primary">Catálogo</li>
            </ol>
          </nav>

          <SectionHeading
            title="Catálogo completo"
            subtitle="Descubre toda nuestra selección de postres y viennoiserie artesanal. Estructura preparada para crecer con nuevos productos."
            align="left"
          />

          <div
            className="mb-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filtrar por categoría"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-pantino text-white shadow-sm'
                    : 'bg-white text-text-secondary ring-1 ring-black/5 hover:text-pantino'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            layout
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <ProductCard product={product} showCategory />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  )
}
