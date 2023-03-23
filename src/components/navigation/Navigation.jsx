import { useState } from "react";
import styles from "./navigation.module.css";
import menuIcon from "../../assets/images/icon-menu.svg";
import closeIcon from "../../assets/images/icon-close.svg";

export default function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false);

  function toggleShowNavigation() {
    setShowNavigation((prevValue) => !prevValue);
  }

  return (
    <>
      <img src={menuIcon} onClick={toggleShowNavigation} />
      {showNavigation && (
        <nav>
          <ul>
            <li>
              <img src={closeIcon} onClick={toggleShowNavigation} />
            </li>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </>
  );
}
