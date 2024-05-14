"use client";
import "./NavBar.css";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    title: "What We Do",
    href: "/what-we-do",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const filterOptions = [
  {
    price: "Price",
    type: "Product Type",
    size: "Size",
  },
];

const NavBar: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const filterItem = useRef<(HTMLDivElement | null)[]>([]);
  const tl = useRef<GSAPTimeline | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(filterItem.current, { y: 75 });

      tl.current = gsap
        .timeline({ paused: true, delay: 0.5 })
        .to(overlay.current, {
          duration: 1,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          ease: "power4.inOut",
        });
    },
    { scope: container },
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed left-0 top-0 h-full w-full">
      <div className="flex w-full items-center justify-between px-4 py-4 capitalize">
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
            <div className="flex h-[0.8rem] w-[0.8rem] items-center justify-center rounded-[20rem] bg-[#d82e2e]"></div>
          </div>
          <div
            ref={overlay}
            className="z-2 fixed right-0 top-0 flex h-screen w-full bg-[#000] p-4 [clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)]"
          >
            <div className="fixed left-0 top-0 h-full w-full">
              <div className="flex w-full items-center justify-between px-4 py-4 capitalize ">
                <Link className="text-[#e4e8ed]" href="/">
                  ewm bespoke interiors
                </Link>

                <div
                  onClick={toggleMenu}
                  className="flex cursor-pointer items-center gap-4 rounded-[20rem] bg-[#191919] px-4 py-2 text-[#e4e8ed]"
                >
                  <button className="nav_menu_button_text">
                    <span>close</span>
                  </button>
                  <div className="flex h-[0.8rem] w-[0.8rem] items-center justify-center rounded-[20rem] bg-[#2ed84a]"></div>
                </div>
              </div>
              <div className="flex flex-[4] flex-col items-stretch justify-stretch pt-8">
                <div>
                  <div className="border-b border-solid border-white px-0 py-8">
                    <h3 className="pt-16 font-normal text-[#fff]">
                      filter options & sort
                    </h3>
                  </div>
                  {filterOptions.map((option, index) => (
                    <div className="w-max ">
                      <div className="relative ">
                        <p className="text-base font-normal tracking-tight text-[#fff] md:text-4xl lg:text-5xl">
                          {option.price}
                        </p>
                        <p className="text-base font-normal tracking-tight text-[#fff] md:text-4xl lg:text-5xl">
                          {option.type}
                        </p>
                        <p className="text-base font-normal tracking-tight text-[#fff] md:text-4xl lg:text-5xl">
                          {option.size}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
