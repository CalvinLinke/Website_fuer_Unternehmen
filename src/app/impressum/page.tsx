import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { PlatzhalterHinweis } from '@/components/PlatzhalterHinweis'
import { CONTACT, SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Angaben gemäß § 5 DDG sowie Kontaktdaten und Verantwortlichkeiten von Website für Unternehmen.',
  alternates: { canonical: '/impressum' },
  robots: { index: false, follow: true },
}

const SECTIONS = [
  {
    heading: 'EU-Streitschlichtung',
    body: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter https://ec.europa.eu/consumers/odr/ finden. Unsere E-Mail-Adresse für Verbraucheranliegen finden Sie oben in den Kontaktangaben.',
  },
  {
    heading: 'Verbraucherstreitbeilegung / Universalschlichtungsstelle',
    body: 'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
  },
  {
    heading: 'Haftung für Inhalte',
    body: 'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
  },
  {
    heading: 'Haftung für Links',
    body: 'Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
  },
  {
    heading: 'Urheberrecht',
    body: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.',
  },
] as const

export default function ImpressumPage() {
  return (
    <section className="bg-cream pb-[clamp(5rem,10vw,8rem)] pt-[clamp(7.5rem,15vw,11rem)]">
      <Container>
        <div className="mx-auto flex max-w-[44rem] flex-col gap-10">
          <div>
            <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-violet">
              Rechtliches
            </span>
            <h1 className="font-display mt-4 text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.15] text-text">
              Impressum
            </h1>
          </div>

          <PlatzhalterHinweis />

          <div className="flex flex-col gap-3">
            <h2 className="font-display text-[1.25rem] leading-[1.3] text-text">
              Angaben gemäß § 5 DDG
            </h2>
            <div className="text-[1rem] leading-[1.75] text-text-muted">
              <p>{SITE.name}</p>
              <p>{CONTACT.ceo}</p>
              <p>{CONTACT.address.street}</p>
              <p>{CONTACT.address.zipCity}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-display text-[1.25rem] leading-[1.3] text-text">Kontakt</h2>
            <div className="text-[1rem] leading-[1.75] text-text-muted">
              <p>Telefon: {CONTACT.phone}</p>
              <p>E-Mail: {CONTACT.email}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-display text-[1.25rem] leading-[1.3] text-text">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <div className="text-[1rem] leading-[1.75] text-text-muted">
              <p>{CONTACT.ceo}</p>
              <p>{CONTACT.address.street}</p>
              <p>{CONTACT.address.zipCity}</p>
            </div>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h2 className="font-display text-[1.25rem] leading-[1.3] text-text">{section.heading}</h2>
              <p className="text-[1rem] leading-[1.75] text-text-muted">{section.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
