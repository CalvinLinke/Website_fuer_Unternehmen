'use client'

import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'

const BENEFITS = [
  {
    metric: '< 2 Sek.',
    description:
      'Ladezeit auf dem Smartphone, typischerweise — entscheidend, wenn die Konkurrenz nur einen Klick weiter wartet.',
  },
  {
    metric: 'Erweiterbar',
    description:
      'Neue Seiten, Funktionen oder Sprachversionen lassen sich ergänzen, ohne die Website neu aufzubauen.',
  },
  {
    metric: 'Sichtbar',
    description:
      'Technisch von Beginn an auf Suchmaschinen ausgelegt — nicht als nachträgliche Korrektur am fertigen Ergebnis.',
  },
]

export function Technologie() {
  return (
    <section className="relative bg-ink py-[clamp(4.5rem,9vw,7.5rem)] text-text-on-ink backdrop-blur-sm">
      <Container className="relative">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Technologie"
          title="Neue Technik, die für Sie arbeitet — nicht gegen Sie"
          description="Eine Website ist kein Plakat, das einmal gedruckt wird und so bleibt. Sie soll mitwachsen, schnell bleiben und sich finden lassen — auch noch in drei Jahren. Deshalb wähle ich die technische Basis bewusst aus, nicht nach aktuellem Trend."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {BENEFITS.map((item) => (
            <div key={item.metric} className="border-t border-ink-line pt-6">
              <span className="font-display text-[1.75rem] leading-none text-lavender-soft">{item.metric}</span>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-text-on-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
