import { Resend } from 'resend'
import { CONTACT, SITE } from '@/lib/constants'

export type ContactPayload = {
  name: string
  email: string
  message: string
}

export type SendResult = { ok: true } | { ok: false; reason: 'config' | 'send' }

export async function sendContactMail(payload: ContactPayload): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { ok: false, reason: 'config' }
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: `${SITE.name} <kontakt@${SITE.domain}>`,
    to: CONTACT.email,
    replyTo: payload.email,
    subject: `Neue Anfrage von ${payload.name} über das Kontaktformular`,
    text: `Name: ${payload.name}\nE-Mail: ${payload.email}\n\nNachricht:\n${payload.message}`,
  })

  if (error) {
    return { ok: false, reason: 'send' }
  }

  return { ok: true }
}
