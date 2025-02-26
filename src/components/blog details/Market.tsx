"use client";
import React from "react";
import CommonAIDriven from "../common/CommonAIDriven";
import {
  CHANGING_GAME_HEADING_LIST,
  CHANGING_GAME_LIST,
  MARKET_HEADING_LIST,
  MARKET_INSIGHTS_LIST,
} from "@/utils/helper";
import Image from "next/image";
interface Props {
  profileImage: string;
  authName: string;
}

const Market = ({ profileImage, authName }: Props) => {
  return (
    <div className="flex justify-center items-center pb-[180px] max-lg:pb-[150px] relative max-md:pb-28 max-sm:pb-24 px-5">
      <div className="size-[350px] absolute filter left-[-10%] top-[42%] blur-[100px] bg-cyan/30 rounded-full pointer-events-none"></div>
      <div className="size-[350px] absolute filter right-[-10%] bottom-[-5%] blur-[100px] bg-cyan/30 rounded-full pointer-events-none"></div>
      <div className="flex container max-lg:flex-col-reverse max-lg:gap-5 relative max-w-[1140px] ">
        <div className="flex flex-col gap-y-[180px] max-lg:gap-y-[150px] max-md:gap-y-28 max-sm:gap-y-24 max-">
          <CommonAIDriven
            map={MARKET_INSIGHTS_LIST}
            heading="What are AI-Driven "
            colorHeading="Market Insights?"
            description="AI-driven market insights harness the power of artificial intelligence to analyze vast amounts of market data in real time, providing actionable information that can help traders and investors make informed decisions."
            image="/assets/images/webp/market-insights.webp"
          />

          <CommonAIDriven
            map={CHANGING_GAME_LIST}
            heading="How AI-Driven Market insights are "
            colorHeading="Changing The Game"
            image="/assets/images/webp/changing-game.webp"
          />
        </div>
        <div className="max-w-[485px] max-lg:max-w-[unset] w-full flex max-lg:justify-center justify-end">
          <div className="bg-driven bg-no-repeat bg-cover bg-[100%] sticky top-1 max-w-[364px] max-lg:max-w-[unset] w-full border border-solid border-cyan rounded-3xl py-[30px] lg:max-h-[525px]">
            <div className="flex gap-4 px-5 items-center">
              <Image
                src={profileImage}
                width={80}
                height={80}
                alt="profile image"
                className="rounded-full pointer-events-none"
              />
              <p className="font-semibold text-white leading-[150%] max-md:text-sm">
                {authName}
              </p>
            </div>{" "}
            <div className="flex flex-col px-5  gap-y-4">
              <p className="font-semibold leading-[121%] mt-6 text-white max-md:text-sm">
                What are AI-Driven Market Insights?
              </p>
              {MARKET_HEADING_LIST.map((item, index) => (
                <p
                  key={index}
                  className="text-white/70 leading-[150%] max-md:text-sm"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="my-5 h-0.5 bg-white/25 w-full"></div>
            <div className="flex flex-col px-5  gap-y-4">
              <p className="font-semibold leading-[121%] text-white max-md:text-sm">
                What are AI-Driven Market Insights?
              </p>
              {CHANGING_GAME_HEADING_LIST.map((item, index) => (
                <p
                  key={index}
                  className="text-white/70 leading-[150%] max-md:text-sm"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
