import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CursorFollower from "./components/CursorFollower";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#02040D]">
      <body className={`${montserrat.className} flex flex-col min-h-screen relative`}>
        <AnimatedBackground />
        <CursorFollower />
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main> {/* Main content grows to push footer down */}
        <Footer />
      </body>
    </html>
  );
}
