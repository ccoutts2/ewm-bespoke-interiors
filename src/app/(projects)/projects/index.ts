import { assetsConfig } from "@/config/assets";

export interface ProjectProps {
  title: string;
  src: string;
  alt: string;
  projectId: string;
}

export const projects: ProjectProps[] = [
  {
    title: "New Hibernia House",
    src: assetsConfig["new-hibernia-house"][2].src,
    alt: assetsConfig["new-hibernia-house"][2].description,
    projectId: "new-hibernia-house",
  },
  {
    title: "Finsbury Square",
    src: assetsConfig["finsbury-square"][1].src,
    alt: assetsConfig["finsbury-square"][1].description,
    projectId: "finsbury-square",
  },
  {
    title: "Saffron Hill",
    src: assetsConfig["saffron-hill"][0].src,
    alt: assetsConfig["saffron-hill"][0].description,
    projectId: "saffron-hill",
  },
  {
    title: "Capability Green",
    src: assetsConfig["capability-green"][0].src,
    alt: assetsConfig["capability-green"][0].description,
    projectId: "capability-green",
  },
  {
    title: "New Street",
    src: assetsConfig["new-street"][2].src,
    alt: assetsConfig["new-street"][2].description,
    projectId: "new-street",
  },
  {
    title: "Woodbury House",
    src: assetsConfig["woodbury-house"][0].src,
    alt: assetsConfig["woodbury-house"][0].description,
    projectId: "woodbury-house",
  },
  {
    title: "Alexander Street",
    src: assetsConfig["alexander-street"][0].src,
    alt: assetsConfig["alexander-street"][0].description,
    projectId: "alexander-street",
  },
  {
    title: "Dalling Road",
    src: assetsConfig["dalling-road"][0].src,
    alt: assetsConfig["dalling-road"][0].description,
    projectId: "dalling-road",
  },

  {
    title: "Fulton Mews",
    src: assetsConfig["fulton-mews"][4].src,
    alt: assetsConfig["fulton-mews"][3].description,
    projectId: "fulton-mews",
  },
  {
    title: "Hype Park Corner",
    src: assetsConfig["hyde-park-corner"][0].src,
    alt: assetsConfig["hyde-park-corner"][0].description,
    projectId: "hyde-park-corner",
  },
  {
    title: "Yester Park",
    src: assetsConfig["yester-park"][0].src,
    alt: assetsConfig["yester-park"][0].description,
    projectId: "yester-park",
  },

  //   {
  //     title: "Pentonville",
  //     src: assetsConfig.pentonville[4].src,
  //     alt: assetsConfig.pentonville[4].description,
  //     projectId: "pentonville",
  //   },
];
