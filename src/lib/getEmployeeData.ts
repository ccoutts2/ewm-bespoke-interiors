import { assetsConfig } from "@/config/assets";

interface EmployeeData {
  src: string;
  alt: string;
  name: string;
  title: string;
  information: string;
}

export const employeeData: EmployeeData[] = [
  {
    src: assetsConfig["headshots"][0].src,
    alt: assetsConfig["headshots"][0].description,
    name: "Johnnie Wynne",
    title: "Managing Director",
    information:
      "With a solid foundation in operations from experience with a leading main contractor in the construction industry, Johnnie brings a comprehensive understanding of project execution and team dynamics to his role as Managing Director. Leveraging expertise in programming and a broad construction knowledge, he excels at streamlining processes and implementing innovative solutions to deliver exceptional results for clients.",
  },
  {
    src: assetsConfig["headshots"][1].src,
    alt: assetsConfig["headshots"][1].description,
    name: "Georgie Wynne",
    title: "Operations Director",
    information:
      "Georgie Wynne brings a hands-on approach and a keen eye for quality to his role, rooted in his background as a qualified upholsterer. Having spent years perfecting his craft and gaining invaluable experience in installation, he has developed a deep understanding of the intricacies involved in delivering exceptional bespoke projects.",
  },
];
