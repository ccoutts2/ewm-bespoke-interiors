"use client";
import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ProjectInfoOverlayProps {
  handleButtonClick: () => void;
  isInfoOpen: boolean;
  container: RefObject<HTMLDivElement>;
  title: string;
  information: string;
  location: string;
}

const ProjectInfoOverlay = ({
  handleButtonClick,
  isInfoOpen,
  container,
  title,
  information,
  location,
}: ProjectInfoOverlayProps) => {
  const overlay = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true }).to(overlay.current, {
        duration: 1,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "power4.inOut",
        zIndex: 1000000,
      });
    },
    { scope: container },
  );

  useEffect(() => {
    if (isInfoOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isInfoOpen]);

  return (
    <div
      ref={overlay}
      className="fixed right-0 top-0 z-0 flex h-screen w-full bg-white [clip-path:polygon(100%_0,100%_0,100%_100%,100%_100%)]"
    >
      <div className="fixed left-0 top-0 h-full w-full px-4 pt-8">
        <div className="flex w-full items-center justify-between border-b border-b-black pb-4 capitalize">
          <div>
            <h2 className="text-xl">{title}</h2>
          </div>
          <div
            onClick={handleButtonClick}
            className="flex cursor-pointer items-center gap-4 rounded-[20rem]  bg-[#191919] px-4 py-2 text-[#e4e8ed]"
          >
            <button>close</button>
          </div>
        </div>
        <div className="flex w-full pt-4 text-left">
          <p>{information}</p>
        </div>
        <div className="flex w-full flex-row justify-between pt-4 text-left">
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoOverlay;
