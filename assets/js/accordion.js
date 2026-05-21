/**
 * accordion.js — FAQ Accordion
 * One item open at a time, ARIA expanded state,
 * keyboard accessible (Enter / Space to toggle)
 */

'use strict';

(function initAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => toggle(item));

    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(item);
      }
    });
  });

  function toggle(targetItem) {
    const isOpen = targetItem.classList.contains('open');

    // Close all
    faqItems.forEach(item => {
      item.classList.remove('open');
      const btn = item.querySelector('.faq-question');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });

    // Open clicked (if it was closed)
    if (!isOpen) {
      targetItem.classList.add('open');
      const btn = targetItem.querySelector('.faq-question');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    }
  }
})();
