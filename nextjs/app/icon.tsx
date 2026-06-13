import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a0a2e, #2d1155)',
          borderRadius: 6,
        }}
      >
        <svg width="24" height="20" viewBox="0 0 200 130">
          <path d="M8 12 L46 118 L100 36 L154 118 L192 12" stroke="#a855f7" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M28 12 L60 104 L100 52 L140 104 L172 12" stroke="#c084fc" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".7" />
          <path d="M46 12 L70 94 L100 64 L130 94 L154 12" stroke="#e9d5ff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
