'use client';

import {useEffect, useRef, useState} from 'react';

export function PresidentialSignature() {
  const signature = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!signature.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, {threshold: 0.45});
    observer.observe(signature.current);
    return () => observer.disconnect();
  }, []);

  return (
    <svg ref={signature} className="presidential-signature" data-signing={visible}
      viewBox="0 0 560 192" aria-hidden="true">
      <defs>
        <mask id="presidential-ink" maskUnits="userSpaceOnUse" x="0" y="0" width="560" height="192">
          <g fill="none" stroke="white" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round">
            <path pathLength="1" d="M82 100 Q122 74 110 88 Q115 110 107 118 C76 143 1 146 1 123 C2 100 45 49 83 16 C118 -15 144 7 156 31 C168 56 159 99 150 112"/>
            <path pathLength="1" d="M114 189 Q143 112 157 83 C173 55 132 61 135 87 Q136 97 164 125 C150 100 171 55 187 69 Q203 74 187 108 Q198 67 207 83 L210 101 Q220 77 225 98 Q229 105 231 85 L242 101 L250 88 L257 105 L260 88"/>
            <path pathLength="1" d="M250 90 L239 77 L307 75 C236 124 284 111 315 96 L315 116 C314 86 313 46 342 33 C371 18 397 38 376 89 C364 79 346 85 335 101 C314 139 352 129 374 96"/>
            <path pathLength="1" d="M376 88 Q391 94 388 120 Q400 97 408 99 Q415 99 415 120 L432 102 Q425 128 473 98 L490 38 L468 118 Q489 82 503 106 Q517 122 470 116"/>
            <path pathLength="1" d="M432 81 Q491 69 558 48"/>
          </g>
          <rect className="signature-finish" width="560" height="192" fill="white"/>
        </mask>
      </defs>
      <image href="/media/presidential-signature.png" width="560" height="192" mask="url(#presidential-ink)"/>
    </svg>
  );
}
