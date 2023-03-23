import Navigation from "../navigation/Navigation";
import Cart from "../cart/Cart";
import Account from "../account/Account";
import styles from "./header.module.css";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Navigation />
      <img className={styles.logo} src={logo} />
      <Cart />
      <Account />
    </header>
  );
}
