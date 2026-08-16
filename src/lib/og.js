import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

/**
 * @param {{ eyebrow?: string, line1: string, line2: string, line2Italic?: boolean }} opts
 */
export async function makeOGImage({ eyebrow = 'IGNITE 2026 · DUBAI', line1, line2, line2Italic = true }) {
  const logoData = await readFile(join(process.cwd(), 'public/ignite-logo.png'));
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1c120e 0%, #251710 60%, #1c120e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img src={logoSrc} width={38} height={38} style={{ borderRadius: '50%' }} />
          <span style={{ color: '#F8F5F2', fontSize: 22, letterSpacing: '0.22em', fontWeight: 300 }}>
            IGNITE
          </span>
          <span style={{ color: '#C53B48', fontSize: 16, fontWeight: 700, letterSpacing: '0.05em' }}>
            '26
          </span>
        </div>

        {/* Main copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {eyebrow ? (
            <span style={{ color: 'rgba(248,245,242,0.4)', fontSize: 17, letterSpacing: '0.14em' }}>
              {eyebrow.toUpperCase()}
            </span>
          ) : null}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <span style={{ color: '#F8F5F2', fontSize: 76, letterSpacing: '-0.025em', fontWeight: 400 }}>
              {line1}
            </span>
            <span
              style={{
                color: '#C53B48',
                fontSize: 76,
                letterSpacing: '-0.025em',
                fontWeight: 400,
                fontStyle: line2Italic ? 'italic' : 'normal',
              }}
            >
              {line2}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: 'rgba(248,245,242,0.38)', fontSize: 17, letterSpacing: '0.11em' }}>
            DUBAI 2026
          </span>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#C53B48', display: 'flex' }} />
          <span style={{ color: 'rgba(248,245,242,0.38)', fontSize: 17, letterSpacing: '0.11em' }}>
            PIEDS × BITS PILANI
          </span>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
