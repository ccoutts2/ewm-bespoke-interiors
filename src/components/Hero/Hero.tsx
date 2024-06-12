"use client";
import { useEffect, useRef } from "react";

import Link from "next/link";
import { assetsConfig } from "@/config/assets";

const Hero = () => {
  const scrollRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={scrollRef} className="relative bg-[#e4e8ed]">
      <Section1 />
      <Section2 />
    </section>
  );
};

export default Hero;

const Section1 = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <section className="sticky top-0 flex h-screen flex-col items-center justify-center">
      <div className="h-screen w-full">
        <img
          src={assetsConfig.officePicture[0].src}
          alt={assetsConfig.officePicture[0].description}
          className="h-full w-full object-cover brightness-[0.6]"
        />
      </div>
      <div className="absolute top-[15rem]">
        <h1
          data-scroll
          data-scroll-speed="-0.4"
          className=" px-4 text-4xl capitalize text-white md:px-8 md:text-6xl"
        >
          crafted by hand. created by experts
        </h1>
      </div>
    </section>
  );
};

const Section2 = () => {
  return (
    <section className="relative h-screen bg-[#e4e8ed]">
      <div className="absolute top-[3rem] px-4 text-[#191919] md:top-[2rem] md:w-[80%] md:px-12 md:pt-12 lg:p-32">
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
      </div>
    </section>
  );
};
