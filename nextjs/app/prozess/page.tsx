'use client';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";
import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

export default function Prozess() {
  const { lang } = useLanguage();
  const t = translations[lang].pages.prozess;

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
            <p className="lead" style={{ maxWidth: '60ch' }}>{t.lead}</p>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: '72px', paddingBottom: '100px' }}>
          <div className="wrap">
            <div className="prozess__steps">
              {t.steps.map((step) => (
                <div className="prozess__step" key={step.n}>
                  <div className="prozess__step-num">{step.n}</div>
                  <div className="prozess__step-body">
                    <h3>{step.t}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '.95rem', marginBottom: '24px', lineHeight: 1.7 }}>{step.desc}</p>
                    <div className="leist__grid leist__grid--2" style={{ gap: '20px', marginBottom: '0' }}>
                      <div style={{ background: 'var(--mist)', borderRadius: 'var(--r-md)', padding: '20px 24px' }}>
                        <p style={{ fontWeight: 700, fontSize: '.8rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--violet)', marginBottom: '10px' }}>{lang === 'de' ? 'Sie bringen mit' : 'You bring'}</p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {step.youBring.map((item) => (
                            <li key={item} style={{ fontSize: '.88rem', color: 'var(--ink)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                              <svg style={{ flexShrink: 0, marginTop: '3px', color: 'var(--violet)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div style={{ background: 'var(--mist-2)', borderRadius: 'var(--r-md)', padding: '20px 24px' }}>
                        <p style={{ fontWeight: 700, fontSize: '.8rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--violet)', marginBottom: '10px' }}>{lang === 'de' ? 'Wir übernehmen' : 'We take care of'}</p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {step.weDo.map((item) => (
                            <li key={item} style={{ fontSize: '.88rem', color: 'var(--ink)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                              <svg style={{ flexShrink: 0, marginTop: '3px', color: 'var(--violet)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /></svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p style={{ marginTop: '12px', fontSize: '.82rem', color: 'var(--muted)', fontStyle: 'italic' }}>
                      {lang === 'de' ? 'Zeitrahmen:' : 'Duration:'} {step.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" style={{ background: 'var(--mist)', paddingTop: '72px', paddingBottom: '80px' }}>
          <div className="wrap" style={{ maxWidth: '760px' }}>
            <h2 style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', marginBottom: '32px' }}>{t.promiseTitle}</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
              {t.promises.map((p) => (
                <li key={p} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '1rem', lineHeight: 1.6 }}>
                  <svg style={{ flexShrink: 0, marginTop: '3px', color: 'var(--violet)' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
                  {p}
                </li>
              ))}
            </ul>
            <a className="btn btn--primary" href="mailto:info@website-fuer-unternehmen.de">
              {t.ctaBtn}
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
