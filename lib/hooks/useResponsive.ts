"use client";
import { useEffect, useState } from "react";

export enum MediaType {
  Mobile,
  Tablet,
  Desktop,
}

export const useResponsive = () => {
  const [width, setWidth] = useState<number>(0);
  const [mediaType, setMediaType] = useState<MediaType>(MediaType.Desktop);

  const onResize = () => {
    setWidth(window.innerWidth);
    if (width < 768) {
      setMediaType(MediaType.Mobile);
    } else if (width < 992) {
      setMediaType(MediaType.Tablet);
    } else {
      setMediaType(MediaType.Desktop);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
  }, []);

  return mediaType;
};
