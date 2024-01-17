import type { Metadata } from "next";
import { Inter, Limelight, Zen_Kaku_Gothic_New } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import TypekitLoader from "@/components/TypeKit";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const limelight = Limelight({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-limelight",
});
const zen_kaku_gothic_new = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zen-kaku-gothic-new",
});
const alte_din_1451_mittelschrift = localFont({
  src: "/fonts/din1451alt.ttf",
  variable: "--font-alte-din-1451-mittelschrift",
});
const south_amsterdam_demo = localFont({
  src: "/fonts/South_Amsterdam_Demo.ttf",
  variable: "--font-south-amsterdam-demo",
});
const times_new_roman = localFont({
  src: "/fonts/times_new_roman.ttf",
  variable: "--font-times-new-roman",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${[
          inter,
          limelight,
          zen_kaku_gothic_new,
          alte_din_1451_mittelschrift,
          south_amsterdam_demo,
          times_new_roman,
        ]
          .map((f) => f.variable)
          .join(" ")}`}
      >
        <TypekitLoader />
        {children}
      </body>
    </html>
  );
}
