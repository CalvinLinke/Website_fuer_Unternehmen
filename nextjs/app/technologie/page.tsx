'use client';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";
import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

const techCards = [
  {
    name: { de: 'Next.js 15', en: 'Next.js 15' },
    badge: { de: 'Framework', en: 'Framework' },
    benefit: { de: 'Sofort sichtbar — keine Ladezeit.', en: 'Instantly visible — no loading time.' },
    description: { de: 'Next.js rendert Ihre Website bereits auf dem Server, bevor der Browser überhaupt anfängt zu laden. Das Ergebnis: Ihre Seite ist innerhalb von Millisekunden vollständig sichtbar — für Nutzer und für Google.', en: 'Next.js renders your website on the server before the browser even starts loading. The result: your page is fully visible within milliseconds — for users and for Google.' },
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m13 2-3 7h5l-3 7" /><circle cx="12" cy="12" r="9" opacity=".4" /></svg>,
  },
  {
    name: { de: 'React 19', en: 'React 19' },
    badge: { de: 'UI-Bibliothek', en: 'UI Library' },
    benefit: { de: 'Interaktiv ohne Geschwindigkeitsverlust.', en: 'Interactive without speed loss.' },
    description: { de: 'React 19 ermöglicht interaktive Elemente — Formulare, Animationen, Menüs — die flüssig und schnell reagieren, ohne die Ladeperformance zu beeinträchtigen.', en: 'React 19 enables interactive elements — forms, animations, menus — that respond smoothly and quickly, without affecting load performance.' },
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1c-4.4 0-8 4-8 11s3.6 11 8 11 8-4 8-11S16.4 1 12 1z" opacity=".4" /></svg>,
  },
  {
    name: { de: 'TypeScript', en: 'TypeScript' },
    badge: { de: 'Sprache', en: 'Language' },
    benefit: { de: 'Weniger Fehler, bessere Qualität.', en: 'Fewer errors, better quality.' },
    description: { de: 'TypeScript erkennt Tippfehler und logische Fehler bereits beim Schreiben des Codes — nicht erst, wenn Ihre Website live ist. Das Ergebnis ist stabilerer, wartbarer Code.', en: 'TypeScript detects typos and logical errors while writing the code — not after your website is live. The result is more stable, maintainable code.' },
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4h16v3M9 20h6M12 4v16" /></svg>,
  },
  {
    name: { de: 'Statische Auslieferung', en: 'Static Delivery' },
    badge: { de: 'Infrastruktur', en: 'Infrastructure' },
    benefit: { de: 'Weltweite Ladezeiten unter 1 Sekunde.', en: 'Worldwide load times under 1 second.' },
    description: { de: 'Ihre Website wird als fertige HTML-Dateien auf einem globalen CDN ausgeliefert — von dem Server, der Ihrem Besucher am nächsten ist. Kein Datenbankaufruf, kein Serverrendering beim Seitenaufruf.', en: 'Your website is delivered as ready-made HTML files on a global CDN — from the server closest to your visitor. No database call, no server rendering on page load.' },
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  },
  {
    name: { de: 'Core Web Vitals', en: 'Core Web Vitals' },
    badge: { de: 'Performance', en: 'Performance' },
    benefit: { de: 'Lighthouse-Score bis 100 — messbar besser.', en: 'Lighthouse score up to 100 — measurably better.' },
    description: { de: 'Google bewertet Websites anhand der Core Web Vitals: Ladezeit, Interaktivität und visuelle Stabilität. Unsere Websites sind von Anfang an so gebaut, dass sie in allen drei Kategorien hervorragend abschneiden.', en: 'Google evaluates websites using Core Web Vitals: load time, interactivity, and visual stability. Our websites are built from the start to perform excellently in all three categories.' },
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>,
  },
  {
    name: { de: 'HTTPS & Security-Header', en: 'HTTPS & Security Headers' },
    badge: { de: 'Sicherheit', en: 'Security' },
    benefit: { de: 'Sicher — direkt out of the box.', en: 'Secure — straight out of the box.' },
    description: { de: 'Jede Website wird mit SSL-Verschlüsselung ausgeliefert und erhält moderne Security-Header, die Angriffe wie XSS oder Clickjacking verhindern. Kein Patch-Prozess, keine verwundbaren Plugins.', en: 'Every website comes with SSL encryption and modern security headers that prevent attacks like XSS or clickjacking. No patching process, no vulnerable plugins.' },
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
];

export default function Technologie() {
  const { lang } = useLanguage();
  const t = translations[lang].pages.technologie;

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
            <p className="lead" style={{ maxWidth: '58ch' }}>{t.lead}</p>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: '56px', paddingBottom: '0' }}>
          <div className="wrap">
            <blockquote style={{ borderLeft: '4px solid var(--violet)', paddingLeft: '28px', margin: '0 0 64px', maxWidth: '700px' }}>
              <p style={{ fontSize: 'clamp(1.1rem,2vw,1.35rem)', fontFamily: 'var(--font-d)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.45, margin: '0 0 10px' }}>{t.quote}</p>
              <cite style={{ fontSize: '.85rem', color: 'var(--muted)', fontStyle: 'normal' }}>{t.quoteSource}</cite>
            </blockquote>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: '0', paddingBottom: '80px' }}>
          <div className="wrap">
            <div className="tech__grid">
              {techCards.map((card) => (
                <article className="tech__card" key={card.name.de}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="ic">{card.icon}</div>
                    <span className="mono" style={{ fontSize: '.75rem', color: 'var(--muted)', background: 'var(--paper)', padding: '3px 8px', borderRadius: '20px' }}>{card.badge[lang]}</span>
                  </div>
                  <h3>{card.name[lang]}</h3>
                  <p style={{ fontWeight: 600, color: 'var(--violet)', fontSize: '.88rem', margin: '0 0 6px' }}>{card.benefit[lang]}</p>
                  <p>{card.description[lang]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: '72px', paddingBottom: '80px', borderTop: '1px solid var(--line)' }}>
          <div className="wrap">
            <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
              <span className="mono" style={{ fontSize: '.75rem', color: 'var(--purple)', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>{lang === 'de' ? 'Echte Messwerte' : 'Real measurements'}</span>
              <h2 style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(1.5rem,2.5vw,2rem)', margin: '10px 0 12px' }}>
                {lang === 'de' ? 'Lighthouse-Ergebnis eines Kundenprojekts' : 'Lighthouse result from a client project'}
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.65, fontSize: '.95rem' }}>
                {lang === 'de'
                  ? 'Das folgende Ergebnis wurde direkt von Google PageSpeed Insights für eine unserer fertiggestellten Websites gemessen — ungefiltert, unbearbeitet.'
                  : 'The following result was measured directly by Google PageSpeed Insights for one of our completed websites — unfiltered, unedited.'}
              </p>
            </div>
            <div className="lh-screenshot-wrap">
              <img
                src="/lighthouse-result.jpg"
                alt="Google PageSpeed Insights Ergebnis: 100 Leistung, 94 Barrierefreiheit, 100 Best Practices, 100 SEO"
                className="lh-screenshot"
              />
              <p className="lh-caption">
                {lang === 'de'
                  ? 'Google PageSpeed Insights · immobilienpartner-sachsen.de · Desktop · 13.06.2026'
                  : 'Google PageSpeed Insights · immobilienpartner-sachsen.de · Desktop · 13 Jun 2026'}
              </p>
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'var(--paper)', paddingTop: '72px', paddingBottom: '80px', borderTop: '1px solid var(--line)' }}>
          <div className="wrap" style={{ maxWidth: '760px' }}>
            <h2 style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(1.5rem,2.5vw,2rem)', marginBottom: '24px' }}>{t.wpTitle}</h2>
            <p style={{ color: 'rgba(18,18,18,.72)', lineHeight: 1.75, marginBottom: '16px' }}>{t.wp1}</p>
            <p style={{ color: 'rgba(18,18,18,.72)', lineHeight: 1.75, marginBottom: '32px' }}>{t.wp2}</p>
            <p style={{ color: 'rgba(18,18,18,.72)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '40px' }}>{t.wp3}</p>
            <a className="btn btn--primary" href="mailto:info@website-fuer-unternehmen.de">
              {t.ctaBtn}
              <svg className="arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
