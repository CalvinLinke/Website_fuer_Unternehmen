'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

const EASE = [0.16, 1, 0.3, 1] as const

const STATS = [
  { value: '2–4', unit: ' Wo.', label: 'Von Erstgespräch bis Launch' },
  { value: '30+', unit: '', label: 'Zufriedene Kunden' },
  { value: '1', unit: '', label: 'Ansprechpartner für alles' },
  { value: 'Fest', unit: 'preis', label: 'Bekannt vor Projektstart' },
] as const

const DIFFERENTIATORS = [
  'Analyse, Design und Code liegen in einer Hand — nichts wird zwischen Gewerken weitergereicht, bei denen unterwegs Informationen verloren gehen.',
  'Festpreis nach dem Erstgespräch — keine Stundenabrechnung, keine Nachschläge, kein Preis, der sich während des Projekts verändert.',
  '2–4 Wochen bis Launch, weil die Analyse am Anfang genau die Korrekturschleifen einspart, die andere Projekte in die Länge ziehen.',
] as const

export function Loesung() {
  return (
    <section className="relative bg-cream-deep/80 py-[clamp(4rem,9vw,7rem)]">
      <Container>
        <SectionHeading
          eyebrow="Der Ansatz"
          title="Warum das funktioniert — und warum es schneller geht, als Sie erwarten."
          align="center"
          className="max-w-[38ch]"
        />

        {/* Kennzahlen */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: EASE }}
              className="group relative rounded-[var(--radius-card)] card-glass p-[clamp(1.25rem,3vw,1.75rem)]"
            >
              <span aria-hidden className="pointer-events-none absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-lavender/25 transition-colors duration-300 group-hover:border-lavender/55" />
              <span aria-hidden className="pointer-events-none absolute right-2 top-2 h-2.5 w-2.5 border-r border-t border-lavender/25 transition-colors duration-300 group-hover:border-lavender/55" />
              <p className="font-display text-[clamp(1.875rem,3.5vw,2.5rem)] leading-none text-violet">
                {stat.value}<span className="text-lavender">{stat.unit}</span>
              </p>
              <p className="mt-3 font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Differenzierung */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="mt-10 border-t border-line pt-10"
        >
          <span className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-violet/50">
            Was hier konkret anders ist
          </span>
          <ul className="mt-6 grid gap-5 lg:grid-cols-3 lg:gap-8">
            {DIFFERENTIATORS.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span aria-hidden className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" />
                <p className="text-[0.9375rem] leading-[1.65] text-text-muted">{point}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  )
}
