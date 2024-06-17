"use client";

import { useEffect } from "react";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import PagesHero from "@/components/PagesHero/PagesHero";
import Form from "@/components/Form/Form";
import { assetsConfig } from "@/config/assets";
import Lenis from "lenis";

import Link from "next/link";

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <NavBar />
      <PagesHero
        img={assetsConfig.officePicture[0].src}
        description={assetsConfig.officePicture[0].description}
        header={"Get In Touch"}
      />
      <section className="flex flex-col p-4 md:flex-row md:px-12 lg:px-32">
        <TextSection />
        <Form />
      </section>
      <Footer />
    </>
  );
};

export default Page;

const TextSection = () => {
  return (
    <div className="flex flex-col justify-between md:flex-[1.5]">
      <div>
        <p className="pt-4">
          Whether you have a question, a comment, or are ready to start your new
          project with us, get in touch. We can&apos;t wait to hear from you.
        </p>
        <p className="py-4">
          If you want us to work together on your next project you can email or
          contact us using the form
        </p>
      </div>
      <div className="hidden pb-2 text-xs md:flex md:flex-col md:text-base">
        <p>Unit 12, Nathan Way Business Park</p>
        <p>82-100 Nathan Way</p>
        <p>Thamesmead</p>
        <p>SE28 0FS, London</p>
        <p>07423 126 586</p>
        <Link href="mailto:Info@ewmbespokeinteriors.co.uk">
          <p>info@ewmbespokeinteriors.co.uk</p>
        </Link>
      </div>
    </div>
  );
};
