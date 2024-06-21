"use client";
import { FC, useEffect, useRef, useState } from "react";
import { useKey } from "@/lib/hooks/useKey";
import Link from "next/link";

const paths = [
  { ja: "ホーム", en: "Home", path: "/" },
  { ja: "クイズラリー", en: "Quiz Rally", path: "/quiz-rally" },
  { ja: "出展サークル", en: "Circles", path: "/circles" },
  { ja: "イベント", en: "Events", path: "/events" },
  { ja: "タイムテーブル", en: "Timetable", path: "/timetable" },
  { ja: "校内マップ", en: "Maps", path: "/maps" },
  { ja: "混雑状況", en: "Crowds", path: "/crowds" },
  { ja: "ブログ", en: "Blogs", path: "/blogs" },
  { ja: "グッズ", en: "Goods", path: "/goods" },
  { ja: "ダウンロード", en: "Downloads", path: "/downloads" },
];

export const HamburgerMenu: FC = () => {
  const hamburgerMenuButtonRef = useRef<HTMLButtonElement>(null);
  const hamburgerMenuLastLinkRef = useRef<HTMLAnchorElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(true);
    hamburgerMenuButtonRef.current?.focus();
  };
  const handleMenuClose = () => {
    setOpen(false);
    if (document.activeElement !== hamburgerMenuButtonRef.current) {
      (document.activeElement as HTMLElement)?.blur();
    }
  };
  const [hovered, setHovered] = useState<number>(-1);
  const handleLeave = () => {
    setHovered(-1);
  };
  const isOpenRef = useRef(isOpen);
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);
  useKey(["Escape"], () => {
    if (isOpenRef.current) {
      handleMenuClose();
    }
  });
  useKey(["Alt", "m"], () => {
    if (isOpenRef.current) {
      handleMenuClose();
    } else {
      handleMenuOpen();
    }
  });
  return (
    <>
      <div
        className={`fixed h-[100lvh] w-full duration-0 ${isOpen ? "z-50 delay-0" : "-z-50 delay-[600ms]"}`}
      >
        <div
          className={`size-full duration-[600ms] ${isOpen ? "bg-white/85" : "bg-transparent"}`}
        />
      </div>
      <div
        id="HamburgerMenu"
        className={`fixed right-0 z-50 transition-[background-color] duration-300 ${isOpen ? "bg-white./85 h-[100lvh] w-full" : "bg-white./.0 h-0 w-0"}`}
      >
        <a
          className="absolute size-full"
          onClick={handleMenuClose}
          tabIndex={-1}
        ></a>
        <button
          ref={hamburgerMenuButtonRef}
          onClick={isOpen ? handleMenuClose : handleMenuOpen}
          title={`メニューを${isOpen ? "閉じる" : "開く"} (Alt+M)`}
          className="outline-focus-visible absolute right-0 z-50 flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-between bg-theme p-5"
          onKeyDown={(e) => {
            if (e.key === "Tab" && e.shiftKey && isOpen) {
              e.preventDefault();
              hamburgerMenuLastLinkRef.current?.focus();
            }
          }}
        >
          <span
            className={`block h-1 select-none bg-white duration-300 ${isOpen ? "w-10 translate-y-[0.875em] rotate-[.125turn]" : "w-8"}`}
          />
          <span
            className={`block h-1 w-8 bg-white duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-1 select-none bg-white duration-300 ${isOpen ? "w-10 -translate-y-[0.875em] -rotate-[.125turn]" : "w-8"}`}
          />
        </button>
        <div
          className={`absolute h-[100svh] w-48 duration-300 md:w-72 ${isOpen ? "right-0 select-auto" : "-right-48 select-none md:-right-72"}`}
          aria-hidden={!isOpen}
        >
          <div className="flex h-[100lvh] flex-col justify-between bg-theme pb-24 pt-[4.5rem] md:p-8">
            {paths.map(({ ja, en, path }, i) => (
              <div key={i} className="relative flex h-[3.125rem] px-4 md:px-10">
                <div className="z-40 flex items-center pb-[2px] font-zen_kaku_gothic_new text-xl font-bold text-white">
                  <Link
                    href={path}
                    ref={hamburgerMenuLastLinkRef}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={handleLeave}
                    onClick={handleMenuClose}
                    className="outline-focus-visible flex size-full items-center"
                    tabIndex={+isOpen - 1}
                    onKeyDown={
                      i + 1 === paths.length
                        ? (e) => {
                            if (e.key === "Tab" && !e.shiftKey && isOpen) {
                              e.preventDefault();
                              hamburgerMenuButtonRef.current?.focus();
                            }
                          }
                        : undefined
                    }
                  >
                    {ja}
                  </Link>
                </div>
                <div
                  className={`absolute z-30 flex h-full items-center whitespace-nowrap border-b-2 border-l-[1rem] border-theme border-l-transparent pl-[5%] pr-[calc(20%-.5rem)] text-right font-south_amsterdam text-[min(max(calc((100vw-15rem-1rem)/4.27),1rem),3rem)] leading-none text-theme transition-[right] duration-[600ms] md:text-5xl ${hovered === i ? "border-b-theme" : "border-b-transparent"} ${isOpen ? "right-full" : "-right-full"}`}
                >
                  <Link
                    href={path}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={handleLeave}
                    onClick={handleMenuClose}
                    className="select-none px-2"
                    tabIndex={-1}
                    aria-hidden={true}
                  >
                    {en}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
