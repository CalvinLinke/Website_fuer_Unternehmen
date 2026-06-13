'use client';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

export default function Faq() {
  const { lang } = useLanguage();
  const t = translations[lang].faq;
  const items = t.items.slice(0, 5);

  return (
    <section className="sec faq" id="faq" data-screen-label="FAQ">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-tag"><span className="num">{t.tag}</span></span>
          <h2>{t.h2a} <em>{t.h2b}</em></h2>
        </div>
        <div className="faq__wrap reveal">
          {items.map((f, i) => (
            <details className="qa" key={i} {...(i === 0 ? { open: true } : {})}>
              <summary className="qa__q">
                {f.q}
                <span className="qa__ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></span>
              </summary>
              <div className="qa__a"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
        <div className="sec-more reveal">
          <a href="/faq" className="sec-more__link">
            {t.moreLink}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
