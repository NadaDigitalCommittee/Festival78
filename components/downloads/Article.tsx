import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import Image from "next-export-optimize-images/image";
import { FC } from "react";
import type { Circle as CircleType, Content } from "@/lib/data/circles";
import { RiDownload2Fill } from "react-icons/ri";
import Link from "next/link";
type Props = {
  circle: CircleType;
};

export const Article: FC<Props> = ({ circle }) => {
  const id = circle.id;
  const logoSrc = !circle.noLogo
    ? `/img/circles/icon/${circle.id}.webp`
    : undefined;
  const title = circle.name;
  const articles = circle.contents?.filter((c) => c.type === "article");
  return (
    <AccordionItem
      className={`group min-w-[100vw] max-w-[512px] odd:bg-[#FFEFE8] even:bg-white md:min-w-[512px] lg:min-w-[512px]`}
    >
      <div id={"#" + id} className=" flex h-[60px] justify-center">
        <AccordionButton className="flex">
          <div className="mx-4 w-[40px]">
            {logoSrc && (
              <Image src={logoSrc} width={40} height={50} alt="サークルロゴ" />
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
        {articles?.map((article, i) => (
          <div
            key={i}
            className={`flex h-[60px] 
          w-full
            items-center
            px-12
            text-sm
            group-odd:odd:bg-white group-odd:even:bg-[#FFEFE8] group-even:odd:bg-[#FFEFE8] group-even:even:bg-white
            `}
          >
            <span className="mr-4">{article.title}</span>
            <Link href={article.url} className="ml-auto flex h-[30px] min-w-[130px] items-center justify-center gap-2 bg-theme px-2 text-center text-white">
              <RiDownload2Fill />
              ダウンロード
            </Link>
          </div>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
};
