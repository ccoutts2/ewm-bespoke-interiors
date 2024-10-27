import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useLoadPicturesAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement | null>(null);
  const imageContainer = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.set(imageContainer.current, { y: 100, autoAlpha: 0 });

      gsap.to(imageContainer.current, {
        scrollTrigger: {
          trigger: imageContainer.current,
          scrub: false,
          start: "top bottom-=10",
          end: "bottom bottom",
        },
        ease: "power1.inOut",
        autoAlpha: 1,
        y: 0,
        duration: 1,
      });
    },
    { scope: container },
  );

  return { container, imageContainer };
};
