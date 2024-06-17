import { assetsConfig } from "@/config/assets";
import Button from "../buttons/Button/Button";

const sectors = [
  {
    src: assetsConfig.officePicture[0].src,
    header: "residential",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quos, optio ducimus quisquam temporibus voluptate obcaecati",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "commerical",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quos, optio ducimus quisquam temporibus voluptate obcaecati",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "retail",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quos, optio ducimus quisquam temporibus voluptate obcaecati",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "hospitality",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quos, optio ducimus quisquam temporibus voluptate obcaecati",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "heritage & culture",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quos, optio ducimus quisquam temporibus voluptate obcaecati",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "cat a/b office fit out",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quos, optio ducimus quisquam temporibus voluptate obcaecati",
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
            className="flex w-full flex-col justify-start py-4 capitalize md:w-[45%] lg:w-[30%]"
          >
            <div>
              <img src={sector.src}></img>
            </div>
            <h3 className="py-2 text-lg">{sector.header}</h3>
            <p className="pb-4 pt-2 text-sm leading-loose">{sector.info}</p>
            <Button href="/" label={`explore ${sector.header} works`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sectors;
