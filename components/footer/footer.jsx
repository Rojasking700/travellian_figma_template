import styles from '~/scss/MainFooter/MainFooter.module.scss';
import logo from '~/public/imgs/logos/Logo.png';
import Image from "next/image";
import Link from "next/link";
import SocialIcons from '~/public/imgs/footer/SocialIcons.png';
import { Rubik } from "next/font/google";

const getRubik = Rubik({
  // variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function MainFooter() {

  const links = [
    {
      title: 'Menu',
      links: [
        'Home',
        'Explore',
        'Travel',
        'Blog',
        'Pricing',
      ],
    },
    {
      title: 'Information',
      links: [
        'Destinations',
        'Supports',
        'Terms & Conditions',
        'Privacy',
      ],
    },
    {
      title: 'Contact Info',
      links: [
        '+123 456 789',
        'info@travellian.com',
        '1245, New Yourk, USA'
      ],
    },
  ]

  return (
    <footer className={`${styles.mainFooter} ${getRubik.className}`}>
      <div className={styles.footerTop} > {/* top */}

        <div className={styles.footerLogo} > {/* logo */}
          <Link href={'/'} >
            <Image
              src={logo}
              alt="Whitespace logo"
              width={191}
              height={34}
              priority={true}
            />
          </Link>
          <p>
            Copyright © Travellian 2020 All rights reserved
          </p>
        </div>

        {
          links.map((link, index) => (
            <div className={styles.linkDiv} key={index}>
              <h5>{link.title}</h5>
              <ul>
                {link.links.map((lin, index) => (
                  <li key={index} >{lin}</li>
                ))}
              </ul>
            </div>
          ))
        }

        <div className={styles.tryTodayFooter} > {/* try today */}
          <h5>Follow us on </h5>
          <Image
            src={SocialIcons}
            alt='App Icons'
          />

        </div>
      </div>
    </footer>
  )
}