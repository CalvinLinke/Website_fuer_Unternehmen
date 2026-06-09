'use server'

import { sendContactMail } from '@/lib/email'

export type ContactFormState = { ok: true } | { ok: false; reason: 'config' | 'validation' | 'send' } | null

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real visitors never see or fill this field — only bots that fill every input do.
  // Pretend success so the bot has no signal that it was caught.
  const honeypot = String(formData.get('website') ?? '').trim()
  if (honeypot !== '') {
    return { ok: true }
  }

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return { ok: false, reason: 'validation' }
  }

  return sendContactMail({ name, email, message })
}
