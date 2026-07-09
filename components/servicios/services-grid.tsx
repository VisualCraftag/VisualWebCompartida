"use client"

import Link from "next/link"
import { ArrowRight, Globe, QrCode, Star, CalendarCheck, HandCoins, TicketPercent, ClipboardCheck  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
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
    popular: true,
  },
  {
    icon: QrCode,
    title: "Menu Digital con QR",
    description:
      "Menu visual accesible mediante codigo QR. Tus clientes pueden ver la carta desde su celular sin contacto fisico.",
    features: [
      "Menu visual",
      "Codigos QR personalizados",
      "Actualizable en tiempo real",
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

export function ServicesGrid() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <StaggerItem
              key={service.title}
              className={index === services.length - 1 ? "lg:col-start-2" : ""}
            >
              <motion.div
                whileHover={{ y: -4 }}
                className={`group relative flex h-full flex-col rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card/80 ${
                  service.popular ? "pt-8" : ""
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground whitespace-nowrap">
                    <Star className="size-3" />
                    Mas popular
                  </span>
                )}

                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <service.icon className="size-6 text-primary" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="mb-6 flex flex-col gap-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg
                        className="size-4 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                    <Link href="/contacto">
                      Contactanos
                      <ArrowRight className="ml-1 size-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
