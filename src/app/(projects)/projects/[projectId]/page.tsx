"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

import ProjectInfoOverlay from "@/components/ProjectInfoOverlay/ProjectInfoOverlay";
import Button from "@/components/buttons/Button/Button";

import Image from "next/image";

import { assetsConfig } from "@/config/assets";
import { projectDetails } from "@/lib/getProjectDetails";
import Link from "next/link";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const [projectId, setProjectId] = useState<string | null>(null);
  const project = projectDetails[projectId as keyof typeof projectDetails];
  const images = assetsConfig[projectId as keyof typeof assetsConfig];

  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const { projectId } = await params;
      setProjectId(projectId);
    };
    unwrapParams();
  }, [params]);

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
    <main ref={container} className="relative h-full w-full overscroll-none">
      <div className="flex gap-[0.5rem] lg:gap-[3.2rem]">
        <div className="relative w-full md:w-[50%]">
          <div className="relative flex h-[inherit] flex-col">
            {images.map(
              (
                image: {
                  description: string;
                  src: string;
                },
                index: number,
              ) => (
                <Image
                  key={index}
                  src={image.src}
                  width={600}
                  height={400}
                  alt={image.description}
                  className="h-screen w-[inherit] object-cover"
                />
              ),
            )}
          </div>

          <section className="fixed right-0 top-0 flex h-screen w-full flex-row justify-between px-4 pt-8 text-right md:w-[50%] md:flex-col md:text-left lg:pl-[6rem]">
            <h1 className="hidden w-full text-lg uppercase text-[#F17A14] md:flex md:text-4xl">
              {project.title}
            </h1>
            <div className="flex w-full flex-row-reverse justify-between pb-12 md:flex-col md:py-2 lg:w-[48rem] lg:gap-[2rem]">
              <div className="pb-8 md:hidden">
                <Button
                  label="more info"
                  ariaLabel="more info"
                  type="button"
                  onClick={handleButtonClick}
                />

                <ProjectInfoOverlay
                  handleButtonClick={handleButtonClick}
                  container={container}
                  isInfoOpen={isInfoOpen}
                  title={project.title}
                  information={project.information}
                  location={project.location}
                />
              </div>
              <div className="hidden before:block before:text-base before:content-[`Info`] md:flex lg:w-[24rem] lg:before:mb-[3.2rem]">
                <p className="list-none text-sm no-underline lg:text-base">
                  {project.information}
                </p>
              </div>
              <ul className="hidden w-full py-4 text-xs before:content-[`Role`] md:flex md:w-[20rem] md:text-base md:before:mb-[3.2rem] md:before:block">
                <li className="w-full list-none uppercase no-underline md:text-base">
                  {project.location}
                </li>
              </ul>

              <Link
                className="w-fit rounded bg-[#444444] px-4 py-2 text-start text-sm capitalize leading-relaxed text-[#f6f6f6]"
                href="/projects"
              >
                Back
              </Link>
            </div>
            <div className="absolute bottom-1 right-2">
              <span
                className="list-none text-base uppercase no-underline "
                ref={scrollInfo}
              >
                0%
              </span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
