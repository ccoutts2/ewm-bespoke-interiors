"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Link from "next/link";

import Button from "@/components/buttons/Button/Button";

import { assetsConfig } from "@/config/assets";

interface ProjectDetailsProps {
  title: string;
}

const projectDetails: { [key: string]: ProjectDetailsProps } = {
  "mews-property": {
    title: "Mews Property",
  },
  "leonari-office": {
    title: "Leonari Office",
  },
  "finsbury-square": {
    title: "Finsbury Square",
  },
  pentonville: {
    title: "Pentonville",
  },
};

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const ProjectPage = ({ params: { projectId } }: ProjectPageProps) => {
  const project = projectDetails[projectId as keyof typeof projectDetails];

  if (!project) {
    return <p className="mt-[10rem]">Project not found</p>;
  }

  const scrollInfo = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let percentage = 0;

    const lenis = new Lenis({
      duration: 1.2,
      infinite: true,
      smoothWheel: true,
    });

    lenis.on(
      "scroll",
      ({ scroll, limit }: { scroll: number; limit: number }) => {
        percentage = (scroll / limit) * 100;
        if (scrollInfo.current) {
          scrollInfo.current.textContent = `${percentage.toFixed(0)}%`;
        }
      },
    );

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="relative h-full w-full">
      <div className="flex gap-[3.2rem]">
        <div
          style={{ width: "calc(100vw / 2 - 3.2rem)", position: "relative" }}
        >
          <div className="relative flex h-[inherit] flex-col">
            <img
              className="h-screen w-[inherit] object-cover"
              src={assetsConfig.finsburySquare1.src}
            />
            <img
              className="w-inherit h-full object-cover"
              src={assetsConfig.finsburySquare2.src}
            />
            <img
              className="w-inherit h-full object-cover"
              src={assetsConfig.finsburySquare3.src}
            />
            <img
              className="w-inherit h-full object-cover"
              src={assetsConfig.finsburySquare4.src}
            />
            <img
              className="w-inherit h-full object-cover"
              src={assetsConfig.finsburySquare5.src}
            />
            <img
              className="w-inherit h-full object-cover"
              src={assetsConfig.finsburySquare6.src}
            />
          </div>
          <div className="relative flex h-screen flex-col">
            <img
              className="w-inherit h-full object-cover"
              src={assetsConfig.finsburySquare1.src}
            />
          </div>
        </div>

        <div className="fixed right-0 top-0 h-screen w-[50%] p-[1.6rem] pl-[6rem]">
          <div>
            <h1 className="text-[5rem] uppercase">{project.title}</h1>
            <div className="flex w-[48rem] flex-wrap gap-[6.4rem]">
              <div className="w-[20rem] before:mb-[3.2rem] before:block before:text-base before:content-[`Info`]">
                <span className="list-none text-base uppercase no-underline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi ipsum cupiditate voluptatibus vitae modi, corrupti
                  ipsa provident esse omnis nemo repellat repellendus corporis
                  odit sint temporibus beatae id? Voluptates, dignissimos.
                </span>
              </div>
              <ul className="w-[20rem] before:mb-[3.2rem] before:block before:text-base before:content-[`Role`]">
                <li className="list-none text-base uppercase no-underline">
                  joinery
                </li>
                <li className="list-none text-base uppercase no-underline">
                  interior design
                </li>
              </ul>
              <ul className="w-[20rem] before:mb-[3.2rem] before:block before:text-[1.6rem] before:content-[`Role`]">
                <li className="list-none text-base uppercase no-underline">
                  transformation of the year
                </li>
              </ul>
            </div>
            <div>
              <Button href="/projects" label="back to projects" />
            </div>
            <div className="absolute bottom-1 right-2">
              <span
                className="list-none text-base uppercase no-underline"
                ref={scrollInfo}
              >
                0%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
