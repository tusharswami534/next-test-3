import Navbar from "@/components/common/Navbar";
import CommonMarquee from "@/components/common/CommonMarquee";
import Hero from "@/components/Blog/Hero";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        <CommonMarquee />
        <Navbar />
        <Hero />
        <Footer />
      </Suspense>
    </>
  );
}
