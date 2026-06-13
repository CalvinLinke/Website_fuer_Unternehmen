# Setup – Next.js (App Router) + TypeScript + Tailwind v4

Dieses `nextjs/`-Verzeichnis ist eine **lauffähige 1:1-Umsetzung** des HTML-Entwurfs.
Zwei Wege – wähle einen.

---

## Variante A (empfohlen): in ein frisches Next.js-Projekt kopieren

```bash
# 1) Projekt scaffolden (App Router, TypeScript, Tailwind, ESLint)
npx create-next-app@latest meine-website
#   -> TypeScript: Yes
#   -> ESLint: Yes
#   -> Tailwind CSS: Yes        (liefert Tailwind v4)
#   -> src/ directory: No
#   -> App Router: Yes
#   -> Turbopack: (egal)
#   -> import alias: default (@/*)

cd meine-website

# 2) Dateien aus diesem Paket übernehmen (überschreibt die Platzhalter):
#    - app/layout.tsx
#    - app/page.tsx
#    - app/globals.css
#    - components/*            (Nav, Hero, Process, Services, Pricing, Faq, Cta, Footer, SiteEffects)
#    - public/logo.png

# 3) Starten
npm run dev
# http://localhost:3000
```

Das war’s. Es werden **keine zusätzlichen Pakete** gebraucht – alles läuft mit den
Defaults von `create-next-app` (Next 15, React 19, Tailwind v4). Fonts kommen über
`next/font/google` (Bricolage Grotesque + Manrope + JetBrains Mono), kein manuelles
Einbinden nötig.

---

## Variante B: dieses Verzeichnis direkt nutzen

```bash
cd nextjs
npm install
npm run dev
```

(`next-env.d.ts` wird beim ersten `next dev` automatisch erzeugt.)

---

## Wichtig zu verstehen

- **`app/globals.css`** enthält das komplette Design als **1:1-portiertes CSS** (Tokens als
  CSS-Variablen, alle Keyframes, Verläufe, Schatten, responsives Verhalten). Oben steht
  `@import "tailwindcss";` – Tailwind ist also voll verfügbar, aber das pixelgenaue Aussehen
  kommt bewusst aus diesem Stylesheet, nicht aus Utility-Klassen. So bleibt es **exakt**.
- **`components/SiteEffects.jsx`** (`"use client"`) enthält die **komplette Interaktions-/
  Animationslogik** 1:1: Partikel-Netzwerk (`#netCanvas`), driftende Website-Cards
  (`#cardField`), den CTA-Canvas, Scroll-Reveal, FAQ-Akkordeon, Nav-Scroll-State,
  magnetische Buttons und den Hintergrund-/Theme-Switcher. Wird einmal am Seitenende
  gerendert und greift per `querySelector` auf das Markup zu.
- **Standardvariante:** `Hero.tsx` ist auf **Netzwerk · Hell** gesetzt
  (`data-bg="network" data-theme="light"`). Über den Switcher kann der Besucher live
  umschalten (Cards/Netzwerk × Hell/Dunkel).

## Tailwind v3 statt v4?

Falls dein Setup Tailwind **v3** nutzt:
- In `app/globals.css` die erste Zeile `@import "tailwindcss";` ersetzen durch:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- `postcss.config.mjs` auf das v3-Plugin umstellen (`tailwindcss: {}`, `autoprefixer: {}`)
  und `tailwind.config.js` mit `content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"]`
  anlegen. Das gesamte restliche Design-CSS bleibt unverändert.

## Hinweise

- Logos/Bilder werden bewusst mit `<img>` eingebunden (1:1). Wer `next/image` möchte,
  kann das pro Stelle umstellen – Optik bleibt gleich.
- `SiteEffects.jsx` hat einen `window.__wfuEffects`-Guard gegen Doppel-Init im React
  StrictMode (Dev). Für Mehrseiten-Apps ggf. in echte Cleanup-Funktionen umbauen.
