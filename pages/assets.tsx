import React, { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("react-modal"), { ssr: false });
const FadeIn = dynamic(() => import("@components/FadeIn"), { ssr: false });
const Footer = dynamic(() => import("@components/Footer"), { ssr: true });

export const metadata: Metadata = {
  title: "Assets - Dashnyam Batbayar",
  description:
    "Dashnyam Batbayar is a developer who operates worldwide creating unforgettable experiences in Augmented Reality.",
};

const GraphicAssetsPage: React.FC = () => {
  // data for graphic assets
  const graphicAssets = [
    {
      id: "7",
      title: "Texture Distortion Template",
      previewImg: "/assets/TextureDistortion.webp",
      fullImg: "/assets/fullimg/texturedistortion.webp",
      shortDescription: "Spark AR Template",
      fullDescription:
        "Contains 1x Texture Distortion Template for Spark AR, 1x Texture Distortion Patch, alongside with a Demo Texture.",
      howToUse:
        "How to Use: Download the .zip file, open the .arprojpkg file in Spark AR, and modify the template to your liking. Replace the demo texture (REPLACEME.png) with your own texture.",
      downloadUrl: "https://dl.dashnyam.com/TextureDistortion-dashnyam.zip",
    },
    {
      id: "6",
      title: "Volumetric Light Template",
      previewImg: "/assets/volumetriclight.webp",
      fullImg: "/assets/fullimg/volumetriclight.webp",
      shortDescription: "Spark AR Template",
      fullDescription:
        "Contains 1x Volumetric Light Template for Spark AR, and three variations of 3D plane model, each having different plane count.",
      howToUse:
        "How to Use: Download the .zip file, open the .arprojpkg file in Spark AR, and modify the template to your liking. The template includes three plane models with 32, 64, and 128 planes respectively. The quality of the volumetric light is better with more plane count, but comes at a cost of performance lag on low-end devices, therefore 64 planes is recommended.",
      downloadUrl: "https://dl.dashnyam.com/VolumetricLight-dashnyam.zip",
    },
    {
      id: "5",
      title: "ColorLUTs Pack #3",
      previewImg: "/assets/lutpack3.webp",
      fullImg: "/assets/fullimg/lutpack3.webp",
      shortDescription: "Color Look-Up Tables",
      fullDescription:
        "Contains 1x LUT Template for Spark AR, a shader patch, and 10x Color Look-up Table(LUT) Pack for color grading your AR effect.",
      howToUse:
        "How to Use: Extract all files and import to your Spark AR project, turn off compression and set texture filtering to none, create a rectangle that is stretched to fit the whole filter, drag the LUT shader and the ColorLUT of your choice into the patch editor, connect your camera texture and ColorLUT to the shader patch, then connect the output to the rectangle material.",
      downloadUrl: "https://dl.dashnyam.com/lutpack3-dashnyam.zip",
    },
    {
      id: "4",
      title: "ColorLUTs Pack #2",
      previewImg: "/assets/lutpack2.webp",
      fullImg: "/assets/fullimg/lutpack2.webp",
      shortDescription: "Color Look-Up Tables",
      fullDescription:
        "Contains 1x LUT Template for Spark AR, a shader patch, and 10x Color Look-up Table(LUT) Pack for color grading your AR effect.",
      howToUse:
        "How to Use: Extract all files and import to your Spark AR project, turn off compression and set texture filtering to none, create a rectangle that is stretched to fit the whole filter, drag the LUT shader and the ColorLUT of your choice into the patch editor, connect your camera texture and ColorLUT to the shader patch, then connect the output to the rectangle material.",
      downloadUrl: "https://dl.dashnyam.com/lutpack2-dashnyam.zip",
    },
    {
      id: "3",
      title: "Face Deformation Pack #1",
      previewImg: "/assets/deformationpack1.webp",
      fullImg: "/assets/fullimg/deformationpack1.webp",
      shortDescription: "Deformation 3D Models",
      fullDescription:
        "Contains 10x 3D Face Deformation Pack for achieving facial structure modifications on your AR effect.",
      howToUse:
        "How to Use: Extract and import to your Spark AR project, create a face mesh and choose your deformation model from the mesh properties, adjust the slider to your liking. Make sure to apply to all facemeshes.",
      downloadUrl: "https://dl.dashnyam.com/deformationpack1-dashnyam.zip",
    },
    {
      id: "2",
      title: "ColorLUTs Pack #1",
      previewImg: "/assets/lutpack1.webp",
      fullImg: "/assets/fullimg/lutpack1.webp",
      shortDescription: "Color Look-Up Tables",
      fullDescription:
        "Contains 1 shader patch and 10x Color Look-up Table(LUT) Pack for color grading your AR effect.",
      howToUse:
        "How to Use: Extract all files and import to your Spark AR project, turn off compression and set texture filtering to none, create a rectangle that is stretched to fit the whole filter, drag the LUT shader and the ColorLUT of your choice into the patch editor, connect your camera texture and ColorLUT to the shader patch, then connect the output to the rectangle material.",
      downloadUrl: "https://dl.dashnyam.com/lutpack1-dashnyam.zip",
    },
    {
      id: "1",
      title: "Lightning Strike Sequence",
      previewImg: "/assets/lightningsequence.webp",
      fullImg: "/assets/fullimg/lightningsequence.webp",
      shortDescription: "Animated Image Sequence",
      fullDescription:
        "Animated Image Sequence Pack from Lightning Halo Filter, contains a zip file with 13 .png files.",
      howToUse:
        "How to Use: Import assets to Meta Spark Hub, Select all and change the type to Texture Sequence, connect it to an animation sequence and then to your material. Once done, change material blend mode to either Add or Screen.",
      downloadUrl: "https://dl.dashnyam.com/lightningsequence-dashnyam.zip",
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false); // State to manage modal visibility
  const [selectedAsset, setSelectedAsset] = useState<{
    id: string;
    title: string;
    previewImg: string;
    fullImg: string;
    shortDescription: string;
    fullDescription: string;
    howToUse: string;
    downloadUrl: string;
  } | null>(null); // State to manage selected asset for the modal

  // Function to open the modal
  const openModal = (asset: {
    id: string;
    title: string;
    previewImg: string;
    fullImg: string;
    shortDescription: string;
    fullDescription: string;
    howToUse: string;
    downloadUrl: string;
  }) => {
    setSelectedAsset(asset);
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };

  // Render the component
  return (
    <main className="customfontbase">
      <Head>
        <title>Assets - Dashnyam Batbayar</title>
      </Head>

      <section className="container md:mx-auto pt-[128px]">
        <FadeIn>
          <h1 className="tracking-wide customfonttitle text-3xl font-bold ml-10 mb-8 animate-glow">
            Graphic Assets
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 mx-10 md:grid-cols-2 lg:grid-cols-3 gap-12 md:mb-[128px] mb-[128px]">
          {graphicAssets.map((asset) => (
            <FadeIn key={asset.id}>
              <div
                key={asset.id}
                className="ease-in-out duration-300 md:transform scale-100 md:hover:scale-[1.06] bg-gray-100 dark:bg-white bg-opacity-[0.9]  pb-4 rounded-3xl hover:cursor-pointer"
              >
                <div onClick={() => openModal(asset)}>
                  <div
                    onClick={() => openModal(asset)}
                    className="relative w-full md:h-64 h-48 max-h-64  rounded-md overflow-visible"
                  >
                    <Image
                      src={asset.previewImg}
                      alt={asset.title}
                      layout="fill"
                      quality={80}
                      draggable={false}
                      placeholder="blur"
                      blurDataURL={asset.previewImg}
                      objectFit="cover"
                      className="rounded-t-3xl"
                    />
                  </div>

                  <h2 className="tracking-[0.015em] customfonttitle md:text-[26px] text-xl text-black font-bold md:mt-4 mt-3 md:px-6 px-5">
                    {asset.title}
                  </h2>

                  <p className="text-gray-800 md:text-lg md:px-6 px-5">
                    {asset.shortDescription}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-[100] customfontbase"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-[50] transition-opacity ease duration-300"
      >
        {selectedAsset && (
          <div className="bg-white dark:bg-zinc-700 px-8 py-8 rounded-3xl shadow-md md:max-w-screen-xl md:max-h-[800px] max-w-md mx-4 overflow-y-hidden">
            <div className="flex flex-col h-full max-h-[70vh]">
              <div className="flex md:flex-row flex-col overflow-y-auto overscroll-auto">
                <h2 hidden>{selectedAsset.title}</h2>

                <Image
                  src={selectedAsset.fullImg}
                  alt={selectedAsset.title}
                  draggable={false}
                  width={480}
                  height={320}
                  placeholder="blur"
                  blurDataURL={selectedAsset.fullImg}
                  className="mb-4 rounded-xl md:w-[480px] md:h-fit"
                />

                <div className="flex flex-col">
                  <p className="text-gray-900 dark:text-gray-100 font-semibold mb-4 md:mx-8 md:text-[24px]">
                    {selectedAsset.fullDescription}
                  </p>

                  <p className="text-gray-900 dark:text-gray-100 mb-4 md:mx-8 md:text-[24px]">
                    {selectedAsset.howToUse}
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:text-2xl text-xl text-black space-x-[3px] select-none cursor-pointer font-medium mb-[-32px] mx-[-32px]">
                <a
                  className="w-1/2 flex justify-center bg-sky-300 hover:bg-sky-400 transition duration-500 ease py-3 rounded-[6px_6px_6px_24px] border-t-[3px] border-b-[3px] border-l-[3px] border-white dark:border-zinc-700"
                  download
                  href={selectedAsset.downloadUrl}
                >
                  <span>Download</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:w-[50px] md:h-[28px] w-[30px] h-[20px] md:mt-[2px] mt-1 md:mr-0 mr-[-8px]"
                    fill="black"
                    viewBox="0 0 512 512"
                  >
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                  </svg>
                </a>

                <a
                  className="w-1/2 flex justify-center bg-zinc-300 hover:bg-zinc-400 transition duration-500 ease py-3 rounded-[6px_6px_24px_6px] border-t-[3px] border-b-[3px] border-r-[3px] border-white dark:border-zinc-700 outline-none"
                  onClick={closeModal}
                >
                  <span>Close</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <Footer />
    </main>
  );
};

export default GraphicAssetsPage;
