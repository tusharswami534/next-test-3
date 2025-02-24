import { SearchIcon } from "@/utils/icons";
import React from "react";

const Blogs = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="container flex justify-center items-center flex-col max-w-[1140px]">
        <div className="flex py-[18px] gap-2.5 items-center px-[30px] max-w-[558px] rounded-[39px] border border-solid border-white/25 w-full mb-[70px]">
          <label htmlFor="search">
            {" "}
            <SearchIcon />
          </label>
          <input
            id="search"
            className="outline-none w-4/5 border-none bg-transparent text-white/80 placeholder:text-white/80 leading-[150%] max-md:text-sm"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
