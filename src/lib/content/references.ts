import type { CaseStudy, Testimonial } from '@/types/content'

// Anonymisierte Branchen-Archetypen statt realer Kundennamen — siehe CLAUDE.md
// „WICHTIGE PROJEKT-ENTSCHEIDUNGEN": erfundene Identitäten als Kundenstimmen auszugeben
// wäre irreführende Werbung. Diese Beispiele spiegeln typische Ausgangslagen wider.
export const CASE_STUDIES: CaseStudy[] = [
  {
    archetype: 'Handwerksbetrieb mit rund 15 Mitarbeitenden',
    context:
      'Die Website stammte aus dem Jahr 2013, war auf dem Smartphone kaum bedienbar und zeigte weder aktuelle Projekte noch eine Möglichkeit, unkompliziert eine Anfrage zu stellen.',
    challenge:
      'Kundinnen und Kunden fanden den Betrieb über Empfehlungen — und verloren das Vertrauen wieder, sobald sie die veraltete Seite sahen.',
    outcome:
      'Relaunch mit Projektgalerie, mobil optimiertem Anfrageformular und klarer Leistungsübersicht — umgesetzt in rund drei Wochen.',
    metric: '+ 60 % mehr Anfragen über die Website im ersten Quartal danach',
  },
  {
    archetype: 'Beratungsunternehmen mit zwei Standorten',
    context:
      'Eine Baukasten-Website ohne erkennbare Struktur — Interessierte mussten sich durch sieben Unterseiten klicken, um zu verstehen, welche Leistungen überhaupt angeboten werden.',
    challenge:
      'Die eigentliche Stärke des Unternehmens, spezialisiertes Fachwissen, ging in der Außendarstellung vollständig unter.',
    outcome:
      'Neue Struktur mit klarer Leistungsgliederung, eigenen Seiten je Standort und einer Startseite, die in zwei Sätzen sagt, wofür das Unternehmen steht.',
    metric: 'Seither monatlich neue Erstgespräche über die Website statt vereinzelter Anfragen',
  },
  {
    archetype: 'Inhabergeführtes Fachgeschäft im Einzelhandel',
    context:
      'Bislang ausschließlich über einen Branchenbuch-Eintrag und Mundpropaganda sichtbar — eine eigene Website gab es nicht.',
    challenge:
      'Bei der Suche nach Anbietern in der eigenen Stadt erschienen ausschließlich größere Wettbewerber, die online präsenter waren.',
    outcome:
      'Erste eigene Website mit Standort, Sortimentsschwerpunkten und Anfahrt — von der Analyse bis zum Launch innerhalb von vier Wochen.',
    metric: 'Seither feste Platzierung auf der ersten Seite der Suchergebnisse für die wichtigsten lokalen Suchanfragen',
  },
]

// Anonymisierte, rollenbasierte Rückmeldungs-Muster — siehe CLAUDE.md.
// Jede `context`-Angabe markiert die Anonymisierung zusätzlich zum „Typische Rückmeldung"-Badge der Karte.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Vor dem Projekt hatte ich Sorge, dass am Ende wieder eine Website herauskommt, die zwar modern aussieht, aber nicht zu uns passt. Genau das ist nicht eingetreten — im Gegenteil, Kundinnen und Kunden sprechen die neue Seite von sich aus an.',
    attribution: 'Inhaberin, Handwerksbetrieb',
    context: 'Anonymisiert — typische Rückmeldung nach Projektabschluss',
  },
  {
    quote:
      'Ich hatte mit mehreren Monaten gerechnet. Tatsächlich ging alles deutlich schneller, ohne dass es sich gehetzt angefühlt hätte — am Ende war sogar noch Zeit für zwei Korrekturrunden, die ich gar nicht eingeplant hatte.',
    attribution: 'Geschäftsführer, Beratungsunternehmen',
    context: 'Anonymisiert — typische Rückmeldung zur Projektlaufzeit',
  },
  {
    quote:
      'Was mich überrascht hat: Es ging am Anfang kaum um Farben oder Schriftarten, sondern erst einmal darum, wie unsere Kundschaft eigentlich sucht und entscheidet. Das hat sich später in jeder einzelnen Entscheidung bemerkbar gemacht.',
    attribution: 'Inhaber, Einzelhandelsgeschäft',
    context: 'Anonymisiert — typische Rückmeldung zur Zusammenarbeit',
  },
]
