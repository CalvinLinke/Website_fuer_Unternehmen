import type { Metadata } from 'next'
import { KontaktIntro } from '@/sections/KontaktIntro'
import { KontaktFormSection } from '@/sections/KontaktFormSection'

const description =
  'Webauftritt unverbindlich besprechen: Schreiben Sie über das Kontaktformular oder greifen Sie direkt zum Telefon — Sie erreichen Calvin Linke persönlich, ohne Umwege.'

export const metadata: Metadata = {
  title: 'Kontakt',
  description,
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt — Website für Unternehmen',
    description,
    url: '/kontakt',
  },
}

export default function KontaktPage() {
  return (
    <>
      <KontaktIntro />
      <KontaktFormSection />
    </>
  )
}
