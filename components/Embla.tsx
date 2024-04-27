import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
      <button
        className="flex items-center justify-center size-full rounded-[50%] disabled:text-theme/50"
        type="button"
        {...restProps}
      >
        {/* <svg className="size-[35%]" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        </svg> */}
        <svg className="size-[75%]" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M1.41413 22.5865C0.633118 23.3676 0.633138 24.6339 1.41417 25.4149L22.5851 46.5859C23.3661 47.3669 24.6324 47.3669 25.4135 46.586L29.3189 42.681C30.1001 41.9 30.1001 40.6336 29.319 39.8525L14.8814 25.4149C14.1004 24.6339 14.1004 23.3676 14.8814 22.5865L29.3191 8.14744C30.1002 7.36634 30.1001 6.09998 29.319 5.31898L25.4135 1.41406C24.6324 0.633087 23.3661 0.633152 22.5851 1.4142L1.41413 22.5865Z"
          />
        </svg>
        {children}
      </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
      <button
        className="flex items-center justify-center size-full rounded-[50%] disabled:text-theme/50"
        type="button"
        {...restProps}
      >
        {/* <svg className="size-[35%]" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        </svg> */}
        <svg className="size-[75%]" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M28.5859 25.4135C29.3669 24.6324 29.3669 23.3661 28.5858 22.5851L7.41487 1.41412C6.63386 0.63311 5.3676 0.633071 4.58653 1.41404L0.681072 5.319C-0.10006 6.10004 -0.1001 7.36644 0.680983 8.14752L15.1186 22.5851C15.8996 23.3661 15.8996 24.6324 15.1186 25.4135L0.680862 39.8526C-0.100164 40.6337 -0.10009 41.9 0.681026 42.681L4.58649 46.5859C5.36757 47.3669 6.63386 47.3668 7.41486 46.5858L28.5859 25.4135Z"
          />
        </svg>
        {children}
      </button>
  )
}

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
