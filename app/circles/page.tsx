"use client"

import { Accordion } from "@chakra-ui/accordion"
import { ChakraProvider } from "@chakra-ui/provider"
import { useEffect } from "react"
import { Circle } from "./Circle"
import { data } from "./circles"

export default function Page() {
  
  useEffect(() => {
    const defaultId = window.location.hash
    document.getElementById(defaultId)?.scrollIntoView()
  }, [])

  return (
    <ChakraProvider>
      <div className="font-zen_kaku_gothic_new">
      <Accordion>
        {data.map(circle => {
          return (
            <Circle
              key={circle.id}
              logoSrc={circle.hasLogo?`/img/circles/${circle.id}.webp`:undefined}
              place={circle.place}
              title={circle.name}
              eventHref={`/events?id=${circle.id}`}
              mapHref={`/maps?id=${circle.id}`}
              articles={circle.articles}
              description={circle.description}
            />
          )
        })}
      </Accordion>
      </div>
    </ChakraProvider>
  )
}