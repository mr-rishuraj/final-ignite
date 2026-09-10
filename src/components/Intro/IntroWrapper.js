'use client';
import { useState, useSyncExternalStore } from 'react';
import Intro from './Intro';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function IntroWrapper() {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !sessionStorage.getItem('ignite_intro_seen');
  });

  const handleComplete = () => {
    try {
      sessionStorage.setItem('ignite_intro_seen', '1');
    } catch {
      // ignore
    }
    setShow(false);
  };

  if (!mounted || !show) return null;

  return <Intro onComplete={handleComplete} />;
}

