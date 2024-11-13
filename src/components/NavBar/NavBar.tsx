"use client";
import { useState } from "react";

import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

import { navItems } from "./data";
import NavLink from "../NavLink/NavLink";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    } else {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 500);
    }
  };

  return (
    <header className="fixed left-0 top-0 z-[100] w-full bg-[#f6f6f6] lg:relative">
      <nav className="flex w-full items-center justify-between p-4 capitalize md:px-12 md:py-6 lg:px-32 lg:text-xl">
        <Link href="/">
          <div className="h-[5rem] w-[10rem]">
            <img
              className="h-full w-full rounded-md object-cover"
              src="/assets/logos/ewm.jpg"
              alt="EWM company logo"
            />
          </div>
        </Link>
        <ul className="hidden flex-row gap-4 text-[#191919] lg:flex">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink href={item.href}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
        <div onClick={toggleMenu} className="lg:hidden">
          <div className="flex cursor-pointer items-center gap-4 rounded-[20rem] bg-[#191919] px-4 py-2 text-[#e4e8ed]">
            <button onClick={toggleMenu}>Menu</button>
            <div className="flex h-[0.5rem] w-[0.5rem] items-center justify-center rounded-[20rem] bg-[#2ed84a]"></div>
          </div>
        </div>
      </nav>
      <MenuOverlay toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default NavBar;
