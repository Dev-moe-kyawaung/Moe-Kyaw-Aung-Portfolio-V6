/**
 * preloader.js — Preloader Animation & Hide
 * Hides the preloader overlay after page load + minimum display time
 */

'use strict';

(function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  // Minimum display time ensures animation completes (matches CSS fill: 1.8s)
  const MIN_DISPLAY = 1900;
  const startTime   = Date.now();

  window.addEventListener('load', () => {
    const elapsed = Date.now() - startTime;
    const delay   = Math.max(0, MIN_DISPLAY - elapsed);

    setTimeout(() => {
      preloader.classList.add('hidden');
      // Remove from DOM after fade-out transition (0.6s)
      setTimeout(() => preloader.remove(), 650);
    }, delay);
  });
})();
