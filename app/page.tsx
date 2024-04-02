
import WhyAR from "@components/WhyAR";
import Footer from "@components/Footer";
import React, { ReactNode } from "react";
import Customers from "@components/Customers";
import WorkTogether from "@components/WorkTogether";
import FaqComponent from "@components/FaqComponent";
import Hero from "@components/Hero";
import dynamic from "next/dynamic";
import AnimatedComponent from "@components/AnimatedComponent";
import PhotoCarousel from "@components/PhotoCarousel";
import ParticlesContainer from "@components/ParticlesContainer";

const CustomScroll = dynamic(() => import("@components/CustomScroll"), { ssr: false });

export default function Home() {

  const photos = [
    {
      photoSource: "/thumbnails/webp/burgerking.webp",
      subText: "Filter for Burger King",
      topText: "This or That?",
      altText: "Burger King",
    },
    {
      photoSource: "/thumbnails/webp/lightninghalo.webp",
      subText: "Concept Filter",
      topText: "Lightning Halo",
      altText: "Lightning Halo",
    },

    {
      photoSource: "/thumbnails/webp/unitel.webp",
      subText: "Filter for Unitel",
      topText: "Unitel Green Dot",
      altText: "Unitel",
    },
    {
      photoSource: "/thumbnails/webp/whynaadam.webp",
      subText: "Filter for Next Electronics",
      topText: "WhyNaadam",
      altText: "WhyNaadam",
    },
    {
      photoSource: "/thumbnails/webp/devsummit.webp",
      subText: "Filter for Artisty",
      topText: "DevSummit 2022",
      altText: "DevSummit 2022",
    },
    {
      photoSource: "/thumbnails/webp/koreanfood.webp",
      subText: "Filter for Korea Travel Org",
      topText: "Korean Food",
      altText: "Korean Food",
    },
    {
      photoSource: "/thumbnails/webp/hanbok.webp",
      subText: "Filter for Korea Travel Org",
      topText: "Hanbok",
      altText: "Hanbok",
    },
    {
      photoSource: "/thumbnails/webp/berserk.webp",
      subText: "Concept Filter",
      topText: "Berserk",
      altText: "Berserk",
    },
    {
      photoSource: "/thumbnails/webp/haayachgesen.webp",
      subText: "Filter for EMPR",
      topText: "Haaya ch gesen",
      altText: "Haaya ch gesen",
    },
    {
      photoSource: "/thumbnails/webp/tengri.webp",
      subText: "Concept Filter",
      topText: "Tengri",
      altText: "Tengri",
    },
    {
      photoSource: "/thumbnails/webp/nextgroup.webp",
      subText: "Filter for Next Electronics",
      topText: "Next Group",
      altText: "Next Group",
    },
    {
      photoSource: "/thumbnails/webp/christmashat.webp",
      subText: "Concept Filter",
      topText: "Christmas Hat",
      altText: "Christmas Hat",
    },
    {
      photoSource: "/thumbnails/webp/xickomode.webp",
      subText: "Concept Filter",
      topText: "XICKO MODE",
      altText: "XICKO MODE",
    },
    {
      photoSource: "/thumbnails/webp/blindinglights.webp",
      subText: "Concept Filter",
      topText: "Blinding Lights",
      altText: "Blinding Lights",
    },
  ];

  return (
    <main className="scroll-smooth ">
      
      <ParticlesContainer/>

      <Hero />

      <AnimatedComponent>
        <PhotoCarousel photos={photos} />
      </AnimatedComponent>

      <AnimatedComponent>
        <Customers />
      </AnimatedComponent>

      <WhyAR />

      <AnimatedComponent>
        <p className="font-[CalSans] md:text-[46px] text-[34px] mx-[30px] text-center animate-glow font-bold mb-10 mt-14">
          Are we going to work together?
        </p>
        <div className="flex md:flex-row flex-col place-content-center mt-8 md:mb-20">
          <WorkTogether />
          <div>
            <FaqComponent />
          </div>
        </div>
      </AnimatedComponent>

      <Footer />
    </main>
  );
}
