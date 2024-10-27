"use client";

import Link from "next/link";
import { projects } from "@/app/(projects)/projects";
import { useLoadPicturesAnimation } from "@/hooks/useLoadPicturesAnimation";

const ProjectPageProjects = () => {
  const { container, imageContainer } = useLoadPicturesAnimation();

  return (
    <div
      ref={container}
      className="flex flex-wrap items-center justify-center gap-8"
    >
      {projects.map((project, index) => (
        <Link
          key={index}
          href={`/projects/${project.projectId}`}
          className="z-[5] py-4"
        >
          <div
            ref={(el) => {
              imageContainer.current[index] = el;
            }}
            className="h-[20rem] w-full md:h-[22rem] md:w-[34rem]"
          >
            <img
              src={project.src}
              alt={project.alt}
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="py-4 text-center text-lg uppercase">
            {project.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default ProjectPageProjects;
