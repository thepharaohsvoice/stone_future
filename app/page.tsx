import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { SmartCalculator } from "@/components/smart-calculator"
import { Showroom } from "@/components/showroom"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/quarry-bg.jpeg')" }}
      >
        {/* light overlay: keep the quarry marble veins clearly visible while preserving text contrast */}
        <div className="absolute inset-0 bg-background/25" aria-hidden="true" />
        <div className="relative">
          <SmartCalculator />
          <Showroom />
          <SiteFooter />
        </div>
      </div>
    </main>
  )
}
