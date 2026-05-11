"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { DifferentialsSection } from "@/components/sections/differentials-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
