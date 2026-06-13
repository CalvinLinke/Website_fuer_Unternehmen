'use client';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <header className="hero" id="top" data-bg="network" data-theme="light" data-screen-label="Hero">
      <div className="hero-bg">
        <canvas id="netCanvas"></canvas>
        <div id="cardField" className="card-field"></div>
        <div className="hero-veil"></div>
      </div>

      <div className="wrap hero__inner">
        <span className="eyebrow" style={{ background: 'none', border: 'none', backdropFilter: 'none', boxShadow: 'none', padding: '0' }}>
          <span className="dot"></span>
          <span className="mono">{t.eyebrow}</span>
        </span>
        <h1>
          {t.h1a}
          <br />
          <span className="grad">{t.h1b}</span> {t.h1c}
        </h1>
        <p className="lead" style={{ marginBottom: '0' }}>{t.lead}</p>
        <div className="hero__cta" style={{ marginTop: '60px' }}>
          <div className="switcher" role="group" aria-label="Hero-Hintergrund wählen" style={{ margin: '0', alignSelf: 'flex-start' }}>
            <span className="switcher__label">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7z" /></svg>
              {t.switcherLabel}
            </span>
            <div className="switcher__grp">
              <button data-bg="cards">{t.bgCards}</button>
              <button data-bg="network" className="active">{t.bgNetwork}</button>
            </div>
            <span className="switcher__div"></span>
            <div className="switcher__grp">
              <button data-theme="light" className="active">{t.themeLight}</button>
              <button data-theme="dark">{t.themeDark}</button>
            </div>
          </div>
          <a className="btn btn--ghost" href="#leistungen">{t.ctaBtn}</a>
        </div>
        <div className="hero__trust">
          <span className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4" /><circle cx="12" cy="12" r="3.2" /></svg>
            {t.trust1}
          </span>
          <span className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
            {t.trust2}
          </span>
          <span className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" /></svg>
            {t.trust3}
          </span>
        </div>
      </div>
    </header>
  );
}
