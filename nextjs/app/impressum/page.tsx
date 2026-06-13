import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Website für Unternehmen",
  description: "Impressum der GFU Distribution UG (Haftungsbeschränkt)",
};

export default function Impressum() {
  return (
    <>
      <Nav />
      <main>
        <section className="subpage-hero" style={{ paddingBottom: "40px" }}>
          <div className="wrap subpage-hero__inner">
            <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Impressum</h1>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: "40px", paddingBottom: "100px" }}>
          <div className="wrap subpage-prose">

            <h2>Diensteanbieter</h2>
            <p>
              GFU Distribution UG (Haftungsbeschränkt)<br />
              Grüne Str. 13B<br />
              01067 Dresden
            </p>

            <h2>Kontaktmöglichkeiten</h2>
            <p>
              <strong>E-Mail:</strong> <a href="mailto:info@website-fuer-unternehmen.de">info@website-fuer-unternehmen.de</a><br />
              <strong>Telefon:</strong> <a href="tel:+4935121787490">+49 351 21787490</a><br />
              <strong>Kontaktformular:</strong> <a href="https://www.website-fuer-unternehmen.de/kontaktallgemein" target="_blank" rel="noopener noreferrer">www.website-fuer-unternehmen.de/kontaktallgemein</a>
            </p>

            <h2>Vertretungsberechtigte Personen</h2>
            <p>Vertretungsberechtigt: Calvin Linke (Geschäftsführer)</p>

            <h2>Angaben zum Unternehmen</h2>
            <p>
              <strong>Umsatzsteuer-Identifikationsnummer (USt-ID):</strong> DE366143013<br />
              <strong>Geschäftsbereich:</strong> Deutschland
            </p>

            <h2>Register und Registernummer</h2>
            <p>
              Eintragung im Handelsregister<br />
              <strong>Registergericht:</strong> Amtsgericht Dresden<br />
              <strong>Registernummer:</strong> HRB 44981
            </p>

            <h2>Haftungsausschluss</h2>
            <h3>Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3>Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

          </div>
        </section>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
