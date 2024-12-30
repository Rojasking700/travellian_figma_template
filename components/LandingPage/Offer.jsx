
import Image from 'next/image';
import Lisbon from '~/public/imgs/LandingPage/offer/Lisbon.png';
import Athens from '~/public/imgs/LandingPage/offer/Athens.png';
import Rome from '~/public/imgs/LandingPage/offer/Rome.png';
import Rating from '~/public/imgs/LandingPage/offer/Rating.png';
import styles from '~/scss/LandingPage/hero.module.scss';
import { Rubik  } from "next/font/google";

const getRubik = Rubik({
  // variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Offer() {

  const offers = [
    {
      city: 'Lisbon, Portugal',
      stars: 5,
      description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
      price: 500,
      img: Lisbon,
    },
    {
      city: 'Athens, Greece',
      stars: 5,
      description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
      price: 800,
      img: Athens,
    },
    {
      city: 'Rome, Italy',
      stars: 5,
      description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
      price: 750,
      img: Rome,
    },
  ]

  return (
    <div className={`${styles.cardSection} ${getRubik.className}`}>
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
              <div key={offer.city} className={styles.cardSectionOffer} >
                <Image
                  src={offer.img}
                  alt={offer.city}
                />
                <div className={styles.cardSectionOfferBottom}>
                  <div>
                    <h5 id={styles.cardCity} >{offer.city}</h5>
                    <Image
                      src={Rating}
                      alt='Rating'
                    />

                  </div>
                  <p>{offer.description}</p>
                  <div className={styles.cardSectionOfferFooter}>
                    <h4>From <span>${offer.price}</span> </h4>
                    <button>DETAILS</button>
                  </div>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}