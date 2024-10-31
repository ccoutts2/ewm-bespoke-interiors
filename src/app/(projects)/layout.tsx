import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../../app/globals.css";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EWM Bespoke Interiors Project Pages",
  description:
    "Website showcasing the projects completed by EWM Bespoke Interiors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#f6f6f6]">
      <body className={dmSans.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
