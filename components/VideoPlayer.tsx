import React, { useRef, useEffect, useState } from 'react';

export interface VideoPlayerProps {
  videoSource: string;
  subText: string;
  topText: string;
  placeHolder: string;
}

const VideoPlayer = ({ videoSource, subText, topText, placeHolder }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleMouseEnter = () => {
      setIsHovered(true);
      videoElement?.play();
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      videoElement?.pause();
      
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && !isHovered) {
        videoElement?.play();
      } else {
        videoElement?.pause();
      }
    };

    if (videoElement) {
      videoElement.addEventListener('mouseenter', handleMouseEnter);
      videoElement.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        videoElement.removeEventListener('mouseenter', handleMouseEnter);
        videoElement.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, [isHovered]);

  return (
    <div className="relative md:w-[250px] w-full max-w-[300px] md:mx-auto mx-10 my-0 md:rounded-[0px] rounded-[15px] overflow-hidden aspect-[9/16 shadow-[0_0px_60px_-15px_rgba(0,0,0,0.35)]">
      <div className="absolute mt-[300px] inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black md:rounded-none rounded-[15px] opacity-20"></div>
      </div>

      <div className="absolute bottom-4 left-5 text-white">
        <p className="text-md font-normal drop-shadow-md">{subText}</p>
        <p className="text-lg font-semibold drop-shadow-md">{topText}</p>
      </div>

      <video
        ref={videoRef}
        poster={placeHolder}
        autoPlay={isHovered}
        loop
        muted
        playsInline
        preload="none"
        className=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
