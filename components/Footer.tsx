"use client";
import Image from "next/image";
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

export const Footer: FC = () => {
  return (
    <footer className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[#616161] px-3 py-8">
      <div className="flex mx-auto">
        <div className="w-[80px] h-[80px] bg-white logo" />
        <div className="bg-white w-[1px] h-full mx-[20px]" />
        <p className="font-avianosans text-white">
          78TH NADA
          <br />
          SCHOOL FESTIVAL
          <br />
          ODYSSEY
        </p>
      </div>
      <div className="my-auto">
        <p className="font-south_amsterdam text-5xl text-center text-white mt-6">
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
    </footer>
  );
};
