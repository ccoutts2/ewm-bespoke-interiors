import { navItems, socials } from "../NavBar/data";
import Link from "next/link";

const FooterContent = () => {
  return (
    <footer className="flex h-full w-full flex-col justify-between bg-[#191919] px-4 py-8 text-[#e4e8ed]  md:px-12 lg:px-32">
      <nav className="flex shrink-0 gap-20">
        <div className="flex flex-col gap-2 ">
          <h3 className="b-bottom uppercase">navigation</h3>
          <ul className="gap-4 ">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="b-bottom uppercase">socials</h3>
          <ul className="gap-4 ">
            {socials.map((item, index) => (
              <Link key={index} href={item.href}>
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex items-end justify-between">
        <h1 className="pt-8 text-6xl capitalize leading-[0.8]">
          <span className="uppercase">ewm</span> bespoke interiors
        </h1>
      </div>
    </footer>
  );
};

export default FooterContent;
