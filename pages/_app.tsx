import { useEffect } from "react";
import { AppProps } from "next/app";
import { initGA, logPageView } from "../utils/analytics";
import dynamic from "next/dynamic";
import NavBar from "@components/NavBar";
import ParticlesContainer from "@components/ParticlesContainer";
import "app/globals.css";
import "@app/locomotive-scroll.css";

const Locomotive = dynamic(() => import("@components/LocomotiveScroll"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div>
      <NavBar />

      <ParticlesContainer />

      <Locomotive>
        <Component {...pageProps} />
      </Locomotive>
    </div>
  );
}

export default MyApp;
