'use client';

import React from 'react';
import VideoPlayer, { VideoPlayerProps } from './VideoPlayer';
import Link from 'next/link';

interface FiltersShowcaseProps extends VideoPlayerProps {
  title: string;
  description: string;
  buttonLink: string;
}

const FiltersShowcase: React.FC<FiltersShowcaseProps> = ({ videoSource,subText,topText,placeHolder,title,description,buttonLink }) => {
  return (
    <div className='shrink'>
      <div className='flex justify-center'>
        <div className='sm:bg-transparent md:bg-white lg:bg-white xl:bg-white rounded-2xl flex lg:flex-row flex-col overflow-hidden md:max-w-[600px] md:min-w-[600px] 2xl:max-w-[700px] 2xl:min-w-[700px] h-auto'>
          <div className='md:pl-0 h-fit'>
            <VideoPlayer
              videoSource={videoSource}
              subText={subText}
              topText={topText}
              placeHolder={placeHolder}
            />
          </div>

          <div className='p-10 sm:text-white md:text-black lg:text-black xl:text-black'>
            <h2 className='customfonttitle tracking-[0.03em] text-3xl font-bold mb-2'>
              {title}
            </h2>
            <p className='xl:text-[16px] 2xl:text-xl lg:text-[18px] md:text-[20px] sm:text-[18px] text-[18px] pb-4'>
              {description}
            </p>
            <Link
              href={buttonLink}
              className='flex items-center space-x-[6px] w-fit bg-[#88d0ff] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#5fbfff] transition-colors'
            >
              <span>Try Effect</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="16px"
                height="16px"
              >
                <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersShowcase;
