"use client";

import { useEffect } from "react";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { assetsConfig } from "@/config/assets";
import Link from "next/link";
import Lenis from "lenis";

interface ProjectNavProps {
  title: string;
  href: string;
}

interface ProjectProps {
  title: string;
  href: string;
  src: string;
}

interface ProjectPage {
  params: {
    projectId: string;
  };
}

const projectNavItems: ProjectNavProps[] = [
  {
    title: "residential",
    href: "/",
  },
  {
    title: "office",
    href: "/",
  },
  {
    title: "soul spaces",
    href: "/",
  },
  {
    title: "gallery",
    href: "/",
  },
];

const projects: ProjectProps[] = [
  {
    title: "Mews Property",
    href: "/projects/mews-property",
    src: assetsConfig.mewsProperty8.src,
  },
  {
    title: "Leonari Office",
    href: "/projects/leonari-office",
    src: assetsConfig.leonariOffice3.src,
  },
  {
    title: "Finsbury Square",
    href: "/projects/finsbury-square",
    src: assetsConfig.finsburySquare1.src,
  },
];

const Page = ({ params: { projectId } }: ProjectPage) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      infinite: false,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <NavBar />
      <nav className="mt-[4rem] px-4">
        <ul className="flex w-full flex-row flex-wrap items-stretch justify-center no-underline">
          {projectNavItems.map((item, index) => (
            <Link href={item.href} key={index} className="no-underline">
              <li className="list-none p-2 uppercase">{item.title}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <section>
        {projects.map((project, index) => (
          <Projects
            key={index}
            href={project.href}
            src={project.src}
            title={project.title}
          />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Page;

const Projects = (props: { title: string; src: string; href: string }) => {
  return (
    <Link href={props.href} className="z-[5] p-4">
      <div className="h-[20rem] w-full">
        <img src={props.src} className="h-full w-full object-cover" />
      </div>
      <h3 className="pb-6 pt-4">{props.title}</h3>
    </Link>
  );
};
