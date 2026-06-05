import { initAnimations, reinit } from './animations';
import { lenis } from './lenis';

let initialized = false;

function run() {
  if (initialized) return;
  initialized = true;
  initAnimations();
  initAnchorLinks();
}

document.addEventListener('astro:page-load', () => {
  if (initialized) {
    reinit();
    initAnchorLinks();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  } else {
    run();
  }
});

// Fallback to ensure initialization if the event already fired or was missed
requestAnimationFrame(() => {
  run();
});

function initAnchorLinks() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    if (anchor.dataset.anchorInit) return;
    anchor.dataset.anchorInit = '1';
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href) return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: -68 });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY - 68;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}