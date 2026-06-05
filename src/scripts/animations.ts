import { gsap, ScrollTrigger } from './lenis';

let ctx: gsap.Context | null = null;

function initAnimations() {
  console.log('[Comercialo] Initializing animations...');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    console.log('[Comercialo] Prefers reduced motion is active. Skipping animations.');
    return;
  }

  if (ctx) {
    console.log('[Comercialo] Reverting previous GSAP context.');
    ctx.revert();
  }

  ctx = gsap.context(() => {
    const runSafe = (name: string, fn: () => void) => {
      try {
        console.log(`[Comercialo] Running ${name}...`);
        fn();
      } catch (e) {
        console.error(`[Comercialo] Error in ${name}:`, e);
      }
    };

    runSafe('initFadeUp', initFadeUp);
    runSafe('initStagger', initStagger);
    runSafe('initCounters', initCounters);
    runSafe('initParallax', initParallax);
    runSafe('initHeaderShrink', initHeaderShrink);
    runSafe('initWaFloat', initWaFloat);
    runSafe('initScrollProgress', initScrollProgress);
    runSafe('initMagneticButtons', initMagneticButtons);
    runSafe('init3DTilt', init3DTilt);
    runSafe('initFAQAccordion', initFAQAccordion);
    runSafe('initSectionLabels', initSectionLabels);

    try {
      console.log('[Comercialo] Refreshing ScrollTrigger...');
      ScrollTrigger.refresh();
    } catch (e) {
      console.error('[Comercialo] Error in ScrollTrigger.refresh:', e);
    }
  });

  // Re-refresh layout after a short delay to account for rendering/load lag
  setTimeout(() => {
    try {
      console.log('[Comercialo] Delayed ScrollTrigger refresh...');
      ScrollTrigger.refresh();
    } catch (e) {}
  }, 250);
}

function initFadeUp() {
  const elements = gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]');
  console.log(`[Comercialo] initFadeUp: Found ${elements.length} elements`);
  elements.forEach((el) => {
    if (el.dataset.fadeUpInit) return;
    el.dataset.fadeUpInit = '1';
    gsap.from(el, {
      y: 40,
      opacity: 0,
      transition: 'none',
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'transition,transform,opacity',
      scrollTrigger: {
        trigger: el,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
    });
  });
}

function initStagger() {
  const containers = gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]');
  console.log(`[Comercialo] initStagger: Found ${containers.length} containers`);
  containers.forEach((container, i) => {
    if (container.dataset.staggerInit) return;
    container.dataset.staggerInit = '1';
    const target = container.dataset.staggerTarget;
    console.log(`[Comercialo]   Container ${i}: target selector = "${target}"`);
    if (!target) return;
    const items = gsap.utils.toArray<HTMLElement>(container.querySelectorAll(target));
    console.log(`[Comercialo]   Container ${i}: Found ${items.length} items to stagger`);
    if (!items.length) return;

    // Use a GSAP timeline for more reliable ScrollTrigger integration with staggers
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
    });

    // Prevent CSS transitions (transition-all) from conflicting with GSAP's updates
    tl.from(items, {
      y: 40,
      opacity: 0,
      transition: 'none',
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'transition,transform,opacity',
    });
  });
}

function initCounters() {
  gsap.utils.toArray<HTMLElement>('[data-animate="counter"]').forEach((el) => {
    if (el.dataset.counterInit) return;
    el.dataset.counterInit = '1';
    const target = parseFloat(el.dataset.target || '0');
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';

    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        el.textContent = prefix + Math.round(obj.val) + suffix;
      },
    });
  });
}

function initParallax() {
  gsap.utils.toArray<HTMLElement>('[data-animate="parallax"]').forEach((el) => {
    if (el.dataset.parallaxInit) return;
    el.dataset.parallaxInit = '1';
    const speed = parseFloat(el.dataset.parallaxSpeed || '0.15');

    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

function initHeaderShrink() {
  const header = document.querySelector<HTMLElement>('[data-animate="header-shrink"]');
  if (!header) return;

  ScrollTrigger.create({
    trigger: 'body',
    start: '100 top',
    end: 'max',
    onEnter: () => {
      gsap.to(header, {
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255,255,255,0.85)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        duration: 0.3,
      });
    },
    onLeaveBack: () => {
      gsap.to(header, {
        backdropFilter: 'blur(0px)',
        backgroundColor: 'rgba(255,255,255,1)',
        boxShadow: '0 0 0 rgba(0,0,0,0)',
        duration: 0.3,
      });
    },
  });
}

function initWaFloat() {
  const wa = document.querySelector<HTMLElement>('[data-animate="wa-float"]');
  if (!wa) return;

  gsap.from(wa, {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: 'back.out(1.7)',
    delay: 1,
  });

  gsap.to(wa, {
    scale: 1.06,
    duration: 1.2,
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true,
    delay: 1.5,
  });
}

function initScrollProgress() {
  if (document.querySelector('#scroll-progress')) return;

  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  bar.className = 'fixed top-0 left-0 h-[3px] bg-primary z-[1000] origin-left scale-x-0 pointer-events-none';
  document.body.appendChild(bar);

  gsap.to(bar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
    },
  });
}

function initMagneticButtons() {
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((btn) => {
    const strength = parseFloat(btn.dataset.magnetic || '0.3');

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

function init3DTilt() {
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const maxTilt = parseFloat(el.dataset.tilt || '12');

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(el, {
        rotateY: x * maxTilt * 2,
        rotateX: -y * maxTilt * 2,
        transformPerspective: 1000,
        duration: 0.6,
        ease: 'power2.out',
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });
  });
}

function initFAQAccordion() {
  document.querySelectorAll<HTMLElement>('[data-faq]').forEach((item) => {
    if (item.dataset.faqBound) return;
    item.dataset.faqBound = '1';

    const question = item.querySelector<HTMLElement>('[data-faq-q]');
    const answer = item.querySelector<HTMLElement>('[data-faq-a]');
    if (!question || !answer) return;

    question.style.cursor = 'pointer';
    question.classList.add('flex', 'items-center', 'justify-between', 'gap-3');

    let icon = question.querySelector<HTMLElement>('.faq-icon');
    if (!icon) {
      icon = document.createElement('span');
      icon.className = 'faq-icon text-primary text-xl font-bold transition-transform duration-300 shrink-0';
      icon.textContent = '+';
      question.appendChild(icon);
    }

    gsap.set(answer, { height: 0, opacity: 0, overflow: 'hidden' });

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('faq-open');

      document.querySelectorAll('[data-faq].faq-open').forEach((other) => {
        if (other === item) return;
        other.classList.remove('faq-open');
        const otherA = other.querySelector<HTMLElement>('[data-faq-a]');
        const otherI = other.querySelector<HTMLElement>('.faq-icon');
        if (otherA) gsap.to(otherA, { height: 0, opacity: 0, duration: 0.35, ease: 'power3.inOut' });
        if (otherI) gsap.to(otherI, { rotation: 0, duration: 0.3 });
      });

      if (!isOpen) {
        item.classList.add('faq-open');
        gsap.to(answer, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out' });
        gsap.to(icon, { rotation: 45, duration: 0.3 });
      } else {
        item.classList.remove('faq-open');
        gsap.to(answer, { height: 0, opacity: 0, duration: 0.35, ease: 'power3.inOut' });
        gsap.to(icon, { rotation: 0, duration: 0.3 });
      }
    });
  });
}

function initSectionLabels() {
  gsap.utils.toArray<HTMLElement>('section').forEach((section) => {
    const label = section.querySelector<HTMLElement>('span.section-label, [class*="uppercase"][class*="text-primary"]');
    if (!label || label.dataset.labelInit) return;
    label.dataset.labelInit = '1';

    gsap.from(label, {
      letterSpacing: '0.4em',
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: label,
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
    });
  });
}

function killAllAnimations() {
  if (ctx) {
    ctx.revert();
    ctx = null;
  }
  ScrollTrigger.getAll().forEach((t) => t.kill());
  document.querySelectorAll<HTMLElement>('[data-fade-up-init], [data-stagger-init], [data-counter-init], [data-parallax-init]').forEach((el) => {
    el.removeAttribute('data-fade-up-init');
    el.removeAttribute('data-stagger-init');
    el.removeAttribute('data-counter-init');
    el.removeAttribute('data-parallax-init');
  });
}

function reinit() {
  killAllAnimations();
  initAnimations();
}

export { initAnimations, reinit };