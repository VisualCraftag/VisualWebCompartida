"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  QrCode,
  Star,
  CalendarCheck,
  ShoppingCart,
  MessageCircle,
  ClipboardCheck,
  TicketPercent,
  HandCoins
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { motion } from "framer-motion"

const services = [
  {
    icon: Globe,
    title: "Pagina Web Profesional",
    description:
      "Sitio web completo y responsive para tu restaurante. Incluye galeria de platos, informacion de contacto y ubicacion.",
    features: [
      "Diseño 100% personalizado",
      "Optimizado para moviles",
      "Galeria de platos y bebidas",
      "Informacion y ubicacion",
      "Formulario de contacto",
      "Integracion con redes sociales",
    ],
    popular: false,
  },
  {
    icon: QrCode,
    title: "Menu Digital con QR",
    description:
      "Menu interactivo accesible mediante codigo QR. Tus clientes pueden ver la carta desde su celular sin contacto fisico.",
    features: [
      "Menu interactivo y visual",
      "Codigos QR personalizados",
      "Actualizacion en tiempo real",
      "Fotos de alta calidad",
      "Categorias organizadas",
      "Sin instalacion de apps",
    ],
    popular: false,
  },
  {
    icon: CalendarCheck,
    title: "Reservas Online",
    description:
      "Sistema de reservas integrado con tu web. Tus clientes pueden reservar mesa en segundos desde cualquier dispositivo.",
    features: [
      "Reservas 24/7",
      "Confirmacion automatica",
      "Gestion de mesas",
      "Notificaciones por email",
      "Panel de administracion",
      "Integracion con WhatsApp",
    ],
    popular: false,
  },
  {
    icon: ShoppingCart,
    title: "E-commerce / Pedidos Online",
    description:
      "Plataforma de pedidos online con carrito de compras, pagos seguros y tracking de delivery en tiempo real.",
    features: [
      "Catalogo de productos",
      "Carrito de compras",
      "Pagos seguros (Mercado Pago)",
      "Tracking de delivery",
      "Gestion de pedidos",
      "Ofertas y descuentos",
    ],
    popular: false,
  },
    {
    icon: ClipboardCheck,
    title: "Rastreadas Automatizadas",
    description:
      "Monitoreo continuo de tu presencia online. Seguimiento de menciones, reseñas y comentarios en Google y plataformas relevantes.",
    features: [
      "Resumen mensual con análisis IA",
      "Detección de menciones en Google y TripAdvisor",
      "Informe simple, grafico y accionable",
      "Historial organizado por fecha, estación del año o etapa personalizada.",
      "Recomendaciones de mejora",
    ],
    popular: false,
  },
  {
  icon: TicketPercent,
  title: "Incentivo a las Reseñas",
  description:
    "Sistema automático para fomentar reseñas reales. Implementamos un flujo con cupón digital que incentiva a tus clientes a dejar su opinión.",
  features: [
    "QR directo a Google Reviews",
    "Cupón digital automático post-reseña",
    "Configuración personalizada del beneficio",
    "Mensaje optimizado para solicitar la reseña",
    "Panel simple de control de cupones",
    "Implementación y puesta en marcha incluida",
  ],
  popular: false,
},
{
  icon: HandCoins,
  title: "Sistema de Fidelización",
  description:
    "Interfaz Móvil para recompensar visitas frecuentes. Implementación simple y adaptable a tu modelo de negocio.",
  features: [
    "Sistema de puntos o visitas",
    "Registro digital de clientes",
    "QR personalizado por usuario",
    "Panel de validación para empleados",
    "Control de recompensas entregadas",
    "Configuración inicial incluida",
  ],
  popular: false,
},
]

export function ServicesPreview() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    onSelect()
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // Autoplay with pause on hover
  useEffect(() => {
    if (!api || isPaused) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 4000)
    return () => clearInterval(interval)
  }, [api, isPaused])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  return (
    <section id="servicios" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          badge="Nuestros Servicios"
          title="Elegi la solución"
          highlight="perfecta"
          description="Soluciones diseñadas especificamente para restaurantes, parrillas, pizzerias y todo tipo de negocios gastronomicos"
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service) => (
                <CarouselItem
                  key={service.title}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative flex h-full flex-col rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card/80"
                  >

                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                      <service.icon className="size-6 text-primary" />
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="mb-6 flex flex-col gap-2.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <svg
                            className="size-4 shrink-0 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <Button
                        asChild
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                      >
                        <Link href="/contacto">
                          Contactanos
                          <ArrowRight className="ml-1 size-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation arrows */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="size-10 rounded-full border-border/50 bg-card/50 text-foreground backdrop-blur-sm hover:border-primary hover:bg-primary/10 hover:text-primary"
              aria-label="Anterior servicio"
            >
              <ArrowLeft className="size-4" />
            </Button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => api?.scrollTo(idx)}
                  aria-label={`Ir al servicio ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${current === idx
                      ? "w-6 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="size-10 rounded-full border-border/50 bg-card/50 text-foreground backdrop-blur-sm hover:border-primary hover:bg-primary/10 hover:text-primary"
              aria-label="Siguiente servicio"
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
