import Link from "next/link";
import Button from "../buttons/Button/Button";

const GetInTouch = () => {
  return (
    <section className="relative flex h-[20rem] items-center justify-center gap-8 bg-[#f6f6f6] md:gap-32 md:px-12 lg:px-32">
      <h2 className="z-30 uppercase md:text-xl lg:text-2xl ">
        Let&apos;s get in touch
      </h2>
      <div className="z-30">
        <Link
          className="w-fit rounded bg-[#444444] px-4 py-2 text-start text-sm capitalize leading-relaxed text-[#f6f6f6]"
          href="/contact"
        >
          Contact Us
        </Link>
      </div>
      <div className="absolute h-[60%] w-full bg-[#F17A14] text-right [clip-path:polygon(0_0,100%_0,100%_18%,100%_85%,72%_100%,0_50%)]"></div>
    </section>
  );
};

export default GetInTouch;
