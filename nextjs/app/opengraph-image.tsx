import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Website für Unternehmen';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1155 50%, #1a0a2e 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,63,191,.3) 0%, transparent 70%)', display: 'flex' }} />

        {/* W logo mark */}
        <svg width="120" height="90" viewBox="0 0 200 130" style={{ marginBottom: '32px' }}>
          <g stroke="url(#wg)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M8 12 L46 118 L100 36 L154 118 L192 12" />
          </g>
          <g stroke="url(#wg2)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".7">
            <path d="M24 12 L56 106 L100 52 L144 106 L176 12" />
          </g>
          <g stroke="url(#wg3)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".5">
            <path d="M40 12 L66 96 L100 66 L134 96 L160 12" />
          </g>
          <defs>
            <linearGradient id="wg" x1="0" y1="0" x2="0" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#5b1fa8" />
              <stop offset="1" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="wg2" x1="0" y1="0" x2="0" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#7b3fbf" />
              <stop offset="1" stopColor="#c084fc" />
            </linearGradient>
            <linearGradient id="wg3" x1="0" y1="0" x2="0" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#9a52e6" />
              <stop offset="1" stopColor="#d8b4fe" />
            </linearGradient>
          </defs>
        </svg>

        {/* Title */}
        <div style={{ fontSize: '52px', fontWeight: 800, color: '#ffffff', letterSpacing: '-1px', marginBottom: '16px', display: 'flex' }}>
          Website für Unternehmen
        </div>

        {/* Tagline */}
        <div style={{ fontSize: '24px', color: 'rgba(255,255,255,.65)', letterSpacing: '.04em', display: 'flex' }}>
          Festpreis · 2–4 Wochen · Next.js 15
        </div>

        {/* Bottom separator */}
        <div style={{ position: 'absolute', bottom: '40px', display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div style={{ width: '40px', height: '2px', background: 'rgba(168,127,230,.4)', display: 'flex' }} />
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,.4)', letterSpacing: '.1em', display: 'flex' }}>
            WEBSITE-FUER-UNTERNEHMEN.DE
          </div>
          <div style={{ width: '40px', height: '2px', background: 'rgba(168,127,230,.4)', display: 'flex' }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
