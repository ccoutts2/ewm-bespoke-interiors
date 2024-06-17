import { assetsConfig } from "@/config/assets";

const clients = [
  {
    src: "/assets/logos/lamello.svg",
    description: "company logo of lamello",
  },
  {
    src: "/assets/logos/blum.svg",
    description: "company logo of blum",
  },
  {
    src: "/assets/logos/lamello.svg",
    description: "company logo of lamello",
  },
  {
    src: "/assets/logos/lamello.svg",
    description: "company logo of lamello",
  },
  {
    src: "/assets/logos/lamello.svg",
    description: "company logo of lamello",
  },
  {
    src: "/assets/logos/lamello.svg",
    description: "company logo of lamello",
  },
];

const Clients = () => {
  return (
    <section className="px-4 pt-4 md:px-12 md:pt-8 lg:px-32 lg:pt-12">
      <h2 className=" uppercase md:text-xl lg:text-2xl">
        just look at who we work with
      </h2>
      <div className="flex flex-wrap items-stretch justify-center gap-8 py-8 md:justify-between md:gap-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex w-[40%] flex-col items-center justify-center py-4 capitalize md:w-[25%]"
          >
            <div className="w-[50%]">
              <img
                className="h-full w-full object-cover"
                src={client.src}
                alt={client.description}
              ></img>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
