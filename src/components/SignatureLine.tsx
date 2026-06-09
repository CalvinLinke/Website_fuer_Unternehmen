'use client'

import { useRef, useId } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

// Triple-parallel W curve — abstracted from the logo's ribbon motif (triple-line ribbon w/ rounded terminals)
// ViewBox 300 × 44; center line at y=34, outer lines ±5px
const W_PATHS = [
  'M 0 29 C 30 29, 55 5, 75 5 C 95 5, 120 29, 150 29 C 180 29, 205 5, 225 5 C 245 5, 270 29, 300 29',
  'M 0 34 C 30 34, 55 10, 75 10 C 95 10, 120 34, 150 34 C 180 34, 205 10, 225 10 C 245 10, 270 34, 300 34',
  'M 0 39 C 30 39, 55 15, 75 15 C 95 15, 120 39, 150 39 C 180 39, 205 15, 225 15 C 245 15, 270 39, 300 39',
] as const

const STROKE_WIDTHS = [1, 1.5, 1] as const
const EASE = [0.16, 1, 0.3, 1] as const

type SignatureLineProps = {
  className?: string
  width?: number
  /** scroll: driven by scroll position · view: whileInView one-shot · animate: time-based (Hero entrance) */
  mode?: 'scroll' | 'view' | 'animate'
  animateDelay?: number
}

export function SignatureLine({
  className = '',
  width = 300,
  mode = 'scroll',
  animateDelay = 0,
}: SignatureLineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const uid = useId().replace(/:/g, '')
  const gradId = `wGrad-${uid}`
  const height = Math.round(width * (44 / 300))

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.35'],
  })
  const scrollPathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={containerRef} className={className} style={{ width, height }}>
      <svg width={width} height={height} viewBox="0 0 300 44" fill="none" aria-hidden>
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-violet)" />
            <stop offset="100%" stopColor="var(--color-lavender)" />
          </linearGradient>
        </defs>

        {mode === 'scroll' &&
          W_PATHS.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke={`url(#${gradId})`}
              strokeWidth={STROKE_WIDTHS[i]}
              strokeLinecap="round"
              style={{ pathLength: scrollPathLength }}
            />
          ))}

        {mode === 'view' &&
          W_PATHS.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke={`url(#${gradId})`}
              strokeWidth={STROKE_WIDTHS[i]}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.4, ease: EASE, delay: i * 0.08 }}
            />
          ))}

        {mode === 'animate' &&
          W_PATHS.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke={`url(#${gradId})`}
              strokeWidth={STROKE_WIDTHS[i]}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: EASE, delay: animateDelay + i * 0.08 }}
            />
          ))}
      </svg>
    </div>
  )
}
