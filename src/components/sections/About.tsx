import { motion } from 'framer-motion'
import { LazyImage } from '../ui/LazyImage'

const VALUES = [
  {
    title: 'Elaboración artesanal',
    description: 'Cada producto se prepara a mano con técnicas tradicionales y atención al detalle.',
  },
  {
    title: 'Ingredientes seleccionados',
    description: 'Trabajamos con materias primas de alta calidad para garantizar sabor y frescura.',
  },
  {
    title: 'Atención personalizada',
    description: 'Te acompañamos en cada pedido para crear experiencias dulces a tu medida.',
  },
]

export const About = () => {
  return (
    <section
      id="nosotros"
      className="bg-cream py-20 sm:py-24"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Reemplazar imagen placeholder por fotografía del equipo o del taller */}
            <LazyImage
              src="src\assets\nosotros.webp"
              alt="Equipo de Pantino elaborando postres artesanales en el taller"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl ring-1 ring-black/5"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2
              id="about-title"
              className="font-display text-3xl font-semibold text-text-primary sm:text-4xl"
            >
              La pasión detrás de Pantino
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
              <p>
                En Pantino nacimos con una misión clara: compartir el placer de la
                repostería artesanal y la viennoiserie de autor. Somos un equipo
                apasionado por transformar ingredientes simples en experiencias
                memorables.
              </p>
              <p>
                Cada mañana horneamos con dedicación croissants, postres y
                creaciones especiales, cuidando cada detalle desde la selección de
                materias primas hasta la presentación final.
              </p>
              <p>
                Nuestro compromiso es ofrecer productos de calidad premium con un
                trato cercano y profesional, para que cada visita o pedido se
                sienta especial.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-1">
              {VALUES.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pantino/10 text-sm text-pantino">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold text-text-primary">{value.title}</h3>
                      <p className="mt-1 text-sm text-text-secondary">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
