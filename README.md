# Handoff: Landingpage „Website für Unternehmen"

## Overview
Marketing-Landingpage für eine Webagentur, die **individuelle Unternehmenswebsites** für
Mittelstand & lokale Betriebe baut. Repräsentativer Auftritt mit starkem, animiertem Hero,
Prozess, Leistungen, Festpreis-Paketen, FAQ und Kontakt-CTA. Sprache: **Deutsch**.

## Über die Dateien in diesem Paket
Die Datei `reference/Landingpage.html` ist die **maßgebliche Design-Referenz** (ein in
reinem HTML/CSS/JS gebauter Prototyp). Sie zeigt das **exakt gewünschte Aussehen und
Verhalten** – sie ist die „Ground Truth".

Im Ordner `nextjs/` liegt bereits eine **lauffähige 1:1-Umsetzung** in **Next.js (App Router)
+ TypeScript + Tailwind v4**. Ziel des Handoffs: **dieses Ergebnis 1:1 übernehmen** bzw. in
das Zielprojekt integrieren. Das Design-CSS ist verbatim portiert (`nextjs/app/globals.css`),
die Animations-/Interaktionslogik als React-Client-Komponente (`nextjs/components/SiteEffects.jsx`).
Wenn etwas unklar ist: **immer gegen `reference/Landingpage.html` prüfen** – das ist der
Pixel-Maßstab.

→ Setup & Start: siehe **`nextjs/README-SETUP.md`**.

## Fidelity
**High-fidelity (hifi).** Finale Farben, Typografie, Abstände, Animationen und Interaktionen.
Pixelgenau umsetzen. Keine freie Interpretation der Animationen – die mitgelieferten
Komponenten/Hooks verwenden.

---

## Tech-Stack (Zielumsetzung)
- **Next.js 15** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS v4** (Utility-Framework verfügbar; das pixelgenaue Aussehen kommt aus dem
  portierten `globals.css`, nicht aus Utilities – bewusste Entscheidung für 1:1-Treue)
- **Fonts via `next/font/google`**: Bricolage Grotesque (Display), Manrope (Text),
  JetBrains Mono (Labels/mono)

## Projektstruktur (`nextjs/`)
```
app/
  layout.tsx        next/font-Setup, Metadata, <html>/<body>
  page.tsx          komponiert alle Sektionen + <SiteEffects/>
  globals.css       ← komplettes Design-System (Tokens, Komponenten, Keyframes) 1:1
components/
  Nav.tsx Hero.tsx Process.tsx Services.tsx Pricing.tsx Faq.tsx Cta.tsx Footer.tsx
  SiteEffects.jsx   ← "use client": Canvas-Netzwerk, Card-Field, Switcher, Reveal, FAQ, …
public/logo.png
```

---

## Screens / Views (Sektionen, von oben nach unten)

### 1. Nav (fixiert)
- Logo links, Links (Ablauf/Leistungen/Preise/FAQ) mittig, CTA „Projekt starten" rechts.
- Transparent; ab Scroll > 30px Klasse `scrolled` → weißer Blur-Hintergrund + Schatten.
- Unter 880px: Links + CTA ausgeblendet (`.nav__links`, `.nav__cta` → `display:none`).

### 2. Hero (das Herzstück)
- Layout: linksbündiger Textblock (oben verankert), unten zentriert der **Switcher**.
  `min-height:100svh`, Flex-Spalte.
- Inhalt: Eyebrow-Chip „Webagentur für den Mittelstand" · H1 „Ihre Website. *Maßgeschneidert*
  für Ihr Unternehmen." (Wort „Maßgeschneidert" als animierter Verlaufstext `.grad`) · Lead ·
  zwei CTAs (`btn--primary`, `btn--ghost`) · Trust-Zeile (3 Items mit Icon).
- **Animierter Hintergrund**, zwei Konzepte (umschaltbar):
  - **Netzwerk** (`#netCanvas`): driftende Partikel + Verbindungslinien (Canvas 2D).
  - **Cards** (`#cardField`): langsam nach oben driftende, abstrakte Website-Kacheln
    (DOM-Elemente, Parallax über Tiefe/Skalierung/Opacity), in die rechte Bildhälfte gebiased.
  - **`.hero-veil`**: Verlauf-Schleier, links deckend → rechts transparent (Textlesbarkeit).
- **Theme**: `data-theme="light"` (Standard) / `"dark"` (Aubergine, weißer Text).
- **Standard: `data-bg="network" data-theme="light"`**.
- **Switcher** (`.switcher`): prominenter Hinweis-Chip „✦ Hintergrund live testen" (violett,
  Pointer-Dreieck, Puls-Ring `swGlow`, leichtes Bob `swBob`) + zwei Button-Gruppen
  (Cards/Netzwerk · Hell/Dunkel). Aktiver Button = `.active` (dunkle Pille).
  *In Produktion behalten* (Wunsch des Kunden). Wer ihn entfernen will: `.switcher` löschen,
  `data-bg`/`data-theme` am Hero fest setzen.

### 3. Prozess („Ablauf") – `.process` (dunkel)
- Dunkler Abschnitt (Aubergine). 4er-Grid (`process__grid`), Karten `.step` mit großer
  konturierter Nummer, Titel, Text, Hover-Lift + animierter Bottom-Bar.
- Responsive: 4 → 2 → 1 Spalten.

### 4. Leistungen – `.services` (hell/mist)
- 6-Spalten-Grid mit gemischten Kartengrößen: `card--lg` (span 3), `card--sm` (span 2),
  `card--wide` (span 6, Verlaufskarte mit „W"-SVG). Icon-Kacheln mit Verlauf.

### 5. Preise – `.pricing` (weiß), zentrierter Header
- 3 Pläne: **Starter** (ab 990 €), **Business** (hervorgehoben, dunkel, Badge „Beliebt",
  ab 2.490 €), **Individuell** (Auf Anfrage). Check-Listen, Hover-Lift.

### 6. FAQ – `.faq` (mist)
- `<details>/<summary>`-Akkordeon (`.qa`), Plus-Icon rotiert zu × wenn offen; Höhe via JS
  animiert (max-height). Erstes Item offen.

### 7. CTA „Kontakt" – `.cta` (dunkel)
- Eigenes Canvas (`#ctacanvas`, „W-Weave"-Linien, leicht glühend). Großer Claim, 2 CTAs
  (E-Mail/Telefon).

### 8. Footer – `.footer` (fast-schwarz)
- Marke + Beschreibung, 3 Linkspalten (Navigation/Kontakt/Rechtliches), Copyright-Zeile.

---

## Interactions & Behavior (alles in `components/SiteEffects.jsx`)
- **Nav-Scroll-State**: `scroll` > 30px → `.scrolled`.
- **Scroll-Reveal**: `IntersectionObserver` (threshold .16) setzt `.in` auf `.reveal`; CSS
  blendet ein (`opacity/translateY`, Stagger via `transition-delay` bzw. `data-d`).
- **FAQ-Akkordeon**: `toggle`-Event setzt `max-height` (Transition 0.45s).
- **Hero-Switcher**: Button-Klick → `.active` in der Gruppe umsetzen, `hero.dataset.bg` /
  `hero.dataset.theme` setzen. CSS regelt Sichtbarkeit (`opacity`-Transition der Layer) und
  Theme; die Animations-Loops zeichnen nur, wenn ihr Layer aktiv ist.
- **Partikel-Netzwerk**: `requestAnimationFrame`, 70 Knoten, Linien < 134px, im Dark-Theme
  additiv (`globalCompositeOperation='lighter'`), Farben aus dem Theme.
- **Card-Field**: 11 Karten, langsame Aufwärtsdrift + horizontales Schwingen, Recycling am
  oberen Rand, Tiefe steuert Größe/Opacity/z-index. Nur aktiv bei `data-bg="cards"`.
- **CTA-Canvas**: „W-Weave"-Linienfeld, dezent maus-reaktiv (nur diese Sektion).
- **Magnetische Primary-Buttons**: folgen leicht dem Cursor (`pointermove`).
- **`prefers-reduced-motion`**: Animationen/Transitions werden reduziert/gestoppt.

## State / Data
- Kein echtes State-Management nötig; Zustand lebt in DOM-`data-*`-Attributen am Hero
  (`data-bg`, `data-theme`) und in CSS-Klassen (`.active`, `.in`, `.scrolled`).
- Keine Datenabrufe. Inhalte sind statisch in den Komponenten (Texte/Preise sind Platzhalter
  bzw. vom Kunden genannte Eckdaten: Lieferung 2–4 Wochen, Festpreis, neueste Technologie,
  individuell). Preise (990 / 2.490 €) sind Vorschläge – vor Live-Gang bestätigen.

## Design Tokens (in `globals.css` `:root`)
- **Farben**: `--ink #180a26`, `--aubergine #23103a`, `--aubergine-deep #190a2b`,
  `--grape #3d1655`, `--violet #7b3fbf`, `--violet-bright #9a52e6`, `--lilac #a87fe6`,
  `--lilac-soft #c9aef0`, `--mist #f4eefb`, `--mist-2 #ece1fb`, `--paper #ffffff`,
  `--line rgba(123,63,191,.16)`.
- **Radien**: `--r-sm 14`, `--r-md 22`, `--r-lg 34`, `--r-pill 999`.
- **Layout**: `--maxw 1240px`, Easing `--ease cubic-bezier(.22,1,.36,1)`.
- **Fonts**: `--font-d` Bricolage Grotesque, `--font-b` Manrope, `--font-m` JetBrains Mono
  (in `layout.tsx` via next/font gesetzt).
- **Typo-Skala**: H1 `clamp(2.6rem,6vw,5.5rem)`, H2 `clamp(2rem,4.6vw,3.6rem)`, Lead
  `clamp(1.05rem,1.6vw,1.28rem)`. Hero-Text nie kleiner als Body.

## Assets
- `public/logo.png` — Wortmarke „Website für Unternehmen" (dunkel/lavendel), transparent.
  In Nav (Höhe 38px) und Footer (Höhe 34px). Vom Kunden bereitgestellt.
- Alle Icons sind **Inline-SVGs** (kein Icon-Paket nötig).
- Die Website-Kacheln im Hero sind rein gestylte DIVs (keine Bilder).

## Files
- `reference/Landingpage.html` — maßgebliche Design-Referenz (Ground Truth).
- `nextjs/**` — lauffähige Next.js-Umsetzung (1:1).
- `screenshots/**` — Renderings: 01 Hero (Netzwerk·Hell, Default), 02 Hero (Cards·Dunkel),
  03 Prozess, 04 Leistungen, 05 Preise, 06 FAQ, 07 CTA.
