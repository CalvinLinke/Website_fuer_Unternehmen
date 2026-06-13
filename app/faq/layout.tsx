import type { Metadata } from 'next';

const BASE = 'https://www.website-fuer-unternehmen.de';

export const metadata: Metadata = {
  title: 'Häufige Fragen',
  description: 'Antworten auf die häufigsten Fragen zu Ablauf, Kosten, Laufzeiten und Technologie — kurz und verständlich erklärt.',
  alternates: { canonical: `${BASE}/faq` },
  openGraph: {
    title: 'Häufige Fragen — Website für Unternehmen',
    description: 'Antworten auf die häufigsten Fragen zu Ablauf, Kosten, Laufzeiten und Technologie — kurz und verständlich erklärt.',
    url: `${BASE}/faq`,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie lange dauert es, bis meine Website online ist?',
      acceptedAnswer: { '@type': 'Answer', text: 'In der Regel ist Ihre Website nach 2 bis 4 Wochen fertig — abhängig vom Umfang. Den genauen Zeitplan legen wir gleich beim Erstgespräch gemeinsam fest.' },
    },
    {
      '@type': 'Question',
      name: 'Was kostet eine Website — gibt es versteckte Kosten?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nein. Sie erhalten vorab einen verbindlichen Festpreis. Was wir vereinbaren, gilt — kein Nachverhandeln, keine Überraschungen auf der Rechnung. Laufende Kosten wie Hosting besprechen wir transparent im Voraus.' },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen einer Landingpage und einer Unternehmenswebsite?',
      acceptedAnswer: { '@type': 'Answer', text: 'Eine Landingpage ist eine einzelne, fokussierte Seite — ideal, wenn Sie ein klares Ziel haben: einen Termin buchen, eine Anfrage erhalten, ein Produkt verkaufen. Eine Unternehmenswebsite umfasst dagegen mehrere Seiten (z. B. Über uns, Leistungen, Kontakt) und bildet Ihr gesamtes Unternehmen ab. Welche Option zu Ihnen passt, klären wir gemeinsam im Erstgespräch.' },
    },
    {
      '@type': 'Question',
      name: 'Was ist im CI-Paket enthalten?',
      acceptedAnswer: { '@type': 'Answer', text: 'Das CI-Paket umfasst alle Dokumente, die im Geschäftsalltag auftauchen: Briefpapier, Angebotsvorlagen, E-Mail-Signatur, Visitenkarten sowie PDFs im Corporate Design. So wirken Sie nach außen einheitlich und professionell — vom ersten Kontakt bis zur Rechnung.' },
    },
    {
      '@type': 'Question',
      name: 'Wie läuft der Fragebogen ab?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nach dem Erstgespräch erhalten Sie einen strukturierten Fragebogen. Darin beschreiben Sie uns, was Ihr Unternehmen ausmacht, wer Ihre Zielgruppe ist und was Ihnen bei Ihrem Auftritt besonders wichtig ist. Das dauert in der Regel 20–30 Minuten und ist die Grundlage für alles, was wir erstellen.' },
    },
    {
      '@type': 'Question',
      name: 'Kann ich auch nur Texte oder Design überarbeiten lassen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Unsere Pakete B1 (Optische Modernisierung) und B2 (Inhaltliche Überarbeitung) richten sich genau an Unternehmen, die bereits eine Website haben, aber gezielt etwas verbessern möchten — ob optisch, sprachlich oder beides.' },
    },
    {
      '@type': 'Question',
      name: 'Muss ich Texte und Bilder selbst liefern?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nur wenn Sie möchten. Auf Wunsch übernehmen wir Texte und kümmern uns um passende Bilder. Bestehendes Material binden wir natürlich gerne ein.' },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich ein CMS, um Inhalte selbst zu pflegen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nicht zwingend. Viele unserer Kunden haben keine Zeit oder kein Interesse daran, Inhalte selbst zu ändern — dann übernehmen wir das für Sie. Wenn Sie Inhalte selbst anpassen möchten, richten wir auf Wunsch ein einfaches Redaktionssystem ein, das ohne technisches Wissen bedienbar ist.' },
    },
    {
      '@type': 'Question',
      name: 'Was passiert nach dem Launch — gibt es Support und Hosting?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Wir bieten optionale Betreuungspakete an: von technischem Hosting über regelmäßige Updates bis hin zu inhaltlicher Pflege. Wir besprechen im Voraus transparent, was Sie laufend benötigen — und was es kostet.' },
    },
    {
      '@type': 'Question',
      name: 'Wie läuft die Bezahlung ab?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sie erhalten vorab ein verbindliches Angebot mit Festpreis. In der Regel wird eine Anzahlung zu Projektbeginn und der Restbetrag nach Freigabe fällig. Keine versteckten Kosten, keine Nachforderungen.' },
    },
    {
      '@type': 'Question',
      name: 'Welche Technologie verwendet ihr?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wir setzen auf Next.js 15 und React 19 — das sind moderne Webtechnologien, die Ihre Website blitzschnell machen, bestens bei Google abschneiden und langfristig wartbar bleiben. Ihre Website wird statisch ausgeliefert, läuft auf professioneller Infrastruktur und ist von Grund auf sicher aufgebaut.' },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
