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
<h1>Menus</h1>
</section>  
<section className="flex items-center justify-center py-20">
<h1>qdldqdlq qdlql</h1>
</section> 
<section className="flex items-center justify-center py-20">
<h1>qdldqdlq qdlql</h1>
</section> 
</main>
  );
}
