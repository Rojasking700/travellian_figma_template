'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import Berlin from '~/public/imgs/LandingPage/popular/Berlin.png';
import Lisbon from '~/public/imgs/LandingPage/popular/Lisbon.png';
import London from '~/public/imgs/LandingPage/popular/London.png';
import Venice from '~/public/imgs/LandingPage/popular/Venice.png';
import styles from '~/scss/LandingPage/hero.module.scss';
import useEmblaCarousel from 'embla-carousel-react';

export default function Popular() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ container: `.${styles.embla__container}`, loop: true, align: 'start',  })


  const scrollPrev = useCallback(() => { 
    console.log(emblaApi.containerNode())
    if (emblaApi) emblaApi.scrollPrev() 
    }, [emblaApi])
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

  return (
    
    <div className={`${styles.cardSection} ${styles.embla__viewport}`} ref={emblaRef}>
      <div className={styles.cardSectionTop}>
        <div className={styles.cardSectionHeading}>
          <h3>Popular Destinations</h3>
          <div className={styles.cardSectionHeadingLine}></div>
          <p>Most popular destinations around the world, from historical places to natural wonders.</p>
        </div>
        <div>
          <button className="embla__prev" onClick={scrollPrev}>Prev</button>
          <button className="embla__next" onClick={scrollNext}>Next</button>
        </div>
      </div>
      <div className={`${styles.embla}`}>

      {/* <div className={`${styles.embla__viewport}`} ref={emblaRef}> */}
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
      </div>
      {/* </div> */}
    </div>
  )
}