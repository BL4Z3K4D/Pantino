import { BUSINESS } from '../../data/business'

export const StructuredData = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: BUSINESS.fullName,
    image: `${BUSINESS.siteUrl}/img/LogoPantino.webp`,
    logo: `${BUSINESS.siteUrl}/img/LogoPantino.webp`,
    description: BUSINESS.description,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
        streetAddress: 'Jr. Mariscal Luzuriaga 520',
        addressLocality: 'Lima',
        addressRegion: 'Lima',
        postalCode: '15072',
        addressCountry: 'PE',
    },
    geo: {
    '@type': 'GeoCoordinates',
    latitude: -12.0760886,
    longitude: -77.0486756,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '12:00',
        closes: '21:00',
      },
    ],
    sameAs: [BUSINESS.instagram, BUSINESS.facebook, BUSINESS.tiktok],
    priceRange: '$$',
    servesCuisine: 'Pastelería y Viennoiserie',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
