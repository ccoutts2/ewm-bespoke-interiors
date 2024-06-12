"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
  alt: string;
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
    src: assetsConfig["mews-property"][7].src,
    alt: assetsConfig["mews-property"][7].description,
  },
  {
    title: "Leonari Office",
    href: "/projects/leonari-office",
    src: assetsConfig["leonari-office"][2].src,
    alt: assetsConfig["leonari-office"][2].description,
  },
  {
    title: "Finsbury Square",
    href: "/projects/finsbury-square",
    src: assetsConfig["finsbury-square"][1].src,
    alt: assetsConfig["finsbury-square"][1].description,
  },
  {
    title: "Pentonville",
    href: "/projects/pentonville",
    src: assetsConfig.pentonville[4].src,
    alt: assetsConfig.pentonville[4].description,
  },
];

const Page = ({ params: { projectId } }: ProjectPage) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
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
      <section className="bg-[#e4e8ed]">
        <nav className="mt-[4rem] px-4 py-4 md:mt-0 md:py-8  lg:px-32">
          <ul className="flex w-full flex-row flex-wrap items-stretch justify-center no-underline lg:justify-between">
            {projectNavItems.map((item, index) => (
              <Link href={item.href} key={index} className="no-underline">
                <li className="list-none uppercase">{item.title}</li>
              </Link>
            ))}
          </ul>
        </nav>
        <section className="flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-between px-32">
            {projects.map((project, index) => (
              <Projects
                key={index}
                href={project.href}
                src={project.src}
                title={project.title}
              />
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Page;

const Projects = (props: { title: string; src: string; href: string }) => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.set(container.current, { y: 50, opacity: 0 });
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(container.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: false,
          start: "top bottom-=10",
          end: "bottom bottom",
        },
        ease: "power1.inOut",
        opacity: 1,
        y: 0,
        duration: 1,
      });
    },
    { scope: container },
  );

  return (
    <Link href={props.href} className="z-[5] py-8">
      <div ref={container}>
        <div className="h-[20rem] w-full md:h-[25rem] md:w-[39rem]">
          <img src={props.src} className="h-full w-full object-cover" />
        </div>
        <h3 className="pb-6 pt-4 text-lg uppercase">{props.title}</h3>
      </div>
    </Link>
  );
};
