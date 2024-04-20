import { Star1, Star2 } from "@/components/svg/Star";
import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="m-12 h-16 md:h-20 lg:h-36">
          <Link
            href="/blogs"
            className="mx-auto my-0 flex w-max justify-center rounded-sm p-0 text-theme outline outline-0 outline-offset-1 outline-body_text focus-visible:outline-2"
          >
            <Star1 />
            <div className="mx-1 mb-0 mt-auto font-south_amsterdam text-6xl md:text-7xl lg:text-9xl">
              Blogs
            </div>
            <Star2 />
          </Link>
        </div>
      </div>
      <main className="mx-auto mb-28 w-11/12 font-zen_kaku_gothic_new md:w-4/5">
        {children}
      </main>
    </>
  );
}
