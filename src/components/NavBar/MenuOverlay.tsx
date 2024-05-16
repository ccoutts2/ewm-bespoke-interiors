"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navItems, socials } from "./data";

import Link from "next/link";

const MenuOverlay = ({
  container,
  toggleMenu,
  isMenuOpen,
}: {
  container: React.RefObject<HTMLDivElement>;
  toggleMenu: () => void;
  isMenuOpen: boolean;
}) => {
  const overlay = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLDivElement>(null);
  const listItems = useRef<HTMLUListElement>(null);
  const socialItems = useRef<HTMLUListElement>(null);
  const addressItems = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      gsap.set(heading.current, { autoAlpha: 0 });
      gsap.set(listItems.current, { autoAlpha: 0 });
      gsap.set(addressItems.current, { autoAlpha: 0 });
      gsap.set(socialItems.current, { autoAlpha: 0 });

      tl.current = gsap
        .timeline({ paused: true, delay: 0.5 })
        .to(overlay.current, {
          duration: 1.2,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          ease: "power3.inOut",
        })
        .to(
          heading.current,
          {
            ease: "power3.inOut",
            autoAlpha: 1,
            duration: 2,
          },
          0,
        )
        .to(
          listItems.current,
          {
            duration: 1.5,
            ease: "power4.inOut",
            autoAlpha: 1,
            delay: 0.4,
          },
          0,
        )
        .to(
          addressItems.current,
          {
            duration: 1.5,
            ease: "power4.inOut",
            autoAlpha: 1,
            delay: 0.6,
          },
          0,
        )
        .to(
          socialItems.current,
          {
            duration: 1.5,
            ease: "power4.inOut",
            autoAlpha: 1,
            delay: 0.75,
          },
          0,
        );
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
    <div
      ref={overlay}
      className="z-2 fixed right-0 top-0 flex h-screen w-full bg-[#000] p-4 [clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)]"
    >
      <div className="fixed left-0 top-0 h-full w-full">
        <div className="flex w-full items-center justify-between px-4 py-4 capitalize ">
          <Link className="text-[#e4e8ed] mix-blend-difference" href="/">
            <span className="uppercase">ewm</span> bespoke interiors
          </Link>

          <div
            onClick={toggleMenu}
            className="flex cursor-pointer items-center gap-4 rounded-[20rem] bg-[#191919] px-4 py-2 text-[#e4e8ed]"
          >
            <button className="nav_menu_button_text">
              <span>close</span>
            </button>
            <div className="flex h-[0.8rem] w-[0.8rem] items-center justify-center rounded-[20rem]  bg-[#d82e2e]"></div>
          </div>
        </div>
        <div className="flex flex-col items-stretch justify-stretch border-b border-b-white pt-8">
          <div className="flex h-full items-start justify-between px-4 py-4">
            <ul
              ref={listItems}
              className="flex h-full flex-col justify-between gap-4"
            >
              {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <li className="text-2xl text-[#fff] md:text-4xl">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="flex h-full flex-col justify-between gap-4">
              <div
                ref={addressItems}
                className="text-xs text-[#fff] md:text-lg"
              >
                <p>10 Green Road</p>
                <p>Statcross</p>
                <p>WSN1 R30</p>
                <p>London</p>
              </div>
              <div className="flex flex-col">
                <ul ref={socialItems} className="h-full flex-row gap-4">
                  {socials.map((item, index) => (
                    <Link key={index} href={item.href}>
                      <li className="text-xs text-[#fff]">{item.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={heading}
          className="relative flex h-full w-full items-center justify-center"
        >
          <h1 className="absolute bottom-[15em] text-center text-2xl capitalize text-[#e4e8ed] md:bottom-[6em] md:text-6xl">
            <span className="uppercase">ewm</span> bespoke interiors
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
