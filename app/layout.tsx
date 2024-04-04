import { Footer } from "@/components/Footer";
import TypekitLoader from "@/components/TypeKit";
import "@/styles/globals.scss";
import type { Metadata, Viewport } from "next";
import { Inter, Limelight, Zen_Kaku_Gothic_New } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  title: {
    default: "第78回灘校文化祭 ODYSSEY",
    template: "%s | 第78回灘校文化祭 ODYSSEY",
  },
  keywords: [
    "灘",
    "灘中学校",
    "灘高校",
    "灘校",
    "文化祭",
    "灘校文化祭",
    "ODYSSEY",
    "nada",
    "festival",
  ],
  description:
    "2024年5月2日・5月3日に開催される第78回灘校文化祭「ODYSSEY」の公式ウェブサイトです。",
  openGraph: {
    type: "website",
    title: "第78回灘校文化祭 ODYSSEY",
    description:
      "2024年5月2日・5月3日に開催される第78回灘校文化祭「ODYSSEY」の公式ウェブサイトです。",
    url: "https://fest.nada-sc.jp",
    siteName: "第78回灘校文化祭 ODYSSEY",
    locale: "ja_JP",
    images: [
      {
        url: "https://fest.nada-sc.jp/img/ogp.webp",
        width: 2000,
        height: 1125,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nada_festival",
    images: [
      {
        url: "https://fest.nada-sc.jp/img/ogp.png",
        width: 2000,
        height: 1125,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "360",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID} />
        <div className="min-h-[100lvh] w-[100%] overflow-x-hidden">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
