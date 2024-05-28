import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';
import Link from 'next/link';

const HeroAlt = () => {
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
    <div className='flex justify-center md:mb-4'>
      <div className='flex justify-center flex-col md:w-[1400px] pt-[120px]'>

        <animated.div
          className='flex justify-center'
          style={imageSpring}
          ref={imageRef}
        >
          <Image
            src='/avatar.webp'
            alt='Avatar'
            draggable={false}
            width={200}
            height={200}
            quality={90}
            priority={true}
          />
        </animated.div>

        <animated.div
          className='md:mx-[140px] mx-[30px] mt-6'
          style={textSpring}
          ref={textRef}
        >
          <h1 className='md:text-[48px] text-[28px] font-medium text-start animate-glow'>
            <span className='font-bold'>Dashnyam Batbayar</span> is a developer who operates worldwide creating unforgettable experiences in Augmented Reality.
          </h1>
        </animated.div>

        <animated.div
          className='flex justify-center'
          style={textSpring}
          ref={imageRef}
        >
        <div className='mt-[25px] flex justify-center'>
          <Link href='/portfolio'><button className='bg-slate-200 text-slate-800 font-medium border-1 p-[15px] rounded-lg text-[20px] border-slate-200 hover:shadow-[0_5px_60px_-15px_rgba(186,230,253,1)] shadow-[0px_0px_50px_-15px_rgba(186,230,253,0.4)] transition ease duration-700'>Portfolio</button></Link>
        </div>
        </animated.div>

        <h2 hidden className='text-[24px]'>A better Instagram.</h2>

        <p hidden className='text-slate-300 text-center -mt-4 md:mb-2 mb-10'>Android 9.0+</p>

      </div>
    </div>
  );
};

export default HeroAlt;
