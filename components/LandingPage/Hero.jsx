
import Image from 'next/image';
import BackgrounElement from '~/public/imgs/LandingPage/hero/HeroSection.png';
import styles from '~/scss/LandingPage/hero.module.scss';
import Form from 'next/form'
import { staticCities } from '../data/cities';

export default function Hero() {

  return (
    <div className={styles.hero}>
      <div className={styles.title}>
        <h1>Start your unforgettable journey with us.</h1>
        <p>The best travel for your jouney begins now</p>
      </div>
      {/* <div> */}
        <Form className={styles.bookContainer}>
          <div className={styles.bookOptions}>
            <div>
              <p>Destination</p>
              <select name="Destination" aria-labelledby="Choose destination" >
                <option value="">Choose a Destination</option>
                {
                  staticCities.map((city) => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                  ))
                }
              </select>
            </div>
            <div>
              <p>People</p>
              <select name="People" aria-labelledby="Choose number of people">
                <option value="">Choose an option</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9+</option>
              </select>
            </div>
            <div>
              <p>Check in</p>
              <input type="date" id="start" name="checkIn"  min="2025-01-01" aria-labelledby="Select Check In"/>
            </div>
            <div>
              <p>Check out</p>
              <input type="date" id="end" name="checkOut"  min="2025-01-01" aria-labelledby="Select Check Out"/>
            </div>
          </div>
          <div className={styles.bookNow}>
            Book Now
          </div>
        </Form>
      {/* </div> */}
      <Image
        src={BackgrounElement}
        alt='Background Element'
        className={styles.backgroundImg}
        priority={true}
      />
    </div>
  )
}

