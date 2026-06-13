'use client';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Website für Unternehmen" className="footer__logo" />
            <p>{t.brand}</p>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <h4>{t.pagesTitle}</h4>
              <a href="/prozess">{t.linkProzess}</a>
              <a href="/leistungen">{t.linkLeistungen}</a>
              <a href="/technologie">{t.linkTechnologie}</a>
              <a href="/faq">{t.linkFaq}</a>
              <a href="/referenzen">{t.linkReferenzen}</a>
              <a href="/kontakt">{t.linkKontakt}</a>
            </div>
            <div className="footer__col">
              <h4>{t.contactTitle}</h4>
              <a href="mailto:info@website-fuer-unternehmen.de">{t.contactEmail}</a>
              <a href="tel:+4935121787490">+49 351 21787490</a>
              <a href="/kontakt">{t.contactCall}</a>
            </div>
            <div className="footer__col">
              <h4>{t.legalTitle}</h4>
              <a href="/impressum">{t.impressum}</a>
              <a href="/datenschutz">{t.datenschutz}</a>
              <a href="/sitemap">{t.sitemap}</a>
            </div>
          </div>
        </div>
        <div className="footer__bot">
          <span>{t.copy}</span>
          <span className="mono">{t.made}</span>
        </div>
      </div>
    </footer>
  );
}
