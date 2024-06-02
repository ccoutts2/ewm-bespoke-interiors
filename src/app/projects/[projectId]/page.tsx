"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

import { assetsConfig } from "@/config/assets";

const projectDetails = {
  "mews-property": {
    title: "Mews Property",
    src: assetsConfig.mewsProperty8.src,
    description: "Project Details from Mews Property",
  },
  "leonari-office": {
    title: "Leonari Office",
    src: assetsConfig.leonariOffice3.src,
    description: "Project Details from Leonari Office...",
  },
  "finsbury-square": {
    title: "Finsbury Square",
    src: assetsConfig.finsburySquare1.src,
    description: "Project Details from Finsbury Square...",
  },
};

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const ProjectPage = ({ params: { projectId } }: ProjectPageProps) => {
  const project = projectDetails[projectId as keyof typeof projectDetails];

  if (!project) {
    return <p className="mt-[10rem]">Project not found</p>;
  }

  const scrollInfo = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let percentage = 0;

    const lenis = new Lenis({
      duration: 1.2,
      infinite: true,
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

  return (
    <section>
      <div className="mt-[15rem]">{`welcome to ${project.title}`}</div>
      <section className="app">
        <div className="section">
          <div className="sectionWrapper">
            <div className="sectionCol">
              <div className="sectionColContainer">
                <img
                  className="sectionColImage"
                  src={assetsConfig.finsburySquare1.src}
                />
                <img
                  className="sectionColImage"
                  src={assetsConfig.finsburySquare2.src}
                />
                <img
                  className="sectionColImage"
                  src={assetsConfig.finsburySquare3.src}
                />
                <img
                  className="sectionColImage"
                  src={assetsConfig.finsburySquare4.src}
                />
                <img
                  className="sectionColImage"
                  src={assetsConfig.finsburySquare5.src}
                />
                <img
                  className="sectionColImage"
                  src={assetsConfig.finsburySquare6.src}
                />
              </div>
              <div className="sectionColContainer --clone">
                <img
                  className="sectionColImage"
                  src={assetsConfig.finsburySquare1.src}
                />
              </div>
            </div>

            <div className="sectionCol">
              <div className="sectionColContainer">
                <div className="sectionColHeading">
                  <h1>New Street Project</h1>
                </div>
                <div className="sectionColDescription">
                  <div className="sectionColInfo">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi ipsum cupiditate voluptatibus vitae modi,
                      corrupti ipsa provident esse omnis nemo repellat
                      repellendus corporis odit sint temporibus beatae id?
                      Voluptates, dignissimos.
                    </span>
                  </div>
                  <ul className="sectionColRole">
                    <li>joinery</li>
                    <li>interior design</li>
                  </ul>
                  <ul className="sectionColAwards">
                    <li>transformation of the year</li>
                  </ul>
                </div>
                <div className="sectionColLink">
                  <h2>View Project</h2>
                </div>
                <div className="sectionColScroll">
                  <span ref={scrollInfo}>0%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProjectPage;
