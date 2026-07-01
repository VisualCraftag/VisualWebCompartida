"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, TrendingUp, Sparkles, LayoutGrid, ChartNoAxesCombined, HandCoins, TicketPercent, ClipboardCheck  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion-wrapper"
import { BudgetModal } from "@/components/budget-modal"
import { motion } from "framer-motion"

const stats = [
  { icon: Clock, value: "48h", label: "Tiempo promedio" },
  { icon: LayoutGrid, value: "5+", label: "Soluciones" },
  { icon: ChartNoAxesCombined, value: "Presencia", label: "Digital" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 size-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 size-72 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            <FadeIn>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-white">
                <Sparkles className="size-4" />
                Especialistas en Gastronomia Digital
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                <span className="text-primary">VisualCraft<br></br></span>
                {"Transforma "}<br></br>
                <span className="text-primary">tu restaurante</span>
                {" en digital"}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="max-w-lg text-lg text-muted-foreground leading-relaxed">
                {"Optimiza tu carta, aumenta tus reservas y fideliza tus clientes. "}
                <strong className="text-foreground">Todo en 48 horas.</strong>
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-6 border-t border-b border-border/50 py-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <stat.icon className="size-4 text-primary" />
                    <div>
                      <span className="text-xl font-bold text-foreground">{stat.value}</span>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                  <Link href="/servicios">
                    Ver Servicios
                    <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <BudgetModal />
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="size-2 rounded-full bg-green-500" />
                Buscamos trabajar con restaurantes de todo Argentina
              </div>
            </FadeIn>
          </div>

          {/* Right - Browser mockup */}
          <FadeIn delay={0.3} direction="left">
            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-2xl shadow-primary/10">
                {/* Browser bar */}
                <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/80 px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <span className="size-3 rounded-full bg-red-500/80" />
                    <span className="size-3 rounded-full bg-yellow-500/80" />
                    <span className="size-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-3 flex-1 rounded-md bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                    turestaurante.com
                  </div>
                </div>
                {/* Screenshot */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/hero-restaurant.jpg"
                    alt="Vista previa de un sitio web de restaurante"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>


              {/* Floating badge - +40% */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-3 -bottom-3 flex items-center gap-2 rounded-lg border border-border/50 bg-card/90 px-3 py-2 shadow-lg backdrop-blur-sm lg:-right-6"
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20">
                  <TrendingUp className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary">Reservas</p>
                  <p className="text-[10px] text-muted-foreground"></p>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll hint */}
        <FadeIn delay={0.6} className="mt-16 flex flex-col items-center gap-1">
          <span className="text-xs text-muted-foreground">Descubre mas</span>
          <ArrowRight className="size-4 rotate-90 text-muted-foreground" />
        </FadeIn>
      </div>
    </section>
  )
}
