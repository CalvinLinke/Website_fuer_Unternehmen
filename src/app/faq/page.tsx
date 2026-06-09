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
          'Eine professionelle Website muss heute mehrere Anforderungen gleichzeitig erfüllen. Erstens sollte sie auf allen Geräten — Smartphone, Tablet und Desktop — einwandfrei funktionieren. Über 60 Prozent aller Websitebesuche erfolgen heute über mobile Endgeräte, weshalb eine mobiloptimierte Darstellung keine Option, sondern Grundvoraussetzung ist. Zweitens zählt die Ladegeschwindigkeit: Nutzer verlassen eine Seite nach mehr als drei Sekunden häufig — und Google bestraft langsame Sites im Ranking. Drittens muss die Navigation klar sein: Besucher müssen in Sekunden verstehen, wer Sie sind, was Sie anbieten und wie sie Kontakt aufnehmen können. Viertens braucht jede Unternehmenswebsite vertrauensbildende Elemente: echte Referenzen, Impressum und Datenschutzerklärung sowie gut sichtbare Kontaktmöglichkeiten. Fünftens sollte die technische Basis SEO-tauglich sein — saubere URLs, sinnvolle Überschriftenhierarchie, beschreibende Alternativtexte bei Bildern. Kurz: Eine gute Website ist schnell, verständlich, mobilfreundlich und technisch sauber.',
      },
      {
        question: 'Was macht eine moderne Website aus?',
        answer:
          'Eine moderne Website zeichnet sich durch mehr als nur Optik aus. Erstens lebt sie von Reduktion: weniger Elemente, mehr Wirkung, gezielte Nutzung von Weißraum und klarer typografischer Hierarchie. Der Trend geht weg von vollgepackten Seiten hin zu klarer Informationsarchitektur. Zweitens ist sie blitzschnell — Core Web Vitals (Ladezeit, Interaktivität, Anzeigestabilität) fließen seit 2021 direkt in das Google-Ranking ein. Drittens passt sie sich nahtlos an unterschiedliche Bildschirmgrößen an. Viertens kommuniziert sie Glaubwürdigkeit durch gestalterische Präzision: konsistente Farben, durchdachte Abstände, sorgfältig gewählte Schriften. Eine Website, die selbst wie ein fertiges Produkt wirkt, strahlt aus, dass dahinter jemand steht, der seinen Beruf ernst nimmt. Fünftens denkt sie den Nutzer mit: Jeder Klickpfad ist bewusst gestaltet, jede Seite hat einen klaren Zweck, und potenzielle Kunden finden ohne Umwege, was sie suchen.',
      },
      {
        question: 'Was muss eine Website alles besitzen?',
        answer:
          'Eine vollständige Unternehmenswebsite sollte mindestens folgende Bausteine umfassen: Eine Startseite, die in wenigen Sekunden vermittelt, was das Unternehmen anbietet und wen es anspricht. Eine Leistungsseite, auf der Angebote konkret und verständlich beschrieben sind — ohne Fachjargon, dafür mit echtem Nutzen aus Kundensicht. Eine Über-uns-Seite, die Vertrauen aufbaut und zeigt, mit wem der Interessent es zu tun hat. Eine Kontaktseite mit Formular, E-Mail-Adresse, Telefonnummer und ggf. Karte. Referenzen oder Kundenstimmen, die belegen, dass andere bereits positive Erfahrungen gemacht haben. Aus rechtlichen Gründen zwingend erforderlich sind ein vollständiges Impressum und eine DSGVO-konforme Datenschutzerklärung — beides muss von jeder Unterseite aus erreichbar sein. Technisch sollte die Website SSL-verschlüsselt sein und ein Cookie-Einwilligungsbanner haben, wenn externe Dienste eingebunden werden.',
      },
      {
        question: 'Wie ist der Aufbau einer professionellen Website?',
        answer:
          'Der Aufbau lässt sich in drei Ebenen beschreiben. Die inhaltliche Ebene umfasst alle Texte, Bilder und Strukturen — von der Startseite über Unterseiten bis zu Impressum und Datenschutz. Diese folgen einer durchdachten Informationsarchitektur: Welche Seiten gibt es, wie hängen sie zusammen, und welcher Interessent findet wo was? Die gestalterische Ebene setzt diese Inhalte visuell um: Farben, Typografie, Abstände und Bildwelt sind Teil eines konsistenten Systems, das die Marke des Unternehmens widerspiegelt. Die technische Ebene sorgt dafür, dass die Website schnell lädt, auf allen Geräten funktioniert, von Suchmaschinen gefunden wird und langfristig erweiterbar bleibt. Moderne Frameworks wie Next.js ermöglichen dabei sehr kurze Ladezeiten. Wichtig: Diese drei Ebenen müssen von Beginn an zusammengedacht werden — gute Gestaltung ohne technisches Fundament verliert schnell an Wirkung.',
      },
    ],
  },
  {
    category: 'Planung & Kosten',
    items: [
      {
        question: 'Was kostet eine professionelle Website?',
        answer:
          'Die Kosten variieren erheblich nach Anforderungen. Baukastensysteme wie Wix oder Squarespace kosten monatlich zwischen 15 und 50 Euro — dafür erhält man ein Template-Ergebnis ohne individuelle Anpassungen. Eine professionell umgesetzte Unternehmenswebsite mit individuellem Design, mobiloptimierter Darstellung und sauberer technischer Basis bewegt sich typischerweise im mittleren vierstelligen Bereich. Komplexere Projekte mit Shop-Funktionalität oder mehrsprachigen Versionen können deutlich teurer werden. Entscheidend ist nicht nur der Erstellungspreis, sondern auch der laufende Aufwand für Hosting, Domain und gelegentliche Updates. Bei meinem Festpreismodell sind alle Kosten von Anfang an transparent — keine stundenbasierte Abrechnung, keine Überraschungen. Mein Rat: Vergleichen Sie nicht nur Preise, sondern auch den Leistungsumfang. Analyse, Konzept, Texthilfe, SEO-Grundlage und Betreuung nach dem Launch machen oft den entscheidenden Unterschied.',
      },
      {
        question: 'Wie lange dauert es, eine Website erstellen zu lassen?',
        answer:
          'Die realistische Umsetzungszeit für eine professionelle Unternehmenswebsite liegt bei zwei bis acht Wochen — je nach Umfang und wie schnell Inhalte bereitgestellt werden. In meiner Arbeitsweise beginnt der Prozess mit einer IST-Analyse (ein bis zwei Wochen), darauf folgt das Designkonzept (ca. eine Woche) und die technische Umsetzung mit Inhaltsbefüllung (zwei bis drei Wochen). Entscheidend für den Zeitplan ist, wie schnell Texte, Bilder und Rückmeldungen seitens des Auftraggebers zur Verfügung stehen. Projekte mit gut vorbereiteten Inhalten können in zwei bis drei Wochen live gehen. Der häufigste Grund für Verzögerungen: fehlende oder späte Inhaltslieferung. Monatelange Webprojekte sind meist kein Zeichen von Sorgfalt, sondern von fehlendem Prozess oder unklaren Anforderungen zu Projektbeginn.',
      },
      {
        question: 'Was brauche ich, bevor ich eine Website in Auftrag gebe?',
        answer:
          'Für ein effizientes Webprojekt sind einige Vorbereitungen hilfreich, aber keine muss perfekt sein. Nützlich sind: ein grobes Bild davon, was die Website leisten soll (mehr Anfragen, stärkeres Vertrauen, bessere Sichtbarkeit), Informationen über Ihre Zielgruppe, vorhandene Logos oder Designvorgaben und ein ungefährer Budgetrahmen. Was Sie nicht brauchen: fertige Texte, professionelle Fotos oder genaue Vorstellungen zu Struktur und Technik — genau dafür ist der Analyse- und Konzeptprozess zu Beginn da. In einem guten Erstgespräch zeigt sich schnell, was bereits vorhanden ist und was im Projektverlauf entwickelt wird. Mein Grundsatz: Je offener das erste Gespräch, desto besser wird die Website am Ende zu Ihrem Betrieb passen.',
      },
      {
        question: 'Kann ich meinen eigenen Text- und Bildinhalt liefern?',
        answer:
          'Ja — und für manche Betriebe ist das die beste Lösung, weil niemand das eigene Unternehmen so gut kennt wie die, die darin arbeiten. Eigene Texte und Bilder wirken oft glaubwürdiger und persönlicher als generisch formulierte Agentur-Texte. Was ich in jedem Fall leiste: strukturierte Vorgaben, was auf welcher Seite stehen sollte, Hinweise zur Bildqualität und Bildsprache sowie das Redigieren und SEO-Optimieren der gelieferten Texte. Wenn keine eigenen Inhalte vorhanden sind oder die Zeit fehlt, erstelle ich auf Basis der Analyse-Ergebnisse passende Texte für das Unternehmen. Professionelle Fotos lohnen sich fast immer — sie sind der einzelne Faktor mit der größten Wirkung auf den ersten Eindruck.',
      },
    ],
  },
  {
    category: 'Technisch',
    items: [
      {
        question: 'Was ist responsives Webdesign und warum ist es wichtig?',
        answer:
          'Responsives Webdesign bedeutet, dass eine Website ihr Layout automatisch an die Bildschirmgröße des jeweiligen Endgeräts anpasst — vom kleinen Smartphone bis zum großen Desktop-Monitor. Statt mehrerer separater Websites gibt es eine einzige, die sich intelligent verhält. Die Bedeutung liegt auf der Hand: Über 60 Prozent aller Websitebesuche erfolgen heute über mobile Endgeräte. Eine Website, die auf dem Smartphone schlecht bedienbar ist — winzige Texte, horizontales Scrollen, Buttons zu eng — verliert die Mehrheit ihrer Besucher sofort. Zusätzlich bewertet Google das mobile Nutzungserlebnis direkt in seinen Ranking-Algorithmen: Nicht-mobilfreundliche Websites werden systematisch schlechter platziert. Responsives Design ist heute kein Extra, sondern absoluter Standard — und ein Grundmerkmal jeder professionell erstellten Website.',
      },
      {
        question: 'Was ist der Unterschied zwischen einem Baukasten und einer professionellen Website?',
        answer:
          'Homepage-Baukästen wie Wix, Squarespace oder IONOS ermöglichen einen schnellen Start ohne technisches Wissen. Der Preis dafür ist Individualität: Man arbeitet innerhalb enger gestalterischer Grenzen, ist an die Plattform gebunden und zahlt dauerhaft monatliche Grundgebühren. Die Performance ist oft schwach, weil Baukästen generische Skripte laden, die für die eigene Seite nicht gebraucht werden. Eine professionell entwickelte Website hingegen ist maßgeschneidert: Das Design entsteht auf Basis der eigenen Marke und Zielgruppe, die technische Umsetzung ist auf Schnelligkeit und Suchmaschinenoptimierung ausgelegt, und die Website gehört vollständig dem Auftraggeber — ohne Plattformabhängigkeit. Für Unternehmen, die online glaubwürdig und professionell auftreten wollen, ist eine individuelle Website keine Kür, sondern eine Investition, die sich durch mehr Anfragen direkt amortisiert.',
      },
      {
        question: 'Wie schnell muss eine Website laden?',
        answer:
          'Die Faustformel: Unter zwei Sekunden auf dem Smartphone, idealerweise unter einer Sekunde. Google misst die Seitengeschwindigkeit über Core Web Vitals — drei messbare Werte, die seit 2021 direkt ins Google-Ranking einfließen. Der wichtigste ist der Largest Contentful Paint (LCP): wie lange es dauert, bis der größte sichtbare Inhalt geladen ist. Ein LCP unter 2,5 Sekunden gilt als gut. Hinzu kommen der Interaction to Next Paint (Reaktionszeit auf Nutzereingaben) und der Cumulative Layout Shift (visuelle Stabilität). Praktisch bedeutet das: Bilder werden im modernen WebP-Format ausgeliefert, JavaScript nur geladen wenn nötig, und der Server antwortet schnell auf Anfragen. Mit modernen Frameworks wie Next.js lassen sich exzellente Ladezeiten erreichen. Bei Baukästen oder veralteter Technik sind fünf bis zehn Sekunden keine Seltenheit — aus Sicht von Ranking und Nutzerverhalten ein gravierender Nachteil.',
      },
      {
        question: 'Muss meine Website DSGVO-konform sein?',
        answer:
          'Ja — die Datenschutz-Grundverordnung gilt für alle Websites, die sich an Nutzer in der EU richten. Wenn Ihre Website personenbezogene Daten verarbeitet — was bereits beim Einsatz von Google Analytics, Kontaktformularen oder extern geladenen Schriften der Fall ist — müssen Sie das transparent kommunizieren und die Einwilligung der Nutzer einholen. Pflichtbestandteile sind eine vollständige Datenschutzerklärung, ein Impressum mit vollständigen Angaben zum Betreiber sowie bei Tracking-Tools ein Cookie-Consent-Banner. Besonders häufig übersehen: Wer Google Fonts direkt von Google-Servern lädt, riskiert Abmahnungen, weil dabei IP-Adressen an US-Server übermittelt werden. Die Lösung — Schriften lokal hosten — lässt sich sauber umsetzen, wenn es von Anfang an berücksichtigt wird.',
      },
    ],
  },
  {
    category: 'SEO & Sichtbarkeit',
    items: [
      {
        question: 'Was ist SEO und warum ist es für mein Unternehmen wichtig?',
        answer:
          'SEO steht für Search Engine Optimization — Suchmaschinenoptimierung. Darunter versteht man alle Maßnahmen, die dazu beitragen, dass eine Website bei relevanten Suchanfragen bei Google möglichst weit oben erscheint. Für Unternehmen ist das aus einem einfachen Grund wichtig: Wer bei Google auf Seite 1 erscheint, wird gefunden — wer es nicht tut, existiert für potenzielle Kunden praktisch nicht. Der Vorteil gegenüber Werbung: SEO erzeugt organischen Traffic, also Besucher, die von selbst kommen, ohne dass für jeden Klick bezahlt wird. Gutes SEO beginnt bei der Websitestruktur und der Technik (schnelle Ladezeiten, mobilfreundlich, saubere URLs), geht über sinnvolle Inhalte mit relevanten Suchbegriffen und endet bei lokaler Auffindbarkeit über Google My Business. SEO ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess — eine solide Basis legt aber den entscheidenden Grundstein.',
      },
      {
        question: 'Was ist der Unterschied zwischen On-Page- und Off-Page-SEO?',
        answer:
          'On-Page-SEO umfasst alle Maßnahmen, die direkt auf der eigenen Website vorgenommen werden: Seitenstruktur, Überschriftenhierarchie, Textinhalte mit relevanten Suchbegriffen, Bildoptimierung, Ladezeit, Meta-Beschreibungen und interne Verlinkung. All das liegt vollständig in der eigenen Hand und sollte von Beginn an korrekt aufgebaut werden. Off-Page-SEO bezeichnet alles außerhalb der eigenen Website: vor allem Links von anderen relevanten Seiten (Backlinks), die Google als Empfehlung interpretiert und positiv im Ranking berücksichtigt. Auch Einträge in Branchenverzeichnissen, ein gepflegtes Google-Business-Profil und Erwähnungen in Presse oder Fachmedien zählen dazu. Beide Bereiche sind wichtig — On-Page-SEO bildet das Fundament, Off-Page-SEO baut darauf auf.',
      },
      {
        question: 'Wie werde ich lokal bei Google gefunden?',
        answer:
          'Für lokal operierende Unternehmen ist lokale Sichtbarkeit bei Google entscheidend. Der wichtigste Hebel ist ein vollständig ausgefülltes und aktives Google-Business-Profil — mit aktuellen Öffnungszeiten, Fotos, Leistungsbeschreibungen und regelmäßigen Beiträgen. Positive Kundenbewertungen auf Google stärken die lokale Sichtbarkeit erheblich; das aktive Einholen und Beantworten von Rezensionen sollte Teil des Arbeitsalltags sein. Auf der Website selbst helfen lokale Keywords (Stadtname und Branche), klare Adress- und Kontaktangaben sowie strukturierte Daten nach Schema.org, die Google direkt mitteilen, wer das Unternehmen ist und wo es tätig ist. Einträge in relevanten Branchenverzeichnissen mit konsistenten NAP-Daten (Name, Adresse, Telefon) unterstützen die lokale Auffindbarkeit zusätzlich.',
      },
    ],
  },
  {
    category: 'Betrieb & Pflege',
    items: [
      {
        question: 'Was passiert nach dem Launch — brauche ich weiter Unterstützung?',
        answer:
          'Nach dem Launch ist die Website zwar live, aber kein abgeschlossenes Projekt. Je nach Betrieb entstehen früher oder später Bedürfnisse: neue Leistungen kommen hinzu, Preise ändern sich, ein Referenzprojekt soll ergänzt werden. Einige Unternehmen möchten Inhalte selbst pflegen — das ist bei einer gut gebauten Website durchaus möglich und wird auf Wunsch eingerichtet. Andere schätzen es, jemanden zu haben, der im Hintergrund dafür sorgt, dass alles läuft. In meiner Arbeitsweise endet die Zusammenarbeit nicht abrupt mit dem Launch. Ich stehe für Fragen, kleinere Anpassungen und Weiterentwicklungen zur Verfügung — ohne laufende Verträge, die Sie zu etwas verpflichten, das Sie vielleicht nicht brauchen. Wichtig: Eine gute Website ist kein einmaliges Projekt, sondern ein Werkzeug, das mitwächst.',
      },
      {
        question: 'Wie oft sollte eine Website aktualisiert werden?',
        answer:
          'Inhalte, die nicht mehr aktuell sind, schaden dem Vertrauen potenzieller Kunden und können das Google-Ranking beeinflussen. Preise, Leistungen, Ansprechpartner und Öffnungszeiten sollten immer aktuell sein — am besten sofort angepasst, wenn sich etwas ändert. Neue Referenzen, Kundenstimmen oder Fallbeispiele sind wertvolle Inhalte, die die Glaubwürdigkeit stärken und regelmäßig ergänzt werden sollten. Aus SEO-Sicht profitieren Websites von regelmäßigen Inhaltsergänzungen — etwa durch einen Blog oder Newsbereich. Technisch sollte die Website mindestens einmal jährlich auf veraltete Abhängigkeiten, Sicherheitslücken und Performance geprüft werden. Eine vollständige inhaltliche Überarbeitung ist in der Regel alle drei bis fünf Jahre sinnvoll, da sich Kundenerwartungen, Marktpositionierung und Designstandards weiterentwickeln.',
      },
      {
        question: 'Brauche ich als kleines Unternehmen wirklich eine eigene Website?',
        answer:
          'Ja — aus einem sehr einfachen Grund: Ihre Zielgruppe sucht online nach Lösungen für ihre Probleme, auch wenn Ihr Betrieb lokal oder regional aufgestellt ist. Wer Sie nicht findet oder wer eine veraltete, unprofessionelle Website findet, entscheidet sich im Zweifel für die Konkurrenz. Eine gute Website ist der erste Kontaktpunkt mit potenziellen Kunden — und oft der entscheidende. Sie ist 24 Stunden täglich erreichbar, beantwortet die häufigsten Fragen, zeigt Kompetenz und macht es leicht, Kontakt aufzunehmen. Viele kleinere Unternehmen unterschätzen, wie viel Umsatz ihnen durch eine schwache Online-Präsenz entgeht — nicht weil aktiv Kunden abgewiesen werden, sondern weil sie schlicht nicht gefunden werden. Gerade für kleine Betriebe gilt: Vertrauen entsteht heute online, bevor der erste Anruf kommt. Wer dabei professionell auftritt, hat einen echten Vorteil gegenüber dem Wettbewerb.',
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
