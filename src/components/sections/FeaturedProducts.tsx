import { motion } from 'framer-motion'
import { FEATURED_PRODUCTS } from '../../data/products'
import { SectionHeading } from '../ui/SectionHeading'
import { ProductCard } from '../ui/ProductCard'
import { Button } from '../ui/Button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const FeaturedProducts = () => {
  return (
    <section
      id="productos"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="products-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Algunos de nuestros productos más solicitados"
          subtitle="Esta es solo una pequeña muestra de la variedad de productos que encontrarás en Pantino."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {FEATURED_PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button to="/catalogo" variant="outline" size="lg">
            Ver catálogo completo
          </Button>
        </div>
      </div>
    </section>
  )
}
