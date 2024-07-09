import { navItems, socials } from "../NavBar/data";
import Link from "next/link";

const FooterContent = () => {
  return (
    <section className="flex h-full w-full flex-col justify-between bg-[#191919] px-4 py-8 text-[#e4e8ed]  md:px-12 lg:px-32">
      <nav className="flex shrink-0 gap-20">
        <div className="flex flex-col gap-2 ">
          <h3 className="b-bottom uppercase text-[#F17A14]">navigation</h3>
          <ul className="gap-4 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full flex-col justify-between gap-2">
          <h3 className="b-bottom uppercase text-[#F17A14]">socials</h3>
          <ul className="flex flex-row gap-4">
            {socials.map((item, index) => (
              <li key={index}>
                <Link href={item.href} target="_blank">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-[1.8rem] w-[2.2rem] grayscale"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex items-end justify-between">
        <h1 className="pt-8 text-3xl capitalize leading-normal md:text-6xl">
          <span className="uppercase">ewm</span> bespoke interiors
        </h1>
      </div>
    </section>
  );
};

export default FooterContent;
