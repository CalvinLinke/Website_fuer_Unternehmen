import type { Metadata } from 'next';

const BASE = 'https://www.website-fuer-unternehmen.de';

export const metadata: Metadata = {
  title: 'Unser Prozess',
  description: 'Von der Erstberatung bis zum Launch in 2–4 Wochen. Transparent, planbar, festpreisgebunden — so läuft ein Projekt bei uns ab.',
  alternates: { canonical: `${BASE}/prozess` },
  openGraph: {
    title: 'Unser Prozess — Website für Unternehmen',
    description: 'Von der Erstberatung bis zum Launch in 2–4 Wochen. Transparent, planbar, festpreisgebunden — so läuft ein Projekt bei uns ab.',
    url: `${BASE}/prozess`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
