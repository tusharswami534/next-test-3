"use client";
import React from "react";
import CommonHeading from "./CommonHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import BlogCards from "./BlogCards";
import { BLOGS_CARD_LIST } from "@/utils/helper";
import { SwiperArrowIcon } from "@/utils/icons";

const LatestArticles = () => {
  const BlogCard = BLOGS_CARD_LIST.filter((card) => card.isFeatured);
  return (
    <div className="px-5 pb-[120px]">
      <CommonHeading
        headingClass="text-center pb-[70px]"
        heading="Latest "
        colorHeading="Articles"
      />
      {BlogCard.length === 0 ? (
        <p className="text-white text-xl text-center">Data No Found </p>
      ) : (
        <div className="max-w-[1440px] mx-auto relative">
          <div className="container max-w-[1140px] mx-auto">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
                1141: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
              }}
              className="mySwiper pb-10"
            >
              {BlogCard.map((item, i) => (
                <SwiperSlide key={i}>
                  <BlogCards
                    date={item.date}
                    cardImage={item.image}
                    title={item.title}
                    buttonOne="Productivity"
                    buttonTwo={item.timeReamining}
                    description={item.description}
                    profileImage={item.authorImg}
                    profileName={item.authorName}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {BlogCard.length > 3 && (
              <div className="flex justify-center items-center gap-5 mb-10">
                <button className="swiper-prev size-[60px] bg-cyan flex justify-center items-center rounded-full max-lg:hidden xl:absolute top-[45%] -translate-y-1/2 z-10 left-[45px] max-[1400px]:left-0">
                  <SwiperArrowIcon />
                </button>
                <button className="swiper-next size-[60px] bg-cyan flex justify-center items-center rounded-full max-lg:hidden xl:absolute right-[45px] top-[45%] -translate-y-1/2 z-20 max-[1400px]:right-0">
                  <span className=" rotate-180">
                    <SwiperArrowIcon />
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestArticles;
