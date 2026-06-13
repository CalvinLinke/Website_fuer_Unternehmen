'use client';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

export default function Nav() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  return (
    <nav className="nav" id="nav">
      <a className="nav__logo" href="/" aria-label="Website für Unternehmen — Startseite">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Website für Unternehmen" />
      </a>
      <div className="nav__links">
        <a href="/prozess">{t.prozess}</a>
        <a href="/leistungen">{t.leistungen}</a>
        <a href="/technologie">{t.technologie}</a>
        <a href="/faq">{t.faq}</a>
        <a href="/referenzen">{t.referenzen}</a>
      </div>
      <div className="nav__right">
        <div className="lang-switch" role="group" aria-label="Language">
          <button
            className={lang === 'de' ? 'lang-switch__btn lang-switch__btn--active' : 'lang-switch__btn'}
            onClick={() => setLang('de')}
            aria-pressed={lang === 'de'}
          >
            DE
          </button>
          <span className="lang-switch__div" aria-hidden="true">|</span>
          <button
            className={lang === 'en' ? 'lang-switch__btn lang-switch__btn--active' : 'lang-switch__btn'}
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>
        <a className="nav__cta" href="/kontakt">
          {t.cta}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
        </a>
      </div>
    </nav>
  );
}
