import Image from "next/image";
import Hero from "~/components/LandingPage/Hero";
import Offer from "~/components/LandingPage/Offer";
import OurBlog from "~/components/LandingPage/OurBlog";
import Popular from "~/components/LandingPage/Popular";
import TripPlanner from "~/components/LandingPage/TripPlanner";
import styles from '~/scss/_MainLayout.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Popular />
        <Offer />
        <OurBlog />
        <TripPlanner />
      </main>
    </div>
  );
}
