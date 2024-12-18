"use client";

import Link from "next/link";
import { projects } from "@/app/(projects)/projects";

import { useLoadPicturesAnimation } from "@/hooks/useLoadPicturesAnimation";
import Image from "next/image";

const ProjectPageProjects = () => {
  const { container, imageContainer } = useLoadPicturesAnimation();

  return (
    <div ref={container} className="mt-[10vh]">
      <ol className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <li
            key={index}
            className="flex overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"
          >
            <div
              ref={(el) => {
                imageContainer.current[index] = el;
              }}
              className="relative flex w-full flex-col-reverse gap-8 rounded-3xl bg-[#F17A14] bg-opacity-80 p-8 md:flex-row-reverse"
            >
              <div className="flex flex-col items-start justify-start gap-4 md:flex-[1.5]">
                <h3 className="text-center text-base uppercase">
                  {project.title}
                </h3>
                <p className="hidden text-sm md:inline-block">
                  {project.description.substring(0, 150)}...
                  <span className="absolute right-4 top-4">
                    {" "}
                    <svg
                      aria-hidden="true"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "20px", height: "20px" }}
                    >
                      <g>
                        <rect
                          width="28"
                          height="28"
                          rx="8"
                          transform="matrix(-1 0 0 1 28 0)"
                          fill="#171719"
                        />
                        <g transform="matrix(1,0,0,1,0,0)">
                          <path
                            d="M11 9H19V17"
                            stroke="#fff"
                            strokeWidth="0.958"
                          />
                          <path
                            d="M19 9L8 20"
                            stroke="#fff"
                            strokeWidth="0.958"
                          />
                        </g>
                      </g>
                      <defs>
                        <rect
                          width="28"
                          height="28"
                          rx="8"
                          transform="matrix(-1 0 0 1 28 0)"
                          fill="#fff"
                        />
                      </defs>
                    </svg>
                  </span>
                </p>
                <span className="rounded-3xl border border-solid border-black px-4 py-1 text-sm">
                  {project.location}
                </span>
              </div>

              <div className="max-h-[15rem] w-full max-w-[20rem] overflow-hidden md:max-h-[10rem] md:flex-[1]">
                <Image
                  width={project.width}
                  height={project.height}
                  src={project.src}
                  alt={project.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              <Link
                className="absolute inset-0"
                href={`/projects/${project.projectId}`}
              />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProjectPageProjects;
