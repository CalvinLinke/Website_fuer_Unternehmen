'use client';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang].services;

  return (
    <section className="sec services" id="leistungen" data-screen-label="Leistungen">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-tag"><span className="num">{t.tag}</span></span>
          <h2>{t.h2a} <em>{t.h2b}</em></h2>
          <p>{t.lead}</p>
        </div>
        <div className="serv__grid">
          <article className="card card--lg reveal">
            <div className="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 18v3M16 18v3M6 21h12" /></svg></div>
            <h3>{t.card1h}</h3>
            <p>{t.card1p}</p>
          </article>
          <article className="card card--sm reveal">
            <div className="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z" /></svg></div>
            <h3>{t.card2h}</h3>
            <p>{t.card2p}</p>
          </article>
          <article className="card card--sm reveal">
            <div className="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m13 2-3 7h5l-3 7" /><circle cx="12" cy="12" r="9" opacity=".4" /></svg></div>
            <h3>{t.card3h}</h3>
            <p>{t.card3p}</p>
          </article>
          <article className="card card--lg reveal">
            <div className="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg></div>
            <h3>{t.card4h}</h3>
            <p>{t.card4p}</p>
          </article>
          <article className="card card--wide reveal">
            <div className="ic" style={{ flex: 'none', width: 64, height: 64, borderRadius: 18 }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3>{t.card5h}</h3>
              <p>{t.card5p}</p>
            </div>
          </article>
        </div>
        <div className="sec-more reveal">
          <a href="/leistungen" className="sec-more__link">
            {t.moreLink}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
