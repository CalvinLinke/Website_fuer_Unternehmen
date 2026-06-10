'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { PerformanceReadout } from '@/components/PerformanceReadout'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'

const EASE = [0.16, 1, 0.3, 1] as const

type Decision = {
  number: string
  span: string
  statement: string
  detail: string
  artefact?: 'performance' | 'slider'
}

const DECISIONS: Decision[] = [
  {
    number: '01',
    span: 'lg:col-span-7',
    statement: 'Diese Seite ist mit Next.js gebaut, kein Page-Builder, kein Plugin-Stack.',
    detail: 'Code statt Baukasten heißt: ein Update an Inhalten ändert nichts an der Geschwindigkeit.',
    artefact: 'performance',
  },
  {
    number: '02',
    span: 'lg:col-span-5',
    statement: 'Der Preis steht fest, bevor irgendetwas beginnt, nicht danach.',
    detail: 'Abgerechnet wird das Projekt, nicht die Stunde.',
  },
  {
    number: '03',
    span: 'lg:col-span-5',
    statement: 'Jedes Projekt beginnt mit einer Analyse des bestehenden Auftritts, nicht mit einer Vorlage.',
    detail: 'Was an der aktuellen Seite funktioniert, bleibt erhalten. Der Rest wird neu gedacht.',
  },
  {
    number: '04',
    span: 'lg:col-span-7',
    statement: 'Weniger Elemente, mehr Wirkung: Der Unterschied zeigt sich oft erst im direkten Vergleich.',
    detail: 'Bewegen Sie den Regler.',
    artefact: 'slider',
  },
  {
    number: '05',
    span: 'lg:col-span-4',
    statement: '2 bis 4 Wochen von Erstgespräch bis Launch, der Rahmen steht vorher fest.',
    detail: 'Die Analyse am Anfang erspart die Korrekturschleifen, die andere Projekte verzögern.',
  },
  {
    number: '06',
    span: 'lg:col-span-4',
    statement: 'Eine Person verantwortet Analyse, Design und Code, von Anfang bis Ende.',
    detail: 'Keine Übergabe zwischen Abteilungen, bei der unterwegs Informationen verloren gehen.',
  },
  {
    number: '07',
    span: 'lg:col-span-4',
    statement: 'Neue Inhalte und Funktionen lassen sich ergänzen, ohne von vorn zu beginnen.',
    detail: 'Die Struktur ist von Beginn an auf Erweiterung ausgelegt.',
  },
]

export function Entscheidungen() {
  return (
    <section className="relative bg-cream-deep py-[clamp(5rem,10vw,9rem)]">
      <Container>
        <SectionHeading
          eyebrow="Arbeitsweise"
          title="Sieben Festlegungen für jedes Projekt"
          description="Unabhängig davon, wie groß ein Projekt ist oder wie es beginnt, diese sieben Punkte gelten von Anfang an."
          className="max-w-[48ch]"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {DECISIONS.map((item, index) => {
            const isArtefact = Boolean(item.artefact)
            const delay = index * 0.08 + (isArtefact ? 0.08 : 0)

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay, ease: EASE }}
                whileHover={{ y: -4 }}
                className={`group relative rounded-[var(--radius-card)] border border-line bg-cream p-[clamp(1.5rem,3vw,2.25rem)] transition-[border-color] duration-[250ms] ease-out ${item.span}`}
              >
                <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-grid transition-colors duration-300 group-hover:border-violet/35" />
                <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-grid transition-colors duration-300 group-hover:border-violet/35" />

                <span className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-violet/35">
                  {item.number}
                </span>
                <p className="font-display mt-4 text-[clamp(1.0625rem,1.6vw,1.375rem)] leading-[1.35] text-text">
                  {item.statement}
                </p>
                <p className="mt-3 text-[0.875rem] leading-[1.6] text-text-muted">{item.detail}</p>

                {item.artefact === 'performance' ? <PerformanceReadout /> : null}
                {item.artefact === 'slider' ? <BeforeAfterSlider /> : null}
              </motion.div>
            )
          })}
        </div>

        {/* Maßlinie 60/40 */}
        <div aria-hidden className="relative mt-10 hidden h-px lg:block">
          <div className="absolute inset-0 bg-grid" />
          <span
            className="absolute -top-1 h-2 w-px bg-grid"
            style={{ left: `${(7 / 12) * 100}%` }}
          />
          <span
            className="absolute top-2 -translate-x-1/2 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-violet/40"
            style={{ left: `${(7 / 12) * 100}%` }}
          >
            60 / 40
          </span>
        </div>
      </Container>
    </section>
  )
}
