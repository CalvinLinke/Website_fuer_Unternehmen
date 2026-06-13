'use client';
import { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import SiteEffects from '../../components/SiteEffects';
import { useLanguage } from '../../lib/LanguageContext';
import { translations } from '../../lib/translations';

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'; // Formspree-Account anlegen: https://formspree.io

export default function Kontakt() {
  const { lang } = useLanguage();
  const t = translations[lang].pages.kontakt;

  const [fields, setFields] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '', privacy: false });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [mapConsent, setMapConsent] = useState(false);

  const set = (k: string, v: string | boolean) => setFields(f => ({ ...f, [k]: v }));

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('leistung');
    if (param) set('service', param);
    if (localStorage.getItem('mapConsent') === '1') setMapConsent(true);
  }, []);

  function acceptMap() {
    localStorage.setItem('mapConsent', '1');
    setMapConsent(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: fields.name, email: fields.email, phone: fields.phone, company: fields.company, leistung: fields.service, message: fields.message }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="subpage-hero">
          <div className="wrap subpage-hero__inner">
            <span className="eyebrow" style={{ background: 'none', border: 'none', backdropFilter: 'none', boxShadow: 'none', padding: '0' }}>
              <span className="dot"></span>
              <span className="mono">{t.eyebrow}</span>
            </span>
            <h1>{t.h1a} <span className="grad">{t.h1b}</span></h1>
            <p className="lead" style={{ maxWidth: '56ch' }}>{t.lead}</p>
          </div>
        </section>

        {/* Main content */}
        <section className="sec" style={{ paddingTop: '0', paddingBottom: '100px' }}>
          <div className="wrap">
            <div className="kontakt__grid">

              {/* Form */}
              <div className="kontakt__form reveal">
                <h2 className="kontakt__form-title">{t.formTitle}</h2>

                {status === 'success' ? (
                  <div className="kontakt__success">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--violet)', marginBottom: 16 }}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
                    </svg>
                    <h3>{t.successTitle}</h3>
                    <p>{t.successMsg}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form__row">
                      <div className="form__group">
                        <label className="form__label" htmlFor="k-name">{t.labelName} *</label>
                        <input id="k-name" className="form__input" type="text" required value={fields.name} onChange={e => set('name', e.target.value)} />
                      </div>
                      <div className="form__group">
                        <label className="form__label" htmlFor="k-email">{t.labelEmail} *</label>
                        <input id="k-email" className="form__input" type="email" required value={fields.email} onChange={e => set('email', e.target.value)} />
                      </div>
                    </div>
                    <div className="form__row">
                      <div className="form__group">
                        <label className="form__label" htmlFor="k-phone">{t.labelPhone}</label>
                        <input id="k-phone" className="form__input" type="tel" value={fields.phone} onChange={e => set('phone', e.target.value)} />
                      </div>
                      <div className="form__group">
                        <label className="form__label" htmlFor="k-company">{t.labelCompany}</label>
                        <input id="k-company" className="form__input" type="text" value={fields.company} onChange={e => set('company', e.target.value)} />
                      </div>
                    </div>
                    <div className="form__group">
                      <label className="form__label" htmlFor="k-service">{t.labelService}</label>
                      <select id="k-service" className="form__select" value={fields.service} onChange={e => set('service', e.target.value)}>
                        <option value="">{t.serviceDefault}</option>
                        {(t.serviceOptions as unknown as { value: string; label: string }[]).map(o => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form__group">
                      <label className="form__label" htmlFor="k-message">{t.labelMessage} *</label>
                      <textarea id="k-message" className="form__textarea" required rows={5} value={fields.message} onChange={e => set('message', e.target.value)} />
                    </div>
                    <div className="form__check">
                      <input id="k-privacy" type="checkbox" required checked={fields.privacy as boolean} onChange={e => set('privacy', e.target.checked)} />
                      <label htmlFor="k-privacy">
                        {t.labelPrivacy.split('Datenschutzerklärung').length > 1 ? (
                          <>{t.labelPrivacy.split('Datenschutzerklärung')[0]}<a href="/datenschutz" style={{ color: 'var(--violet)' }}>Datenschutzerklärung</a>{t.labelPrivacy.split('Datenschutzerklärung')[1]}</>
                        ) : t.labelPrivacy}
                      </label>
                    </div>
                    {status === 'error' && <p className="form__error">{t.errorMsg}</p>}
                    <button className="btn btn--primary" type="submit" disabled={status === 'loading'} style={{ marginTop: 8 }}>
                      {status === 'loading' ? '…' : t.submit}
                      {status !== 'loading' && <svg className="arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>}
                    </button>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="kontakt__sidebar reveal">

                {/* Contact card */}
                <div className="kontakt__card">
                  <h3 className="kontakt__card-title">{t.contactTitle}</h3>
                  <div className="kontakt__row">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    <a href={`mailto:${t.email}`}>{t.email}</a>
                  </div>
                  <div className="kontakt__row">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <a href="tel:+4935121787490">{t.phone}</a>
                  </div>
                  <div className="kontakt__divider" />
                  <div className="kontakt__row kontakt__row--info">
                    <span className="kontakt__label">{t.hoursLabel}</span>
                    <span>{t.hours}</span>
                  </div>
                  <div className="kontakt__row kontakt__row--info">
                    <span className="kontakt__label">{t.addressLabel}</span>
                    <span>{t.address}</span>
                  </div>
                </div>

                {/* Google Maps — Zwei-Klick-Lösung (DSGVO § 25 TTDSG) */}
                <div className="kontakt__map">
                  {mapConsent ? (
                    <iframe
                      src="https://maps.google.com/maps?q=Gr%C3%BCne+Str.+13B+01067+Dresden&output=embed&hl=de"
                      width="100%" height="220" style={{ border: 0, borderRadius: 'var(--r-md)' }}
                      allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      title="Büro Dresden"
                    />
                  ) : (
                    <div className="map-consent">
                      <svg className="map-consent__icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      <p className="map-consent__text">
                        {lang === 'de'
                          ? 'Karte wird von Google Maps bereitgestellt. Durch Klick stimmen Sie der Übertragung von Daten an Google zu.'
                          : 'Map is provided by Google Maps. By clicking, you agree to data being transferred to Google.'}
                      </p>
                      <button className="map-consent__btn" onClick={acceptMap}>
                        {lang === 'de' ? 'Karte laden' : 'Load map'}
                      </button>
                    </div>
                  )}
                </div>

                {/* Was passiert als Nächstes */}
                <div className="kontakt__card">
                  <h3 className="kontakt__card-title">{t.nextTitle}</h3>
                  <ol className="next-steps">
                    {(t.nextSteps as readonly string[]).map((step, i) => (
                      <li key={i} className="next-steps__item">
                        <span className="next-steps__num">{i + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Trust strip */}
            <div className="trust-strip reveal">
              {(t.trustItems as readonly string[]).map((item) => (
                <div className="trust-strip__item" key={item}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--violet)', flexShrink: 0 }}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
