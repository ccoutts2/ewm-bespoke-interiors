interface NavItemProps {
  title: string;
  href: string;
}

export const navItems: NavItemProps[] = [
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

interface SocialsProps {
  title: string;
  href: string;
  src: string;
}

export const socials: SocialsProps[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/ewm-bespoke-interiors/?originalSubdomain=uk",
    src: "/assets/icons/linkedin.svg",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/ewm_bespoke_interiors/?hl=en",
    src: "/assets/icons/instagram.svg",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/ewmbespokeinteriors/?locale=en_GB",
    src: "/assets/icons/facebook.svg",
  },
];
