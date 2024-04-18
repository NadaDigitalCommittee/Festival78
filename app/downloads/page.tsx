import { DownloadsAcordion } from "@/components/downloads/DownloadsAccordion";
import Image from "next/image";
import Link from "next/link";
import { RiDownload2Fill } from "react-icons/ri";

export default function Page() {
  return (
    <main className="font-zen_kaku_gothic_new w-full flex flex-col items-center">
      <div className="relative mb-16 mt-12 font-south_amsterdam text-6xl text-theme md:text-7xl lg:text-9xl">
        Downloads
        <div className="absolute left-0 top-0 w-[30px] -translate-x-full -translate-y-1/2 md:w-[60px] lg:w-[70px]">
          <Image src={"/img/top/star.svg"} width={100} height={100} alt="" />
        </div>
        <div className="absolute bottom-0 right-0 w-[30px] translate-x-full translate-y-1/2 md:w-[60px] lg:w-[70px]">
          <Image src={"/img/top/star.svg"} width={100} height={100} alt="" />
        </div>
      </div>
      <div className="px-4 w-[1200px] max-w-full mb-6">
        <>
          <div className="h-14 w-0" />
          <div className="flex items-center">
            <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-theme/25">
              Pamphlet
            </p>
            <div className="mr-auto inline-block h-[1px] w-full bg-theme/25"></div>
          </div>
          <p className="font-zen_kaku_gothic_new text-2xl font-bold">パンフレット</p>
        </>
        <div className="h-8" />

        <div className="flex justify-center max-md:hidden visible">
          <div className="md:w-[550px] w-[80vw] h-[350px] border-theme border-4">
            <p>表紙画像</p>
          </div>
          <div className="w-[210px] h-[210px] p-4 bg-theme mt-auto text-white text-center text-sm">
            <p className="mt-6">文化祭当日配布するパンフレットをダウンロードすることができます。</p>
            <p>※事前の予告なく公開を停止することがございます。</p>
            <Link href={"/pdf/brochure.pdf"} download={"brochure.pdf"}>
              <div className="text-theme bg-white flex w-[140px] justify-center mx-auto mt-4 h-6">
                <RiDownload2Fill size={20} />
                ダウンロード
              </div>
            </Link>
          </div>
        </div>

        <div className=" w-[80vw] mx-auto flex flex-col justify-center md:hidden">
          <div className=" border-theme border-4">
            <p>表紙画像</p>
          </div>
          <div className="w-full h-[80px] p-1 bg-theme mt-auto text-white text-center text-xs flex">
            <div className="px-3 mx-auto">
              <p>文化祭当日配布するパンフレットをダウンロードすることができます。</p>
              <p>※事前の予告なく公開を停止することがございます。</p>
            </div>
            <Link href={"/pdf/brochure.pdf"} download={"brochure.pdf"} className="ml-auto">
              <div className="text-theme bg-white flex w-[75px] h-[70px] flex-col items-center justify-center gap-1">
                <RiDownload2Fill size={40} />
                ダウンロード
              </div>
            </Link>
          </div>
        </div>

        <div className="h-6" />
        <>
          <div className="h-14 w-0" />
          <div className="flex items-center">
            <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-theme/25">
              Articles
            </p>
            <div className="mr-auto inline-block h-[1px] w-full bg-theme/25"></div>
          </div>
          <p className="font-zen_kaku_gothic_new text-2xl font-bold">部誌/会誌</p>
        </>
        <div className="h-2" />
      </div>

      <DownloadsAcordion />
    </main>
  );
}
