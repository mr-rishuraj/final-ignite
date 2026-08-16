import { makeOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Apply to IGNITE 2026 — Global Startup Summit, Dubai';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return makeOGImage({
    eyebrow: 'Applications Open · Dubai 2026',
    line1: 'Shape the Future.',
    line2: 'Apply Now.',
  });
}
