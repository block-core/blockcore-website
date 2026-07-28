/* ==========================================================================
   BLOCKCORE — MAIN
   Progressive enhancement only. Every section is fully readable, navigable
   and styled with this file absent; nothing here is load-bearing.
   ========================================================================== */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Mobile navigation -------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('nav-panel');

  if (toggle && panel) {
    var setExpanded = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', function () {
      setExpanded(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Any in-page jump closes the panel so the target is not hidden behind it.
    panel.addEventListener('click', function (event) {
      if (event.target.closest('a')) setExpanded(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      setExpanded(false);
      toggle.focus();
    });
  }

  /* --- Header state -------------------------------------------------------
     The rule thickens once the page is in motion. Structure, not shadow. */
  var header = document.querySelector('.site-header');

  if (header) {
    var updateHeader = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  /* --- Scroll reveal ------------------------------------------------------ */
  var revealables = document.querySelectorAll('[data-reveal]');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) {
      el.classList.add('is-revealed');
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );

    revealables.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- Copyright year ----------------------------------------------------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
