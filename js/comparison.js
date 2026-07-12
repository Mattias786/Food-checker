import { computeVerdict } from './verdict.js';

const warburtonsWholemealMedium = {
  fibrePer100g: 6.4,
  isHighFodmap: true,
};

function renderCard(card, result) {
  card.dataset.verdict = result.verdict;
  card.querySelector('.verdict-card__label').textContent = result.label;
  card.querySelector('.verdict-card__reasoning').dataset.generated = 'true';
}

function init() {
  const stage = document.getElementById('comparison-stage');
  if (!stage) return;

  const highFibreCard = document.getElementById('verdict-high-fibre');
  const lowFodmapCard = document.getElementById('verdict-low-fodmap');

  // Regenerate the label/verdict from the single source of truth (verdict.js).
  // Reasoning prose stays as authored static HTML (it carries inline citation
  // links the pure function doesn't know about) but must always agree with
  // the computed verdict/label above it.
  renderCard(highFibreCard, computeVerdict(warburtonsWholemealMedium, 'high-fibre'));
  renderCard(lowFodmapCard, computeVerdict(warburtonsWholemealMedium, 'low-fodmap'));

  const buttons = stage.querySelectorAll('[data-focus-target]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.focusTarget;
      stage.dataset.focus = target;

      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));

      const cards = [highFibreCard, lowFodmapCard];
      cards.forEach((card) => {
        const isRelevant = target === 'all' || card.id === `verdict-${target}`;
        card.dataset.focused = String(isRelevant);
      });
    });
  });
}

init();
