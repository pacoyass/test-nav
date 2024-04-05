import Image from "next/image";
import Link from "next/link";
import Slider from "./components/layouts/homeslider/Slider";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
<main className="">

 <section className="">
  <Slider/> 
</section>

 <Separator  className="w-[90%] mx-auto my-4 rounded-2xl bg-neutral-700"/> 

 <section className="flex items-center justify-center py-20">
<h1 className="text-3xl md:text-5xl lg:text-7xl 2xl:text-9xl">Menus</h1>
</section> 
<Separator  className="w-[90%] mx-auto my-4 rounded-2xl bg-neutral-700"/>  
<section className="flex items-center justify-center py-20">
<h1 className="text-3xl md:text-5xl lg:text-7xl 2xl:text-9xl">Promotions</h1>
</section> 
<Separator  className="w-[90%] mx-auto my-4 rounded-2xl bg-neutral-700"/> 
<section className="flex items-center justify-center py-20">
<h1 className="text-3xl md:text-5xl lg:text-7xl 2xl:text-9xl">Livraison</h1>
</section> 
</main>
  );
}
