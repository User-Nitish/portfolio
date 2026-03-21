import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CursorFollower from "./components/CursorFollower";
import SmoothScroll from "./components/ui/SmoothScroll";

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
    <html lang="en">
      <body className="bg-[#1A1A1A] text-[#F5F5F0] antialiased">
        <SmoothScroll>
          <div className="min-h-screen bg-[#1A1A1A] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/5 via-transparent to-[#6B8E23]/5"></div>
            <div className="relative z-10">
              <AnimatedBackground />
              <CursorFollower />
              <Navbar />
              <main className="flex-grow relative z-10">{children}</main>
              <Footer />
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
