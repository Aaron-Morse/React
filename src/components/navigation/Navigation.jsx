import { useState, useEffect } from "react";
import styles from "./navigation.module.css";
import menuIcon from "../../assets/images/icon-menu.svg";
import closeIcon from "../../assets/images/icon-close.svg";

export default function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showNavigation ? "hidden" : "auto";
  }, [showNavigation]);

  function toggleShowNavigation() {
    setShowNavigation((prevValue) => !prevValue);
  }

  return (
    <>
      <img
        src={menuIcon}
        onClick={toggleShowNavigation}
        className={styles.hamburger}
      />
      <nav
        className={
          showNavigation
            ? `${styles.navigation} ${styles.expanded}`
            : styles.navigation
        }
      >
        <ul className={styles.navigationItemsWrapper}>
          <li className={styles.closeIcon}>
            <img src={closeIcon} onClick={toggleShowNavigation} />
          </li>
          <li className={styles.navigationItem}>Collections</li>
          <li className={styles.navigationItem}>Men</li>
          <li className={styles.navigationItem}>Women</li>
          <li className={styles.navigationItem}>About</li>
          <li className={styles.navigationItem}>Contact</li>
        </ul>
      </nav>
    </>
  );
}
