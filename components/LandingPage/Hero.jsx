
import Image from 'next/image';
import BackgrounElement from '~/public/imgs/LandingPage/hero/HeroSection.png';
import styles from '~/scss/LandingPage/hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.title}>
      <h1>Start your unforgettable journey with us.</h1>
      <p>The best travel for your jouney begins now</p>

      </div>
      <Image
        src={BackgrounElement}
        alt='Background Element'
        // fill
        className={styles.backgroundImg}
      />
    </div>
  )
}