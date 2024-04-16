import { MapPin } from "@/components/svg/MapPin";
import { Place, placeString } from "@/lib/data/circles";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import Image from "next/image";
import { FC } from "react";

type Props = {
  id: string;
  logoSrc?: string;
  place: Place;
  title: string;
  description: string;
  eventHref?: string;
  mapHref?: string;
  articles?: string[];
};

export const Circle: FC<Props> = ({
  id,
  logoSrc,
  place,
  title,
  eventHref,
  mapHref,
  articles,
  description,
}) => {
  return (
    <AccordionItem
      className={`min-w-[100vw] max-w-[512px] odd:bg-[#FFEFE8] even:bg-white md:min-w-[512px] lg:min-w-[512px]`}
    >
      <div id={"#" + id} className=" flex h-[60px] justify-center px-4">
        <AccordionButton className="flex">
          <div className="w-[30px]">
            {logoSrc && (
              <Image src={logoSrc} width={30} height={50} alt="サークルロゴ" />
            )}
          </div>
          <PlaceLabel place={place} />
          <p className="font-bold">{title}</p>
          <AccordionIcon
            fontSize={30}
            color={"orangered"}
            className="ml-auto"
          />
        </AccordionButton>
      </div>
      <AccordionPanel className="px-6 py-3">
        <p className="whitespace-pre-wrap font-medium">{description}</p>
        <div className="mt-4">
          <div>
            <a
              href={mapHref}
              className="mr-2 inline-block bg-theme px-3 py-1 text-white"
            >
              <MapPin className={"h-[35px] fill-white"} />
              <span className="ml-1">マップ</span>
            </a>
            {articles?.length !== 0 && (
              <a
                href={mapHref}
                className="inline-block bg-theme px-3 py-1 text-white"
              >
                <Image
                  className="inline-block h-[35px]"
                  src={"/img/article.svg"}
                  width={25}
                  height={25}
                  alt=""
                />
                <span className="ml-1">部誌・会誌</span>
              </a>
            )}
          </div>
        </div>
      </AccordionPanel>
    </AccordionItem>
  );
};

const PlaceLabel: FC<{ place: Place }> = ({ place }) => {
  return (
    <div className="">
      <p
        className={`mx-4 rounded-full px-2 text-xs text-white ${
          place == "H4"
            ? "bg-[#73AFF6]"
            : place == "H3"
              ? "bg-[#518ADF]"
              : place == "H2"
                ? "bg-[#454AD3]"
                : place == "M2"
                  ? "bg-[#D34545]"
                  : place == "M3"
                    ? "bg-[#EA536F]"
                    : place == "M4"
                      ? "bg-[#F26DC4]"
                      : place == "East1"
                        ? "bg-[#27B82D]"
                        : place == "Kensyu"
                          ? "bg-[#FFB82D]"
                          : place == "G1"
                            ? "bg-[#32E1EC]"
                            : "bg-gray-400"
        }`}
      >
        {placeString[place]}
      </p>
    </div>
  );
};
