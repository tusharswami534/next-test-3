import Blogs from "@/components/Blog/Blogs";
import Hero from "@/components/Blog/Hero";
import CommonMarquee from "@/components/common/CommonMarquee";
import Footer from "@/components/common/Footer";
import LatestArticles from "@/components/common/LatestArticles";
import Navbar from "@/components/common/Navbar";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense>
        <CommonMarquee />
        <Navbar />
        <Hero />
        <Blogs />
        <LatestArticles />
        <Footer />
      </Suspense>
    </>
  );
};

export default page;
