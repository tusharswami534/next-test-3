import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center pt-[70px] relative pb-[30px] flex-col px-5">
      <Image
        src={"/assets/images/png/hero-top-layer.png"}
        width={600}
        height={600}
        alt="images"
        className=" absolute top-[-100px] pointer-events-none left-0"
      />
      <h2 className="text-[64.09px] max-w-[718px] text-white max-lg:text-6xl max-md:text-5xl max-sm:text-4xl leading-[121%] text-center">
        Unlock Knowledge with Our{" "}
        <span className="text-cyan font-semibold max-sm:block">
          Featured Articles
        </span>
      </h2>
      <p className="leading-[150%] max-w-[674px] mt-4 max-md:text-sm text-lightGray text-center">
        Explore our latest articles, insights, and expert advice on industry
        trends. Stay informed, gain new perspectives, and discover valuable tips
        to help you stay ahead.
      </p>
    </div>
  );
};

export default Hero;
