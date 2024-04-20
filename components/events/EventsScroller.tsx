"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function EventsScroller() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return;

    const section = document.getElementById(`section_${id}`);
    if (!section) return;

    section.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  }, [id]);

  return <></>;
}
