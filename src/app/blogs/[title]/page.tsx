import Hero from "@/components/blog details/Hero";
import Market from "@/components/blog details/Market";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <Hero />
      <Market />
      <Footer />
    </div>
  );
};

export default page;
