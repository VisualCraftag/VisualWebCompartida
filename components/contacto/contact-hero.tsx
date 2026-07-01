import { SectionHeader } from "@/components/section-header"

export function ContactHero() {
  return (
    <section className="relative pt-28 pb-8 lg:pt-36 lg:pb-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-96 rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          badge="Contacto"
          title="Hablemos de tu"
          highlight="proyecto"
        />   
      </div>
    </section>
  )
}
