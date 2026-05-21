/**
 * animations.js — Scroll-triggered Animations
 * Uses IntersectionObserver for fade-in reveal and skill bar fill
 */

'use strict';

(function initAnimations() {
  // ── Fade-in reveal ─────────────────────────────────────────
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

  // ── Skill bars ─────────────────────────────────────────────
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = (bar.getAttribute('data-width') || '0') + '%';
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const aboutSection = document.getElementById('about');
  if (aboutSection) skillObserver.observe(aboutSection);
})();
