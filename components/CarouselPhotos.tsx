import React from 'react';
import Image from 'next/image';

export interface CarouselPhotosProps {
  photoSource: string;
  subText: string;
  topText: string;
  altText: string;
}

const CarouselPhotos = ({ photoSource, subText, topText, altText }: CarouselPhotosProps) => {
  return (
    <div className='relative md:w-[250px] w-full max-w-[300px] mx-auto my-10 rounded-[15px] overflow-hidden aspect-[9/16 shadow-[0_0px_38px_-14px_rgba(0,0,0,0.6)]'>
      <div className='absolute mt-[300px] inset-0 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[15px] opacity-40'></div>
      </div>

      <div className='absolute bottom-4 left-5 text-white'>
        <p className='text-md font-normal drop-shadow-md'>{subText}</p>
        <p className='text-lg font-semibold drop-shadow-md'>{topText}</p>
      </div>

      <Image
        src={photoSource}
        alt={altText}
        height={1000}
        width={1000}
        quality={80}
        placeholder='blur'
        blurDataURL={photoSource}
        loading='lazy'
        draggable='false'
        className=''
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}/>
    </div>
  )
}

export default CarouselPhotos