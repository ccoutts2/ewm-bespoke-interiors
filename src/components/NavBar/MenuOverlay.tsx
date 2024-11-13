"use client";
import styles from "./MenuOverlay.module.css";
import { usePathname } from "next/navigation";

import { navItems, socials } from "./data";

import Link from "next/link";

interface MenuOverlayProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const MenuOverlay = ({ toggleMenu, isMenuOpen }: MenuOverlayProps) => {
  const pathname = usePathname();

  return (
    <div
      className={styles.MenuOverlay}
      {...(isMenuOpen && { "data-is-open": true })}
    >
      <nav className="fixed left-0 top-0 h-full w-full">
        <div className="flex w-full items-center justify-between px-4 py-4 capitalize md:px-12 md:py-6 lg:px-32 lg:text-xl">
          <Link href="/" onClick={toggleMenu}>
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
            <button>Close</button>
            <div className="flex h-[0.5rem] w-[0.5rem] items-center justify-center rounded-[20rem]  bg-[#d82e2e]"></div>
          </div>
        </div>
        <div className="flex flex-col items-stretch justify-stretch border-b border-b-[#f6f6f6] pt-8">
          <div className="flex h-auto flex-1 items-center justify-center px-4 py-4 text-center">
            <ul className="flex h-full flex-col justify-between gap-4">
              {navItems.map((item, index) => (
                <li key={index} className="text-2xl text-[#f6f6f6] md:text-4xl">
                  <Link
                    onClick={toggleMenu}
                    href={item.href}
                    className={`hover:border-b-2 hover:border-[#F17A14] ${pathname === item.href ? "border-b-2 border-[#F17A14]" : ""}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-[5rem] flex h-auto flex-col items-center justify-center gap-4 text-center">
          <div className="flex-1 text-sm text-[#f6f6f6] md:text-lg">
            <p>Unit 12, Nathan Way Business Park</p>
            <p>82-100 Nathan Way</p>
            <p>Thamesmead</p>
            <p>SE28 0FS, London</p>
          </div>
          <div className="flex flex-1 flex-col">
            <ul className="flex gap-4 pt-4">
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
