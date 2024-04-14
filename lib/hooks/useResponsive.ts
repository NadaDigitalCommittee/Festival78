"use client";
import { useEffect, useState } from "react";

export enum MediaType {
  Mobile,
  Tablet,
  Desktop,
}

export const useResponsive = () => {
  const getSize = () => {
    if (typeof window === "undefined") return undefined;
    const width = window.innerWidth;
    if (width < 768) {
      return MediaType.Mobile;
    } else if (width < 1024) {
      return MediaType.Tablet;
    } else {
      return MediaType.Desktop;
    }
  };
  const [mediaType, setMediaType] = useState<MediaType | undefined>(getSize());
  useEffect(() => {
    const handler = () => setMediaType(getSize());
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  return mediaType;
};
