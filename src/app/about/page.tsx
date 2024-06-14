"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";
import { assetsConfig } from "@/config/assets";

import PagesHero from "@/components/PagesHero/PagesHero";
import Button from "@/components/buttons/Button/Button";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import EmployeeInfo from "@/components/EmployeeInfo/EmployeeInfo";
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

  // const images = useRef<(HTMLImageElement | null)[]>([]);

  // const manageMouseEnter = () => {
  //   gsap.to(images.current[0], {
  //     duration: 1,
  //     opacity: 0,
  //     ease: "power4.inOut",
  //   });
  //   gsap.to(images.current[1], {
  //     duration: 1,
  //     clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  //     ease: "power4.inOut",
  //   });
  // };

  // const manageMouseLeave = () => {
  //   gsap.to(images.current[0], {
  //     duration: 1,
  //     opacity: 1,
  //     ease: "power4.inOut",
  //   });
  //   gsap.to(images.current[1], {
  //     duration: 1,
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  //     ease: "power4.inOut",
  //   });
  // };

  return (
    <>
      <NavBar />
      <PagesHero
        img={assetsConfig.officePicture[0].src}
        description={assetsConfig.officePicture[0].description}
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
      <section className="md:px-12 lg:px-32">
        <div>
          <WorkShopImages
            src={assetsConfig.workshopPicture[0].src}
            description={assetsConfig.workshopPicture[0].description}
          />
        </div>
        <div className="flex md:justify-start">
          <div className="flex-1 pr-2">
            <WorkShopImages
              src={assetsConfig.workshopPicture[1].src}
              description={assetsConfig.workshopPicture[1].description}
            />
          </div>
          <div className="flex-1 pl-2">
            <WorkShopImages
              src={assetsConfig.workshopPicture[2].src}
              description={assetsConfig.workshopPicture[2].description}
            />
          </div>
        </div>
        <div>
          <WorkShopImages
            src={assetsConfig.workshopPicture[3].src}
            description={assetsConfig.workshopPicture[3].description}
          />
        </div>
        <div>
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

      {/* <div
          onMouseEnter={(e) => {
            manageMouseEnter(e);
          }}
          onMouseLeave={(e) => {
            manageMouseLeave(e);
          }}
          className="relative h-[20rem] w-[30rem] pl-[10rem]"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ewm-bespoke-interiors.appspot.com/o/Pentonville%20Road%2F210%20Pentonville%20Road%2014%20December%202023%20020.jpg?alt=media&token=88bf5a51-0d8b-4748-94f8-33fb48df3fc6"
            alt="Image 1"
            className="absolute h-full w-full"
            ref={(el) => {
              images.current[0] = el;
            }}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ewm-bespoke-interiors.appspot.com/o/Pentonville%20Road%2F210%20Pentonville%20Road%2014%20December%202023%20023.jpg?alt=media&token=e253f3c5-d85c-40be-a110-f8feccee070f"
            alt="Image 2"
            className="absolute h-full w-full [clip-path:polygon(0_0,100%_0,100%_0,0_0)]"
            ref={(el) => {
              images.current[1] = el;
            }}
          />
        </div> */}

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
    <div ref={container} className="py-2">
      <div ref={imageContainer} className="lg-h-[80%] h-full w-full">
        <img
          src={src}
          alt={description}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

const GetInTouch = () => {
  return (
    <section className="relative flex h-[20rem] items-center justify-center gap-8 bg-white md:gap-32 md:px-12 lg:px-32">
      <h2 className="z-30 uppercase md:text-xl lg:text-2xl ">
        Let&apos;s get in touch
      </h2>
      <div className="z-30">
        <Button href="/contact" label="contact us" />
      </div>
      <div className="absolute h-[60%] w-full bg-[#F17A14] text-right [clip-path:polygon(0_0,100%_0,100%_18%,100%_85%,72%_100%,0_50%)]"></div>
      {/* clip-path: polygon(0 0, 100% 0, 100% 18%, 100% 85%, 72% 100%, 0% 50%); */}
    </section>
  );
};
