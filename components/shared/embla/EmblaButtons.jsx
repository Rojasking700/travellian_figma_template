'use client'
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import VectorLeft from '~/public/icons/VectorLeft.png';
import VectorRight from '~/public/icons/VectorRight.png';
import emblaStyles from '~/scss/embla/embla.module.scss';
import useEmblaCarousel from 'embla-carousel-react';

export function usePrevNextButtons(emblaApi) {

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi]);

  const PrevButton = useCallback(() => (
    <button className={`${emblaStyles.embla__prev}`} onClick={scrollPrev}>
      <Image
        src={VectorLeft}
        alt="VectorLeft"
        height={20}
        width={10}
      />
    </button>
  ))
  const NextButton = useCallback(() => (
    <button className={`${emblaStyles.embla__next}`} onClick={scrollNext}>
      <Image
        src={VectorRight}
        alt="VectorRight"
        height={20}
        width={10}
      />
    </button>
  ))

  return {
    scrollNext,
    scrollPrev,
    PrevButton,
    NextButton
  }
}

export function UseDotButton({ emblaApi }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi) => {
    console.log(emblaApi.scrollSnapList());
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    console.log(emblaApi.selectedScrollSnap());
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])


  return (
    <div className={`${emblaStyles.embla__dots}`}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={`${emblaStyles.embla__dot}  ${index === selectedIndex ? emblaStyles.embla__dot_selected : ''} `}
          aria-label={`Carousel Item ${index}`}
        >
        </button>
      ))}
    </div>
  )

}