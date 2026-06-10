'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { CTA } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

const BULLETS = [
  'Fertig in 2–4 Wochen — ohne technischen Aufwand Ihrerseits',
  'Festpreis nach dem Erstgespräch — keine versteckten Kosten',
  'Auf Ihren Betrieb zugeschnitten — kein Baukastensystem',
] as const

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      {/* Vollflächiges Hintergrundvideo */}
      <video
        src="/Heroloop.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient-Overlay für Lesbarkeit */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/30" />

      {/* Bauplan-Rahmen: Hairlines + Eckmarken */}
      <span aria-hidden className="pointer-events-none absolute inset-x-[clamp(1.25rem,5vw,3rem)] top-[11vh] h-px bg-grid" />
      <span aria-hidden className="pointer-events-none absolute inset-x-[clamp(1.25rem,5vw,3rem)] bottom-[14vh] h-px bg-grid" />
      <span aria-hidden className="pointer-events-none absolute left-[clamp(1.25rem,5vw,3rem)] top-[11vh] h-4 w-4 border-l border-t border-grid" />
      <span aria-hidden className="pointer-events-none absolute right-[clamp(1.25rem,5vw,3rem)] top-[11vh] h-4 w-4 border-r border-t border-grid" />
      <span aria-hidden className="pointer-events-none absolute left-[clamp(1.25rem,5vw,3rem)] bottom-[14vh] h-4 w-4 border-l border-b border-grid" />
      <span aria-hidden className="pointer-events-none absolute right-[clamp(1.25rem,5vw,3rem)] bottom-[14vh] h-4 w-4 border-r border-b border-grid" />

      <Container className="relative z-10">
        {/* Mono-Seitenidentifikator */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE }}
          aria-hidden
          className="mb-4 block select-none font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-lavender/40"
        >
          01 — Startseite
        </motion.span>

        {/* Glass-Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="relative max-w-[38rem] overflow-hidden rounded-[var(--radius-card)] border border-lavender/20"
        >
          {/* Bauplan-Eckmarken außen an der Card */}
          <span aria-hidden className="pointer-events-none absolute left-0 top-0 z-20 h-5 w-5 border-l border-t border-lavender/50" />
          <span aria-hidden className="pointer-events-none absolute right-0 top-0 z-20 h-5 w-5 border-r border-t border-lavender/50" />
          <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 z-20 h-5 w-5 border-b border-l border-lavender/50" />
          <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 z-20 h-5 w-5 border-b border-r border-lavender/50" />

          {/* Lavendel-Akzentlinie oben */}
          <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-lavender/60 to-transparent" />

          {/* Glas-Körper */}
          <div className="bg-ink/80 px-[clamp(1.75rem,5vw,3rem)] pb-[clamp(1.75rem,4vw,2.5rem)] pt-[clamp(1.5rem,3.5vw,2rem)]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            >
              <Logo variant="hero" priority />
            </motion.div>

            <p className="mt-4 font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-lavender/45">
              Für Unternehmen ohne — oder mit veralteter — Website
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
              className="font-display mt-3 text-[clamp(1.625rem,3.2vw,2.375rem)] leading-[1.18] text-text-on-ink"
            >
              Digitale Präsenz,<br className="hidden sm:block" /> die Kompetenz sichtbar macht.
            </motion.h1>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.56, ease: EASE }}
              className="mt-5 flex flex-col gap-3"
            >
              {BULLETS.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-[0.9375rem] leading-[1.55] text-text-on-ink"
                >
                  <span aria-hidden className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" />
                  {bullet}
                </li>
              ))}
            </motion.ul>

          </div>

          {/* CTA-Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-lavender/20 bg-ink/90 px-[clamp(1.75rem,5vw,3rem)] py-4"
          >
            <Button href={CTA.href} size="sm" variant="onDark">
              {CTA.label}
            </Button>
            <p className="text-[0.875rem] leading-[1.5] text-text-on-ink-muted">
              Im Erstgespräch klären wir, ob es passt — unverbindlich, ohne Verkaufsdruck.
            </p>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll-Indikator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        aria-hidden
        className="absolute inset-x-0 bottom-10 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-11 w-7 items-start justify-center rounded-full border border-lavender/30 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-lavender/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
