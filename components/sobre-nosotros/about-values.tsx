"use client"

import { Heart, Target, Lightbulb, Handshake } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

const values = [
  {
    icon: Heart,
    title: "Pasion",
    description: "Amamos lo que hacemos. Cada proyecto recibe la misma dedicacion y entusiasmo, sin importar su tamano.",
  },
  {
    icon: Target,
    title: "Resultados",
    description: "Nos enfocamos en generar resultados reales y medibles para tu negocio. No solo sitios bonitos.",
  },
  {
    icon: Lightbulb,
    title: "Innovacion",
    description: "Usamos las ultimas tecnologias y tendencias de diseño para que tu restaurante destaque.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    description: "Somos tu socio digital. Estamos disponibles cuando nos necesites, con comunicacion directa.",
  },
]

export function AboutValues() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          badge="Nuestros Valores"
          title="Lo que nos"
          highlight="impulsa"
        />

        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm transition-colors hover:border-primary/40"
              >
                <div className="flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <value.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
