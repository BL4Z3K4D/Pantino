import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../../data/testimonials'
import { SectionHeading } from '../ui/SectionHeading'
import { StarRating } from '../ui/StarRating'

export const Testimonials = () => {
  return (
    <section
      id="testimonios"
      className="bg-cream py-20 sm:py-24"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Lo que dicen nuestros clientes" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.id}
              className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 flex-1 text-base leading-relaxed text-text-secondary">
                &ldquo;{testimonial.comment}&rdquo;
              </p>
              <footer className="mt-6 border-t border-black/5 pt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-text-primary">{testimonial.name}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
