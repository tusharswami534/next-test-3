import { MARQUEE_LIST } from "@/utils/helper";
import React from "react";
import Marquee from "react-fast-marquee";

const CommonMarquee = () => {
  return (
    <div className="text-black gap-[60px] bg-cyan py-[18px]">
      <Marquee pauseOnHover={true}>
        {MARQUEE_LIST.map((item, i) => (
          <div
            key={i}
            className="ml-[60px] flex cursor-pointer gap-1.5 items-center justify-center"
          >
            <p>{item.title}</p>
            <div className="bg-blackLight rounded-[73px] py-1 pl-[11px] pr-[7px] flex gap-1.5 items-center">
              <p className="text-white">{item.price}</p>
              <div
                className={`size-2.5 rounded-full ${
                  item.title === "NAS100" ? "bg-green" : "bg-red"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CommonMarquee;
