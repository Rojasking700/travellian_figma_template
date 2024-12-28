import Image from 'next/image';
import logo from '~/public/imgs/logos/Logo.png';
import styles from '~/scss/LandingPage/hero.module.scss';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <div>
        <Image
          src={logo}
          alt='Background Element'
        />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Travel</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div>
        <Link href={'#'}>Login</Link>
        <Link  href={'#'}>Sign Up</Link>
      </div>
    </nav>
  )

}