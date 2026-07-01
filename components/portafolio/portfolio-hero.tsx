import { SectionHeader } from "@/components/section-header"

export function PortfolioHero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/3 size-96 rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          badge="Nuestro Portfolio"
          title="Proyectos Web para"
          highlight="Restaurantes"
          description="Cada proyecto es unico, disenado a medida para las necesidades especificas de cada negocio gastronomico."
        />
      </div>
    </section>
  )
}
