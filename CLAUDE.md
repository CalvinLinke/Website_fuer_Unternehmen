# CLAUDE.md — Website für Unternehmen

## Projektübersicht
- **Projekt:** Website für Unternehmen (website-fuer-unternehmen.com)
- **Slogan:** Digitale Präsenz, die Kompetenz sichtbar macht
- **Ziel:** Anfragen generieren / Darstellung
- **Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Paketmanager `bun`
  — Next.js 16 hat Breaking Changes ggü. älteren Versionen, siehe `AGENTS.md` /
  `node_modules/next/dist/docs/` vor Arbeiten an Routing/Metadata/Server Actions/Images prüfen

## Zielgruppe & Positionierung
- **Zielgruppe:** Business-Kunden, kleine bis mittelständische Unternehmen, die bislang keine oder eine veraltete Website haben — bzw. die eine neue, moderne Website suchen
- **Hauptproblem:** schnell, zum fairen Preis eine maßgeschneiderte, hoch moderne Website
- **Gewünschtes Ergebnis:** eine Website mit dem gewissen WOW-Effekt, die sich in ihrer Branche von der Konkurrenz abhebt
- **USP:** schnell, günstig, neue Technologie, grenzenlose Möglichkeiten, extrem detaillierte IST-Analyse
- **Anrede:** Sie
- **Preissignal:** Budget
- **Haupteinwände:** (1) zu teuer (2) dauert zu lange (3) zu individuell / passt nicht zu meinem Betrieb
- **Social Proof:** 30+ zufriedene Kunden, unzählige Empfehlungen

## Design-System
→ Alle visuellen Werte stehen in `DESIGN.md` — diese Datei ist maßgeblich. Keine Farbe, kein
Radius, kein Abstand selbst erfinden.

## SEO
- **Haupt-Keywords:** Website für Unternehmen, Webdesign für Unternehmen, Professionelle Unternehmenswebsite, Website erstellen lassen für Unternehmen, Moderne Website für Unternehmen
- **LSI-Keywords:** LandingPage, Webdesign, Homepage, Webauftritt, Onlineauftritt

---

## CONTENT-SYSTEM — Schreibregeln für alle Texte

### ROLLE & HALTUNG

Du schreibst als erfahrener Experte für Webdesign — jemand, der täglich mit kleinen und
mittelständischen Unternehmen arbeitet, deren Probleme mit veralteten oder fehlenden Websites
aus erster Hand kennt. Kein Texter. Ein Praktiker mit Meinung.

Ich-Perspektive gezielt einsetzen: „Was ich in Erstgesprächen mit Unternehmen immer wieder höre…"
oder „Ein Auftakt-Gespräch, das mir in Erinnerung geblieben ist…"
Anrede: **Sie** — konsistent durch alle Texte, ausnahmslos.

### INHALT & SUBSTANZ

- Suchintention direkt in den ersten zwei Sätzen beantworten
- Konkrete Zahlen, Zeiträume, Ergebnisse — was überprüfbar ist, wirkt glaubwürdig
- Typische Anlässe aufgreifen, warum Unternehmen jetzt einen neuen Webauftritt brauchen
  (Website von einem Baukasten, seit Jahren nicht angefasst, nicht mobil-optimiert,
  Konkurrenz zieht online sichtbar vorbei)
- Mindestens ein kontraintuitives Detail pro Text
- Keywords natürlich einbauen: Website für Unternehmen, Webdesign für Unternehmen,
  Professionelle Unternehmenswebsite, Website erstellen lassen für Unternehmen,
  Moderne Website für Unternehmen

### E-E-A-T
- Kompetenz durch Spezifität, nicht durch Adjektive
- Aussagen in realen Abläufen und konkreten Mechaniken verankern (z. B. wie die "extrem
  detaillierte IST-Analyse" tatsächlich abläuft, was ein Erstgespräch beinhaltet)
- Keine künstliche Autorität — echte Autorität durch Klarheit und Detail

### SPRACHE & RHYTHMUS

Kurze Sätze für Kernaussagen. Manchmal nur vier Wörter. Dann wieder ein längerer Satz, der eine
Situation einordnet und Kontext liefert.
Nie mehr als zwei aufeinanderfolgende Sätze gleicher Länge.
Haltung: klare Perspektive mit erkennbarem Standpunkt — passend zu „Auf Augenhöhe, direkt,
professionell" und dem Ton-Beispiel: kein Agentur-Jargon, kein Schnickschnack, sondern
verständliche Kommunikation auf Augenhöhe.

### VERBOTSLISTE

**Verbotene Wörter:**
zudem · darüber hinaus · letztendlich · im Wesentlichen · schlussendlich · grundsätzlich ·
vielfältig · umfassend · ganzheitlich · nahtlos · maßgeschneidert · bahnbrechend · revolutionär ·
einzigartig · nichtsdestotrotz · selbstverständlich · gleichermaßen · entsprechend · diesbezüglich

**Verbotene Eröffnungen:**
„In der heutigen Zeit…" · „Es ist wichtig zu beachten…" · „In diesem Artikel erfahren Sie…" ·
„Nicht zuletzt…"

**Verbotene Strukturmuster:**
- Symmetrische Drei-Punkte-Strukturen
- Abschluss-Zusammenfassung, die nur wiederholt
- Mehr als zwei gleich lange Sätze hintereinander
- Keyword-Wiederholung statt semantischer Variation

**Hinweis Eigenname:** "Maßgeschneidert" steht auf der Verbotsliste, taucht aber wörtlich in der
Brief-Vorgabe `ZIELGRUPPE_HAUPTPROBLEM` auf ("…eine maßgeschneiderte, hoch moderne Website…") —
dort als Kunden-Eingabe zulässig zu paraphrasieren ("auf den eigenen Betrieb zugeschnitten",
"passend zum eigenen Auftritt entwickelt"), nicht als eigene Wortwahl in Fließtexten reproduzieren.

### SEO
- Haupt-Keyword in die ersten 100 Wörter
- Semantische Variation: LandingPage, Webdesign, Homepage, Webauftritt, Onlineauftritt
- Suchabsicht konsequent durchhalten
- Ankertexte: beschreibend, nie „hier klicken"

### SELBST-AUDIT (vor jeder Ausgabe)
[ ] Kein verbotenes Wort?
[ ] Keine symmetrische Drei-Abschnitt-Struktur?
[ ] Nie mehr als zwei gleich lange Sätze hintereinander?
[ ] Keine wiederholende Zusammenfassung am Ende?
[ ] Mindestens ein kontraintuitives Detail?
[ ] Mindestens ein Ich-Perspektive-Anker?
[ ] Suchintention in den ersten zwei Sätzen beantwortet?

---

## WICHTIGE PROJEKT-ENTSCHEIDUNGEN (verbindlich, nicht erneut zur Diskussion stellen)

- **Logo:** vorhanden (`public/logo.png`), nicht neu entwerfen — Marken-Lila `#4F1375` /
  `#AD5FF2` direkt daraus gesampelt, in `DESIGN.md` verbindlich verankert
- **Referenzen/Testimonials:** bewusst **anonymisierte Beispielmuster** (Branchen-Archetypen,
  Ich-Perspektive-Beobachtungen), klar als „Anonymisiertes Beispiel"/„Typische Rückmeldung"
  gekennzeichnet — der Brief liefert nur aggregierten Social Proof ohne echte Namen/Zitate;
  erfundene Identitäten als Kundenstimmen auszugeben wäre irreführende Werbung
- **Kontaktformular:** echtes, serverseitig mailendes Formular über Resend (`/kontakt`),
  kein bloßer mailto-Link — alle CTAs verlinken dorthin
- **Impressum/Datenschutz:** vollwertige Seiten mit echten Stammdaten, aber rechtlich bindende
  Klauseln deutlich als Platzhalter markiert (Prüfung durch Anwalt vor Launch nötig)

## SCHNELL-PROMPTS

### Text für eine Sektion schreiben
Schreibe den Text für die Sektion "{{SEKTION}}" auf der Website-für-Unternehmen-Website.
Halte dich exakt an die Schreibregeln oben.
Zielgruppe: kleine bis mittelständische Unternehmen ohne/mit veralteter Website.
Kernbotschaft: {{KERNBOTSCHAFT}}. Umfang: {{WORTANZAHL}} Wörter. Anrede: Sie.
Baue folgende Einwände natürlich ein: zu teuer / dauert zu lange / zu individuell

### FAQ-Block
Erstelle 5 FAQ-Fragen mit Antworten für Website für Unternehmen.
Beantworte dabei direkt diese Einwände: zu teuer, dauert zu lange, zu individuell.
Antworten: 2–4 Sätze, direkt, konkret. Anrede: Sie.
Halte dich an die Schreibregeln oben.

### Meta-Description
Schreibe die SEO-Meta-Description für {{SEITENNAME}} auf Website für Unternehmen.
Max 155 Zeichen. Keyword: {{KEYWORD}}. CTA am Ende. Kein KI-Ton.

### Konversions-Check
Prüfe die Seite von Website für Unternehmen auf Conversion-Potenzial.
Hauptaktion: Webauftritt unverbindlich besprechen (führt zu `/kontakt`).
Einwände: zu teuer / dauert zu lange / zu individuell.
[ ] CTA auf jeder Viewport-Höhe sichtbar?
[ ] Alle 3 Einwände entkräftet?
[ ] Social Proof nah am CTA?
[ ] Wertversprechen in 5 Sekunden klar?
Für jeden negativen Punkt: konkrete Verbesserung direkt umsetzen.

### Komponente verfeinern
Überarbeite {{KOMPONENTE}} in Website für Unternehmen.
Problem: {{PROBLEM_BESCHREIBUNG}}
Design nicht von DESIGN.md abweichen. Keine neuen Dependencies ohne Rückfrage.
Zeige Änderung als Diff.
