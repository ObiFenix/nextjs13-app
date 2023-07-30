import Footer from "@src/components/footer/Footer";
import Navbar from "@src/components/navbar/Navbar";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@src/context/ThemeContext";
import type { Metadata } from "next";
import React from "react";
import "@public/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ObiNext App",
  description: "Generated by create next app"
};

const RootLayout = ({
  children
}: {
  children: React.ReactNode;
}): React.JSX.Element => (
  <html lang="en">
    <body className={inter.className}>
      <ThemeProvider>
        <main className="container">
          <Navbar />
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
