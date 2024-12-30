
import Image from 'next/image';
import BlogImage from '~/public/imgs/LandingPage/blog/BlogImage.png';
import styles from '~/scss/LandingPage/hero.module.scss';
import { Rubik  } from "next/font/google";
import Link from 'next/link';

const getRubik = Rubik({
  // variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function OurBlog() {


  return (
    <div className={`${styles.cardSection}`}>
      <div className={styles.cardSectionTop}>
        <div className={styles.cardSectionHeading}>
          <h3>Our Blog</h3>
          <div className={styles.cardSectionHeadingLine}></div>
          <p className={`${getRubik.className}`} >An insight the incredible experience in the world</p>
        </div>
        <div>

        </div>
      </div>
      <div className={styles.blogSection}>
        <div>
          <Image 
            src={BlogImage}
            alt='Blog Image'
          />
        </div>
        <div className={styles.blogSectionArticle} >
          <h3>Beautiful Italy Let's travel</h3>
          <p  className={`${getRubik.className}`}>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
            I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, 
            the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, 
            but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. 
            Nor again is there anyone who loves or pursues.
          </p>
          <Link href='#' className={`${getRubik.className}`} >Read More {'->'} </Link>
        </div>

      </div>
    </div>
  )
}