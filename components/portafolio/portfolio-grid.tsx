"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

const projects = [
  {
    image: "/images/portfolio/parrilla.jpg",
    title: "Parrilla Don Pepe",
    type: "Web Completa",
    url: "https://donpepeparrilla.vercel.app/",
    description:
      "Sitio web completo con reservas online y menu digital interactivo para una parrilla tradicional.",
    features: ["Reservas Online", "Menu Digital", "Galeria de Fotos", "Integracion WhatsApp"],
    techs: ["Next.js", "Tailwind CSS", "Sistema de Reservas"],
  },
  {
    image: "/images/portfolio/pizzeria.jpg",
    title: "Pizzeria Mario",
    type: "E-commerce",
    url: "https://pizzeria-don-mario.vercel.app/",
    description:
      "E-commerce con sistema de pedidos online y seguimiento en tiempo real de entregas.",
    features: ["Pedidos Online", "Pagos Seguros", "Tracking de Delivery", "Panel Admin"],
    techs: ["Next.js", "Sistema de Pedidos"],
  },
  {
    image: "/images/portfolio/cafe.jpg",
    title: "Cafe Central",
    type: "Landing Page",
    url: "https://cafe-central-visualcraft.vercel.app/",
    description:
      "Landing page moderna con menu de cafeteria y sistema de suscripcion para cafe del mes.",
    features: ["Diseno Minimalista", "Menu Digital", "Suscripciones", "Blog de Cafe"],
    techs: ["React", "Tailwind CSS", "Subscripciones"],
  },
  {
    image: "/images/portfolio/sushi.jpg",
    title: "Sushi Zen",
    type: "E-commerce",
    url: "https://sushi-zen-e-commerce-visualcraft.vercel.app/",
    description:
      "Plataforma completa con catalogo de productos, carrito de compras y sistema de puntos.",
    features: ["Catalogo Completo", "Sistema de Puntos", "Ofertas Especiales"],
    techs: ["Next.js", "Sistema de Puntos", "Carrito"],
  },
  {
    image: "/images/portfolio/bodegon.jpg",
    title: "Bodegon del Tano",
    type: "Web Completa",
    url: "https://bodegon-del-tano.vercel.app/",
    description:
      "Sitio web clasico con galeria de platos, historia del restaurante y reservas telefonicas.",
    features: ["Galeria de Platos", "Historia", "Reservas", "Eventos Especiales"],
    techs: ["Next.js", "Galeria", "Formularios"],
  },
  {
    image: "/images/portfolio/cerveceria.jpg",
    title: "Cerveceria Hop",
    type: "Web Completa",
    url: "https://cerveceria-hop.vercel.app/",
    description:
      "Web interactiva con carta de cervezas artesanales, eventos y sistema de reservas para grupos.",
    features: ["Carta de Cervezas", "Eventos", "Reservas Grupales", "Newsletter"],
    techs: ["Next.js", "Calendario Eventos", "Reservas Grupales"],
  },
]

const badgeColors: Record<string, string> = {
  "Web Completa": "bg-primary/20 text-primary border-primary/30",
  "E-commerce": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Landing Page": "bg-amber-500/20 text-amber-400 border-amber-500/30",
}

export function PortfolioGrid() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/40"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    <Badge
                      className={`shrink-0 border text-xs ${badgeColors[project.type] || "bg-primary/20 text-primary border-primary/30"}`}
                    >
                      {project.type}
                    </Badge>
                  </div>

                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold text-foreground">
                      {"Caracteristicas:"}
                    </p>
                    <ul className="flex flex-col gap-1">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="size-1 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <p className="mb-2 text-xs font-semibold text-foreground">
                      {"Tecnologias:"}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.techs.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border/50 bg-secondary/80 px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Ver Proyecto
                        <ExternalLink className="ml-1.5 size-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
