import type { Metadata } from "next"
import { ServicesHero } from "@/components/servicios/services-hero"
import { ServicesGrid } from "@/components/servicios/services-grid"
import { ServicesCta } from "@/components/servicios/services-cta"

export const metadata: Metadata = {
  title: "Servicios | VisualCraft",
  description: "Pagina web profesional, menu digital con QR, resenas automatizadas y mas. Soluciones digitales para restaurantes.",
}

export default function ServiciosPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCta />
    </>
  )
}
