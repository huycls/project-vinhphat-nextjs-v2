import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ClientsSection from '../components/ClientsSection'
import CTASection from '../components/CTASection'

function HomePage() {
  useEffect(() => {
    document.title = 'Vận Tải Vinh Phát - Dịch vụ vận tải hàng hóa chuyên nghiệp'
  }, [])

  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      {/* <StatsSection />
      <TestimonialsSection /> */}
      <ClientsSection />
      <CTASection />
    </>
  )
}

export default HomePage