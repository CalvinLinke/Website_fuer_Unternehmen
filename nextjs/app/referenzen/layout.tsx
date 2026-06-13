import type { Metadata } from 'next';

const BASE = 'https://www.website-fuer-unternehmen.de';

export const metadata: Metadata = {
  title: 'Referenzen',
  description: 'Ausgewählte Kundenprojekte: CADA Invest, Glasfaser für Unternehmen, Immobilienpartner Sachsen — Websites, die messbar wirken.',
  alternates: { canonical: `${BASE}/referenzen` },
  openGraph: {
    title: 'Referenzen — Website für Unternehmen',
    description: 'Ausgewählte Kundenprojekte: CADA Invest, Glasfaser für Unternehmen, Immobilienpartner Sachsen — Websites, die messbar wirken.',
    url: `${BASE}/referenzen`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
