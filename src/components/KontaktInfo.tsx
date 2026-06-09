import { CONTACT } from '@/lib/constants'

const ROWS = [
  { label: 'Adresse', value: `${CONTACT.address.street}\n${CONTACT.address.zipCity}` },
  { label: 'Telefon', value: CONTACT.phone, href: CONTACT.phoneHref },
  { label: 'E-Mail', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
] as const

export function KontaktInfo() {
  return (
    <aside className="flex flex-col gap-8 rounded-[var(--radius-card)] border border-ink-line bg-ink p-[clamp(1.75rem,4vw,2.5rem)] text-text-on-ink">
      <div className="flex flex-col gap-3">
        <span className="inline-flex w-fit items-center rounded-[var(--radius-pill)] border border-ink-line bg-ink-soft px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-lavender-soft">
          Direkter Draht
        </span>
        <h3 className="font-display text-[clamp(1.5rem,2.6vw,1.875rem)] leading-[1.25] text-text-on-ink">
          Lieber gleich persönlich sprechen?
        </h3>
        <p className="text-[0.9375rem] leading-[1.65] text-text-on-ink-muted">
          Rufen Sie an oder schreiben Sie direkt — Sie erreichen mich persönlich, ohne Callcenter und ohne Warteschleife.
        </p>
      </div>

      <dl className="flex flex-col gap-5 border-t border-ink-line pt-7">
        {ROWS.map((row) => (
          <div key={row.label} className="flex flex-col gap-1">
            <dt className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-text-on-ink-muted">
              {row.label}
            </dt>
            <dd className="whitespace-pre-line text-[1.0625rem] leading-[1.5] text-text-on-ink">
              {'href' in row ? (
                <a href={row.href} className="transition-colors duration-200 hover:text-lavender-soft">
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <p className="border-t border-ink-line pt-6 text-[0.875rem] leading-[1.6] text-text-on-ink-muted">
        {CONTACT.ceo} · Inhaber &amp; Ansprechpartner
      </p>
    </aside>
  )
}
