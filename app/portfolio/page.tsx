import React from "react";
import "app/globals.css";
import dynamic from "next/dynamic";
import Filters from "public/data/filters.json";
import FiltersShowcase from "@components/FiltersShowcase";

const FadeIn = dynamic(() => import("@components/FadeIn"), { ssr: false });
const Footer = dynamic(() => import("@components/Footer"), { ssr: true });

const Page = () => {
   return (
     <main>
       <section className="flex justify-center flex-shrink">
         <div className="grid sm:grid-cols-1 md:grid-cols-1 lg_md:grid-cols-2 xl:grid-cols-2 md:gap-x-20 md:gap-y-20 gap-y-20 pt-28 md:my-10">
           {Filters.map(function (filter) {
             return (
               <FadeIn key={filter.id}>
                 <FiltersShowcase
                   title={filter.title}
                   description={filter.description}
                   buttonLink={filter.buttonLink}
                   videoSource={filter.videoSource}
                   subText={filter.subText}
                   topText={filter.topText}
                   placeHolder={filter.placeHolder}
                 />
               </FadeIn>
             );
           })}
         </div>
       </section>
       <Footer />
     </main>
   );
};

export default Page;