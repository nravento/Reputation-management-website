"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(data: {
  name: string
  email: string
  company?: string
  message: string
}) {
  console.log("[v0] Attempting to send email with data:", { ...data, message: data.message.substring(0, 50) + "..." })
  console.log("[v0] RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY)

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY is not set")
      return { success: false, error: "Email service not configured" }
    }

    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "nick@reputationshieldllc.com",
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    console.log("[v0] Email sent successfully:", result)
    return { success: true, data: result }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
