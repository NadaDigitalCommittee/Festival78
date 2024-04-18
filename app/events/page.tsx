import ContentSection from "@/components/events/ContentSection";
import EventsScroller from "@/components/events/EventsScroller";
import { events } from "@/lib/data/events";
import { Suspense } from "react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="pb-2">
      <Suspense>
        <EventsScroller />
      </Suspense>
      <div className="flex flex-col items-center w-full">
      <div className="relative mb-16 mt-12 font-south_amsterdam text-6xl text-theme md:text-7xl lg:text-9xl">
        Events
        <div className="absolute left-0 top-0 w-[30px] -translate-x-full -translate-y-1/2 md:w-[60px] lg:w-[70px]">
          <Image src={"/img/top/star.svg"} width={100} height={100} alt="" />
        </div>
        <div className="absolute bottom-0 right-0 w-[30px] translate-x-full translate-y-1/2 md:w-[60px] lg:w-[70px]">
          <Image src={"/img/top/star.svg"} width={100} height={100} alt="" />
        </div>
      </div>
      </div>
      
      {events.map((event) => (
        <ContentSection
          key={event.id}
          title={event.name}
          eventId={event.id}
          mapId={event.mapId}
          comingSoon={false}
          content={event.description}
        />
      ))}
    </main>
  );
}
