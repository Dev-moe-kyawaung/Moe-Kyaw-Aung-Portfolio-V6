/**
 * counter.js — Animated Statistics Counter
 * Uses IntersectionObserver + requestAnimationFrame
 * Data attribute: data-target="N"
 */

'use strict';

(function initCounter() {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  /**
   * Animate a single counter element from 0 to target
   * @param {HTMLElement} el      — the .stat-number element
   * @param {number}      target  — final value
   * @param {number}      duration— animation duration in ms
   */
  function animateCounter(el, target, duration = 1800) {
    const suffix = el.querySelector('.stat-suffix');
    const textNode = el.childNodes[0]; // first text node holds the number

    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        textNode.textContent = current;
      } else {
        // Rebuild text node before suffix
        el.insertBefore(document.createTextNode(current), suffix);
      }

      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  // Trigger when stats section enters viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-number[data-target]').forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          animateCounter(el, target);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.35 });

  observer.observe(statsSection);
})();
