export const SITE = {
  name: 'Website für Unternehmen',
  domain: 'website-fuer-unternehmen.com',
  url: 'https://website-fuer-unternehmen.com',
  slogan: 'Digitale Präsenz, die Kompetenz sichtbar macht',
} as const

export const CONTACT = {
  email: 'info@website-fuer-unternehmen.com',
  phone: '0162 1766880',
  phoneHref: 'tel:+4901621766880',
  address: {
    street: 'Grüne Straße 13b',
    zipCity: '01067 Dresden',
  },
  ceo: 'Calvin Linke',
} as const

export const NAV_LINKS = [
  { label: 'Startseite', href: '/' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Prozess', href: '/prozess' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Kontakt', href: '/kontakt' },
] as const

export const LEGAL_LINKS = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
] as const

export const CTA = {
  label: 'Webauftritt unverbindlich besprechen',
  href: '/kontakt',
} as const

export const SOCIAL_PROOF = {
  value: '30+',
  label: 'zufriedene Kunden, unzählige Empfehlungen',
} as const
