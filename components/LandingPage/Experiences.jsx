'use client'
import Image from 'next/image';
import Doe from '~/public/imgs/LandingPage/experiences/Doe.png';
import Smith from '~/public/imgs/LandingPage/experiences/Smith.png';
import Tamara from '~/public/imgs/LandingPage/experiences/Tamara.png';
import Rating from '~/public/imgs/LandingPage/offer/Rating.png';
import styles from '~/scss/LandingPage/hero.module.scss';
import { Rubik } from "next/font/google";
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons, UseDotButton } from '~/components/shared/embla/EmblaButtons';

const getRubik = Rubik({
  // variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Experiences() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', container: `.${styles.cardSectionReviews}`, })
  const { PrevButton, NextButton, } = usePrevNextButtons(emblaApi);

  const reviews = [
    {
      name: 'John Doe',
      stars: 5,
      description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
      title: 'Accountant',
      img: Doe,
    },
    {
      name: 'John Smith',
      stars: 5,
      description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
      title: 'Journalist, HWD News',
      img: Smith,
    },
    {
      name: 'Tamara Bellis',
      stars: 5,
      description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
      title: 'Managing Director, JTH',
      img: Tamara,
    },
  ]

  return (
    <div className={`${styles.cardSection} embla__viewport`} ref={emblaRef}>
      <div className={styles.cardSectionTop}>
        <div className={styles.cardSectionHeading}>
          <h3>Traveler's Experiences</h3>
          <div className={styles.cardSectionHeadingLine}></div>
          <p className={`${getRubik.className}`} >Here some awesome feedback from our travelers</p>
        </div>
        <div className={styles.cardSectionTopButtons} >
          <PrevButton />
          <NextButton />
        </div>
      </div>
      <div className={styles.cardSectionBottom}>
        <div className={styles.cardSectionReviews}>
          {
            reviews.map((review) => (
              <div key={review.name} className={`${styles.cardSectionReview} ${getRubik.className}`} >
                <Image
                  id={styles.avatar}
                  src={review.img}
                  alt={review.name}
                />
                <p>{review.description}</p>
                <Image
                  src={Rating}
                  alt='Rating'
                />
                <div>
                  <h5 id={styles.cardName} >{review.name}</h5>
                  <p>{review.title}</p>
                </div>
              </div>
            ))
          }
        </div>
        <UseDotButton emblaApi={emblaApi} />
      </div>
    </div>
  )
}