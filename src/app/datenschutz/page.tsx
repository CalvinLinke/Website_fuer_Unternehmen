import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { PlatzhalterHinweis } from '@/components/PlatzhalterHinweis'
import { CONTACT, SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Website für Unternehmen: Verantwortlicher, Rechte betroffener Personen sowie Hinweise zu Hosting, Kontaktformular und Cookies.',
  alternates: { canonical: '/datenschutz' },
  robots: { index: false, follow: true },
}

const SECTIONS = [
  {
    heading: 'Ihre Rechte als betroffene Person',
    body: 'Sie haben jederzeit das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung (Art. 15 DSGVO). Ihnen stehen zudem ein Recht auf Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie ein Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO) zu. Wenden Sie sich hierfür gerne jederzeit formlos an die oben genannte Kontaktadresse. Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.',
  },
  {
    heading: 'Hosting und Server-Logfiles',
    body: 'Beim Aufruf dieser Website erfasst unser Hosting-Anbieter automatisch Informationen, die Ihr Browser übermittelt — etwa Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und gekürzte IP-Adresse. Diese Server-Logfiles werden nicht mit anderen Datenquellen zusammengeführt und dienen ausschließlich der Gewährleistung eines störungsfreien Betriebs sowie der Sicherheit unserer informationstechnischen Systeme (Art. 6 Abs. 1 lit. f DSGVO).',
  },
  {
    heading: 'Kontaktformular',
    body: 'Wenn Sie uns über das Kontaktformular eine Anfrage zukommen lassen, verarbeiten wir die von Ihnen angegebenen Daten — Name, E-Mail-Adresse und Nachricht — ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen. Die Übermittlung an uns erfolgt über den E-Mail-Versanddienstleister Resend; Ihre Angaben erreichen uns ausschließlich auf diesem Weg per E-Mail und werden nicht an Dritte weitergegeben. Rechtsgrundlage ist Ihre Einwilligung durch das Absenden des Formulars (Art. 6 Abs. 1 lit. a DSGVO) sowie unser berechtigtes Interesse an der Beantwortung eingehender Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Ein für Sie unsichtbares Formularfeld dient ausschließlich der Erkennung automatisierter Spam-Zusendungen; es wird nicht ausgewertet, solange Sie es — wie für menschliche Besucher:innen vorgesehen — leer lassen.',
  },
  {
    heading: 'Cookies und Tracking',
    body: 'Diese Website verzichtet bewusst auf Cookies zu Analyse-, Marketing- oder Tracking-Zwecken und bindet keine Drittanbieter-Tools ein, die Ihr Verhalten über mehrere Websites hinweg nachverfolgen. Es werden keine Nutzungsprofile erstellt.',
  },
  {
    heading: 'Speicherdauer',
    body: 'Personenbezogene Daten aus dem Kontaktformular werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Die genauen Löschfristen sind im Rahmen der rechtlichen Prüfung dieser Seite verbindlich festzulegen und an dieser Stelle zu ergänzen.',
  },
  {
    heading: 'Änderungen dieser Datenschutzerklärung',
    body: 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die jeweils aktuelle Fassung.',
  },
] as const

export default function DatenschutzPage() {
  return (
    <section className="bg-cream pb-[clamp(5rem,10vw,8rem)] pt-[clamp(7.5rem,15vw,11rem)]">
      <Container>
        <div className="mx-auto flex max-w-[44rem] flex-col gap-10">
          <div>
            <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-violet">
              Rechtliches
            </span>
            <h1 className="font-display mt-4 hyphens-auto break-words text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.15] text-text">
              Datenschutzerklärung
            </h1>
            <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-[1.7] text-text-muted">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie
              darüber, welche Daten beim Besuch dieser Website erfasst werden, wofür sie verwendet
              werden und welche Rechte Ihnen in diesem Zusammenhang zustehen.
            </p>
          </div>

          <PlatzhalterHinweis />

          <div className="flex flex-col gap-3">
            <h2 className="font-display text-[1.25rem] leading-[1.3] text-text">Verantwortlicher</h2>
            <div className="text-[1rem] leading-[1.75] text-text-muted">
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mt-3">{SITE.name}</p>
              <p>{CONTACT.ceo}</p>
              <p>{CONTACT.address.street}</p>
              <p>{CONTACT.address.zipCity}</p>
              <p className="mt-3">Telefon: {CONTACT.phone}</p>
              <p>E-Mail: {CONTACT.email}</p>
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
