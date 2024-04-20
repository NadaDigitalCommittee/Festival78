import Image from "next-export-optimize-images/image";
import { CircleAcordion } from "@/components/circles/CircleAccordion";

export default function Page() {
  return (
    <div className="flex flex-col items-center font-zen_kaku_gothic_new">
      <div className="relative mb-16 mt-12 font-south_amsterdam text-6xl text-theme md:text-7xl lg:text-9xl">
        Circles
        <div className="absolute left-0 top-0 w-[30px] -translate-x-full -translate-y-1/2 md:w-[60px] lg:w-[70px]">
          <Image src={"/img/top/star.svg"} width={100} height={100} alt="" />
        </div>
        <div className="absolute bottom-0 right-0 w-[30px] translate-x-full translate-y-1/2 md:w-[60px] lg:w-[70px]">
          <Image src={"/img/top/star.svg"} width={100} height={100} alt="" />
        </div>
      </div>
      <CircleAcordion />
    </div>
  );
}
