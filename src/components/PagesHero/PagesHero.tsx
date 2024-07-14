interface PagesHeroProps {
  img: string;
  header: string;
  description: string;
}

const PagesHero = ({ img, header, description }: PagesHeroProps) => {
  return (
    <section className="relative z-[-1] mt-[1rem] flex h-[60vh] w-full items-center justify-center md:mt-0 lg:h-[75vh] ">
      <h1 className="absolute z-[1] text-4xl text-[white] md:text-5xl">
        {header}
      </h1>
      <img
        src={img}
        className="h-full w-full object-cover brightness-[0.7]"
        alt={description}
      />
    </section>
  );
};

export default PagesHero;
