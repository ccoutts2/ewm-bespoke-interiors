import Link from "next/link";
import { assetsConfig } from "@/config/assets";
const imageCarousel: "imageCarousel" = "imageCarousel";
const hero1 = assetsConfig[imageCarousel][0].src;
const hero2 = assetsConfig[imageCarousel][1].src;
const hero3 = assetsConfig[imageCarousel][2].src;
const hero4 = assetsConfig[imageCarousel][3].src;
const hero5 = assetsConfig[imageCarousel][5].src;
const hero6 = assetsConfig[imageCarousel][6].src;
const hero8 = assetsConfig[imageCarousel][8].src;

import ImageCarousel from "../ImageCarousel/ImageCarousel";

const Hero = () => {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero8];

  return (
    <>
      <ImageCarousel images={images} auto />
      <HeroText />
    </>
  );
};

export default Hero;

const HeroText = () => {
  return (
    <div className="px-4 py-4 text-[#191919] md:w-[80%] md:px-12 md:py-8 md:pt-12 lg:p-32">
      <p className="py-4 text-lg md:text-3xl">
        <span className="uppercase">Ewm</span> Bespoke Interiors is a leading
        provider of joinery, carpentry, upholstery / re-upholstery and office
        furniture solutions for commercial and residential spaces.
      </p>
      <p className="py-4 text-lg md:text-3xl">
        We are a family run business with over 40 years of experience in the
        industry, based in South East London.
      </p>

      <div className="my-8">
        <Link
          className="cursor-pointer rounded-[20rem] bg-[#F17A14] px-4 py-2 capitalize text-[#f6f6f6] no-underline md:px-8 md:py-4 md:text-2xl"
          href="/about"
        >
          our story
        </Link>
      </div>
    </div>
  );
};
