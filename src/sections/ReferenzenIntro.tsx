'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/Container'

const EASE = [0.16, 1, 0.3, 1] as const

export function ReferenzenIntro() {
  return (
    <section className="relative bg-transparent pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(5rem,10vw,7rem)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-violet"
            >
              Referenzen
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              className="font-display mt-4 max-w-[20ch] text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.1] text-text"
            >
              Anonym, aber aus echten Projekten
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="rounded-[var(--radius-card)] border border-line bg-cream-deep p-[clamp(1.5rem,3.5vw,2.25rem)]"
          >
            <p className="text-[1rem] leading-[1.7] text-text">
              Die meisten Unternehmen, mit denen ich arbeite, möchten ihren Web-Partner nicht öffentlich nennen: Wettbewerb, interne Abstimmungen, schlicht Diskretion. Was bleibt, sind ehrliche Muster aus echten Projekten, hier als Branchen-Archetypen wiedergegeben, mit den Ausgangslagen und Ergebnissen, die tatsächlich so vorkamen, nur ohne Namen, die ohnehin niemand bestätigen würde.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
