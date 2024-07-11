import { assetsConfig } from "@/config/assets";

const clients = [
  {
    src: "/assets/logos/assa-abloy.jpg",
    description: "company logo of Assa Abloy",
  },
  {
    src: "/assets/logos/camira.png",
    description: "company logo of Camira",
  },
  {
    src: "/assets/logos/egger.jpg",
    description: "company logo of Egger",
  },
  {
    src: "/assets/logos/farrow-and-ball.png",
    description: "company logo of Farrow and Ball",
  },
  {
    src: "/assets/logos/hafele.webp",
    description: "company logo of Hafele",
  },
  {
    src: "/assets/logos/kronospan.jpg",
    description: "company logo of Kronospan",
  },
  {
    src: "/assets/logos/kvadrat.jpeg",
    description: "company logo of Kvadrat",
  },
  {
    src: "/assets/logos/panelCo.jfif",
    description: "company logo of PanelCo",
  },
  {
    src: "/assets/logos/verco.png",
    description: "company logo of Verco",
  },
];

const Clients = () => {
  return (
    <section className="px-4 pt-4 md:px-12 md:pt-8 lg:px-32 lg:pt-12">
      <div className="flex flex-wrap items-stretch justify-center gap-8 py-8 md:justify-between md:gap-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex w-[40%] flex-col items-center justify-center py-4 capitalize md:w-[25%]"
          >
            <div className="w-[50%]">
              <img
                className="h-full w-full object-cover mix-blend-multiply"
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
