"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { assetsConfig } from "@/config/assets";

import PagesHero from "@/components/PagesHero/PagesHero";
import Button from "@/components/buttons/Button/Button";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const Page = () => {
  return (
    <>
      <NavBar />
      <PagesHero img={assetsConfig.officePicture.src} header={"Our Story"} />
      <section className="bg-[#e4e8ed]">
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
            <WorkShopImages src={assetsConfig.workshopPicture1.src} />
          </div>
          <div className="flex md:justify-start">
            <div className="flex-1 pr-2">
              <WorkShopImages src={assetsConfig.workshopPicture2.src} />
            </div>
            <div className="flex-1 pl-2">
              <WorkShopImages src={assetsConfig.workshopPicture3.src} />
            </div>
          </div>
          <div>
            <WorkShopImages src={assetsConfig.workshopPicture4.src} />
          </div>
          <div>
            <WorkShopImages src={assetsConfig.workshopPicture5.src} />
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
        <section className="bg-white p-4 md:flex md:justify-between md:p-12 lg:px-32 lg:py-12">
          <h2 className=" uppercase md:text-xl lg:text-2xl ">what we do</h2>
          <section>
            <Button href="/what-we-do" label="discover everything we do" />
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Page;

const Quotes = (props: { text: string }) => {
  return (
    <h3 className="text-2xl font-light italic md:flex-[2] md:px-12 md:text-3xl">
      {props.text}
    </h3>
  );
};

const Paragraphs = (props: { text: string }) => {
  return (
    <p className="py-4 text-[#191919] md:text-lg lg:text-xl">{props.text}</p>
  );
};

const WorkShopImages = (props: { src: string }) => {
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
        <img src={props.src} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};
