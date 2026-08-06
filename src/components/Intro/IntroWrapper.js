'use client';
import { useState, useEffect } from 'react';
import Intro from './Intro';

export default function IntroWrapper() {
  // `mounted` starts false so the server renders nothing — prevents the
  // d3-geo floating-point path hydration mismatch from react-simple-maps.
  const [mounted, setMounted] = useState(false);
  const [show,    setShow]    = useState(true);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted || !show) return null;

  return <Intro onComplete={() => setShow(false)} />;
}
