import type { Metadata } from 'next';

const BASE = 'https://www.website-fuer-unternehmen.de';

export const metadata: Metadata = {
  title: 'Technologie',
  description: 'Wir setzen auf Next.js 15, React und Edge-Hosting. Warum das für Ihre Website konkret besser ist als WordPress & Co.',
  alternates: { canonical: `${BASE}/technologie` },
  openGraph: {
    title: 'Technologie — Website für Unternehmen',
    description: 'Wir setzen auf Next.js 15, React und Edge-Hosting. Warum das für Ihre Website konkret besser ist als WordPress & Co.',
    url: `${BASE}/technologie`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
