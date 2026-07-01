import type { Metadata } from "next"
import { PortfolioHero } from "@/components/portafolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portafolio/portfolio-grid"
import { PortfolioCta } from "@/components/portafolio/portfolio-cta"

export const metadata: Metadata = {
  title: "Portfolio | VisualCraft",
  description: "Proyectos web para restaurantes, parrillas, pizzerias y mas. Mira nuestro trabajo.",
}

export default function PortafolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCta />
    </>
  )
}
