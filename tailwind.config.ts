import { Limelight } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        limelight: ["var(--font-limelight)"],
        avianosans: ["aviano-sans"],
        zen_kaku_gothic_new: ["var(--font-zen-kaku-gothic-new)"],
        alte_din: ["var(--font-alte-din-1451-mittelschrift)"],
        south_amsterdam: ["var(--font-south-amsterdam-demo)"],
        times_new_roman: ["var(--font-times-new-roman)"],
      },
      colors: {
        theme: "#ff4d00",
        body_text: "#2f2f2f",
        odd_column: "#ffefe8",
      },
    },
  },
  plugins: [],
};
export default config;
