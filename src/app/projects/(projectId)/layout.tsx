import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../../globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EWM Bespoke Interiors",
  description: "Website showcasing services offered by EWM Bespoke Interiors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#f6f6f6]">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
