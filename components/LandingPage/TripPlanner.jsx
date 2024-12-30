import Image from 'next/image';
import Colosseum from '~/public/imgs/LandingPage/TripPlanner/Colosseum.png';
import City from '~/public/imgs/LandingPage/TripPlanner/City.png';
import EiffelTower from '~/public/imgs/LandingPage/TripPlanner/EiffelTower.png';
import Statue from '~/public/imgs/LandingPage/TripPlanner/Statue.png';
import styles from '~/scss/LandingPage/hero.module.scss';
import { Rubik } from "next/font/google";
import Link from 'next/link';

const getRubik = Rubik({
  // variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function TripPlanner() {

  return (
    <div className={`${styles.tripPlanner}`}>
      <div className={styles.cardSectionHeading}>
        <h3>Trip Planners</h3>
        <div className={styles.cardSectionHeadingLine}></div>
        <p className={`${getRubik.className}`} >20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines.</p>
      </div>
      <div className={`${styles.tripPlannerTrips}`}>
        <Image
          src={Colosseum}
          alt='Colosseum'
        />
        <Image
          src={EiffelTower}
          alt='EiffelTower'
        />
        <Image
          src={City}
          alt='City'
        />
        <Image
          src={Statue}
          alt='Statue'
        />
      </div>
    </div>
  )
}