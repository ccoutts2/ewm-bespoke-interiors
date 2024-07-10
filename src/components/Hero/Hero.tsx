import Link from "next/link";
import { assetsConfig } from "@/config/assets";
const imageCarousel: "imageCarousel" = "imageCarousel";
const hero1 = assetsConfig[imageCarousel][0].src;
const hero2 = assetsConfig[imageCarousel][1].src;
const hero3 = assetsConfig[imageCarousel][2].src;
const hero4 = assetsConfig[imageCarousel][6].src;
const hero5 = assetsConfig[imageCarousel][8].src;
const hero6 = assetsConfig[imageCarousel][9].src;
const hero7 = assetsConfig[imageCarousel][10].src;
const hero8 = assetsConfig[imageCarousel][11].src;

import ImageCarousel from "../ImageCarousel/ImageCarousel";

const Hero = () => {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];

  return (
    <>
      <ImageCarousel images={images} auto />
      <Section2 />
    </>
  );
};

export default Hero;

const Section2 = () => {
  return (
    <section className="px-4 py-4 text-[#191919] md:w-[80%] md:px-12 md:py-8 md:pt-12 lg:p-32">
      <p className="py-4 text-lg md:text-3xl">
        <span className="uppercase">ewm</span> Bespoke Interiors is a leading
        provider of joinery, carpentry, upholstery / re-upholstery and office
        furniture solutions for commercial and residential spaces.
      </p>
      <p className="py-4 text-lg md:text-3xl">
        We are a family run business with over 40 years of experience in the
        industry, based in South East London.
      </p>

      <div className="py-4">
        <Link className="no-underline" href="/about">
          <button className=" cursor-pointer rounded-[20rem] bg-[#191919] px-4 py-2 capitalize text-[#e4e8ed] md:px-8 md:py-4 md:text-2xl">
            our story
          </button>
        </Link>
      </div>
    </section>
  );
};
