import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Statistics from './components/Statistics'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="gradient-bg">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Statistics />
      <Portfolio />
      <Pricing />
      <Team />
      <Testimonials />
      <Blog />
      <CTA />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  )
}
