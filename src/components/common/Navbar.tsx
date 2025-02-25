"use client";
import { NAVBAR_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { DropDownIcon } from "@/utils/icons";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
  });
  return (
    <div className="flex relative z-20 justify-center items-center px-5">
      <div className="container max-lg:px-5 box-border border lg:backdrop-blur-xl border-dark border-solid mt-4 bg-white/10 flex justify-center items-center rounded-[60px] py-4 max-w-[1220px]">
        <div className="flex max-w-[1092px] justify-between items-center w-full">
          <Link href={`/`}>
            <Image
              src="/assets/images/webp/page-logo.webp"
              width={150}
              height={44.06}
              alt="logo"
            />
          </Link>
          <div
            className={`w-3/4 transition-all duration-300 flex justify-between items-center max-lg:justify-center max-lg:!fixed max-lg:!top-0 max-lg:w-full max-lg:h-screen max-lg:bottom-0 max-lg:flex-col max-lg:gap-6 max-lg:bg-black max-lg:z-40 ${
              open ? "left-0" : "-left-[120%]"
            }`}
          >
            <div className="flex justify-center max-lg:flex-col gap-6 items-center">
              {NAVBAR_LIST.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setDropdownOpen(true)}
                  onMouseLeave={() => item.dropdown && setDropdownOpen(false)}
                >
                  <Link
                    onClick={() => setOpen(false)}
                    className={`text-gray leading-[121%] flex items-center relative after:absolute after:transition-all after:duration-300 after:h-[2px] after:w-0 after:bg-cyan after:-bottom-1 hover:after:w-full ${
                      item.title === "Blog" && "!text-cyan font-bold"
                    }`}
                    href={item.link}
                  >
                    {item.title}
                    {item.dropdown && (
                      <span className="ml-1">
                        <DropDownIcon />
                      </span>
                    )}
                  </Link>
                  {item.dropdown && dropdownOpen && (
                    <div
                      className="absolute bg-white shadow-lg rounded"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.link}
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="gap-6 flex max-lg:flex-col">
              <CustomButton
                text="Sign Up"
                className="!border !border-cyan !border-solid text-cyan px-4 hover:bg-cyan hover:!text-black hover:!shadow-commonShadow"
              />
              <CustomButton
                text="Login"
                className="!border !border-cyan !border-solid text-cyan px-[24.5px] hover:bg-cyan hover:!text-black hover:!shadow-commonShadow"
              />
            </div>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="overflow-hidden relative z-50 lg:hidden size-6 flex flex-col justify-between items-center"
          >
            <span
              className={`bg-white rounded-md w-6 h-0.5 block transition-all duration-300 ${
                open && "translate-x-10"
              }`}
            ></span>
            <span
              className={`bg-white rounded-md after:rounded-lg w-6 h-0.5 block relative after:bg-white after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:transition-all after:duration-300 transition-all duration-300 ${
                open && "rotate-45 after:rotate-90"
              }`}
            ></span>
            <span
              className={`bg-white rounded-md w-6 h-0.5 block transition-all duration-300 ${
                open && "-translate-x-10"
              }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
