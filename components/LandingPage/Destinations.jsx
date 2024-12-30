
import Image from 'next/image';
import PaintingMan from '~/public/imgs/LandingPage/destinations/PaintingMan.png';
import Ocean from '~/public/imgs/LandingPage/destinations/Ocean.png';
import Woman from '~/public/imgs/LandingPage/destinations/Woman.png';
import Man from '~/public/imgs/LandingPage/destinations/Man.png';
import styles from '~/scss/LandingPage/hero.module.scss';

export default function Destinations() {

  return (
    <div className={styles.cardSection}>
      <div className={styles.cardSectionTop}>
        <div className={styles.cardSectionHeading}>
          <h3>Destination Gallery</h3>
          <div className={styles.cardSectionHeadingLine}></div>
          <p>Our photo gallery on trip</p>
        </div>
      </div>
      <div className={styles.cardSectionBottom}>
        <div className={styles.cardSectionCards}>
          <Image
            src={PaintingMan}
            alt='PaintingMan'
          />
          <Image
            src={Ocean}
            alt='Ocean'
          />
          <Image
            src={Woman}
            alt='Woman'
          />
          <Image
            src={Man}
            alt='Man'
          />
        </div>
      </div>
    </div>
  )
}