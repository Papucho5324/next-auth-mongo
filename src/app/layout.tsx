import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Xpectra",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar></Navbar>
          {children}
          </Providers>
      </body>
    </html>
  );
}
