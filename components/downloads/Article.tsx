import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import Image from "next/image";
import { FC } from "react";
import type { Circle as CircleType, Content } from "@/lib/data/circles";

type Props = {
  circle: CircleType;
};

export const Article: FC<Props> = ({ circle }) => {
  const id = circle.id;
  const logoSrc = circle.hasLogo ? `/img/circles/${circle.id}.webp` : undefined;
  const title = circle.name;
  const articles = circle.contents?.filter((c) => c.type === "article");
  return (
    <AccordionItem
      className={`group min-w-[100vw] max-w-[512px] odd:bg-[#FFEFE8] even:bg-white md:min-w-[512px] lg:min-w-[512px]`}
    >
      <div id={"#" + id} className=" flex h-[60px] justify-center">
        <AccordionButton className="flex">
          <div className="w-[30px]">
            {logoSrc && (
              <Image src={logoSrc} width={30} height={50} alt="サークルロゴ" />
            )}
          </div>
          <p className="font-bold">{title}</p>
          <AccordionIcon
            fontSize={30}
            color={"orangered"}
            className="ml-auto"
          />
        </AccordionButton>
      </div>
      <AccordionPanel>
        {articles?.map((article, i) =>
          <div key={i} className={`w-full h-[60px] 
          group-odd:odd:bg-white
            group-odd:even:bg-[#FFEFE8]
            group-even:odd:bg-[#FFEFE8]
            group-even:even:bg-white
            flex items-center px-12
            `}>
            <span className="mr-4">{article.title}</span>
            <div className="min-w-[100px] h-[30px] bg-theme text-white ml-auto text-center">
              ダウンロード
            </div>
          </div>
        )}
      </AccordionPanel>
    </AccordionItem>
  );
};
