import { DownloadsAcordion } from "@/components/downloads/DownloadsAccordion";
import Image from "next/image";
import Link from "next/link";
import { RiDownload2Fill } from "react-icons/ri";

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center font-zen_kaku_gothic_new">
      <div className="relative mb-16 mt-12 font-south_amsterdam text-6xl text-theme md:text-7xl lg:text-9xl">
        Downloads
        <div className="absolute left-0 top-0 w-[30px] -translate-x-full -translate-y-1/2 md:w-[60px] lg:w-[70px]">
          <Image src={"/img/top/star.svg"} width={100} height={100} alt="" />
        </div>
        <div className="absolute bottom-0 right-0 w-[30px] translate-x-full translate-y-1/2 md:w-[60px] lg:w-[70px]">
          <Image src={"/img/top/star.svg"} width={100} height={100} alt="" />
        </div>
      </div>
      <div className="mb-6 w-[1200px] max-w-full px-4">
        <>
          <div className="h-14 w-0" />
          <div className="flex items-center">
            <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-theme/25">
              Pamphlet
            </p>
            <div className="mr-auto inline-block h-[1px] w-full bg-theme/25"></div>
          </div>
          <p className="font-zen_kaku_gothic_new text-2xl font-bold">
            パンフレット
          </p>
        </>
        <div className="h-8" />

        <div className="visible flex justify-center max-md:hidden">
          <div className="flex h-[350px] w-[80vw] items-center justify-center gap-6 border-4 border-theme md:w-[550px]">
            <Image
              src={"/img/downloads/pamphlet1.webp"}
              width={200}
              height={800}
              alt="表紙"
            />
            <Image
              src={"/img/downloads/pamphlet2.webp"}
              width={200}
              height={800}
              alt="裏表紙"
            />
          </div>
          <div className="mt-auto h-[210px] w-[210px] bg-theme p-4 text-center text-sm text-white">
            <p className="mt-6">
              文化祭当日配布するパンフレットをダウンロードすることができます。
            </p>
            <p>※事前の予告なく公開を停止することがございます。</p>
            <Link href={"/pdf/brochure.pdf"} download={"brochure.pdf"}>
              <div className="mx-auto mt-4 flex h-6 w-[140px] justify-center bg-white text-theme">
                <RiDownload2Fill size={20} />
                ダウンロード
              </div>
            </Link>
          </div>
        </div>

        <div className=" mx-auto flex w-[80vw] flex-col justify-center md:hidden">
          <div className=" flex items-center justify-center gap-3 border-4 border-theme py-4">
            <Image
              src={"/img/downloads/pamphlet1.webp"}
              width={100}
              height={800}
              alt="表紙"
            />
            <Image
              src={"/img/downloads/pamphlet2.webp"}
              width={100}
              height={800}
              alt="裏表紙"
            />
          </div>
          <div className="mt-auto flex h-[80px] w-full bg-theme p-1 text-center text-xs text-white">
            <div className="mx-auto px-3">
              <p>
                文化祭当日配布するパンフレットをダウンロードすることができます。
              </p>
              <p>※事前の予告なく公開を停止することがございます。</p>
            </div>
            <Link
              href={"/pdf/brochure.pdf"}
              download={"brochure.pdf"}
              className="ml-auto"
            >
              <div className="flex h-[70px] w-[75px] flex-col items-center justify-center gap-1 bg-white text-theme">
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
          <p className="font-zen_kaku_gothic_new text-2xl font-bold">
            部誌/会誌
          </p>
        </>
        <div className="h-2" />
      </div>

      <DownloadsAcordion />
    </main>
  );
}
