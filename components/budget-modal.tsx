"use client"

import { useState } from "react"
import { AlertCircle, ArrowRight, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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

type FormStatus = "idle" | "loading" | "success" | "error"

export function BudgetModal() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [servicio, setServicio] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    if (!servicio) {
      setStatus("error")
      setErrorMessage("Selecciona un servicio")
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)
    const whatsapp = (formData.get("whatsapp") as string | null)?.trim()
    const mensaje = (formData.get("mensaje") as string | null)?.trim()

    const data = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      servicio,
      mensaje: [
        "Solicitud de presupuesto desde el modal.",
        whatsapp ? `WhatsApp: ${whatsapp}` : null,
        mensaje ? `Mensaje: ${mensaje}` : null,
      ]
        .filter(Boolean)
        .join("\n\n"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        throw new Error(json.error || "Error al enviar la solicitud")
      }

      setStatus("success")
      form.reset()
      setServicio("")
    } catch (err) {
      setStatus("error")
      setErrorMessage(
        err instanceof Error ? err.message : "Error al enviar la solicitud. Intenta de nuevo."
      )
    }
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen)

    if (!nextOpen) {
      setStatus("idle")
      setErrorMessage("")
      setServicio("")
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
          Solicitar Presupuesto
          <ArrowRight className="ml-1 size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="border-border/50 bg-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            Solicitar Presupuesto
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {"Completa el formulario y nos pondremos en contacto en menos de 24 horas"}
          </DialogDescription>
        </DialogHeader>
        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-8">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20">
              <Send className="size-6 text-primary" />
            </div>
            <p className="text-center text-foreground font-medium">
              {"Solicitud enviada con exito"}
            </p>
            <p className="text-center text-sm text-muted-foreground">
              {"Te contactaremos pronto"}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
                <AlertCircle className="size-4 shrink-0" />
                {errorMessage}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <Label htmlFor="nombre" className="text-foreground">
                Nombre Completo <span className="text-primary">*</span>
              </Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Juan Perez"
                required
                minLength={2}
                className="border-border/50 bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-foreground">
                Email <span className="text-primary">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="juan@restaurante.com"
                required
                className="border-border/50 bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="whatsapp" className="text-foreground">
                WhatsApp <span className="text-muted-foreground text-xs">(opcional)</span>
              </Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                placeholder="+54 9 11 1234-5678"
                className="border-border/50 bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-foreground">
                Servicio que te interesa <span className="text-primary">*</span>
              </Label>
              <Select value={servicio} onValueChange={setServicio}>
                <SelectTrigger className="w-full border-border/50 bg-secondary text-foreground">
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent className="border-border/50 bg-card text-foreground">
                  <SelectItem value="Pagina Web Profesional">Pagina Web Profesional</SelectItem>
                  <SelectItem value="Menu Digital con QR">Menu Digital con QR</SelectItem>
                  <SelectItem value="Reservas Online">Reservas Online</SelectItem>
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="mensaje" className="text-foreground">
                Mensaje <span className="text-muted-foreground text-xs">(opcional)</span>
              </Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                placeholder="Contanos mas sobre tu restaurante y lo que necesitas..."
                rows={3}
                className="border-border/50 bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary resize-none"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                disabled={status === "loading"}
                className="flex-1 border-border/50 text-foreground hover:bg-secondary"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={status === "loading"}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Solicitud"
                )}
              </Button>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              {"Al enviar este formulario, aceptas nuestra "}
              <a href="https://docs.google.com/document/d/1kr9PCIA5nFRC7VvuXBg9hnmjCH_pat-j-cgN1h_11Sg/edit?usp=sharing" className="text-primary underline" target="_blank">
                {"politica de privacidad"}
              </a>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
