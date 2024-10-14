"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

import ProjectInfoOverlay from "@/components/ProjectInfoOverlay/ProjectInfoOverlay";
import Button from "@/components/buttons/Button/Button";

import Image from "next/image";

import { assetsConfig } from "@/config/assets";

interface ProjectDetailsProps {
  title: string;
  information: string;
  tag1: string;
  tag2: string;
  width: number;
  height: number;
}

const projectDetails: { [key: string]: ProjectDetailsProps } = {
  "mews-property": {
    title: "Mews Property",
    information:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    tag1: "Joinery",
    tag2: "Interior design",
    width: 600,
    height: 400,
  },
  "leonari-office": {
    title: "Leonari Office",
    information: "Detailed information about Mews Property.",
    tag1: "Carpentry",
    tag2: "Interior design",
    width: 400,
    height: 250,
  },
  "finsbury-square": {
    title: "Finsbury Square",
    information: "Detailed information about Mews Property.",
    tag1: "workshops",
    tag2: "Interior design",
    width: 600,
    height: 400,
  },
  pentonville: {
    title: "Pentonville",
    information: "Detailed information about Mews Property.",
    tag1: "Joinery",
    tag2: "Consultation",
    width: 600,
    height: 400,
  },
};

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const ProjectPage = ({ params: { projectId } }: ProjectPageProps) => {
  const project = projectDetails[projectId as keyof typeof projectDetails];
  const images = assetsConfig[projectId as keyof typeof assetsConfig];

  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  const scrollInfo = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let percentage = 0;

    const lenis = new Lenis({
      duration: 1.2,
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

  if (!project) {
    return <p className="mt-[10rem]">Project not found</p>;
  }

  return (
    <section ref={container} className="relative h-full w-full overscroll-none">
      <div className="flex gap-[0.5rem] lg:gap-[3.2rem]">
        <div className="relative w-full md:w-[50%]">
          <div className="relative flex h-[inherit] flex-col">
            {images.map(
              (
                image: {
                  description: string;
                  src: string;
                  width: number;
                  height: number;
                },
                index: number,
              ) => (
                <Image
                  key={index}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.description}
                  className="h-screen w-[inherit] object-cover"
                />
              ),
            )}
          </div>

          <div className="fixed right-0 top-0 flex h-screen w-full flex-row justify-between px-4 pt-8 text-right md:w-[50%] md:flex-col md:text-left lg:pl-[6rem]">
            <h1 className="hidden w-full text-lg uppercase md:flex md:text-4xl">
              {project.title}
            </h1>
            <div className="flex w-full flex-row-reverse justify-between pb-12 md:flex-col md:py-2 lg:w-[48rem] lg:gap-[2rem]">
              <div className="pb-8 md:hidden">
                <Button
                  label="more info"
                  ariaLabel="more info"
                  onClick={handleButtonClick}
                />

                <ProjectInfoOverlay
                  handleButtonClick={handleButtonClick}
                  container={container}
                  isInfoOpen={isInfoOpen}
                  title={project.title}
                  information={project.information}
                  tag1={project.tag1}
                  tag2={project.tag2}
                />
              </div>
              <div className="hidden before:block before:text-base before:content-[`Info`] md:flex lg:w-[20rem] lg:before:mb-[3.2rem]">
                <span className="list-none text-sm capitalize no-underline lg:text-base">
                  {project.information}
                </span>
              </div>
              <ul className="hidden w-full py-4 text-xs before:content-[`Role`] md:flex md:w-[20rem] md:text-base md:before:mb-[3.2rem] md:before:block">
                <li className="w-full list-none uppercase no-underline md:text-base">
                  {project.tag1}
                </li>
                <li className="w-full list-none uppercase no-underline md:text-base">
                  {project.tag2}
                </li>
              </ul>
              <div>
                <Button href="/projects" label="back" ariaLabel="back" />
              </div>
            </div>
            <div className="absolute bottom-1 right-2">
              <span
                className="list-none text-base uppercase no-underline "
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
