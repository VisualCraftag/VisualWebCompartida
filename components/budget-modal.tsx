"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
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

export function BudgetModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setOpen(false)
      setSubmitted(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-8">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/20">
              <ArrowRight className="size-6 text-primary" />
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
            <div className="flex flex-col gap-2">
              <Label htmlFor="nombre" className="text-foreground">
                Nombre Completo <span className="text-primary">*</span>
              </Label>
              <Input
                id="nombre"
                placeholder="Juan Perez"
                required
                className="border-border/50 bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-foreground">
                Email <span className="text-primary">*</span>
              </Label>
              <Input
                id="email"
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
                placeholder="+54 9 11 1234-5678"
                className="border-border/50 bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-foreground">
                Servicio que te interesa <span className="text-primary">*</span>
              </Label>
              <Select required>
                <SelectTrigger className="w-full border-border/50 bg-secondary text-foreground">
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent className="border-border/50 bg-card text-foreground">
                  <SelectItem value="web">Pagina Web Profesional</SelectItem>
                  <SelectItem value="menu">Menu Digital con QR</SelectItem>
                  <SelectItem value="reservas">Reservas Online</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="mensaje" className="text-foreground">
                Mensaje <span className="text-muted-foreground text-xs">(opcional)</span>
              </Label>
              <Textarea
                id="mensaje"
                placeholder="Contanos mas sobre tu restaurante y lo que necesitas..."
                rows={3}
                className="border-border/50 bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary resize-none"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-border/50 text-foreground hover:bg-secondary"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                Enviar Solicitud
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
