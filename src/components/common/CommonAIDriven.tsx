import React from "react";
import CommonHeading from "./CommonHeading";
import Description from "./Description";
import Image from "next/image";
interface aiDriven {
  map: any;
  heading: string;
  colorHeading: string;
  description?: string;
  image: string;
}

const CommonAIDriven = ({
  map,
  heading,
  colorHeading,
  description,
  image,
}: aiDriven) => {
  return (
    <div className="container mx-auto max-w-[1140px]">
      <div className="max-w-[655px]">
        <CommonHeading heading={heading} colorHeading={colorHeading} />
        <Description className="mt-4 mb-[30px]" text={description} />
        <div className="flex flex-col gap-y-5">
          {map.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-4">
              <p className="text-white leading-[150%] font-semibold max-md:text-sm">
                {item.title}
              </p>
              <Description text={item.description} />
            </div>
          ))}
        </div>
        <div className="mt-10 max-lg:mt-8 max-md:mt-5 max-sm:mt-3 rounded-[10px] bg-aiDriven !p-[1px]">
          <div className="!bg-darkBlack p-2.5 max-w-[653px] rounded-[10px] w-full h-full">
            <Image
              src={image}
              width={635}
              height={550}
              alt="images"
              className="pointer-events-none max-lg:max-w-[635px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonAIDriven;
