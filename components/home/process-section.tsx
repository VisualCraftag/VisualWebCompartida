"use client"

import { MessageSquare, Pencil, Code, Rocket } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consulta Inicial",
    description: "Nos contas sobre tu restaurante, tus objetivos y lo que necesitas. Sin compromisos.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Diseño y Propuesta",
    description: "Creamos un diseño personalizado y te presentamos una propuesta completa.",
  },
  {
    icon: Code,
    step: "03",
    title: "Desarrollo",
    description: "Construimos tu proyecto con las mejores tecnologias y te mantenemos informado.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Lanzamiento",
    description: "Publicamos tu sitio web y te capacitamos para que puedas gestionarlo.",
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          badge="Nuestro Proceso"
          title="Simple, rapido y"
          highlight="efectivo"
          description="Desde la primera consulta hasta el lanzamiento, te acompañamos en cada paso del camino."
        />

        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StaggerItem key={step.step}>
              <div className="relative flex flex-col gap-4 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="size-5 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-primary/40">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full border border-border/50 bg-card text-primary lg:flex">
                    <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
