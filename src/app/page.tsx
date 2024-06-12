"use client";

import { useEffect } from "react";

import Clients from "@/components/Clients/Clients";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Sectors from "@/components/Sectors/Sectors";

import Lenis from "lenis";

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
      <Hero />
      <Sectors />
      <Clients />
      <Footer />
    </>
  );
};

export default Page;
