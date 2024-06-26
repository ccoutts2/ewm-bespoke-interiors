"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

import { navItems } from "./data";

const NavBar: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed left-0 top-0 z-[100] w-full lg:relative">
      <section className=" flex w-full items-center justify-between p-4 capitalize md:px-12 md:py-6 lg:px-32 lg:text-xl">
        <Link href="/">
          <div className="text-[#191919]">
            <span className="uppercase">ewm</span> bespoke interiors
          </div>
        </Link>
        <ul className="hidden flex-row gap-4 text-[#191919] lg:flex">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
        <div ref={container} onClick={toggleMenu} className="lg:hidden">
          <div className="flex cursor-pointer items-center gap-4 rounded-[20rem] bg-[#191919] px-4 py-2 text-[#e4e8ed]">
            <button>
              <span>menu</span>
            </button>
            <div className="flex h-[0.5rem] w-[0.5rem] items-center justify-center rounded-[20rem] bg-[#2ed84a]"></div>
          </div>
        </div>
      </section>
      <MenuOverlay
        container={container}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
    </nav>
  );
};

export default NavBar;
