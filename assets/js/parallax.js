/**
 * parallax.js — Parallax Scrolling
 * Applies to elements with class .parallax-band
 * Speed controlled by data-parallax="0.3" attribute
 */

'use strict';

(function initParallax() {
  const bands = document.querySelectorAll('.parallax-band');
  if (!bands.length) return;

  // Skip on reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function update() {
    bands.forEach(band => {
      const rect  = band.getBoundingClientRect();
      const speed = parseFloat(band.getAttribute('data-parallax')) || 0.3;
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      band.style.backgroundPositionY = `calc(50% + ${offset}px)`;
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update(); // run once on init
})();
