"use client";
import React from "react";
import CommonHeading from "./CommonHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BlogCards from "./BlogCards";
import { BLOGS_CARD_LIST } from "@/utils/helper";

const LatestArticles = () => {
  const BlogCard = BLOGS_CARD_LIST.filter((card) => card.isFeatured);
  return (
    <div>
      <CommonHeading
        headingClass="text-center pb-[70px]"
        heading="Latest "
        colorHeading="Articles"
      />
      {BlogCard.length === 0 ? (
        <p className="text-white text-xl text-center">Data No Found </p>
      ) : (
        <div className=" container max-w-[1140px] mx-auto">
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            pagination={{
              clickable: true,
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
        </div>
      )}
    </div>
  );
};

export default LatestArticles;
