import { SectionHeader } from "@/components/section-header"

export function ServicesHero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 size-96 rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          badge="Nuestros Servicios"
          title="Elegi la solucion"
          highlight="perfecta"
          description="Soluciones diseñadas especificamente para restaurantes, parrillas, pizzerias y todo tipo de negocios gastronomicos"
        />
      </div>
    </section>
  )
}
