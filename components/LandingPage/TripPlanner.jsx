'use client'
import Image from 'next/image';
import Colosseum from '~/public/imgs/LandingPage/tripPlanner/Colosseum.png';
import EiffelTower from '~/public/imgs/LandingPage/tripPlanner/EiffelTower.png';
import City from '~/public/imgs/LandingPage/tripPlanner/City.png';
import Statue from '~/public/imgs/LandingPage/tripPlanner/Statue.png';
import styles from '~/scss/LandingPage/hero.module.scss';
import { Rubik } from "next/font/google";
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons, UseDotButton } from '~/components/shared/embla/EmblaButtons';

const getRubik = Rubik({
  // variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function TripPlanner() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', container: `.${styles.tripPlannerTrips}`, })
  const { PrevButton, NextButton, } = usePrevNextButtons(emblaApi);

  return (
    <div className={`${styles.tripPlanner} embla__viewport`} ref={emblaRef}>
      <div className={styles.cardSectionHeading}>
        <h3>Trip Planners</h3>
        <div className={styles.cardSectionHeadingLine}></div>
        <p className={`${getRubik.className}`} >20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines.</p>
        <div className={styles.cardSectionTopButtons} >
          <PrevButton />
          <NextButton />
        </div>
        <UseDotButton emblaApi={emblaApi} />
      </div>
      <div className={`${styles.embla}`} >

        <div className={`${styles.tripPlannerTrips}`}>
          <Image
            src={Colosseum}
            alt='Colosseum'
            className={`${styles.tripPlannerLoc}`}
          />
          <Image
            src={EiffelTower}
            alt='EiffelTower'
            className={`${styles.tripPlannerLoc}`}
          />
          <Image
            src={City}
            alt='City'
            className={`${styles.tripPlannerLoc}`}
          />
          <Image
            src={Statue}
            alt='Statue'
            className={`${styles.tripPlannerLoc}`}
          />
        </div>
      </div>
    </div>
  )
}