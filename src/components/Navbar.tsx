'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'motion/react'
import { Container } from './Container'
import { Logo } from './Logo'
import { Button } from './Button'
import { NAV_LINKS, CTA } from '@/lib/constants'

const EASE = [0.4, 0, 0.2, 1] as const

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 80)
    if (latest > 80) setIsMenuOpen(false)
  })

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[4.5rem] border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled
          ? 'border-line bg-cream/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-full items-center justify-between">
        <div className={`transition-opacity duration-300 ${isScrolled || pathname !== '/' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Logo variant="compact" priority />
        </div>

        <nav
          aria-label="Hauptnavigation"
          onMouseLeave={() => setHovered(null)}
          className="relative hidden items-center gap-1 p-1.5 xl:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            const isHighlighted = hovered ? hovered === link.href : isActive

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                onMouseEnter={() => setHovered(link.href)}
                className="relative px-5 py-2.5 text-[0.9375rem] font-semibold text-violet transition-colors duration-300"
              >
                {isHighlighted && (
                  <motion.span
                    layoutId="nav-highlight"
                    className="absolute inset-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  >
                    <span aria-hidden className="absolute left-0 top-0 h-3 w-3 border-l-[1.5px] border-t-[1.5px] border-lavender/60" />
                    <span aria-hidden className="absolute right-0 top-0 h-3 w-3 border-r-[1.5px] border-t-[1.5px] border-lavender/60" />
                    <span aria-hidden className="absolute bottom-0 left-0 h-3 w-3 border-b-[1.5px] border-l-[1.5px] border-lavender/60" />
                    <span aria-hidden className="absolute bottom-0 right-0 h-3 w-3 border-b-[1.5px] border-r-[1.5px] border-lavender/60" />
                  </motion.span>
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="hidden xl:block">
          <Button href={CTA.href} size="sm">
            {CTA.label}
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-sm border border-line bg-cream/70 xl:hidden"
        >
          <motion.span
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6.5 : 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="h-[1.5px] w-5 bg-text"
          />
          <motion.span
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.15 }}
            className="h-[1.5px] w-5 bg-text"
          />
          <motion.span
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6.5 : 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="h-[1.5px] w-5 bg-text"
          />
        </button>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="border-t border-line bg-cream/95 backdrop-blur-md xl:hidden"
          >
            <Container as="nav" aria-label="Mobile Navigation" className="flex flex-col py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={`border-l-2 px-4 py-3 text-base font-medium text-text transition-colors duration-200 ${
                    pathname === link.href
                      ? 'border-violet text-violet'
                      : 'border-transparent hover:border-lavender hover:bg-lavender-mist/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pl-4">
                <Button href={CTA.href} onClick={() => setIsMenuOpen(false)}>
                  {CTA.label}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
