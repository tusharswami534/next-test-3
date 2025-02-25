"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  // useEffect(() => {
  //
  // }, []);

  const handlerClick = () => {
    router.push("/blogs");
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 400);
  };

  return (
    <div className="flex justify-center min-h-screen flex-col items-center">
      <p className="text-white text-5xl text-center max-md:text-4xl">
        Go to the Blog page
      </p>
      <button
        onClick={handlerClick}
        className="max-w-[100px] mt-5 bg-blue-600 px-5 rounded-md text-white py-2 flex justify-center items-center"
      >
        Blog
      </button>
    </div>
  );
}
