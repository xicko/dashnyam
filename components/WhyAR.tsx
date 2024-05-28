'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import StatsCounter from './StatsCounter';

const WhyAR = () => {
  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth <= 767;
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, transform: "translateX(0%)" });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, transform: "translateX(0%)" });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, transform: "translateX(0%)" });
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start({ opacity: 1, transform: "translateX(0%)" });
    }
  }, [controls4, inView4]);

  return (
    <section className='md:px-[140px] px-[30px] overflow-x-hidden '>
      <div className='flex justify-center flex-col flex-1 flex-grow md:flex-row md:gap-10'>
        <motion.div
          ref={ref1}
          animate={controls1}
          initial={{ opacity: 0, transform: "translateX(-10%)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className='bg-[#e8f4fc] bg-opacity-100 bg-cover md:w-[700px] rounded-3xl text-black p-10 mt-10'
        >
          <div>
            <div className='customfonttitle md:text-[54px] text-[44px] font-semibold'>
              Why AR?
            </div>
            <div className='md:text-2xl py-4'>
              AR brings brands to life with strategy and design.
            </div>
            <div className='md:text-2xl'>
              AR enhances engagement, boosts interaction, and elevates user
              experiences. Studies reveal heightened perceived value for
              products and brands with AR. Well-executed AR initiatives signal
              innovation and responsiveness from forward-thinking brands.
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          animate={controls2}
          initial={{ opacity: 0, transform: "translateX(15%)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className='bg-lime-100 bg-opacity-100 bg-cover md:w-[450px] rounded-3xl mt-10 text-black'
        >
          <div>
            <div className='md:text-2xl pt-8 px-10 pb-6'>
              The effects created for my customers are shared millions of times,
              resulting in billions of monthly impressions and thousands of
              user-generated content.
            </div>

            <div className='grid grid-rows-2 grid-cols-2 pb-8 gap-y-6 md:text-2xl'>
              <div className=' font-medium px-10'>
                Clients<br/>
                <StatsCounter from={0} to={25} duration={3}/>
              </div>

              <div className='font-medium md:px-10 px-4'>
                Impressions<br/>
                <StatsCounter from={0} to={16} duration={3} textprefix="+" textsuffix='Billion'/>
              </div>

              <div className='font-medium pl-10'>
                AR Effects<br/>
                <StatsCounter from={0} to={135} duration={2.5}/>
              </div>

              <div className='font-medium md:px-10 px-4'>
                Experience<br/>
                <StatsCounter from={0} to={4} duration={3.5} textsuffix='Years'/>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className='flex justify-center flex-col-reverse flex-1 flex-grow md:flex-row md:gap-10 mb-20'>
        <motion.div
          ref={ref3}
          animate={controls3}
          initial={{
            opacity: 0,
            transform: isMobile() ? "translateX(20%)" : "translateX(-15%)",
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className='bg-orange-100 bg-opacity-100 md:w-[450px] rounded-3xl text-black mt-10'
        >
          <div>
            <div className='md:text-2xl pt-8 px-10 pb-6'>
              It all starts with an idea. Maybe you want to sell a product. You
              may have a creative project to share with the world. Or maybe you
              want to present your audience. Whatever it is, the way you tell
              your story online can make all the difference.
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref4}
          animate={controls4}
          initial={{
            opacity: 0,
            transform: isMobile() ? "translateX(-20%)" : "translateX(10%)",
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className='bg-[#ffd4e4] bg-opacity-100 md:w-[700px] rounded-3xl text-black p-10 mt-10'
        >
          <div>
            <div hidden className='text-[40px] font-semibold'>
              Why AR?
            </div>
            <div className='md:text-2xl font-semibold pb-4'>
              Instagram is growing steadily and is expected to reach 2.5 billion
              active users by 2025.
            </div>
            <div className='md:text-2xl'>
              Augmented reality on social platforms is reshaping sales and
              marketing. Forward-thinking companies using AR enhance customer
              experiences, driving business opportunities, sales, and brand
              awareness.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAR;
