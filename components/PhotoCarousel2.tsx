'use client';

import React, { useEffect, useRef, useState } from 'react';
import CarouselPhotos, { CarouselPhotosProps } from './CarouselPhotos';

interface PhotoCarouselProps {
  photos: CarouselPhotosProps[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [autoplayStep, setAutoplayStep] = useState(1); // Initial autoplay step for desktop

  useEffect(() => {
    const updateAutoplayStep = () => {
      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        setAutoplayStep(0.7); // Mobile step
      } else {
        setAutoplayStep(1); // Desktop step
      }
    };

    updateAutoplayStep();
    window.addEventListener('resize', updateAutoplayStep);

    return () => {
      window.removeEventListener('resize', updateAutoplayStep);
    };
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && carouselRef.current) {
      const deltaX = event.clientX - startX;
      carouselRef.current.scrollLeft -= deltaX;
      setStartX(event.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const isClient = typeof window !== 'undefined'; // Check if running on the client side

  const duplicatedPhotos = photos.concat(photos);

  const handleAutoplay = () => {
    if (!isDragging && carouselRef.current) {
      if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
        carouselRef.current.style.scrollBehavior = 'auto';
        carouselRef.current.scrollLeft = 0;
        carouselRef.current.style.scrollBehavior = 'smooth';
      } else {
        carouselRef.current.scrollLeft += autoplayStep;
      }
    }
    requestAnimationFrame(handleAutoplay);
  };

  useEffect(() => {
    const autoplayId = requestAnimationFrame(handleAutoplay);
    return () => cancelAnimationFrame(autoplayId);
  }, [autoplayStep]);

  return (
    <section
      className='relative md:mb-10 mb-0 overflow-x-auto overflow-y-hidden'
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
    >
      <div className='flex md:gap-12 gap-[0px] md:space-x-4 space-x-[2px] md:mx-[300px] mx-[50px]'>
        {duplicatedPhotos.map((photo, index) => (
          <div
            key={index}
            className={`flex-none transform transition-transform md:scale-100 scale-[0.88]`}
          >
            <CarouselPhotos {...photo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoCarousel;