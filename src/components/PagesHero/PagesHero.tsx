const PagesHero = (props: { img: string; header: string }) => {
  return (
    <section className="relative z-[-1] mt-[1rem] flex h-[60vh] w-full items-center justify-center md:mt-0 lg:h-[75vh] ">
      <h1 className="absolute z-[1] text-4xl text-[white] md:text-5xl">
        {props.header}
      </h1>
      <img
        src={props.img}
        className="h-full w-full object-cover brightness-[0.6]"
      />
    </section>
  );
};

export default PagesHero;
