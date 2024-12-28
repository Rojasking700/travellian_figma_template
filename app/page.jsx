import Image from "next/image";
import Hero from "~/components/LandingPage/Hero";
import Popular from "~/components/LandingPage/Popular";
import styles from '~/scss/_MainLayout.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Popular />
        
      </main>
    </div>
  );
}
