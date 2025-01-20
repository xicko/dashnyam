import Link from "next/link";
import React from "react";
import { FaExclamationTriangle, FaRegHeart } from "react-icons/fa";

const ServiceAlert = () => {
  return (
    <div className="flex justify-center mt-8 md:mx-[140px] mx-[30px] select-none">
      <div className="md:w-[900px] bg-white dark:bg-opacity-0 bg-opacity-100 text-black dark:text-white md:rounded-3xl rounded-lg flex flex-col gap-y-4 md:px-8 py-6">
        <p className="flex flex-row justify-start items-center gap-x-2 font-semibold text-3xl customfonttitle text-zinc-800 dark:text-zinc-100">
          <span>An important update</span>
          <FaExclamationTriangle className="mb-1 text-2xl font-normal" />
        </p>
        <p>
          Due to the{" "}
          <Link
            target="_blank"
            draggable={false}
            className="px-0 hover:px-1 bg-transparent hover:bg-zinc-800 dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black rounded-md transition-all ease-in-out duration-500"
            href={"https://spark.meta.com/blog/meta-spark-announcement/"}
          >
            closure of Meta&apos;s Spark AR
          </Link>{" "}
          platform on January 14, 2025, We have discontinued all AR development
          and design services for Facebook and Instagram. Thank you for being a
          part of this{" "}
          <span className="inline-flex items-center gap-x-2 whitespace-nowrap">
            chapter. <FaRegHeart className="" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default ServiceAlert;
