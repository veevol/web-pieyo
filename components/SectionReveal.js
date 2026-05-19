"use client";

import { useEffect, useRef } from "react";

export default function SectionReveal({ children, className = "", id }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={`section-reveal ${className}`}>
      {children}
    </section>
  );
}
