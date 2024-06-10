import { assetsConfig } from "@/config/assets";

const clients = [
  {
    src: assetsConfig.officePicture[0].src,
    header: "little greene",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "lamello",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "sketchup",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "festool",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "latham",
  },
  {
    src: assetsConfig.officePicture[0].src,
    header: "blum",
  },
];

const Clients = () => {
  return (
    <section className="bg-[#e4e8ed] px-4 pt-4 md:px-12 md:pt-8 lg:px-32 lg:pt-12">
      <h2 className=" uppercase md:text-xl lg:text-2xl">
        just look at who we work with
      </h2>
      <div className="flex flex-wrap items-stretch justify-center gap-8 py-8 md:justify-between md:gap-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex w-[40%] flex-col justify-start py-4 capitalize md:w-[25%]"
          >
            <div>
              <img src={client.src}></img>
            </div>
            <h3 className="py-2 text-lg">{client.header}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
