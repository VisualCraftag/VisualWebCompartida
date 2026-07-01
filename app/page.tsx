import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { WhySection } from "@/components/home/why-section"
import { ProcessSection } from "@/components/home/process-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhySection />
      <ProcessSection />
      <CtaSection />
    </>
  )
}
