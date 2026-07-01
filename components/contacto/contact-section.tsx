"use client"

import { useState } from "react"
import { Mail, MapPin, Send, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FadeIn } from "@/components/motion-wrapper"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "infovisualcraftag@gmail.com",
  },
  {
    icon: MapPin,
    title: "Ubicacion",
    detail: "Buenos Aires, Argentina",
  },
]

type FormStatus = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [servicio, setServicio] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      servicio: servicio || undefined,
      mensaje: formData.get("mensaje") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        throw new Error(json.error || "Error al enviar el mensaje")
      }

      setStatus("success")
      form.reset()
      setServicio("")
    } catch (err) {
      setStatus("error")
      setErrorMessage(
        err instanceof Error ? err.message : "Error al enviar el mensaje. Intenta de nuevo."
      )
    }
  }

  return (
    <section className="pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - Contact info */}
          <FadeIn>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                {"Contactate con "}
                <span className="text-primary">nosotros</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Completa el formulario y recibi un presupuesto personalizado en menos de 24 horas. Sin compromisos."}
              </p>

              <div className="flex flex-col gap-4 pt-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                      <item.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right - Contact form */}
          <FadeIn delay={0.2}>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm lg:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center gap-4 py-16">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/20">
                    <Send className="size-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Mensaje enviado</h3>
                  <p className="text-center text-muted-foreground">
                    Te contactaremos en menos de 24 horas. Gracias por confiar en VisualCraft.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="mt-4 border-border/50 text-foreground hover:bg-secondary"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
                      <AlertCircle className="size-4 shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-nombre" className="text-foreground font-semibold">
                      Nombre
                    </Label>
                    <Input
                      id="contact-nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                      minLength={2}
                      className="border-border/50 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-email" className="text-foreground font-semibold">
                      Email
                    </Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="border-border/50 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label className="text-foreground font-semibold">
                      {"Servicio "}
                      <span className="font-normal text-muted-foreground">{"(opcional)"}</span>
                    </Label>
                    <Select value={servicio} onValueChange={setServicio}>
                      <SelectTrigger className="w-full border-border/50 bg-secondary/50 text-foreground">
                        <SelectValue placeholder="Elegi un servicio" />
                      </SelectTrigger>
                      <SelectContent className="border-border/50 bg-card text-foreground">
                        <SelectItem value="Pagina Web Profesional">Pagina Web Profesional</SelectItem>
                        <SelectItem value="Menu Digital con QR">Menu Digital con QR</SelectItem>
                        <SelectItem value="Reservas Online">Reservas Online</SelectItem>
                        <SelectItem value="E-commerce / Pedidos Online">E-commerce / Pedidos Online</SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-mensaje" className="text-foreground font-semibold">
                      Mensaje
                    </Label>
                    <Textarea
                      id="contact-mensaje"
                      name="mensaje"
                      placeholder="Contanos sobre tu proyecto..."
                      rows={4}
                      required
                      minLength={10}
                      className="border-border/50 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 size-4" />
                        Enviar
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    {"Al enviar aceptas nuestra "}
                    <a href="https://docs.google.com/document/d/1kr9PCIA5nFRC7VvuXBg9hnmjCH_pat-j-cgN1h_11Sg/edit?usp=sharing" className="text-primary underline" target="_blank">
                      {"politica de privacidad"}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
