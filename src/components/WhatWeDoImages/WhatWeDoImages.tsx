"use client";
import { useLoadPicturesAnimation } from "@/hooks/useLoadPicturesAnimation";
import { works } from "@/app/(app)/what-we-do";
import Image from "next/image";

const WhatWeDoImages = () => {
  const { container, imageContainer } = useLoadPicturesAnimation();

  return (
    <div
      ref={container}
      className="relative flex flex-col items-center justify-between px-4 py-8 md:flex-row md:flex-wrap md:gap-4 md:px-12 lg:px-28"
    >
      <svg
        className="absolute bottom-0 right-0 z-[-1] h-[15rem] rotate-180 opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        fill="#F17A14"
      >
        <path d="M0 0v4l396.3 84a500.1 500.1 0 0 0 207.4 0L1000 4V0H0Z"></path>
      </svg>
      {works.map((work, index) => (
        <div
          ref={(el) => {
            imageContainer.current[index] = el;
          }}
          key={index}
          className="flex w-full flex-col items-center justify-center gap-4 py-4 capitalize md:w-[45%] lg:w-[30%]"
        >
          <div className="h-[18rem] w-full">
            <Image
              className="h-full w-full object-cover"
              src={work.src}
              alt={work.alt}
              width={400}
              height={200}
              loading="lazy"
            />
          </div>
          <h3 className="py-2 text-base">{work.header}</h3>
        </div>
      ))}
    </div>
  );
};

export default WhatWeDoImages;
