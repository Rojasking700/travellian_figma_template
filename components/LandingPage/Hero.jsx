
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
              <label htmlFor="Choose_destination" >Destination</label>
              <br />
              <select name="Destination"  id="Choose_destination" >
                <option value="Choose destination">Choose a Destination</option>
                {
                  staticCities.map((city) => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                  ))
                }
              </select>
            </div>
            <div>
              <label htmlFor="Choose_people" >People</label>
              <br />
              <select name="People" id="Choose_people">
                <option value="Choose number of people">Choose an option</option>
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
              <label htmlFor="Check_In" >Check in</label>
              <br />
              <input type="date" id="Check_In" name="checkIn"  min="2025-01-01" />
            </div>
            <div>
              <label htmlFor="Check_Out" >Check out</label>
              <br />
              <input type="date" id="Check_Out" name="checkOut"  min="2025-01-01"/>
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

