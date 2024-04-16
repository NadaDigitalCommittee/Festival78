"use client";

import { MediaType, useResponsive } from "@/lib/hooks/useResponsive";
import { Accordion } from "@chakra-ui/accordion";
import { ChakraProvider } from "@chakra-ui/provider";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { data } from "../../lib/data/circles";
import { Circle } from "@/components/circles/Circle";

export default function Page() {
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
  const starSize = useMemo(
    () =>
      media === MediaType.Desktop ? 70 : media === MediaType.Tablet ? 60 : 30,
    [media]
  );
  const halfLength = useMemo(() => Math.ceil(data.length / 2), []);

  return (
    <ChakraProvider>
      <div className="flex flex-col items-center font-zen_kaku_gothic_new">
        <div className="relative mb-16 mt-12 font-south_amsterdam text-6xl text-theme md:text-7xl lg:text-9xl">
          Circles
          <div className="absolute left-0 top-0 -translate-x-full -translate-y-1/2">
            <Image
              src={"/img/top/star.svg"}
              width={starSize}
              height={starSize}
              alt=""
            />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-full translate-y-1/2">
            <Image
              src={"/img/top/star.svg"}
              width={starSize}
              height={starSize}
              alt=""
            />
          </div>
        </div>
        <div
          className="mb-10 flex gap-8"
          style={{
            minHeight:
              (media === MediaType.Desktop ? halfLength : data.length) * 60 +
              300,
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
      </div>
    </ChakraProvider>
  );
}