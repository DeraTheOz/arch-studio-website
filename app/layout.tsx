import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import "./globals.css";

import Header from "./components/ui/Header";
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
    <html lang="en" className={leagueSpartan.className}>
      <body className="min-h-dvh antialiased">
        <div className="flex min-h-dvh flex-col">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-arch-black focus:px-4 focus:py-3 focus:font-bold focus:text-arch-white">
            Skip to content
          </a>

          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
