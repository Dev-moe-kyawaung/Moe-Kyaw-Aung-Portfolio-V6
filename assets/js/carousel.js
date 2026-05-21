/**
 * carousel.js — Testimonials Carousel
 * Features: prev/next, dot indicators, auto-advance every 5s,
 * pause on hover, touch/swipe support
 */

'use strict';

(function initCarousel() {
  const track   = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const dots    = document.querySelectorAll('.carousel-dot');
  if (!track || !prevBtn || !nextBtn) return;

  const totalSlides  = document.querySelectorAll('.testimonial-slide').length;
  let   currentSlide = 0;
  let   autoTimer    = null;

  // ── Go to slide ────────────────────────────────────────────
  function goToSlide(n) {
    currentSlide = ((n % totalSlides) + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  // ── Auto-advance ───────────────────────────────────────────
  function startAuto() {
    autoTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
  }
  function stopAuto() {
    clearInterval(autoTimer);
  }

  startAuto();

  // Pause on hover
  track.addEventListener('mouseenter', stopAuto);
  track.addEventListener('mouseleave', startAuto);

  // ── Controls ───────────────────────────────────────────────
  prevBtn.addEventListener('click', () => {
    stopAuto(); goToSlide(currentSlide - 1); startAuto();
  });
  nextBtn.addEventListener('click', () => {
    stopAuto(); goToSlide(currentSlide + 1); startAuto();
  });

  // Dot clicks
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAuto(); goToSlide(i); startAuto();
    });
  });

  // ── Touch / Swipe ──────────────────────────────────────────
  let touchStartX = 0;

  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      stopAuto();
      goToSlide(currentSlide + (delta > 0 ? 1 : -1));
      startAuto();
    }
  }, { passive: true });

  // ── Keyboard ───────────────────────────────────────────────
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { stopAuto(); goToSlide(currentSlide - 1); startAuto(); }
    if (e.key === 'ArrowRight') { stopAuto(); goToSlide(currentSlide + 1); startAuto(); }
  });
})();
