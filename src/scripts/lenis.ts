import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

const isMobileOrTouch = typeof window !== 'undefined' && 
  (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024);

if (typeof window !== 'undefined' && !isMobileOrTouch) {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time: number) => {
    if (lenis) {
      lenis.raf(time * 1000);
    }
  });

  gsap.ticker.lagSmoothing(0);
}

export { lenis, gsap, ScrollTrigger };