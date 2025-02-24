import Image from "next/image";
import React from "react";
import Description from "./Description";
import { NextArrowIcon } from "@/utils/icons";

const BlogCard = () => {
  return (
    <div className="max-w-[364px] mx-auto overflow-hidden rounded-[10px] bg-driven p-[1px]">
      <Image
        src={"/assets/images/webp/risk-management.webp"}
        width={364}
        height={237}
        alt="card-image"
        className="rounded-t-[10px]"
      />
      <div className="max-w-[362px] bg-darkGray px-5">
        <div className="justify-center items-center mt-[-18px] gap-4 flex">
          <button className="py-[7px] px-[37px] whitespace-nowrap text-white/80 border border-solid border-cyan bg-darkGray rounded-[50px] text-sm leading-[150%]">
            Productivity
          </button>
          <button className="py-[7px] px-[40px] whitespace-nowrap text-white/80 border border-solid bg-lightBlack border-white rounded-[50px] text-sm leading-[150%]">
            3 min read
          </button>
        </div>
        <p className="font-semibold text-xl mt-6 max-md:mt-3 max-lg:text-lg max-md:text-base text-white">
          Real-Time Market Insights
        </p>
        <Description
          className="mt-2.5"
          text="Stay ahead with AI-driven analytics, real-time news updates, and expert market research to make informed decisions."
        />
        <div className="flex pt-6 pb-10 items-center justify-between">
          <div className="flex gap-2.5 items-center">
            <Image
              src={"/assets/images/webp/darrell-profile.webp"}
              width={50}
              height={50}
              alt="profile image"
            />
            <p className="text-white font-semibold max-md:text-sm leading-[150%]">
              Darrell Steward
            </p>
          </div>
          <NextArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
