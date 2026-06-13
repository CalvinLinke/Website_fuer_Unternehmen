import type { Metadata } from 'next';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Sitemap',
  robots: { index: false, follow: false },
};

const pages = [
  {
    name: 'Startseite',
    url: '/',
    desc: 'Überblick über unsere Leistungen, unseren Prozess und unsere Technologie.',
  },
  {
    name: 'Leistungen',
    url: '/leistungen',
    desc: 'Fünf klar definierte Pakete — von der ersten Website bis zur Modernisierung.',
  },
  {
    name: 'Unser Prozess',
    url: '/prozess',
    desc: 'So läuft ein Projekt bei uns ab — von der Erstberatung bis zum Launch.',
  },
  {
    name: 'Technologie',
    url: '/technologie',
    desc: 'Warum wir auf Next.js 15 setzen und was das für Ihre Website bedeutet.',
  },
  {
    name: 'Referenzen',
    url: '/referenzen',
    desc: 'Ausgewählte Kundenprojekte und abgeschlossene Websites.',
  },
  {
    name: 'FAQ',
    url: '/faq',
    desc: 'Häufige Fragen zu Ablauf, Kosten, Technologie und Laufzeiten.',
  },
  {
    name: 'Kontakt',
    url: '/kontakt',
    desc: 'Kostenloses Erstgespräch vereinbaren — wir melden uns innerhalb von 24 Stunden.',
  },
  {
    name: 'Impressum',
    url: '/impressum',
    desc: 'Rechtliche Angaben gemäß § 5 TMG.',
  },
  {
    name: 'Datenschutz',
    url: '/datenschutz',
    desc: 'Datenschutzerklärung gemäß DSGVO.',
  },
];

export default function SitemapPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="subpage-hero">
          <div className="wrap subpage-hero__inner">
            <span className="eyebrow" style={{ background: 'none', border: 'none', backdropFilter: 'none', boxShadow: 'none', padding: '0' }}>
              <span className="dot"></span>
              <span className="mono">Übersicht</span>
            </span>
            <h1>Seitenverzeichnis</h1>
            <p className="lead" style={{ maxWidth: '48ch' }}>Alle Seiten dieser Website auf einen Blick.</p>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: '64px', paddingBottom: '96px' }}>
          <div className="wrap" style={{ maxWidth: '720px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0' }}>
              {pages.map((p, i) => (
                <li key={p.url} style={{ borderTop: i === 0 ? '1px solid var(--line)' : 'none', borderBottom: '1px solid var(--line)', padding: '20px 0', display: 'flex', gap: '24px', alignItems: 'baseline' }}>
                  <a href={p.url} style={{ fontWeight: 700, color: 'var(--ink)', textDecoration: 'none', fontSize: '1rem', minWidth: '160px', flexShrink: 0 }}>
                    {p.name}
                  </a>
                  <span style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.5 }}>{p.desc}</span>
                  <span className="mono" style={{ marginLeft: 'auto', fontSize: '.75rem', color: 'var(--purple)', flexShrink: 0 }}>{p.url}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
