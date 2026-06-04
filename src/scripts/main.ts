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
    lenis.scrollTo(0, { immediate: true });
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
      lenis.scrollTo(target, { offset: -68 });
    });
  });
}