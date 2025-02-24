import React from "react";
import Navbar from "../common/Navbar";
import Description from "../common/Description";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className=" container max-w-[1140px] mx-auto">
        <h2 className="text-[64.09px] max-w-[718px] text-white max-lg:text-6xl max-md:text-5xl max-sm:text-4xl leading-[121%]">
          Real-Time{" "}
          <span className="text-cyan block font-semibold max-sm:block">
            Market Insights
          </span>
        </h2>
        <Description
          className="mt-4 mb-[30px]"
          text="Stay ahead with AI-driven analytics, real-time news updates, and expert market research to make informed decisions."
        />

        <div className="justify-center items-center mt-[-18px] gap-4 flex">
          <button className="py-[7px] px-[37px] whitespace-nowrap text-white/80 border border-solid border-cyan bg-darkGray rounded-[50px] text-sm leading-[150%]">
            Productivity
          </button>
          <button className="py-[7px] px-[40px] whitespace-nowrap text-white/80 border border-solid bg-lightBlack border-white rounded-[50px] text-sm leading-[150%]">
            3 min read
          </button>
          <p className="leading-[150%] font-semibold max-md:text-sm text-white absolute top-5 right-5">
            31 Jan 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
