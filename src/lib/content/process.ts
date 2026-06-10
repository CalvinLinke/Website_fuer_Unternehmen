import type { FaqItem, ProcessStep } from '@/types/content'

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Erstgespräch',
    description:
      'Wir lernen uns kennen, ohne Verkaufsdruck, aber mit konkreten Fragen zu Ihrem Betrieb, Ihren Zielen und dem, was die aktuelle Website (oder das Fehlen einer solchen) Sie eigentlich kostet.',
    detail:
      'Meist ein Videocall, etwa 30 Minuten. Sie bekommen am Ende eine ehrliche Einschätzung, ob und wie ich helfen kann, auch wenn die Antwort gelegentlich „aktuell eher nicht" lautet.',
  },
  {
    number: '02',
    title: 'IST-Analyse',
    description:
      'Hier unterscheidet sich die Arbeitsweise am deutlichsten von vielen anderen Anbietern: Ich schaue mir Ihre Branche, Ihre bisherige Außendarstellung und Ihre Zielgruppe im Detail an, bevor irgendetwas gestaltet wird.',
    detail:
      'Das Ergebnis ist ein schriftliches Konzept: keine vage Stimmungstafel, sondern eine Grundlage, auf die sich jede spätere Entscheidung zurückführen lässt.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Auf Basis der Analyse entsteht ein erster Entwurf, abgestimmt auf Ihre Branche und das, was Ihre Kundschaft online tatsächlich sucht. Sie sehen das Konzept, bevor eine Zeile Code geschrieben wird.',
    detail:
      'Änderungswünsche fließen direkt in überschaubaren Runden ein, statt sich über Wochen durch endlose Korrekturschleifen zu ziehen.',
  },
  {
    number: '04',
    title: 'Umsetzung',
    description:
      'Aus dem Entwurf wird eine funktionierende Website: technisch sauber gebaut, schnell ladend und auf jedem Gerät stimmig. Den Fortschritt sehen Sie über eine Vorschau jederzeit selbst.',
    detail:
      'Inhalte, Texte und Bilder stimmen wir parallel ab, damit beim Launch nichts mehr nachgereicht werden muss.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Die Website geht online, meist innerhalb weniger Wochen nach dem Erstgespräch. Mit dem Launch ist das Projekt abgeschlossen: Sie erhalten alle Dateien und Zugänge, die für den eigenständigen Betrieb nötig sind.',
    detail:
      'Eine kurze Übergabe stellt sicher, dass Sie Inhalte selbst pflegen können, ohne dafür auf jemanden angewiesen zu sein.',
  },
]

// Adressiert die in CLAUDE.md hinterlegten HAUPTEINWAENDE direkt und natürlich —
// nicht als Verkaufseinwand-Abwehr, sondern als ehrliche Antworten auf Fragen,
// die im Erstgespräch ohnehin aufkommen.
export const FAQS: FaqItem[] = [
  {
    question: 'Ist eine neue Website nicht generell ein teures Projekt?',
    answer:
      'Das hängt stark vom Anbieter ab, und davon, was am Ende dabei herauskommt. Ich kalkuliere einen Festpreis für das gesamte Projekt, der nach dem Erstgespräch und der Analyse feststeht, nicht nach Stunden. Die meisten meiner Kundinnen und Kunden waren überrascht, wie planbar dieser Betrag am Ende war, gemessen an dem, was eine veraltete Website sie monatlich an Anfragen kostet, die einfach nicht gestellt werden.',
  },
  {
    question: 'Wie lange dauert es, bis die Website tatsächlich online geht?',
    answer:
      'Bei den meisten Projekten vergehen vom Erstgespräch bis zum Launch wenige Wochen, nicht Monate. Das liegt an der Reihenfolge, die ich bewusst so aufgebaut habe: Eine ausführliche Analyse am Anfang erspart genau die Korrekturschleifen, die andere Projekte in die Länge ziehen. Wenn das Konzept einmal steht, geht die Umsetzung spürbar zügiger.',
  },
  {
    question: 'Mein Betrieb ist speziell, passt ein Standardansatz überhaupt zu uns?',
    answer:
      'Genau deshalb beginnt jedes Projekt mit einer Analyse Ihrer Branche, Ihrer Zielgruppe und Ihrer bisherigen Außendarstellung, nicht mit einer Vorlage, in die Ihr Unternehmen anschließend hineingepresst wird. Diese Sorge höre ich häufig, und sie ist genau der Grund, warum die Analysephase so ausführlich ausfällt: damit am Ende zu Ihnen passt, was online steht.',
  },
  {
    question: 'Was muss ich selbst beisteuern: Texte, Bilder, Inhalte?',
    answer:
      'So wenig wie möglich, so viel wie nötig. Vorhandene Inhalte übernehme ich, wo sie noch tragen. Für alles Weitere stimmen wir uns in kurzen, überschaubaren Runden ab, statt Ihnen am Ende eine lange Liste offener Punkte zu hinterlassen. Sie kennen Ihren Betrieb. Meine Aufgabe ist es, dafür zu sorgen, dass diese Substanz online ankommt.',
  },
  {
    question: 'Endet die Zusammenarbeit, sobald die Website online ist?',
    answer:
      'Ja, mit dem Launch ist das Projekt abgeschlossen. Sie erhalten alle Dateien und Zugänge sowie eine kurze Übergabe, damit Sie Inhalte selbst pflegen können. Die Website gehört vollständig Ihnen, ohne dass Sie an eine fortlaufende Vereinbarung gebunden sind.',
  },
]
