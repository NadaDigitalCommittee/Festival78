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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        limelight: ["var(--font-limelight)"],
        avianosans: ["aviano-sans"],
        zen_kaku_gothic_new: ["var(--font-zen_kaku_gothic_new)"],
        alte_din: ["var(--font-alte-din-1451-mittelschrift)"],
        south_amsterdam: ["var(--font-south-amsterdam-demo)"],
        times_new_roman: ["var(--font-times-new-roman)"],
      },
    },
  },
  plugins: [],
};
export default config;
