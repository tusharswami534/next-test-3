import Navbar from "@/components/common/Navbar";
import CommonMarquee from "@/components/common/CommonMarquee";
import Hero from "@/components/home/Hero";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <CommonMarquee />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
