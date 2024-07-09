import { assetsConfig } from "@/config/assets";
import Button from "../buttons/Button/Button";

const sectors = [
  {
    src: assetsConfig.officePicture[0].src,
    header: "residential",
    info: "Custom design kitchens, wardrobes, media walls and storage to fit your home spaces perfectly",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "commerical",
    info: "From reception desks to banquette seating, our experience in the retail sector is extensive and we manufacture a wide range of elements to complement your vision",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "heritage & culture",
    info: "We understand that buildings with historic and cultural importance desersve and demand a certain approach when it comes to detail and specification. Our team have extensive experience in delivering projects within this sector from Grade I listed museums to high-end art galleries. Our works in these properties predominantly consist of bespoke joinery & carpentry",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "cat a/b office fit out",
    info: "This is a sector we offer our widest range of services. It includes your traditional 1st & 2nd fix carpentry, bespoke joinery, vanity units and office furniture. We have a dedicated team for each element and would work closely with your team to provide the best solutions for your space",
  },
];

const Sectors = () => {
  return (
    <section className="px-4 pt-8 md:px-12 lg:px-32">
      <h2 className=" uppercase md:text-xl lg:text-2xl ">sectors</h2>
      <div className="flex flex-col items-stretch justify-between py-4 md:flex-row md:flex-wrap md:gap-4">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="flex w-full flex-col justify-start py-4 capitalize md:w-[45%] lg:w-[40%]"
          >
            <div>
              <img src={sector.src}></img>
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
