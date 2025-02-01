import type { Metadata } from "next"; 
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Header } from "@/sections/Header";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saas Landing Page",
  description: "Created By Leo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
