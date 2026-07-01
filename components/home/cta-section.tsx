"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion-wrapper"

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/8 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {"Listo para llevar tu restaurante al "}
            <span className="text-primary">siguiente nivel?</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground">
            Contactanos hoy y recibiras una propuesta personalizada en menos de 24 horas.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              <Link href="/contacto">
                Contactanos
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border/50 text-foreground hover:bg-secondary">
              <Link href="/portafolio">
                Ver Portfolio
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
