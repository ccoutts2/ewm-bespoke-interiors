"use client";
import { useEffect, useRef } from "react";

import { assetsConfig } from "@/config/assets";

const Hero = () => {
  const scrollRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={scrollRef} className="relative z-[-1] mt-[10vh] bg-[#444444]">
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
      <div className="h-screen  w-full">
        <img
          src={assetsConfig.officePicture.src}
          alt={assetsConfig.officePicture.description}
          className="h-full w-full object-cover brightness-[0.6]"
        />
      </div>
      <div className="absolute top-[15rem]">
        <h1
          data-scroll
          data-scroll-speed="-0.4"
          className="text-4xl capitalize text-white"
        >
          crafted by hand. created by experts
        </h1>
      </div>
    </section>
  );
};

const Section2 = () => {
  return (
    <section className="relative h-screen bg-[#444444]">
      <p className="absolute top-[15rem] capitalize text-white">
        we are a family run business offering lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Commodi, a adipisci magni itaque quis at
        aliquam deleniti, quas maiores voluptate consequuntur. Illo nisi,
        laboriosam eveniet repellat nam cum dolorem laudantium!
      </p>
    </section>
  );
};
