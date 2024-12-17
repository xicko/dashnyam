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
  title: {
    default:'Dashnyam Batbayar',
    template: '%s - Dashnyam Batbayar'},
  description: 'Dashnyam Batbayar is a developer who operates worldwide creating unforgettable experiences in Augmented Reality.',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang='en'>
      <head>
        <meta property='og:image' content='/ogimage.jpg' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const storedTheme = localStorage.getItem('theme');
                const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const theme = storedTheme || systemPreference;
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
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
