'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { animate, motion, useAnimation } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '@components/Footer';

interface CounterProps {
  from: number;
  to: number;
}

const aboutXvalue = isMobile ? '6%' : '-6%';
const aboutXvalue2 = isMobile ? '-6%' : '6%';

const abouttext = isMobile ? 0.5 : 0;
const abouttext2 = isMobile ? 0 : 0.5;

const Page = () => {
  function Counter({ from, to }: CounterProps) {
    const nodeRef = useRef<HTMLSpanElement | null>(null);

    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });

    useEffect(() => {
      if (inView && nodeRef.current) {
        const node = nodeRef.current;

        const controls = animate(from, to, {
          duration: 2,
          onUpdate: (value) => {
            node.textContent = value.toFixed(0);
          },
        });

        return () => controls.stop();
      }
    }, [from, to, inView]);

    return (
      <span
        ref={(el) => {
          ref(el);
          nodeRef.current = el;
        }}
      >
        {inView ? <span></span> : null}
      </span>
    );
  }

  const isMobile = () =>
    typeof window !== 'undefined' && window.innerWidth <= 767;
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const controls8 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  const [ref6, inView6] = useInView({ triggerOnce: true });
  const [ref7, inView7] = useInView({ triggerOnce: true });
  const [ref8, inView8] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, transform: 'translateX(0%)' });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, transform: 'translateX(0%)' });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, transform: 'translateX(0%)' });
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start({ opacity: 1, transform: 'translateX(0%)' });
    }
  }, [controls4, inView4]);

  useEffect(() => {
    if (inView5) {
      controls5.start({ opacity: 1, transform: 'translateX(0%)' });
    }
  }, [controls5, inView5]);

  useEffect(() => {
    if (inView6) {
      controls6.start({ opacity: 1, transform: 'translateX(0%)' });
    }
  }, [controls6, inView6]);

  useEffect(() => {
    if (inView7) {
      controls7.start({ opacity: 1, transform: 'translateX(0%)' });
    }
  }, [controls7, inView7]);

  useEffect(() => {
    if (inView8) {
      controls8.start({ opacity: 1, transform: 'translateX(0%)' });
    }
  }, [controls8, inView8]);

  return (
    <div className='customfontbase animate-glow'>
      <Head>
        <title>About - Dashnyam Batbayar</title>
      </Head>

      <div className='flex justify-center '>
        <div className='flex md:flex-row flex-col-reverse justify-center grow shrink md:px-20 px-8 md:pt-[140px] pt-[85px] pb-[160px] md:max-w-[1496px] md:space-x-14'>
          <motion.div
            ref={ref1}
            animate={controls1}
            initial={{ opacity: 0, transform: `translateX(${aboutXvalue})` }}
            transition={{ duration: 1, ease: 'easeOut', delay: abouttext }}
            className='md:w-6/12 w-full'
          >
            <h1 className='md:text-6xl text-3xl md:tracking-wide md:leading-[1.1] font-medium animate-glow'>
              Since 2020, I have a goal in mind – to build authentic connection
              between brands and people through immersive experiences.
            </h1>
          </motion.div>

          <motion.div
            ref={ref2}
            animate={controls2}
            initial={{ opacity: 0, transform: `translateX(${aboutXvalue2})` }}
            transition={{ duration: 1, ease: 'easeOut', delay: abouttext2 }}
            className='md:mb-0 mb-6'
          >
            <Image
              src='/avatar2.webp'
              alt="Dashnyam's portrait"
              width={600}
              height={600}
              quality={100}
              draggable={false}
              className='shadow-lg rounded-xl'
            />
          </motion.div>
        </div>
      </div>

      <div className='flex justify-center mb-[200px]'>
        <div className='grid md:grid-rows-1 grid-rows-4 md:grid-cols-4 grid-cols-1 gap-20'>
          <motion.div
            ref={ref3}
            animate={controls3}
            initial={{ opacity: 0, transform: 'translateY(10%)' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            className=''
          >
            <p className='text-xl border-b-2 font-normal'>CLIENTS</p>
            <span className='font-medium mt-2 text-6xl'>
              <Counter from={0} to={25} />+
            </span>
          </motion.div>

          <motion.div
            ref={ref4}
            animate={controls4}
            initial={{ opacity: 0, transform: 'translateY(10%)' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1 }}
            className=''
          >
            <p className='text-xl border-b-2 font-normal'>
              BILLIONS OF IMPRESSIONS
            </p>
            <span className='font-medium mt-2 text-6xl'>
              <Counter from={0} to={14} />
            </span>
          </motion.div>

          <motion.div
            ref={ref5}
            animate={controls5}
            initial={{ opacity: 0, transform: 'translateY(10%)' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1.5 }}
            className=''
          >
            <p className='text-xl border-b-2 font-normal'>AR EFFECTS</p>
            <span className='font-medium mt-2 text-6xl'>
              <Counter from={0} to={135} />+
            </span>
          </motion.div>

          <motion.div
            ref={ref6}
            animate={controls6}
            initial={{ opacity: 0, transform: 'translateY(10%)' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 2 }}
            className=''
          >
            <p className='text-xl border-b-2 font-normal'>
              YEARS OF EXPERIENCE
            </p>
            <span className='font-medium mt-2 text-6xl'>
              <Counter from={0} to={4} />
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        ref={ref7}
        animate={controls7}
        initial={{ opacity: 0, transform: 'translateY(10%)' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className='flex justify-center'
      >
        <p className='text-left font-medium text-7xl md:mx-[90px] mx-8 md:w-[1320px] mb-14'>
          OUR VISION
        </p>
      </motion.div>

      <div className='flex justify-center'>
      <div className='md:w-[1320px] mb-[140px]'>
        <div>
          <div className='px-8'>
            <div className='flex md:flex-row flex-col justify-between md:space-x-14 md:gap-0 gap-14'>
              <div className='max-w-xs bg-black bg-opacity-60 rounded-2xl md:p-12 p-6 md:order-1 order-3 h-[500px]'>
                <p className='text-4xl font-medium mb-3'>
                  UNLEASHING YOUR BRANDS&apos; POTENTIAL
                </p>
                <p className='text-xl mb-8 tracking-wider'>
                  We help unlock your brand&apos;s potential through strategic
                  branding, creative campaigns, and digital solutions.
                </p>
                <Link href='mailto:hello@dashnyam.com' className=''>
                  <button className='text-xl py-4 px-8 bg-white rounded-full text-black transform duration-500 ease hover:translate-x-2 hover:-translate-y-2 flex flex-row'>
                    GET IN TOUCH
                    <svg
                      width='26'
                      height='28'
                      viewBox='0 0 18 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z'
                        fill='currentColor'
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>

              <div className='h-[500px] md:order-2 order-1'>
                <Image
                src='/about.webp'
                alt="Dashnyam's portrait"
                width={500}
                height={500}
                quality={100}
                draggable={false}
                className='shadow-lg rounded-xl'/>
              </div>

              <div className='max-w-xs md:order-3 order-2'>
                <p className='text-4xl font-medium mb-3'>
                  PUTTING OUR CLIENTS&apos; SUCCESS FIRST
                </p>
                <p className='text-xl tracking-wider'>
                  We prioritize our clients&apos; success by understanding their
                  goals and delivering tailored solutions that drive real growth
                  for their business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;