import type { Metadata } from 'next'
import { LeistungenHero } from '@/sections/LeistungenHero'
import { LeistungenGrid } from '@/sections/LeistungenGrid'
import { LeistungenProcess } from '@/sections/LeistungenProcess'

const description =
  'Strategie & Analyse, Design & Umsetzung, Relaunch & Weiterentwicklung: die drei Leistungsbausteine für eine Unternehmenswebsite, die zu Ihrem Betrieb passt, im Detail erklärt.'

export const metadata: Metadata = {
  title: 'Leistungen',
  description,
  alternates: { canonical: '/leistungen' },
  openGraph: {
    title: 'Leistungen · Website für Unternehmen',
    description,
    url: '/leistungen',
  },
}

export default function LeistungenPage() {
  return (
    <>
      <LeistungenHero />
      <LeistungenGrid />
      <LeistungenProcess />
    </>
  )
}
