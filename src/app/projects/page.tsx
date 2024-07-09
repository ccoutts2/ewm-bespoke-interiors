"use client";

import { useEffect, useRef, useState } from "react";
import gsap, { Power0 } from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { assetsConfig } from "@/config/assets";
import Link from "next/link";
import Lenis from "lenis";
import Image from "next/image";

// interface ProjectNavProps {
//   title: string;
//   href: string;
// }

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

// const projectNavItems: ProjectNavProps[] = [
//   {
//     title: "residential",
//     href: "/",
//   },
//   {
//     title: "office",
//     href: "/",
//   },
//   {
//     title: "soul spaces",
//     href: "/",
//   },
//   {
//     title: "gallery",
//     href: "/",
//   },
// ];

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

  const container = useRef<HTMLElement>(null);
  const gallery = useRef<HTMLDivElement>(null);

  const images = useRef<(HTMLImageElement | null)[]>([]);

  let rotationValues = [10, -5, 2, -2];

  const [isFlipped, setIsFlipped] = useState(false);
  const [buttonText, setButtonText] = useState("Explore Projects");

  console.log(isFlipped);

  const buttonFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setButtonText(isFlipped ? "Collapse Projects" : "Explore Projects");
    }, 1000);

    return () => clearTimeout(delay);
  }, [isFlipped]);

  useGSAP(
    () => {
      buttonFlip();

      gsap.to(images.current, {
        x: "0",
        y: "0",
      });
    },
    { scope: container },
  );

  return (
    <>
      <NavBar />
      <section ref={container} className="h-screen">
        <div ref={gallery} className="flex w-screen gap-16 px-32 pt-[25vh]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="m-b-[1em] relative h-[500px] w-[400px] overflow-hidden"
            >
              <img
                ref={(e) => {
                  if (e) images.current[index] = e;
                }}
                src={project.src}
                alt={project.alt}
              />
            </div>
          ))}
        </div>
      </section>
      <button
        onClick={buttonFlip}
        className="absolute left-1/2 top-[75%] z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-3xl bg-[#0084ff] px-[2em] py-[1em] text-white"
      >
        {buttonText}
      </button>
      <section>
        {/* <nav className="mt-[4rem] px-4 py-4 md:mt-0 md:py-8 lg:px-32">
          <ul className="flex w-full flex-row flex-wrap items-stretch justify-center no-underline lg:justify-between">
            {projectNavItems.map((item, index) => (
              <Link href={item.href} key={index} className="no-underline">
                <li className="list-none uppercase">{item.title}</li>
              </Link>
            ))}
          </ul>
        </nav> */}
        <section className="flex items-center justify-center px-4 py-16 md:px-12 lg:px-32">
          <div className="flex flex-wrap items-center justify-center lg:gap-8">
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
    <Link href={props.href} className="z-[5] py-4">
      <div ref={container}>
        <div className="h-[20rem] w-full md:h-[25rem] md:w-[38rem] ">
          <Image
            width={600}
            height={400}
            src={props.src}
            alt="Picture of project work"
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="py-4 text-center text-lg uppercase">{props.title}</h3>
      </div>
    </Link>
  );
};
