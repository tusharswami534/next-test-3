import { FOOTERDISCLAIMERS_LIST, FOOTERLINKS_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Description from "./Description";

const Footer = () => {
  return (
    <div className="bg-footer bg-cover bg-no-repeat py-[60px] max-sm:pt-12 px-5">
      <div className="container max-w-[1140px] mx-auto flex flex-col">
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
      </div>
    </div>
  );
};

export default Footer;
