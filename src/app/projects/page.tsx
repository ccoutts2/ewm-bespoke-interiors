"use client";

import Link from "next/link";
import { assetsConfig } from "@/config/assets";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

interface ProjectProps {
  title: string;
  src: string;
  alt: string;
  projectId: string;
}

const projects: ProjectProps[] = [
  {
    title: "Fulton Mews",
    src: assetsConfig["fulton-mews"][4].src,
    alt: assetsConfig["fulton-mews"][3].description,
    projectId: "fulton-mews",
  },
  {
    title: "New Street",
    src: assetsConfig["new-street"][2].src,
    alt: assetsConfig["new-street"][2].description,
    projectId: "new-street",
  },
  {
    title: "Leonari Office",
    src: assetsConfig["leonari-office"][2].src,
    alt: assetsConfig["leonari-office"][2].description,
    projectId: "leonari-office",
  },
  {
    title: "Finsbury Square",
    src: assetsConfig["finsbury-square"][1].src,
    alt: assetsConfig["finsbury-square"][1].description,
    projectId: "finsbury-square",
  },
  {
    title: "Pentonville",
    src: assetsConfig.pentonville[4].src,
    alt: assetsConfig.pentonville[4].description,
    projectId: "pentonville",
  },
];

const ProjectsPage = () => {
  return (
    <main className="flex items-center justify-center px-4 py-16 md:px-12 lg:px-32">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/projects/${project.projectId}`}
            className="z-[5] py-4"
          >
            <div className="h-[20rem] w-full md:h-[22rem] md:w-[34rem]">
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
    </main>
  );
};

export default ProjectsPage;
