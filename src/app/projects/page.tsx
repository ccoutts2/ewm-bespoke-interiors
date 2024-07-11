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
import Image from "next/image";

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
      <section className="flex items-center justify-center px-4 py-16 md:px-12 lg:px-32">
        <div className="flex flex-wrap items-center justify-center lg:gap-8">
          {projects.map((project, index) => (
            <Projects
              key={index}
              href={project.href}
              src={project.src}
              alt={project.alt}
              title={project.title}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;

const Projects = ({ title, src, href, alt }: ProjectProps) => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.set(container.current, { y: 50, opacity: 0 });
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(container.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: false,
          start: "top bottom-=100px",
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
    <Link href={href} className="z-[5] py-4">
      <div ref={container}>
        <div className="h-[20rem] w-full md:h-[25rem] md:w-[38rem] ">
          <Image
            width={600}
            height={400}
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="py-4 text-center text-lg uppercase">{title}</h3>
      </div>
    </Link>
  );
};
