"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { useSpring, animated } from "react-spring";

interface FadeInProps {
  children: ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const lastScrollY = useRef(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const componentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
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
    transform: isScrollingDown
      ? isVisible
        ? "translateY(0)"
        : "translateY(30px)"
      : isVisible
      ? "translateY(0px)"
      : "translateY(-30px)",
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

export default FadeIn;
