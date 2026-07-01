import type { Metadata } from "next"
import { AboutHero } from "@/components/sobre-nosotros/about-hero"
import { AboutMission } from "@/components/sobre-nosotros/about-mission"
import { AboutValues } from "@/components/sobre-nosotros/about-values"
import { AboutCta } from "@/components/sobre-nosotros/about-cta"

export const metadata: Metadata = {
  title: "Sobre Nosotros | VisualCraft",
  description: "Conoce al equipo detras de VisualCraft. Especialistas en soluciones digitales para restaurantes en Argentina.",
}

export default function SobreNosotrosPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutCta />
    </>
  )
}
