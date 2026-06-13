'use client';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

export default function Cta() {
  const { lang } = useLanguage();
  const t = translations[lang].cta;

  return (
    <section className="cta" id="kontakt" data-screen-label="Kontakt">
      <div className="wrap cta__inner reveal">
        <h2>
          {t.h2a}
          <br />
          <span className="grad">{t.h2b}</span>
        </h2>
        <p>{t.lead}</p>
        <div className="hero__cta" style={{ justifyContent: 'center' }}>
          <a className="btn btn--primary" href="/kontakt">
            {t.btn1}
            <svg className="arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
          </a>
          <a className="btn btn--ghost" style={{ background: 'rgba(255,255,255,.08)', color: '#fff', borderColor: 'rgba(255,255,255,.2)' }} href="tel:+4935121787490">+49 351 21787490</a>
        </div>
      </div>
    </section>
  );
}
