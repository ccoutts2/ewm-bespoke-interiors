"use client";
import styles from "./NavLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${styles.hoverAnimation} ${styles.left} ${pathname === href ? "border-b border-[#F17A14]" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
