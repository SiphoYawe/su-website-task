import { Nunito, Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "800", "900"], // SemiBold, ExtraBold, Black
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500"], // Medium
  display: "swap",
});

export const metadata = {
  title: "SU Website",
  description: "Student University website built with Next.js",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-foreground min-h-screen">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}