'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';
import Link from 'next/link';
import Button1 from './Button1';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }

      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
    };
  }, [imageRef, textRef]);

  const imageSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    config: {
      tension: 250, // Adjust the tension for the desired speed
      friction: 40, // Adjust the friction for the desired speed
    },
  });

  const textSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateY(20px)',
    config: {
      tension: 250, // Adjust the tension for the desired speed
      friction: 50, // Adjust the friction for the desired speed
    },
  });

  return (
    <section className='flex justify-center'>
      <div className='flex justify-center flex-col md:w-[1400px] md:pt-[168px] pt-[60px] md:pb-[85px] pb-[0px]'>
        <animated.div
          className='w-[200px]'
          style={imageSpring}
          ref={imageRef}
        ></animated.div>

        <animated.div
          className='md:ml-[140px] mx-[30px] mt-6 md:mr-[300px] flex md:flex-row flex-col-reverse'
          style={imageSpring}
          ref={imageRef}
        >
          <h1 className='customfonttitle md:text-[60px] text-[36px] font-medium text-start animate-glow md:mt-0 mt-4'>
            HIGH END <br></br>
            <span className='font-extrabold md:text-[74px] text-[36px]'>
              AUGMENTED REALITY
            </span>{' '}
            SOLUTIONS
          </h1>

          <div className='flex items-center justify-center md:justify-end w-[200px] md:h-[275px] h-[200px]'>
            <Image
              src={'/AR.webp'}
              alt={'AR'}
              width={'350'}
              height={'350'}
              draggable={false}
              priority={true}
              className='fixed md:scale-100 scale-[0.7] left-1/2 transform -translate-x-1/2  md:translate-x-[320px] md:translate-y-0 md:-right-[190px]'
            />
          </div>
        </animated.div>

        <animated.div
          className='md:mx-[140px] mx-[30px] mt-6'
          style={textSpring}
          ref={textRef}
        >
          <h1 className='md:text-[24px] text-[18px] font-normal text-start animate-glow'>
            Comprehensive AR solutions that help fashion, lifestyle, and luxury
            brands connect with their target audience on retail and in the main
            social platforms.
          </h1>
        </animated.div>

        <animated.div
          className='flex justify-center'
          style={textSpring}
          ref={imageRef}
        >
          <div className='mt-[25px] mb-0 flex flex-wrap md:justify-center justify-start md:mx-0 mx-[30px] md:gap-x-6 md:gap-0 gap-x-6 gap-y-6'>
            <Button1 link={'#contactform'} anchor={true}>
              <span>Contact</span>
              <svg xmlns="http://www.w3.org/2000/svg" width={'18'} height={'22'} viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
            </Button1>

            <Button1 link={'/portfolio'} anchor={false}>
              <span>Portfolio</span>
              <svg xmlns='http://www.w3.org/2000/svg' width={'14'} height={'22'} viewBox='0 0 320 512'><path d='M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z'/></svg>
            </Button1>

            <Button1 link={'/assets'} anchor={false}>
              <span>Browse Assets</span>
              <svg xmlns="http://www.w3.org/2000/svg" width={'22'} height={'22'} viewBox="0 0 512 512"><path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"/></svg>
            </Button1>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Hero;