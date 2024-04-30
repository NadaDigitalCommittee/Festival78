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
            <a
              className="inline-block"
              href="https://twitter.com/nada_festival"
              aria-label="twitter"
            >
              <BsTwitterX />
            </a>
            <a
              className="inline-block"
              href="https://youtube.com/@nada_schoolfestival"
              aria-label="youtube"
            >
              <FaYoutube />
            </a>
            <a
              className="inline-block"
              href="https://instagram.com/nada_schoolfestival/"
              aria-label="instagram"
            >
              <FaInstagram />
            </a>
            <a
              className="inline-block"
              href="https://tiktok.com/@nada_onlinefestival"
              aria-label="tiktok"
            >
              <FaTiktok />
            </a>
            <a
              className="inline-block"
              href="https://facebook.com/NadaSchoolFestival/"
              aria-label="facebook"
            >
              <FaFacebook />
            </a>
            <a
              className="inline-block"
              href="https://page.line.me/?accountId=nada_festival"
              aria-label="line"
            >
              <FaLine />
            </a>
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
                <p className="absolute -translate-y-[60px] -skew-y-[35deg]">
                  {"ODYSSEYODYSSEYODYSSEYODYSSEY".slice(i) +
                    "ODYSSEYODYSSEYODYSSEYODYSSEY".slice(0, i)}
                </p>
              </div>
            );
          });
        })()}
      </div>
    </footer>
  );
};
