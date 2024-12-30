import { Playfair_Display, Rubik  } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import styles from '~/scss/_MainLayout.module.scss';
import NavBar from "~/components/nav/navbrar";

const getPlayfairDisplay = Playfair_Display({
  // variable: "--font-geist-sans",
  subsets: ["latin"],
});

const getRubik = Rubik({
  // variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travellian",
  description: "Start your unforgettable journey with us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${getPlayfairDisplay.className} ${getRubik.className}`}> */}
      <body className={`${getPlayfairDisplay.className} ${styles.layout_container}`}>
        <NavBar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
