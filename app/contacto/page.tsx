import type { Metadata } from "next"
import { ContactHero } from "@/components/contacto/contact-hero"
import { ContactSection } from "@/components/contacto/contact-section"

export const metadata: Metadata = {
  title: "Contacto | VisualCraft",
  description: "Contactanos para solicitar un presupuesto personalizado. Te respondemos en menos de 24 horas.",
}

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  )
}
