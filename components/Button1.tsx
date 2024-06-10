import React from "react";
import Link from "next/link";

export interface Button1Props {
    children?: React.ReactNode;
    anchor: boolean;
    link: string;
}

const Button1 = ({ children, link, anchor }: Button1Props) => {
    const AnchorBool = anchor ? {'data-scroll-to': ''} : {};

  return (
    <Link
      className="flex items-center space-x-[7px] w-fit h-fit bg-slate-200 text-slate-800 font-semibold border-1 md:py-[15px] py-[10px] md:px-[15px] px-[14px] rounded-lg text-[20px] border-slate-200 hover:shadow-[0_5px_60px_-15px_rgba(186,230,253,1)] shadow-[0px_0px_50px_-15px_rgba(186,230,253,0.4)] transition ease duration-700"
      href={link}
      {...AnchorBool}
    >
      {children}
    </Link>
  );
};

export default Button1;
