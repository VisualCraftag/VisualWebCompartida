import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email invalido"),
  servicio: z.string().optional(),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors
      return NextResponse.json(
        { error: "Datos invalidos", details: errors },
        { status: 400 }
      )
    }

    const { nombre, email, servicio, mensaje } = result.data

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = "infovisualcraftag@gmail.com"
    const fromEmail = "VisualCraft <onboarding@resend.dev>" 

    if (!resendApiKey || !toEmail || !fromEmail) {
      console.error("Missing env vars: RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL")
      return NextResponse.json(
        { error: "Error de configuracion del servidor. Contactanos directamente por email." },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Nuevo contacto de ${nombre} - VisualCraft`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Nuevo mensaje de contacto</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${servicio ? `<p><strong>Servicio:</strong> ${servicio}</p>` : ""}
          <p><strong>Mensaje:</strong></p>
          <p style="background: #f3f4f6; padding: 16px; border-radius: 8px;">${mensaje.replace(/\n/g, "<br />")}</p>
          <hr style="border: 1px solid #e5e7eb;" />
          <p style="color: #6b7280; font-size: 12px;">Enviado desde el formulario de contacto de VisualCraft</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Intenta de nuevo mas tarde." },
      { status: 500 }
    )
  }
}
