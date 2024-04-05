"use client";
import { FC, useState } from "react";

const paths = [
  { ja: "ホーム" , en: "Home", path: "/" },
  { ja: "クイズラリー", en: "Quiz Rally", path: "/quiz-rally" },
  { ja: "出展サークル", en: "Circles", path: "/circles" },
  { ja: "イベント", en: "Events", path: "/events" },
  { ja: "タイムテーブル", en: "Timetable", path: "/timetable" },
  { ja: "構内マップ", en: "Maps", path: "/maps" },
  { ja: "混雑状況", en: "Crowds", path: "/crowds" },
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
    <div className={`fixed z-50 right-0 ${isOpen ? "w-full h-screen backdrop-brightness-50" : ""}`}>
      <button onClick={isOpen ? handleMenuClose : handleMenuOpen} className="absolute z-50 flex flex-col right-0 h-[72px] w-[72px] p-[20px] bg-theme justify-between items-center">
        <span
          className={isOpen ? "block w-[32px] h-[4px] bg-white translate-y-[14px] rotate-[4.125turn] duration-300" : "block w-[32px] h-[4px] bg-white duration-300"}
        />
        <span
          className={isOpen ? "block w-[32px] h-[4px] opacity-0 bg-white duration-300" : "block w-[32px] h-[4px] bg-white duration-300"}
        />
        <span
          className={isOpen ? "block w-[32px] h-[4px] bg-white -translate-y-[14px] -rotate-[4.125turn] duration-300" : "block w-[32px] h-[4px] bg-white duration-300"}
        />
      </button>
      <div className={`absolute flex flex-col justify-between h-screen pb-12 pt-[52px] bg-theme duration-300 ${isOpen ? "right-0 w-[280px]" : "-right-24 w-0"}`}>
        {
          paths.map(({ ja, en, path }, i) => (
            <div key={i} className="relative flex content-end left-auto r-0 h-12 px-12">
              <a href={path} onMouseEnter={() => setHovered(i)} onMouseLeave={handleLeave} className="absolute bottom-0 font-zen_kaku_gothic_new text-xl text-white font-bold whitespace-nowrap">{ja}</a>
              <div className={`absolute pl-[5%] pr-[20%] text-right font-south_amsterdam text-theme text-5xl whitespace-nowrap border-theme border-l-[16px] border-l-transparent ${hovered === i ? "border-b-2" : ""} ${isOpen ? "right-[100%]" : ""}`}>
                <a href={path} onMouseEnter={() => setHovered(i)} onMouseLeave={handleLeave}>{en}</a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
