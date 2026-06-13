'use client';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";
import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

const cardParams = ['fokus', 'komplett', 'marke', 'redesign', 'redaktion'];

const iconA = [
  <svg key="a1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  <svg key="a2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4M2 10h20" /></svg>,
  <svg key="a3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h4" /></svg>,
];
const iconB = [
  <svg key="b1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="m9 12 2 2 4-4" /></svg>,
  <svg key="b2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>,
];

export default function Leistungen() {
  const { lang } = useLanguage();
  const t = translations[lang].pages.leistungen;

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

        <section className="sec" style={{ paddingTop: '72px', paddingBottom: '100px' }}>
          <div className="wrap">
            <div className="offerings__group">
              <h3 className="offerings__label">{t.groupA}</h3>
              <div className="leist__grid leist__grid--3">
                {t.cards.slice(0, 3).map((card, i) => (
                  <article className="leist__card" key={card.badge}>
                    <div className="leist__card-head">
                      <div className="ic">{iconA[i]}</div>
                      <span className="leist__label">{card.badge}</span>
                    </div>
                    <h3>{card.title}</h3>
                    <p className="offerings__sub" style={{ color: 'var(--muted)', fontStyle: 'italic', fontSize: '.9rem', margin: '0 0 12px' }}>{card.sub}</p>
                    <ul className="offerings__list">
                      {card.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                    <a className="sec-more__link" href={`/kontakt?leistung=${cardParams[i]}`} style={{ marginTop: 'auto', paddingTop: '20px' }}>
                      {t.cardCta}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
                    </a>
                  </article>
                ))}
              </div>
            </div>

            <div className="offerings__group" style={{ marginTop: '60px' }}>
              <h3 className="offerings__label">{t.groupB}</h3>
              <div className="leist__grid leist__grid--2">
                {t.cards.slice(3).map((card, i) => (
                  <article className="leist__card" key={card.badge}>
                    <div className="leist__card-head">
                      <div className="ic">{iconB[i]}</div>
                      <span className="leist__label leist__label--b">{card.badge}</span>
                    </div>
                    <h3>{card.title}</h3>
                    <p className="offerings__sub" style={{ color: 'var(--muted)', fontStyle: 'italic', fontSize: '.9rem', margin: '0 0 12px' }}>{card.sub}</p>
                    <ul className="offerings__list">
                      {card.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                    <a className="sec-more__link" href={`/kontakt?leistung=${cardParams[3 + i]}`} style={{ marginTop: 'auto', paddingTop: '20px' }}>
                      {t.cardCta}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
                    </a>
                  </article>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--mist)', borderRadius: 'var(--r-lg)', padding: '48px 40px', marginTop: '80px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(1.2rem,2vw,1.6rem)', marginBottom: '12px' }}>{t.ctaTitle}</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '28px', maxWidth: '50ch', marginInline: 'auto', lineHeight: 1.7 }}>{t.ctaLead}</p>
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
