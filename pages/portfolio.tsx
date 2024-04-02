import React from "react";
import Footer from "@components/Footer";
import "app/globals.css";
import Head from "next/head";
import FiltersShowcase from "@components/FiltersShowcase";
import AnimatedComponent from "@components/AnimatedComponent";
import ParticlesContainer from "@components/ParticlesContainer";

const portfolio = () => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <main onContextMenu={handleContextMenu} className="">
      <Head>
        <title>Portfolio - Dashnyam Batbayar</title>
      </Head>

      <section className="flex justify-center flex-shrink">
      <ParticlesContainer/>
        <div className=" grid sm:grid-cols-1 md:grid-cols-1 lg_md:grid-cols-2 xl:grid-cols-2 md:gap-x-20 md:gap-y-20 gap-y-20 pt-28 my-10 ">
        <AnimatedComponent>
          <FiltersShowcase
            title={"This Or That?"}
            description={
              "Interactive AR filter designed for Burger King Mongolia's Instagram audience, it allows users to make choices between two presented options in a fun and engaging way. It adds a playful element to brand interactions on the platform."
            }
            buttonLink={"https://www.instagram.com/ar/284575277304570/"}
            videoSource={"/videos/burgerking.mp4"}
            subText={""}
            topText={"Burger King Mongolia"}
            placeHolder={"/thumbnails/webp/burgerking.webp"}
          />
        </AnimatedComponent>

        <AnimatedComponent>
          <FiltersShowcase
            title={"Lightning Halo"}
            description={
              "This concept AR filter combines the aesthetics of an Angel and Lightning God.  A halo hovers above the user's head, while electric lightning bolts can be created between the hands and emanate from the eyes."
            }
            buttonLink={"https://www.instagram.com/ar/3419292975068246/"}
            videoSource={"/videos/lightninghalo.mp4"}
            subText={""}
            topText={""}
            placeHolder={"/thumbnails/webp/lightninghalo.webp"}
          />
        </AnimatedComponent>

        <AnimatedComponent>
          <FiltersShowcase
            title={"Unitel Green Dot"}
            description={
              "This AR filter utilizes target tracking on Unitel's new rebranding posters. The filter dynamically overlays a neon outline and animates green dots/bubbles, creating an engaging interactive experience for viewers."
            }
            buttonLink={"https://www.instagram.com/ar/430300512125145/"}
            videoSource={"/videos/unitel.mp4"}
            subText={""}
            topText={"Unitel"}
            placeHolder={"/thumbnails/webp/unitel.webp"}
          />
        </AnimatedComponent>

        <AnimatedComponent>
          <FiltersShowcase
            title={"Why Naadam"}
            description={
              "This interactive filter uses randomization to reveal a user's Naadam experience, transforming them into a Mongolian wrestler, or a queen, or even a funny potato! Developed for Next Electronics' social media campaign promoting the Naadam celebration in Mongolia, in collaboration with artist Young Mo'g's single \"Naadii\""
            }
            buttonLink={"https://www.instagram.com/ar/1133924154084681/"}
            videoSource={"/videos/whynaadam.mp4"}
            subText={""}
            topText={"Next Electronics"}
            placeHolder={"/thumbnails/webp/whynaadam.webp"}
          />
        </AnimatedComponent>

        <AnimatedComponent>
          <FiltersShowcase
            title={"DevSummit 2022"}
            description={
              "An interactive filter created for Artisty at DevSummit 2022 that utilizes full-body tracking to let users try-on futuristic mixed reality headsets. Additionally, when users fully enter the frame, they transform into neon robots."
            }
            buttonLink={"https://www.instagram.com/ar/1133924154084681/"}
            videoSource={"/videos/devsummit.mp4"}
            subText={""}
            topText={"Artisty"}
            placeHolder={"/thumbnails/webp/devsummit.webp"}
          />
        </AnimatedComponent>

        <AnimatedComponent>
          <FiltersShowcase
            title={"Korean Food"}
            description={
              "This interactive game filter challenges users to catch falling Korean dishes, increasing their score. Reach a score of 10 to win! Developed for the Korean Travel Organization Mongolia's giveaway campaign."
            }
            buttonLink={"https://www.instagram.com/ar/4367278686689320/"}
            videoSource={"/videos/koreanfood.mp4"}
            subText={""}
            topText={"Korean Travel Org"}
            placeHolder={"/thumbnails/webp/koreanfood.webp"}
          />
        </AnimatedComponent>

        <AnimatedComponent>
          <FiltersShowcase
            title={"Hanbok"}
            description={
              "This interactive filter allows users to virtually try on different types of Korean traditional clothes, Hanbok. It was created for a giveaway campaign by the Korean Travel Organization Mongolia."
            }
            buttonLink={"https://www.instagram.com/ar/1548842432128283/"}
            videoSource={"/videos/hanbok.mp4"}
            subText={""}
            topText={"Korean Travel Org"}
            placeHolder={"/thumbnails/webp/hanbok.webp"}
          />
        </AnimatedComponent>

        <AnimatedComponent>
          <FiltersShowcase
            title={"Tengri"}
            description={
              'Users appear with glowing white eyes and black tears. On the left cheek, ancient Mongol/Xiongnu symbols for Fire, Sun, and Moon are displayed, while the phrase "Eternal Blue Sky" in traditional Mongolian script glows with volumetric light effect. In the background, a quote from the Middle Mongol era in traditional script.'
            }
            buttonLink={"https://www.instagram.com/ar/1368282557107974/"}
            videoSource={"/videos/tengri.mp4"}
            subText={""}
            topText={""}
            placeHolder={"/thumbnails/webp/tengri.webp"}
          />
        </AnimatedComponent>

        <AnimatedComponent>
          <FiltersShowcase
            title={"Haaya ch gesen"}
            description={
              "A randomizer filter presents users with a series of randomized options. Based on their results, it reveals a positive action or outcome. This filter was created for EMPR's campaign promoting positivity and combating hate. The goal is to discourage harmful hate comments that negatively impact all parties involved."
            }
            buttonLink={"https://www.instagram.com/ar/223689836421545/"}
            videoSource={"/videos/haayachgesen.mp4"}
            subText={""}
            topText={"EMPR"}
            placeHolder={"/thumbnails/webp/haayachgesen.webp"}
          />
        </AnimatedComponent>

        <AnimatedComponent>
          <FiltersShowcase
            title={"Next Group"}
            description={
              "A randomizer filter that offers users a series of randomized options to reveal what brings them happiness. Created for Next Group's New Year social media campaign."
            }
            buttonLink={"https://www.instagram.com/ar/457150153253641/"}
            videoSource={"/videos/nextgroup.mp4"}
            subText={""}
            topText={"Next Group"}
            placeHolder={"/thumbnails/webp/nextgroup.webp"}
          />
        </AnimatedComponent>

        <AnimatedComponent>
          <FiltersShowcase
            title={"Christmas Hat"}
            description={
              "A Christmas-themed filter allowing users to virtually try on four different colored Christmas hats in 3D, accompanied by a subtle snowing effect."
            }
            buttonLink={"https://www.instagram.com/ar/312880286763692/"}
            videoSource={"/videos/christmashat.mp4"}
            subText={""}
            topText={""}
            placeHolder={"/thumbnails/webp/christmashat.webp"}
          />
        </AnimatedComponent>

        <AnimatedComponent>
          <FiltersShowcase
            title={"XICKO MODE"}
            description={
              "A filter featuring an animated dynamic fire effect on the user, overlaid with purple lightning animation and edge-detection sparkles. The filter is color graded for a slightly more saturated look."
            }
            buttonLink={"https://www.instagram.com/ar/2070284609781254/"}
            videoSource={"/videos/xickomode.mp4"}
            subText={""}
            topText={""}
            placeHolder={"/thumbnails/webp/xickomode.webp"}
          />
        </AnimatedComponent>

        <AnimatedComponent>
          <FiltersShowcase
            title={"Blinding Lights"}
            description={
              "A filter demonstrating volumetric lightning, creating a shiny light effect when pointed at bright light sources."
            }
            buttonLink={"https://www.instagram.com/ar/539568850052441/"}
            videoSource={"/videos/blindinglights.mp4"}
            subText={""}
            topText={""}
            placeHolder={"/thumbnails/webp/blindinglights.webp"}
          />
        </AnimatedComponent>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default portfolio;
