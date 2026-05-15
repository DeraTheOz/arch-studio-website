import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import "./globals.css";

import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arch Studio | Modern Architecture and Design",
  description:
    "Award-winning architecture studio creating bold, innovative spaces. Explore our portfolio of landmark projects from stations to high-rise buildings. Small team, big ideas.",
  openGraph: {
    title: "Arch Studio | Modern Architecture & Design",
    description:
      "Award-winning architecture studio creating bold, innovative spaces. Small team, big ideas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${leagueSpartan.className}`}>
      <body className="min-h-full flex flex-col bg-arch-white text-lg leading-6">
        <div className="min-h-full">
          <div className="mx-auto w-full max-w-277.5">
            <Navbar />

            <main className="w-full sm:px-24 lg:px-0">{children}</main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
