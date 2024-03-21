'use client';

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { useSpring, animated } from "react-spring";

interface AnimatedComponentProps {
  children: ReactNode;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const componentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (componentRef.current) {
      componentObserver.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        componentObserver.unobserve(componentRef.current);
      }
    };
  }, [componentRef]);

  const componentSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    config: {
      tension: 250, // Adjust the tension for the desired speed
      friction: 80, // Adjust the friction for the desired speed
    },
  });

  return (
    <animated.div ref={componentRef} style={componentSpring}>
      {children}
    </animated.div>
  );
};

export default AnimatedComponent;
