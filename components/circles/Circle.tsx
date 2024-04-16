import { MapPin } from "@/components/svg/MapPin";
import { Place, placeString } from "@/lib/data/circles";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import Image from "next/image";
import { FC } from "react";
import type { Circle as CircleType, Content } from "@/lib/data/circles";
import Link from "next/link";

type Props = {
  circle: CircleType;
};

export const Circle: FC<Props> = ({ circle }) => {
  const id = circle.id;
  const logoSrc = circle.hasLogo ? `/img/circles/${circle.id}.webp` : undefined;
  const place = circle.place;
  const title = circle.name;
  const eventHrefs = circle.contents
    ?.filter((c) => c.type === "events")
    .map((c) => c.url);
  const mapHref = `/maps?id=${circle.id}`;
  const articles = circle.contents?.filter((c) => c.type === "article");
  const description = circle.description;
  return (
    <AccordionItem
      className={`group min-w-[100vw] max-w-[512px] odd:bg-[#FFEFE8] even:bg-white md:min-w-[512px] lg:min-w-[512px]`}
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
            {/* {articles && (
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
            )} */}
            {articles && <Article articles={articles} />}
          </div>
        </div>
      </AccordionPanel>
    </AccordionItem>
  );
};

const Article: FC<{
  articles: Content[];
}> = ({ articles }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem className="px-4 group-odd:bg-white group-even:bg-[#FFEFE8]">
        <AccordionButton className="py-4">
          <Image
            className="mr-4 inline-block h-[35px]"
            src={"/img/article.svg"}
            width={25}
            height={25}
            alt=""
          />
          部誌・会誌
          <AccordionIcon
            fontSize={30}
            color={"orangered"}
            className="ml-auto"
          />
        </AccordionButton>
        <AccordionPanel>
          {articles.map((a, i) => {
            return (
              <div key={i}>
                <Link href={a.url}>{a.title}</Link>
              </div>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
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
                        ? "bg-[#2DD4DE]"
                        : place == "Kensyu"
                          ? "bg-[#FFB82D]"
                          : place == "G1"
                            ? "bg-[#27B82D]"
                            : place == "H1"
                              ? "bg-[#3C2E90]"
                              : place == "Kyoei"
                                ? "bg-[#D227E1]"
                                : place == "Gym"
                                  ? "bg-[#2BE127]"
                                  : "bg-[#D2E310]"
        }`}
      >
        {placeString[place]}
      </p>
    </div>
  );
};
