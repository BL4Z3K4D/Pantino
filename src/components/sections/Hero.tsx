import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '../../data/business'
import { Button } from '../ui/Button'
import { LazyImage } from '../ui/LazyImage'
import { scrollToSection } from '../../utils/scroll'
import heroImage from '../../assets/hero.webp'

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-cream pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,62,155,0.06),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-pantino">
            Pantino · Postres y Viennoiserie
          </p>
          <h1
            id="hero-title"
            className="font-display text-4xl font-semibold leading-tight text-text-primary sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
          >
            Postres y viennoiserie elaborados artesanalmente para disfrutar cada momento
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Descubre una selección de postres, croissants y creaciones horneadas
            diariamente con ingredientes cuidadosamente seleccionados.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Pedir por WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#productos')}
            >
              Ver Productos
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          {/* Utilizar imagen placeholder temporal — reemplazar por fotografía real del local o productos estrella */}
          <LazyImage
            src={heroImage}
            alt="Selección de viennoiserie artesanal recién horneada en Pantino"
            className="aspect-[6/5] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-black/5 sm:aspect-[6/4]"
          />
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black/5 sm:block">
            <p className="text-sm font-medium text-pantino">Horneado diario</p>
            <p className="text-xs text-text-secondary">Ingredientes seleccionados</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
