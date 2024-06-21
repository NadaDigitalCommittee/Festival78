"use client";
import { FC } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLine,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Logo } from "./svg/Logo";

export const Footer: FC = () => {
  const SNSLinks = [
    {
      ariaLabel: "twitter",
      href: "https://twitter.com/nada_festival",
      icon: <BsTwitterX />,
    },
    {
      ariaLabel: "youtube",
      href: "https://youtube.com/@nada_schoolfestival",
      icon: <FaYoutube />,
    },
    {
      ariaLabel: "instagram",
      href: "https://instagram.com/nada_schoolfestival/",
      icon: <FaInstagram />,
    },
    {
      ariaLabel: "tiktok",
      href: "https://tiktok.com/@nada_onlinefestival",
      icon: <FaTiktok />,
    },
    {
      ariaLabel: "facebook",
      href: "https://facebook.com/NadaSchoolFestival/",
      icon: <FaFacebook />,
    },
    {
      ariaLabel: "line",
      href: "https://page.line.me/?accountId=nada_festival",
      icon: <FaLine />,
    },
  ];
  return (
    <footer className="relative grid overflow-hidden bg-[#616161] px-3 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="mx-auto flex">
        <Logo width={100} height={100} />
        <div className="mx-[20px] h-full w-[1px] bg-white" />
        <div className="flex flex-col items-start justify-center font-avianosans text-white">
          <div>78TH NADA</div>
          <div>SCHOOL FESTIVAL</div>
          <div>ODYSSEY</div>
        </div>
      </div>
      <div className="my-auto">
        <div className="mt-6 text-center font-south_amsterdam text-5xl text-white">
          Follow us
        </div>

        <IconContext.Provider
          value={{
            size: "35px",
            color: "white",
            className: "inline-block mx-2",
          }}
        >
          <div className="flex justify-center">
            {SNSLinks.map(({ ariaLabel, href, icon }) => (
              <a
                key={ariaLabel}
                href={href}
                aria-label={ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-focus-visible inline-block"
              >
                {icon}
              </a>
            ))}
          </div>
        </IconContext.Provider>
      </div>
      <div className="pointer-events-none font-south_amsterdam text-5xl text-white opacity-10">
        {(() => {
          return new Array(100).fill(0).map((_, i) => {
            return (
              <div
                key={i}
                style={{ transform: `translateX(${i * 62 - 620}px)` }}
              >
                <div className="absolute -translate-y-[60px] -skew-y-[35deg]">
                  {"ODYSSEYODYSSEYODYSSEYODYSSEY".slice(i) +
                    "ODYSSEYODYSSEYODYSSEYODYSSEY".slice(0, i)}
                </div>
              </div>
            );
          });
        })()}
      </div>
    </footer>
  );
};
