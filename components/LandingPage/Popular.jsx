
import Image from 'next/image';
import Berlin from '~/public/imgs/LandingPage/popular/Berlin.png';
import Lisbon from '~/public/imgs/LandingPage/popular/Lisbon.png';
import London from '~/public/imgs/LandingPage/popular/London.png';
import Venice from '~/public/imgs/LandingPage/popular/Venice.png';
import styles from '~/scss/LandingPage/hero.module.scss';

export default function Popular() {

  return (
    <div className={styles.cardSection}>
      <div className={styles.cardSectionTop}>
        <div className={styles.cardSectionHeading}>
          <h3>Popular Destinations</h3>
          <div className={styles.cardSectionHeadingLine}></div>
          <p>Most popular destinations around the world, from historical places to natural wonders.</p>
        </div>
      </div>
      <div className={styles.cardSectionBottom}>
        <div className={styles.cardSectionCards}>
          <Image
            src={Berlin}
            alt='Berlin'
          />
          <Image
            src={London}
            alt='London'
          />
          <Image
            src={Venice}
            alt='Venice'
          />
          <Image
            src={Lisbon}
            alt='Lisbon'
          />
        </div>
      </div>
    </div>
  )
}