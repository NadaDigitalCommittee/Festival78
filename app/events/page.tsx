import ContentSection from "@/components/events/ContentSection";
import EventsScroller from "@/components/events/EventsScroller";
import { events } from "@/lib/data/events";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="pb-2">
      <Suspense>
        <EventsScroller />
      </Suspense>
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
