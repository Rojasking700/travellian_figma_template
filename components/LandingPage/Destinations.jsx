'use client'
import Image from 'next/image';
import PaintingMan from '~/public/imgs/LandingPage/destinations/PaintingMan.png';
import Ocean from '~/public/imgs/LandingPage/destinations/Ocean.png';
import Woman from '~/public/imgs/LandingPage/destinations/Woman.png';
import Man from '~/public/imgs/LandingPage/destinations/Man.png';
import styles from '~/scss/LandingPage/hero.module.scss';
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons, UseDotButton } from '~/components/shared/embla/EmblaButtons';

export default function Destinations() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', container: `.${styles.cardSectionCards}`, })
  const { PrevButton, NextButton, } = usePrevNextButtons(emblaApi);

  return (
    <div className={`${styles.cardSection} embla__viewport`} ref={emblaRef}>
      <div className={styles.cardSectionTop}>
        <div className={styles.cardSectionHeading}>
          <h3>Destination Gallery</h3>
          <div className={styles.cardSectionHeadingLine}></div>
          <p>Our photo gallery on trip</p>
        </div>
        <div className={styles.cardSectionTopButtons} >
          <PrevButton />
          <NextButton />
        </div>
      </div>
      <div className={`${styles.cardSectionBottom} ${styles.embla}`}>
      <div className={`${styles.cardSectionCards} `}>
          <Image
            src={PaintingMan}
            alt='PaintingMan'
            className={`${styles.cardSectionDestination}`}
          />
          <Image
            src={Ocean}
            alt='Ocean'
            className={`${styles.cardSectionDestination}`}
          />
          <Image
            src={Woman}
            alt='Woman'
            className={`${styles.cardSectionDestination}`}
          />
          <Image
            src={Man}
            alt='Man'
            className={`${styles.cardSectionDestination}`}
          />
        </div>
      </div>
      <UseDotButton emblaApi={emblaApi} />
    </div>
  )
}