"use client";
import { FC, useState } from "react";

const paths = [
  { ja: "ホーム", en: "Home", path: "/" },
  // { ja: "クイズラリー", en: "Quiz Rally", path: "/quiz-rally" },
  { ja: "出展サークル", en: "Circles", path: "/circles" },
  { ja: "イベント", en: "Events", path: "/events" },
  { ja: "タイムテーブル", en: "Timetable", path: "/timetable" },
  { ja: "校内マップ", en: "Maps", path: "/maps" },
  // { ja: "混雑状況", en: "Crowds", path: "/crowds" },
  { ja: "ブログ", en: "Blogs", path: "/blogs" },
  { ja: "グッズ", en: "Goods", path: "/goods" },
  { ja: "ダウンロード", en: "Downloads", path: "/downloads" }
]

export const HamburgerMenu: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(true);
  };
  const handleMenuClose = () => {
    setOpen(false);
  };
  const [hovered, setHovered] = useState<number>(-1);
  const handleLeave = () => {
    setHovered(-1);
  };
  return (
    <>
      <div className={`fixed w-full h-[100lvh] duration-0 ${isOpen ? "delay-0 z-50" : "delay-[600ms] -z-50"}`}>
        <div className={`size-full duration-[600ms] ${isOpen ? "bg-white/85" : "bg-transparent"}`} />
      </div>
      <div className={`fixed z-50 right-0 transition-[background-color] duration-300 ${isOpen ? "w-full h-[100lvh] bg-white./85" : "w-0 h-0 bg-white./.0"}`}>
        <button onClick={isOpen ? handleMenuClose : handleMenuOpen} className="absolute z-50 flex flex-col right-0 h-[4.5rem] w-[4.5rem] p-5 bg-theme justify-between items-center">
          <span
            className={`block h-1 bg-white duration-300 ${isOpen ? "w-10 translate-y-[0.875em] rotate-[.125turn]" : "w-8"}`}
          />
          <span
            className={`block w-8 h-1 bg-white duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-1 bg-white duration-300 ${isOpen ? "w-10 -translate-y-[0.875em] -rotate-[.125turn]" : "w-8"}`}
          />
        </button>
        <div className={`absolute h-[100lvh] w-48 md:w-72 pt-[4.5rem] md:pt-8 pb-12 bg-theme duration-300 ${isOpen ? "right-0" : "-right-48 md:-right-72"}`}>
          <div className="h-[100svh] flex flex-col justify-between ">
            {
              paths.map(({ ja, en, path }, i) => (
                <div key={i} className="relative flex h-[3.125rem] px-6 md:px-12">
                  <div className="flex z-40 items-center pb-[2px] font-zen_kaku_gothic_new text-xl text-white font-bold">
                    <a href={path} onMouseEnter={() => setHovered(i)} onMouseLeave={handleLeave}>{ja}</a>
                  </div>
                  <div className={`absolute flex z-30 items-center h-full pl-[5%] pr-[20%] text-right font-south_amsterdam text-theme text-[min(max(calc((100vw-15rem-1rem)/4.27),1rem),3rem)] md:text-5xl leading-none whitespace-nowrap border-theme border-l-[1rem] border-l-transparent border-b-2 transition-[right] duration-[600ms] ${hovered === i ? "border-b-theme" : "border-b-transparent"} ${isOpen ? "right-full" : "-right-full"}`}>
                    <a href={path} onMouseEnter={() => setHovered(i)} onMouseLeave={handleLeave}>{en}</a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};
