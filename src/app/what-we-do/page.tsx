import { assetsConfig } from "@/config/assets";

import PagesHero from "@/components/PagesHero/PagesHero";

const Page = () => {
  return (
    <section>
      <PagesHero img={assetsConfig.officePicture.src} header={"What We Do"} />
    </section>
  );
};

export default Page;
