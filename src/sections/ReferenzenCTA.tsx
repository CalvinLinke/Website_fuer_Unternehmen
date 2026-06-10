'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { StatBadge } from '@/components/StatBadge'
import { CTA, SOCIAL_PROOF } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

export function ReferenzenCTA() {
  return (
    <section className="relative bg-ink py-[clamp(2.5rem,5vw,4rem)] text-text-on-ink backdrop-blur-sm">
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto flex max-w-[42rem] flex-col items-center gap-7 text-center"
        >
          <StatBadge value={SOCIAL_PROOF.value} label={SOCIAL_PROOF.label} surface="onDark" />
          <h2 className="font-display text-[clamp(2rem,4.6vw,3rem)] leading-[1.15] text-text-on-ink">
            Vielleicht ist Ihr Betrieb das nächste Beispiel auf dieser Seite, anonymisiert oder, wenn Sie möchten, mit Namen.
          </h2>
          <p className="max-w-[48ch] text-[1.0625rem] leading-[1.65] text-text-on-ink-muted">
            Im ersten Gespräch geht es nicht um Verkauf, sondern darum, ob und wie ich Ihnen konkret weiterhelfen kann, auf Augenhöhe und ohne Druck.
          </p>
          <Button href={CTA.href} variant="onDark" size="md">
            {CTA.label}
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
