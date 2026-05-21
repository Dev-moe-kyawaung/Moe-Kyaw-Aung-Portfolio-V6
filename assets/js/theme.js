/**
 * theme.js — Dark / Light Mode Toggle
 * Reads/writes localStorage for persistence across sessions
 */

'use strict';

(function initTheme() {
  const html      = document.documentElement;
  const themeBtn  = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  if (!themeBtn) return;

  // Restore saved theme
  const saved = localStorage.getItem('mka-theme') || 'dark';
  applyTheme(saved);

  themeBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('mka-theme', theme);
    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'fa fa-moon' : 'fa fa-sun';
    }
  }
})();
