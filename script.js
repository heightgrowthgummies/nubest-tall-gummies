// File: script.js
// Description: Page interactivity for the NuBest Tall Gummies product page.
// Single job: expand/collapse the "+14 more nutrients" list in the hero card
// (toggles the hidden attribute and updates the button's label/aria-expanded).
// Used by: index.html

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nutrientToggle');
  const more = document.getElementById('nutrientMore');

  if (!toggle || !more) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';

    more.hidden = isOpen;
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.textContent = isOpen ? '+14 more nutrients' : 'Show fewer nutrients';
  });
});
