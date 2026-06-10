'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/Container'

const EASE = [0.16, 1, 0.3, 1] as const

export function LeistungenHero() {
  return (
    <section className="relative bg-transparent pb-[clamp(3.5rem,7vw,5.5rem)] pt-[clamp(7.5rem,15vw,11rem)]">
      <Container className="relative">
        <div className="max-w-[46rem]">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-violet"
          >
            Leistungen
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
            className="font-display mt-4 text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.08] text-text"
          >
            Drei Leistungen, jede für sich, alle aufeinander abgestimmt.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className="mt-6 max-w-[54ch] text-[1.0625rem] leading-[1.7] text-text-muted"
          >
            Was sich von Auftrag zu Auftrag unterscheidet, ist nicht die Reihenfolge, sondern das, was am Ende für Ihren Betrieb dabei herauskommt.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
