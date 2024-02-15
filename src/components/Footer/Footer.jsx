import React from "react";
import styles from "./Footer.module.css";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Marquee
      className={styles.footer}
        autoFill={true}
        style={{
          backgroundColor: "var(--secondary-bg-color)",
          position: "relative",
        }}
      >
        <img src="/assets/curl_circle.png" height={20} alt="" className={styles.curl_img} />
        <p>100% fat free</p>
        <img src="/assets/curl_circle.png" height={20} alt="" className={styles.curl_img} />
        <p>rich in protein</p>
        <img src="/assets/curl_circle.png" height={20} alt="" className={styles.curl_img} />
        <p>dairy free</p>
      </Marquee>
    </footer>
  );
};

export default Footer;