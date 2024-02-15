import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/HeroSection/Hero";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shawarmites | Fat free your mind</title>
        <meta name="description" content="the only shawarma brand you need" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Protest+Riot&display=swap"
          rel="stylesheet"
        />

        {/* h1 wala */}
        <link href="https://fonts.googleapis.com/css2?family=Barriecito&family=Passion+One:wght@400;700;900&display=swap" rel="stylesheet"/>


      </Head>
      <main
        className={styles.main}
      >
        <Navigation />
        <Hero />
        <Footer/>
      </main>
    </>
  );
}
