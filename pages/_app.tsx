import { useEffect } from "react";
import { AppProps } from "next/app";
import { initGA, logPageView } from "../utils/analytics";
import dynamic from "next/dynamic";
import "app/globals.css";
import "@app/locomotive-scroll.css";
import { ThemeProvider } from "@components/ThemeContext";

const ParticlesContainer = dynamic(() => import("@components/ParticlesContainer"), { ssr: false });
const NavBar = dynamic(() => import("@components/NavBar"), { ssr: false });
const Locomotive = dynamic(() => import("@components/LocomotiveScroll"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <>
      <ThemeProvider>
        <NavBar />

        <ParticlesContainer />

        <Locomotive>
          <Component {...pageProps} />
        </Locomotive>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
