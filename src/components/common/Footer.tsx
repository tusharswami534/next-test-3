import {
  FOOTER_SOCAL_LINKS_LIST,
  FOOTERDISCLAIMERS_LIST,
  FOOTERLINKS_LIST,
} from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Description from "./Description";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-footer bg-cover bg-no-repeat pt-[60px] max-md:pt-14 max-sm:pt-12 ">
      <div className="container max-w-[1140px] mx-auto flex flex-col px-5">
        <Link href="/">
          <Image
            src="/assets/images/webp/page-logo.webp"
            width={152}
            height={44.06}
            alt="logo"
          />
        </Link>
        <div className="flex gap-6 items-center flex-wrap gap-y-2 p-2.5 max-md:my-4 max-sm:my-3 my-[30px]">
          {FOOTERLINKS_LIST.map((item, index) => (
            <Link
              key={index}
              className="leading-[150%] whitespace-nowrap max-md:text-sm font-semibold text-white hover:text-cyan transition-all duration-300 hover:scale-105"
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-y-[30px] max-md:gap-y-4 max-sm:gap-y-3 flex-col">
          {FOOTERDISCLAIMERS_LIST.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-2.5">
              <p className="text-white leading-[150%] font-semibold max-md:text-sm">
                {item.title}
              </p>
              <Description text={item.description} />
              <Description className="mt-2.5" text={item.descriptionTwo} />
            </div>
          ))}
        </div>
        <div className="flex gap-6 mt-[50px] items-center">
          {FOOTER_SOCAL_LINKS_LIST.map((item, index) => (
            <Link
              className="socal-links hover:scale-105 transition-all duration-300"
              key={index}
              href={item.link}
              target="_blank"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-white/20 max-lg:mt-16 max-md:mt-12 max-sm:mt-10 mt-20"></div>
      <p className="text-white/80 py-4 max-sm:py-3 text-center leading-[150%] max-md:text-sm">
        Copyright © {year} ArrowTrade. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
