'use client';

import { useState } from "react";

const FAQs: React.FC = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleFAQ = (index: number) => {
    switch (index) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      default:
        break;
    }
  };

  return (
    <section className="md:w-[420px] md:mx-10 bg-black md:bg-opacity-20 bg-opacity-0 md:rounded-3xl p-10 md:mt-4 md:mb-0 mb-14">
      <div className="mb-4">
        <div
          onClick={() => toggleFAQ(1)}
          className="cursor-pointer border-b py-2 flex justify-between items-center transition duration-300 ease-in-out"
        >
          <p className="font-semibold">What kind of filters do you create?</p>
          <span>{isOpen1 ? "-" : "+"}</span>
        </div>
        {isOpen1 && (
          <p className="text-white pl-4 py-2">
            I work with color grading, makeup, photo frames, product
            demonstration, target tracking, and a lot more!
          </p>
        )}
      </div>

      <div className="mb-4">
        <div
          onClick={() => toggleFAQ(2)}
          className="cursor-pointer border-b py-2 flex justify-between items-center transition duration-300 ease-in-out"
        >
          <p className="font-semibold">
            How long does it take to create a filter?
          </p>
          <span>{isOpen2 ? "-" : "+"}</span>
        </div>
        {isOpen2 && (
          <p className="text-white pl-4 py-2">
            The duration of filter creation varies depending on the complexity
            of the project. However, for the simplest effects, the minimum lead
            time is three business days.
          </p>
        )}
      </div>

      <div>
        <div
          onClick={() => toggleFAQ(3)}
          className="cursor-pointer border-b py-2 flex justify-between items-center transition duration-300 ease-in-out"
        >
          <p className="font-semibold">
            What is the value for creating an effect?
          </p>
          <span>{isOpen3 ? "-" : "+"}</span>
        </div>
        {isOpen3 && (
          <p className="text-white pl-4 py-2">
            This depends on the filter style you want, the time available for
            creation, and also the budget available for your campaign. To talk
            to me about budgets, fill out this form or send me an email /
            contact me on{" "}
            <a href="https://www.instagram.com/thexicko" className="">
              Instagram
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
};

export default FAQs;
