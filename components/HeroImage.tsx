'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeContext';

const HeroImage: React.FC = () => {
  const { theme } = useTheme();
  const [src, setSrc] = useState('/AR.webp');

  useEffect(() => {
    setSrc(theme === 'light' ? '/ARb.webp' : '/AR.webp');
  }, [theme]);

  return (
    <>
      <Image
        src={src}
        alt="AR"
        width={350}
        height={350}
        draggable={false}
        priority={true}
        placeholder="blur"
        blurDataURL={src}
        className="fixed md:scale-100 scale-[0.7] left-1/2 transform -translate-x-1/2 md:translate-x-[320px] md:translate-y-0 md:-right-[190px] animate-pulse"
      />
      <Image
        src={src}
        alt="AR"
        width={350}
        height={350}
        draggable={false}
        priority={true}
        placeholder="blur"
        blurDataURL={src}
        className="fixed md:scale-100 scale-[0.7] left-1/2 transform -translate-x-1/2 md:translate-x-[320px] md:translate-y-0 md:-right-[190px]"
      />
    </>
  );
};

export default HeroImage;
