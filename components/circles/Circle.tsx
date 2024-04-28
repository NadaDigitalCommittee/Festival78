import { Place, placeString } from "@/lib/data/circles";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import Image from "next/image";
import { FC } from "react";
import type { Circle as CircleType } from "@/lib/data/circles";
import { Article } from "../svg/Article";
import { MapPin } from "../svg/MapPin";

type Props = {
  circle: CircleType;
};

export const Circle: FC<Props> = ({ circle }) => {
  const id = circle.id;
  const logoSrc = `/img/circles/icon/${circle.id}.webp`;
  const place = circle.place;
  const title = circle.name;
  const eventHrefs = circle.contents
    ?.filter((c) => c.type === "events")
    .map((c) => c.url);
  const mapHref = `/maps?id=${circle.id}`;
  const articles = circle.contents?.filter((c) => c.type === "article");
  const articleHref = articles && `/downloads?id=${id}`;
  const description = circle.description;
  return (
    <AccordionItem
      className={`group min-w-[100vw] max-w-[512px] odd:bg-[#FFEFE8]/50 even:bg-white/50 md:min-w-[512px] lg:min-w-[512px]`}
    >
      <div id={"#" + id} className=" flex h-[60px] justify-center px-4">
        <AccordionButton className="flex">
          <div className="w-[40px]">
            {!circle.noLogo && (
              <Image
                src={logoSrc}
                width={90}
                height={50}
                alt="サークルロゴ"
                quality={100}
              />
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
            {articles && articles.length !== 0 && (
              <a
                href={articleHref}
                className="inline-block bg-theme px-3 py-1 text-white"
              >
                <Article
                  className="inline-block h-[35px] fill-white"
                  width={25}
                  height={25}
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

// const Article: FC<{
//   articles: Content[];
// }> = ({ articles }) => {
//   return (
//     <Accordion allowToggle>
//       <AccordionItem className="px-4 group-odd:bg-white group-even:bg-[#FFEFE8]">
//         <AccordionButton className="py-4">
//           <Image
//             className="mr-4 inline-block h-[35px]"
//             src={"/img/article.svg"}
//             width={25}
//             height={25}
//             alt=""
//           />
//           部誌・会誌
//           <AccordionIcon
//             fontSize={30}
//             color={"orangered"}
//             className="ml-auto"
//           />
//         </AccordionButton>
//         <AccordionPanel>
//           {articles.map((a, i) => {
//             return (
//               <div key={i}>
//                 <Link href={encodeURI(a.url)}>{a.title}</Link>
//               </div>
//             );
//           })}
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

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
                      : place == "East"
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
                                  : place == "NewGarden"
                                    ? "bg-[#98580D]"
                                    : "bg-gray-400"
        }`}
      >
        {placeString[place]}
      </p>
    </div>
  );
};
