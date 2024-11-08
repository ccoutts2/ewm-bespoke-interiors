import { assetsConfig } from "@/config/assets";

import PagesHero from "@/components/PagesHero/PagesHero";

import WhatWeDoImages from "@/components/WhatWeDoImages/WhatWeDoImages";

const Page = () => {
  return (
    <>
      <PagesHero
        img={assetsConfig.workshopPicture[0].src}
        description={assetsConfig.workshopPicture[0].description}
        header={"What We Do"}
      />
      <div className="p-4 md:px-12 md:py-12 md:text-lg lg:px-48">
        <Paragraphs text="EWM Bespoke Interiors is a trusted provider of custom joinery, carpentry, upholstery, re-upholstery, and office furniture solutions, tailored for both commercial and residential spaces. We specialise in transforming ideas into beautifully crafted, functional environments that reflect the unique needs and styles of our clients. From initial concept to final handover, our mission is to ensure every detail exceeds expectations, delivering high-quality workmanship with a personal touch." />

        <Paragraphs text="What truly makes us unique is the diverse experience of our team, who come from a variety of backgrounds, including main contracting, carpentry production, upholstery, and furniture installation. This collective expertise enables us to tackle projects with ease, ensuring every product is not only of exceptional quality but also perfectly aligned with the client’s expectations." />
        <Paragraphs text="At EWM Bespoke Interiors, we operate from a fully equipped workshop that houses the machinery to deliver joinery, professional spraying services, and expert upholstery to meet any specification. Every item is meticulously crafted with the highest standards of quality and durability in mind." />
        <Paragraphs text="We believe in the power of collaboration, working closely with our clients at every stage of the process to ensure their vision is realised in a way that reflects their style, meets their needs, and stands the test of time." />
      </div>
      <WhatWeDoImages />
    </>
  );
};

export default Page;

const Paragraphs = (props: { text: string }) => {
  return <p className="py-4 text-[#191919]">{props.text}</p>;
};
