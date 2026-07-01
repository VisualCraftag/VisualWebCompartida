"use client"

import Image from "next/image"
import { FadeIn } from "@/components/motion-wrapper"

export function AboutMission() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative overflow-hidden rounded-xl border border-border/50">
              <Image
                src="/images/hero-restaurant.jpg"
                alt="Equipo VisualCraft trabajando"
                width={600}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-white">
                Nuestra Historia
              </span>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                {"Nacimos para digitalizar la "}
                <span className="text-highlight">gastronomia argentina</span>
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  VisualCraft nacio de la pasion por la tecnologia y la gastronomia. 
                  Vimos que muchos restaurantes increibles no tenian presencia digital, 
                  y decidimos cambiarlo.
                </p>
                <p>
                  Buscamos trabajar con restaurantes, parrillas, pizzerias, cafeterias y 
                  todo tipo de negocios gastronomicos en Buenos Aires y todo el pais. 
                  Nuestro objetivo es simple: acercar herramientas digitales que ayuden 
                  a cada negocio gastronomico a crecer.
                </p>
                <p>
                  Nos especializamos exclusivamente en el sector gastronomico porque 
                  creemos que entender profundamente a nuestros clientes es la clave 
                  para entregar resultados excepcionales.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
