"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";
import { assetsConfig } from "@/config/assets";

import PagesHero from "@/components/PagesHero/PagesHero";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import MeetTheTeam from "@/components/MeetTheTeam/MeetTheTeam";

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <NavBar />
      <PagesHero
        img={assetsConfig.workshopPicture[0].src}
        description={assetsConfig.workshopPicture[0].description}
        header={"Our Story"}
      />
      <section className="flex flex-col justify-between p-4 md:flex-row md:items-center md:px-12 lg:px-32 lg:py-12">
        <Quotes
          text={`"No part-timers, no passengers. We're in it for the love of the game"`}
        />
        <div className="flex flex-col md:flex-[2]">
          <Paragraphs
            text="As a family run business, we are invested in giving our clients a
          high-quality service. Having a team that has come from the varied
          backgrounds such as main contracting and production of carpentry,
          upholstery and furniture installation gives us the necessary
          experience to deliver high quality products"
          />
          <Paragraphs
            text="Our workshop consists of all the relevant machinery required to
          produce exceptional joinery items, spraying and upholstery to any
          level of specification"
          />
        </div>
      </section>
      <section className="h-auto px-4 md:px-12 lg:px-32">
        <div className="flex gap-4">
          <div className="flex-[2.2]">
            <WorkShopImages
              src={assetsConfig.workshopPicture[1].src}
              description={assetsConfig.workshopPicture[1].description}
            />
          </div>
          <div className="h-auto flex-1">
            <WorkShopImages
              src={assetsConfig.workshopPicture[6].src}
              description={assetsConfig.workshopPicture[6].description}
            />
          </div>
        </div>
        <div className="flex md:justify-start">
          <div className="flex-1 pr-2">
            <WorkShopImages
              src={assetsConfig.workshopPicture[2].src}
              description={assetsConfig.workshopPicture[2].description}
            />
          </div>
          <div className="flex-1 pl-2">
            <WorkShopImages
              src={assetsConfig.workshopPicture[3].src}
              description={assetsConfig.workshopPicture[3].description}
            />
          </div>
        </div>
        <div className="h-auto">
          <WorkShopImages
            src={assetsConfig.workshopPicture[4].src}
            description={assetsConfig.workshopPicture[4].description}
          />
        </div>
      </section>
      <section className="flex flex-col justify-between p-4 md:flex-row md:items-center md:px-12 lg:px-32 lg:py-12">
        <Quotes
          text={`"Enthusiasm and expertise drives us to create better every day"`}
        />
        <div className="flex flex-col md:flex-[3]">
          <Paragraphs text="Our design team can provide a full design service from concept to install" />
          <Paragraphs
            text="This includes bespoke built in furniture /
          joinery design, material specifications and
          visual renders"
          />
          <Paragraphs
            text="We have extensive knowledge of the most
          innovative trends / products being used
          across all workplace & residential sectors"
          />
          <Paragraphs
            text="Our design consultation includes full detailed
          / manufacturing drawings following site
          surveys"
          />
          <Paragraphs
            text="We can supply a full range of material
          samples to allow client selection. We can
          also match any existing specifications where
          additional elements are being introduced to
          the space"
          />
          <Paragraphs
            text="We present a 3D visual as part of the drawing
          issue for all items to allow client sign off, prior
          to manufacture"
          />
        </div>
      </section>
      <GetInTouch />
      <MeetTheTeam />
      <Footer />
    </>
  );
};

export default Page;

interface QuotesProps {
  text: string;
}

const Quotes = ({ text }: QuotesProps) => {
  return (
    <h3 className="text-2xl font-light italic md:flex-[2] md:px-12 md:text-3xl">
      {text}
    </h3>
  );
};

interface ParagraphsProps {
  text: string;
}

const Paragraphs = ({ text }: ParagraphsProps) => {
  return <p className="py-4 text-[#191919] md:text-lg lg:text-xl">{text}</p>;
};

interface WorkShopImagesProps {
  src: string;
  description: string;
}

const WorkShopImages = ({ src, description }: WorkShopImagesProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const imageContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.set(imageContainer.current, { y: 25, opacity: 0 });
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(imageContainer.current, {
        scrollTrigger: {
          trigger: imageContainer.current,
          scrub: false,
          start: "top bottom-=350px",
          end: "bottom bottom",
        },
        ease: "power1.inOut",
        opacity: 1,
        y: 0,
        duration: 0.75,
      });
    },
    { scope: container },
  );
  return (
    <div ref={container} className="h-full py-2">
      <div ref={imageContainer} className="h-full w-full">
        <img
          src={src}
          alt={description}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
