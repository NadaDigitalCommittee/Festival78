"use client";
import { data as data_ } from "@/lib/data/circles";
import { MediaType, useResponsive } from "@/lib/hooks/useResponsive";
import { Accordion } from "@chakra-ui/accordion";
import { ChakraProvider } from "@chakra-ui/provider";
import { FC, useEffect, useMemo, useState } from "react";
import { Article } from "./Article";
import { useSearchParams } from "next/navigation";

export const DownloadsAcordion: FC = () => {
  const [defaultId, setDefaultId] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const params=useSearchParams()
  useEffect(() => {
    setDefaultId(params.get("id"));
  }, [defaultId, params]);
  const data = useMemo(
    () =>
      data_
        .filter((circle) => circle.contents !== undefined)
        .filter(
          (circle) =>
            circle.contents?.filter((c) => c.type === "article").length !== 0
        ),
    []
  );
  useEffect(() => {
    if (!defaultId) return;
    setTimeout(() => {
      document
        .getElementById("#" + defaultId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 600);
    setIndex(data.findIndex((circle) => circle.id === defaultId));
  }, [data, defaultId]);

  const media = useResponsive();
  const halfLength = useMemo(() => Math.ceil(data.length / 2), [data.length]);

  return (
    <ChakraProvider>
      <div
        className="mb-10 flex gap-8 font-bold"
        style={{
          minHeight:
            (media === MediaType.Desktop ? halfLength : data.length) * 60 + 300,
        }}
      >
        {media === MediaType.Desktop ? (
          <>
            <Accordion
              index={index < halfLength ? index : -1}
              onChange={(i) => {
                if (typeof i !== "number") {
                  return;
                }
                setIndex(i);
              }}
            >
              {data.map((circle, i) => {
                return (
                  i < halfLength && <Article key={circle.id} circle={circle} />
                );
              })}
            </Accordion>
            <div className="min-h-full w-[1px] bg-black" />
            <Accordion
              index={index >= halfLength ? index - halfLength : -1}
              onChange={(i) => {
                if (typeof i !== "number") {
                  return;
                }
                setIndex(i + halfLength);
              }}
            >
              {data.map((circle, i) => {
                return (
                  i >= halfLength && <Article key={circle.id} circle={circle} />
                );
              })}
            </Accordion>
          </>
        ) : (
          <Accordion
            index={index}
            onChange={(i) => {
              if (typeof i !== "number") {
                return;
              }
              setIndex(i);
            }}
          >
            {data.map((circle) => {
              return <Article key={circle.id} circle={circle} />;
            })}
          </Accordion>
        )}
      </div>
    </ChakraProvider>
  );
};
