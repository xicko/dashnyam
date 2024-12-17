'use client';

import React, { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Graphics from "public/data/graphics.json";

const FadeIn = dynamic(() => import("@components/FadeIn"), { ssr: false });
const Footer = dynamic(() => import("@components/Footer"), { ssr: true });

const metadata: Metadata = {
  title: "Assets - Dashnyam Batbayar",
  description:
    "Dashnyam Batbayar is a developer who operates worldwide creating unforgettable experiences in Augmented Reality.",
};

const Page: React.FC = () => {
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
  } | null>(null); // State to manage selected asset for the modal (used optional chaining and type assertion to get around null issue for now)

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
      {modalIsOpen && (
        <div className='fixed z-50'>
          <div
            className="bg-black bg-opacity-70 transition-opacity ease duration-300"
            onClick={closeModal}
          />
          <div className=" flex items-center justify-center customfontbase">
            <div className="bg-white dark:bg-zinc-700 px-8 py-8 rounded-3xl shadow-md md:max-w-screen-xl md:max-h-[800px] max-w-md mx-4 overflow-y-hidden">
              <div className="flex flex-col h-full max-h-[70vh]">
                <div className="flex relative md:flex-row flex-col overflow-y-auto overscroll-auto">
                  <Image
                    src={'/gray_placeholder.webp'}
                    width={480}
                    height={320}
                    className="md:flex hidden mb-4 rounded-xl md:w-[480px] md:h-fit"
                    alt={'placeholder'}
                    draggable={false}
                    quality={1}
                    aria-hidden="true"
                    priority={true}
                  />

                  <Image
                    src={selectedAsset!.fullImg}
                    alt={selectedAsset!.title}
                    draggable={false}
                    width={480}
                    unoptimized={true}
                    height={320}
                    placeholder="blur"
                    blurDataURL={selectedAsset?.fullImg}
                    className="md:absolute mb-4 rounded-xl md:w-[480px] md:h-fit"
                  />

                  <div className="flex flex-col">
                    <p className="text-gray-900 dark:text-gray-100 font-semibold mb-4 md:mx-8 md:text-[24px]">
                      {selectedAsset?.fullDescription}
                    </p>

                    <p className="text-gray-900 dark:text-gray-100 mb-4 md:mx-8 md:text-[24px]">
                      {selectedAsset?.howToUse}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center md:text-2xl text-xl text-black space-x-[3px] select-none cursor-pointer font-medium mb-[-32px] mx-[-32px]">
                  <a
                    className="w-1/2 flex justify-center bg-sky-300 hover:bg-sky-400 transition duration-500 ease py-3 rounded-[6px_6px_6px_24px] border-t-[3px] border-b-[3px] border-l-[3px] border-white dark:border-zinc-700"
                    download
                    href={selectedAsset?.downloadUrl}
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
          </div>
        </div>
      )}

      <section className="container md:mx-auto pt-[128px]">
        <FadeIn>
          <h1 className="tracking-wide customfonttitle text-3xl font-bold ml-10 mb-8 animate-glow">
            Graphic Assets
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 mx-10 md:grid-cols-2 lg:grid-cols-3 gap-12 md:mb-[128px] mb-[128px]">
          {Graphics.map((asset) => (
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

      <Footer />
    </main>
  );
};

export default Page;