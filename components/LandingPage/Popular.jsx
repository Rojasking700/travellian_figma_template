
import Image from 'next/image';
import BackgrounElement from '~/public/imgs/LandingPage/hero/HeroSection.png';
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
    </div>
  )
}