"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion-wrapper"

export function ServicesCta() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {"No encontras lo que buscas?"}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-muted-foreground">
            Contanos tu idea y creamos una solucion a medida para tu negocio gastronomico.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            <Link href="/contacto">
              Hablemos de tu proyecto
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
