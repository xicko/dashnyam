import { useEffect } from "react";
import { AppProps } from "next/app";
import { initGA, logPageView } from "../utils/analytics";
import dynamic from "next/dynamic";
import "app/globals.css";
import "@app/locomotive-scroll.css";
import ParticlesContainer from "@components/ParticlesContainer";

const NavBar = dynamic(() => import("@components/NavBar"), { ssr: false });
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
