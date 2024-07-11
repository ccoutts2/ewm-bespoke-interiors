"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";
import { assetsConfig } from "@/config/assets";

import PagesHero from "@/components/PagesHero/PagesHero";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

interface WorkProps {
  src: string;
  header: string;
  alt: string;
}

const works: WorkProps[] = [
  {
    src: assetsConfig.whatWeDo[0].src,
    header: "carpentry & bespoke joinery",
    alt: assetsConfig.whatWeDo[0].description,
  },
  {
    src: assetsConfig.whatWeDo[1].src,
    header: "office furniture",
    alt: assetsConfig.whatWeDo[1].description,
  },
  {
    src: assetsConfig.whatWeDo[2].src,
    header: "in house manufacturing",
    alt: assetsConfig.whatWeDo[2].description,
  },
  {
    src: assetsConfig.whatWeDo[3].src,
    header: "in house spraying",
    alt: assetsConfig.whatWeDo[3].description,
  },
  {
    src: assetsConfig.whatWeDo[4].src,
    header: "stone surfaces",
    alt: assetsConfig.whatWeDo[4].description,
  },
  {
    src: assetsConfig.whatWeDo[5].src,
    header: "upholstery",
    alt: assetsConfig.whatWeDo[5].description,
  },
];

const Page = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const imageContainer = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.set(imageContainer.current, { y: 100, autoAlpha: 0 });
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(imageContainer.current, {
        scrollTrigger: {
          trigger: imageContainer.current,
          scrub: false,
          start: "top bottom-=10",
          end: "bottom bottom",
        },
        ease: "power1.inOut",
        autoAlpha: 1,
        y: 0,
        duration: 1,
      });
    },
    { scope: container },
  );

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
        img={assetsConfig.whatWeDo[6].src}
        description={assetsConfig.whatWeDo[6].description}
        header={"What We Do"}
      />
      <section className="p-4 md:px-12 md:text-lg lg:px-32">
        <Paragraphs
          text="EWM Bespoke Interiors is a leading
          provider of joinery, carpentry, upholstery / re-upholstery and office
          furniture solutions for commercial and residential spaces. Our mission
          is to deliver professional services, our team of experts work closely
          with clients from concept to handover to ensure their expectations are
          met."
        />
        <Paragraphs
          text="We are a family run business with over 40 years of experience in the
          industry, based in South East London"
        />
        <Paragraphs
          text="As a family run business, we are invested in giving our clients a
          high-quality service. Having a team that has come from the varied
          backgrounds such as main contracting and production of carpentry,
          upholstery and furniture installation gives us the necessary
          experience to deliver high quality products."
        />
        <Paragraphs
          text="Our workshop consists of all the relevant machinery required to
          produce exceptional joinery items, spraying and upholstery to any
          level of specification."
        />
      </section>
      <section
        ref={container}
        className="flex flex-col items-center justify-between px-4 py-8 md:flex-row md:flex-wrap md:gap-4 md:px-12 lg:px-28"
      >
        {works.map((work, index) => (
          <div
            ref={(el) => {
              imageContainer.current[index] = el;
            }}
            key={index}
            className="flex w-full flex-col items-center justify-center gap-4 py-4 capitalize md:w-[45%] lg:w-[30%]"
          >
            <div className="h-[18rem] w-full">
              <img
                className="h-full w-full object-cover"
                src={work.src}
                alt={work.alt}
              ></img>
            </div>
            <h3 className="py-2 text-base">{work.header}</h3>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Page;

const Paragraphs = (props: { text: string }) => {
  return <p className="py-4 text-[#191919]">{props.text}</p>;
};
