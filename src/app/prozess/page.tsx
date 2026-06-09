import type { Metadata } from 'next'
import { ProzessIntro } from '@/sections/ProzessIntro'
import { ProzessTimeline } from '@/sections/ProzessTimeline'
import { ProzessFAQ } from '@/sections/ProzessFAQ'

const description =
  'Erstgespräch, IST-Analyse, Design, Umsetzung, Launch & Betreuung: der Ablauf einer Website-Erstellung in fünf Schritten — transparent erklärt, inklusive Antworten auf die häufigsten Fragen.'

export const metadata: Metadata = {
  title: 'Prozess',
  description,
  alternates: { canonical: '/prozess' },
  openGraph: {
    title: 'Prozess — Website für Unternehmen',
    description,
    url: '/prozess',
  },
}

export default function ProzessPage() {
  return (
    <>
      <ProzessIntro />
      <ProzessTimeline />
      <ProzessFAQ />
    </>
  )
}
