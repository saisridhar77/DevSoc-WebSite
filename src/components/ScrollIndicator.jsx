import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollIndicator = () => {
  const indicatorRef = useRef(null);

  useEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    // Create scroll progress animation
    gsap.to(indicator, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={indicatorRef}
      className="scroll-indicator"
    />
  );
};

export default ScrollIndicator;