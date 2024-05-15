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
    <nav className="fixed left-0 top-0 h-full w-full">
      <section className="flex w-full items-center justify-between px-4 py-4 capitalize">
        <Link href="/">
          <div>ewm bespoke interiors</div>
        </Link>
        <ul className="hidden flex-row gap-4 lg:flex">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
        <div ref={container} onClick={toggleMenu} className="nav_menu">
          <div className="flex cursor-pointer items-center gap-4 rounded-[20rem] bg-[#191919] px-4 py-2 text-[#e4e8ed]">
            <button className="nav_menu_button_text">
              <span>menu</span>
            </button>
            <div className="flex h-[0.8rem] w-[0.8rem] items-center justify-center rounded-[20rem] bg-[#2ed84a]"></div>
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
