"use client";

import ContentSection from "@/components/events/ContentSection";
import { events } from "@/lib/data/events";
import { useSearchParams } from "next/navigation"
import { useEffect } from "react";

export default function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        if (!id) return;
    }, [id])
    return (
        <main className="pb-2">
            {events.map(event => (
                <ContentSection key={event.id} title={event.name} eventId={event.id} mapId={event.mapId} comingSoon={false} content={event.description} />
            ))}
        </main>
    )
}