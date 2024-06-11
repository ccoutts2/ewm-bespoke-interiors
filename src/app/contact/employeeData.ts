import { assetsConfig } from "@/config/assets";

interface EmployeeDataProps {
  src: string;
  name: string;
  title: string;
  information: string;
}

export const employeeData: EmployeeDataProps[] = [
  {
    src: assetsConfig["headshots"][0].src,
    name: "Johnnie Whynne",
    title: "Managing Director",
    information:
      "Johnnie is really good at his job. He has been leading the company for over 10 years with a focus on innovative design and customer satisfaction.",
  },
  {
    src: assetsConfig["headshots"][1].src,
    name: "Another Whynne",
    title: "Managing Director 2",
    information:
      "Georgie oversees project management and ensures everything runs smoothly from start to finish. His attention to detail is second to none.",
  },
  {
    src: assetsConfig["headshots"][2].src,
    name: "Another Whynne",
    title: "Director",
    information:
      "John brings a wealth of experience in financial management, ensuring the company remains financially robust and efficient.",
  },
  {
    src: assetsConfig["headshots"][3].src,
    name: "Another Whynne",
    title: "Director",
    information:
      "Mr. Whynne specialises in strategic planning and corporate development, positioning the company for long-term success.",
  },
];
