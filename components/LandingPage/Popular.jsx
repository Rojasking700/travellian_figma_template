'use client'
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Berlin from '~/public/imgs/LandingPage/popular/Berlin.png';
import Lisbon from '~/public/imgs/LandingPage/popular/Lisbon.png';
import London from '~/public/imgs/LandingPage/popular/London.png';
import Venice from '~/public/imgs/LandingPage/popular/Venice.png';
import VectorLeft from '~/public/icons/VectorLeft.png';
import VectorRight from '~/public/icons/VectorRight.png';
import styles from '~/scss/LandingPage/hero.module.scss';
import useEmblaCarousel from 'embla-carousel-react';

export default function Popular() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', container: `.${styles.embla__container}`, })
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

    console.log(emblaApi.slideNodes()) // Access API

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])


  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

  return (
    <div className={`${styles.cardSection} embla__viewport`} ref={emblaRef}>
      <div className={styles.cardSectionTop}>
        <div className={styles.cardSectionHeading}>
          <h3>Popular Destinations</h3>
          <div className={styles.cardSectionHeadingLine}></div>
          <p>Most popular destinations around the world, from historical places to natural wonders.</p>
        </div>
        <div className={styles.cardSectionTopButtons} >
          <button className={`${styles.embla__prev}`} onClick={scrollPrev}>
            <Image
              src={VectorLeft}
              alt="VectorLeft"
              height={20}
              width={10}
            />
          </button>
          <button className={`${styles.embla__next}`} onClick={scrollNext}>
            <Image
              src={VectorRight}
              alt="VectorRight"
              height={20}
              width={10}
            />
          </button>
        </div>
      </div>
      <div className={`${styles.embla}`}>
        <div className={`${styles.embla__container} `}>
          <Image
            src={Berlin}
            alt='Berlin'
            className={`${styles.embla__slide}`}
          />
          <Image
            src={London}
            alt='London'
            className={`${styles.embla__slide}`}
          />
          <Image
            src={Venice}
            alt='Venice'
            className={`${styles.embla__slide}`}
          />
          <Image
            src={Lisbon}
            alt='Lisbon'
            className={`${styles.embla__slide}`}
          />
        </div>

        <div className={`${styles.embla__dots}`}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.embla__dot} 
                ${index === selectedIndex ?  styles.embla__dot_selected : ''}
              `}
            >
              {/* {index} */}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}