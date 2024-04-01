import React from "react";
import Image from "next/image";

interface Customer {
  name: string;
  logo: string;
}

const customers: Customer[] = [
  { name: "Unitel", logo: "/customers/webp/unitel.webp" },
  { name: "Korea Travel Org", logo: "/customers/webp/kto.webp" },
  { name: "Green Group", logo: "/customers/webp/greengroup.webp" },
  { name: "EMPR", logo: "/customers/webp/empr.webp" },
  { name: "Next Electronics", logo: "/customers/webp/next.webp" },
  { name: "StudyUK", logo: "/customers/webp/studyuk.webp" },
  { name: "Burger King", logo: "/customers/webp/burgerking.webp" },
  { name: "Artisty", logo: "/customers/webp/artisty.webp" },
  { name: "Max Group", logo: "/customers/webp/maks.webp" },
  // Add more companies as needed
];

const Customers: React.FC = () => {
  return (
    <section className="flex justify-center overflow-x-visible">
      <div className="mb-8 md:mx-[140px] mx-[30px] bg-white text-black bg-opacity-90 rounded-3xl md:p-20 p-8 md:w-[1200px] ">
        <p className="font-[CalSans] md:text-3xl text-xl font-bold text-center flex justify-center  mb-4 mt-2">
          I&apos;ve helped some of Mongolia&apos;s most innovative and
          forward-thinking companies to develop stronger bonds with their
          audiences.
        </p>
        <div className="grid grid-cols-2 md:gap-y-8 gap-4 md:grid-cols-5 md:mt-10">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="flex items-center flex-col justify-center">
              <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  width={200}
                  height={200}
                  quality={95}
                  priority={false}
                  className=""
                />
              </div>
              <p className="text-center mt-2">{customer.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
