import { Star1, Star2 } from "@/components/svg/Star";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="m-12 flex h-[calc(9rem*60/128)] justify-center text-theme md:h-[calc(9rem*72/128)] lg:h-[calc(9rem*128/128)]">
          <Star1 />
          <div className="mx-1 mb-0 mt-auto font-south_amsterdam text-6xl md:text-7xl lg:text-9xl">
            Blogs
          </div>
          <Star2 />
        </div>
      </div>
      <main className="mx-auto mb-28 w-11/12 font-zen_kaku_gothic_new md:w-4/5">
        {children}
      </main>
    </>
  );
}
