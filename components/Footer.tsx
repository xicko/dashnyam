import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gradient-to-t from-[#1212120a] dark:bg-[#121212] backdrop-blur-sm dark:backdrop-blur-[10px] backdrop-filter dark:bg-opacity-25 p-6 py-12 text-black dark:text-white font-medium'>
      <div className='container mx-auto flex flex-col-reverse gap-4 md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0'>
          <p className=''>&copy; {currentYear} XICKO.</p>
        </div>

        <div className='flex flex-row md:gap-6 gap-4'>
          <Link
            target='_blank'
            aria-label='Instagram'
            href='https://www.instagram.com/dashnyima'
            className='ease transform duration-150 scale-[1.08] hover:scale-[1.25]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='35'
              height='35'
              className='svg-color items-center'
              viewBox='0 0 24 24'
            >
              <path d='M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z' />
            </svg>
          </Link>
          <Link
            target='_blank'
            aria-label='Facebook'
            href='https://www.facebook.com/xicko'
            className='ease transform duration-150 scale-[1.08] hover:scale-[1.25]'
          >
            <svg
              width='35'
              height='35'
              className='svg-color'
              xmlns='http://www.w3.org/2000/svg'
              fill-rule='evenodd'
              clip-rule='evenodd'
              viewBox='0 0 24 24'
            >
              <path d='M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm0 5.5c-3.866 0-7 2.902-7 6.481 0 2.04 1.018 3.86 2.609 5.048v2.471l2.383-1.308c.636.176 1.31.271 2.008.271 3.866 0 7-2.902 7-6.482 0-3.579-3.134-6.481-7-6.481zm.696 8.728l-1.783-1.901-3.478 1.901 3.826-4.061 1.826 1.901 3.435-1.901-3.826 4.061z' />
            </svg>
          </Link>
          <Link
            target='_blank'
            aria-label='LinkedIn'
            href='https://www.linkedin.com/in/dashnyam'
            className='ease transform duration-150 scale-[1.08] hover:scale-[1.25]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='35'
              height='35'
              className='svg-color'
              viewBox='0 0 24 24'
            >
              <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z' />
            </svg>
          </Link>
        </div>

        <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
          <div className='text-center md:text-right'>
            <p>
              Contact: <Link href='tel:61435444282'>+61 435444282</Link>
            </p>
            <p>
              <Link href='mailto:hello@dashnyam.com'>hello@dashnyam.com</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
