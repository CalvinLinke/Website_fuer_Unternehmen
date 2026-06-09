'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { CTA } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

const SPEC = [
  { label: 'Laufzeit', value: '2–4 Wochen' },
  { label: 'Abrechnung', value: 'Festpreis' },
  { label: 'Ansprechpartner', value: '1 Person' },
] as const

const SPEC_LINES = [
  { prefix: '├─', text: 'Festpreis nach dem Erstgespräch — abgerechnet wird das Projekt, nicht die Stunde' },
  { prefix: '├─', text: 'Die Analyse am Anfang erspart teure Korrekturschleifen am Ende' },
  { prefix: '└─', text: 'Ein Betrag für das gesamte Projekt, keine versteckten Folgekosten' },
] as const

export function Preisvorteil() {
  return (
    <section className="relative bg-ink py-[clamp(5rem,10vw,9rem)]">
      <Container>
        {/* Mono-Label */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
          aria-hidden
          className="block select-none font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-lavender/30"
        >
          Projekt-Spezifikation
        </motion.span>

        {/* Zentrales Glas-Panel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="relative mx-auto mt-6 max-w-[52rem] rounded-[var(--radius-card)] card-glass"
        >
          {/* Eckmarken — größer als bei Cards */}
          <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-lavender/50" />
          <span aria-hidden className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-lavender/50" />
          <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-lavender/50" />
          <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-lavender/50" />

          {/* Akzentlinie oben */}
          <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-lavender/50 to-transparent" />

          <div className="p-[clamp(2rem,5vw,4rem)]">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="font-display text-center text-[clamp(1.875rem,4.5vw,3rem)] leading-[1.15] text-text-on-ink"
            >
              Den Preis kennen Sie,<br className="hidden sm:block" /> bevor irgendetwas beginnt.
            </motion.h2>

            {/* Spec-Bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
              className="mt-8 grid grid-cols-3 border border-lavender/20"
            >
              {SPEC.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-5 py-4 text-center ${index < SPEC.length - 1 ? 'border-r border-lavender/20' : ''}`}
                >
                  <span className="font-mono block text-[0.5rem] uppercase tracking-[0.18em] text-lavender/40">
                    {item.label}
                  </span>
                  <p className="font-display mt-2 text-[1.25rem] leading-none text-text-on-ink">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Beschreibungstext */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
              className="mx-auto mt-8 max-w-[52ch] text-center text-[1.0625rem] leading-[1.65] text-text-on-ink-muted"
            >
              Was wird das kosten? Diese Frage ist berechtigt — deshalb steht der Betrag fest,
              sobald die Analyse abgeschlossen ist. Nicht als grobe Spanne, sondern als ein Preis
              für das gesamte Projekt.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.52, ease: EASE }}
              className="mt-8 flex justify-center"
            >
              <Button href={CTA.href} variant="onDark">
                {CTA.label}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Spec-Lines */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          className="mx-auto mt-8 max-w-[52rem] flex flex-col gap-3"
        >
          {SPEC_LINES.map((line) => (
            <li key={line.text} className="flex items-start gap-3">
              <span aria-hidden className="shrink-0 font-mono text-[0.75rem] text-violet/40">
                {line.prefix}
              </span>
              <p className="text-[0.875rem] leading-[1.6] text-text-on-ink-muted">{line.text}</p>
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
