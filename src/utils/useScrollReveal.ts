import { useEffect } from 'react';

/**
 * Hook to trigger standard CSS scroll-reveal transitions
 * as elements scroll into the viewport.
 */
export function useScrollReveal(triggerKey?: unknown) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Fallback if IntersectionObserver isn't supported or reduced motion requested
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      document.querySelectorAll('.scroll-reveal').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.12,
      }
    );

    const observeUnrevealed = () => {
      const elements = document.querySelectorAll('.scroll-reveal:not(.is-revealed)');
      elements.forEach((el) => observer.observe(el));
    };

    // Initial check
    observeUnrevealed();

    // Re-check after slight delay to ensure dynamic React renders are in the DOM
    const rafId = requestAnimationFrame(() => {
      observeUnrevealed();
    });

    const timeoutId = setTimeout(() => {
      observeUnrevealed();
    }, 150);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [triggerKey]);
}
