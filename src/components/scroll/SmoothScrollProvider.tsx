'use client';

import { useEffect, type PropsWithChildren, useRef } from 'react';
import Lenis from 'lenis';

export function SmoothScrollProvider({ children }: PropsWithChildren<unknown>) {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    lenis.current = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      infinite: false,
    });

    const raf = (time: number) => {
      lenis.current?.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.current?.destroy();
  }, []);

  return <>{children}</>;
}
