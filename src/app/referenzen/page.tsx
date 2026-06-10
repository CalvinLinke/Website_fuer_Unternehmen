import type { Metadata } from 'next'
import { ReferenzenIntro } from '@/sections/ReferenzenIntro'
import { ReferenzenGrid } from '@/sections/ReferenzenGrid'
import { ReferenzenCTA } from '@/sections/ReferenzenCTA'

const description =
  'Anonymisierte Branchen-Beispiele aus echten Projekten: typische Ausgangslagen, Herausforderungen und Ergebnisse, vom Handwerksbetrieb bis zum inhabergeführten Fachgeschäft.'

export const metadata: Metadata = {
  title: 'Referenzen',
  description,
  alternates: { canonical: '/referenzen' },
  openGraph: {
    title: 'Referenzen · Website für Unternehmen',
    description,
    url: '/referenzen',
  },
}

export default function ReferenzenPage() {
  return (
    <>
      <ReferenzenIntro />
      <ReferenzenGrid />
      <ReferenzenCTA />
    </>
  )
}
