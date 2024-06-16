import React from "react";
import Link from "next/link";

export interface ButtonSecondary1Props {
    children?: React.ReactNode;
    anchor: boolean;
    link: string;
    bg: string;
}

const ButtonSecondary1 = ({ children, link, anchor, bg }: ButtonSecondary1Props) => {
    const AnchorBool = anchor ? {'data-scroll-to': ''} : {};

  return (
    <Link
      className={bg + ` ` + `flex items-center space-x-[7px] w-fit h-fit font-semibold border-1 md:py-[13px] py-[8px] md:px-[18px] px-[12px] rounded-lg text-[20px] transition ease duration-150`}
      href={link}
      {...AnchorBool}
    >
      {children}
    </Link>
  );
};

export default ButtonSecondary1;
