import React from "react";
import dynamic from "next/dynamic";
import Hero from "@components/Hero";

const FadeIn = dynamic(() => import("@components/FadeIn"), { ssr: false });
const PhotoCarousel = dynamic(() => import("@components/PhotoCarousel"), { ssr: true });
const Footer = dynamic(() => import("@components/Footer"), { ssr: true });
const FAQs = dynamic(() => import("@components/FAQs"), { ssr: true });
const Customers = dynamic(() => import("@components/Customers"), { ssr: true });
const WhyAR = dynamic(() => import("@components/WhyAR"), { ssr: true });
const WorkTogether = dynamic(() => import("@components/WorkTogether"), { ssr: true });

export default function Home() {
  return (
    <main className='scroll-smooth'>
      <Hero />

      <FadeIn>
        <PhotoCarousel />
      </FadeIn>

      <FadeIn>
        <Customers />
      </FadeIn>

      <WhyAR />

      <FadeIn>
        <p id='contact' className='tracking-[0.015em] customfonttitle md:text-[46px] text-[34px] mx-[30px] text-center animate-glow font-bold mb-10 mt-14'>
          Are we going to work together?
        </p>

        <section className='flex md:flex-row flex-col place-content-center mt-8 md:mb-20'>
          <WorkTogether />
          <FAQs />
        </section>
      </FadeIn>

      

      <Footer />
    </main>
  );
}
