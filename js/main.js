const STEP_IDS = [
  'diagnostic-hook',
  'behavioural-diagnosis',
  'intervention-design',
  'evidence',
  'scope-limitations',
];

function initProgressIndicator() {
  const railLinks = document.querySelectorAll('.progress-rail [data-step]');
  const barSegments = document.querySelectorAll('.progress-bar__segment[data-step]');
  const sections = STEP_IDS.map((id) => document.getElementById(id)).filter(Boolean);
  if (!sections.length) return;

  const setCurrent = (stepId) => {
    railLinks.forEach((link) => {
      if (link.dataset.step === stepId) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
    barSegments.forEach((seg) => {
      if (seg.dataset.step === stepId) seg.setAttribute('aria-current', 'step');
      else seg.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setCurrent(visible.target.id);
    },
    { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach((section) => observer.observe(section));
  setCurrent(STEP_IDS[0]);
}

function initRevealOnScroll() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

initProgressIndicator();
initRevealOnScroll();
