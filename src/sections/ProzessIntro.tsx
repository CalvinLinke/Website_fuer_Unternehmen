'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/Container'
import { PROCESS_STEPS } from '@/lib/content/process'

const EASE = [0.16, 1, 0.3, 1] as const

export function ProzessIntro() {
  return (
    <section className="relative bg-transparent pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(7.5rem,15vw,11rem)]">
      <Container className="relative">
        <div className="mx-auto max-w-[42rem] text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-violet"
          >
            Ablauf · {PROCESS_STEPS.length} Schritte
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
            className="font-display mx-auto mt-4 max-w-[24ch] text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.1] text-text"
          >
            Vom ersten Gespräch bis zur Website, die online geht
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className="mx-auto mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-text-muted"
          >
            Kein Geheimnis, kein Blackbox-Prozess: Hier sehen Sie genau, was in welcher Phase passiert, wie viel Zeit realistisch einzuplanen ist — und an welchen Stellen Sie eingebunden werden, ohne dass daraus ein Vollzeitjob neben Ihrem eigentlichen Geschäft wird.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
