import Navbar from "@/components/common/Navbar";
import CommonMarquee from "@/components/common/CommonMarquee";
import Hero from "@/components/Blog/Hero";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen flex-col items-center">
      <p className="text-white text-5xl text-center max-md:text-4xl">
        Go to the Blog page
      </p>
      <Link
        className="max-w-[100px] mt-5 bg-blue-600 px-5 rounded-md text-white py-2 flex justify-center items-center"
        href={"/blogs"}
      >
        Blog
      </Link>
    </div>
  );
}
