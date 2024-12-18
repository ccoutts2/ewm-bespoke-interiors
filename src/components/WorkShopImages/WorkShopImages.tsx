"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

interface WorkShopImagesProps {
  src: string;
  description: string;
  width: number;
  height: number;
}

const WorkShopImages = ({
  src,
  description,
  width,
  height,
}: WorkShopImagesProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const imageContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.set(imageContainer.current, { y: 25, opacity: 0 });
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(imageContainer.current, {
        scrollTrigger: {
          trigger: imageContainer.current,
          scrub: false,
          start: "top bottom-=350px",
          end: "bottom bottom",
        },
        ease: "power1.inOut",
        opacity: 1,
        y: 0,
        duration: 0.75,
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="h-full py-2">
      <div ref={imageContainer} className="h-full w-full">
        <Image
          width={width}
          height={height}
          src={src}
          alt={description}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default WorkShopImages;
