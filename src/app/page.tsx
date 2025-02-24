import Navbar from "@/components/common/Navbar";
import CommonMarquee from "@/components/common/CommonMarquee";
import Hero from "@/components/Blog/Hero";
import Footer from "@/components/common/Footer";
import Market from "@/components/blog details/Market";
import BlogCard from "@/components/common/BlogCard";

export default function Home() {
  return (
    <>
      <CommonMarquee />
      <Navbar />
      <Hero />
      {/* <Market /> */}
      <BlogCard />
      <Footer />
    </>
  );
}
