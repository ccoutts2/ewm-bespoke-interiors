import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import ProjectPageProjects from "@/components/ProjectPageProjects/ProjectPageProjects";
import PagesHero from "@/components/PagesHero/PagesHero";
import { assetsConfig } from "@/config/assets";

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <PagesHero
          img={assetsConfig.workshopPicture[6].src}
          description={assetsConfig.workshopPicture[6].description}
          header={"Our Projects"}
        />
        <div className="flex items-center justify-center px-4 py-16 md:px-12 lg:px-32">
          <ProjectPageProjects />
        </div>
      </main>
      <Footer />
    </>
  );
}
