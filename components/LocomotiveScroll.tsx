'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import '/app/locomotive-scroll.css';

interface LocomotiveScrollProps {
  children: ReactNode;
}

const LocomotiveScroll: React.FC<LocomotiveScrollProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll update all pages

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scroll = new locomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
      });
      
      const element = document.querySelector('html');
      if (element !== null) {
        new ResizeObserver(() => scroll.update()).observe(element);
      } else {
        console.error(
          "The element with the selector '[data-scroll-container]' was not found."
        );
      }

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollContainerRef} data-scroll-container>
      {children}
    </div>
  );
};

export default LocomotiveScroll;
