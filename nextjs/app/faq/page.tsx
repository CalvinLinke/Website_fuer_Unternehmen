'use client';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";
import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

export default function FaqPage() {
  const { lang } = useLanguage();
  const t = translations[lang].pages.faq;

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

        <section className="sec" style={{ paddingTop: '56px', paddingBottom: '100px' }}>
          <div className="wrap" style={{ maxWidth: '800px' }}>
            <div className="faq__wrap">
              {t.items.map((f, i) => (
                <details className="qa" key={i} {...(i === 0 ? { open: true } : {})}>
                  <summary className="qa__q">
                    {f.q}
                    <span className="qa__ic">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </summary>
                  <div className="qa__a"><p>{f.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'var(--mist)', paddingTop: '72px', paddingBottom: '80px' }}>
          <div className="wrap" style={{ textAlign: 'center', maxWidth: '600px' }}>
            <h2 style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', marginBottom: '16px' }}>{t.moreTitle}</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '32px', lineHeight: 1.7 }}>{t.moreLead}</p>
            <a className="btn btn--primary" href="mailto:info@website-fuer-unternehmen.de">
              {t.moreBtn}
              <svg className="arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
