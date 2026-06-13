'use client';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";
import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

const projects = [
  {
    img: '/referenzen/cada-invest.jpg',
    name: 'CADA Invest',
    url: 'https://www.cada-invest.de',
    tag: { de: 'Immobilien · Sachsen', en: 'Real Estate · Saxony' },
    desc: {
      de: 'Professioneller Immobilienankäufer mit Fokus auf Wohn- und Gewerbeimmobilien in Sachsen. Klare Positionierung, starke Conversion-Architektur.',
      en: 'Professional property buyer focused on residential and commercial real estate in Saxony. Clear positioning, strong conversion architecture.',
    },
  },
  {
    img: '/referenzen/glasfaser-fuer-unternehmen.jpg',
    name: 'Glasfaser für Unternehmen',
    url: 'https://www.glasfaser-fuer-unternehmen.de',
    tag: { de: 'Telekommunikation · B2B', en: 'Telecommunications · B2B' },
    desc: {
      de: 'B2B-Plattform für maßgeschneiderte Glasfaserlösungen. Standortprüfung direkt auf der Startseite — Leadgenerierung von Tag eins.',
      en: 'B2B platform for tailored fibre-optic solutions. Location check directly on the homepage — lead generation from day one.',
    },
  },
  {
    img: '/referenzen/immobilienpartner-sachsen.jpg',
    name: 'Immobilienpartner Sachsen',
    url: 'https://www.immobilienpartner-sachsen.de',
    tag: { de: 'Immobilien · Dresden', en: 'Real Estate · Dresden' },
    desc: {
      de: 'Regionaler Immobilienmakler in Dresden und Umgebung. Integrierter Bewertungsassistent sorgt für qualifizierte Anfragen direkt aus dem Hero.',
      en: 'Regional estate agent in Dresden and surroundings. Integrated valuation wizard generates qualified enquiries directly from the hero.',
    },
  },
];


export default function Referenzen() {
  const { lang } = useLanguage();
  const t = translations[lang].pages.referenzen;

  return (
    <>
      <Nav />
      <main>
        <section className="subpage-hero">
          <div className="wrap subpage-hero__inner">
            <span className="eyebrow" style={{ background: 'none', border: 'none', backdropFilter: 'none', boxShadow: 'none', padding: '0' }}>
              <span className="dot"></span>
              <span className="mono">{t.eyebrow}</span>
            </span>
            <h1>{t.h1a} <span className="grad">{t.h1b}</span></h1>
            <p className="lead" style={{ maxWidth: '52ch' }}>{t.lead}</p>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: '64px', paddingBottom: '80px' }}>
          <div className="wrap">
            <div className="ref__grid">
              {projects.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ref__card ref__card--real"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="ref__card__img"
                    loading="lazy"
                  />
                  <div className="ref__card__body">
                    <p className="ref__card__name">{p.name}</p>
                    <span className="ref__card__sep" aria-hidden="true" />
                    <p className="ref__card__tag">{p.tag[lang]}</p>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '72px' }}>
              <p style={{ color: 'var(--muted)', marginBottom: '24px', maxWidth: '48ch', margin: '0 auto 24px' }}>{t.ctaLead}</p>
              <a className="btn btn--primary" href="/kontakt">
                {t.ctaBtn}
                <svg className="arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
