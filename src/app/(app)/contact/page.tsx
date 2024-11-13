import PagesHero from "@/components/PagesHero/PagesHero";
import ContactForm from "@/components/ContactForm/ContactForm";

import { socials } from "@/components/NavBar/data";
import { assetsConfig } from "@/config/assets";

import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <PagesHero
        img={assetsConfig.contact[0].src}
        description={assetsConfig.contact[0].description}
        header={"Get In Touch"}
      />
      <div className="relative flex flex-col overflow-hidden p-4 md:flex-row md:px-12 lg:px-32">
        <svg
          className="absolute bottom-0 right-0 z-[-1] rotate-180 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          fill="#F17A14"
        >
          <path d="M0 0v36L250 4l750 96V0H0z"></path>
        </svg>

        <TextSection />
        <ContactForm />
        <ContactDetails className="py-4 text-sm md:hidden md:flex-col md:text-base" />
      </div>
    </main>
  );
}

const TextSection = () => {
  return (
    <div className="flex flex-col justify-between md:flex-[1.5]">
      <div>
        <p className="pt-4">
          Whether you have a question, a comment, or are ready to start your new
          project with us, get in touch. We can&apos;t wait to hear from you.
        </p>
        <p className="py-4">
          If you want us to work together on your next project you can email or
          contact us using the form
        </p>
      </div>
      <ContactDetails className="hidden pb-2 text-base md:flex md:flex-col" />
    </div>
  );
};

interface ContactDetailsProps {
  className: string;
}

const ContactDetails = ({ className }: ContactDetailsProps) => {
  return (
    <div className={className}>
      <p>Unit 12, Nathan Way Business Park</p>
      <p>82-100 Nathan Way</p>
      <p>Thamesmead</p>
      <p>SE28 0FS, London</p>
      <p>07515 829 261</p>
      <p>07734 387 217</p>
      <Link href="mailto:Info@ewmbespokeinteriors.co.uk">
        <p>info@ewmbespokeinteriors.co.uk</p>
      </Link>
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
  );
};
