
import Image from 'next/image';
import BackgrounElement from '~/public/imgs/LandingPage/hero/HeroSection.png';
import styles from '~/scss/LandingPage/hero.module.scss';

export default function Hero() {
  return (
    <div>
      <h1>Start your unforgettable journey with us.</h1>
      <Image
        src={BackgrounElement}
        alt='Background Element'
        // fill
        className={styles.backgroundImg}
      />
    </div>
  )
}