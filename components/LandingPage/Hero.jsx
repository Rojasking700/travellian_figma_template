
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
      <div className={styles.bookContainer}>
        <div className={styles.bookOptions}>
          <div>
            <p>Destination</p>
          </div>
          <div>
            <p>Person</p>
          </div>
          <div>
            <p>Check in</p>
          </div>
          <div>
            <p>Check out</p>
          </div>
        </div>
        <div className={styles.bookNow}>
          Book Now
        </div>
      </div>
      <Image
        src={BackgrounElement}
        alt='Background Element'
        className={styles.backgroundImg}
      />
    </div>
  )
}