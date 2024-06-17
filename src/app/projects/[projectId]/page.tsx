"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

import Button from "@/components/buttons/Button/Button";

import { assetsConfig } from "@/config/assets";

interface ProjectDetailsProps {
  title: string;
}

interface InfoModalProps {
  handleButtonClick: () => void;
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
  const images = assetsConfig[projectId as keyof typeof assetsConfig];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
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
    <section className="relative h-full w-full">
      <div className="flex gap-[0.5rem] lg:gap-[3.2rem]">
        <div className="relative w-[60%] md:w-[50%]">
          <div className="relative flex h-[inherit] flex-col">
            {images.map(
              (image: { description: string; src: string }, index: number) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.description}
                  className="h-screen w-[inherit] object-cover"
                />
              ),
            )}
          </div>

          <div className="fixed right-0 top-0 flex h-screen w-[50%] flex-col justify-between px-4 pt-8 text-right md:text-left lg:pl-[6rem]">
            <h1 className="w-full text-lg uppercase md:text-4xl">
              {project.title}
            </h1>
            <div className="flex flex-col pb-12 md:py-2 lg:w-[48rem] lg:gap-[2rem]">
              <div className="md:hidden">
                <Button label="more info" onClick={handleButtonClick} />
                {isModalOpen && (
                  <InfoModal handleButtonClick={handleButtonClick} />
                )}
              </div>
              <div className="hidden before:block before:text-base before:content-[`Info`] md:flex lg:w-[20rem] lg:before:mb-[3.2rem]">
                <span className="list-none text-sm capitalize no-underline lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi ipsum cupiditate voluptatibus vitae modi, corrupti
                  ipsa provident esse omnis nemo repellat repellendus corporis
                  odit sint temporibus beatae id? Voluptates, dignissimos.
                </span>
              </div>
              <ul className=" w-full py-4 text-xs before:content-[`Role`] md:w-[20rem] md:text-base md:before:mb-[3.2rem] md:before:block">
                <li className="w-full list-none uppercase no-underline md:text-base">
                  joinery
                </li>
                <li className="list-none uppercase no-underline md:text-base">
                  interior design
                </li>
              </ul>
              <div>
                <Button href="/projects" label="back" />
              </div>
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

const InfoModal = ({ handleButtonClick }: InfoModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 text-left">
      <div className="w-full max-w-screen-lg rounded-lg bg-white p-8">
        <p className="pb-4 text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          ipsum cupiditate voluptatibus vitae modi, corrupti ipsa provident esse
          omnis nemo repellat repellendus corporis odit sint temporibus beatae
          id? Voluptates, dignissimos.
        </p>
        <Button label="close" onClick={handleButtonClick} />
      </div>
    </div>
  );
};
