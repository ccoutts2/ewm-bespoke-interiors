"use client";
import { useLoadPicturesAnimation } from "@/hooks/useLoadPicturesAnimation";
import { works } from "@/app/(app)/what-we-do";

const WhatWeDoImages = () => {
  const { container, imageContainer } = useLoadPicturesAnimation();

  return (
    <div
      ref={container}
      className="flex flex-col items-center justify-between px-4 py-8 md:flex-row md:flex-wrap md:gap-4 md:px-12 lg:px-28"
    >
      {works.map((work, index) => (
        <div
          ref={(el) => {
            imageContainer.current[index] = el;
          }}
          key={index}
          className="flex w-full flex-col items-center justify-center gap-4 py-4 capitalize md:w-[45%] lg:w-[30%]"
        >
          <div className="h-[18rem] w-full">
            <img
              className="h-full w-full object-cover"
              src={work.src}
              alt={work.alt}
            ></img>
          </div>
          <h3 className="py-2 text-base">{work.header}</h3>
        </div>
      ))}
    </div>
  );
};

export default WhatWeDoImages;
