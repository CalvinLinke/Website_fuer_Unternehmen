import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "../lib/LanguageContext";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-d",
  display: "swap",
});
const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-b",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-m",
  display: "swap",
});

const BASE_URL = "https://www.website-fuer-unternehmen.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Website für Unternehmen — Individuelle Websites für den Mittelstand",
    template: "%s — Website für Unternehmen",
  },
  description:
    "Individuelle Unternehmenswebsites für den Mittelstand und lokale Betriebe. Festpreis, Next.js 15, in 2–4 Wochen online. Jetzt kostenloses Erstgespräch vereinbaren.",
  keywords: [
    "Unternehmenswebsite",
    "Website Mittelstand",
    "Webdesign Dresden",
    "Next.js Website",
    "Webseite Festpreis",
    "Unternehmenswebsite erstellen",
    "Webdesign Agentur",
    "Landingpage erstellen",
    "Corporate Website",
  ],
  authors: [{ name: "GFU Distribution UG", url: BASE_URL }],
  creator: "GFU Distribution UG",
  publisher: "GFU Distribution UG",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Website für Unternehmen",
    title: "Website für Unternehmen — Individuelle Websites für den Mittelstand",
    description:
      "Festpreis. 2–4 Wochen. Next.js 15. Individuelle Unternehmenswebsites, die Kunden überzeugen.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Website für Unternehmen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website für Unternehmen — Individuelle Websites für den Mittelstand",
    description:
      "Festpreis. 2–4 Wochen. Next.js 15. Individuelle Unternehmenswebsites, die Kunden überzeugen.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GFU Distribution UG (Haftungsbeschränkt)",
  alternateName: "Website für Unternehmen",
  url: BASE_URL,
  telephone: "+4935121787490",
  email: "info@website-fuer-unternehmen.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grüne Str. 13B",
    addressLocality: "Dresden",
    postalCode: "01067",
    addressCountry: "DE",
  },
  description:
    "Individuelle Unternehmenswebsites für den Mittelstand. Festpreis, moderne Technologie, 2–4 Wochen bis Launch.",
  areaServed: "DE",
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-18:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
