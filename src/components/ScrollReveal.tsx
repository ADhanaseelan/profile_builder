import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Cinematic vertical page-slide reveal.
 * Each section slides up from below like a new page appearing —
 * no left/right movement, just a smooth upward entrance.
 */
const ScrollReveal = ({ children, className = '' }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('page-revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.06 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`page-slide-section ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
