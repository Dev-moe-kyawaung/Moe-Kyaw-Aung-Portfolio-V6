/**
 * lightbox.js — Image Lightbox Gallery
 * Click any .gallery-item to open full-size image
 * Close: X button, backdrop click, Escape key
 * Navigate: prev/next arrows (keyboard or buttons)
 */

'use strict';

(function initLightbox() {
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  if (!lightbox || !lightboxImg) return;

  const galleryItems  = Array.from(document.querySelectorAll('.gallery-item'));
  let   currentIndex  = 0;

  // ── Open ───────────────────────────────────────────────────
  function openLightbox(index) {
    currentIndex = index;
    const item = galleryItems[index];
    lightboxImg.src = item.getAttribute('data-src') || item.querySelector('img')?.src || '';
    lightboxImg.alt = item.querySelector('img')?.alt || 'Gallery image';
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // ── Close ──────────────────────────────────────────────────
  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Clear src after animation
    setTimeout(() => { lightboxImg.src = ''; }, 300);
  }

  // ── Navigate ───────────────────────────────────────────────
  function navigate(direction) {
    const next = (currentIndex + direction + galleryItems.length) % galleryItems.length;
    openLightbox(next);
  }

  // ── Event listeners ────────────────────────────────────────
  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `View image ${i + 1} of ${galleryItems.length}`);
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'ArrowLeft')  navigate(-1);
  });
})();
