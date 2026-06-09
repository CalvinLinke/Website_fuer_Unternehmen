# DESIGN.md — Design-System "Website für Unternehmen"

> **Kalibrierung: Bauplan-Ästhetik + W-Liniensignatur** — Abgelöst wurde die ursprüngliche
> BloomFi-Screenshot-Herleitung. Das neue System behält den Marken-Anker Lavendel/Violett
> (`#4F1375`/`#AD5FF2`) und die Typografie-Paarung (Fraunces + Inter), ergänzt diese jedoch
> um eine eigenständige Bildsprache: **Bauplan-Vokabular** (Maßlinien, Eckmarken, Raster-Guides,
> Browser-Rahmen, Mono-Annotationen) als konzeptionellen Rahmen — eine Web-Agentur, die zeigt
> wie präzise sie arbeitet, statt es nur zu behaupten. Die **W-Linie** aus dem Logo tritt als
> seltene Signatur auf, nicht als Muster.
>
> **Ausführungsdisziplin**: "Reduziert & technisch" ist das WIE (Hairlines > Schatten,
> Radien knapper, Farbe konzentrierter), die Bauplan-Ästhetik ist das WAS.
>
> **Token-Implementierung**: CSS-first via `@theme inline` in `globals.css` (Tailwind v4-Konvention).
> Alle Werte unten gelten verbindlich — keine Abweichung ohne Eintrag hier.

---

## FARBEN

### Marken-Lila (verbindlich, aus Logo.png gesampelt)
| Token | Hex | Verwendung |
|---|---|---|
| `--color-violet` | `#4F1375` | Primärmarke; Buttons, Eyebrow-Labels, Bauplan-Akzente, Headlines auf hellem Grund |
| `--color-lavender` | `#AD5FF2` | Akzentmarke; Hover-Glanz, Maß-Annotationen, W-Linien-Gradient-Ende |

### Basis
| Token | Hex | Verwendung |
|---|---|---|
| `--color-cream` | `#F8F4EF` | Seiten-Grundfläche |
| `--color-cream-deep` | `#EFE7DD` | Alternierende Sektionsflächen, Trennzonen |
| `--color-line` | `#E2D8CC` | Haarlinien/Borders auf Creme-Flächen, Scroll-Indikator |

### Dunkel
| Token | Hex | Verwendung |
|---|---|---|
| `--color-ink` | `#1B1424` | Dunkle Cards, Footer |
| `--color-ink-soft` | `#2C2238` | Eingebettete Flächen / Hover auf `--color-ink` |
| `--color-ink-line` | `#3C3148` | Borders/Trenner auf dunklen Flächen — primäres Trennmittel für Cards |

### Lavendel-Tönung (gezielt — nicht flächig)
| Token | Hex | Verwendung |
|---|---|---|
| `--color-lavender-soft` | `#E6DAF6` | Dezente Flächen-Akzente, onDark-Button-Hover; **nicht** als breit ausgerollte Wash-Fläche |
| `--color-lavender-mist` | `#F2EBFA` | Sekundärer Button-Hover auf hellem Grund |

### Bauplan-Markierungen (neu)
| Token | Wert | Verwendung |
|---|---|---|
| `--color-grid` | `rgba(79, 19, 117, 0.14)` | Raster-Guides, Maßlinien, Eckmarken — markenfarben statt Blaupausen-Blau-Klischee; immer ohne Opazitätsmodifikator verwenden (Alpha ist eingebaut) |

### Text
| Token | Hex | Kontrast |
|---|---|---|
| `--color-text` | `#241B30` | AAA auf `--color-cream` |
| `--color-text-muted` | `#6F6478` | AA auf `--color-cream` |
| `--color-text-on-ink` | `#F4EFF8` | AAA auf `--color-ink` |
| `--color-text-on-ink-muted` | `#B6AAC4` | AA auf `--color-ink` |

### Gradient (sparsam — Akzentdetails, keine Flächen)
`linear-gradient(135deg, var(--color-violet) 0%, var(--color-lavender) 100%)` — W-Linie,
Eyebrow-Akzentstriche, Stat-Badge-Ringe. Niemals als Sektionshintergrund.

---

## TYPOGRAFIE

**Display-Font: "Fraunces"** — Fraunces (variable, Display-Serif) trägt Headlines und Zitate.
Optische Größenachse wirkt bei großen Graden elegant und reduziert zugleich — kein Widerspruch
zur technischen Ausführungsdisziplin, sondern Kontrast zu ihr.

**UI-Font: "Inter"** — Body, Labels, Buttons, Interface-Elemente.

**Mono-Accent: "JetBrains Mono"** — ausschließlich für Bauplan-Vokabular: Maß-Annotationen,
Seiten-Indikatoren, Prozess-Nummern, Referenz-Beschriftungen. Trägt die "technische Handschrift"
des Systems. Eingebunden via `next/font/google`, CSS-Variable `--font-jetbrains-mono`.

| Ebene | Font | Größe | Gewicht | Tracking | Line-Height |
|---|---|---|---|---|---|
| Display (Hero) | Fraunces | `clamp(2.75rem,9vw,7.5rem)` | ~400 (reaktiv) | scroll-driven | `0.98` |
| H1 Unterseiten | Fraunces | `clamp(2.25rem,5vw,3.25rem)` | 440 | `-0.015em` | `1.15` |
| H2 Sektionen | Fraunces | `clamp(1.875rem,4vw,2.75rem)` | 460 | `-0.01em` | `1.08` |
| H3 Cards | Fraunces | `1.5rem`–`1.625rem` | 460 | — | `1.2` |
| Body groß | Inter | `1.0625rem`–`1.125rem` | 400 | `0` | `1.65` |
| Body | Inter | `1rem` | 400 | `0` | `1.75` |
| Eyebrow/Label | Inter | `0.8125rem` | 600, UPPERCASE | `0.14em` | `1` |
| Button | Inter | `0.9375rem` | 600 | `0.01em` | `1` |
| Mono-Annotation | JetBrains Mono | `0.5625rem`–`0.6875rem` | 400 | `0.10em`–`0.16em` | `1` |

---

## ABSTÄNDE & GRID

- **Container-Max-Width:** `1240px`, seitliches Padding `clamp(1.25rem, 5vw, 3rem)`
- **Section-Padding (Y-Achse):** `clamp(4.5rem, 9vw, 7.5rem)` Standard
- **Card-Innenabstand:** `clamp(1.75rem, 4vw, 2.5rem)`
- **Grid-Gap:** `1.5rem` mobil, `2rem` Desktop; Dreiergrids auf `lg` mit `gap-8`

---

## RADIEN

| Token | Wert | Anmerkung |
|---|---|---|
| `--radius-card` | `0.75rem` | War `1.5rem` — halbiert; wirkt "gezeichnet" statt "weich-rund" |
| `--radius-input` | `0.625rem` | War `0.875rem` — präziser, formaler |
| `--radius-pill` | `999px` | Buttons bleiben vollständig gerundet — bewusstes Markenelement |

---

## SCHATTEN

**Philosophie**: Linien und Borders sind das primäre Trennmittel (passt konzeptionell zum
Bauplan-Vokabular — Linien sind das Leitmedium). Schatten treten nur dort auf, wo echte
Elevation gemeint ist, dann mit kontrolliertem, engem Profil.

| Token | Wert | Verwendung |
|---|---|---|
| `--shadow-button` | `0 4px 14px -6px rgba(79,19,117,0.3)` | Primary-Button normal (war 8/24) |
| `--shadow-soft` | `0 14px 36px -18px rgba(79,19,117,0.16)` | Leichte Elevation, sparsam (war 20/60) |
| `--shadow-lift` | `0 20px 50px -20px rgba(79,19,117,0.22)` | Button-Hover-Lift (war 28/70) |

**Nicht** als Card-Grundschatten einsetzen — `border border-ink-line` (dunkle Cards) oder
`border border-line` (helle Cards) übernehmen die Trennfunktion.

---

## BAUPLAN-VOKABULAR (Designsprache — sparsam und bedeutungstragend einsetzen)

Jedes dieser Elemente leiht sich die visuelle Sprache von Design- und Entwicklungswerkzeugen.
Die Umsetzung in Markenviolett statt Blaupausen-Blau macht sie unverwechselbar.

### Maß-Annotationen
Kleine Mono-Beschriftungen (JetBrains Mono, 9–11px, `text-violet/40` oder `text-lavender/30`)
nahe Sektionsgrenzen, Kanten oder Rahmen. Erscheinen wie Inspector-Labels. Beispiele:
`01 — Startseite`, `1240px`, `clamp(2rem, 4vw, 3rem)`.

### Ausrichtungslinien (Hairlines)
`h-px` oder `w-px` Elemente in `bg-grid` — kennzeichnen Container-Kanten, Sektionsgrenzen
oder wichtige Layout-Achsen. Immer absolut positioniert, `aria-hidden`, `pointer-events-none`.

### Eckmarken (Corner Brackets)
L-förmige Eckklammern (`h-3 w-3 border-l border-t border-grid` o.ä.) an Karten- oder
Sektionsecken. Klassisches Registriermarken-Signal. Auf dunklen Cards: `border-lavender/20`,
Hover: `border-lavender/35`. Auf hellen Flächen: `border-grid` direkt.

### W-Liniensignatur
Siehe eigenen Abschnitt unten. Einsatz: max. 2–3× pro vollständiger Seitenansicht.

### Browser-Rahmen
Für Showcase-Inhalte (Referenzen, Leistungsbeispiele): knapper Fenster-Chrome (Punkte +
Adresszeile) in `border-line` / `bg-cream-deep`. Direkte Brücke zum Produkt "Website".

### Annotations-Callouts
Linie-plus-Label wie technische Zeichnungen — für Kennzahlen, Prozessschritte, Leistungsmerkmale.
Linie: `w-px bg-grid`, Label: `font-mono text-[0.625rem]`.

---

## W-LINIENSIGNATUR

Die fließende Dreifach-Linie aus dem Logo (`Logo.png` — triple-parallel ribbon mit
Rounded-Rectangular Terminals an jedem Peak) als abstrahierter Vektor-Pfad.
Implementiert in `src/components/SignatureLine.tsx`.

**Einsatzregeln** (Knappheit ist der Wirkungsmechanismus):
- Max. 2–3× pro vollständige Seitenansicht (alle Seiten zusammengenommen)
- Platzierung: Hero-Abschnitt (unter H1), ausgewählte Sektionsübergänge
- Animiert: `mode='view'` (whileInView) für Sektionen unter der Falz;
  `mode='animate'` für den Hero (zeitgesteuert, synchronisiert mit Entrance-Animation)
- Größe: `width={160–220}` für Hero-Kontext, `width={120–160}` für Sektions-Akzente
- Farbverlauf: `--color-violet → --color-lavender` horizontal via SVG gradient
- Opacity: 0.65–0.8 (nicht voll opak — Signatur, kein Strukturelement)

---

## KOMPONENTEN-STIL

### Buttons
- **Form:** `border-radius: 999px` (Pill) — bleibt als modernes Markenelement
- **Primär:** `bg-violet text-cream`, Hover: `bg-lavender` + `translateY(-2px)` + `shadow-lift`
- **Sekundär:** `border-[1.5px] border-text bg-transparent`, Hover: `bg-lavender-mist`
- **Auf Dunkel:** `bg-cream text-ink`, Hover: `bg-lavender-soft`
- **Fokus-Ring:** `outline-violet outline-2 outline-offset-2` (precision detail, nicht box-shadow)
- **Schatten:** nur auf Primary-Button (`shadow-button` normal, `shadow-lift` hover)

### Cards (dunkel — ServiceCard, CaseStudyCard)
- `rounded-[var(--radius-card)]` (0.75rem), `border border-ink-line`, `bg-ink`
- **Kein** `shadow-soft` als Grundschatten — `border border-ink-line` ist das Trennmittel
- Hover: `translateY(-4px)`, kein Schatten-Aufbau
- Eckmarken (Bauplan): `border-l border-t border-lavender/20` Klammern oben-links/-rechts
- Seriennummer: `font-display text-[3.25rem] text-text-on-ink/10` als dekorativer Hintergrund

### Cards (hell — Testimonial, Stat-Badge-Kontext)
- `rounded-[var(--radius-card)]`, `border border-line`, `bg-cream` oder `bg-cream-deep`
- Kein Schatten — Trennmittel ist die Border

### Navbar
- Transparent → `bg-cream/90 backdrop-blur-md border-b border-line` beim Scrollen
- Höhe: `5.5rem` → `4rem` beim Scrollen

### Footer
- `bg-cream-deep`, `border-t border-line`, mehrspaltig

### Inputs (Kontaktformular)
- `border-[1.5px] border-line`, `rounded-[var(--radius-input)]` (0.625rem)
- Fokus: `border-violet ring-4 ring-lavender-soft/60`

---

## LAYOUT-PRINZIPIEN

- **Bauplan-Rahmen**: Horizontale Hairlines + Eckmarken rahmen wichtige Sektionen
  (insbesondere Hero). Setzt das zugrundeliegende Raster sichtbar in Szene — die
  Maßlinien haben einen echten Bezug, wenn das Raster wirklich stringent ist
- **Whitespace**: großzügig; Dichte steigt nur gezielt (Prozess-Timeline, FAQ)
- **Sektionswechsel**: Flächenwechsel Creme ↔ Ink; keine weichen Blob-Dekorationen
  (die Bauplan-Strukturelemente übernehmen die atmosphärische Funktion)
- **Gradient-Blobs entfernen**: Die bisherigen `radial-gradient opacity-[0.1] blur-[120px]`
  Blobs weichen den strukturellen Bauplan-Elementen
- **Asymmetrische Proportionen prüfen**: `lg:grid-cols-[0.85fr_1.15fr]` und ähnliche
  freie Proportionen auf bewusstere Verhältnisse (60/40, golden ratio) kalibrieren

---

## ATMOSPHÄRE

- **Primäres Trennmittel**: Linien (1px borders), nicht Schatten
- **Schatten**: eng, kontrolliert, violett-getönt — nur wo Elevation semantisch bedeutsam ist
- **Glass-Cards**: Cards und Containers verwenden `.card-glass` — near-transparent white (`rgba(255,255,255,0.055)`), `blur(22px) saturate(160%)`, weißer 1px-Rand, inset top-highlight. Scharfes, echtes Glas statt getönte Lavender-Wäsche. Navbar-blur bleibt eigenständig.
- **Dekorationselemente**: Bauplan-Vocabulary ersetzt Gradient-Blobs
- **Visuelle Dichte**: niedrig–mittel, viel Atemraum

---

## INTERAKTIONS-MUSTER

- **Hover (Cards):** `translateY(-4px)`, `250ms ease-out` — kein Schatten-Aufbau
- **Hover (Buttons):** Farbverschiebung + Mikro-Lift, `200ms`
- **Eckmarken Hover:** `border-lavender/20 → border-lavender/35`, `300ms`
- **Scroll-Entrance:** `opacity + translateY(16–24px) → 0`, gestaffelt `~80ms`
- **W-Linie:** `pathLength: 0 → 1`, `1.5s` ease-out beim Erscheinen im Viewport
- **Hero:** Cursor-reaktive Typografie (weight/opacity) + scroll-driven blur/focus — bleibt
  als eigene Choreografie; keine generische Fade-In-Wiederholung
