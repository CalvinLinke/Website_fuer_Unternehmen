'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1] as const

export function PerformanceReadout() {
  const [seconds, setSeconds] = useState<number | null>(null)

  useEffect(() => {
    const measure = () => {
      const [entry] = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
      const duration = entry ? entry.duration : performance.now()
      setSeconds(duration / 1000)
    }

    let timer: ReturnType<typeof setTimeout>
    if (document.readyState === 'complete') {
      timer = setTimeout(measure, 500)
    } else {
      const onLoad = () => {
        timer = setTimeout(measure, 500)
      }
      window.addEventListener('load', onLoad, { once: true })
      return () => window.removeEventListener('load', onLoad)
    }
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="mt-6 rounded-[var(--radius-card)] border border-ink-line bg-ink/60 px-4 py-3">
      <span className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-lavender/40">
        Live-Messung · diese Seite, jetzt geladen
      </span>
      <div className="mt-2 min-h-[2.25rem]">
        <AnimatePresence mode="wait">
          {seconds === null ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              className="font-mono text-[1rem] text-lavender-soft"
            >
              Messung läuft …
            </motion.span>
          ) : (
            <motion.span
              key="value"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="font-display text-[1.75rem] leading-none text-lavender-soft"
            >
              {seconds.toFixed(2)}
              <span className="font-mono text-[0.875rem] text-text-on-ink-muted"> s Ladezeit</span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
