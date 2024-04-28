'use client';

import React, { useEffect, useRef, useState } from 'react';
import CarouselPhoto, { CarouselPhotoProps } from './CarouselPhoto';

interface PhotoCarouselProps {
  photos: CarouselPhotoProps[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const isClient = typeof window !== 'undefined'; // Check if running on the client side

  const duplicatePhotos = () => {
    return photos.concat(photos, photos, photos, photos);
  };

  const duplicatedPhotos = duplicatePhotos();

  let autoplayStep = 1; // Adjust the scroll step as needed
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    autoplayStep = 0.7; // Set a different step for mobile devices
  }

  const handleAutoplay = () => {
    if (!isDragging && carouselRef.current) {
      carouselRef.current.scrollLeft += autoplayStep;
    }
    requestAnimationFrame(handleAutoplay);
  };
  
  useEffect(() => {
    const autoplayId = requestAnimationFrame(handleAutoplay);
  
    return () => cancelAnimationFrame(autoplayId);
  }, []);

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
      <div className='flex md:gap-12 gap-[0px] md:space-x-4 space-x-[2px] md:mx-[150px] mx-[50px]'>
        {duplicatedPhotos.map((photo, index) => (
          <div
            key={index}
            className={`flex-none transform transition-transform md:scale-100 scale-[0.88]`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselPhoto {...photo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoCarousel;
