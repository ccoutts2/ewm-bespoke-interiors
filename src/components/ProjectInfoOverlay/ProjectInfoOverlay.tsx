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
}

const ProjectInfoOverlay = ({
  handleButtonClick,
  isInfoOpen,
  container,
  title,
  information,
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
      className="fixed right-0 top-0 z-0 flex h-screen w-full bg-white p-4 [clip-path:polygon(100%_0,100%_0,100%_100%,100%_100%)]"
    >
      <div className="fixed left-0 top-0 h-full w-full">
        <div className="flex w-full items-center justify-between border-b border-b-black px-4 py-4 capitalize md:px-12 md:py-6 lg:px-32 lg:text-xl">
          <div>
            <h2 className="text-4xl">{title}</h2>
          </div>
          <div
            onClick={handleButtonClick}
            className="flex cursor-pointer items-center gap-4 rounded-[20rem]  bg-[#191919] px-4 py-2 text-[#e4e8ed]"
          >
            <button>
              <span>close</span>
            </button>
          </div>
        </div>
        <section className="flex h-full w-full flex-col items-stretch justify-between gap-10 p-4 md:flex-row md:px-12 md:py-8 lg:px-32  lg:py-16">
          <p>{information}</p>
        </section>
      </div>
    </div>
  );
};

export default ProjectInfoOverlay;
