function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>
  );
}

export default function Pricing() {
  return (
    <section className="sec pricing" id="preise" data-screen-label="Preise">
      <div className="wrap">
        <div className="sec-head reveal" style={{ textAlign: "center", marginInline: "auto" }}>
          <span className="sec-tag" style={{ justifyContent: "center" }}><span className="num">04 — PREISE</span></span>
          <h2>Festpreise. <em>Keine Überraschungen.</em></h2>
          <p style={{ marginInline: "auto" }}>Sie wissen vorab genau, was Ihre Website kostet. Ein fairer Festpreis — ohne Nachverhandeln, ohne versteckte Kosten.</p>
        </div>
        <div className="price__grid">
          {/* Starter */}
          <article className="plan plan--plain reveal">
            <h3>Starter</h3>
            <p className="plan__desc">Der perfekte Einstieg für lokale Betriebe &amp; Selbstständige.</p>
            <div className="plan__price"><span className="cur">ab</span><span className="amt">990</span><span className="cur">€</span></div>
            <div className="plan__note">einmalig · Festpreis</div>
            <ul>
              <li><Check />One-Page Website</li>
              <li><Check />Individuelles Design</li>
              <li><Check />Mobil-optimiert</li>
              <li><Check />Kontaktformular &amp; Karte</li>
            </ul>
            <a className="btn" href="#kontakt">Anfragen</a>
          </article>

          {/* Business (hervorgehoben) */}
          <article className="plan plan--feat reveal">
            <span className="plan__badge">Beliebt</span>
            <h3>Business</h3>
            <p className="plan__desc">Der vollständige Auftritt für wachsende Unternehmen.</p>
            <div className="plan__price"><span className="cur">ab</span><span className="amt">2.490</span><span className="cur">€</span></div>
            <div className="plan__note">einmalig · Festpreis</div>
            <ul>
              <li><Check />Bis zu 8 Unterseiten</li>
              <li><Check />Maßgeschneidertes Design</li>
              <li><Check />SEO-Grundoptimierung</li>
              <li><Check />Texte &amp; Bildauswahl inklusive</li>
              <li><Check />Pflegbar via Redaktionssystem</li>
            </ul>
            <a className="btn btn--primary" href="#kontakt">Projekt starten</a>
          </article>

          {/* Individuell */}
          <article className="plan plan--plain reveal">
            <h3>Individuell</h3>
            <p className="plan__desc">Für besondere Anforderungen &amp; größere Projekte.</p>
            <div className="plan__price"><span className="amt">Auf Anfrage</span></div>
            <div className="plan__note">individuelles Angebot · Festpreis</div>
            <ul>
              <li><Check />Unbegrenzte Unterseiten</li>
              <li><Check />Shop / Buchung / Portal</li>
              <li><Check />Individuelle Funktionen</li>
              <li><Check />Laufende Betreuung</li>
            </ul>
            <a className="btn" href="#kontakt">Gespräch vereinbaren</a>
          </article>
        </div>
      </div>
    </section>
  );
}
