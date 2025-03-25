import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const NunitoSans = localFont({
  src: [
    {
      path: "./fonts/NunitoSans_10pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NunitoSans_10pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NunitoSans_10pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/NunitoSans_10pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "OTAGS | Ogun State Tenament System",
  description: "Make all your lands and housing related payments with OTAGS",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={NunitoSans.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
