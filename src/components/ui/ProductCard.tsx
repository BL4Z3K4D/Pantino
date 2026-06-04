import type { Product } from '../../data/products'
import { LazyImage } from './LazyImage'

interface ProductCardProps {
  product: Product
  showCategory?: boolean
}

export const ProductCard = ({ product, showCategory = false }: ProductCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Reemplazar imagen placeholder por fotografía real del producto */}
      <LazyImage
        src={product.image}
        alt={product.imageAlt}
        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="p-5">
        {showCategory && (
          <span className="mb-2 inline-block rounded-full bg-cream px-3 py-1 text-xs font-medium text-pantino">
            {product.category}
          </span>
        )}
        <h3 className="font-display text-lg font-semibold text-text-primary">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {product.description}
        </p>
      </div>
    </article>
  )
}
