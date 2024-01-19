import type { Metadata } from "next";
import { Inter, Limelight, Zen_Kaku_Gothic_New } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.scss";
import TypekitLoader from "@/components/TypeKit";
import { Footer } from "@/components/Footer";

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
  title: "第78回灘校文化祭 ODYSSEY",
  description: "2024年5月2日・5月3日に開催される第77回灘校文化祭「ODYSSEY」の公式ウェブサイトです。",
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
        <div className="w-screen max-h-min-[100lvh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
