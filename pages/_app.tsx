import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { initGA, logPageView } from '../utils/analytics';
import 'app/globals.css';
import '@app/locomotive-scroll.css';
import dynamic from "next/dynamic";

import NavBar from '@components/NavBar';

const CustomScroll = dynamic(() => import("@components/CustomScroll"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return <div><NavBar/><CustomScroll><Component {...pageProps}/></CustomScroll></div>;
}

export default MyApp;
