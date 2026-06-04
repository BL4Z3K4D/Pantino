import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '../../data/business'
import { Button } from '../ui/Button'

export const FinalCTA = () => {
  return (
    <section className="bg-pantino py-20 sm:py-24" aria-labelledby="cta-title">
      <motion.div
        className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 id="cta-title" className="font-display text-3xl font-semibold text-white sm:text-4xl">
          ¿Listo para disfrutar nuestros productos?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
          Escríbenos por WhatsApp y te ayudaremos a elegir la mejor opción.
        </p>
        <div className="mt-8">
          <Button
            variant="secondary"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-white text-pantino hover:bg-cream"
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
