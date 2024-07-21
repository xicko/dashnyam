import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from 'next/dynamic';
import SplashScreen from '@components/SplashScreen';
import { ThemeProvider } from '@components/ThemeContext';

const ParticlesContainer = dynamic(() => import("@components/ParticlesContainer"), { ssr: false });
const NavBar = dynamic(() => import("@components/NavBar"), { ssr: false });
const LocomotiveScroll = dynamic(() => import('@components/LocomotiveScroll'), { ssr: false });

export const metadata: Metadata = {
  title: 'Dashnyam Batbayar',
  description: 'Dashnyam Batbayar is a developer who operates worldwide creating unforgettable experiences in Augmented Reality.',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang='en'>
      <head>
        <meta property='og:image' content='/ogimage.jpg' />
      </head>
      <body className='customfontbase'>
        <ThemeProvider>
          <SplashScreen />
          <ParticlesContainer />
          <NavBar />
          <LocomotiveScroll>
            {children}
            <Analytics />
            <SpeedInsights />
          </LocomotiveScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
