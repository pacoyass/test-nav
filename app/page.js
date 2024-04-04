import Image from "next/image";
import Link from "next/link";
import Slider from "./components/layouts/homeslider/Slider";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
<section className="min-h-svh h-[100%] ">

<div className="">
<Slider/>

</div>

  <Separator  className="w-[90%] mx-auto my-4 rounded-2xl bg-neutral-700"/>


<div className="h-[100svh]">

</div>
{/* <div className="h-[100svh] ">

</div>  */}
</section>
  );
}
