// Single shared popover, positioned near whichever citation tag is active.
// Deliberately NOT nested inside the <a class="citation"> tags: those sit
// inline inside narrative <p> elements, and a nested block-level popover
// there produces invalid block-in-inline-in-paragraph markup.
const popover = document.createElement('div');
popover.className = 'citation-popover';
popover.setAttribute('role', 'tooltip');
popover.hidden = true;
document.body.appendChild(popover);

let activeTag = null;

function renderPopover(entryRow) {
  const status = entryRow.dataset.status;
  const claim = entryRow.querySelector('[data-label="Claim"]').innerHTML;
  const sourceHtml = entryRow.querySelector('[data-label="Source"]').innerHTML;
  popover.innerHTML = `
    <span class="popover__status">${status}</span>
    <p style="margin:0 0 8px;">${claim}</p>
    <p style="margin:0 0 8px; color:#D8D3C8;">${sourceHtml}</p>
    <a href="#${entryRow.id}">View full entry &rarr;</a>
  `;
}

function positionPopover(tag) {
  const rect = tag.getBoundingClientRect();
  const width = Math.min(320, window.innerWidth * 0.8);
  let left = rect.left;
  if (left + width > window.innerWidth - 16) left = window.innerWidth - width - 16;
  popover.style.width = `${width}px`;
  popover.style.left = `${Math.max(16, left)}px`;
  popover.style.top = `${rect.bottom + 8}px`;
}

function open(tag, entryRow) {
  activeTag = tag;
  renderPopover(entryRow);
  popover.hidden = false;
  positionPopover(tag);
}

function close() {
  activeTag = null;
  popover.hidden = true;
}

function init() {
  const backLink = document.getElementById('back-to-study');
  const tags = document.querySelectorAll('.citation');

  tags.forEach((tag) => {
    const targetId = tag.getAttribute('href').slice(1);
    const entryRow = document.getElementById(targetId);
    if (!entryRow) return;

    tag.addEventListener('mouseenter', () => open(tag, entryRow));
    tag.addEventListener('mouseleave', () => {
      if (activeTag === tag) close();
    });
    tag.addEventListener('focus', () => open(tag, entryRow));
    tag.addEventListener('focusout', (event) => {
      if (activeTag === tag && !popover.contains(event.relatedTarget)) close();
    });

    tag.addEventListener('click', (event) => {
      event.preventDefault();
      if (backLink) {
        const originSection = tag.closest('section');
        if (originSection) backLink.href = `#${originSection.id}`;
      }
      if (activeTag === tag && !popover.hidden) close();
      else open(tag, entryRow);
    });
  });

  popover.addEventListener('focusout', (event) => {
    if (!popover.contains(event.relatedTarget) && event.relatedTarget !== activeTag) close();
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.citation') && !event.target.closest('.citation-popover')) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const tagToRefocus = activeTag;
      close();
      if (tagToRefocus) tagToRefocus.focus();
    }
  });

  window.addEventListener('scroll', () => {
    if (activeTag && !popover.hidden) positionPopover(activeTag);
  }, { passive: true });
}

init();
