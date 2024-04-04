"use client";
import React, { useEffect, useState } from "react";
import { FiFacebook, FiInstagram, FiMapPin, FiPhone, FiTwitter } from "react-icons/fi";
import clsx from "clsx";
export default function FirstNav() {
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
    <nav  
    className={clsx(
         "transition-all duration-0 ease-in-out w-full md:max-w-screen mx-auto shadow-inner shadow-neutral-700 text-neutral-300"
    ,{
        "hidden": isScrolled,
        "absolute flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-center md:justify-between duo:py-5 lg:py-5 lg:px-5 py-3 px-3 bg-gradient-to-r from-neutral-950 to-neutral-800": !isScrolled
      })}
    
    // className={
    //     `
    //     ${
    //        isScrolled
    //         ? "hidden  "
    //         : "absolute flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-center md:justify-between duo:py-5 lg:py-5 lg:px-5 py-3  px-3  bg-gradient-to-r from-neutral-950 to-neutral-800 "   
    //     } transition-all duration-0 ease-in-out w-full md:max-w-screen mx-auto shadow-inner shadow-neutral-700 text-neutral-300
    //     `
      
    // }
    >
        <div className="flex items-center justify-center  gap-2">
<FiMapPin size={30} className="self-start  md:self-center"/>
     <p className="text-xs 12pro:tracking-widest  fold:tracking-widest  xr:tracking-widest s8:tracking-wider leading-relaxed sm:leading-normal sm:text-sm text-center font-extralight lg:text-pretty md:font-light md:tracking-wide   md:text-sm lg:text-lg 2xl:font-bold 2xl:text-xl 2xl:tracking-widest 2xl:capitalize">123 , Rue Kasr ElBadia 20900,Casablanca promotions.</p> 
        </div>
        <div className="flex items-center justify-center  gap-2">
            <FiPhone size={30}  className="self-start  md:self-center"/>
            <p className="tracking-widest text-center text-base  font-light md:text-sm lg:text-lg 2xl:font-bold 2xl:text-xl">(+212)-661-28-34-77</p>
        </div>
        <div className="flex items-center justify-center gap-2 2xl:gap-5">
            <FiFacebook size={35}/>
            <FiInstagram size={35}/>
            <FiTwitter size={35}/>
        </div>
    </nav>
  )
}
