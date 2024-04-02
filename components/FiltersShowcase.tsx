"use client";

import React from 'react';
import VideoPlayer, { VideoPlayerProps } from './VideoPlayer';
import Link from 'next/link';

interface FiltersShowcaseProps extends VideoPlayerProps {
  title: string;
  description: string;
  buttonLink: string;
}

const FiltersShowcase: React.FC<FiltersShowcaseProps> = ({
  videoSource,
  subText,
  topText,
  placeHolder,
  title,
  description,
  buttonLink,
}) => {
  return (
    <div className="shrink">
      <div className=" flex justify-center">
        <div className="sm:bg-transparent md:bg-white lg:bg-white xl:bg-white rounded-2xl flex lg:flex-row flex-col overflow-hidden md:max-w-[600px] md:min-w-[600px] 2xl:max-w-[700px] 2xl:min-w-[700px] h-auto">
          <div className='md:pl-0 h-fit'>
            <VideoPlayer
            videoSource={videoSource}
            subText={subText}
            topText={topText}
            placeHolder={placeHolder}/>
          </div>

          <div className="p-10 sm:text-white md:text-black lg:text-black xl:text-black">
            <h2 className="font-[CalSans] text-3xl font-bold mb-2">{title}</h2>
            <p className="xl:text-[16px] 2xl:text-xl lg:text-[18px] md:text-[20px] sm:text-[18px] text-[18px] pb-4">{description}</p>
            <Link href={buttonLink} className="bg-[#4879F4] text-white px-4 py-2 rounded-md hover:bg-[#3359E9] transition-colors">
                Try Effect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersShowcase;
