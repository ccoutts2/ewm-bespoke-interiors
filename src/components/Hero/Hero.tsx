"use client";
import { useEffect, useRef } from "react";

import Link from "next/link";
import { assetsConfig } from "@/config/assets";
const pentonvilleKey: "pentonville" = "pentonville";
const hero1 = assetsConfig[pentonvilleKey][1].src;
const hero2 = assetsConfig[pentonvilleKey][4].src;
const hero3 = assetsConfig[pentonvilleKey][2].src;

import ImageCarousel from "../ImageCarousel/ImageCarousel";

const Hero = () => {
  // const scrollRef = useRef<HTMLElement | null>(null);
  const images = [hero1, hero2, hero3];

  return (
    <section
      // ref={scrollRef}
      className="relative"
    >
      <ImageCarousel images={images} auto />
      {/* <Section1 /> */}
      <Section2 />
    </section>
  );
};

export default Hero;

// const Section1 = () => {
//   useEffect(() => {
//     (async () => {
//       const LocomotiveScroll = (await import("locomotive-scroll")).default;
//       const locomotiveScroll = new LocomotiveScroll();
//     })();
//   }, []);

//   return (
//     <section className="sticky top-0 flex h-[50vh] flex-col items-center justify-center lg:h-[85vh]">

//     </section>
//   );
// };

const Section2 = () => {
  return (
    <section className="px-4 py-4 text-[#191919] md:w-[80%] md:px-12 md:py-8 md:pt-12 lg:p-32">
      <p className="py-4 text-lg md:text-3xl">
        <span className="uppercase">ewm</span> Bespoke Interiors is a leading
        provider of joinery, carpentry, upholstery / re-upholstery and office
        furniture solutions for commercial and residential spaces.
      </p>
      <p className="py-4 text-lg md:text-3xl">
        We are a family run business with over 40 years of experience in the
        industry, based in South East London.
      </p>

      <div className="py-4">
        <Link className="no-underline" href="/about">
          <button className=" cursor-pointer rounded-[20rem] bg-[#191919] px-4 py-2 capitalize text-[#e4e8ed] md:px-8 md:py-4 md:text-2xl">
            our story
          </button>
        </Link>
      </div>
    </section>
  );
};
