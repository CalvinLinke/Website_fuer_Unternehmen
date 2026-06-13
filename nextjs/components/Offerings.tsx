'use client';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

const iconA = [
  <svg key="a1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  <svg key="a2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4M2 10h20" /></svg>,
  <svg key="a3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h4" /></svg>,
];

const iconB = [
  <svg key="b1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="m9 12 2 2 4-4" /></svg>,
  <svg key="b2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>,
];

export default function Offerings() {
  const { lang } = useLanguage();
  const t = translations[lang].offerings;

  return (
    <section className="sec offerings" id="angebot" data-screen-label="Angebot">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-tag"><span className="num">{t.tag}</span></span>
          <h2>{t.h2a} <em>{t.h2b}</em></h2>
          <p>{t.lead}</p>
        </div>

        <div className="offerings__group reveal">
          <h3 className="offerings__label">
            <span className="offerings__badge">A</span>
            {t.groupA}
          </h3>
          <div className="offerings__grid offerings__grid--3">
            {t.a.map((o, i) => (
              <article className="card offerings__card" key={o.title}>
                <div className="ic">{iconA[i]}</div>
                <h4>{o.title}</h4>
                <p className="offerings__sub">{o.sub}</p>
                <ul className="offerings__list">
                  {o.points.map((p) => (<li key={p}>{p}</li>))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="offerings__group reveal">
          <h3 className="offerings__label">
            <span className="offerings__badge offerings__badge--b">B</span>
            {t.groupB}
          </h3>
          <div className="offerings__grid offerings__grid--2">
            {t.b.map((o, i) => (
              <article className="card offerings__card" key={o.title}>
                <div className="ic">{iconB[i]}</div>
                <h4>{o.title}</h4>
                <p className="offerings__sub">{o.sub}</p>
                <ul className="offerings__list">
                  {o.points.map((p) => (<li key={p}>{p}</li>))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <a className="btn btn--primary" href="mailto:info@website-fuer-unternehmen.de">
            {t.ctaBtn}
            <svg className="arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
          </a>
          <a href="/angebot" className="sec-more__link">
            {t.moreLink}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
