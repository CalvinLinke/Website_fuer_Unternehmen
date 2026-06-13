import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — Website für Unternehmen",
  description: "Datenschutzerklärung der GFU Distribution UG (Haftungsbeschränkt) gemäß DSGVO.",
};

export default function Datenschutz() {
  return (
    <>
      <Nav />
      <main>
        <section className="subpage-hero" style={{ paddingBottom: "40px" }}>
          <div className="wrap subpage-hero__inner">
            <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Datenschutzerklärung</h1>
            <p className="lead" style={{ maxWidth: "56ch", fontSize: "1rem" }}>Stand: Juni 2026</p>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: "40px", paddingBottom: "100px" }}>
          <div className="wrap subpage-prose">

            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br /><br />
              GFU Distribution UG (Haftungsbeschränkt)<br />
              Grüne Str. 13B<br />
              01067 Dresden<br /><br />
              E-Mail: <a href="mailto:info@website-fuer-unternehmen.de">info@website-fuer-unternehmen.de</a><br />
              Telefon: <a href="tel:+4935121787490">+49 351 21787490</a>
            </p>

            <h2>2. Erhobene Daten und Zwecke</h2>

            <h3>2.1 Serverprotokolle</h3>
            <p>
              Bei jedem Aufruf unserer Website werden durch den Hosting-Anbieter automatisch technische Daten in sogenannten Server-Logfiles gespeichert. Diese umfassen: IP-Adresse (anonymisiert), Datum und Uhrzeit des Zugriffs, aufgerufene URL, Browsertyp und Betriebssystem. Diese Daten dienen ausschließlich dem technischen Betrieb und der Sicherheit der Website. Eine Zusammenführung mit anderen Datenquellen findet nicht statt.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb).
            </p>

            <h3>2.2 Kontaktformular und E-Mail</h3>
            <p>
              Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage. Diese Daten werden nicht an Dritte weitergegeben.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
            <p>
              Speicherdauer: Ihre Anfragen werden nach abschließender Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>

            <h2>3. Cookies</h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies und keine Cookies von Drittanbietern. Es werden ausschließlich technisch notwendige Sitzungsdaten verarbeitet, die für den Betrieb der Website erforderlich sind. Eine Einwilligung (Cookie-Banner) ist daher nicht erforderlich.
            </p>

            <h2>4. Analyse- und Tracking-Tools</h2>
            <p>
              Wir setzen keine Analyse-, Tracking- oder Werbe-Tools ein (keine Google Analytics, kein Meta Pixel oder vergleichbare Dienste). Es werden keine personenbezogenen Daten zu Analyse- oder Werbezwecken erhoben oder an Dritte übermittelt.
            </p>

            <h2>5. SSL-Verschlüsselung</h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <h2>6. Weitergabe von Daten</h2>
            <p>
              Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet grundsätzlich nicht statt, es sei denn, wir sind gesetzlich dazu verpflichtet oder Sie haben ausdrücklich eingewilligt. Technische Dienstleister (Hosting-Anbieter) erhalten ausschließlich die für den Betrieb technisch notwendigen Daten und sind zur Vertraulichkeit verpflichtet.
            </p>

            <h2>7. Ihre Rechte</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul>
              <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO): Sie können Auskunft über die von uns verarbeiteten Daten verlangen.</li>
              <li><strong>Berichtigungsrecht</strong> (Art. 16 DSGVO): Sie können die Berichtigung unrichtiger Daten verlangen.</li>
              <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO): Sie können die Löschung Ihrer Daten verlangen, sofern keine Aufbewahrungspflichten entgegenstehen.</li>
              <li><strong>Recht auf Einschränkung</strong> (Art. 18 DSGVO): Sie können die Einschränkung der Verarbeitung verlangen.</li>
              <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie können der Verarbeitung Ihrer Daten widersprechen, soweit sie auf berechtigtem Interesse beruht.</li>
              <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie können die Herausgabe Ihrer Daten in einem maschinenlesbaren Format verlangen.</li>
            </ul>
            <p>
              Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@website-fuer-unternehmen.de">info@website-fuer-unternehmen.de</a>
            </p>

            <h2>8. Beschwerderecht bei einer Aufsichtsbehörde</h2>
            <p>
              Unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe steht Ihnen das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde für den Freistaat Sachsen ist:
            </p>
            <p>
              Sächsischer Datenschutzbeauftragter<br />
              Devrientstraße 5<br />
              01067 Dresden<br />
              <a href="https://www.datenschutz.sachsen.de" target="_blank" rel="noopener noreferrer">www.datenschutz.sachsen.de</a>
            </p>

            <h2>9. Aktualität und Änderungen</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2026. Durch die Weiterentwicklung unserer Website kann es notwendig werden, diese Erklärung anzupassen. Die jeweils aktuelle Version ist jederzeit auf dieser Seite abrufbar.
            </p>

          </div>
        </section>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
