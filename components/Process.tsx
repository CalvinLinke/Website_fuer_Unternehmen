'use client';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

export default function Process() {
  const { lang } = useLanguage();
  const t = translations[lang].process;

  return (
    <section className="sec process" id="prozess" data-screen-label="Ablauf">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-tag"><span className="num">{t.tag}</span></span>
          <h2>{t.h2a} <em>{t.h2b}</em></h2>
          <p>{t.lead}</p>
        </div>
        <div className="process__grid">
          {t.steps.map((s, i) => (
            <article className="step reveal" data-d={i} key={s.n}>
              <span className="step__n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
              <span className="step__bar"></span>
            </article>
          ))}
        </div>
        <div className="sec-more reveal">
          <a href="/prozess" className="sec-more__link">
            {t.moreLink}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
