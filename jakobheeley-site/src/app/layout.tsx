import "./globals.css";
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jakob Heeley – Portfolio",
  description: "Personal website of Jakob Heeley, a Software Engineer.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-zinc-200 font-sans`}
      >
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}