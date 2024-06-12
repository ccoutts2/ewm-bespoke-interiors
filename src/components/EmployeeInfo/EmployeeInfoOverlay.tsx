"use client";
import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface EmployeeInfoOverlayProps {
  toggleInfo: () => void;
  isInfoOpen: boolean;
  container: RefObject<HTMLDivElement>;
  name: string;
  title: string;
  information: string;
  src: string;
}

const EmployeeInfoOverlay = ({
  toggleInfo,
  isInfoOpen,
  container,
  name,
  title,
  information,
  src,
}: EmployeeInfoOverlayProps) => {
  const overlay = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      gsap.set(heading.current, { autoAlpha: 0 });
      gsap.set(text.current, { autoAlpha: 0 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(overlay.current, {
          duration: 1,
          clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
          ease: "power4.inOut",
          zIndex: 1000000,
        })
        .to(
          heading.current,
          {
            delay: 0.5,
            ease: "power3.inOut",
            autoAlpha: 1,
            duration: 1,
          },
          0,
        )
        .to(
          imageContainer.current,
          {
            duration: 1.2,
            ease: "power4.inOut",
            delay: 0.5,
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          },
          0,
        )
        .to(
          text.current,
          {
            duration: 1,
            ease: "power4.inOut",
            autoAlpha: 1,
            delay: 0.5,
          },
          0,
        );
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
          <div ref={heading}>
            <h2 className="text-4xl">{name}</h2>
            <h3 className="text-2xl">{title}</h3>
          </div>
          <div
            onClick={toggleInfo}
            className="flex cursor-pointer items-center gap-4 rounded-[20rem]  bg-[#191919] px-4 py-2 text-[#e4e8ed]"
          >
            <button>
              <span>close</span>
            </button>
          </div>
        </div>
        <section className="flex h-full w-full flex-col items-stretch justify-between gap-10 p-4 md:flex-row md:px-12 md:py-8 lg:px-32  lg:py-16">
          <div
            ref={imageContainer}
            className="flex-1 [clip-path:polygon(0_0,100%_0,100%_0,0_0)]"
          >
            <img src={src} />
          </div>
          <div ref={text} className="flex-1">
            <p>{information}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployeeInfoOverlay;
