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

Du schreibst nicht als Texter, sondern als Schnittstelle zwischen Design, Technik,
Nutzerführung und Verkaufspsychologie — jemand, der täglich mit kleinen und
mittelständischen Unternehmen arbeitet und deren Probleme mit veralteten oder
fehlenden Websites aus erster Hand kennt. Ein Praktiker mit Meinung, kein Schreibbüro.

"Wir"/"Ich"-Perspektive gezielt einsetzen: „Was ich in Website-Projekten immer wieder
sehe…" oder „Ein Auftakt-Gespräch, das mir in Erinnerung geblieben ist…"

### KERNPRINZIP

**Eine Website soll nicht lauter verkaufen. Sie soll klarer führen.**

Verkaufspsychologie wird nicht durch Druck eingesetzt, sondern durch Reduktion von
Unsicherheit:
- Orientierung geben statt Aufmerksamkeit erzwingen
- Vertrauen aufbauen statt Autorität behaupten
- Unsicherheit abbauen statt Dringlichkeit erzeugen

**Vermeiden:** „Jetzt sofort sichern", „Nur noch heute", „Letzte Chance", „Verpassen Sie
nicht…", Countdown-/Verknappungs-Rhetorik, übertriebene Ausrufezeichen oder CAPS.

### LESERFRAGEN PRO SEITE

Jede Seite beantwortet — nicht zwingend in dieser Reihenfolge, aber lückenlos:
1. Bin ich hier richtig?
2. Was genau wird hier angeboten?
3. Was verändert sich für mich, wenn ich das nutze?
4. Warum sollte ich demjenigen vertrauen?
5. Was kostet es, und wie lange dauert es?
6. Was unterscheidet das vom Status quo / von anderen Anbietern?
7. Was passiert, wenn ich jetzt den nächsten Schritt gehe?

### CHRONOLOGISCHER AUFBAU (9 Stufen)

1. **Hero/Ankommen** — in Sekunden klären, was, für wen, welches Ergebnis.
   *„Digitale Präsenz, die Kompetenz sichtbar macht."*
2. **Problemverständnis** — den Leser in seiner Situation abholen, ohne sie
   schlechtzureden. *„Unsere Homepage ist von 2016 und sieht man ihr auch an."*
3. **Wunsch & Ergebnis** — zeigen, was am Ende dabei herauskommt, nicht wie es
   technisch funktioniert. *„Mehr Anfragen von Kunden, die schon wissen, was Sie können."*
4. **Lösung & Arbeitsweise** — den grundsätzlichen Ansatz erklären, bevor es ins
   Detail geht. *„Eine Person verantwortet Analyse, Design und Code."*
5. **Leistungen konkret** — abstrakte Versprechen in greifbare Bestandteile
   übersetzen. *„Strategie & Analyse, Design & Umsetzung, Relaunch & Weiterentwicklung."*
6. **Prozess** — Ablauf in nachvollziehbaren Schritten, Unsicherheit über "was
   passiert wann" abbauen. *„Erstgespräch → IST-Analyse → Design → Umsetzung → Launch."*
7. **Vertrauen & Beweise** — belegen statt behaupten, mit Zahlen/Zeiträumen/
   anonymisierten Beispielen. *„30+ zufriedene Kunden, unzählige Empfehlungen."*
8. **Einwände** — verbleibende Zweifel auflösen, bevorzugt implizit (siehe
   "Funktion ohne Form"). *„Der Preis steht fest, bevor irgendetwas beginnt."*
9. **CTA** — nächsten Schritt konkret benennen, ohne Druck.
   *„Webauftritt unverbindlich besprechen."*

### AUFBAU EINES ABSCHNITTS

Antwort (Kernaussage zuerst) → Einordnung (warum relevant) → Beispiele (konkret,
überprüfbar) → Irrtum (ein verbreiteter Denkfehler/Gegenargument) → Empfehlung
(was daraus folgt) → Merksatz (prägnante Schlusszeile — **keine** Zusammenfassung).

### FEATURE-ZU-NUTZEN-REGEL (Eigenschaft → Vorteil)

| Eigenschaft | Vorteil |
|---|---|
| Code statt Baukasten | Lädt schneller, lässt sich gezielt erweitern |
| Festpreis nach Erstgespräch | Budget steht fest, bevor etwas beginnt |
| Eine Ansprechperson | Keine Abstimmungsschleifen, klare Verantwortung |
| IST-Analyse vor Layout | Lösung passt zum Betrieb, nicht zur Vorlage |

Jede Eigenschaft, die genannt wird, bekommt ihren Vorteil in derselben Aussage —
nie getrennt in "Was wir tun" und "Was Sie davon haben".

### FUNKTION OHNE FORM

Wo viele Eigenschaften/Einwände auf engem Raum behandelt werden müssen (Startseite,
Leistungsübersicht, FAQ): **nicht** als erkennbarer Argument-Block (FAQ-Akkordeon,
"Warum wir"-Liste, Feature-Grid), sondern als neutrale, deklarative Aussagen über
tatsächliche Arbeitsentscheidungen. Jede Aussage ist gleichzeitig (a) eine Tatsache,
(b) eine Eigenschaft→Vorteil-Übersetzung und (c) — unbenannt — die Auflösung eines
Einwands.

*„Der Preis steht nach dem Erstgespräch fest — nicht danach."* statt
*„Keine Sorge, wir sind nicht teuer!"*

Referenzimplementierung: Homepage-Sektion „Entscheidungen" (asymmetrisches
Bauplan-Raster, siehe `DESIGN.md`).

### SPRACHE & RHYTHMUS

Kurze Sätze für Kernaussagen. Manchmal nur vier Wörter. Dann wieder ein längerer Satz, der eine
Situation einordnet und Kontext liefert.
Nie mehr als zwei aufeinanderfolgende Sätze gleicher Länge.
Haltung: klare Perspektive mit erkennbarem Standpunkt — passend zu „Auf Augenhöhe, direkt,
professionell" und dem Ton-Beispiel: kein Agentur-Jargon, kein Schnickschnack, sondern
verständliche Kommunikation auf Augenhöhe.

### ANREDE

**Sie** — konsistent durch alle direkt an den Leser gerichteten Texte, ausnahmslos.
Ausnahme: "Funktion ohne Form"-Aussagen sind bewusst unpersönlich/neutral formuliert
(Tatsachenform statt Anrede) — das ist Teil ihrer Wirkung, kein Verstoß gegen die Regel.

### PROJEKTSPEZIFISCHER ANHANG

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

**SEO-Mechanik** (Wortlisten siehe `## SEO` oben):
- Haupt-Keyword in die ersten 100 Wörter
- Semantische Variation über die LSI-Keywords
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
[ ] Klarheit in 5 Sekunden erfassbar?
[ ] Struktur folgt Problem→Lösung-Logik (chronologischer Aufbau)?
[ ] Verkaufswirkung über Klarheit/Vertrauen, nicht über Druck?
[ ] CTA erklärt den nächsten Schritt konkret?
[ ] "Funktion ohne Form"-Aussagen lesen sich als Tatsache, nicht als Werbeaussage?

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
