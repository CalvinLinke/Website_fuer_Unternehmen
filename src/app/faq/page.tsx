import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { CTA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Häufige Fragen zu professionellen Websites',
  description:
    'Antworten auf die wichtigsten Fragen zu Webdesign, Kosten, Technik, SEO und Betrieb einer professionellen Unternehmenswebsite — direkt und ohne Fachjargon erklärt.',
  alternates: { canonical: '/faq' },
}

const FAQS: Array<{ category: string; items: Array<{ question: string; answer: string }> }> = [
  {
    category: 'Grundlagen',
    items: [
      {
        question: 'Worauf muss ich bei einer Website achten?',
        answer:
          'Am wichtigsten ist, dass Ihre Website auf dem Smartphone genauso gut funktioniert wie am Desktop — über 60 Prozent aller Besuche kommen heute mobil. Dazu kommt Geschwindigkeit: Lädt eine Seite spürbar langsam, sind viele Besucher schon weg, bevor sie überhaupt etwas gesehen haben, und Google straft das im Ranking ab. Genauso wichtig ist Klarheit — in Sekunden muss erkennbar sein, wer Sie sind, was Sie anbieten und wie man Sie erreicht. Saubere Überschriften, beschreibende Bildtexte und ein vollständiges Impressum gehören für mich von Anfang an dazu, nicht als Nachgedanke kurz vor dem Launch.',
      },
      {
        question: 'Was macht eine moderne Website aus?',
        answer:
          'Weniger Elemente, mehr Wirkung — eine moderne Website setzt auf Weißraum, klare Hierarchien und gezielte Akzente statt auf vollgepackte Seiten. Technisch zeigt sich das in den Core Web Vitals: Ladezeit, Reaktionsschnelligkeit und visuelle Stabilität fließen seit 2021 direkt ins Google-Ranking ein. Auf jedem Gerät passt sich das Layout automatisch an, ohne dass etwas verrutscht. Was ich dabei immer wieder beobachte: Eine Website, die selbst wie ein durchdachtes Produkt wirkt, überträgt dieses Gefühl direkt auf das Unternehmen dahinter — noch bevor ein Wort gelesen wurde.',
      },
      {
        question: 'Was muss eine Website alles besitzen?',
        answer:
          'Im Kern braucht jede Unternehmenswebsite eine Startseite, die in Sekunden zeigt, was Sie anbieten und für wen, eine Leistungsseite mit konkreten, verständlichen Beschreibungen und eine Kontaktseite mit Formular, E-Mail-Adresse und Telefonnummer. Dazu Referenzen oder Beispiele, die zeigen, dass andere bereits gute Erfahrungen gemacht haben. Rechtlich zwingend sind ein vollständiges Impressum und eine DSGVO-konforme Datenschutzerklärung, erreichbar von jeder Unterseite aus. Technisch gehören eine SSL-Verschlüsselung und, sobald externe Dienste eingebunden werden, ein Cookie-Hinweis dazu.',
      },
      {
        question: 'Wie ist der Aufbau einer professionellen Website?',
        answer:
          'Drei Ebenen greifen ineinander. Inhaltlich geht es um Texte, Bilder und die Struktur der Unterseiten — wer findet wo was. Gestalterisch übersetzen Farben, Typografie und Abstände diese Inhalte in ein stimmiges Bild Ihrer Marke. Technisch sorgt die Basis dafür, dass die Seite schnell lädt, auf jedem Gerät funktioniert und von Suchmaschinen gefunden wird — moderne Frameworks wie Next.js machen das spürbar einfacher. Mein Ansatz: Diese drei Ebenen von Anfang an zusammen denken, denn eine schöne Seite ohne technisches Fundament verliert ihre Wirkung schneller, als man denkt.',
      },
    ],
  },
  {
    category: 'Planung & Kosten',
    items: [
      {
        question: 'Was kostet eine professionelle Website?',
        answer:
          'Baukastensysteme wie Wix oder Squarespace kosten monatlich 15 bis 50 Euro — dafür arbeiten Sie innerhalb eines Templates mit begrenzten Möglichkeiten. Eine individuell entwickelte Unternehmenswebsite bewegt sich meist im mittleren vierstelligen Bereich, abhängig vom Umfang. Bei mir steht dieser Betrag als Festpreis nach dem Erstgespräch fest — keine Abrechnung nach Stunden, keine Überraschung danach. Mein Rat: nicht nur den Preis vergleichen, sondern auch, was darin enthalten ist. Analyse, Texthilfe und eine saubere SEO-Grundlage machen oft den Unterschied.',
      },
      {
        question: 'Wie lange dauert es, eine Website erstellen zu lassen?',
        answer:
          'Realistisch sind zwei bis acht Wochen, je nach Umfang und wie schnell Inhalte bereitstehen. In meiner Arbeitsweise beginnt es mit der IST-Analyse, danach folgt das Designkonzept, dann die Umsetzung mit allen Inhalten. Liegen Texte und Bilder zügig vor, kann eine Website in zwei bis drei Wochen online gehen. Der häufigste Grund für Verzögerungen ist nicht die Technik, sondern fehlende Inhalte — genau das fängt die Analysephase am Anfang ab. Monatelange Projekte sind selten ein Zeichen von Sorgfalt, meist eher von fehlendem Prozess.',
      },
      {
        question: 'Was brauche ich, bevor ich eine Website in Auftrag gebe?',
        answer:
          'Weniger, als die meisten denken. Hilfreich sind eine grobe Vorstellung, was die Website erreichen soll, etwas über Ihre Zielgruppe und ein ungefährer Budgetrahmen. Fertige Texte, professionelle Fotos oder eine genaue Struktur brauchen Sie nicht — dafür ist die Analysephase am Anfang da. Mein Grundsatz: Je offener das Erstgespräch, desto genauer passt am Ende das Ergebnis zu Ihrem Betrieb.',
      },
      {
        question: 'Kann ich meinen eigenen Text- und Bildinhalt liefern?',
        answer:
          'Ja, und für manche Betriebe ist das sogar die bessere Lösung — niemand kennt das eigene Unternehmen so gut wie die, die täglich darin arbeiten. Eigene Texte wirken oft persönlicher als generische Agentur-Formulierungen. Was ich übernehme: redigieren, SEO-optimieren und in die richtige Struktur bringen. Fehlen Inhalte oder die Zeit dafür, entstehen die Texte auf Basis der Analyse — professionelle Fotos lohnen sich aber in fast jedem Fall, weil sie den ersten Eindruck am stärksten prägen.',
      },
    ],
  },
  {
    category: 'Technisch',
    items: [
      {
        question: 'Was ist responsives Webdesign und warum ist es wichtig?',
        answer:
          'Responsives Webdesign bedeutet, dass sich eine einzige Website automatisch an jede Bildschirmgröße anpasst — vom Smartphone bis zum großen Monitor, statt mehrerer getrennter Versionen. Über 60 Prozent aller Besuche kommen mittlerweile von mobilen Geräten. Eine Seite mit winzigem Text, horizontalem Scrollen oder zu engen Buttons verliert die meisten Besucher in den ersten Sekunden, und Google bewertet die mobile Darstellung direkt im Ranking. Responsives Design ist deshalb kein Extra mehr, sondern Grundvoraussetzung für jede professionelle Website.',
      },
      {
        question: 'Was ist der Unterschied zwischen einem Baukasten und einer professionellen Website?',
        answer:
          'Ein Baukasten wie Wix oder IONOS ermöglicht einen schnellen Start ohne technisches Wissen. Der Preis dafür: enge gestalterische Grenzen, eine Bindung an die Plattform und dauerhafte Monatsgebühren — und oft eine langsamere Seite, weil generische Skripte mitgeladen werden, die sie gar nicht braucht. Eine individuell entwickelte Website orientiert sich dagegen an Ihrer Marke und Zielgruppe, ist auf Geschwindigkeit und Suchmaschinen ausgelegt und gehört vollständig Ihnen, ohne Plattformabhängigkeit. Für Unternehmen, die online überzeugen wollen, ist das keine Spielerei, sondern eine Investition, die sich über zusätzliche Anfragen zurückzahlt.',
      },
      {
        question: 'Wie schnell muss eine Website laden?',
        answer:
          'Faustregel: unter zwei Sekunden auf dem Smartphone, idealerweise unter einer. Google misst das über die Core Web Vitals — der wichtigste Wert ist der Largest Contentful Paint, also wie lange es dauert, bis der größte sichtbare Inhalt erscheint. Unter 2,5 Sekunden gilt als gut. In der Praxis heißt das: Bilder im modernen WebP-Format, JavaScript nur dort, wo es gebraucht wird, und ein Server, der zügig antwortet. Bei Baukästen oder veralteter Technik sind fünf bis zehn Sekunden keine Seltenheit — und genau das kostet Sichtbarkeit und die Geduld der Besucher.',
      },
      {
        question: 'Muss meine Website DSGVO-konform sein?',
        answer:
          'Ja — die DSGVO gilt für jede Website, die sich an Nutzer in der EU richtet. Sobald ein Kontaktformular, Google Analytics oder extern geladene Schriften im Spiel sind, werden personenbezogene Daten verarbeitet, und das muss transparent kommuniziert werden. Pflicht sind eine vollständige Datenschutzerklärung, ein korrektes Impressum und, bei Tracking, ein Cookie-Hinweis. Ein Punkt, der oft übersehen wird: Wer Google Fonts direkt von Google-Servern lädt, riskiert eine Abmahnung, weil dabei IP-Adressen in die USA übertragen werden. Lokal gehostete Schriften lösen das — wenn man von Anfang an daran denkt.',
      },
    ],
  },
  {
    category: 'SEO & Sichtbarkeit',
    items: [
      {
        question: 'Was ist SEO und warum ist es für mein Unternehmen wichtig?',
        answer:
          'SEO steht für Suchmaschinenoptimierung — alle Maßnahmen, die dafür sorgen, dass Ihre Website bei relevanten Suchanfragen weit oben erscheint. Der Grund, warum das zählt, ist einfach: Wer auf Seite 1 steht, wird gefunden. Wer das nicht tut, existiert für die meisten potenziellen Kunden schlicht nicht. Anders als Werbung erzeugt SEO organischen Traffic — Besucher, die von selbst kommen, ohne dass für jeden Klick bezahlt wird. Eine solide technische Basis, sinnvolle Inhalte und ein gepflegtes Google-Profil legen dafür den Grundstein.',
      },
      {
        question: 'Was ist der Unterschied zwischen On-Page- und Off-Page-SEO?',
        answer:
          'On-Page-SEO umfasst alles, was direkt auf Ihrer Website passiert: Struktur, Überschriften, Texte mit relevanten Suchbegriffen, Bildoptimierung, Ladezeit und interne Verlinkung — Dinge, die vollständig in Ihrer Hand liegen und von Anfang an stimmen sollten. Off-Page-SEO bezeichnet alles außerhalb davon, vor allem Links von anderen Seiten, die Google als Empfehlung wertet, dazu Einträge in Branchenverzeichnissen und ein gepflegtes Google-Business-Profil. On-Page bildet das Fundament. Off-Page baut darauf auf — eines ohne das andere bleibt unvollständig.',
      },
      {
        question: 'Wie werde ich lokal bei Google gefunden?',
        answer:
          'Der wichtigste Hebel ist ein vollständiges, aktiv gepflegtes Google-Business-Profil — mit Öffnungszeiten, Fotos, Leistungen und regelmäßigen Beiträgen. Positive Bewertungen stärken die lokale Sichtbarkeit erheblich, und das aktive Einholen davon gehört für mich zum Arbeitsalltag, nicht zur Kür. Auf der Website selbst helfen lokale Suchbegriffe — Stadt plus Branche —, klare Adressangaben und strukturierte Daten, die Google direkt mitteilen, wer Sie sind und wo Sie tätig sind. Konsistente Einträge in Branchenverzeichnissen, überall mit demselben Namen, derselben Adresse und Telefonnummer, runden das ab.',
      },
    ],
  },
  {
    category: 'Betrieb & Pflege',
    items: [
      {
        question: 'Was bekomme ich bei Projektabschluss übergeben?',
        answer:
          'Mit dem Launch erhalten Sie alle Dateien, Zugänge und Zugangsdaten, die für den eigenständigen Betrieb der Website nötig sind. Eine kurze Übergabe zeigt, wie sich Texte, Bilder und kleinere Inhalte selbst anpassen lassen, ohne dafür auf jemanden angewiesen zu sein. Die Website gehört vollständig Ihnen — ohne Plattformbindung und ohne laufende Verträge, die danach weiterlaufen.',
      },
      {
        question: 'Wie oft sollte eine Website aktualisiert werden?',
        answer:
          'Veraltete Angaben — alte Preise, frühere Ansprechpartner, falsche Öffnungszeiten — schaden dem Vertrauen, sobald jemand sie bemerkt. Solche Dinge passe ich am besten sofort an, wenn sich etwas ändert. Neue Referenzen oder Beispiele lohnen sich, sobald sie vorliegen, weil sie die Glaubwürdigkeit laufend stärken. Eine vollständige inhaltliche Überarbeitung dagegen ist meist erst nach drei bis fünf Jahren sinnvoll, wenn sich Erwartungen und Designstandards spürbar verschoben haben — bis dahin reicht Pflege statt Neubau.',
      },
      {
        question: 'Brauche ich als kleines Unternehmen wirklich eine eigene Website?',
        answer:
          'Ja, aus einem einfachen Grund: Ihre Zielgruppe sucht online nach Lösungen, ganz gleich, wie lokal Ihr Betrieb aufgestellt ist. Wer Sie dabei nicht findet — oder eine veraltete Seite vorfindet — landet im Zweifel bei der Konkurrenz. Eine gute Website ist rund um die Uhr erreichbar, beantwortet die häufigsten Fragen vorab und macht den ersten Schritt zur Kontaktaufnahme leicht. Was ich oft erlebe: Unternehmen unterschätzen, wie viele Anfragen ihnen entgehen, einfach weil sie online nicht auftauchen. Vertrauen entsteht heute vor dem ersten Anruf — wer dort professionell auftritt, hat schon einen Vorsprung.',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <section className="relative bg-transparent pb-[clamp(3rem,6vw,4rem)] pt-[clamp(7.5rem,15vw,11rem)]">
        <Container>
          <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-violet">
            Häufige Fragen
          </span>
          <h1 className="font-display mt-4 max-w-[28ch] text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.1] text-text">
            Was Unternehmen rund um ihre Website beschäftigt
          </h1>
          <p className="mt-5 max-w-[56ch] text-[1.0625rem] leading-[1.7] text-text-muted">
            Ausführliche Antworten auf die Fragen, die ich in Erstgesprächen am häufigsten höre — zu Kosten, Technik, SEO und dem Ablauf. Direkt formuliert, ohne Fachjargon.
          </p>
        </Container>
      </section>

      {FAQS.map((category) => (
        <section key={category.category} className="relative bg-transparent py-[clamp(2rem,4vw,3rem)]">
          <Container>
            <h2 className="font-display mb-8 text-[clamp(1.375rem,2.6vw,1.875rem)] leading-[1.2] text-text">
              {category.category}
            </h2>
            <div className="flex flex-col divide-y divide-line border-y border-line lg:max-w-[54rem]">
              {category.items.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.0625rem] font-semibold leading-[1.4] text-text marker:content-none [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span
                      aria-hidden
                      className="mt-[0.125em] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-lavender/8 text-[1rem] leading-none text-violet transition-transform duration-300 ease-out group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[65ch] text-[0.9375rem] leading-[1.7] text-text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="relative bg-transparent py-[clamp(4rem,8vw,6rem)]">
        <Container>
          <div className="flex flex-col items-start gap-5 rounded-[var(--radius-card)] card-glass p-[clamp(1.75rem,4vw,2.75rem)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-violet">
                Noch etwas offen?
              </p>
              <p className="mt-2 max-w-[44ch] text-[1rem] leading-[1.6] text-text-muted">
                Manche Fragen lassen sich am besten in einem kurzen, unverbindlichen Gespräch klären — nicht über ein FAQ.
              </p>
            </div>
            <Button href={CTA.href} size="md" className="shrink-0">
              {CTA.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
