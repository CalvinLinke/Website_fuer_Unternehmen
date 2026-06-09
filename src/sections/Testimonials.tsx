'use client'

import { motion } from 'motion/react'
import { SectionHeading } from '@/components/SectionHeading'
import { TestimonialCard } from '@/components/TestimonialCard'
import { StatBadge } from '@/components/StatBadge'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TESTIMONIALS } from '@/lib/content/references'
import { CTA, SOCIAL_PROOF } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

export function Testimonials() {
  return (
    <section className="relative bg-transparent py-[clamp(4.5rem,9vw,7.5rem)]">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeading
            align="center"
            eyebrow="Rückmeldungen"
            title="Anonymisiert — aus gutem Grund offen gelegt"
            description="Die meisten Unternehmen, mit denen ich arbeite, möchten ihren Web-Partner nicht öffentlich nennen. Was bleibt, sind Muster aus echten Rückmeldungen — hier rollenbasiert wiedergegeben, statt mit erfundenen Namen versehen."
          />
          <div className="mt-6">
            <StatBadge value={SOCIAL_PROOF.value} label={SOCIAL_PROOF.label} />
          </div>
        </div>
      </Container>

      {/* Marquee — vollflächig außerhalb des Containers */}
      <div className="group relative mt-14 overflow-hidden">
        {/* Fade-Edges links/rechts */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#eee8fc] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f5f0ff] to-transparent" />

        <div className="animate-marquee group-hover:[animation-play-state:paused] flex w-max gap-6 px-6">
          {/* Doppelt für nahtlosen Loop */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
            <div key={index} className="w-[clamp(20rem,32vw,26rem)] shrink-0">
              <TestimonialCard
                testimonial={testimonial}
                index={index % TESTIMONIALS.length}
                staticDisplay
              />
            </div>
          ))}
        </div>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-16 flex flex-col items-start gap-6 rounded-[var(--radius-card)] border border-line bg-cream/70 p-[clamp(1.75rem,4vw,2.75rem)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-[44ch] text-[1.125rem] leading-[1.6] text-text">
            Wenn Sie sich in einem dieser Sätze wiedererkennen, lassen Sie uns über Ihren Onlineauftritt sprechen — unverbindlich, auf Augenhöhe, ohne Verkaufsdruck.
          </p>
          <Button href={CTA.href} size="md" className="shrink-0">
            {CTA.label}
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
