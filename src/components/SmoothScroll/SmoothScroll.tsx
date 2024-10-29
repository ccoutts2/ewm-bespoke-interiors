"use client";
import ReactLenis from "@studio-freight/react-lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
