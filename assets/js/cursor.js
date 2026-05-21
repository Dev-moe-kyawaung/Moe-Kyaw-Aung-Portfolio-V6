/**
 * cursor.js — Custom Cursor Effect
 * Copper dot + ring that follows mouse with smooth RAF animation
 * Expands on interactive elements (links, buttons, cards)
 */

'use strict';

(function initCursor() {
  // Skip on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0;   // mouse position
  let rx = 0, ry = 0;   // ring position (lags behind)

  // Track mouse
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    // Dot snaps instantly
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Smooth ring follow via RAF
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Expand ring on interactive elements
  const interactiveSelectors = 'a, button, .gallery-item, .glass-card, input, textarea, .faq-question, .carousel-btn';

  document.querySelectorAll(interactiveSelectors).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-expanded'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-expanded'));
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();
