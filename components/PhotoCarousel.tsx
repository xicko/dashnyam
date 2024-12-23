"use client";

import React from "react";
import CarouselPhotos from "./CarouselPhotos";
import Autoplay from "embla-carousel-autoplay";
import photos from "public/data/carouselphotos.json";
import { isMobile } from "react-device-detect";
import { Carousel, CarouselContent, CarouselItem } from "@components/ui/carousel";

const PhotoCarousel = () => {
  const plugin = React.useRef(
    isMobile // for setting different delay values and controlling stopOnInteraction
      ? Autoplay({ delay: 3000, stopOnInteraction: false })
      : Autoplay({ delay: 2800, stopOnInteraction: true })
  );

  const handleMouseEnter = () => {
    plugin.current.stop();
  };

  const handleMouseLeave = () => {
    plugin.current.play();
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative flex justify-center md:mb-10 mb-0 overflow-x-auto overflow-y-hidden select-none"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent
        className="md:w-[1264px] cursor-grab overflow-visible"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {photos.map(function (photo, index) {
          return (
            <CarouselItem key={index} className="md:basis-1/4">
              <CarouselPhotos
                photoSource={photo.photoSource}
                subText={photo.subText}
                topText={photo.topText}
                altText={photo.altText}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default PhotoCarousel;
