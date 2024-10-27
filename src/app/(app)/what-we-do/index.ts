import { assetsConfig } from "@/config/assets";

export interface WorkProps {
  src: string;
  header: string;
  alt: string;
}

export const works: WorkProps[] = [
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
    header: "independent spraying services",
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
