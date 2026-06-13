import type { Metadata } from 'next';

const BASE = 'https://www.website-fuer-unternehmen.de';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kostenloses Erstgespräch vereinbaren. Wir melden uns innerhalb von 24 Stunden — persönlich, verbindlich, ohne Ticketsystem.',
  alternates: { canonical: `${BASE}/kontakt` },
  openGraph: {
    title: 'Kontakt — Website für Unternehmen',
    description: 'Kostenloses Erstgespräch vereinbaren. Wir melden uns innerhalb von 24 Stunden — persönlich, verbindlich, ohne Ticketsystem.',
    url: `${BASE}/kontakt`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
