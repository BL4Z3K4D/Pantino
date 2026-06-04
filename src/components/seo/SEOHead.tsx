import { Helmet } from 'react-helmet-async'
import { BUSINESS } from '../../data/business'

interface SEOHeadProps {
  title?: string
  description?: string
  path?: string
  type?: 'website' | 'article'
}

export const SEOHead = ({
  title = `${BUSINESS.fullName} | Postres y Viennoiserie Artesanal`,
  description = BUSINESS.description,
  path = '/',
  type = 'website',
}: SEOHeadProps) => {
  const url = `${BUSINESS.siteUrl}${path}`
  const image = `${BUSINESS.siteUrl}/img/LogoPantino.webp`

  return (
    <Helmet>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_PE" />
      <meta property="og:site_name" content={BUSINESS.fullName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="geo.region" content="PE-LMA" />
      <meta name="geo.placename" content="Lima" />
    </Helmet>
  )
}
