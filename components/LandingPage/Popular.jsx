'use client'
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Berlin from '~/public/imgs/LandingPage/popular/Berlin.png';
import Lisbon from '~/public/imgs/LandingPage/popular/Lisbon.png';
import London from '~/public/imgs/LandingPage/popular/London.png';
import Venice from '~/public/imgs/LandingPage/popular/Venice.png';
import styles from '~/scss/LandingPage/hero.module.scss';
import useEmblaCarousel from 'embla-carousel-react';
import {usePrevNextButtons, UseDotButton } from '~/components/shared/embla/EmblaButtons';
import emblaStyles from '~/scss/embla/embla.module.scss';

export default function Popular() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', container: `.${styles.embla__container}`, })
  const { PrevButton, NextButton, } = usePrevNextButtons(emblaApi);

  return (
    <div className={`${styles.cardSection} embla__viewport`} ref={emblaRef}>
      <div className={styles.cardSectionTop}>
        <div className={styles.cardSectionHeading}>
          <h3>Popular Destinations</h3>
          <div className={styles.cardSectionHeadingLine}></div>
          <p>Most popular destinations around the world, from historical places to natural wonders.</p>
        </div>
        <div className={styles.cardSectionTopButtons} >
          <PrevButton />
          <NextButton />
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
        <UseDotButton emblaApi={emblaApi} />
      </div>
    </div>
  )
}