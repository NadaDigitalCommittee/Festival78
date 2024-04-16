"use client";
import { data } from "@/lib/data/circles";
import { useResponsive, MediaType } from "@/lib/hooks/useResponsive";
import { FC, useEffect, useMemo, useState } from "react";
import { Circle } from "./Circle";
import { Accordion } from "@chakra-ui/accordion";
import { ChakraProvider } from "@chakra-ui/provider";

export const CircleAcordion: FC = () => {
  const [defaultId, setDefaultId] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setDefaultId(window.location.hash.replace("#", "") ?? "");
  }, [defaultId]);

  useEffect(() => {
    if (!defaultId) return;
    setTimeout(() => {
      document
        .getElementById("#" + defaultId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
    setIndex(data.findIndex((circle) => circle.id === defaultId));
  }, [defaultId]);

  const media = useResponsive();
  const halfLength = useMemo(() => Math.ceil(data.length / 2), []);
  return (
    <ChakraProvider>
      <div
        className="mb-10 flex gap-8"
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
                  i < halfLength && (
                    <Circle
                      id={circle.id}
                      key={circle.id}
                      logoSrc={
                        circle.hasLogo
                          ? `/img/circles/${circle.id}.webp`
                          : undefined
                      }
                      place={circle.place}
                      title={circle.name}
                      eventHref={`/events?id=${circle.id}`}
                      mapHref={`/maps?id=${circle.id}`}
                      articles={circle.articles}
                      description={circle.description}
                    />
                  )
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
                  i >= halfLength && (
                    <Circle
                      id={circle.id}
                      key={circle.id}
                      logoSrc={
                        circle.hasLogo
                          ? `/img/circles/${circle.id}.webp`
                          : undefined
                      }
                      place={circle.place}
                      title={circle.name}
                      eventHref={`/events?id=${circle.id}`}
                      mapHref={`/maps?id=${circle.id}`}
                      articles={circle.articles}
                      description={circle.description}
                    />
                  )
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
              return (
                <Circle
                  id={circle.id}
                  key={circle.id}
                  logoSrc={
                    circle.hasLogo
                      ? `/img/circles/${circle.id}.webp`
                      : undefined
                  }
                  place={circle.place}
                  title={circle.name}
                  eventHref={`/events?id=${circle.id}`}
                  mapHref={`/maps?id=${circle.id}`}
                  articles={circle.articles}
                  description={circle.description}
                />
              );
            })}
          </Accordion>
        )}
      </div>
    </ChakraProvider>
  );
};
