import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import PagesHero from "@/components/PagesHero/PagesHero";
import Form from "@/components/Form/Form";
import { assetsConfig } from "@/config/assets";

const Page = () => {
  return (
    <>
      <NavBar />
      <PagesHero
        img={assetsConfig.officePicture[0].src}
        description={assetsConfig.officePicture[0].description}
        header={"Get In Touch"}
      />
      <section className="flex flex-col p-4 md:flex-row md:px-12 lg:px-32">
        <div className="flex flex-col justify-between md:flex-[1.5]">
          <div>
            <p className="pt-4">
              Whether you have a question, a comment, or are ready to start your
              new project with us, get in touch. We can&apos;t wait to hear from
              you.
            </p>
            <p className="py-4">
              If you want us to work together on your next project you can email
              or contact us using the form
            </p>
          </div>
          <div className="hidden pb-2 text-xs md:flex md:flex-col md:text-base">
            <p>10 Green Road, Statcross</p>
            <p>WSN1 R30, London</p>
            <p>07423 126 586</p>
            <p>email@emailaddress.com</p>
          </div>
        </div>
        <Form />
      </section>
      <section className="flex flex-col items-center justify-center border-t border-cyan-900">
        <h1 className="py-8 text-2xl uppercase">meet the team</h1>
        <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap">
          <div className="my-8 h-[20rem] w-[20rem] px-8 py-4">
            <img
              className="h-full w-full object-cover"
              src={assetsConfig["mews-property"][0].src}
            />
            <h2 className="pt-4 text-center capitalize">johnnie wynne</h2>
            <h2 className="pt-1 text-center capitalize">title</h2>
          </div>
          <div className="my-8 h-[20rem] w-[20rem] px-8 py-4">
            <img
              src={assetsConfig["mews-property"][0].src}
              className="h-full w-full object-cover"
            />
            <h2 className="pt-4 text-center capitalize">someone</h2>
            <h2 className="pt-1 text-center capitalize">title</h2>
          </div>
          <div className="my-8 h-[20rem] w-[20rem] px-8 py-4">
            <img
              src={assetsConfig["mews-property"][3].src}
              className="h-full w-full object-cover"
            />
            <h2 className="pt-4 text-center capitalize">someone</h2>
            <h2 className="pt-1 text-center capitalize">title</h2>
          </div>
          <div className="my-8 h-[20rem] w-[20rem] px-8 py-4">
            <img
              src={assetsConfig["mews-property"][5].src}
              className="h-full w-full object-cover"
            />
            <h2 className="pt-4 text-center capitalize">someone</h2>
            <h2 className="pt-1 text-center capitalize">title</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
