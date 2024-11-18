import WorkShopImages from "@/components/WorkShopImages/WorkShopImages";

import { assetsConfig } from "@/config/assets";

import PagesHero from "@/components/PagesHero/PagesHero";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import MeetTheTeam from "@/components/MeetTheTeam/MeetTheTeam";

const Page = () => {
  return (
    <main>
      <PagesHero
        img={assetsConfig.whatWeDo[0].src}
        description={assetsConfig.whatWeDo[0].description}
        header={"Our Story"}
      />
      <div className="flex flex-col p-4 md:px-12 lg:px-32 lg:py-12">
        <Paragraphs text="As a family-owned business, we take pride in the personal and professional service given to all our clients. We have developed a strong reputation over the years by combining these family values with a commitment to craftsmanship. In our approach, we remain deeply involved in all projects, ensuring attention to every detail, trust, and long-term involvement with our clients." />
        <Paragraphs text="Our fully equipped workshop is the heart of our business, a place where ingenuity and attention to detail are nurtured. This facility forms the lifeblood of our operations, housing all the machinery required for precision joinery, custom spraying, and bespoke upholstery. It's here that we turn ideas into reality, making sure each piece meets the highest standards." />
        <Paragraphs text="Our services range from carpentry and fitting of furniture to upholstery. We are fully prepared to handle both standard and highly customised projects, providing tailored solutions that meet your specifications precisely." />
      </div>
      <div className="h-auto px-4 md:px-12 lg:px-32">
        <div className="flex gap-4">
          <div className="flex-[2.2]">
            <WorkShopImages
              src={assetsConfig.workshopPicture[1].src}
              description={assetsConfig.workshopPicture[1].description}
              width={600}
              height={600}
            />
          </div>
          <div className="h-auto flex-1">
            <WorkShopImages
              src={assetsConfig.workshopPicture[6].src}
              description={assetsConfig.workshopPicture[6].description}
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex md:justify-start">
          <div className="flex-1 pr-2">
            <WorkShopImages
              src={assetsConfig.workshopPicture[4].src}
              description={assetsConfig.workshopPicture[4].description}
              width={600}
              height={600}
            />
          </div>
          <div className="flex-1 pl-2">
            <WorkShopImages
              src={assetsConfig.workshopPicture[3].src}
              description={assetsConfig.workshopPicture[3].description}
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="h-auto">
          <WorkShopImages
            src={assetsConfig.workshopPicture[5].src}
            description={assetsConfig.workshopPicture[5].description}
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="flex flex-col p-4 md:px-12 lg:px-32 lg:py-12">
        <Paragraphs
          text="Our design team can provide a full design service from concept to install. This includes bespoke built in furniture /
          joinery design, material specifications and
          visual renders."
        />
        <Paragraphs
          text="We have extensive knowledge of the most
          innovative trends / products being used
          across all workplace & residential sectors"
        />
        <Paragraphs
          text="Our design consultation includes full detailed
          / manufacturing drawings following site
          surveys. We can supply a full range of material
          samples to allow client selection. We can
          also match any existing specifications where
          additional elements are being introduced to
          the space."
        />
        <Paragraphs
          text="We present a 3D visual as part of the drawing
          issue for all items to allow client sign off, prior
          to manufacture"
        />
      </div>
      <GetInTouch />
      <MeetTheTeam />
    </main>
  );
};

export default Page;

interface ParagraphsProps {
  text: string;
}

const Paragraphs = ({ text }: ParagraphsProps) => {
  return <p className="py-4 text-[#191919] md:text-lg lg:text-xl">{text}</p>;
};
