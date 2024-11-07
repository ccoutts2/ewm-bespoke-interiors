"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
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
        .timeline({ paused: true })
        .to(overlay.current, {
          duration: 1,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          ease: "power3.inOut",
        })
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
      className="fixed right-0 top-0 flex h-screen w-full bg-[#000] p-4 [clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)]"
    >
      <nav className="fixed left-0 top-0 h-full w-full">
        <div className="flex w-full items-center justify-between px-4 py-4 capitalize md:px-12 md:py-6 lg:px-32 lg:text-xl">
          <Link href="/">
            <div className="h-[5rem] w-[10rem]">
              <img
                className="h-full w-full rounded-md object-cover"
                src="/assets/logos/ewm.jpg"
                alt="EWM company logo"
              />
            </div>
          </Link>

          <div
            onClick={toggleMenu}
            className="flex cursor-pointer items-center gap-4 rounded-[20rem] bg-[#191919] px-4 py-2 text-[#e4e8ed]"
          >
            <button>close</button>
            <div className="flex h-[0.5rem] w-[0.5rem] items-center justify-center rounded-[20rem]  bg-[#d82e2e]"></div>
          </div>
        </div>
        <div className="flex flex-col items-stretch justify-stretch border-b border-b-[#f6f6f6] pt-8">
          <div className="flex h-auto flex-1 items-center justify-center px-4 py-4 text-center">
            <ul
              ref={listItems}
              className="flex h-full flex-col justify-between gap-4"
            >
              {navItems.map((item, index) => (
                <li key={index} className="text-2xl text-[#f6f6f6] md:text-4xl">
                  <Link
                    href={item.href}
                    className={`hover:border-b-2 hover:border-[#F17A14] ${pathname === item.href ? "border-b-2 border-[#F17A14]" : ""}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <div className="flex h-full flex-col justify-between gap-4">
              <div
                ref={addressItems}
                className="flex-1 text-xs text-[#f6f6f6] md:text-lg"
              >
                <p>Unit 12, Nathan Way Business Park</p>
                <p>82-100 Nathan Way</p>
                <p>Thamesmead</p>
                <p>SE28 0FS, London</p>
              </div>
              <div className="flex flex-1 flex-col">
                <ul ref={socialItems} className="flex gap-4 pt-4">
                  {socials.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} target="_blank">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="h-[1.4rem] w-[2rem] mix-blend-difference hover:scale-110 hover:duration-200"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <div className="mt-[5rem] flex h-auto flex-col items-center justify-center gap-4 text-center">
          <div
            ref={addressItems}
            className="flex-1 text-sm text-[#f6f6f6] md:text-lg"
          >
            <p>Unit 12, Nathan Way Business Park</p>
            <p>82-100 Nathan Way</p>
            <p>Thamesmead</p>
            <p>SE28 0FS, London</p>
          </div>
          <div className="flex flex-1 flex-col">
            <ul ref={socialItems} className="flex gap-4 pt-4">
              {socials.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} target="_blank">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-[1.4rem] w-[2rem] mix-blend-difference hover:scale-110 hover:duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuOverlay;
