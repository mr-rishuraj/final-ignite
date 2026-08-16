import { makeOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'IGNITE 2026 — Global Innovation Summit, Dubai';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return makeOGImage({
    eyebrow: 'Global Innovation Summit',
    line1: 'Building Tomorrow,',
    line2: 'Together.',
  });
}
