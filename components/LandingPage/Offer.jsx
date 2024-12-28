
import Image from 'next/image';
import Berlin from '~/public/imgs/LandingPage/popular/Berlin.png';
import Lisbon from '~/public/imgs/LandingPage/popular/Lisbon.png';
import London from '~/public/imgs/LandingPage/popular/London.png';
import Venice from '~/public/imgs/LandingPage/popular/Venice.png';
import styles from '~/scss/LandingPage/hero.module.scss';

export default function Offer() {

  const offers = [
    {
      city: 'Lisbon, Portugal',
      stars: 5,
      description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
      price: 500,
      img: '',
    },
    {
      city: 'Athens, Greece',
      stars: 5,
      description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
      price: 800,
      img: '',
    },
    {
      city: 'Rome, Italy',
      stars: 5,
      description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
      price: 750,
      img: '',
    },
  ]

  return (
    <div className={styles.cardSection}>
      <div className={styles.cardSectionTop}>
        <div className={styles.cardSectionHeading}>
          <h3>Special Offer</h3>
          <div className={styles.cardSectionHeadingLine}></div>
          <p>Check out our special offer and discounts.</p>
        </div>
        <div>

        </div>
      </div>
      <div className={styles.cardSectionBottom}>
        <div className={styles.cardSectionCards}>
          {
            offers.map((offer) => (
              <div key={offer.city}>
                <h5>{offer.city}</h5>
                <p>{offer.description}</p>
                <h4>From ${offer.price} </h4>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}