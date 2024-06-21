"use client";

import { useCallback, useEffect } from "react";

export const useKey = (
  keys: [...("Alt" | "Ctrl" | "Meta" | "Shift")[], string],
  handler: Function,
  disableOnInput: boolean = true
) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (typeof window === "undefined") return;
      const activeElement = document.activeElement;
      if (disableOnInput) {
        if (
          ["input", "select", "textarea"].includes(
            (activeElement?.tagName.toLowerCase() || "") as string
          ) ||
          activeElement?.role === "textbox" ||
          activeElement?.isContentEditable
        ) {
          return;
        }
      }
      const _keys = [...keys];
      if (
        _keys.pop() === e.key &&
        _keys.every((key) => {
          return e[(key.toLowerCase() + "Key") as keyof KeyboardEvent];
        })
      ) {
        e.preventDefault();
        handler(e);
      }
    },
    [disableOnInput, handler, keys]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};
