import type { Metadata } from 'next';

const BASE = 'https://www.website-fuer-unternehmen.de';

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Fünf klar definierte Pakete — von der ersten Website bis zur Modernisierung. Festpreis, 2–4 Wochen, persönliche Betreuung.',
  alternates: { canonical: `${BASE}/leistungen` },
  openGraph: {
    title: 'Leistungen — Website für Unternehmen',
    description: 'Fünf klar definierte Pakete — von der ersten Website bis zur Modernisierung. Festpreis, 2–4 Wochen, persönliche Betreuung.',
    url: `${BASE}/leistungen`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
