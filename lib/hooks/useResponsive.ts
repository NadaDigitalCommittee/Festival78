"use client";
import { useEffect, useState } from "react";

export enum MediaType {
  Mobile,
  Tablet,
  Desktop,
}

export const useResponsive = () => {
  const [mediaType, setMediaType] = useState<MediaType | undefined>(undefined);

  useEffect(() => {
    const currentMediaType: () => MediaType | undefined = () =>
      typeof window === "undefined"
        ? undefined
        : window.innerWidth < 768
          ? MediaType.Mobile
          : window.innerWidth < 1024
            ? MediaType.Tablet
            : MediaType.Desktop;

    const handler = () => setMediaType(currentMediaType());
    handler();

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  });

  return mediaType;
};
