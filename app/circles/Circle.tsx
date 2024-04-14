import { MapPin } from "@/components/svg/MapPin";
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/accordion";
import Image from "next/image";
import { FC } from "react";

export type Place = "H4" | "H3" | "H2" | "M4" | "M3" | "M2" | "East" | "Kensyu" | "G1" | "NewGarden" | "Others";

type PlaceString = {
  [key in Place]: string;
}

const placeString: PlaceString = {
  "H4": "高校棟4F",
  "H3": "高校棟3F",
  "H2": "高校棟2F",
  "M4": "中学棟4F",
  "M3": "中学棟3F",
  "M2": "中学棟2F",
  "East": "東館",
  "Kensyu": "研修館",
  "G1": "第一グラウンド",
  "Others": "その他",
  "NewGarden": "新中庭"
}

type Props = {
  logoSrc?: string;
  place: Place;
  title: string;
  description: string;
  eventHref?: string;
  mapHref?: string;
  articles?: string[];
}

export const Circle: FC<Props> = ({ logoSrc, place, title, eventHref, mapHref, articles, description }) => {
  return (
    <AccordionItem className={`odd:bg-[#FFEFE8] even:bg-white max-w-[530px]`}>
      <div className=" h-[60px] flex justify-center px-4">
        <AccordionButton className="flex">
          <div className="w-[30px]">
            {logoSrc && <Image src={logoSrc} width={30} height={50} alt="サークルロゴ" />}
          </div>
          <PlaceLabel place={place} />
          <p className="font-bold">{title}</p>
          <AccordionIcon fontSize={30} color={"orangered"} className="ml-auto" />
        </AccordionButton>
      </div>
      <AccordionPanel className="px-6 py-3">
        <p className="whitespace-pre-wrap">{description}</p>
        <div className="mt-4">
          <div>
            <a href={mapHref} className="bg-theme inline-block text-white px-3 py-1 mr-2">
              <MapPin className={"fill-white h-[35px]"} />
              <span className="ml-1">マップ</span>
            </a>
            {articles?.length!==0&&<a href={mapHref} className="bg-theme inline-block text-white px-3 py-1">
              <Image className="inline-block h-[35px]" src={"/img/article.svg"} width={25} height={25} alt="" />
              <span className="ml-1">部誌・会誌</span>
            </a>}
          </div>
        </div>
      </AccordionPanel>
    </AccordionItem>
  )
}

const PlaceLabel: FC<{ place: Place }> = ({ place }) => {
  return (<div className="">
    <p className={
      `rounded-full text-xs px-2 mx-4 text-white ${place == "H4" ? "bg-[#73AFF6]" :
        place == "H3" ? "bg-[#518ADF]" :
          place == "H2" ? "bg-[#454AD3]" :
            place == "M2" ? "bg-[#D34545]" :
              place == "M3" ? "bg-[#EA536F]" :
                place == "M4" ? "bg-[#F26DC4]" :
                  place == "East" ? "bg-[#27B82D]" :
                    place == "Kensyu" ? "bg-[#FFB82D]" :
                      place == "G1" ? "bg-[#32E1EC]" :
                        "bg-gray-400"
      }`
    }>
      {placeString[place]}
    </p>
  </div>)
}