import Clients from "@/components/Clients/Clients";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Sectors from "@/components/Sectors/Sectors";

const Page = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Sectors />
      <Clients />
      <Footer />
    </>
  );
};

export default Page;
