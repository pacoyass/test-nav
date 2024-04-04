"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { TiThMenuOutline } from "react-icons/ti";
import Link from "next/link";
import clsx from "clsx";
import Navlink from "./Navlink";


export default function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);
 
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollPosition > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
    className={clsx({
        "mb-16 fold:mb-12 duo:mb-10 md:mb-12": isScrolled,
        "mb-56 md:mb-28 lg:mb-28 2xl:mb-24": !isScrolled
      })}
    //   className={` ${
    //     isScrolled
    //       ? "mb-16 fold:mb-12 duo:mb-10 md:mb-12"
    //       : " mb-56  md:mb-28 lg:mb-28 2xl:mb-24"
    //   }`}
    >
      <nav
        className={clsx(
            "py-2 px-2 md:py-1 md:px-1 w-full md:max-w-screen mx-auto transition-all duration-0 ease-in-out",
            {
              "fixed top-0 z-10 md:py-3 duo:py-5 2xl:py-2 2xl:px-2 bg-gradient-to-r from-neutral-700 to-neutral-950 shadow-inner  shadow-neutral-700":
                isScrolled,
              "absolute py-5 md:py-3 2xl:py-2 2xl:px-2 bg-gradient-to-r from-neutral-700 to-neutral-950 shadow-inner shadow-neutral-700 top-36 md:top-14 lg:top-16 z-10":
                !isScrolled,
            }
          )}
        // className={`
        //     ${
        //       isScrolled
        //         ? "fixed top-0 z-10  md:py-3 duo:py-5 2xl:py-2 2xl:px-2 bg-gradient-to-r  from-neutral-700 to-neutral-950 shadow-inner shadow-neutral-700"
        //         : "absolute  py-5 md:py-3 2xl:py-2 2xl:px-2 bg-gradient-to-r from-neutral-700 to-neutral-950 shadow-inner shadow-neutral-700 top-36 md:top-14 lg:top-16 z-10"
        //     } py-2 px-2 md:py-1 md:px-1  w-screen md:max-w-screen mx-auto transition-all duration-0 ease-in-out 
        //     `}
      >
        <div className=" mx-auto px-3">
          <div className="flex items-center justify-between  md:py-1 md:px-1">
          
               <Image
                src="/logo-1.png"
                alt="logo"
                width={200}
                height={150}
                priority={true}
                className={clsx({
                  " bg-transparent  md:py-1 md:px-1":isScrolled,
                  "bg-neutral-800 shadow-inner h-auto w-auto shadow-neutral-700 rounded-lg  py-2 px-2 transition-all duration-100 ease-in-out":!isScrolled
                
                })}
                
              /> 
            
          
                 <Navlink/>
            
       
            <div
              className={`${
                isScrolled ? "text-neutral-400  " : "text-neutral-500"
              } md:hidden `}
            >
              <TiThMenuOutline size={40} />
              {/* <FiMenu size={35}/> */}
            </div>
            <div className="hidden text-neutral-300 md:flex items-center md:text-sm lg:text-lg 2xl:text-xl  md:font-sm md:tracking-tight lg:gap-3 md:gap-1">
              <button className="md:py-2 md:px-2 lg:py-2 lg:px-2 2xl:tracking-widest">
                REGISTER
              </button>
              <button className="md:py-2 md:px-2 lg:py-2 lg:px-2 2xl:tracking-widest">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
