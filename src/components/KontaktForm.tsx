'use client'

import { useActionState, type ReactNode } from 'react'
import { Button } from '@/components/Button'
import { CONTACT } from '@/lib/constants'
import { submitContactForm, type ContactFormState } from '@/app/kontakt/actions'

const inputClasses =
  'w-full rounded-[var(--radius-input)] border-[1.5px] border-line bg-cream px-5 py-3.5 text-[1rem] text-text placeholder:text-text-muted/70 transition-[border-color,box-shadow] duration-200 focus:border-violet focus:outline-none focus:ring-4 focus:ring-lavender-soft'

const labelClasses = 'text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-text-muted'

const RESULT_MESSAGES: Record<'config' | 'validation' | 'send', string> = {
  validation:
    'Bitte füllen Sie Name, E-Mail-Adresse und Nachricht vollständig aus — und prüfen Sie, ob die E-Mail-Adresse korrekt geschrieben ist.',
  config: `Der Versand ist aktuell noch nicht eingerichtet. Erreichen Sie uns in der Zwischenzeit gerne direkt telefonisch unter ${CONTACT.phone} oder per E-Mail an ${CONTACT.email}.`,
  send: `Beim Versand ist leider etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an ${CONTACT.email}.`,
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className={labelClasses}>
        {label}
      </label>
      {children}
    </div>
  )
}

function ResultMessage({ state }: { state: ContactFormState }) {
  if (!state) return null

  if (state.ok) {
    return (
      <p
        role="status"
        className="rounded-[var(--radius-input)] border-[1.5px] border-violet/25 bg-lavender-mist px-5 py-4 text-[0.9375rem] leading-[1.6] text-violet"
      >
        Vielen Dank für Ihre Nachricht! Ich melde mich so schnell wie möglich persönlich bei Ihnen zurück.
      </p>
    )
  }

  return (
    <p
      role="alert"
      className="rounded-[var(--radius-input)] border-[1.5px] border-line bg-cream-deep px-5 py-4 text-[0.9375rem] leading-[1.6] text-text"
    >
      {RESULT_MESSAGES[state.reason]}
    </p>
  )
}

export function KontaktForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(submitContactForm, null)

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Webseite</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Field label="Name" htmlFor="name">
        <input id="name" name="name" type="text" required autoComplete="name" placeholder="Ihr Name" className={inputClasses} />
      </Field>

      <Field label="E-Mail-Adresse" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="ihre@email.de"
          className={inputClasses}
        />
      </Field>

      <Field label="Ihre Nachricht" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Erzählen Sie kurz von Ihrem Vorhaben — ich melde mich zeitnah persönlich zurück."
          className={`${inputClasses} resize-y`}
        />
      </Field>

      <ResultMessage state={state} />

      <Button type="submit" disabled={isPending} size="md" className="self-start">
        {isPending ? 'Wird gesendet …' : 'Nachricht absenden'}
      </Button>
    </form>
  )
}
