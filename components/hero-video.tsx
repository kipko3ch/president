'use client';

import {useEffect, useState} from 'react';

const source = '/media/state-house-hero.mp4';

export function HeroVideo() {
  const [enabled, setEnabled] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      setEnabled(!motion.matches);
      if (motion.matches) setStarted(false);
    };
    update();
    motion.addEventListener('change', update);
    return () => motion.removeEventListener('change', update);
  }, []);

  if (!enabled) return null;

  return <video className="hero-video" data-started={started} src={source}
    autoPlay muted loop playsInline preload="metadata" aria-hidden="true"
    onPlaying={() => setStarted(true)} onError={() => setStarted(false)}/>;
}

