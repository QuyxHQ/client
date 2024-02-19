import type { Metadata } from "next";
import "./globals.css";
import { montserratAlternatesRegular } from "@/lib/utils/fonts";
import Header from "@/components/Layout/Header";
import Headerd from "@/components/Layout/Header/Headerdas";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserratAlternatesRegular.className}>
        <Headerd />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
