import Image from 'next/image';
import logo from '~/public/imgs/logos/Logo.png';
import styles from '~/scss/nav/navbar.module.scss';
import Link from 'next/link';
import { Rubik } from "next/font/google";
import HumMenu from '~/public/icons/HumMenu.png';

const getRubik = Rubik({
  // variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function NavBar() {
  return (
    <nav className={`${styles.navbar} ${getRubik.className}`}>
      <div>
        <Image
          src={logo}
          alt='Background Element'
          width={235}
          height={45}
          priority={true}
        />
      </div>
      <div  className={styles.navLinks}>
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Travel</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className={styles.navLogin}>
        <Link href={'#'}>Login</Link>
        <Link href={'#'} className={styles.signUp}>Sign Up</Link>
      </div>

      <Image
        id={styles.HumMenu}
        src={HumMenu}
        alt="HumMenu"
        width={29}
        height={24}
      />
    </nav>
  )

}