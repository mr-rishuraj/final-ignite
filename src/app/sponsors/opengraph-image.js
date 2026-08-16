import { makeOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Partners & Sponsors — IGNITE 2026';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return makeOGImage({
    eyebrow: 'Partners & Sponsors',
    line1: 'Our Global',
    line2: 'Network.',
  });
}
