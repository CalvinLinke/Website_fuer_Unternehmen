'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/Container'
import { StatBadge } from '@/components/StatBadge'
import { SOCIAL_PROOF } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

export function KontaktIntro() {
  return (
    <section className="bg-transparent pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(7.5rem,15vw,11rem)]">
      <Container>
        <div className="flex flex-col gap-10 border-b border-line pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-[36rem]"
          >
            <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-violet">
              Kontakt
            </span>
            <h1 className="font-display mt-4 text-[clamp(2.25rem,5.5vw,3.5rem)] leading-[1.12] text-text">
              Lassen Sie uns über Ihren Webauftritt sprechen.
            </h1>
            <p className="mt-6 max-w-[50ch] text-[1.0625rem] leading-[1.7] text-text-muted">
              Kein Verkaufsgespräch, kein Fachchinesisch — einfach ein offener Austausch darüber, wo Ihr Betrieb heute steht und ob ich Sie auf dem Weg zu einer Website, die wirklich für Sie arbeitet, unterstützen kann.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
          >
            <StatBadge value={SOCIAL_PROOF.value} label={SOCIAL_PROOF.label} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
