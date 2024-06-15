import React from "react";
import Link from "next/link";

export interface Button1Props {
    children?: React.ReactNode;
    anchor: boolean;
    link: string;
    bg: string;
}

const Button1 = ({ children, link, anchor, bg }: Button1Props) => {
    const AnchorBool = anchor ? {'data-scroll-to': ''} : {};

  return (
    <Link
      className={bg + ` ` + `flex items-center space-x-[7px] w-fit h-fit font-semibold border-1 md:py-[15px] py-[10px] md:px-[24px] px-[14px] rounded-full text-[20px] transition ease duration-150`}
      href={link}
      {...AnchorBool}
    >
      {children}
    </Link>
  );
};

export default Button1;
