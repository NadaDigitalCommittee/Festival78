"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLine,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IconContext } from "react-icons";

export const Footer: FC = () => {
  return (
    <footer className="relative overflow-hidden grid bg-[#616161] px-3 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="mx-auto flex">
        <Image width={100} height={100} src={"/img/logo1_sm.png"} alt="ロゴ" />
        <div className="mx-[20px] h-full w-[1px] bg-white" />
        <p className="font-avianosans text-white">
          78TH NADA
          <br />
          SCHOOL FESTIVAL
          <br />
          ODYSSEY
        </p>
      </div>
      <div className="my-auto">
        <p className="mt-6 text-center font-south_amsterdam text-5xl text-white">
          Follow me
        </p>

        <IconContext.Provider
          value={{
            size: "35px",
            color: "white",
            className: "inline-block mx-2",
          }}
        >
          <p className="text-center">
            <a href="https://twitter.com/nada_festival">
              <BsTwitterX />
            </a>
            <a href="https://youtube.com/channel/UCLC_wHGsAxEGR8BSHcPK1SQ">
              <FaYoutube />
            </a>
            <a href="https://instagram.com/nada_schoolfestival/">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/@nada_onlinefestival">
              <FaTiktok />
            </a>
            <a href="https://facebook.com/NadaSchoolFestival/">
              <FaFacebook />
            </a>
            <a href="https://page.line.me/?accountId=nada_festival">
              <FaLine />
            </a>
          </p>
        </IconContext.Provider>
      </div>
      <div className="font-south_amsterdam text-5xl text-white opacity-10 pointer-events-none">
        {(() => {
          return new Array(100).fill(0).map((_, i) => {
            return (
              <div style={{ transform: `translateX(${i * 62 - 620}px)` }}>
                <p
                  className="absolute -translate-y-[60px] -skew-y-[35deg]"
                >
                  {"ODYSSEYODYSSEYODYSSEY".slice(i) + "ODYSSEYODYSSEYODYSSEY".slice(0, i)}
                </p>
              </div>
            );
          });
        })()}
      </div>
    </footer>
  );
};
