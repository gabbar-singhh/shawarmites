import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_main}>
      <div className={styles.hero_container}>

      <h1 className={styles.hero_h1}>
        FAT FREE
      </h1>

      <img src="/assets/shawarma_hero.png" alt="shawarma img" />

      <h1 className={styles.hero_h1}>YOUR MIND</h1>
      </div>
    </section>
  );
};

export default Hero;
