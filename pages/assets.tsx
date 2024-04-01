// Import necessary modules
import React, { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Modal from "react-modal";
import Image from "next/image";
import Footer from "@components/Footer";
import Head from "next/head";
import AnimatedComponent from "@components/AnimatedComponent";
import Particles from "@components/particles";

export const metadata: Metadata = {
  title: "Assets - Dashnyam Batbayar",
  description:
    "Dashnyam Batbayar is a developer who operates worldwide creating unforgettable experiences in Augmented Reality.",
};

// Define the GraphicAssetsPage component
const GraphicAssetsPage: React.FC = () => {
  // Sample data for graphic assets
  const graphicAssets = [
    // { id: '8', title: 'Graphic 8', previewUrl: '/null.webp', shortDescription:'Description 8', fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', downloadUrl: '/pathto4' },
    // { id: '7', title: 'Graphic 7', previewUrl: '/null.webp', shortDescription:'Description 7', fullDescription: 'Description 7', downloadUrl: '/pathto4' },
    // { id: '6', title: 'Graphic 6', previewUrl: '/null.webp', shortDescription:'Description 6', fullDescription: 'Description 6', downloadUrl: '/pathto4' },
    // { id: '5', title: 'Graphic 5', previewUrl: '/null.webp', shortDescription:'Description 5', fullDescription: 'Description 5', downloadUrl: '/pathto4' },
    // { id: '4', title: 'Graphic 4', previewUrl: '/null.webp', shortDescription:'Description 4', fullDescription: 'Description 4', downloadUrl: '/pathto4' },
    {
      id: "5",
      title: "ColorLUTs Pack #3",
      previewImg: "/assets/lutpack3.webp",
      fullImg: "/assets/fullimg/lutpack3.webp",
      shortDescription: "Color Look-Up Tables",
      fullDescription:
        "Contains 1x LUT Template for Spark AR, a shader patch, and 10x Color Look-up Table(LUT) Pack for color grading your AR effect. How to Use: Extract all files and import to your Spark AR project, turn off compression and set texture filtering to none, create a rectangle that is stretched to fit the whole filter, drag the LUT shader and the ColorLUT of your choice into the patch editor, connect your camera texture and ColorLUT to the shader patch, then connect the output to the rectangle material.",
      downloadUrl: "https://dl.dashnyam.com/lutpack3-dashnyam.zip",
    },
    {
      id: "4",
      title: "ColorLUTs Pack #2",
      previewImg: "/assets/lutpack2.webp",
      fullImg: "/assets/fullimg/lutpack2.webp",
      shortDescription: "Color Look-Up Tables",
      fullDescription:
        "Contains 1x LUT Template for Spark AR, a shader patch, and 10x Color Look-up Table(LUT) Pack for color grading your AR effect. How to Use: Extract all files and import to your Spark AR project, turn off compression and set texture filtering to none, create a rectangle that is stretched to fit the whole filter, drag the LUT shader and the ColorLUT of your choice into the patch editor, connect your camera texture and ColorLUT to the shader patch, then connect the output to the rectangle material.",
      downloadUrl: "https://dl.dashnyam.com/lutpack2-dashnyam.zip",
    },
    {
      id: "3",
      title: "Face Deformation Pack #1",
      previewImg: "/assets/deformationpack1.webp",
      fullImg: "/assets/fullimg/deformationpack1.webp",
      shortDescription: "Deformation 3D Models",
      fullDescription:
        "Contains 10x 3D Face Deformation Pack for achieving facial structure modifications on your AR effect. How to Use: Extract and import to your Spark AR project, create a face mesh and choose your deformation model from the mesh properties, adjust the slider to your liking. Make sure to apply to all facemeshes.",
      downloadUrl: "https://dl.dashnyam.com/deformationpack1-dashnyam.zip",
    },
    {
      id: "2",
      title: "ColorLUTs Pack #1",
      previewImg: "/assets/lutpack1.webp",
      fullImg: "/assets/fullimg/lutpack1.webp",
      shortDescription: "Color Look-Up Tables",
      fullDescription:
        "Contains 1 shader patch and 10x Color Look-up Table(LUT) Pack for color grading your AR effect. How to Use: Extract all files and import to your Spark AR project, turn off compression and set texture filtering to none, create a rectangle that is stretched to fit the whole filter, drag the LUT shader and the ColorLUT of your choice into the patch editor, connect your camera texture and ColorLUT to the shader patch, then connect the output to the rectangle material.",
      downloadUrl: "https://dl.dashnyam.com/lutpack1-dashnyam.zip",
    },
    {
      id: "1",
      title: "Lightning Strike Sequence",
      previewImg: "/assets/lightningsequence.webp",
      fullImg: "/assets/fullimg/lightningsequence.webp",
      shortDescription: "Animated Image Sequence",
      fullDescription:
        "Animated Image Sequence Pack from Lightning Halo Filter, contains a zip file with 13 .png files. How to Use: Import assets to Meta Spark Hub, Select all and change the type to Texture Sequence, connect it to an animation sequence and then to your material. Once done, change material blend mode to either Add or Screen.",
      downloadUrl: "https://dl.dashnyam.com/lightningsequence-dashnyam.zip",
    },

    // Add more graphic assets as needed
  ];

  // State to manage modal visibility
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // State to manage selected asset for the modal
  const [selectedAsset, setSelectedAsset] = useState<{
    id: string;
    title: string;
    previewImg: string;
    fullImg: string;
    shortDescription: string;
    fullDescription: string;
    downloadUrl: string;
  } | null>(null);

  // Function to open the modal
  const openModal = (asset: {
    id: string;
    title: string;
    previewImg: string;
    fullImg: string;
    shortDescription: string;
    fullDescription: string;
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
    <main className="customfont">
      <Head>
        <title>Assets - Dashnyam Batbayar</title>
      </Head>

      <div className="container md:mx-auto pt-[128px]">
        <AnimatedComponent>
          <h1 className="font-[CalSans] text-3xl font-bold ml-10 mb-8 animate-glow">
            Graphic Assets
          </h1>
        </AnimatedComponent>

        <Particles quantity={100} className="absolute inset-0 -z-10 animate-fade-in"/>

        <div className="grid grid-cols-1 mx-10 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mb-[400px] mb-[150px]">
          {graphicAssets.map((asset) => (
            <AnimatedComponent key={asset.id}>
            <div
              key={asset.id}
              className="bg-white bg-opacity-[0.9]  pb-4 rounded-3xl shadow-md hover:cursor-pointer">
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
                    objectFit="cover"
                    className="rounded-t-3xl"
                  />
                </div>

                <h2 className="font-[CalSans] text-xl text-black font-bold mt-3 px-4">
                  {asset.title}
                </h2>

                <p className="text-gray-800 px-4">{asset.shortDescription}</p>
              </div>
            </div>
            </AnimatedComponent>
          ))}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center z-50 font-[Manrope]"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 transition-opacity ease duration-300"
        >
          {selectedAsset && (
            <div className="bg-white p-8 rounded-3xl shadow-md md:max-w-screen-lg md:max-h-[800px] max-w-md mx-4 overflow-hidden">
              <div className="flex flex-col h-full max-h-[70vh]">
                <div className="flex md:flex-row flex-col overflow-y-auto">
                  <h2 hidden>{selectedAsset.title}</h2>

                  <img
                    src={selectedAsset.fullImg}
                    alt={selectedAsset.title}
                    className="mb-4 rounded-xl md:w-[300px] md:h-[200px]"
                  />

                  <p className="text-gray-900 mb-4 md:mx-8 md:text-[24px]">
                    {selectedAsset.fullDescription}
                  </p>
                </div>

                <div className="flex justify-between mt-2">
                  <a download href={selectedAsset.downloadUrl}>
                    <button className="bg-blue-500 hover:bg-blue-700 transition duration-500 ease text-white font-semibold py-2 px-4 rounded">
                      Download
                    </button>
                  </a>

                  <button
                    className="bg-slate-700 hover:bg-slate-900 transition duration-500 ease text-white font-semibold py-2 px-4 rounded"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>

      <Footer />
    </main>
  );
};

export default GraphicAssetsPage;
