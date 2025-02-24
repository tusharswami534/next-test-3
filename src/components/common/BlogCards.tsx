import Image from "next/image";
import React from "react";
import Description from "./Description";
import { NextArrowIcon } from "@/utils/icons";
import { title } from "process";
interface ChangingGame {
  date: string;
  cardImage: string;
  buttonOne: string;
  buttonTwo: string;
  description: string;
  profileName: string;
  profileImage: string;
  title: string;
}

const BlogCards = ({
  date,
  cardImage,
  title,
  buttonOne,
  buttonTwo,
  description,
  profileName,
  profileImage,
}: ChangingGame) => {
  return (
    <div className="max-w-[364px] mx-auto overflow-hidden relative rounded-[10px] bg-driven p-[1px]">
      <p className="leading-[150%] font-semibold max-md:text-sm text-white absolute top-5 right-5">
        {date}
      </p>
      <Image
        src={cardImage}
        width={364}
        height={237}
        alt="card-image"
        className="rounded-t-[10px]"
      />
      <div className="max-w-[362px] bg-darkGray px-5">
        <div className="justify-center items-center mt-[-18px] gap-4 flex">
          <button className="py-[7px] px-[37px] whitespace-nowrap text-white/80 border border-solid border-cyan bg-darkGray rounded-[50px] text-sm leading-[150%]">
            {buttonOne}
          </button>
          <button className="py-[7px] px-[40px] whitespace-nowrap text-white/80 border border-solid bg-lightBlack border-white rounded-[50px] text-sm leading-[150%]">
            {buttonTwo}
          </button>
        </div>
        <p className="font-semibold text-xl mt-6 max-md:mt-3 max-lg:text-lg max-md:text-base text-white">
          {title}
        </p>
        <Description className="mt-2.5" text={description} />
        <div className="flex pt-6 pb-10 items-center justify-between">
          <div className="flex gap-2.5 items-center">
            <Image
              src={profileImage}
              width={50}
              height={50}
              alt="profile image"
            />
            <p className="text-white font-semibold max-md:text-sm leading-[150%]">
              {profileName}
            </p>
          </div>
          <NextArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
