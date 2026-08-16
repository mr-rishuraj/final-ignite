import { makeOGImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Speakers — IGNITE 2026';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return makeOGImage({
    eyebrow: 'Past Speakers & Panelists',
    line1: 'Voices That',
    line2: 'Inspire.',
  });
}
