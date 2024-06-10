'use client';

import React, { useRef, useState, useEffect, ComponentClass } from 'react';
import { useSpring, animated } from 'react-spring';

interface HeroFadeInProps {
  tension?: number;
  friction?: number;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

const HeroFadeIn: React.FC<HeroFadeInProps> = ({ 
  tension, 
  friction, 
  direction, 
  children,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef]);

  const getTransformValue = () => {
    switch (direction) {
      case 'top':
        return 'translateY(-20px)';
      case 'bottom':
        return 'translateY(20px)';
      case 'left':
        return 'translateX(-20px)';
      case 'right':
        return 'translateX(20px)';
      default:
        return 'translateY(0)';
    }
  };

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : getTransformValue(),
    config: {
      tension: tension,
      friction: friction,
    },
  });

  return (
    <animated.div className={className} style={springProps} ref={elementRef}>
      {children}
    </animated.div>
  );
};

export default HeroFadeIn;
