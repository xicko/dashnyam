'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

const HeroImage = () => {
  const [src, setSrc] = useState("/ARb.webp");

  useEffect(() => {
    const updateImageSource = (e?: MediaQueryListEvent) => {
      setSrc(
        e?.matches || window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "/AR.webp"
          : "/ARb.webp"
      );
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateImageSource(); // Set initial image source
    mediaQuery.addEventListener("change", updateImageSource);

    return () => mediaQuery.removeEventListener("change", updateImageSource);
  }, []);

  return (
    <Image
      src={src}
      alt={"AR"}
      width={"350"}
      height={"350"}
      draggable={false}
      priority={true}
      placeholder="blur"
      blurDataURL={src}
      className="fixed md:scale-100 scale-[0.7] left-1/2 transform -translate-x-1/2  md:translate-x-[320px] md:translate-y-0 md:-right-[190px]"
    />
  );
};

export default HeroImage;
