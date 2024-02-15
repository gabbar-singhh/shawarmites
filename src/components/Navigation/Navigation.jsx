import React, { useEffect, useRef } from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const threshold = 200;

      if (scrollTop > threshold) {
        // document.body.style.backgroundColor = "#ac51ff"; // page end color
      } else {
        document.body.style.backgroundColor = "#461f0a"; // page start color
      }

      if (scrollTop > lastScrollTop) {
        navbarRef.current.style.top = "-80px";
      } else {
        navbarRef.current.style.top = "0";
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={styles.nav}
      id="nav"
      ref={navbarRef}
      style={{ position: "fixed", width: "100%", top: "0", zIndex: "100" }}
    >
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <Link href="/">About</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/">Products</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/">SHAWARMITES</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/">Recipes</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;