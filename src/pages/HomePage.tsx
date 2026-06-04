import { motion } from 'framer-motion'
import { Hero } from '../components/sections/Hero'
import { FeaturedProducts } from '../components/sections/FeaturedProducts'
import { About } from '../components/sections/About'
import { InstagramFeed } from '../components/sections/InstagramFeed'
import { Testimonials } from '../components/sections/Testimonials'
import { FAQ } from '../components/sections/FAQ'
import { Location } from '../components/sections/Location'
import { FinalCTA } from '../components/sections/FinalCTA'
import { SEOHead } from '../components/seo/SEOHead'
import { StructuredData } from '../components/seo/StructuredData'

export const HomePage = () => {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Hero />
        <FeaturedProducts />
        <About />
        <InstagramFeed />
        <Testimonials />
        <FAQ />
        <Location />
        <FinalCTA />
      </motion.main>
    </>
  )
}
