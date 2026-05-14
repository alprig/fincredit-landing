import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import WhyUs from '@/components/sections/WhyUs'
import Calculator from '@/components/sections/Calculator'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import MobileApp from '@/components/sections/MobileApp'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import ApplyModal from '@/components/ui/ApplyModal'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <WhyUs />
        <Calculator />
        <HowItWorks />
        <Testimonials />
        <MobileApp />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ApplyModal />
    </>
  )
}
