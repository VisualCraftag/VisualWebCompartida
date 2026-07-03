"use client"

import Image from "next/image"
import { ArrowUpRight, CheckCircle2, ExternalLink, FileText, Sparkles } from "lucide-react"
import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type Project = {
  image?: string
  previewUrl?: string
  title: string
  type: string
  url: string
  description: string
  features: string[]
  techs: string[]
  highlight?: string
  ctaLabel?: string
  secondaryAction?: {
    label: string
    url: string
  }
}

type PortfolioCategory = {
  id: string
  label: string
  eyebrow: string
  intro: string
  projects: Project[]
}

const basicProjects: Project[] = [
  {
    image: "/images/portfolio/parrilla.jpg",
    title: "Parrilla Don Pepe",
    type: "Web Basica",
    url: "https://donpepeparrilla.vercel.app/",
    description:
      "Sitio institucional para mostrar la propuesta, los platos principales y el acceso rapido a reservas.",
    features: ["Reservas online", "Menu digital", "Galeria de fotos", "WhatsApp visible"],
    techs: ["Next.js", "Tailwind CSS", "Reservas"],
  },
  {
    image: "/images/portfolio/pizzeria.jpg",
    title: "Pizzeria Mario",
    type: "Web Basica",
    url: "https://pizzeria-don-mario.vercel.app/",
    description:
      "Experiencia simple para presentar productos, promociones y un camino directo al pedido.",
    features: ["Pedidos online", "Promociones", "Delivery", "Panel admin"],
    techs: ["Next.js", "Pedidos"],
  },
  {
    image: "/images/portfolio/cafe.jpg",
    title: "Cafe Central",
    type: "Web Basica",
    url: "https://cafe-central-visualcraft.vercel.app/",
    description:
      "Landing orientada a cafeteria con carta, historia de marca y secciones faciles de recorrer.",
    features: ["Diseno minimalista", "Menu digital", "Suscripciones", "Blog"],
    techs: ["React", "Tailwind CSS"],
  },
  {
    image: "/images/portfolio/sushi.jpg",
    title: "Sushi Zen",
    type: "Web Basica",
    url: "https://sushi-zen-e-commerce-visualcraft.vercel.app/",
    description:
      "Catalogo visual para gastronomia con productos destacados y estructura preparada para venta.",
    features: ["Catalogo", "Sistema de puntos", "Ofertas", "Carrito"],
    techs: ["Next.js", "Carrito"],
  },
  {
    image: "/images/portfolio/bodegon.jpg",
    title: "Bodegon del Tano",
    type: "Web Basica",
    url: "https://bodegon-del-tano.vercel.app/",
    description:
      "Web clasica para reforzar presencia online, mostrar platos y facilitar el contacto.",
    features: ["Galeria de platos", "Historia", "Reservas", "Eventos"],
    techs: ["Next.js", "Formularios"],
  },
  {
    image: "/images/portfolio/cerveceria.jpg",
    title: "Cerveceria Hop",
    type: "Web Basica",
    url: "https://cerveceria-hop.vercel.app/",
    description:
      "Sitio visual para cerveceria con carta, eventos y reservas para grupos.",
    features: ["Carta de cervezas", "Eventos", "Reservas grupales", "Newsletter"],
    techs: ["Next.js", "Calendario"],
  },
]

const portfolioCategories: PortfolioCategory[] = [
  {
    id: "webs-basicas",
    label: "Webs basicas",
    eyebrow: "Base visual",
    intro:
      "Proyectos iniciales que sirven como referencia de presencia online, estructura comercial y estilo gastronomico.",
    projects: basicProjects,
  },
  {
    id: "menus-digitales",
    label: "Menus Digitales",
    eyebrow: "Carta online",
    intro:
      "Cartas digitales pensadas para que el cliente explore rapido, encuentre lo que quiere y llegue al pedido sin friccion.",
    projects: [
      {
        previewUrl: "https://reservas-portfolio-maxi-hrwz.vercel.app/",
        title: "Menu y reservas integrado",
        type: "Menu Digital",
        url: "https://reservas-portfolio-maxi-hrwz.vercel.app/",
        description:
          "Experiencia con carta navegable y flujo de reserva en el mismo entorno, ideal para restaurantes con alta rotacion.",
        features: ["Carta visual", "Reserva guiada", "Mobile first", "CTA directo"],
        techs: ["Next.js", "UX Mobile", "Reservas"],
        highlight: "Menu + conversion",
      },
      {
        previewUrl: "https://menu-googgle-sheets.vercel.app/",
        title: "Menu conectado a Sheets",
        type: "Menu Digital",
        url: "https://menu-googgle-sheets.vercel.app/",
        description:
          "Carta administrable desde Google Sheets para actualizar precios, platos y disponibilidad sin tocar codigo.",
        features: ["Gestion simple", "Actualizacion rapida", "Categorias", "Sin panel complejo"],
        techs: ["Google Sheets", "Next.js", "Automatizacion"],
        highlight: "Editable por el equipo",
      },
    ],
  },
  {
    id: "fidelizacion",
    label: "Fidelizacion",
    eyebrow: "Clientes recurrentes",
    intro:
      "Sistemas para transformar visitas sueltas en clientes que vuelven, acumulan beneficios y se mantienen cerca de la marca.",
    projects: [
      {
        previewUrl: "https://fidelizacion-portfolio.vercel.app/",
        title: "Sistema de fidelizacion",
        type: "Fidelizacion",
        url: "https://fidelizacion-portfolio.vercel.app/",
        description:
          "Programa digital para sumar puntos, comunicar beneficios y darle al negocio una herramienta simple de retencion.",
        features: ["Puntos y beneficios", "Perfil de cliente", "Promos", "Experiencia mobile"],
        techs: ["Next.js", "CRM liviano", "Retencion"],
        highlight: "Pensado para volver",
      },
    ],
  },
  {
    id: "reservas",
    label: "Sistema de reservas",
    eyebrow: "Mesas organizadas",
    intro:
      "Flujos de reserva claros para bajar mensajes manuales, ordenar la demanda y mejorar la experiencia antes de la visita.",
    projects: [
      {
        previewUrl: "https://reservas-portfolio-maxi-hrwz.vercel.app/",
        title: "Reservas online para restaurantes",
        type: "Reservas",
        url: "https://reservas-portfolio-maxi-hrwz.vercel.app/",
        description:
          "Sistema centrado en disponibilidad, confirmacion y llamados a la accion visibles para convertir interesados en mesas.",
        features: ["Flujo simple", "Datos de reserva", "Confirmacion", "Diseno responsive"],
        techs: ["Next.js", "Reservas", "Conversion"],
        highlight: "Menos ida y vuelta",
      },
    ],
  },
  {
    id: "reviews",
    label: "Incentivo Resenas + diagnostico",
    eyebrow: "Reputacion",
    intro:
      "Herramientas para incentivar resenas, detectar oportunidades de mejora y convertir la reputacion online en una ventaja.",
    projects: [
      {
        previewUrl: "https://incntivo-rese-as.vercel.app/",
        title: "Incentivo de resenas",
        type: "Reputacion",
        url: "https://incntivo-rese-as.vercel.app/",
        description:
          "Web enfocada en guiar al cliente satisfecho hacia la resena y convertir esa accion en prueba social.",
        features: ["Incentivo guiado", "Google Reviews", "Mobile first", "CTA directo"],
        techs: ["Next.js", "Google Reviews", "Conversion"],
        highlight: "Mas prueba social",
      },
      {
        title: "Diagnostico digital",
        type: "Diagnostico",
        url: "https://drive.google.com/file/d/1yTsAmkzCiGEWQJBxU0yExBxrQRlHJxtl/view?usp=sharing",
        description:
          "Analisis en PDF para entender el estado digital del negocio, detectar puntos de mejora y priorizar acciones.",
        features: ["Analisis PDF", "Oportunidades", "Plan de accion", "Lectura ejecutiva"],
        techs: ["Diagnostico", "Auditoria", "PDF"],
        highlight: "Documento accionable",
        ctaLabel: "Ver diagnostico",
      },
    ],
  },
]

const categoryCounts = portfolioCategories.reduce<Record<string, number>>((counts, category) => {
  counts[category.id] = category.projects.length
  return counts
}, {})

const badgeColors: Record<string, string> = {
  "Web Basica": "bg-primary/20 text-primary border-primary/30",
  "Menu Digital": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Fidelizacion: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Reservas: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  Reputacion: "bg-rose-500/20 text-rose-300 border-rose-500/30",
  Diagnostico: "bg-violet-500/20 text-violet-300 border-violet-500/30",
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.previewUrl) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <iframe
          src={project.previewUrl}
          title={`Preview de ${project.title}`}
          loading="lazy"
          className="h-[200%] w-[200%] origin-top-left scale-50 border-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          <span className="size-2 rounded-full bg-emerald-400" />
          Preview real
        </div>
      </div>
    )
  }

  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
      </div>
    )
  }

  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-secondary/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.28),transparent_42%)]" />
      <div className="relative flex h-28 w-24 flex-col justify-between rounded-lg border border-primary/30 bg-card/80 p-4 shadow-2xl shadow-primary/10">
        <FileText className="size-8 text-primary" />
        <div className="space-y-1.5">
          <span className="block h-1.5 rounded-full bg-muted-foreground/40" />
          <span className="block h-1.5 w-4/5 rounded-full bg-muted-foreground/30" />
          <span className="block h-1.5 w-2/3 rounded-full bg-muted-foreground/20" />
        </div>
      </div>
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
        <FileText className="size-3.5 text-primary" />
        Diagnostico PDF
      </div>
    </div>
  )
}

export function PortfolioGrid() {
  const [activeCategoryId, setActiveCategoryId] = useState(portfolioCategories[0].id)

  const activeCategory = useMemo(
    () =>
      portfolioCategories.find((category) => category.id === activeCategoryId) ||
      portfolioCategories[0],
    [activeCategoryId]
  )

  return (
    <section className="pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 rounded-xl border border-border/50 bg-card/40 p-2 backdrop-blur-sm">
          <div className="flex gap-2 overflow-x-auto">
            {portfolioCategories.map((category) => {
              const isActive = category.id === activeCategory.id

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`flex min-w-fit items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  {category.label}
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      isActive
                        ? "bg-white/20 text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {categoryCounts[category.id]}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="mb-8 flex flex-col justify-between gap-4 rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              {activeCategory.eyebrow}
            </div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {activeCategory.label}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {activeCategory.intro}
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-secondary/50 px-3 py-2 text-sm text-muted-foreground">
            <CheckCircle2 className="size-4 text-primary" />
            {activeCategory.projects.length}{" "}
            {activeCategory.projects.length === 1 ? "proyecto" : "proyectos"}
          </div>
        </div>

        <motion.div
          key={activeCategory.id}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {activeCategory.projects.map((project) => (
            <motion.div
              key={`${activeCategory.id}-${project.title}`}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
              }}
            >
              <motion.article
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/40"
              >
                <ProjectPreview project={project} />

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      {project.highlight ? (
                        <p className="mb-1 text-xs font-medium text-primary">
                          {project.highlight}
                        </p>
                      ) : null}
                      <h3 className="text-lg font-bold leading-snug text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <Badge
                      className={`shrink-0 border text-xs ${
                        badgeColors[project.type] ||
                        "bg-primary/20 text-primary border-primary/30"
                      }`}
                    >
                      {project.type}
                    </Badge>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-4 grid grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <div
                        key={feature}
                        className="flex min-h-10 items-center gap-2 rounded-lg border border-border/40 bg-secondary/35 px-3 py-2 text-xs text-muted-foreground"
                      >
                        <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border/50 bg-secondary/80 px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button
                        asChild
                        className="flex-1 bg-primary font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          {project.ctaLabel || "Visitar"}
                          <ExternalLink className="ml-1.5 size-4" />
                        </a>
                      </Button>
                      {project.secondaryAction ? (
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 border-border/70 bg-secondary/60 text-foreground hover:bg-secondary"
                        >
                          <a
                            href={project.secondaryAction.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FileText className="mr-1.5 size-4" />
                            {project.secondaryAction.label}
                          </a>
                        </Button>
                      ) : (
                        <Button
                          asChild
                          variant="outline"
                          className="hidden border-border/70 bg-secondary/60 text-foreground hover:bg-secondary sm:inline-flex sm:w-12 sm:px-0"
                          aria-label={`Abrir ${project.title}`}
                        >
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <ArrowUpRight className="size-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
