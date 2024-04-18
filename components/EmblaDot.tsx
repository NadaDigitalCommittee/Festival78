import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <div>
    <button type="button" {...restProps}>
      {children}
    </button>
    <style jsx>{`
    .embla__dot {
      -webkit-tap-highlight-color: rgba(49, 49, 49), 0.5);
      -webkit-appearance: none;
      appearance: none;
      background-color: transparent;
      touch-action: manipulation;
      display: inline-flex;
      text-decoration: none;
      cursor: pointer;
      border: 0;
      padding: 0;
      margin: 0;
      width: 2.6rem;
      height: 2.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    .embla__dot:after {
      box-shadow: inset 0 0 0 0.2rem rgb(234, 234, 234);
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      content: '';
    }
    .embla__dot--selected:after {
      box-shadow: inset 0 0 0 0.2rem rgb(54, 49, 61);
    }
  `}</style>
  </div>
  )
}
