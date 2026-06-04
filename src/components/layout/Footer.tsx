import { Link } from 'react-router-dom'
import { BUSINESS } from '../../data/business'
import { FOOTER_NAV_ITEMS, SOCIAL_LINKS } from '../../data/navigation'
import { scrollToSection } from '../../utils/scroll'

export const Footer = () => {
  return (
    <footer className="bg-cream-dark" aria-label="Pie de página">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img
              src="public/img/LogoPantino.webp"
              alt="Pantino - Postres y Viennoiserie"
              className="h-14 w-auto object-contain"
              width={160}
              height={56}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Postres y viennoiserie elaborados artesanalmente.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Navegación
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm text-text-secondary transition-colors hover:text-pantino"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/catalogo"
                  className="text-sm text-text-secondary transition-colors hover:text-pantino"
                >
                  Catálogo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Redes Sociales
            </h3>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary transition-colors hover:text-pantino"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-black/5 pt-8 text-center">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} {BUSINESS.name} - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
