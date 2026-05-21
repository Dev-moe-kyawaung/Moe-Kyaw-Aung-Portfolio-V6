/**
 * forms.js — Form Validation & Submission
 * Contact form: full field validation with per-field error messages
 * Newsletter form: email format validation
 */

'use strict';

(function initForms() {
  // ── Contact Form ───────────────────────────────────────────
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      // Validate each field
      valid = validateField('name',    val => val.trim().length >= 2,
        'Please enter your full name (at least 2 characters).') && valid;

      valid = validateField('email',   val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
        'Please enter a valid email address.') && valid;

      valid = validateField('subject', val => val.trim().length >= 3,
        'Please enter a subject (at least 3 characters).') && valid;

      valid = validateField('message', val => val.trim().length >= 10,
        'Please enter your message (at least 10 characters).') && valid;

      if (valid) {
        // ── In a real app, send via fetch/EmailJS/Formspree here ──
        showSuccess('form-success');
        contactForm.reset();
        // Hide success after 5 s
        setTimeout(() => hideSuccess('form-success'), 5000);
      }
    });

    // Live validation on blur
    ['name', 'email', 'subject', 'message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('blur', () => el.dispatchEvent(new Event('validate')));
    });
  }

  // ── Newsletter Form ────────────────────────────────────────
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (!emailInput) return;

      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        const successEl = document.getElementById('newsletter-success');
        if (successEl) {
          successEl.style.display = 'block';
          emailInput.value = '';
          setTimeout(() => { successEl.style.display = 'none'; }, 4500);
        }
      } else {
        emailInput.style.borderColor = '#e06c6c';
        setTimeout(() => { emailInput.style.borderColor = ''; }, 2000);
      }
    });
  }

  // ── Helpers ────────────────────────────────────────────────
  /**
   * Validate a form field and show/hide its error message
   * @returns {boolean} true if valid
   */
  function validateField(id, test, message) {
    const input = document.getElementById(id);
    const error = document.getElementById(id + '-error');
    if (!input) return true;

    const valid = test(input.value);
    if (error) {
      error.textContent = message;
      error.classList.toggle('show', !valid);
    }
    input.style.borderColor = valid ? '' : '#e06c6c';
    return valid;
  }

  function showSuccess(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('show');
  }
  function hideSuccess(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('show');
  }
})();
