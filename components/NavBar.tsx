import React from 'react';
import Link from 'next/link';
import HeroFadeIn from './CustomFadeIn';

const NavBar: React.FC = () => {
  return (
    <HeroFadeIn
      className='from-[#121212] to-transparent bg-gradient-to-b fixed backdrop-blur-[10px] z-50 backdrop-filter bg-opacity-25 md:p-6 p-4 w-full top-0'
      direction='top'
      tension={250}
      friction={120}
    >
      <section className='container mx-auto'>
        <div className='flex items-center justify-center font-medium text-xl'>
          <div className='flex md:space-x-12 space-x-8'>
            <Link
              href='/'
              className='transform duration-500 hover:scale-[1.10] ease'
            >
              Home
            </Link>

            <Link
              hidden
              href='about'
              className='transform duration-500 hover:scale-[1.10] ease'
            >
              About
            </Link>

            <Link
              href='portfolio'
              className='transform duration-500 hover:scale-[1.10] ease'
            >
              Portfolio
            </Link>

            <Link
              href='assets'
              className='transform duration-500 hover:scale-[1.10] ease'
            >
              Assets
            </Link>

            <Link
              hidden
              href='https://inxta.dashnyam.com'
              className='transform duration-500 hover:scale-[1.10] ease'
            >
              Inxta
            </Link>
          </div>
        </div>
      </section>
    </HeroFadeIn>
  );
};

export default NavBar;