"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from "clsx";

const links = [
    { name: 'Menu', href: '/menu'},
    {
      name: 'Promotions',
      href: '/promotions',
  
    },
    { name: 'Livraison', href: '/livraison'},
    { name: 'Restaurants', href: '/restaurants'},
    { name: 'Contact', href: '/contact'},

  ];
export default function Navlink() {
    const pathname = usePathname();
  return (
    <ul className="md:flex items-center justify-center   hidden text-zinc-300 md:gap-2 md:text-sm lg:text-lg  lg:gap-4 2xl:gap-10 2xl:text-xl 2xl:tracking-widest md:py-2 md:px-2 font-semibold">
    {links.map((link)=>{
      return(
         <li  key={link.name}
          className={clsx(
          "hover:text-zinc-500 hover:bg-zinc-200 rounded-lg p-2",
          {
              'bg-zinc-300  text-zinc-500': pathname === link.href,
            },
       )

       }
         >
          <Link
    
       href={link.href}
      
       
       >
       <p >{link.name} </p>
       </Link> 
      </li>  
      )
    })}
    
  </ul>
  )
}
