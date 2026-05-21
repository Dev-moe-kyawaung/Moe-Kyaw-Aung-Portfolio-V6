/**
 * main.js — Portfolio V6 Entry Point
 * Moe Kyaw Aung · Android Senior Developer
 * Initializes all feature modules on DOMContentLoaded / load
 */

'use strict';

// ── Module Imports (if using native ES modules in future) ──
// import { initCursor }    from './cursor.js';
// import { initTheme }     from './theme.js';
// etc. For now, each script is loaded independently in index.html

// ── Console branding ───────────────────────────────────────
console.log('%c🤖 Moe Kyaw Aung — Portfolio V6', 'color:#b87333;font-size:1.3rem;font-weight:bold;font-family:monospace;');
console.log('%cAndroid Senior Developer · Tachileik, Myanmar 🇲🇲', 'color:#d4956a;font-size:0.9rem;font-family:monospace;');
console.log('%cgithub.com/Dev-moe-kyawaung', 'color:#6e6e73;font-size:0.8rem;font-family:monospace;');
console.log('%cmoekyawaung@asia.com · +95 988 9000 889', 'color:#6e6e73;font-size:0.8rem;font-family:monospace;');

// ── Global state ───────────────────────────────────────────
const Portfolio = {
  version:  'V6',
  author:   'Moe Kyaw Aung',
  github:   'https://github.com/Dev-moe-kyawaung',
  gravatar: 'https://gravatar.com/moekyawaung2026',
  theme:    'dark',   // default
  modules:  [],

  /** Register a module by name */
  register(name, initFn) {
    this.modules.push({ name, initFn });
  },

  /** Run all registered modules */
  init() {
    this.modules.forEach(({ name, initFn }) => {
      try {
        initFn();
        console.log(`%c✓ ${name}`, 'color:#b87333;font-size:0.75rem;');
      } catch (err) {
        console.warn(`✗ Module [${name}] failed:`, err);
      }
    });
  }
};

// ── Expose globally ────────────────────────────────────────
window.Portfolio = Portfolio;

// ── Smooth scroll for all anchor links ────────────────────
Portfolio.register('SmoothScroll', () => {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// ── Active nav link tracking ───────────────────────────────
Portfolio.register('ActiveNav', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const updateActive = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  };

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive(); // run once on init
});

// ── Back to Top button ─────────────────────────────────────
Portfolio.register('BackToTop', () => {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ── Initialize on DOMContentLoaded ─────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Portfolio.init();
});
