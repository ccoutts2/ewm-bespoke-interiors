"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { assetsConfig } from "@/config/assets";

const sectors = [
  {
    src: assetsConfig.sectorImages[0].src,
    header: "residential",
    info: "Custom design kitchens, wardrobes, media walls and storage to fit your home spaces perfectly",
  },
  {
    src: assetsConfig.sectorImages[1].src,
    header: "retail",
    info: "From reception desks to banquette seating, our experience in the retail sector is extensive and we manufacture a wide range of elements to complement your vision",
  },
  {
    src: assetsConfig.sectorImages[2].src,
    header: "heritage & culture",
    info: "We understand that buildings with historic and cultural importance desersve and demand a certain approach when it comes to detail and specification. Our team have extensive experience in delivering projects within this sector from Grade I listed museums to high-end art galleries. Our works in these properties predominantly consist of bespoke joinery & carpentry",
  },
  {
    src: assetsConfig.sectorImages[3].src,
    header: "cat a/b office fit out",
    info: "This is a sector we offer our widest range of services. It includes your traditional 1st & 2nd fix carpentry, bespoke joinery, vanity units and office furniture. We have a dedicated team for each element and would work closely with your team to provide the best solutions for your space",
  },
];

const Sectors = () => {
  const container = useRef<HTMLElement | null>(null);
  const imageContainer = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.set(imageContainer.current, { autoAlpha: 0 });
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(imageContainer.current, {
        scrollTrigger: {
          trigger: imageContainer.current,
          scrub: false,
          start: "top bottom-=250px",
          end: "bottom bottom",
        },
        autoAlpha: 1,
        ease: "power1.inOut",
        delay: 0.5,
        duration: 1,
      });
    },
    { scope: container },
  );
  return (
    <section ref={container} className="px-4 pt-8 md:px-12 lg:px-32">
      <h2 className=" uppercase md:text-xl lg:text-2xl ">sectors</h2>
      <div className="flex flex-col items-stretch justify-between py-4 md:flex-row md:flex-wrap md:gap-4">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="flex w-full flex-col justify-start py-4 capitalize md:w-[45%] lg:w-[40%]"
          >
            <div
              ref={(el) => {
                imageContainer.current[index] = el;
              }}
              className="h-auto w-full"
            >
              <Image
                width={2000}
                height={2000}
                className="h-[18rem] w-full object-cover md:h-[20rem] lg:h-[25rem]"
                src={sector.src}
                alt={sector.info}
              />
            </div>
            <h3 className="py-2 text-lg">{sector.header}</h3>
            <p className="pb-4 pt-2 text-sm leading-loose">{sector.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sectors;
