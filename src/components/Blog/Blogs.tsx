"use client";
import { BLOGS_CARD_LIST } from "@/utils/helper";
import { SearchIcon } from "@/utils/icons";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import React, { useEffect, useState } from "react";
import BlogCards from "../common/BlogCards";
import CustomButton from "../common/CustomButton";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Blogs = () => {
  const [open, setOpen] = useState(6);
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const param = searchParams.get("page");
    if (param) {
      setOpen(parseInt(param) * 3);
    }
  }, [searchParams]);
  const BlogCard = BLOGS_CARD_LIST.slice(0, open).filter(
    (obj) => obj.title && obj.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleShowMore = () => {
    const nextPage = Math.ceil(open / 3) + 1;
    setOpen(open + 3);
    window.history.pushState(null, "", `?page=${nextPage}`);
  };
  return (
    <div className="flex justify-center items-center px-5 pb-[180px] relative max-lg:pb-[150px] max-md:pb-28 max-sm:pb-24">
      <Image
        src={"/assets/images/png/blog-center-layer.png"}
        width={600}
        height={600}
        alt="layer"
        className=" absolute top-[25%] pointer-events-none max-md:w-1/2 right-0"
      />
      <div className="container flex justify-center items-center flex-col w-full max-w-[1140px]">
        <div className="flex py-[18px] gap-2.5 items-center px-[30px] max-w-[558px] rounded-[39px] border border-solid border-white/25 w-full mb-[70px]">
          <label htmlFor="search">
            {" "}
            <SearchIcon />
          </label>
          <input
            id="search"
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none w-[95%] border-none bg-transparent text-white/80 placeholder:text-white/80 leading-[150%] max-md:text-sm"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-6 w-full justify-center flex-wrap">
            {BlogCard.map((item: any, i: number) => (
              <Link
                onClick={() => NProgress.start()}
                href={`/blogs/${item.title.toLowerCase().replace(/ /g, "-")}`}
                key={i}
              >
                <BlogCards
                  cardClass="hover:shadow-cardShadow"
                  date={item.date}
                  cardImage={item.image}
                  buttonOne="Productivity"
                  buttonTwo={item.timeReamining}
                  description={item.description}
                  title={item.title}
                  profileImage={item.authorImg}
                  profileName={item.authorName}
                />
              </Link>
            ))}
          </div>
          {open < BLOGS_CARD_LIST.length && (
            <CustomButton
              customOnClick={handleShowMore}
              className="bg-cyan px-6 shadow-commonShadow mt-10 mb-5 hover:border-cyan border border-solid border-transparent hover:bg-transparent hover:text-cyan hover:shadow-none"
              text="Show all blogs"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
