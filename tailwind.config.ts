import type { Config } from "tailwindcss";

export const PlaceLabelBgColors = {
  East: "[#2DD4DE]",
  G1: "[#27B82D]",
  Gym: "[#2BE127]",
  H1: "[#3C2E90]",
  H2: "[#454AD3]",
  H3: "[#518ADF]",
  H4: "[#73AFF6]",
  Kensyu: "[#FFB82D]",
  Kyoei: "[#D227E1]",
  M2: "[#D34545]",
  M3: "[#EA536F]",
  M4: "[#F26DC4]",
  NewGarden: "[#98580D]",
};

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
        futura_pt: ["futura-pt"],
        ltc_broadway: ["ltc-broadway"],
      },
      colors: {
        theme: "#ff4d00",
        body_text: "#2f2f2f",
        odd_column: "#ffefe8",
        border: "#ff500c",
      },
    },
  },
  plugins: [],
  safelist: [
    ...Object.values(PlaceLabelBgColors).map((c) => [`bg-${c}`, `text-${c}`]),
  ].flat(),
};
export default config;
