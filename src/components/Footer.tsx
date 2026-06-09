import Link from 'next/link'
import { Container } from './Container'
import { Logo } from './Logo'
import { NAV_LINKS, LEGAL_LINKS, CONTACT, SITE } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-cream-deep">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:gap-8 md:py-20">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-[0.9375rem] leading-[1.65] text-text-muted">{SITE.slogan}</p>
        </div>

        <nav aria-label="Sitemap" className="flex flex-col gap-3">
          <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
            Sitemap
          </span>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="w-fit text-[0.9375rem] text-text transition-colors duration-200 hover:text-violet"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/faq"
            className="w-fit text-[0.9375rem] text-text transition-colors duration-200 hover:text-violet"
          >
            Häufige Fragen
          </Link>
        </nav>

        <div className="flex flex-col gap-3">
          <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
            Kontakt
          </span>
          <address className="flex flex-col gap-2 text-[0.9375rem] not-italic leading-[1.65] text-text">
            <span>{CONTACT.address.street}</span>
            <span>{CONTACT.address.zipCity}</span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="w-fit transition-colors duration-200 hover:text-violet"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="w-fit transition-colors duration-200 hover:text-violet"
            >
              {CONTACT.phone}
            </a>
          </address>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-6 text-[0.8125rem] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {SITE.name} · Inh. {CONTACT.ceo}
          </span>
          <nav aria-label="Rechtliches" className="flex gap-5">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-violet"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  )
}
