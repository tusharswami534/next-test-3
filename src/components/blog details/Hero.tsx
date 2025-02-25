"use client";
import React from "react";
import Navbar from "../common/Navbar";
import Description from "../common/Description";
import Image from "next/image";
import { BLOGS_CARD_LIST } from "@/utils/helper";
import { useParams } from "next/navigation";
import Market from "./Market";
import Footer from "../common/Footer";

const Hero = () => {
  const { title } = useParams();
  console.log(title);

  // const blog = BLOGS_CARD_LIST.find(
  //   (obj) => obj.title.toLowerCase().replace(/\s+/g, "-") === title
  // );

  // const blogArray = BLOGS_CARD_LIST.filter(
  //   (obj) => obj.title.toLowerCase().replace(/\s+/g, "-") === title
  // );

  const blogArray = BLOGS_CARD_LIST.filter(
    (obj) =>
      obj &&
      obj.title &&
      obj.title.toLowerCase().replace(/\s+/g, "-").replace("&", "%26") === title
  );

  const blog: any = blogArray.length ? blogArray[0] : null;

  return (
    <>
      {blog ? (
        <div>
          <div className="max-w-[1440px] mx-auto relative">
            <Navbar />
            <div className="container mt-[91px] max-lg:mt-20 max-md:mt-16 max-sm:mt-12 mb-[271px] max-lg:mb-[150px] max-md:mb-28 max-sm:mb-24 max-lg:flex-col max-xl:flex max-xl:gap-5 max-xl:justify-center max-xl:items-center max-w-[1140px] mx-auto px-5">
              <div className="max-w-[481px] max-lg:max-w-[unset]">
                <h2 className="text-[64.09px] max-w-[718px] text-white max-lg:text-6xl max-md:text-5xl max-sm:text-4xl leading-[121%]">
                  {blog.title}
                  <span className="text-cyan hidden font-semibold max-sm:block">
                    Market Insights
                  </span>
                </h2>
                <Description
                  className="mt-4 mb-[30px]"
                  text={blog.description}
                />
                <div className="gap-4 items-center max-sm:flex-wrap flex">
                  <button className="py-[7px] px-[37px] whitespace-nowrap text-white/80 hover:bg-white hover:text-black transition-all duration-300 border border-solid border-cyan bg-darkGray rounded-[50px] text-sm leading-[150%]">
                    Productivity
                  </button>
                  <button className="py-[7px] px-[40px] whitespace-nowrap text-white/80 hover:bg-white hover:text-black transition-all duration-300 border border-solid bg-lightBlack border-white rounded-[50px] text-sm leading-[150%]">
                    {blog.timeReamining}
                  </button>
                  <p className="leading-[150%] whitespace-nowrap font-semibold max-md:text-sm text-white">
                    {blog.date}
                  </p>
                </div>
              </div>
              <Image
                width={720}
                height={570}
                alt="blogs image"
                src={blog.image}
                className="absolute h-[570px] object-cover top-0 right-0 max-xl:relative max-lg:max-h-[unset] max-lg:h-full max-xl:max-w-[600px] max-xl:w-[90%]"
              />
            </div>
          </div>
          <Market authName={blog.authorName} profileImage={blog.authorImg} />
          <Footer />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-9xl font-bold text-white">404</h1>
          <h2 className="text-4xl font-semibold text-white mt-4">
            Page Not Found
          </h2>
          <p className="text-lg text-white mt-2">
            Sorry, the page you are looking for does not exist.
          </p>
          <a
            href="/blogs"
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Go Home
          </a>
        </div>
      )}
    </>
  );
};

export default Hero;
