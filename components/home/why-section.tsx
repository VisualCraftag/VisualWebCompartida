"use client"

import { Zap, Shield, Headphones, Palette } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

const reasons = [
  {
    icon: Palette,
    title: "Diseño a Medida",
    description: "Cada proyecto se diseña desde cero, adaptado a la identidad y necesidades unicas de tu restaurante.",
  },
  {
    icon: Zap,
    title: "Entrega Rapida",
    description: "Tu proyecto listo en 48 horas. Trabajamos con eficiencia para que empieces a ver resultados rapido.",
  },
  {
    icon: Shield,
    title: "Soporte Continuo",
    description: "Asistencia tecnica y actualizaciones incluidas. Siempre estamos disponibles para lo que necesites.",
  },
  {
    icon: Headphones,
    title: "Atencion Personalizada",
    description: "Comunicacion directa con el equipo. Sin intermediarios, sin esperas, con respuestas claras.",
  },
]

export function WhySection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          badge="Por que elegirnos"
          title="Lo que nos hace"
          highlight="diferentes"
          description="Nos especializamos exclusivamente en el sector gastronomico. Buscamos entender tus necesidades y crear soluciones pensadas para el ritmo real de tu negocio."
        />

        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm transition-colors hover:border-primary/40"
              >
                <div className="flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <reason.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
