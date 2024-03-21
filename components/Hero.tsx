'use client';

import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import Link from "next/link";

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
    transform: isVisible ? "translateY(0)" : "translateY(-20px)",
    config: {
      tension: 250, // Adjust the tension for the desired speed
      friction: 40, // Adjust the friction for the desired speed
    },
  });

  const textSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateY(20px)",
    config: {
      tension: 250, // Adjust the tension for the desired speed
      friction: 50, // Adjust the friction for the desired speed
    },
  });

  return (
    <section className="flex justify-center">
      <div className="flex justify-center flex-col md:w-[1400px] md:pt-[168px] pt-[60px] md:pb-[85px] pb-[0px]">
        <animated.div
          className="w-[200px]"
          style={imageSpring}
          ref={imageRef}
        ></animated.div>

        <animated.div
          className="md:ml-[140px] mx-[30px] mt-6 md:mr-[300px] flex md:flex-row flex-col-reverse"
          style={imageSpring}
          ref={imageRef}
        >
          <h1 className="md:text-[58px] text-[36px] font-medium text-start animate-glow md:mt-0 mt-4">
            HIGH END <br></br>
            <span className="font-extrabold md:text-[74px] text-[36px]">
              AUGMENTED REALITY
            </span>{" "}
            SOLUTIONS
          </h1>

          <div className="flex items-center justify-center md:justify-end w-[200px] md:h-[275px] h-[200px]">
            <Image
              src={"/AR.webp"}
              alt={"AR"}
              width={"350"}
              height={"350"}
              draggable={false}
              priority={true}
              className="fixed md:scale-100 scale-[0.7] left-1/2 transform -translate-x-1/2  md:translate-x-[320px] md:translate-y-0 md:-right-[190px]"
            />
          </div>
        </animated.div>

        <animated.div
          className="md:mx-[140px] mx-[30px] mt-6"
          style={textSpring}
          ref={textRef}
        >
          <h1 className="md:text-[24px] text-[18px] font-normal text-start animate-glow">
            Comprehensive AR solutions that help fashion, lifestyle, and luxury
            brands connect with their target audience on retail and in the main
            social platforms.
          </h1>
        </animated.div>

        <animated.div
          className="flex justify-center"
          style={textSpring}
          ref={imageRef}
        >
          <div className="mt-[25px] mb-0 flex justify-center">
            <Link
              className="bg-slate-200 text-slate-800 font-semibold border-1 p-[15px] rounded-lg text-[20px] border-slate-200 hover:shadow-[0_5px_60px_-15px_rgba(186,230,253,1)] shadow-[0px_0px_50px_-15px_rgba(186,230,253,0.4)] transition ease duration-700"
              href={"/portfolio"}
            >
              Portfolio
            </Link>
          </div>
        </animated.div>

        <h2 hidden className="text-[24px]">
          A better Instagram.
        </h2>

        <p hidden className="text-slate-300 text-center -mt-4 md:mb-2 mb-10">
          Android 9.0+
        </p>
      </div>
    </section>
  );
};

export default Hero;