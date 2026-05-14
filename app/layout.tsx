import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import "./globals.css";

import Navbar from "./components/ui/Navbar";

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
      <body className="min-h-full flex flex-col bg-arch-white">
        <div>
          <div className="max-w-277.5 mx-auto">
            <Navbar />

            <main className="flex flex-col justify-center max-w-240 mx-8 sm:mx-18 border border-blue-500">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
