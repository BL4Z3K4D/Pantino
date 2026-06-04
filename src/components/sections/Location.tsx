import { motion } from 'framer-motion'
import { BUSINESS } from '../../data/business'
import { SectionHeading } from '../ui/SectionHeading'

const CONTACT_INFO = [
  { label: 'Dirección', value: BUSINESS.address },
  { label: 'Horario de atención', value: BUSINESS.hours },
  { label: 'Teléfono', value: BUSINESS.phoneDisplay, href: `tel:${BUSINESS.phone}` },
  { label: 'Correo electrónico', value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
]

export const Location = () => {
  return (
    <section
      id="contacto"
      className="bg-cream py-20 sm:py-24"
      aria-labelledby="location-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Visítanos" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-pantino">
                  {item.label}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block text-base text-text-primary transition-colors hover:text-pantino"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-base text-text-primary">{item.value}</p>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5"
          >
            {/* Reemplazar URL del mapa embebido con la ubicación real del local */}
            <iframe
              title={`Mapa de ubicación de ${BUSINESS.name}`}
              src={BUSINESS.mapEmbedUrl}
              className="aspect-[4/3] w-full border-0 lg:aspect-square"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
