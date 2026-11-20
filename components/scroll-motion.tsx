'use client';

import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.getElementById('main-content');
    if (!main) return;

    let disposed = false;
    let revert: (() => void) | undefined;

    async function install() {
      const [{gsap}, {ScrollTrigger}] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (disposed || !main) return;

      gsap.registerPlugin(ScrollTrigger);
      const motion = gsap.matchMedia(main);
      motion.add('(prefers-reduced-motion: no-preference)', () => {
        const desktop = window.matchMedia('(min-width: 820px)').matches;

        for (const element of main.querySelectorAll<HTMLElement>(
          '.presidency-words, .section-heading, .delivery-heading, .residences > h2, .history-grid > :last-child, .inner-heading, .biography-sections > section',
        )) {
          if (element.getBoundingClientRect().top < window.innerHeight * 0.82) continue;
          gsap.from(element, {
            y: desktop ? 32 : 18,
            opacity: 0.2,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {trigger: element, start: 'top 93%', once: true},
          });
        }

        for (const image of main.querySelectorAll<HTMLElement>(
          '.presidency-portrait, .history-grid > .picture, .gallery-preview figure:first-child .picture, .gallery-preview figure:last-child .picture, .history-photographs img',
        )) {
          gsap.fromTo(image, {
            clipPath: desktop ? 'inset(12% 8% round 2px)' : 'inset(5% 3% round 2px)',
          }, {
            clipPath: 'inset(0% 0% round 2px)',
            ease: 'none',
            scrollTrigger: {trigger: image, start: 'top 97%', end: 'top 57%', scrub: 0.85},
          });
        }

        const map = main.querySelector<SVGSVGElement>('.residence-map svg');
        if (map) {
          gsap.fromTo(map, {scale: 0.92, opacity: 0.65}, {
            scale: 1, opacity: 1, ease: 'none',
            scrollTrigger: {trigger: map, start: 'top 95%', end: 'top 58%', scrub: 0.8},
          });
        }
      });
      revert = () => motion.revert();
    }

    void install().catch(() => revert?.());
    return () => {
      disposed = true;
      revert?.();
    };
  }, [pathname]);

  return null;
}

