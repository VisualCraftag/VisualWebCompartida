import { SectionHeader } from "@/components/section-header"

export function AboutHero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-96 rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          badge="Sobre Nosotros"
          title="Somos"
          highlight="VisualCraft"
          description="Una agencia digital especializada en el sector gastronomico. Ayudamos a restaurantes de todo Argentina a crecer en el mundo digital."
        />
      </div>
    </section>
  )
}
