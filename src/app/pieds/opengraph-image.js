import { makeOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'PIEDS — Pilani Innovation & Entrepreneurship Development Society';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return makeOGImage({
    eyebrow: 'Est. 2013 · BITS Pilani',
    line1: 'Pilani Innovation &',
    line2: 'Entrepreneurship.',
  });
}
