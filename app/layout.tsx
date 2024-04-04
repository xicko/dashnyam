import type { Metadata } from "next";
import Navbar from "@components/NavBar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";
import SplashScreen from "@components/SplashScreen";
import ParticlesContainer from "@components/ParticlesContainer";

const CustomScroll = dynamic(() => import("@components/CustomScroll"), { ssr: false });

export const metadata: Metadata = {
  title: "Dashnyam Batbayar",
  description:
    "Dashnyam Batbayar is a developer who operates worldwide creating unforgettable experiences in Augmented Reality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/ogimage.jpg" />
      </head>
      <body className='customfont'>
        <SplashScreen/>

        <ParticlesContainer/>

        <Navbar />

        <CustomScroll>
          {children}
          <Analytics />
          <SpeedInsights />
        </CustomScroll>
      </body>
    </html>
  );
}
