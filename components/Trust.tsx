'use client';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

const icons = {
  price: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4" /><circle cx="12" cy="12" r="3.2" />
    </svg>
  ),
  time: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 3.5" />
    </svg>
  ),
  value: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  ),
  person: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  location: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.7 2 6 4.7 6 8c0 5 6 13 6 13s6-8 6-13c0-3.3-2.7-6-6-6z" /><circle cx="12" cy="8" r="2" />
    </svg>
  ),
};

export default function Trust() {
  const { lang } = useLanguage();
  const t = translations[lang].trust;

  return (
    <section className="sec trust" id="versprechen" data-screen-label="Versprechen">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-tag"><span className="num">{t.tag}</span></span>
          <h2>{t.h2a} <em>{t.h2b}</em></h2>
          <p>{t.lead}</p>
        </div>
        <div className="trust__grid reveal">
          {t.items.map((item) => (
            <article className="trust__card" key={item.h}>
              <div className="ic">{icons[item.icon as keyof typeof icons]}</div>
              <h3>{item.h}</h3>
              <p>{item.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
